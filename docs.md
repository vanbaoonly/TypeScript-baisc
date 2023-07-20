<!--
I.
        - trình duyện sẽ không hiểu file .ts vậy nên phải dich code bằng js
        : tsc file.ts ̣ nó sẽ tạo ra 1 file.js và dịch file.ts

        - cách 2 là chạy trên vs code bằng powershell :
            + nếu chạy file.js:
                    node file.js
            + nếu chạy file.ts:
                    ts-node file.ts

---------------------------------
II. 
**Lưu ý: - không dùng : Number, String, Boolean, Object. như là đang khai báo 1 Object
         - Dùng : number, string, boolean, object. sẽ đc hiểu là type


        1. khai báo biến: (let or const)
        Annotaition:
            let  num : number = 100 ;
            let  name : string = "bao";
            let  arr : string[] or number[] = [ , , ]
            * nếu sử cụng const chúng ta phải gán giá trị cho nó :
            - const : number ; //error
            - const : number = 10 ; // ok
            *lưu ý không sử dụng var .
        Inference (tự động gán type ):
            let name = 10 ; // nó sẽ hiểu là type = number.
            let name = "Bao" ; // nó sẽ hiểu là type = string.
            let array = ["bao" , "anh" ,"..."]; // sẽ hiểu type là array là string[].
             let array = ["bao" , "anh" ,10]; // sẽ hiểu type là array là (string | number)[].

------------booleam---------------------
        
        let check1: boolean = true; //or false
        let check2: boolean = Boolean(1); // Boolean là 1 object  nó sẽ kt nếu là string = "" // false or "abc"     
         //true (number = 0 //false or >=1 //true).

------------object:---------------------
        
        cách 1: // khởi tạo chưa có giá trị :
        let person:{}; or person: object; 
        cách 2: khởi tạo và gắn giá trị:
        let person :{name:string , age:number}={
            name:"Anh Bảo",
            age:20
        }
        
---------------tuple:------------------
        
         datatype(cùng kiểu dl) & oder( đúng thứ tự đặt ra):

         let array: [number, string, boolean] = [1, "bao", true];

         option tuple "?" ( có hay không có cũng đc nếu có thì phải cùng kiểu dữ liệu)

         let array: [number, string, boolean?] = [1, "bao", true];

        enum Type:

            // Enum được sử dụng để định nghĩa một nhóm các giá trị có tên. 
            // Enum giúp ta làm việc với các tập hợp giá trị cố định và có ý nghĩa riêng biệt.
            // Các giá trị trong enum có thể được gán một giá trị nguyên mặc định (bắt đầu từ 0 và tăng dần lên)
            // hoặc có thể được gán giá trị tùy ý.
            enum EnumName {
                child1 = "child 1",
                child2 = "child 2",
                child3 = "child 3",
                child4 = 'child 4' // promise
                // nếu không đặt giá trị thì nó sẽ là number bắt đầu như giá trị của mảng,
                // chỉ có 2 kiểu dl : string, number
            }

-------------any:--------------------
        
          khi khai báo 1 biến dùng type = any , khi check giá trị của biến nó sẽ bỏ qua type 
            let name1: any = "Name";
            name1 = 10;
            name1 = true;
        

---------------void------------------
 
    const sum = (a:number , b: number):number =>{
        return a + b ;
    }
  const mes = (mess:string):void=>{
    console.log(">>> mess" ,mess)
  }

-------------never-------
            là 1 hàm không trả bất kì thứ gì 
            function funname( mess:string):never{
                console.log(mess)
            }

---------------Union----------------
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

-------------Function -------------------

            // type optional params ( tham số tùy chọn)

            const sum = (a: number, b: number, c?: number) => { 
                if (c) {
                    return a + b + c;
                }
                else {
                    return a + b
                }
            }
            console.log("sum = ", sum(1, 5));



            // type default params ( tham số mặc định)


                const sum = (a: number, b: number, c = false) => {
                    if (c === true) {
                        return a + b;
                    }
                    else {
                        return a * b
                    }
                }
                console.log("sum = ", sum(1, 5, true));

---------------rest------------------
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
                // console.log(SumArray()); // 0
                // console.log(SumArray(1, 2, 3)); // 6

-----------Overloading----------------
            function addNew(a: string, b: string): string;
            function addNew(a: number, b: number): number;
            function addNew(a: any, b: any) {
                return a + b;
            };
            console.log("add 2:", addNew('anh', "bao"));
            console.log("add 3:", addNew(1, 2))


--------------class------------------
                  class Person {
                    // khai báo thuộc tính . các phạm vi truy cập biến : public(toàn phạm vi) , private(chỉ trong 
                      class) ,protected( kết thừa), readonly(chỉ để đọc).
                    public FistName: string; // string
                    public LastName: string; // string
                    private Age: number;      // string

                    // readonly Name: string; // chỉ được đọc sẽ không thêm sủa , xoa đc

                    // phương thức khởi tạo ̣property 
                    constructor(FistName1: string, LastName1: string, Age1: number) {
                        // Gán giá trị đầu vào vào các thuộc tính của lớp
                        this.FistName = FistName1;
                        this.LastName = LastName1;
                        this.Age = Age1;

                    }

                    // getter 

                    public get GetAge(): number {
                        return this.Age
                    }

                    // serter
                    public set SetAge(age: number) {
                        if (age < 0 || age > 150) {
                            throw Error("quái vật")
                        }
                        this.Age = age;
                    }


                    // phương thức lấy thông tin 
                    getfull(): string {
                        return `full Name : ${this.FistName} ${this.LastName} ,Age : ${this.Age}`;
                    }
                }

                let toi = new Person("anh", "bao", 20); // khởi tạo 1 đối tượng mới từ class person
                // console.log("Set Age :", toi.SetAge = 155); // setter
                // console.log("Get Age :", toi.GetAge); // getter
                console.log(toi.getfull()); // thực hiện hàm lấy thông tin


 -->
