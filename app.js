var numberSequence = [];
var audio = new Audio('911Audio.m4a');
const correct911Sequence = "911";

function makeCall(){
    if (numberSequence.join("") === correct911Sequence) {
        //will need to call some type of audio file here
        audio.play();
        alert("Fuck Yeah! You Fucking Dialed 911!! Your parents will live!!")
    } else {
        alert("Fuck No!! You didn't dial 911!! Don't let your parents die!!")
    }
};

function addNumber(val){
    numberSequence.push(val);
    document.getElementById("phoneNumber").innerHTML = numberSequence.join("");
};

function deleteDigit(){
    numberSequence.pop();
    document.getElementById("phoneNumber").innerHTML = numberSequence.join("");
};

