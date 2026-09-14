/* Shared behavior for the image-first guides; no network dependencies. */
(function(){
 function init(){
  const main=document.querySelector('main');
  const pane=document.createElement('div');pane.className='guide-pane';while(main.firstChild)pane.appendChild(main.firstChild);main.appendChild(pane);
  const sidebar=document.createElement('aside');sidebar.className='guide-sidebar';sidebar.setAttribute('aria-label','Guide sections');sidebar.innerHTML='<div class="route-label">Guide sections</div>';
  document.querySelectorAll('.navbtn').forEach((b,i)=>{sidebar.appendChild(b);const sec=document.getElementById(b.dataset.go);const icon=sec.querySelector('.heading-icon');b.textContent=(icon?icon.textContent:'')+' '+b.textContent.replace(/^\d+\s*/, '');b.appendChild(Object.assign(document.createElement('span'),{className:'nav-count'}))});
  sidebar.insertAdjacentHTML('beforeend','<div class="guide-options"><label><input type="checkbox" id="hide-completed"> Hide completed</label></div><div class="guide-totals" aria-live="polite"></div>');
  main.append(sidebar,pane);
  const toolbar=document.createElement('div');toolbar.className='guide-toolbar';toolbar.innerHTML='<div><div class="guide-next-label">Up next</div><div class="guide-next-title" aria-live="polite"></div></div><button class="guide-next-button" type="button">Continue →</button>';pane.prepend(toolbar);
  const empty=document.createElement('div');empty.className='guide-empty';empty.hidden=true;empty.textContent='No matching unfinished steps. Clear search or show completed steps.';document.getElementById('content').after(empty);
  let focusSection=null;let hide=false;
  try{hide=localStorage.getItem(SAVE_KEY+'_hide_done')==='1'}catch(e){}document.getElementById('hide-completed').checked=hide;
  function cards(){return [...document.querySelectorAll('.card')]}
  function refresh(){
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
  sidebar.querySelectorAll('.navbtn').forEach(b=>b.addEventListener('click',()=>{focusSection=b.dataset.go;refresh()}));
  document.getElementById('hide-completed').addEventListener('change',e=>{hide=e.target.checked;try{localStorage.setItem(SAVE_KEY+'_hide_done',hide?'1':'0')}catch(e){}refresh()});
  toolbar.querySelector('button').addEventListener('click',()=>{const c=document.querySelector('.card.current-step');if(!c)return;for(let p=c.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;c.scrollIntoView({behavior:'smooth',block:'start'});c.querySelector('.cb').focus({preventScroll:true})});
  refresh();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
