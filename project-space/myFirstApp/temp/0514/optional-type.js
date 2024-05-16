// 옵셔널 프로퍼티.
// 프로퍼티의 타입을 선택적인 타입으로 지정할 수 있다.
// 아래코드는 상품명 , 종류는 필수로 들어와야한다 그러나 가격은 필수가 아니므로
// Price에 데이터가 있어도되고 없어도 아래 함수를 사용할 수 있다.
var products = function (items) {
    console.info("Items : ", items);
    /*
    // 일단 에러발생시켜보기 (1)
    // javascript 코드 실행 시 왜 Typescript를 쓰면좋은지 조금은알것같다..
    if(items.price === undefined) {
        console.log("Items price is undefined", items.price)
    }else {
        console.log("No No price is not undefined", items.price)
    }
    */
};
// 상품정보 / 상품종류 / 상품가격만 넘길경우
products({ productName: "베이비로션", type: "Lotion", price: 50000, returnYn: false });
// 상품정보 / 상품종류만 넘길경우 - Typescript 에러임 / Javascript 실행됨
// 일단 에러발생시켜보기 (1) products({productName : "베이비로션" , type : "Lotion"})
