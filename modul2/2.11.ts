{
    // utility type
    // pick

    type Person={
        name:string;
        age:number;
        email?:string;
        contact:string
    }
    type NameAge= Pick<Person, "name"|"age">


    // Omit 
    type ContactInfo = Omit<Person, "name"|"age">


    // Required 
    type PersonRequired = Required< Person>

    // partial
    type PersonPartial= Partial<Person>

    // ReadOnly 
    type PersonReadOnly = Readonly<Person>
    const person1:PersonReadOnly={
        name:"Mr.X",
        age:25,
        contact:"-137"
    }
    // person1.name="Mr.s"
    // person1.name="Mr.s"

    // Record Type 
    // type MyObj={
    //     a:string;
    //     b:string
    // }

    type MyObj= Record<string,string>
    const EmptyObj:Record<string,unknown>={}
    EmptyObj.a
    const obj1:MyObj={
        a:"ddd",
        b:"sss",
        c:"ss",
    }
    // 
}