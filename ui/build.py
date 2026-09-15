"""Embed the shared offline UI and verify the lightweight map chooser."""
import pathlib,re
root=pathlib.Path(__file__).resolve().parent.parent
maps={'soe':'shadows-of-evil','giant':'the-giant','de':'der-eisendrache','zns':'zetsubou-no-shima','gk':'gorod-krovi','rev':'revelations','moon':'moon','origins':'origins'}
for stem in maps.values():
 p=root/(stem+'.html');s=p.read_text(encoding='utf-8')
 for tag,suffix in [('style','css'),('script','js')]:
  payload=(root/'ui'/('guide-ui.'+suffix)).read_text(encoding='utf-8-sig')
  s=re.sub('<'+tag+' id="guide-ui-'+tag+'">.*?</'+tag+'>',lambda _: '<'+tag+' id="guide-ui-'+tag+'">\n'+payload+'\n</'+tag+'>',s,flags=re.S)
 p.write_text(s,encoding='utf-8')
p=root/'index.html';s=p.read_text(encoding='utf-8')
assert '<template' not in s and '.srcdoc' not in s,'Chooser must load standalone files'
for stem in maps.values():
 assert '"file": "'+stem+'.html"' in s,'Missing chooser route: '+stem
assert len(s.encode())<5*1024*1024,'Keep the chooser lightweight'
print('Embedded shared UI in eight standalone guides; verified chooser file routes.')
