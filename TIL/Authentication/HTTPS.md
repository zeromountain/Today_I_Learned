# HTTPS
- `Hyper Text Transfer Protocol Secure Socket layer`의 약자로 기존 HTTP 통신에서 정보의 유출을 보안하기 위한 프로토콜 통신 규격

# SSL과 TLS
|SSL|TLS|
|:-:|:-:|
|`Secure Socket Layer`|`Transport Layer Security`|
|통신할때 전송된 데이터를 암호화하는 보안 기술|최신 기술로 더 강력한 버전의 SSL|

******************
# HTTP 서버와 HTTPS 서버 만들기

```js
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem 경로'),
    cert: fs.readFileSync('cert.pem 경로')
};

// Create a server (the app object is just a callback)
const app = express();

// Ceate a HTTP server
http.createServer(app).listen(80);
// Create an HTTPS server identical to the HTTP server
https.createServer(options, app).listen(443);
```