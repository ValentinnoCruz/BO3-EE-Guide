"""Embed the shared offline UI and rebuild the map chooser."""
import pathlib,re,html
root=pathlib.Path(__file__).resolve().parent.parent
maps={'soe':'shadows-of-evil','giant':'the-giant','de':'der-eisendrache','zns':'zetsubou-no-shima','gk':'gorod-krovi','rev':'revelations','moon':'moon','origins':'origins'}
for stem in maps.values():
 p=root/(stem+'.html');s=p.read_text(encoding='utf-8')
 for tag,suffix in [('style','css'),('script','js')]:
  payload=(root/'ui'/('guide-ui.'+suffix)).read_text(encoding='utf-8-sig')
  s=re.sub('<'+tag+' id="guide-ui-'+tag+'">.*?</'+tag+'>',lambda _: '<'+tag+' id="guide-ui-'+tag+'">\n'+payload+'\n</'+tag+'>',s,flags=re.S)
 p.write_text(s,encoding='utf-8')
p=root/'index.html';s=p.read_text(encoding='utf-8')
for key,stem in maps.items():
 a=s.index('<template id="'+key+'-template">')+len('<template id="'+key+'-template">');b=s.index('</template>',a)
 s=s[:a]+html.escape((root/(stem+'.html')).read_text(encoding='utf-8'),quote=True)+s[b:]
assert len(s.encode())<100*1024*1024,'Chooser exceeds GitHub file limit'
p.write_text(s,encoding='utf-8');print('Embedded shared UI in all guides and rebuilt chooser.')
