const colorBtn = document.querySelector('.colorBtn') //selectam butonul
const bodyBcg = document.querySelector('body'); // selectam body

const colors = ['yellow','red','green', '#3b5998']; // creare Array culori

colorBtn.addEventListener('click',changeColor); // click event 

function changeColor () {
    // bodyBcg.style.backgroundColor = colors[2]; // index[2]
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}