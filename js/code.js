let thanks = document.querySelector(".thankyou");


let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    let msg = document.createElement("h2");
    msg.textContent = "Thank you for using my site!";
    thanks.appendChild(msg);
    thanks.style.position = "absolute";
    thanks.style.color = "white";
    thanks.style.width = "100vw";
    thanks.style.height = "120vh";
    thanks.style.background = "rgb(58, 58, 158)";
    thanks.style.top = "0";
    thanks.style.left = "0px";
    thanks.style.transition = "fade-in opacity 3s";
    msg.style.position = "absolute";
    msg.style.top = "50vh";
    msg.style.left = "50%";
    msg.style.transform = "translate(-50%)";
})
