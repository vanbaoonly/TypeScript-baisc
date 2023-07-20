//  class person
class Person {
    // khai báo thuộc tính . các phạm vi truy cập biến : public(toàn phạm vi) , private(chỉ trong class) ,protected( kết thừa), readonly(chỉ để đọc).
    public FistName: string; // string
    public LastName: string; // string
    // private Age: number;      // number

    // readonly Name: string; // chỉ được đọc sẽ không thêm sủa , xoa đc

    // phương thức khởi tạo ̣property 
    // constructor(FistName1: string, LastName1: string, Age1: number) {
    //     // Gán giá trị đầu vào vào các thuộc tính của lớp
    //     this.FistName = FistName1;
    //     this.LastName = LastName1;
    //     this.Age = Age1;

    // }
    constructor(FistName1: string, LastName1: string) {
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
    getfullName(): string {
        return `full Name : ${this.FistName} ${this.LastName}`;
    }
}

//let toi = new Person("anh", "bao", 20); // khởi tạo 1 đối tượng mới từ class person
// console.log("Set Age :", toi.SetAge = 155); // setter
// console.log("Get Age :", toi.GetAge); // getter
// console.log(toi.getfullName()); // thực hiện hàm lấy thông tin


// extends : kết thừa 
class user extends Person {
    private JobTile: string;
    constructor(FistName: string, LastName: string, JobTile: string) {
        // gọi hàm  constructor từ Class Person
        super(FistName, LastName);
        this.JobTile = JobTile
    }

    get GetJob(): string {
        return this.JobTile;
    }
    set SetJob(job: string) {

        this.JobTile = job;
    }

}
let user1 = new user("anh ", "ba", "Dev");
console.log(user1.GetJob);
console.log(user1.SetJob = "Nro");
console.log(user1.getfullName());
console.log(user1);
