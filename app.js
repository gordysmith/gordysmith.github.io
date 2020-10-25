var numberSequence = [];
var audio = new Audio('911Audio.m4a');
const correct911Sequence = "911";

function makeCall(){
    if (numberSequence.join("") === correct911Sequence) {
        audio.play();
        audio.addEventListener('ended', (event) => {
        $('#myModal').modal('show');
        })
       } else {
        alert("Whoops, you didn't quite get it. Try again. Don't let your parents die!!")
    }
};

audio.addEventListener('ended', (event) => {
    console.log('audio has been ended');
  })

function addNumber(val){
    numberSequence.push(val);
    document.getElementById("phoneNumber").innerHTML = numberSequence.join("");
};

function deleteDigit(){
    numberSequence.pop();
    document.getElementById("phoneNumber").innerHTML = numberSequence.join("");
};

