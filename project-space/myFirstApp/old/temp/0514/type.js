// TC1 : 매개변수 타입 표기법
function getName(name) {
    return "User Name : ".concat(name);
}
// TC1 함수호출 (param type number)
var userName = getName(42);
console.info("Result : ", userName);
/*
    ERROR : Argument of type 'number' is not assignable to parameter of type 'string'
*/
// TC1 : Typescript는 여전히 올바른 개수의 인자가 전달되는지 검사함
// TC2 2: 반환 타입 표기법
function getAge01() {
    return 29;
}
function getAge02() {
    return false;
}
function getAge03() {
    return "";
}
