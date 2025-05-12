// Function to show the welcome message immediately when the page loads
window.onload = function() {
    alert("Welcome Girlie 💖");
    // Alternatively, you can also display the message in a specific element on the page.
    const welcomeMessage = document.createElement("div");
    welcomeMessage.style.textAlign = "center";
    welcomeMessage.style.fontSize = "2rem";
    welcomeMessage.style.color = "#c2185b";
    welcomeMessage.textContent = "Welcome Girlie 💖";
    document.body.appendChild(welcomeMessage);
}

function changeDesc(artist) {
    const descriptions = {
        ariana: [
            "The queen of high notes and dreamy vibes 💕",
            "Sweetener in voice, dangerous woman in talent 🎶"
        ],
        taylor: [
            "The storyteller of our hearts ✨",
            "Every lyric is a hug or a heartbreak 💌"
        ],
        sabrina: [
            "The rising pop princess 🌟",
            "Tiny but fierce — her era has begun 💫"
        ],
        mariah: [
            "The legendary diva of vocals and holiday magic 🎄",
            "Butterfly of soul, goddess of whistle notes 🦋"
        ]
    };

    const desc = document.getElementById(`desc-${artist}`);
    const current = desc.textContent;
    const options = descriptions[artist];
    desc.textContent = current === options[0] ? options[1] : options[0];
}
