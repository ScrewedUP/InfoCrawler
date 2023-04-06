import pandas as pd
from textblob import TextBlob
import requests
import re
from bs4 import BeautifulSoup


def newsindiatvnewsscrapper():
    url = "https://www.indiatvnews.com/trending"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    h2_text = []
    h2_tags = soup.find_all("h3")
    for h2 in h2_tags:
        h2_text.append(h2.text)

    data = {'Heading': h2_text}
    df = pd.DataFrame(data)
    p_text = []
    p_tags = soup.find_all("p", class_="dic")
    for p in p_tags:
        p_text.append(p.text)

    a_text = []

    div_tags = soup.find_all('div', {'class': 'content'})

    # Find the <a> tag inside the div
    for div in div_tags:
        a_tag = div.find('a')
        link = a_tag['href']
        a_text.append(link)

    # create an empty list to store the sentiment results
    sentiment_list = []
    polarity_list = []

    # loop through the rows of the CSV file
    for index, row in df.iterrows():
        # create a TextBlob object
        blob = TextBlob(row['Heading'])
        polarity = blob.sentiment.polarity
        if polarity > 0:
            sentiment = "Positive"
        elif polarity == 0:
            sentiment = "Neutral"
        else:
            sentiment = "Negative"
        sentiment_list.append(sentiment)
        polarity_list.append(polarity)

    data1 = []
    for i in range(1, 11):
        data1.append(
            {"Heading": h2_text[i], "Paragraph": p_text[i], "Link": a_text[i], "Sentiment": sentiment_list[i],
             "Polarity": polarity_list[i]})

    return data1
