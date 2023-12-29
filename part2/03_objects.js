//singleton =>object is made by contructor 
// Object.create()

//object literals
const jsObject ={
    name:"Deepali",
    "full_name":"Padiyar",
    age:12,
    email:"ddp@gmail.com"
}
// console.log(typeof jsObject["full_name"]);
// jsObject.email="dddnjskJMSK"
// // Object.freeze(jsObject)
// console.log(jsObject);

// jsObject.greeting = function(){
// console.log("hello world");
// }
// console.log(jsObject.greeting);


// +++++++++++++++++++ 

// const myobj =new Object();
const myobj ={}
myobj.id ="34222"
myobj.name="fdsa"

// console.log(myobj);

const abcobj ={
    name:"Deepali", 
    Address :{
        city:"kumta",
        state:"karntaka",
        local:{
            muncile:true

        }
    }
}

// console.log(abcobj);
const obj1 ={EmpName:"Rishi",EmpId:123}
const obj2={Emp2Name:"Mahi",Emp2Id:234}

// const obj3 =Object.assign(obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);


const user ={

}
{}
{}
{

}
// user[1].email
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
// console.log(Object.length(obj3.Emp2Id));

// object destructuring 

const empdetails ={
    empId:"12334rds",
    empName:"Sandy",
    empSalary:90000
}
// console.log(empdetails.empSalary);

const {empSalary:Salary} = empdetails
console.log(Salary);


// json talks
// {
//     "empId":"12334rds",
//     "empName":"Sandy",
//    " empSalary":90000
// }