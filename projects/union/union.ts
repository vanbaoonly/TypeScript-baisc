

// union có thể dùng : number , string, object , array...

// cách 1 :
// function AddNumberOrString(a: number | string, b: number | string) {
//cách 2 :
// có thể tạo 1 type ở ngoài và gán các kiểu dl tùy ý , giúp nhìn code ngắn ngọn
type Type = number | string;

function AddNumberOrString(a: Type, b: Type) {

    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else {
        return "all number or string";
    }

}
console.log(AddNumberOrString(10, 20));
console.log(AddNumberOrString("anh ", "Bao"));
console.log(AddNumberOrString("10", 20));
