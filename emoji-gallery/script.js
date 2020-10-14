const $emoji = document.getElementById("emoji");

const emoji = [];

// These are the emojis for my gallery
for (let i = 127904; i < 127968; i++) {
    $emoji.innerHTML += `<div class="emoji">
    <p>&#${i};</p>
    <code>${i}</code>
    </div>`;
    console.log("divs")
}

// <p> = insert the emojis
// <code> = insert the hexadecimal code for the emojis