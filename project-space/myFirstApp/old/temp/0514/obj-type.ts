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

// 유니언 타입표기법
/*
    Type은 서로 다른 두개 이상의 타입들을 사용될 수 있다.
*/

// 주문번호가 Int 혹은 Str로 넘어온다고 가정해볼까..?@

const orderSeq = (orderNo : number | string) => {
    if (typeof orderNo === "number") {
        console.info("Data type of : ", typeof orderNo)
    }else {
        console.info("Data type of : ", typeof orderNo)
    }
}
// call Function   : Number
orderSeq(100)
// call function 2 : String
orderSeq("100")

// Test --> orderNo : number | boolean
// run --> TypeError : "100" is not assignable to parameter error!

