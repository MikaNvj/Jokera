function clikeo(){
    // var menu = document.getElementsByClassName('menu');
    var menu = document.getElementById('hu');
    menu.classList.toggle('block')
 }
//  let card1 = document.querySelector('#card1')
// let card2 = document.querySelector('#card2')
// let cardtoggle1 = document.querySelector('#toggle1')
// let cardtoggle2 = document.querySelector('#toggle2')

// let btn = document.querySelector('.btn')

// btn.onclick = function(){
//     alert('click')
// }

// cardtoggle1.onclick = function (){
//     card1.classList.toggle('active')
// }

// cardtoggle2.onclick = function (){
//     card2.classList.toggle('active')
// }
setTimeout(()=>{
    document.querySelector('.preloader').style.display="none";
    document.getElementById('cont').classList.add('block');
},2500);