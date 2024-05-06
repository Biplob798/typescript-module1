{
    // 
    // Generic type
    type GenericArray<T>= Array<T>
    // const rollNumber:Number[]=[1,2,3];
    // const rollNumber:Array<number>=[1,2,3];
    const rollNumber:GenericArray<number>=[1,2,3];
    // const mentors:string[]=["Mr.X","Mr.Z","Mr.Y"]
    // const mentors:Array<string>=["Mr.X","Mr.Z","Mr.Y"]
    const mentors:GenericArray<string>=["Mr.X","Mr.Z","Mr.Y"]
    // const boolArray:boolean[]=[true, false,true]
    // const boolArray:Array<boolean>=[true, false,true]
    const boolArray:GenericArray<boolean>=[true, false,true];
    // type User={name:string,age:number}
    interface User {name:string,age:number}
    const user:GenericArray<User>=[
        {
            name:"A",
            age:12,

        },
        {
            name:"B",
            age:22
        }
    ]
    const add1 =(num1:number, num2:number)=>num1+num2
    add1(2,4)

    // generic tuple
    type GenericTuple<X,Y>=[X,Y]

    // const manus:[string,string]=["Mr.X","Mr.Y"]
    const manus:GenericTuple<string,string>=["Mr.X","Mr.Y"]

    const UserWithId:GenericTuple<number,{name:string,email:string}>=[1234,{name:"a",email:"a@gmail.com"}]
    // 
}