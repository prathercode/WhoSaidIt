//Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    var Twitter = require('trumporcolbert').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "gCPciKkPVTFnMJyJXmKxf7dEW",
        "consumerSecret": "JqhwQYvFEv7fbU0nN9rsqeMEKKQ2c2lfVLHC5YGwMcvFgD7Bsj",
        "accessToken": "4189424297-aiHvofbI8cakO6dbommGJCKMZwJbXRFVmJfdSls",
        "accessTokenSecret": "gC245JPZ3UH6Ou6aioRTwPOkfINQdux7t5sJxA8C1jxTj",
        "callBackUrl": "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=25073877&trim_user=true&include_rts=false&count=200&exclude_replies=true"
    }

    var twitter = new Twitter(config);

    var TrumpQuotes = [twitter.getUserTimeline({ screen_name: 'realDonaldTrump', count: '10'}, error, success))];