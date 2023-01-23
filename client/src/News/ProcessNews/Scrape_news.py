import requests
from bs4 import BeautifulSoup
import json
from pathlib import Path




url = "https://www.gadgetbytenepal.com/blog-news-list/"


res= requests.get(url).text

soup = BeautifulSoup(res,'html.parser')

span=soup.find_all('div',class_='item-details')

image_class=soup.find_all('img',class_='entry-thumb')


news=[]

# for s in span:
#     title=span[0].select('div > div')[1].text
#     href=span[0].h3.a['href']
#     news.append({'title':title,'href':href})


# images=[]
# for img in image_class:
#     image=img['data-src']
#     images.append({'image':image})



for i in range(len(span)):
    title=span[i].select('div > div')[1].text
    href=span[i].h3.a['href']
    image=image_class[i]['data-src']
    news.append({'title':title,'href':href,'image':image})
    

json_data=json.dumps(news)

with open("hamronews.json",'w') as f:
    f.write(json_data)


# # replace with your preferred directory path
# dir_path = Path('./server')
# file_name = "hamronews.json"
# file_path = dir_path.joinpath(file_name)
# # print(news)