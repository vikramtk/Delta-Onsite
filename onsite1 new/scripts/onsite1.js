var prices = document.getElementById('price');

var price = 4.00;
var salad = 0;
var bacon = 0;
var cheese = 0;
var meat = 0;
var s=0;
var b=0;
var c=0;
var m=0;
var arrs=[];
var arrb=[];
var arrc=[];
var arrm=[];

const burgertop = document.getElementById('top');

var topimg = new Image();
topimg.src = "images/top.png";
burgertop.appendChild(topimg);

var botimg = new Image();
botimg.src = "images/bottom.png";
burgertop.appendChild(botimg);

const sal = document.getElementById('sal');

let Buttons5 = document.getElementById('b5');
Buttons5.onclick = function()
{
  salad++;
  sal.innerHTML = salad;
  price += 0.40;
  prices.innerHTML = price.toFixed(2);

  burgertop.removeChild(botimg);
  var salimg = new Image();
  salimg.src = "images/salad.png";
  burgertop.appendChild(salimg);
  burgertop.appendChild(botimg);

  arrs[s] = salimg;
  s++;
}

let Buttons1 = document.getElementById('b1');
Buttons1.onclick = function()
{
  if(salad>0){
  salad--;
  price -= 0.40;
  prices.innerHTML = price.toFixed(2);
  s--;
  burgertop.removeChild(arrs[s]);
  }
  sal.innerHTML = salad;
}

const bac = document.getElementById('bac');

let Buttons6 = document.getElementById('b6');
Buttons6.onclick = function()
{
  bacon++;
  bac.innerHTML = bacon;
  price += 1.20;
  prices.innerHTML = price.toFixed(2);

  burgertop.removeChild(botimg);
  var bacimg = new Image();
  bacimg.src = "images/bacon.png";
  burgertop.appendChild(bacimg);
  burgertop.appendChild(botimg);

  arrb[b] = bacimg;
  b++;
}

let Buttons2 = document.getElementById('b2');
Buttons2.onclick = function()
{
  if(bacon>0){
  bacon--;
  price -= 1.20;
  prices.innerHTML = price.toFixed(2);
  b--;
  burgertop.removeChild(arrb[b]);
  }
  bac.innerHTML = bacon;
}

const che = document.getElementById('che');

let Buttons7 = document.getElementById('b7');
Buttons7.onclick = function()
{
  cheese++;
  che.innerHTML = cheese;
  price += 0.80;
  prices.innerHTML = price.toFixed(2);

  burgertop.removeChild(botimg);
  var cheimg = new Image();
  cheimg.src = "images/cheese.png";
  burgertop.appendChild(cheimg);
  burgertop.appendChild(botimg);

  arrc[c] = cheimg;
  c++;
}

let Buttons3 = document.getElementById('b3');
Buttons3.onclick = function()
{
  if(cheese>0){
  cheese--;
  price -= 0.80;
  prices.innerHTML = price.toFixed(2);
  c--;
  burgertop.removeChild(arrc[c]);
  }
  che.innerHTML = cheese;
}

const mea = document.getElementById('mea');

let Buttons8 = document.getElementById('b8');
Buttons8.onclick = function()
{
  meat++;
  mea.innerHTML = meat;
  price += 1.80;
  prices.innerHTML = price.toFixed(2);

  burgertop.removeChild(botimg);
  var meaimg = new Image();
  meaimg.src = "images/meat.png";
  burgertop.appendChild(meaimg);
  burgertop.appendChild(botimg);

  arrm[m] = meaimg;
  m++;
}

let Buttons4 = document.getElementById('b4');
Buttons4.onclick = function()
{
  if(meat>0){
  meat--;
  price -= 1.80;
  prices.innerHTML = price.toFixed(2);
  m--;
  burgertop.removeChild(arrm[m]);
  }
  mea.innerHTML = meat;
}

let Buttons9 = document.getElementById('b9');
Buttons9.onclick = function(){
  alert("Order Placed" + "\n" + "Total Price is " + price.toFixed(2));

  price = 4.00;
  salad = 0;
  bacon = 0;
  cheese = 0;
  meat = 0;
  
  sal.innerHTML = salad;
  bac.innerHTML = bacon;
  che.innerHTML = cheese;
  mea.innerHTML = meat;
  prices.innerHTML = price.toFixed(2);

  while(s>0){
    s--;
    burgertop.removeChild(arrs[s]);
  }

  while(b>0){
    b--;
    burgertop.removeChild(arrb[b]);
  }

  while(c>0){
    c--;
    burgertop.removeChild(arrc[c]);
  }

  while(m>0){
    m--;
    burgertop.removeChild(arrm[m]);
  }
}
