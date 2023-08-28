function upgradeCheck(uBuy, uRow)
 {
  if(uBuy === true)
  {
    document.querySelector(`.${uRow}`).style.display = 'none';
  }
 }

function upgradeDisplay(uCost, uRow)
{
  if(score >= (uCost * 0.75))
  {
    document.querySelector(`.${uRow}`).classList.remove('upgrade-display');
  }
}

let uBuy1 = false;
let u1Cost = 2500;

 function upgrade1Buy()
 {
  if(score >= u1Cost)
  {
    upgradesOwn++;
    score -= u1Cost;
    clickingPower *= 2;
    uBuy1 = true;
    document.querySelector('.uRow1').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
 }

 let uBuy15 = false;
 let u15Cost = 5000;
 let u15up = 0;

 function upgrade15Buy()
 {
  if(score >= u15Cost)
  {
    upgradesOwn++;
    score -= u15Cost;
    u15up++;
    uBuy15 = true;
    document.querySelector('.uRow15').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
 }

 let uBuy2 = false;
 let u2Cost = 100000;
 let cpsUpgrade = 1;

 function upgrade2Buy()
 {
  if(score >= u2Cost)
  {
    upgradesOwn++;
    score -= u2Cost;
    cpsUpgrade++;
    uBuy2 = true;
    document.querySelector('.cps').innerHTML = `${cps * 2} cps`;
    document.querySelector('.uRow2').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
 }

 
let uBuy3 = false;
let u3Cost = 10000;
let u3up = 0;

function upgrade3Buy()
{
  if(score >= u3Cost)
  {
    upgradesOwn++;
    score -= u3Cost;
    u3up++;
    uBuy3 = true;
    document.querySelector('.uRow3').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}

let uBuy4 = false;
let u4Cost = 20000;
let u4up = 0;

function upgrade4Buy()
{
  if(score >= u4Cost)
  {
    upgradesOwn++;
    score -= u4Cost;
    u4up++;
    uBuy4 = true;
    document.querySelector('.uRow4').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}

let uBuy5 = false;
let u5Cost = 35000;
let u5up = 0;

function upgrade5Buy()
{
  if(score >= u5Cost)
  {
    upgradesOwn++;
    score -= u5Cost;
    uBuy5 = true;
    document.querySelector('.uRow5').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}

let uBuy6 = false;
let u6Cost = 50000;
let u6up = 0;

function upgrade6Buy()
{
  if(score >= u6Cost)
  {
    upgradesOwn++;
    score -= u6Cost;
    uBuy6 = true;
    document.querySelector('.uRow6').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}

let uBuy7 = false;
let u7Cost = 75000;
let u7up = 0;

function upgrade7Buy()
{
  if(score >= u7Cost)
  {
    upgradesOwn++;
    score -= u7Cost;
    uBuy7 = true;
    document.querySelector('.uRow7').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}

let uBuy8 = false;
let u8Cost = 125000;
let u8up = 0;
let u8cp = 0;

function upgrade8Buy()
{
  if(score >= u8Cost)
  {
    upgradesOwn++;
    score -= u8Cost;
    uBuy8 = true;
    u8cp = 2;
    document.querySelector('.uRow8').style.display = 'none';
    document.querySelector('.score').innerHTML=score;
    opacityFunction();
    opacitySkillFunction();
    saveGame();
  }
}