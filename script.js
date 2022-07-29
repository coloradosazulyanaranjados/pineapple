
// este código fue robado de https://codepen.io/nicoleelazar/pen/ZZmYYM
// y editado fuera del horario de  trabajo : P
// icono por https://www.flaticon.com/
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('switch');
  let havingFun = true;
  
  function fun() {
    let pineapple;
    for (let i = 1; i < 60; i++) {
      pineapple = document.createElement('img');
      pineapple.src = './assets/pineapple.png'
      document.body.appendChild(pineapple);
      pineapple.classList.add('movement');
    
      //all styling
      function styling(fallingShape) {
        fallingShape.style.top = Math.random() * -30 - 10 + '%';
        fallingShape.style.left = Math.random() * 100 + '%';
        fallingShape.style.animationName = 'dropping';
        fallingShape.style.animationDuration = Math.random() * 12 + 4 + 's';
        fallingShape.style.animationDelay = -(Math.random() * 4) + 's';
        fallingShape.style.height = Math.random() * 70 + 40 + 'px'; //random sizes
        fallingShape.style.width = fallingShape.style.height;
      };
    
      styling(pineapple);
    };
  }

  function clear() {
    const pineapples = document.querySelectorAll('.movement');
    pineapples.forEach(pineapple => {
      pineapple.remove();
    });
  };
 
  button.addEventListener('click', (event) => {
    if (havingFun) {
      button.innerText = '🥺🥺🥺';
      button.style.fontSize= '2rem';
      havingFun = false;
      clear();
    }
    else {
      button.style.fontSize= '1em';
      button.innerText = 'Me cansé de tanta diversión';
      fun();
      havingFun = true;
    }
  });

  fun();

});