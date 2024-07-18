// Basic Project

const freeze = document.getElementById("freezeButton").addEventListener("click", () => {

    alert("Get Ready for a screen Hang 😜")
    setTimeout(() => {

    },2000)

    let startTime = new Date().getTime();
    while (new Date().getTime() - startTime < 15000){

    }
    alert("That was fun, right? 😆 The browser hung for 15 seconds!");
})