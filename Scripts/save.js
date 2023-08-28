function saveGame()
{
  let gameSave = 
  {
    score: score,
    clickingPower: clickingPower,
    item1Cost: item1Cost,
    item1Amount: item1Amount,
    item2Cost: item2Cost,
    item2Amount: item2Amount,
    item25Cost: item25Cost,
    item25Amount: item25Amount,
    item3Cost: item3Cost,
    item3Amount: item3Amount,
    item4Cost: item4Cost,
    item4Amount: item4Amount,
    allTimeScore: allTimeScore,
    clicks: clicks,
    itemsOwn: itemsOwn,
    skillsOwn: skillsOwn,
    skillsUsed: skillsUsed,
    clickScore: clickScore,
    cpsScore: cpsScore,
    skinsOwn: skinsOwn,
    upgradesOwn: upgradesOwn,
    isBuy1: isBuy1,
    isOn1: isOn1,
    skin1: skin1,
    skin2: skin2,
    skin3: skin3,
    skin4: skin4,
    skin5: skin5,
    skin6: skin6,
    skin7: skin7,
    skin8: skin8,
    skin9: skin9,
    skin10: skin10,
    skin2Able: skin2Able,
    skin3Able: skin3Able,
    skin4Able: skin4Able,
    skin5Able: skin5Able,
    skin6Able: skin6Able,
    skin7Able: skin7Able,
    skin8Able: skin8Able,
    skin9Able: skin9Able,
    skin10Able: skin10Able,
    isBuy2: isBuy2,
    isOn2: isOn2,
    item5Cost: item5Cost,
    item5Amount: item5Amount,
    isBuy3: isBuy3,
    isOn3: isOn3,
    uBuy1: uBuy1,
    uBuy2: uBuy2,
    cpsUpgrade: cpsUpgrade,
    uBuy15: uBuy15,
    u15up: u15up,
    uBuy3: uBuy3,
    u3up: u3up,
    item6Cost: item6Cost,
    item6Amount: item6Amount,
    uBuy4: uBuy4,
    u4up: u4up,
    isBuy4: isBuy4,
    isOn4: isOn4,
    uBuy5: uBuy5,
    u5up: u5up,
    uBuy6: uBuy6,
    u6up: u6up,
    uBuy7: uBuy7,
    u7up: u7up,
    uBuy8: uBuy8,
    u8up: u8up,
    u8cp: u8cp,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame()
{
  let savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if(typeof savedGame.score !== "undefined") score = savedGame.score;
  if(typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
  if(typeof savedGame.item1Cost !== "undefined") item1Cost = savedGame.item1Cost;
  if(typeof savedGame.item1Amount !== "undefined") item1Amount = savedGame.item1Amount;
  if(typeof savedGame.item2Cost !== "undefined") item2Cost = savedGame.item2Cost;
  if(typeof savedGame.item2Amount !== "undefined") item2Amount = savedGame.item2Amount;
  if(typeof savedGame.item25Cost !== "undefined") item25Cost = savedGame.item25Cost;
  if(typeof savedGame.item25Amount !== "undefined") item25Amount = savedGame.item25Amount;
  if(typeof savedGame.item3Cost !== "undefined") item3Cost = savedGame.item3Cost;
  if(typeof savedGame.item3Amount !== "undefined") item3Amount = savedGame.item3Amount;
  if(typeof savedGame.item4Cost !== "undefined") item4Cost = savedGame.item4Cost;
  if(typeof savedGame.item4Amount !== "undefined") item4Amount = savedGame.item4Amount;
  if(typeof savedGame.allTimeScore !== "undefined") allTimeScore = savedGame.allTimeScore;
  if(typeof savedGame.clicks !== "undefined") clicks = savedGame.clicks;
  if(typeof savedGame.itemsOwn !== "undefined") itemsOwn = savedGame.itemsOwn;
  if(typeof savedGame.skillsOwn !== "undefined") skillsOwn = savedGame.skillsOwn;
  if(typeof savedGame.skillsUsed !== "undefined") skillsUsed = savedGame.skillsUsed;
  if(typeof savedGame.clickScore !== "undefined") clickScore = savedGame.clickScore;
  if(typeof savedGame.cpsScore !== "undefined") cpsScore = savedGame.cpsScore;
  if(typeof savedGame.skinsOwn !== "undefined") skinsOwn = savedGame.skinsOwn;
  if(typeof savedGame.upgradesOwn !== "undefined") upgradesOwn = savedGame.upgradesOwn;
  if(typeof savedGame.isBuy1 !== "undefined") isBuy1 = savedGame.isBuy1;
  if(typeof savedGame.isOn1 !== "undefined") isOn1 = savedGame.isOn1;
  if(typeof savedGame.skin1 !== "undefined") skin1 = savedGame.skin1;
  if(typeof savedGame.skin2 !== "undefined") skin2 = savedGame.skin2;
  if(typeof savedGame.skin3 !== "undefined") skin3 = savedGame.skin3;
  if(typeof savedGame.skin4 !== "undefined") skin4 = savedGame.skin4;
  if(typeof savedGame.skin5 !== "undefined") skin5 = savedGame.skin5;
  if(typeof savedGame.skin6 !== "undefined") skin6 = savedGame.skin6;
  if(typeof savedGame.skin7 !== "undefined") skin7 = savedGame.skin7;
  if(typeof savedGame.skin8 !== "undefined") skin8 = savedGame.skin8;
  if(typeof savedGame.skin9 !== "undefined") skin9 = savedGame.skin9;
  if(typeof savedGame.skin10 !== "undefined") skin10 = savedGame.skin10;
  if(typeof savedGame.skin2Able !== "undefined") skin2Able = savedGame.skin2Able;
  if(typeof savedGame.skin3Able !== "undefined") skin3Able = savedGame.skin3Able;
  if(typeof savedGame.skin4Able !== "undefined") skin4Able = savedGame.skin4Able;
  if(typeof savedGame.skin5Able !== "undefined") skin5Able = savedGame.skin5Able;
  if(typeof savedGame.skin6Able !== "undefined") skin6Able = savedGame.skin6Able;
  if(typeof savedGame.skin7Able !== "undefined") skin7Able = savedGame.skin7Able;
  if(typeof savedGame.skin8Able !== "undefined") skin8Able = savedGame.skin8Able;
  if(typeof savedGame.skin9Able !== "undefined") skin9Able = savedGame.skin9Able;
  if(typeof savedGame.skin10Able !== "undefined") skin10Able = savedGame.skin10Able;
  if(typeof savedGame.isBuy2 !== "undefined") isBuy2 = savedGame.isBuy2;
  if(typeof savedGame.isOn2 !== "undefined") isOn2 = savedGame.isOn2;
  if(typeof savedGame.item5Cost !== "undefined") item5Cost = savedGame.item5Cost;
  if(typeof savedGame.item5Amount !== "undefined") item5Amount = savedGame.item5Amount;
  if(typeof savedGame.isBuy3 !== "undefined") isBuy3 = savedGame.isBuy3;
  if(typeof savedGame.isOn3 !== "undefined") isOn3 = savedGame.isOn3;
  if(typeof savedGame.uBuy1 !== "undefined") uBuy1 = savedGame.uBuy1;
  if(typeof savedGame.uBuy2 !== "undefined") uBuy2 = savedGame.uBuy2;
  if(typeof savedGame.cpsUpgrade !== "undefined") cpsUpgrade = savedGame.cpsUpgrade;
  if(typeof savedGame.uBuy15 !== "undefined") uBuy15 = savedGame.uBuy15;
  if(typeof savedGame.u15up !== "undefined") u15up = savedGame.u15up;
  if(typeof savedGame.uBuy3 !== "undefined") uBuy3 = savedGame.uBuy3;
  if(typeof savedGame.u3up !== "undefined") u3up = savedGame.u3up;
  if(typeof savedGame.item6Cost !== "undefined") item6Cost = savedGame.item6Cost;
  if(typeof savedGame.item6Amount !== "undefined") item6Amount = savedGame.item6Amount;
  if(typeof savedGame.uBuy4 !== "undefined") uBuy4 = savedGame.uBuy4;
  if(typeof savedGame.u4up !== "undefined") u4up = savedGame.u4up;
  if(typeof savedGame.isBuy4 !== "undefined") isBuy4 = savedGame.isBuy4;
  if(typeof savedGame.isOn4 !== "undefined") isOn4 = savedGame.isOn4;
  if(typeof savedGame.uBuy5 !== "undefined") uBuy5 = savedGame.uBuy5;
  if(typeof savedGame.u5up !== "undefined") u5up = savedGame.u5up;
  if(typeof savedGame.uBuy6 !== "undefined") uBuy6 = savedGame.uBuy6;
  if(typeof savedGame.u6up !== "undefined") u6up = savedGame.u6up;
  if(typeof savedGame.uBuy7 !== "undefined") uBuy7 = savedGame.uBuy7;
  if(typeof savedGame.u7up !== "undefined") u7up = savedGame.u7up;
  if(typeof savedGame.uBuy8 !== "undefined") uBuy8 = savedGame.uBuy8;
  if(typeof savedGame.u8up !== "undefined") u8up = savedGame.u8up;
  if(typeof savedGame.u8cp !== "undefined") u8cp = savedGame.u8cp;
}
window.onload = function()
{
  loadGame();
  skinCheck();
  skinFunction()
  opacity1('row1');
  opacity1('row2');
  opacity1('row3');
  opacity1('row4');
  opacity1('row25');
  opacity1('row5');
  opacity1('row6');
  opacity1('uRow1');
  opacity1('uRow2');
  opacity1('uRow15');
  opacity1('uRow3');
  opacity1('uRow4');
  opacity1('uRow5');
  opacity1('uRow6');
  opacity1('uRow7');
  opacity1('uRow8');
  showDisplay('row2', 2, item1Amount);
  showDisplay('row3', 3, item25Amount);
  showDisplay('row4', 4, item3Amount);
  showDisplay('row25', 25, item2Amount);
  showDisplay('row5', 5, item4Amount);
  showDisplay('row6', 6, item5Amount);
  skillDisplay(isBuy1, 'sRow2');
  skillDisplay(isBuy2, 'sRow3');
  skillDisplay(isBuy3, 'sRow4');
  updateCPS();
  opacitySkillFunction()
  skill1Check();
  skill2Check();
  skill3Check();
  skill4Check();
  upgradeCheck(uBuy1, 'uRow1');
  upgradeCheck(uBuy2, 'uRow2');
  upgradeCheck(uBuy15, 'uRow15');
  upgradeCheck(uBuy3, 'uRow3');
  upgradeCheck(uBuy4, 'uRow4');
  upgradeCheck(uBuy5, 'uRow5');
  upgradeCheck(uBuy6, 'uRow6');
  upgradeCheck(uBuy7, 'uRow7');
  upgradeCheck(uBuy8, 'uRow8');
  upgradeFunction();
  document.querySelector('.score').innerHTML = score;
  document.querySelector('.all-time-clicks').innerHTML = clicks;
  document.querySelector('.all-time-score').innerHTML = allTimeScore;
  document.querySelector('.items-own').innerHTML = itemsOwn;
  document.querySelector('.skills-own').innerHTML = skillsOwn;
  document.querySelector('.skills-used').innerHTML = skillsUsed;
  document.querySelector('.score-via-clicks').innerHTML = clickScore;
  document.querySelector('.score-via-cps').innerHTML = cpsScore;
  document.querySelector('.just-score').innerHTML = score;
  document.querySelector('.skins-own').innerHTML = skinsOwn;
  document.querySelector('.upgrades-own').innerHTML = upgradesOwn;
  document.querySelector('.item1').innerHTML=`Papier Toaletowy x${item1Amount}`;
  document.querySelector('.price1').innerHTML=`CENA: ${item1Cost}`;
  document.querySelector('.item2').innerHTML=`Piłka x${item2Amount}`;
  document.querySelector('.price2').innerHTML=`CENA: ${item2Cost}`;
  document.querySelector('.item25').innerHTML=`But x${item25Amount}`;
  document.querySelector('.price25').innerHTML=`CENA: ${item25Cost}`;
  document.querySelector('.item3').innerHTML=`Pajączek x${item3Amount}`;
  document.querySelector('.price3').innerHTML=`CENA: ${item3Cost}`;
  document.querySelector('.item4').innerHTML=`Spaghetti x${item4Amount}`;
  document.querySelector('.price4').innerHTML=`CENA: ${item4Cost}`;
  document.querySelector('.item5').innerHTML=`Taki zwykły hotdog z keczapem x${item5Amount}`;
  document.querySelector('.price5').innerHTML=`CENA: ${item5Cost}`;
  document.querySelector('.item6').innerHTML=`Coca Cola x${item6Amount}`;
  document.querySelector('.price6').innerHTML=`CENA: ${item6Cost}`;
  document.title = `Score: ${score} - Kradżewski Clicker`;
};
function opacity1(row)
{
  if(score === 0)
  {
    document.querySelector(`.${row}`).style.opacity = '0.35';
  }
}
