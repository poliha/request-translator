var express = require('express');
var bodyparser = require('body-parser');
var axios = require('axios');
var app = express();
var forwardUrl = "http://localhost:8010/receive"; //URL to forward request to

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json({ type: "*/*" }));

app.post('/translate', function (req, res) {
  
  axios.post(forwardUrl, req.body)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

var server = app.listen(8111, function () {
  console.log('Translate Server listening on port ' + server.address().port);
});
