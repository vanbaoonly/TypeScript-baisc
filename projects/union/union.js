// tao type
// union có thể dùng : number , string, object , array...
// cách 1 :
// function AddNumberOrString(a: number | string, b: number | string) {
//cách 2 :
function AddNumberOrString(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else {
        return "all number or string";
    }
}
console.log(AddNumberOrString(10, 20));
console.log(AddNumberOrString("anh ", "Bao"));
console.log(AddNumberOrString("10", 20));
