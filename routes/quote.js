var express = require('express');
var router = express.Router();
var request = require('request');
var quote_obj;
var quote_text = '';
var quote_author = '';
var title = '';

/* GET a quote. */
router.get('/', function(req, res, next) {
  request.get({
    uri: 'http://api.forismatic.com/api/1.0/',
    qs: {
      method: 'getQuote',
      key: '789234',
      format: 'json',
      lang: 'en'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Fix "\'" since this is not a valid JSON escape sequence.
      body = body.replace(/\\'/g, '\'');

      // Parse quote and break it up into its parts.
      try {
        quote_obj = JSON.parse(body);
        quote_text = quote_obj.quoteText;

        if (quote_obj.quoteAuthor) {
          quote_author = quote_obj.quoteAuthor;
        }
        else {
          quote_author = 'Unattributed';
        }

        title = 'Quote';
      }
      catch(e) {
        quote_text = 'Unable to display this quote. Invalid JSON response received. Please click the link below to load another one.';
        quote_author = '';
        title = 'Oops! There Was A Problem';
      }
    }
    else {
      quote_text = 'There was a problem retrieving a quote.'
      quote_author = 'Code: ' + response.statusCode + '; Error: ' + error;
      title = 'Oops! There Was A Problem';
    }

    res.render('quote', { quote_text: quote_text, quote_author: quote_author, title: title });
  });
});

module.exports = router;
