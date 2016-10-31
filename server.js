var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

const processes = require('./data/process.json');
const steps = require('./data/steps.json');
const users = require('./data/users.json');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '/DESIGN_ASSETS')));
app.use(express.static(path.join(__dirname, '/data')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname + '/node_modules/jquery/dist')));

app.get('/api/process', (req, res)=> {
  res.json({
    processes,
    steps, 
  });
})

app.get('/api/users', (req, res)=> {
  res.json({
    users, 
  });
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});