function skillUseTime(skillTime, sPrice)
{
  let useTimeInterval = setInterval(function()
  {
    skillTime--;
    document.querySelector(`.${sPrice}`).innerHTML = `${skillTime}s`;

    if(skillTime === 0)
    {
      clearInterval(useTimeInterval);
    }
  }, 1000)
}

function skillsTimeout(skillTimeout, sPrice, timeoutnum, stimenum, skillTime)
{
  document.querySelector(`.${sPrice}`).innerHTML = `${skillTimeout}min`;

  let skillTimeoutInterval = setInterval(function()
  {
    skillTimeout--;
    document.querySelector(`.${sPrice}`).innerHTML = `${skillTimeout}min`;
    if(skillTimeout === 1)
    {
      document.querySelector(`.${sPrice}`).innerHTML = `${skillTimeout}min`;
      skillTimeout *= 60;
      clearInterval(skillTimeoutInterval);

      let innerInterval = setInterval(function()
      {
        skillTimeout--;
        document.querySelector(`.${sPrice}`).innerHTML = `${skillTimeout}s`;
        if(skillTimeout === 0)
        {
          skillTime = stimenum;
          skillTimeout = timeoutnum;
          clearInterval(innerInterval);
        }
      }, 1000);
    };
  }, 60000);
};

function skillOpacity(skillImg, skill, sBtn, sRow)
{
    document.querySelector(`.${skillImg}`).style.opacity = '0.35';
    document.querySelector(`.${skill}`).style.opacity = '0.35';
    document.querySelector(`.${sBtn}`).style.opacity = '0.35';
    document.querySelector(`.${sRow}`).style.backgroundColor = 'rgba(128, 128, 128, 0.35)';
}

function skillDisplay(isBuy, sRow)
{
  if(isBuy === true)
  {
    document.querySelector(`.${sRow}`).classList.remove(`display-skills`);
  }
}

let skillsUse = 0;

let skill1Cost = 5000;
let skill1Time = 30;
let skill1Timeout = 2;
let isBuy1 = false;
let isOn1 = false;

function skill1Buy()
{
  if(score >= skill1Cost)
  {
    score -= skill1Cost;
    skillsOwn++;
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn1').innerHTML='Use';
    document.querySelector('.sBtn1').style.marginLeft = "23%"
    document.querySelector('.sPrice1').classList.add('off');
    opacityFunction();
    isBuy1 = true;
    skillDisplay(isBuy1, 'sRow2');
    saveGame();
  }
}

function skill1Use()
{
  clickingPower *= 2;
  skillsUsed++;
  skillsUse++;
  document.querySelector('.sPrice1').classList.remove('off');
  document.querySelector('.sPrice1').style.marginLeft = '20%';
  document.querySelector('.sBtn1').classList.add('off');
  document.querySelector('.sPrice1').innerHTML = `${skill1Time}s`;
  skillUseTime(skill1Time, 'sPrice1');
  timeout1();
}

function timeout1()
{
  setTimeout(function()
  {
    clickingPower /= 2;
    skillsUse--;
    skillsTimeout(skill1Timeout, 'sPrice1', 2, 30, skill1Time);
    skillOpacity('skill-img1', 'skill1', 'sBtn1', 'sRow1');
    isOn1 = true;
    setTimeout(function()
    {
      document.querySelector('.sBtn1').classList.remove('off');
      document.querySelector('.sPrice1').classList.add('off');
      document.querySelector('.skill-img1').style.opacity = '1';
      document.querySelector('.skill1').style.opacity = '1';
      document.querySelector('.sBtn1').style.opacity = '1';
      document.querySelector('.sRow1').style.backgroundColor = 'gray';
      saveGame();
    }, 120000)
  }, 30000)
}

let skill2Cost = 25000;
let skill2Time = 60;
let skill2Timeout = 5;
let isBuy2 = false;
let isOn2 = false;

function skill2Buy()
{
  if(score >= skill2Cost)
  {
    score -= skill2Cost;
    skillsOwn++;
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn2').innerHTML='Use';
    document.querySelector('.sBtn2').style.marginLeft = "40%"
    document.querySelector('.sPrice2').classList.add('off');
    opacityFunction();
    isBuy2 = true;
    skillDisplay(isBuy2, 'sRow3');
    saveGame();
  }
}

function skill2Use()
{
  cpsAddSkill *= 2;
  skillsUsed++;
  skillsUse++;
  document.querySelector('.cps').innerHTML = `${cpsAdd * 2} cps`;
  document.querySelector('.sPrice2').classList.remove('off');
  document.querySelector('.sPrice2').style.marginLeft = '37%';
  document.querySelector('.sBtn2').classList.add('off');
  document.querySelector('.sPrice2').innerHTML = `${skill2Time}s`;
  skillUseTime(skill2Time, 'sPrice2');
  timeout2();
}

function timeout2()
{
  setTimeout(function()
  {
    cpsAddSkill /= 2;
    skillsUse--;
    skillsTimeout(skill2Timeout, 'sPrice2', 5, 60, skill2Time);
    skillOpacity('skill-img2', 'skill2', 'sBtn2', 'sRow2');
    document.querySelector('.cps').innerHTML = `${cpsAdd / 2} cps`;
    isOn2 = true;
    setTimeout(function()
    {
      document.querySelector('.sBtn2').classList.remove('off');
      document.querySelector('.sPrice2').classList.add('off');
      document.querySelector('.skill-img2').style.opacity = '1';
      document.querySelector('.skill2').style.opacity = '1';
      document.querySelector('.sBtn2').style.opacity = '1';
      document.querySelector('.sRow2').style.backgroundColor = 'gray';
      document.querySelector('.sBtn2').style.marginLeft = '40%';
      saveGame();
    }, 300000)
  }, 60000)
}

let skill3Cost = 100000;
let skill3Time = 15;
let skill3Timeout = 10;
let isBuy3 = false;
let isOn3 = false;

function skill3Buy()
{
  if(score >= skill3Cost)
  {
    score -= skill3Cost;
    skillsOwn++;
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn3').innerHTML='Use';
    document.querySelector('.sBtn3').style.marginLeft = "5%";
    document.querySelector('.sPrice3').classList.add('off');
    opacityFunction();
    isBuy3 = true;
    skillDisplay(isBuy3, 'sRow4');
    saveGame();
  }
}

function skill3Use()
{
  clickingPower *= 4;
  skillsUsed++;
  skillsUse++;
  document.querySelector('.sPrice3').classList.remove('off');
  document.querySelector('.sBtn3').classList.add('off');
  document.querySelector('.sPrice3').innerHTML = `${skill3Time}s`;
  skillUseTime(skill3Time, 'sPrice3');
  timeout3();
}

function timeout3()
{
  setTimeout(function()
  {
    clickingPower /= 4;
    skillsUse--;
    skillsTimeout(skill3Timeout, 'sPrice3', 10, 15, skill3Time);
    skillOpacity('skill-img3', 'skill3', 'sBtn3', 'sRow3');
    isOn3 = true;
    document.querySelector('.sPrice3').innerHTML="10min";
    setTimeout(function()
    {
      document.querySelector('.sBtn3').classList.remove('off');
      document.querySelector('.sPrice3').classList.add('off');
      document.querySelector('.skill-img3').style.opacity = '1';
      document.querySelector('.skill3').style.opacity = '1';
      document.querySelector('.sBtn3').style.opacity = '1';
      document.querySelector('.sRow3').style.backgroundColor = 'gray';
      saveGame();
    }, 600000)
  }, 15000)
}

let skill4Cost = 200000;
let skill4Time = 30;
let skill4Timeout = 7;
let isBuy4 = false;
let isOn4 = false;

function skill4Buy()
{
  if(score >= skill4Cost)
  {
    score -= skill4Cost;
    skillsOwn++;
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn4').innerHTML='Use';
    document.querySelector('.sBtn4').style.marginLeft = "27%"
    document.querySelector('.sPrice4').classList.add('off');
    opacityFunction();
    isBuy4 = true;
    saveGame();
  }
}

function skill4Use()
{
  cps2AddSkill *= 3;
  skillsUsed++;
  skillsUse++;
  document.querySelector('.cps').innerHTML = `${cpsAdd * 3} cps`;
  document.querySelector('.sPrice4').classList.remove('off');
  document.querySelector('.sPrice4').style.marginLeft = '24%';
  document.querySelector('.sBtn4').classList.add('off');
  document.querySelector('.sPrice4').innerHTML = `${skill4Time}s`;
  skillUseTime(skill4Time, 'sPrice4');
  timeout4();
}

function timeout4()
{
  setTimeout(function()
  {
    cps2AddSkill /= 3;
    skillsUse--;
    skillsTimeout(skill4Timeout, 'sPrice4', 7, 30, skill4Time);
    skillOpacity('skill-img4', 'skill4', 'sBtn4', 'sRow4');
    document.querySelector('.cps').innerHTML = `${cpsAdd / 3} cps`;
    isOn4 = true;
    setTimeout(function()
    {
      document.querySelector('.sBtn4').classList.remove('off');
      document.querySelector('.sPrice4').classList.add('off');
      document.querySelector('.skill-img4').style.opacity = '1';
      document.querySelector('.skill4').style.opacity = '1';
      document.querySelector('.sBtn4').style.opacity = '1';
      document.querySelector('.sRow4').style.backgroundColor = 'gray';
      document.querySelector('.sBtn4').style.marginLeft = '27%';
      saveGame();
    }, 420000)
  }, 30000)
}