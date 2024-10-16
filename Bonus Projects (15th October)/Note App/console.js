const card=document.querySelector(".note");
const addButton=document.querySelector(".btn");
const cardsDiv=document.querySelector(".cards");
addButton.addEventListener("click", function(){
    const newCard= document.createElement("textarea");
    newCard.classList.add("note");
    newCard.placeholder="New Note...";
    cardsDiv.insertBefore(newCard, addButton);
});

cardsDiv.addEventListener("dblclick", (e) => {
    if (e.target.classList == 'note') {
        const message=confirm("Do you want to delete this note?");
        if(message){
            e.target.remove();
        }
        else{
            return 
        }
    } 
    else {
        return
    }
})

