type Member = {
    id : number
    name : string
    age : string | number
    addr1 : string
    favoriteFood : string
}
console.info("Member Types: ")
const userInfo =(memberInfo:Member)=>{
    console.info("call Fn",memberInfo)
    if(memberInfo.favoriteFood === undefined) {
        console.info("Yes")
    }else {
        console.info("No")
    }
}

userInfo({id:1,name:"John",age:"29",addr1:"Seoul",favoriteFood:"Coffee"})
