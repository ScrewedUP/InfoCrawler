import pandas as pd
from textblob import TextBlob
import requests
from bs4 import BeautifulSoup


def newsindianexpressscrapper():
    url = "https://indianexpress.com/section/india/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    h2_text = []
    h2_tags = soup.find_all("h2")
    for h2 in h2_tags:
        h2_text.append(h2.text)

    data = {'Heading': h2_text}
    df = pd.DataFrame(data)
    p_text = []
    p_tags = soup.find_all("p")
    for p in p_tags:
        p_text.append(p.text)

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
            {"Heading": h2_text[i], "Paragraph": p_text[i - 1], "Sentiment": sentiment_list[i],
             "Polarity": polarity_list[i]})

    return data1
