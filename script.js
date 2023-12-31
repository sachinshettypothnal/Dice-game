// generatye random number 1-

    
function rollDice(){
const firstRandomNum =Math.floor(Math.random() * 6) + 1;
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
//  second dice
const secondRandomNum =Math.floor(Math.random() * 6) + 1;
const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
if(firstRandomNum>secondRandomNum)
 {
    document.querySelector('h1').innerHTML='The Winner is User 1!';
 }
 else if(firstRandomNum<secondRandomNum)
 {
    document.querySelector('h1').innerHTML='The Winner is User 2!';
 }
 else{
    document.querySelector('h1').innerHTML='its a Draw!';
 }
}


 rollDice();




  