
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
  let player1 = `https://deckofcardsapi.com/api/deck/${deck}/pile/player1/add/?cards=AS,2S`
  let player1List =`https://deckofcardsapi.com/api/deck/${deck}/pile/player1/list/`
  let player2 = `https://deckofcardsapi.com/api/deck/${deck}/pile/player2/add/?cards=AS,2S`

  fetch(drawCards)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let firstHalf = data.code
        console.log(firstHalf)

        console.log(player1List)
        // console.log(data)
        console.log(player1)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      












}




