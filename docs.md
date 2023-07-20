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



 -->
