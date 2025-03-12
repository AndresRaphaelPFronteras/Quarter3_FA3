
function randomizeNumbers() {
    document.getElementById("1").innerHTML = 
        "1. He can only handle at most " + String(Math.floor((Math.random() * 20) + 1)) + " years.";
    document.getElementById("2").innerHTML = 
        "2. Your signal is the letter " + String(findLetter(Math.floor((Math.random() * 20) + 1)));
    document.getElementById("3").innerHTML =
        "3. " + String(Math.floor((Math.random() * 20) + 1)) + " seconds left.";
}
    
function findLetter(number) {  
    
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
    return letters[number - 1];
}

