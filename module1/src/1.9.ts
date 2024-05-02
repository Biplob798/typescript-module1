// 


{
    //Type Alias
    type Student=
    {
        name:string;
        age:number;
        gender:string;
        contactNo:string;
        address:string;
    }
    const student1:Student={
        name:'Abu',
        age:12,
        gender:'male',
        contactNo:'0125213434',
        address:'dhaka'
    }


    const student2:Student={
        name:'Kbu',
        age:22,
        gender:'male',
        contactNo:'0125213435',
        address:'dhaka-go'
    }


    type UserName=string
    type IsAdmin=boolean
    const userName:UserName='Person'
    const isAdmin:IsAdmin=true


    type Add=(num1:number,num2:number)=>number


    const add:Add =(num1, num2)=>num1+num2;





















    // 
}