// Toasting logic
function toastBread() {
    let toastMessages = [
        "The toast is perfect!",
        "Your toast is slightly burnt!",
        "The toast is a little undercooked!",
        "Nice and crispy toast!"
    ];
    
    let randomMessage = toastMessages[Math.floor(Math.random() * toastMessages.length)];
    document.getElementById('toastResult').innerText = randomMessage;
}
