let score = 0;
let clickingPower = 1;
let allTimeScore = 0;
let clicks = 0;
let itemsOwn = 0;
let skillsOwn = 0;
let skillsUsed = 0;
let clickScore = 0;
let cpsScore = 0;
let skinsOwn = 1;
let upgradesOwn = 0;

function addToScore(amount)
{
  score += amount;
  allTimeScore += amount;
  clickScore += amount;
  clicks ++;
  document.querySelector('.score').innerHTML=score;
  opacityFunction();
  opacitySkillFunction()
  createNumberOnclick(event);
  skinFunction()
}

function updateCPS()
{
  cps = ((item3Amount + u5up) + (item4Amount * 2 + u6up) + (item5Amount * 5 + u7up) + (item6Amount * 3 + u8up)) * cpsUpgrade;
  document.querySelector('.cps').innerHTML=`${cps} cps`;
  opacityFunction();
  opacitySkillFunction()
  skinFunction()
}

function opacityRow2(itemCost, row)
{
  if(score < itemCost)
  {
    document.querySelector(`.${row}`).style.opacity = '0.35';
  }
  else 
  {
    document.querySelector(`.${row}`).style.opacity = '';
  }
}

function showDisplay(row, num, itemAmount)
{
  if(itemAmount >= 1)
  {
    document.querySelector(`.${row}`).classList.remove(`display-row-${num}`)
  }
}

setInterval(function()
{
  document.querySelector('.all-time-clicks').innerHTML = clicks;
  document.querySelector('.all-time-score').innerHTML = allTimeScore;
  document.querySelector('.items-own').innerHTML = itemsOwn;
  document.querySelector('.skills-own').innerHTML = skillsOwn;
  document.querySelector('.score-via-clicks').innerHTML = clickScore;
  document.querySelector('.score-via-cps').innerHTML = cpsScore;
  document.querySelector('.just-score').innerHTML = score;
  document.querySelector('.skills-own').innerHTML = skillsOwn;
  document.querySelector('.skills-used').innerHTML = skillsUsed;
  document.querySelector('.skins-own').innerHTML = skinsOwn;
  document.querySelector('.upgrades-own').innerHTML = upgradesOwn;
}, 5000)

function skillOpacityRow(skillCost, sRow, isBuy)
{
  if(score < skillCost && isBuy === false)
  {
    document.querySelector(`.${sRow}`).style.opacity = '0.35';
  }
  else
  {
    document.querySelector(`.${sRow}`).style.opacity = '';
  }
}

function skinAble(num, imgNum)
{
  if(allTimeScore < num)
  {
    document.querySelector(`.skin-img${imgNum}`).src = `Images/skin${imgNum}Blocked.png`;
    document.querySelector(`.skin-btn${imgNum}`).classList.add('disabled');
  }
  else if(allTimeScore >= num)
  {
    document.querySelector(`.skin-img${imgNum}`).src = `Images/skin${imgNum}.png`;
    document.querySelector(`.skin-btn${imgNum}`).classList.remove('disabled');
  }
}

function opacityFunction()
{
  opacityRow2(item1Cost, 'row1');
  opacityRow2(item2Cost, 'row2');
  opacityRow2(item3Cost, 'row3');
  opacityRow2(item4Cost, 'row4');
  opacityRow2(item25Cost, 'row25');
  opacityRow2(item5Cost, 'row5');
  opacityRow2(item6Cost, 'row6');
  opacityRow2(u1Cost, 'uRow1');
  opacityRow2(u15Cost, 'uRow15');
  opacityRow2(u2Cost, 'uRow2');
  opacityRow2(u3Cost, 'uRow3');
  opacityRow2(u4Cost, 'uRow4');
  opacityRow2(u5Cost, 'uRow5');
  opacityRow2(u6Cost, 'uRow6');
  opacityRow2(u7Cost, 'uRow7');
  opacityRow2(u8Cost, 'uRow8');
}

function opacitySkillFunction()
{
  skillOpacityRow(skill1Cost, 'sRow1', isBuy1);
  skillOpacityRow(skill2Cost, 'sRow2', isBuy2);
  skillOpacityRow(skill3Cost, 'sRow3', isBuy3);
  skillOpacityRow(skill4Cost, 'sRow4', isBuy4);
}

function skinFunction()
{
  skinAble(5000, '2');
  skinAble(10000, '3');
  skinAble(50000, '4');
  skinAble(100000, '5');
  skinAble(500000, '6');
  skinAble(1000000, '7');
  skinAble(10000000, '8');
  skinAble(50000000, '9');
  skinAble(100000000, '10');
}

function upgradeFunction()
{
  upgradeDisplay(u2Cost, 'uRow2');
  upgradeDisplay(u15Cost, 'uRow15');
  upgradeDisplay(u3Cost, 'uRow3');
  upgradeDisplay(u4Cost, 'uRow4');
  upgradeDisplay(u5Cost, 'uRow5');
  upgradeDisplay(u6Cost, 'uRow6');
  upgradeDisplay(u7Cost, 'uRow7');
  upgradeDisplay(u8Cost, 'uRow8');
}

setInterval(function()
{
  if(skillsUse === 0)
  {
    document.querySelector('.row1').classList.remove('disabled');
    document.querySelector('.row2').classList.remove('disabled');
    document.querySelector('.row25').classList.remove('disabled');
    document.querySelector('.row3').classList.remove('disabled');
    document.querySelector('.row4').classList.remove('disabled');
    document.querySelector('.row5').classList.remove('disabled');
    document.querySelector('.row6').classList.remove('disabled');
    document.querySelector('.uRow1').classList.remove('disabled');
    document.querySelector('.uRow15').classList.remove('disabled');
    document.querySelector('.uRow2').classList.remove('disabled');
    document.querySelector('.uRow3').classList.remove('disabled');
    document.querySelector('.uRow4').classList.remove('disabled');
    document.querySelector('.uRow5').classList.remove('disabled');
    document.querySelector('.uRow6').classList.remove('disabled');
    document.querySelector('.uRow7').classList.remove('disabled');
    document.querySelector('.uRow8').classList.remove('disabled');
    document.querySelector('.kak1').classList.remove('disabled');
    document.querySelector('.kak2').classList.remove('disabled');
  }
  else
  {
    document.querySelector('.row1').classList.add('disabled');
    document.querySelector('.row2').classList.add('disabled');
    document.querySelector('.row25').classList.add('disabled');
    document.querySelector('.row3').classList.add('disabled');
    document.querySelector('.row4').classList.add('disabled');
    document.querySelector('.row5').classList.add('disabled');
    document.querySelector('.row6').classList.add('disabled');
    document.querySelector('.uRow1').classList.add('disabled');
    document.querySelector('.uRow15').classList.add('disabled');
    document.querySelector('.uRow2').classList.add('disabled');
    document.querySelector('.uRow3').classList.add('disabled');
    document.querySelector('.uRow4').classList.add('disabled');
    document.querySelector('.uRow5').classList.add('disabled');
    document.querySelector('.uRow6').classList.add('disabled');
    document.querySelector('.uRow7').classList.add('disabled');
    document.querySelector('.uRow8').classList.add('disabled');
    document.querySelector('.kak1').classList.add('disabled');
    document.querySelector('.kak2').classList.add('disabled');
  }
}, 500)
