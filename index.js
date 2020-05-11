// JavaScript File
function ageinput() {
    let age;
    age = document.getElementById("textbox").value;
    
    if (age >= 17) {
        alert("You are able to watch an R rated movie by yourself.");
    }
    else if (age >= 13) {
        alert("You can watch a pg-13 movie alone.");
    }
    else if (age >= 5) {
        alert("You can go watch a G or pg movie by yourself.")
    }
    else {
        alert("You are too young to watch most movies, sorry!")
    }
}