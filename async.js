let x = 5;
Promise.resolve().then(()=>{
    x = x - 1;
})
while (x < 1000){
    x = x + 1;
    console.log(x);
}
const y = ()=>{
    x = x + 1;
}
y();