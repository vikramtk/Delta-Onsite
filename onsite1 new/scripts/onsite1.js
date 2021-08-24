var prices = document.getElementById('price');

var price = 4.00;
var salad = 0;
var bacon = 0;
var cheese = 0;
var meat = 0;

const sal = document.getElementById('sal');
const burgertop1 = document.getElementById('top1');
const burgertop2 = document.getElementById('top2');
const burgertop3 = document.getElementById('top3');
const burgertop4 = document.getElementById('top4');

let Buttons5 = document.getElementById('b5');
Buttons5.onclick = function()
{
  salad++;
  sal.innerHTML = salad;
  var h=parseInt(burgertop1.style.height);
  burgertop1.style.height = (h+20) + "px";
  price += 0.40;
  prices.innerHTML = price.toFixed(2);
}

let Buttons1 = document.getElementById('b1');
Buttons1.onclick = function()
{
  if(salad>0){
  salad--;
  var h=parseInt(burgertop1.style.height);
  burgertop1.style.height = (h-20) + "px";
  price -= 0.40;
  prices.innerHTML = price.toFixed(2);
  }
  sal.innerHTML = salad;
}

const bac = document.getElementById('bac');

let Buttons6 = document.getElementById('b6');
Buttons6.onclick = function()
{
  bacon++;
  bac.innerHTML = bacon;
  var h=parseInt(burgertop2.style.height);
  burgertop2.style.height = (h+25) + "px";
  price += 1.20;
  prices.innerHTML = price.toFixed(2);
}

let Buttons2 = document.getElementById('b2');
Buttons2.onclick = function()
{
  if(bacon>0){
  bacon--;
  var h=parseInt(burgertop2.style.height);
  burgertop2.style.height = (h-25) + "px";
  price -= 1.20;
  prices.innerHTML = price.toFixed(2);
  }
  bac.innerHTML = bacon;
}

const che = document.getElementById('che');

let Buttons7 = document.getElementById('b7');
Buttons7.onclick = function()
{
  cheese++;
  che.innerHTML = cheese;
  var h=parseInt(burgertop3.style.height);
  burgertop3.style.height = (h+10) + "px";
  price += 0.80;
  prices.innerHTML = price.toFixed(2);
}

let Buttons3 = document.getElementById('b3');
Buttons3.onclick = function()
{
  if(cheese>0){
  cheese--;
  var h=parseInt(burgertop3.style.height);
  burgertop3.style.height = (h-10) + "px";
  price -= 0.80;
  prices.innerHTML = price.toFixed(2);
  }
  che.innerHTML = cheese;
}

const mea = document.getElementById('mea');

let Buttons8 = document.getElementById('b8');
Buttons8.onclick = function()
{
  meat++;
  mea.innerHTML = meat;
  var h=parseInt(burgertop4.style.height);
  burgertop4.style.height = (h+20) + "px";
  price += 1.80;
  prices.innerHTML = price.toFixed(2);
}

let Buttons4 = document.getElementById('b4');
Buttons4.onclick = function()
{
  if(meat>0){
  meat--;
  var h=parseInt(burgertop4.style.height);
  burgertop4.style.height = (h-20) + "px";
  price -= 1.80;
  prices.innerHTML = price.toFixed(2);
  }
  mea.innerHTML = meat;
}

let Buttons9 = document.getElementById('b9');
Buttons9.onclick = function(){
    alert("Order Placed" + "\n" + "Total Price is " + price.toFixed(2));
}