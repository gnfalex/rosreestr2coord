import execjs
import json
import yaml
jsctx = ""
with open("pkk.script.data2023.js", encoding='utf-8') as f:
  jsctx = execjs.compile(f.read())

data0 = jsctx.eval("data0")
data1 = jsctx.eval("data1")
data2 = jsctx.eval("data2")
data3 = jsctx.eval("data3")

out = {}
out["layers"] = layers = {}
for l in data0["getSearchTypes"]:
  if l["type"]<0: continue
  layers[int(l["type"])] = layer = {}
  for tag in ["title", "type", "selectTemplate"]:
    layer[tag] = l.get(tag, 0)
  layer["selectIds"]=l.get("selectIds",l["type"])
  for d in data1["selectedLayers"]:
    if l["type"] in d["dataType"]:
      layer["url"]=d["url"]
      layer["sublayersTemplate"] = {x["id"]:x["definitionExpression"] for x in d["sublayers"]}
  

out["abbrs"] = abbrs = {}
for a in data0["getFormBuildings"]["i"]+data0["getFormBuildings"]["n"]+data0["getFormBuildings"]["a"]+data0["getFormOti"]["i"]+data0["getFormTourism"]["i"]+data0["getFormTourism"]["n"]+data0["getFormTourism"]["a"]:
  akey = a.get("model_key", a.get("className", "UNKNOWN"))
  if not akey in abbrs: abbrs[akey] = {"id":akey, "names":set()}
  abbrs[akey]["names"].add(a.get("title", a.get("placeholder")))
  if a.get("type")=="select":
    abbrs[akey]["values"]=[x.get("name") for x in a.get("items",[])]
  

for d in ["aliasStat","aliasOpenData"]:
  for akey,aval in data2[d].items():
    if not akey in abbrs: abbrs[akey] = {"id":akey, "names":set()}
    if type(aval)==type(dict()):
      abbrs[akey]["names"].add(aval["name"])  
    elif type(aval)==type(str()):
      abbrs[akey]["names"].add(aval)  
    else:
      print (type(aval))



for zone in data3:
  for zkey,zval in zone.items():
    if type(zval)==type(list()):
      for field in zval:
        try:
          akey = field.get("mapProp",field.get("prop1",field.get("prop",field.get("field",field.get("alias","unknown")))))
          aval = field.get("title",field.get("name", field.get("alias")))
          if not akey==aval:
            if not akey in abbrs: abbrs[akey] = {"id":akey, "names":set()}
            abbrs[akey]["names"].add(aval)
            if field.get("dictionary"): abbrs[akey]["values"]=data2.get(field["dictionary"])

          akey = field.get("dimension")
          if akey and field.get("dictionaryDimension"):
            if not akey in abbrs: abbrs[akey] = {"id":akey, "names":set()}
            abbrs[akey]["values"] = data2.get(field.get("dictionaryDimension"))

          akey = field.get("aliasProp")
          if akey and field.get("aliasDictionary"):
            if not akey in abbrs: abbrs[akey] = {"id":akey, "names":set()}
            abbrs[akey]["values"] = data2.get(field.get("aliasDictionary"))

        except Exception as e:
          print ("ERROR", field, e)

allnames=[]
for akey,aval in out["abbrs"].items():
  aval["names"]=list(aval["names"])
  allnames+=aval["names"]  

if "" in out["abbrs"]:
  for aval in out["abbrs"][""]["names"]:
    if aval in allnames:
      out["abbrs"][""]["names"].remove(aval)  
      print (aval)

yaml.CDumper.ignore_aliases = lambda *args: True
with open(r"..\..\rosreestr2coord\data.yaml", "w", encoding='utf-8') as f:
  f.write(yaml.dump(out, Dumper=yaml.CDumper,allow_unicode=True,sort_keys=True))
