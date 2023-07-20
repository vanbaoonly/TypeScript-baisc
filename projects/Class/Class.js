var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  class person
var Person = /** @class */ (function () {
    // private Age: number;      // number
    // readonly Name: string; // chỉ được đọc sẽ không thêm sủa , xoa đc
    // phương thức khởi tạo ̣property 
    // constructor(FistName1: string, LastName1: string, Age1: number) {
    //     // Gán giá trị đầu vào vào các thuộc tính của lớp
    //     this.FistName = FistName1;
    //     this.LastName = LastName1;
    //     this.Age = Age1;
    // }
    function Person(FistName1, LastName1) {
        // Gán giá trị đầu vào vào các thuộc tính của lớp
        this.FistName = FistName1;
        this.LastName = LastName1;
    }
    // getter
    // public get GetAge(): number {
    //     return this.Age
    // }
    // // serter
    // public set SetAge(age: number) {
    //     if (age < 0 || age > 150) {
    //         throw Error("quái vật")
    //     }
    //     this.Age = age;
    // }
    // phương thức lấy thông tin 
    Person.prototype.getfullName = function () {
        return "full Name : ".concat(this.FistName, " ").concat(this.LastName);
    };
    return Person;
}());
//let toi = new Person("anh", "bao", 20); // khởi tạo 1 đối tượng mới từ class person
// console.log("Set Age :", toi.SetAge = 155); // setter
// console.log("Get Age :", toi.GetAge); // getter
// console.log(toi.getfullName()); // thực hiện hàm lấy thông tin
// extends : kết thừa 
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(FistName, LastName, JobTile) {
        var _this = 
        // gọi hàm  constructor từ Class Person
        _super.call(this, FistName, LastName) || this;
        _this.JobTile = JobTile;
        return _this;
    }
    Object.defineProperty(user.prototype, "GetJob", {
        get: function () {
            return this.JobTile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "SetJob", {
        set: function (job) {
            this.JobTile = job;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}(Person));
var user1 = new user("anh ", "ba", "Dev");
console.log(user1.GetJob);
console.log(user1.SetJob = "Nro");
console.log(user1.getfullName());
console.log(user1);
