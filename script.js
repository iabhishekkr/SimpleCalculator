let display = document.getElementById('res');
let ansbtn = document.getElementById('ans');
let str = "";

let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerText == '=') {
            let res = eval(str);
            display.value = res;
            str = res;
        }
        else if (e.target.innerText == 'Clear') {
            display.value = "";
            str = "";
        }
        else if (e.target.innerText == 'x') {
            str = str.substring(0, str.length - 1);
            display.value = str;
        }
        else {
            str += e.target.innerText;
            display.value = str;
        }
    })
})