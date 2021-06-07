document.addEventListener('DOMContentLoaded', () => {

const result = document.querySelector('#result')
const attempt = document.querySelector('#attempt')
const hideshow = document.getElementById('hideshow')
const grid = document.querySelector('.grid') 
const grid2 = document.getElementById('grid2')
const textline = document.getElementById('textline')
const gridhideshow  = document.getElementById('gridhideshow')
const cardarray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

cardarray.sort(() => 0.5 - Math.random())

let i=0;
var cardschosen = []
var cardschosenid = []
var cardswon =[]

board();


function board(){
    for (i=0; i < cardarray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)

    }
}

function flipcard(){
    var cardid = this.getAttribute('data-id')
    cardschosen.push(cardarray[cardid].name)
    cardschosenid.push(cardid)
    this.setAttribute('src', cardarray[cardid].img)
    if (cardschosen.length ===2){
      setTimeout(checkformatch, 300)
    }
    
}

let attemptcount = 0;

function checkformatch(){
    var cards = document.querySelectorAll('img')
    const optiononeid = cardschosenid[0]
    const optiontwoid = cardschosenid[1]

    if (optiononeid != optiontwoid){

    if (cardschosen[0] === cardschosen[1]){
      cards[optiononeid].setAttribute('src', 'images/white.png')
      cards[optiontwoid].setAttribute('src', 'images/white.png')
      cardswon.push(cardschosen)
    
    }else {
      cards[optiononeid].setAttribute('src', 'images/blank.png')
      cards[optiontwoid].setAttribute('src', 'images/blank.png')

    }
  }else {

  }


    cardschosen=[]
    cardschosenid=[]
    attemptcount++;
    let finalscore = cardswon.length;

    let scorepercentage = (finalscore/attemptcount)*100;

    result.textContent = finalscore
    if (finalscore === cardarray.length/2){
      hideshow.style.display = "none"
      // gridhideshow.style.display ="none"
      textline.textContent = "Your Score is"
      gridhideshow.textContent = ""
      grid2.textContent = Math.floor(scorepercentage) + " %"
    }
    attempt.textContent = attemptcount

}












})