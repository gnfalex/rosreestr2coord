# -*- coding: utf-8 -*-
import json
import requests
import time
from requests_toolbelt.utils import dump
from requests_toolbelt import MultipartEncoder
from pyproj import CRS, Transformer
from datetime import datetime
import hashlib
import os

from urllib3.exceptions import InsecureRequestWarning; requests.packages.urllib3.disable_warnings(category=InsecureRequestWarning)

def searchFromGEOJSON(gjpath):
  CRS1=CRS("EPSG:4326")
  CRS2=CRS("EPSG:3857")
  sleepTime=30
  outlist = []
  try:
    yamldata = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.yaml")
    import yaml
    with open(yamldata, 'r', encoding='utf-8') as f:
      pkk6data = {val["type"]:val["title"] for val in yaml.load(f.read(),Loader=yaml.Loader)["layers"].values()}
  except:
      pkk6data = { 1:"Участки",2:"Кварталы",3:"Районы",4:"Округа",5:"ОКС",6:"ТеррЗоны",7:"Границы",10:"ОсобЗоны",13:"КрЛинии",15:"СхемыУчастков",20:"Зоны",23:"Негатив",24:"Комплексы",25:"ЗемляДляСтройки",26:"Усолье-Сибирское",27:"ЗемляДляТуризма",28:"ОТИ"}

  with open(gjpath,"rb" ) as f:
    rawdata = f.read()
    md5 = hashlib.md5(rawdata)
    data = json.loads(rawdata)
    for feat in data.get("features",[]):
      coords=feat.get("geometry",{}).get("coordinates",[])
      out=list(Transformer.from_proj(CRS2,CRS1,always_xy=True).itransform(coords[0]))
      sq = {"type":"GeometryCollection","geometries":[{"type":"Polygon","coordinates":[out]}]}

  for ptype in pkk6data:
    outfname = f"{ptype:>02}_{pkk6data[ptype]}_{md5.hexdigest()}.txt"
    if os.path.exists(outfname):
      print (outfname, " already exist. Skipped")
      outlist.append(outfname)
      continue
    skip = 0
    tstamp = int(datetime.timestamp(datetime.now())*1000)
    cnList=[]
    while True:
      print ("Downloading:",ptype,"_", skip, end = " ")
      fls = {
        "limit":(None,'40'),
        "skip":(None,str(skip)),
        "nameTab":(None,"undefined"),
        "indexTab":(None,"undefined"),
        "inBounds":(None,"true"),
        "tolerance":(None,'1'),
        "searchInUserObjects":(None, "true"),
        "sq":(None,json.dumps(sq)),
        "graphicBigPin":(None,"null")
      }
      m = MultipartEncoder(fls)
      m = MultipartEncoder(fls, boundary='---------------------------'+m.boundary)
      hdrs = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
        "referer": "https://pkk.rosreestr.ru/",
        "Content-Type": m.content_type,
      }
      try:
        req = requests.post(f"https://pkk.rosreestr.ru/api/features/{ptype}?_={tstamp}", data=m.to_string(), headers=hdrs, verify=False)
        if req.json():
          print (f"OK. Next try after {sleepTime}")
          data = req.json()
          for feat in data.get("features",[]):
            cnList.append(f'{feat.get("attrs",{}).get("id",None)}@{ptype}')
          if data.get("total_relation")=="gte":
            skip+=40
            time.sleep(sleepTime)
            continue
          else:
            print (f"Fail Empty JSON. Next try after {sleepTime}")
      except Exception as e:
        print (f"ERR, retry after {sleepTime*2}", e)
        time.sleep(2*sleepTime)
        continue
      if len(cnList)>0:
        with open(outfname,"w") as f:
          f.write("\n".join(cnList))
        print (outfname, " completed")
        outlist.append(outfname)
      break
  return outlist