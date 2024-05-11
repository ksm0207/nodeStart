// Typescript 명시적타입
/*
    @param data type
    message : string
    date : Date
*/
function msgFn(message, date) {
    console.info("Hello ".concat(message, " ! date : ").concat(date.toDateString()));
}
msgFn("World", new Date());
// Javascript에서 Date() 함수 호출 시 string을 반환하여 아래 소스코드는 에러가 발생함. 
// msgFn("World",Date())
