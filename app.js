require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
const cors = require('cors')

var indexRouter = require('./routes/index');
const gifRouter = require('./routes/gif');
const youtubeRouter = require('./routes/youtube')
const imgRouter = require('./routes/img')

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.use('/', indexRouter);
app.use('/gif', gifRouter);
app.use('/youtube', youtubeRouter)
app.use('/images', imgRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
