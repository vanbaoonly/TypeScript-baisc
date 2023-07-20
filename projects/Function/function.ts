

// type optional params ( tham số tùy chọn)

// const sum = (a: number, b: number, c?: number) => {
//     if (c) {
//         return a + b + c;
//     }
//     else {
//         return a + b
//     }
// }
// console.log("sum = ", sum(1, 5));
// console.log("sum = ", sum(1, 5, 4));


// default  parameter (tham số mặc định)
// const sum = (a: number, b: number, c = false) => {
//     if (c === true) {
//         return a + b;
//     }
//     else {
//         return a * b
//     }
// }
// console.log("sum = ", sum(1, 5, true));

// Rest:
// lưu ý: trong 1 hàm chỉ có thể sử dùng 1 rest (...arr),
//  và phải đặt ở cuối  và chỉ thao tác với mảng
// const SumArray = (...arr: number[]): number => {
//     let sum = 0;

//     arr.forEach((num) => {
//         sum += num
//     })
//     return sum;
// }

// cách 1: muốn bỏ 1 mảng để tính tổng
// let mang: number[] = [2, 3, 4];
// console.log(SumArray(mang));

//cách 2 : nhập 1 mảng ( dùng toán tử copy ...aray)
// console.log(SumArray(1, 2, 3));



//vd1: lấy số đầu nhân cho các pt còn lại

// function nx2(n: number, ...m: number[]) {
//     return m.map((x) => n * x);
// }

// console.log(nx2(2)); // rỗng
// console.log(nx2(2, 1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]

//vd2: cộng chuỗi

// function congString(tile: string, ...arrName: string[]) {
//     return tile + " " + arrName.join(', ') + ".";
// }


// console.log(congString("xin chào", "Hoàng", "Anh", "Bảo"));


// ------Overloading--------------
function addNew(a: string, b: string): string;
function addNew(a: number, b: number): number;
function addNew(a: any, b: any) {
    return a + b;
};
console.log("add 2:", addNew('anh', "bao"));
console.log("add 3:", addNew(1, 2))

