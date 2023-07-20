// enum Type ts
// Enum được sử dụng để định nghĩa một nhóm các giá trị có tên. 
// Enum giúp ta làm việc với các tập hợp giá trị cố định và có ý nghĩa riêng biệt.
// Các giá trị trong enum có thể được gán một giá trị nguyên mặc định (bắt đầu từ 0 và tăng dần lên)
// hoặc có thể được gán giá trị tùy ý.   // chỉ có 2 kiểu dl : string, number
var EnumName;
(function (EnumName) {
    EnumName["child1"] = "child 1";
    EnumName["child2"] = "child 2";
    EnumName["child3"] = "child 3";
    EnumName["child4"] = "child 4"; // promise
})(EnumName || (EnumName = {}));
console.log('>>> child 1 :', EnumName.child1);
console.log('>>> child 4 :', EnumName.child4);
