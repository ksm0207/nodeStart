// 타입 별칭
// 똑같은 타입을 한번 더 재사용해야할때 혹은 다른 이름으로 사용하고싶을때 사용함
type Point = {
    x : number | string
    y : number
}

const callFn = (point:Point) => {
    console.log("Type of Point x : " , typeof point.x , point.x)
    console.log("Type of Point y : " , typeof point.y, point.y)
}


callFn({x:"10", y:20})

// 객체타입뿐만아니라 모든타입에 대하여 아래와 같이 부여할 수 있음
type ID = number | string

const callFn2 = (id:ID) =>{
    console.log("Type of Point x : " , typeof id , id)
}

callFn2("99999")
