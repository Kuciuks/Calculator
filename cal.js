const display = document.getElementById("display");
const numpad = Array.from(document.getElementsByClassName("button")); // turns HTML collection to an array

numpad.map(button => { // goes through every element in numpad
    button.addEventListener("click", (_event) =>{ // if any elements from numpad array are pressed
        switch(_event.target.innerHTML){ // takes target elements inner HTML and runs its thorugh swtich()
            // if targets inner HTML matches any case then excecutes code
            // else excecutes code on default case
            case "C":
                display.innerHTML = "";
                break;
            case "=":
                try {
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = "error!"
                }
                break;
            case "()":
                display.innerHTML = "(" + display.innerHTML + ")";
                break;
            case "%":
                display.innerHTML = display.innerHTML / 100;
                break;
            case "Close":
                document.getElementById("body").style.display = "none";
                break;
            default:
                display.innerHTML += _event.target.innerHTML;
        }
    })
})

// gets element and adds event listener, if element has been clicked then run function
const open = document.getElementById("open").addEventListener("click", (_open) =>{
    document.getElementById("body").style.display = "block";
})


const mode = document.getElementById("mode");
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const open1 = document.getElementById("open")
const calBody = document.getElementById("body");
mode.onclick = function(){
    mode.classList.toggle("active");
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    open1.classList.toggle("active");
    calBody.classList.toggle("active");
    display.classList.toggle("active");
    for(let i = 0; i <= numpad.length; i++){
        numpad[i].classList.toggle("active");
    }
}