const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.use(session({
  secret: 'asdfaslhjvaklbjaj@124312!@$!@#',
  resave: false,
  saveUninitialized: true, // 세션이 필요하기 전까지는 세션을 구동하지 않는다
  store: new FileStore(),
}))

app.get('/', function (req, res, next) {
  console.log(req.session);
  if(req.session.num === undefined) {
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`session의 num 값은 ${req.session.num} 입니다.`); 
})

// app.get('/session', function (req, res, next) {
//   res.send('you got to session');
// })

// app.get('/session/part2', function (req, res, next) {
//   res.send('you got to part2 from session!');
// })

app.listen(3005, function(){
  console.log('3005번 포트에서 대기 중');
})