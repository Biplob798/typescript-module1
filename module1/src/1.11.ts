{
    // ternary operator || optional chaining || nullish coalescing operator

const age:number= 15;
if(age>=18){
    console.log("adult");
}else{
    console.log("not adult");
}


const isAdult=age>=18?"adult":"not adult";
console.log(isAdult);


// nullish coalescing operator
// null /undefined --->decision
// 
// const isAuthenticated=null;
const isAuthenticated=undefined;
const result1 =isAuthenticated??"guest";
const result2=isAuthenticated?isAuthenticated:"guest";
console.log({result1},{result2});

type User={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddres:string;
        permentAddres?:string;
    }
}
const user:User={
    name:'person',
    address:{
        city:"dhaka",
        road:'123',
        presentAddres:'badda'
    }
}

const permentAddres=user?.address?.permentAddres??"no permentaddere"
console.log({permentAddres});












    // 
}