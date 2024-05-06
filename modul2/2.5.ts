{
    // function with generic

    const createArray=(param:string):string[]=>{
        return [param]
    }
    const createArrayWithGeneric=<T>(param:T):T[]=>{
        return [param]
    }
    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }
    const res1=createArray('Bangladesh')
    const resGeneric=createArrayWithGeneric<string>('Bangladesh')

    const resTuple=createArrayWithTuple<string,number>('Bangladesh',12)
    type User={id:number;name:string}
    const resGenericObject=createArrayWithGeneric<User>({id:212,name:"A"})


    const addCourseToStudent=<T>(student:T)=>{
        const course="next level"
        return{
            ...student,course
        }


    }

    const student1=addCourseToStudent({name:'Mr.X',email:'X@gmail.com',devType:'next level'})
    const student2=addCourseToStudent({name:'Mr.y',email:'y@gmail.com',devType:'next level',hasWatch:'apple'})
          
    }


    // 
