// 객체 타입 표기법
// 매개 변수의 타입은 객체로 표기될때.
// items 유형은  문자열 유형의 'name' 그리고 숫자 유형은 'price' 속성을 갖는 객체이다.
function plantStore(items : {name : string , price : number}) { 
    console.info("Name :  ", items.name)
    console.info("Price : ", items.price)
    return items
}

let result = plantStore({name:"블랙벨벳",price:5500})
console.info("Result",result)
