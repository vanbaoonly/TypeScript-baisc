//--------Basic Typescript--------------
//------------Khai báo--------------
//khai báo mảng kiểu dữ liệu  Annotaition
//      let mes1: string = "Hello";
//      let mes2: string = `${mes1} ai do.`;
//      console.log(mes2);
//      let arr1: string[] = ["anh", "bao", " 10dc"];
//      arr1.push(10); //error
//      arr1.push('10'); //oko
//      console.log(arr1.toLocaleString().toUpperCase());
// khai báo mảng kiểu dữ liệu  Inference (tự động gán type)
//      let array0 = ["bao", "anh", "..."]; // sẽ hiểu type là array là string[].
//      let array1 = ["bao", "anh", 10]; // sẽ hiểu type là array là (string | number)[].
//      console.log("array0 :", array0, "array1 :", array1);
//----------boolean---------------
//      let check1: boolean = true; //or false
//      let check2: boolean = Boolean(1); // Boolean là 1 object  nó sẽ kt nếu là string = "" // false or "abc" //true (number = 0 //false or >=1 //true).
//      console.log("check 1", check1, "check 1", check2);
//----------object----------------
// let person: object; // or person:{};
// let person: { name: string, age: number } = {
//     name: "Anh Bảo",
//     age: 20
// }
// console.log(person);
//----------array----------------
// khai báo mảng có 2 kiểu dữ liệu :
// let arr: string[] = ["name1", "name 2"];
// let arr: number[] = [1, 2];
// khai báo trong 1 mảng có 2 kiểu dữ liệu :
// let arr: (string | number)[] = [
//     "name1", "name 2", 3
// ]
// console.log(arr);
//----------tuple----------------
// datatype(cùng kiểu dl) & oder( đúng thứ tự đặt ra):
// let array: [number, string, boolean] = [1, "bao", true];
// option tuple "?" ( có hay không có cũng đc nếu có thì phải cùng kiểu dữ liệu)
// let array: [number, string, boolean?] = [1, "bao", true];
// console.log(array);
//------------tes-----------
// function booleam(check: boolean, arr: number[]) {
//     arr.forEach((item, a) => {
//         if (item == 6) {
//             check = true;
//         }
//         else {
//             check == false;
//         }
//     })
//     return check;
// }
// let arr: number[] = [1, 3, 4, 5, 6, 7, 8];
// let check: boolean = false;
// console.log(booleam(check, arr));
