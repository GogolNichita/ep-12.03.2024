function changeNumber(number) {
    clearTimeout(timer);

    timer = setTimeout(function (){
        let value = parseInt(input.value);
        if (value + number <= 100 && value + number >= 0) {
            input.value = value + number;
        }
    },200)
}

const input = document.getElementById('number');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
let timer;
decrease.addEventListener('click', () => {
  changeNumber(-10)
});
increase.addEventListener('click', () => {
    changeNumber(10)
});
decrease.addEventListener('dblclick', () =>  {
    changeNumber(-5);
});
increase.addEventListener('dblclick', () => {
    changeNumber(5);
});

