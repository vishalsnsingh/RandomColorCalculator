const btn = document.querySelectorAll("button")
const input = document.getElementById("inp");

let initial = ''

const makeRandom = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return btnColor = `rgb(${r},${g},${b})`
}

for (let btns of btn) {
    btns.addEventListener('click', () => {
        btns.style.backgroundColor = makeRandom();
    })

    btns.addEventListener('click', (e) => {

        const buttonText = e.target.innerText;

        input.value = buttonText


        if (buttonText == 'Clear') {
            initial = ""
            input.value = initial
        }
        else if (buttonText == 'Enter') {
            input.value = eval(initial)
        }
        else {
            initial += buttonText
            input.value = initial
        }





    })
}





