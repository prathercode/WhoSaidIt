from TwitterAPI import TwitterAPI 
import pyjs

CONSUMER_KEY = 'gCPciKkPVTFnMJyJXmKxf7dEW'
CONSUMER_SECRET = 'JqhwQYvFEv7fbU0nN9rsqeMEKKQ2c2lfVLHC5YGwMcvFgD7Bsj'
ACCESS_TOKEN_KEY = '4189424297-aiHvofbI8cakO6dbommGJCKMZwJbXRFVmJfdSls'
ACCESS_TOKEN_SECRET = 'gC245JPZ3UH6Ou6aioRTwPOkfINQdux7t5sJxA8C1jxTj'

api = TwitterAPI(CONSUMER_KEY,CONSUMER_SECRET,ACCESS_TOKEN_KEY,ACCESS_TOKEN_SECRET)

trump = api.request('statuses/user_timeline', {'user_id': 25073877})
colbert = api.request('statuses/user_timeline', {'user_id': 16303106})
trump_tweets = ''
colbert_tweets = ''
for item in trump:
	print (item['text'] if 'text' in item else item)

for item in colbert:
	print (item['text'] if 'text' in item else item)