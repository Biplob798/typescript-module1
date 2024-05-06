{
    // 
    // type interface 
    type User1={       //type alias
        name:string;
        age:number;
    }
    interface User2{   //type interface
        name:string;
        age:number;
    }
    type UserWithRole1=User1&{role:string}
    interface UserWithRole2 extends User2{role:string}
    const user1:UserWithRole2={
        name:'person',
        age:25,
        role:"manager",
    }
    type rollNumber = number

    // interface User2{   //type interface
    //     name:string;
    //     age:number;
    // }
    // const user1:User1={
    //     name:'person',
    //     age:25
    // }
    const user2:UserWithRole1={
        name:'person',
        age:25,
        role:"manager",
    }


    // js --> object,array-->object function-->object

    // type Roll1 =number[];
    interface Roll2{
        [index:number]:number
    };
    // const rollNumber:Roll1=[1,3,2]
    const rollNumber:Roll2=[1,3,2]
                            // 0 1 2 --> number type 
// 
    type Add1 =(num1:number,num2:number)=>number
    interface Add2{
        (num1:number,num2:number):number
    }
    const add1:Add1 =(num1, num2)=>num1+num2
    const add2:Add2 =(num1, num2)=>num1+num2


    // 
}