window.onload = function () {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning girlie 💐";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon girlie ☀️";
    } else if (hour >= 18 && hour < 23) {
        greeting = "Good evening girlie 🌆";
    } else {
        greeting = "Good night girlie 🌙";
    }

    // Show as alert
    alert(greeting);

    // Also show on the page
    const welcomeMessage = document.createElement("div");
    welcomeMessage.style.textAlign = "center";
    welcomeMessage.style.fontSize = "2rem";
    welcomeMessage.style.color = "#c2185b";
    welcomeMessage.style.marginTop = "20px";
    welcomeMessage.textContent = greeting;
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
};

// Function to change the description of an artist
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

    // Get the description element for the artist
    const desc = document.getElementById(`desc-${artist}`);
    if (!desc) {
        console.error(`Element with id 'desc-${artist}' not found.`);
        return;
    }

    // Toggle between the two descriptions
    const current = desc.textContent;
    const options = descriptions[artist];
    desc.textContent = current === options[0] ? options[1] : options[0];
}
