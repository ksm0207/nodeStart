// Include the HTTP module
const http = require('http');

// Set the port to 3000
const PORT = 3000;

// 1. Process incoming requests (req), reply with response (res)
// 요청/응답 처리 (요청/응답처리기)
const requestHandler = (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('hello world');
    res.writeHead(200,{'Content-Type':'application/json'}) // http content-type 헤더설정
    res.end(JSON.stringify({id:10,name:"Sungmin Kim","Married":"Y"})) // 응답 값
}

// 2. Create a server with the requestHandler
// 웹서버를 생성 후 요청처리기를 사용한다
const server = http.createServer(requestHandler);

// 3. Start listening for incoming requests on port
// 서버 수신 / 지정 된 포트를 사용하여 listen() 메소드가 실행됨
// 클라이언트 요청을 수락준비가 된 상태.
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})