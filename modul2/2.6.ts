{
    // 
    const addCourseToStudent=<T extends { id: number; name: string; email: string}>
       
       (student:T)=>{
        const course="next level"
        return{
            ...student,course
        }


    }

    const student3=addCourseToStudent({id:232,name:'B',email:'a@gmail.com'})

    const student1=addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id:222,name:'Mr.X',email:'X@gmail.com',devType:'next level'})
    const student2=addCourseToStudent({id:12,name:'Mr.y',email:'y@gmail.com',devType:'next level',hasWatch:'apple'})
          
    // 
}