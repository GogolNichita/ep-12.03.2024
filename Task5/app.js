function changeNumberIncrease(number) {
    clearTimeout(timer);

    timer = setTimeout(function (){
        let value = parseInt(input.value);
        if (value + number <= 100) {
            input.value = value + number;
        }
    },150)
}

function changeNumberDecrease(number) {
    clearTimeout(timer);

    timer = setTimeout(function (){
        let value = parseInt(input.value);
        if (value - number >= 0) {
            input.value = value - number;
        }
    },150)
}

const input = document.getElementById('number');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
let timer;
decrease.addEventListener('click', () => {
  changeNumberDecrease(10)
});
increase.addEventListener('click', () => {
    changeNumberIncrease(10)
});
decrease.addEventListener('dblclick', () =>  {
    changeNumberDecrease(5);
});
increase.addEventListener('dblclick', () => {
    changeNumberIncrease(5);
});

