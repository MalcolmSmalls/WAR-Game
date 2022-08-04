//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const newGame = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'


  fetch(newGame)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let deck = data.deck_id


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


const drawCards = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`

