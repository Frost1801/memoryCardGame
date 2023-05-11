const cards = document.querySelectorAll('.card');
/*Prende tutte gli elementi html con classe .card*/

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip'); /*Aggiunge o rimuove la classe flip*/
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    /*se sono uguali disabilitiamo il click*/
    if (firstCard.dataset.nation === secondCard.dataset.nation){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }
    else{
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }, 1500);
    }
}

function shuffle(){
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let randomPosition = Math.floor(Math.random() * cards.length);
        card.style.order = randomPosition;
    }
}
function restart(){
    location.reload();
}

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('click', flipCard); /*Aggiunge un evento click a tutte le card*/
}


