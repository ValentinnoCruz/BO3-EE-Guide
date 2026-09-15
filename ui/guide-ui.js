/* Shared behavior for the image-first guides; no network dependencies. */
(function(){
 function init(){
  const sequenceCards=[...document.querySelectorAll('.card[data-sequence]')].filter(c=>c.dataset.sequence);
  for(const key of new Set(sequenceCards.map(c=>c.dataset.sequence))){
   const items=sequenceCards.filter(c=>c.dataset.sequence===key);const panel=document.createElement('section');panel.className='ordered-reference';panel.setAttribute('aria-label','Painting interaction order');
   panel.innerHTML='<div class="ordered-reference-intro"><h3>🐺 Painting order</h3><p>Interact in this order: 1 → 2 → 3 → 4. The painting rooms change each game.</p></div><div class="ordered-reference-grid"></div><p class="ordered-reference-note">A wolf howl confirms the full sequence. If you select the wrong painting, restart from 1. Select an image to enlarge it.</p>';
   items[0].before(panel);const grid=panel.querySelector('.ordered-reference-grid');items.forEach(c=>{grid.appendChild(c);c.querySelector('h3').textContent=c.dataset.sequenceLabel});
  }
  const careCards=[...document.querySelectorAll('.card[data-care-group]')].filter(c=>c.dataset.careGroup);
  for(const key of new Set(careCards.map(c=>c.dataset.careGroup))){
   const items=careCards.filter(c=>c.dataset.careGroup===key),rainbow=key==='rainbow-care';const panel=document.createElement('section');panel.className='care-reference';
   panel.innerHTML='<h3>'+ (rainbow?'🌈 Rainbow plant — three rounds':'🌱 Shell plants — three rounds')+'</h3><p class="care-recipe">'+(rainbow?'Plant one seed in the hidden underwater planter. Water that same plant with RAINBOW water once per round for three consecutive rounds. Return to air after each visit.':'For each of three consecutive rounds: water every plant in your batch with BLUE water, then shoot each with the KT-4 or Masamune before ending the round. Keep using the same plants.')+'</p><div class="care-photo"></div><div class="care-rounds"></div><p class="care-warning"></p>';
   items[0].before(panel);const photo=items[0].querySelector('.action-gallery,.imgwrap');if(photo)panel.querySelector('.care-photo').appendChild(photo);
   const warnings=[...new Set(items.flatMap(c=>[...c.querySelectorAll('.warn')].map(w=>w.textContent.replace(/^Watch out:\s*/,''))))];panel.querySelector('.care-warning').textContent=warnings.length?'Watch out: '+warnings.join(' '):'';
   items.forEach(c=>{panel.querySelector('.care-rounds').appendChild(c);c.querySelector('h3').textContent=c.dataset.careLabel;c.querySelectorAll('.action-gallery,.imgwrap').forEach(e=>e.remove())});
  }
  const bombResult=document.getElementById('bomb-result');
  if(bombResult){
   const bar=document.createElement('aside');bar.className='bomb-reference';bar.hidden=true;bar.setAttribute('aria-label','Recorded bomb defuse order');bar.innerHTML='<strong>💣 Defuse in this recorded order</strong><ol></ol>';document.body.appendChild(bar);
   const visible=new Set();const sync=()=>{const list=[...bombResult.querySelectorAll('li')];bar.querySelector('ol').replaceChildren(...list.map(li=>{const item=document.createElement('li');item.textContent=li.textContent;return item}));bar.hidden=list.length!==6||!visible.size;document.body.classList.toggle('bomb-reference-active',!bar.hidden)};
   new MutationObserver(sync).observe(bombResult,{subtree:true,childList:true,characterData:true});
   const observer=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target):visible.delete(e.target));sync()});document.querySelectorAll('.card[data-id^="BOMB-"]').forEach(c=>observer.observe(c));sync();
  }
  const brand='<span class="guide-brand">Guide by <strong>Lofijedi</strong></span>';
  const top=document.querySelector('header .top');top.insertAdjacentHTML('beforeend',brand);
  const lightbox=document.getElementById('imageLightbox');if(lightbox)lightbox.insertAdjacentHTML('beforeend',brand);

  const pane=document.querySelector('.guide-pane');
  const sidebar=document.querySelector('.guide-sidebar');
  document.querySelectorAll('.navbtn').forEach((b,i)=>{const sec=document.getElementById(b.dataset.go);const icon=sec.querySelector('.heading-icon');b.textContent=(icon?icon.textContent:'')+' '+b.textContent.replace(/^\d+\s*/, '');b.appendChild(Object.assign(document.createElement('span'),{className:'nav-count'}))});
  sidebar.insertAdjacentHTML('beforeend','<div class="guide-options"><label><input type="checkbox" id="hide-completed"> Hide completed</label></div><div class="guide-totals" aria-live="polite"></div>');
  sidebar.insertAdjacentHTML('beforeend',brand);
  const toolbar=document.createElement('div');toolbar.className='guide-toolbar';toolbar.innerHTML='<div><div class="guide-next-label">Up next</div><div class="guide-next-title" aria-live="polite"></div></div><button class="guide-next-button" type="button">Continue →</button>';pane.prepend(toolbar);
  const empty=document.createElement('div');empty.className='guide-empty';empty.hidden=true;empty.textContent='No matching unfinished steps. Clear search or show completed steps.';document.getElementById('content').after(empty);
  let focusSection=null;let hide=false;
  try{hide=localStorage.getItem(SAVE_KEY+'_hide_done')==='1'}catch(e){}document.getElementById('hide-completed').checked=hide;
  function cards(){return [...document.querySelectorAll('.card')]}
  function refresh(){
   document.querySelectorAll('.ordered-reference,.care-reference').forEach(g=>{g.hidden=![...g.querySelectorAll('.card')].some(c=>!c.classList.contains('hidden')&&!(hide&&c.classList.contains('done')))});
   const q=document.getElementById('search').value.trim().toLowerCase();
   cards().forEach(c=>{c.classList.toggle('completed-hidden',hide&&c.classList.contains('done'))});
   document.querySelectorAll('details.group,details.big-section').forEach(g=>{
    const list=[...g.querySelectorAll('.card')];const visible=list.some(c=>!c.classList.contains('hidden')&&!c.classList.contains('completed-hidden'));
    g.classList.toggle('completed-hidden',hide&&!visible);
    if(g.classList.contains('group')){let counter=g.querySelector(':scope>summary .group-progress');if(!counter){counter=document.createElement('span');counter.className='group-progress';const right=g.querySelector(':scope>summary .bulk-right');if(right)right.prepend(counter)}counter.textContent=list.filter(c=>c.classList.contains('done')).length+'/'+list.length;}
   });
   const available=cards().filter(c=>!c.classList.contains('done')&&!c.classList.contains('hidden'));
   const next=available.find(c=>focusSection&&c.closest('.big-section').id===focusSection)||available.find(c=>c.closest('.big-section').id!=='side'&&c.dataset.optional!=='true')||available[0];
   cards().forEach(c=>c.classList.toggle('current-step',c===next));
   toolbar.querySelector('.guide-next-title').textContent=next?next.querySelector('h3').textContent:(q?'No unfinished search matches':'All objectives complete');toolbar.querySelector('button').disabled=!next;
   document.querySelectorAll('.guide-sidebar .navbtn').forEach(b=>{const list=[...document.getElementById(b.dataset.go).querySelectorAll('.cb')];b.querySelector('.nav-count').textContent=list.filter(c=>c.checked).length+'/'+list.length;if(next&&next.closest('.big-section').id===b.dataset.go)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});
   const all=cards();const optional=all.filter(c=>c.closest('.big-section').id==='side'||c.dataset.optional==='true');const route=all.filter(c=>!optional.includes(c));const done=a=>a.filter(c=>c.classList.contains('done')).length;
   sidebar.querySelector('.guide-totals').textContent='Guide: '+done(route)+' / '+route.length+' complete · Optional: '+done(optional)+' / '+optional.length;
   document.getElementById('progressfill').style.width=(route.length?done(route)/route.length*100:0)+'%';
   empty.hidden=all.some(c=>!c.classList.contains('hidden')&&!c.classList.contains('completed-hidden'));
  }
  const oldUpdate=updateProgress;updateProgress=function(){oldUpdate();refresh()};
  const oldSearch=doSearch;doSearch=function(q){oldSearch(q);if(q.trim()){document.querySelectorAll('.card[data-alternatives]').forEach(c=>{const panels=[...c.querySelectorAll('.location-panel')];const index=panels.findIndex(p=>p.dataset.search.includes(q.trim().toLowerCase()));if(index>=0)c.querySelectorAll('.location-tab')[index].click()})}refresh()};
  document.querySelectorAll('.location-tab').forEach(b=>b.addEventListener('click',()=>{const c=b.closest('.card');c.querySelectorAll('.location-tab').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));c.querySelectorAll('.location-panel').forEach(p=>p.hidden=p.id!==b.getAttribute('aria-controls'))}));
  document.querySelectorAll('.visual-tab').forEach(b=>b.addEventListener('click',()=>{const g=b.closest('.action-gallery');g.querySelectorAll('.visual-tab').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));g.querySelectorAll('.visual-panel').forEach(p=>p.hidden=p.id!==b.getAttribute('aria-controls'))}));
  const actionSearch=doSearch;doSearch=function(q){actionSearch(q);if(q.trim())document.querySelectorAll('.action-gallery').forEach(g=>{const p=[...g.querySelectorAll('.visual-panel')].find(p=>p.dataset.search.includes(q.trim().toLowerCase()));if(p)g.querySelector('[aria-controls="'+p.id+'"]').click()})};
  sidebar.querySelectorAll('.navbtn').forEach(b=>b.addEventListener('click',()=>{focusSection=b.dataset.go;refresh()}));
  document.getElementById('hide-completed').addEventListener('change',e=>{hide=e.target.checked;try{localStorage.setItem(SAVE_KEY+'_hide_done',hide?'1':'0')}catch(e){}refresh()});
  toolbar.querySelector('button').addEventListener('click',()=>{const c=document.querySelector('.card.current-step');if(!c)return;for(let p=c.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;c.scrollIntoView({behavior:'smooth',block:'start'});c.querySelector('.cb').focus({preventScroll:true})});
  refresh();
  document.documentElement.classList.remove('guide-loading');
  document.getElementById('guide-loading-message')?.remove();
  // Import old chooser progress only once, and never replace existing standalone progress.
  if(window.parent !== window){
   const marker=SAVE_KEY+'_chooser_imported';
   let imported=false;try{imported=localStorage.getItem(marker)==='1'}catch(error){}
   if(!imported){
    const receive=event=>{
     const message=event.data;
     if(event.source!==window.parent||!message||message.type!=='guide-progress-response'||message.key!==SAVE_KEY)return;
     window.removeEventListener('message',receive);
     const keys=[SAVE_KEY,SAVE_KEY+'_hide_done'];
     if(document.getElementById('valve-start'))keys.push('gorod_krovi_run_notes_v1');
     let changed=false;
     try{
      for(const key of keys){const value=message.values?.[key];if(localStorage.getItem(key)===null&&typeof value==='string'&&value.length<1000000){JSON.parse(value);localStorage.setItem(key,value);changed=true}}
      localStorage.setItem(marker,'1');
     }catch(error){}
     if(changed)location.reload();
    };
    window.addEventListener('message',receive);
    window.parent.postMessage({type:'guide-progress-request',key:SAVE_KEY},'*');
   }
  }
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
