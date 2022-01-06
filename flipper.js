const colors = ['green', 'red', 'blue', 'cyan', 'magenta', 'yellow', 'black'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=> {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber =() =>{
    return Math.floor(Math.random()*colors.length);
}

const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn2 = document.getElementById("btn2");
const color2 = document.querySelector(".color2");

btn2.addEventListener('click', ()=> {
    let hexColor ="#";
    for (i=0; i<6; i++){
    hexColor += hex[getRandomNumber2()];
}
    document.body.style.backgroundColor = hexColor;
    color2.textContent = hexColor;
});

const getRandomNumber2 =() =>{
    return Math.floor(Math.random()*hex.length);
}

const toggle =() => {
    color2.textContent = "#ffffff";
    document.body.style.backgroundColor= "#ffffff";
    document.getElementById('btn2').style.display='block';
    document.getElementById('btn1').style.display='none';
}