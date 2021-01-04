if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("SW Registered");
        console.log(registration);
    }).catch( error =>{
        console.log("SW Registered Failed");
        console.log(error);
    });
}

function increasespeed() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
function decreasespeed() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

function textToAudio() {
    let readouttext = document.getElementById("textinput").value;    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = readouttext;
    speech.rate = document.getElementById("number").value;
    window.speechSynthesis.speak(speech);
}