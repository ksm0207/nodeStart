var callFn = function (point) {
    console.log("Type of Point x : ", typeof point.x, point.x);
    console.log("Type of Point y : ", typeof point.y, point.y);
};
callFn({ x: "10", y: 20 });
var callFn2 = function (id) {
    console.log("Type of Point x : ", typeof id, id);
};
callFn2("99999");
