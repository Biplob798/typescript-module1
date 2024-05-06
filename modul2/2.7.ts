{
    // generic constraint with key of operator

    type Vehicle={
        bike:string;
        car:string;
        ship:string
    }
    type Owner= "bike"|"car"|"ship"//manually


    type Owner2=keyof Vehicle
    // const person2:Owner=""
    // const person1:Owner2=""


    const  getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }
    const user={
        name:'vd',
        age:26,
        address:'fd'
    }
    const car={
        model:'toyama 100',
        year:2003
    }
    const result1=getPropertyValue(car,"model")








    // const user ={
    //     name:"Mr.Persian",
    //     age:26,
    //     address:"bd"
    // }
    // obj[key]=22

    // 
}