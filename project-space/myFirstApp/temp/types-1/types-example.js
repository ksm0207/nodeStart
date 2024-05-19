console.info("Member Types: ");
var userInfo = function (memberInfo) {
    console.info("call Fn\n", memberInfo);
    if (memberInfo.favoriteFood === undefined) {
        console.info("Yes");
    }
    else {
        console.info("No");
    }
};
userInfo({ id: 1, name: "John", age: "29", addr1: "Seoul", favoriteFood: "Coffee" });
