{
    // 


    // type assertion 
    let anything:any;
    anything='Next level developer';
    anything=222;

    // (anything as string).
    // (anything as number).

    const kgToGm=(value:string|number):string|number|undefined=>{
        if(typeof value==='string'){
            const convertedValue= parseFloat(value)
        return `The convertedValue is : ${convertedValue}`
        }
        if(typeof value==='number'){
            return value*1000
        }
        
    }
    const result1 = kgToGm(210) as number
    const result2 = kgToGm("210") as string

type CustomError={
    message:string
}
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }














    // 


}