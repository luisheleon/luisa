const $emojis = document.getElementById("emojis");
const emojis = [];
for (let i = 127744; i < 127820; i++) {
    emojis.push(
        `<div class="box">
            <span class="emoji-image">&#${i}<br></span>
            <div class="number"> 
                <h2 class="number-emoji">${i}</h2>
            </div>    
        </div> `
    );
}
$emojis.innerHTML += emojis.join("");