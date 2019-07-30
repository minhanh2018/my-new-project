function clickMe() {
    let textContent = document.getElementById("demo");
    if(textContent.innerHTML == "Hello JS") {
        textContent.innerHTML = "Hello HTML";
    } else {
        textContent.innerHTML = "Hello JS";
    }

}