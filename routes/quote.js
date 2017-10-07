var express = require('express');
var router = express.Router();
var request = require('request');
var quote_obj;
var quote_text = '';
var quote_author = 'Unattributed';

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
      }
      catch(e) {
        res.render('quote', {quote_text: 'Invalid JSON response received.', quote_author: quote_author, title: 'Error'})
      }

      quote_text = quote_obj.quoteText;

      if (quote_obj.quoteAuthor) {
        quote_author = quote_obj.quoteAuthor;
      }
      else {
        quote_author = 'Unattributed';
      }
    }
    else {
      quote_text = 'There was a problem retrieving a quote.'
      quote_author = 'Code: ' + response.statusCode + '; Error: ' + error;
    }

    res.render('quote', { quote_text: quote_text, quote_author: quote_author, title: 'Quote' });
  });
});

module.exports = router;
