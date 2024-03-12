function decreaseValue(number) {
    let value = parseInt(input.value);
    if (value - 10 >= 0) {
        input.value = value - number;
    }
}

function increaseValue(number) {
    let value = parseInt(input.value);
    if (value + 10 <= 100) {
        input.value = value + number;
    }
}

const input = document.getElementById('number');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
let timer;
decrease.addEventListener('click', (event) => {
    if (event.detail === 1){
        timer = setTimeout(()=> {
            decreaseValue(10)
        })
    }
});
increase.addEventListener('click', (event) => {
    if (event.detail === 1){
        timer = setTimeout(()=> {
            increaseValue(10)
        })
    }
});
decrease.addEventListener('dblclick', () =>  {
    clearTimeout(timer);
    decreaseValue(5);
});
increase.addEventListener('dblclick', () => {
    clearTimeout(timer);
    increaseValue(5);
});

