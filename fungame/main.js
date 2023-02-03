let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]
fortunes.push('You have a loving husband');

const button = document.getElementById('fortuneButton');
const fortune = document.getElementById('fortune');
const heading = document.getElementById('heading');
const image = document.getElementById('image1');
const body = document.getElementById('body');

const chooseColor = () => {
    return Math.floor(Math.random()*256);
}

const changeColor = () => {
    randomColor = 'rgb(' + chooseColor() +' ,'+ chooseColor() + ','+ chooseColor() +')';
    console.log(randomColor)
    body.style.backgroundColor = randomColor;
}
const showFortune = (event) => {
    if(button){ 
    randomFortune = Math.floor(Math.random()*fortunes.length);
    fortune.innerHTML = fortunes[randomFortune];
    heading.innerHTML= 'come tomorrow to see again' + event.timeStamp + 'ms';
    button.innerHTML = 'Try again' ;
    image.style.display = 'block';
    button.disabled = 'true';}
}

button.addEventListener('click',showFortune);
button.addEventListener('click',changeColor);
//button.onclick = changeColor;