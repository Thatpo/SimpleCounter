const number = document.getElementsByClassName("number")[0];
const decrease = document.getElementsByClassName("decrease")[0];
const increase = document.getElementsByClassName("increase")[0];
const reset = document.getElementsByClassName("reset")[0];

let i = 0;
decrease.addEventListener("click", function () {
    i -= 1;
    check()
    String(i);
    number.innerText = i;
})

increase.addEventListener("click", function () {
    i += 1;
    check()
    String(i);
    number.innerText = i;
})

reset.addEventListener("click", function () {
    i = 0;
    check()
    String(i);
    number.innerText = i;
})

function check() {
    if (i < 0) {
        number.style.color = "red";
    }
    else if (i > 0) {
        number.style.color = "green";
    }
    else {
        number.style.color = "black";
    }

}