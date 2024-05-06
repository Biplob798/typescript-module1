{
    // interface--> generic

    interface Developer<T,X=null>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number
        },
        smartWatch:T;
        bike?:X
    }

    type EmilabWatch={
        brand:string;
        model:string;
        display:string
    }

    const poorDeveloper:Developer<EmilabWatch>
={
    name:'A',
    computer:{
        brand:'Asus',
        model:'X-22UR',
        releaseYear:2013
    },
    smartWatch:{
        brand:'E',
        model:'V',
        display:'old'
    }
}

    interface AppleWatch {
        brand:string;
        model:string;
        heartTrack:boolean;
        sleepTrack:boolean
    }
    
    interface HondaBike{
        model:string;
        engen:string
    }

    const richDeveloper:Developer<AppleWatch,HondaBike>
={
    name:'A',
    computer:{
        brand:'Asus',
        model:'X-22UR',
        releaseYear:2013
    },
    smartWatch:{
        brand:'E',
        model:'V',
       heartTrack:true,
       sleepTrack:true
    },
    bike:{
        model:"honda",
        engen:"165cc"
    }

}



    // 
}