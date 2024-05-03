{
    
    // Union Types

// type FrontendDeveloper= 'A'|'B'
// type FullstackDeveloper= 'F'|'G'

// const newDeveloper:FrontendDeveloper='A';

// type User ={
//     name:string;
//     email?:string;
//     gender:"male"|"female";
//     bloodGroup:"O+"|"A+"|"B+"
// }
// const user1:User={
//     name:"person",
//     gender:"male",
//     bloodGroup:"B+",
// }


// Interaction Type

type FrontendDevelopers={

    skills:string[];
    designation1:'Frontend';

}
type BackendDevelopers={

    skills:string[];
    designation2:'Backend';

}

type FullstackDevelopers= FrontendDevelopers& BackendDevelopers


 const fullstackDeveloper:FullstackDevelopers={
    skills:["HTML","CSS","JS","EXPRS"],
    designation1:"Frontend",
    designation2:"Backend",
}
// 

}