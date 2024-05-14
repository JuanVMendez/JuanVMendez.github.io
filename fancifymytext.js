function showAlert () { 
    alert("Hello, world!");
}

function increaseTextSize() {
    document.getElementById("user-input").style.fontSize = "24pt";   
}

function applyStyles() {
    var textarea = document.getElementById("user-input");
    var fancyRadio = document.getElementById("fancy");
    
    if (fancyRadio.checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.textDecoration = "underline";
        textarea.style.color = "blue";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
        textarea.style.color = "black";
    }
}

function uppercaseText() {
    var textarea = document.getElementById("user-input");
    textarea.value = textarea.value.toUpperCase();
    
    var sentences = textarea.value.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        
        if (sentence) {
            var words = sentence.split(" ");
            var lastWord = words.length - 1;
            words[lastWord] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    
    textarea.value = sentences.join(". ");
}
