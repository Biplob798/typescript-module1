{
    // mapped types
    const arrOfNumbers:number[]=[1,2]
    // const arrOfString:string[]=["A","B"]
    const arrOfString:string[]=arrOfNumbers.map(number=>number.toString())
    console.log(arrOfString);


    // type Area 

    type AreaNumber={
        hight:number;
        width:number
    }
    type Height=AreaNumber["hight"] ;//look up type
    // type AreaString={
    //     hight:string;
    //     width:string

    // type AreaString={
    //     [key in "hight" | "width"]:string
    //     }
    // type AreaString<T>={
    //     [key in keyof T]:string
    //     }
    type AreaString<T>={
        [key in keyof T]:T[key]
        }
        const area1:AreaString<{hight:string;width:number}>={
            hight:'100',
            width:50,
        }
    // 

}