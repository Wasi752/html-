const fifth =()=> {
}
const fourth =()=> {
    fifth();
}
const third = () => { 
   const b = 5;
   fourth();
   const c = 10;
}
const second=(x)=> {
   third();
   const c = 10;
}
const first =(x)=> { 
   if (x < 10){
       second(x + 30);
   }  
}

first(5);
first(10);
fourth();
third();
fifth();