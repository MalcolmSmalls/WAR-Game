
const newGame = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let deck = ""

  fetch(newGame)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          deck = data.deck_id
          console.log(deck)


      })
        .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const drawCards = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`

  fetch(drawCards)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      

        console.log(data)
        console.log(drawCards)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      












}




