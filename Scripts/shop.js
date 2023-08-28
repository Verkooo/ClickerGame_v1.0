let item1Cost = 10;
let item1Amount = 0;
function item1Buy()
{
 if(score >= item1Cost)
 {
  item1Amount++
  itemsOwn++
  score -= item1Cost;
  item1Cost = Math.round(item1Cost * 1.15);
  clickingPower = Math.round(clickingPower + Math.random()) + u15up;
  document.querySelector('.score').innerHTML=score;
  document.querySelector('.item1').innerHTML=`Papier Toaletowy x${item1Amount}`;
  document.querySelector('.price1').innerHTML=`CENA: ${item1Cost}`;
  opacityFunction();
  opacitySkillFunction();
  showDisplay('row2', 2, item1Amount);
  saveGame();
 }
}

let item2Cost = 100;
let item2Amount = 0;

function item2Buy()
{
 if(score >= item2Cost)
 {
  item2Amount++
  itemsOwn++
  score -= item2Cost;
  item2Cost = Math.round(item2Cost * 1.15);
  clickingPower += 1 + u3up;
  document.querySelector('.score').innerHTML=score;
  document.querySelector('.item2').innerHTML=`Piłka x${item2Amount}`;
  document.querySelector('.price2').innerHTML=`CENA: ${item2Cost}`;
  opacityFunction();
  opacitySkillFunction();
  showDisplay('row25', 25, item2Amount);
  saveGame();
 }
}

let item25Cost = 250;
let item25Amount = 0;

function item25Buy()
{
 if(score >= item25Cost)
 {
  item25Amount++
  itemsOwn++
  score -= item25Cost;
  item25Cost = Math.round(item25Cost * 1.25);
  clickingPower += 2 + u4up;
  document.querySelector('.score').innerHTML=score;
  document.querySelector('.item25').innerHTML=`But x${item25Amount}`;
  document.querySelector('.price25').innerHTML=`CENA: ${item25Cost}`;
  opacityFunction();
  opacitySkillFunction();
  showDisplay('row3', 3, item25Amount);
  saveGame();
 }
}

let item3Cost = 500;
let item3Amount = 0;

function item3Buy()
{
  if(score >= item3Cost)
  {
    if(uBuy5 === true)
    {
      u5up++;
    }
    item3Amount++;
    itemsOwn++
    score -= item3Cost;
    item3Cost = Math.round(item3Cost * 1.15);
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.item3').innerHTML=`Pajączek x${item3Amount}`;
    document.querySelector('.price3').innerHTML=`CENA: ${item3Cost}`;
    opacityFunction();
    opacitySkillFunction();
    showDisplay('row4', 4, item3Amount);
    updateCPS();
    saveGame();
  }
}
let item4Cost = 1000;
let item4Amount = 0;

function item4Buy()
{
  if(score >= item4Cost)
  {
    if(uBuy6 === true)
    {
      u6up = 2;
    }
    item4Amount++;
    itemsOwn++
    score -= item4Cost;
    item4Cost = Math.round(item4Cost * 1.15);
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.item4').innerHTML = `Spaghetti x${item4Amount}`;
    document.querySelector('.price4').innerHTML = `CENA: ${item4Cost}`;
    opacityFunction();
    opacitySkillFunction();
    showDisplay('row5', 5, item4Amount);
    updateCPS();
    saveGame();
  }
}

let item5Cost = 5000;
let item5Amount = 0;

function item5Buy()
{
  if(score >= item5Cost)
  {
    if(uBuy7 === true)
    {
      u7up = 5;
    }
    item5Amount++
    itemsOwn++
    score -= item5Cost;
    item5Cost = Math.round(item5Cost * 1.15);
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.item5').innerHTML = `Taki zwykły hotdog z keczapem x${item5Amount}`;
    document.querySelector('.price5').innerHTML = `CENA: ${item5Cost}`;
    opacityFunction();
    opacitySkillFunction();
    showDisplay('row6', 6, item5Amount);
    updateCPS();
    saveGame();
  }
}

let item6Cost = 15000;
let item6Amount = 0;

function item6Buy()
{
  if(score >= item6Cost)
  {
    if(uBuy8 === true)
    {
      u8up = 3;
    }
    item6Amount++
    itemsOwn++
    score -= item6Cost;
    item6Cost = Math.round(item6Cost * 1.15);
    clickingPower += 2 + u8cp;
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.item6').innerHTML = `Coca Cola x${item6Amount}`;
    document.querySelector('.price6').innerHTML = `CENA: ${item6Cost}`;
    opacityFunction();
    opacitySkillFunction();
    updateCPS();
    saveGame();
  }
}

let skin2Able = false;
let skin3Able = false;
let skin4Able = false;
let skin5Able = false;
let skin6Able = false;
let skin7Able = false;
let skin8Able = false;
let skin9Able = false;
let skin10Able = false;

let cpsAddSkill = 1;
let cpsAdd = 0;
let cps2AddSkill = 1;

setInterval(function()
{
  cpsAdd = (((item3Amount + u5up) + (item4Amount * 2 + u6up) + (item5Amount * 5 + u7up) + (item6Amount * 3 + u8up))  * cpsUpgrade ) * cpsAddSkill * cps2AddSkill;
  score += cpsAdd;
  allTimeScore += cpsAdd;
  cpsScore += cpsAdd;
  document.querySelector('.score').innerHTML = score;
  opacityFunction();
  opacitySkillFunction();
  skinFunction();
  upgradeFunction();

  if(allTimeScore >= 5000 && skin2Able === false)
  {
    skinsOwn++;
    skin2Able = true;
  }
  else if(allTimeScore >= 10000 && skin3Able === false)
  {
    skinsOwn++;
    skin3Able = true;
  }
  else if(allTimeScore >= 50000 && skin4Able === false)
  {
    skinsOwn++;
    skin4Able = true;
  }
  else if(allTimeScore >= 100000 && skin5Able === false)
  {
    skinsOwn++;
    skin5Able = true;
  }
  else if(allTimeScore >= 500000 && skin6Able === false)
  {
    skinsOwn++;
    skin6Able = true;
  }
  else if(allTimeScore >= 1000000 && skin7Able === false)
  {
    skinsOwn++;
    skin7Able = true;
  }
  else if(allTimeScore >= 10000000 && skin8Able === false)
  {
    skinsOwn++;
    skin8Able = true;
  }
  else if(allTimeScore >= 50000000 && skin9Able === false)
  {
    skinsOwn++;
    skin9Able = true;
  }
  else if(allTimeScore >= 100000000 && skin10Able === false)
  {
    skinsOwn++;
    skin10Able = true;
  }
   
  document.title = `Score: ${score} - Kradżewski Clicker`;

}, 1000);
