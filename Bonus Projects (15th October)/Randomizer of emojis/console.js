const button = document.querySelector('.btn');
const emojiName = document.querySelector('.emojiName');
const apiKey = "29f36f9bd30a43d1433b24eedd5d4e2599e86aa5"


const fetchEmoji= async function (){
    let emojiResponse = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`)
    let emojiData = await emojiResponse.json()
    if (emojiData === "404") {
        alert('There is problem with API');
        return;
    }
    else {
        const randomNumber = Math.floor(Math.random() * 1860);
        emojiName.innerHTML = emojiData[randomNumber].unicodeName;
        button.innerHTML = emojiData[randomNumber].character;

    }
}

button.addEventListener('click', fetchEmoji)