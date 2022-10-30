/***
fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(x => console.log(x.ARABIC)   
    );
});
***/
fetch('https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/words.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(y => console.log(y[1]));
});


