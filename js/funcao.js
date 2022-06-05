const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);
};

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



    //SE A POSIÇÃO DO PIPE(CONE) FOR MENOR IGUAL A 120PX ELE BATEU 1
    //E SE E SE O PIPE(CONE) FOR MAIOR OU IGUAL ZERO O MARIO PASSOU 2
    //E SE O O MARIO PULOU COM NUMA ALTURA MENOR Q 80 ELE ENCOSTA NO CONE(PIPE) 2
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 98) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
    }

},10)

document.addEventListener('keydown',jump);