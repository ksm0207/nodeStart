// 앱의 시작지점이며 항목로드/사용자요청을 처리한다.
// npx cross-env DEBUG=myappName: DEBUG=myAppName 디버깅을 위해 로깅설정 / 
// npx cross-env : 터미널에서 DEBUG 환경변수가 설정된다
// npx cross-env DEBUG=HelloWorld:* npm start : 웹서버 실행 (명령어 사용X)
// npx cross-env DEBUG=MYFIRSTAPP:* npm run dev : v2 (현재명령어)

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade'); // AS-IS jade 엔진 
app.set('view engine','pug')       // TO-BE pug 엔진으로설정
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
