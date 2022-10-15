const first =(x)=> { 
    console.log(x);
    if (x < 7){
        first(x + 1);
    }
  console.log(x); 
 }

first(5);
