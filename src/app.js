import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function randonExcuse(){
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const whoIndexRandon = Math.floor(Math.random()*who.length)
  const actionIndexRandon = Math.floor(Math.random()*who.length)
  const whatIndexRandon = Math.floor(Math.random()*who.length)
  const whenIndexRandon = Math.floor(Math.random()*who.length)

const excuse = `${who[whoIndexRandon]} ${action[actionIndexRandon]} ${what[whatIndexRandon]} ${when[whenIndexRandon]}`
return excuse 
}

window.onload = function() {
  
const p = document.getElementById("excuse")

p.innerHTML=randonExcuse()

};
