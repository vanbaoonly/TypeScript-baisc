// khi khai báo 1 biến dùng type = any , khi check giá trị của biến nó sẽ bỏ qua type 

let name1: any = "Name";
name1 = 10;
name1 = true

console.log(name1);