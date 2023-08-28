function skill1Check()
{
  if(isBuy1 === true && isOn1 === false)
  {
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn1').innerHTML='Use';
    document.querySelector('.sBtn1').style.marginLeft = "23%"
    document.querySelector('.sPrice1').classList.add('off');
    opacityFunction();
  }
  else if(isBuy1 === true && isOn1 === true)
  {
      skillsTimeout(skill1Timeout, 'sPrice1', 2, 30, skill1Time);
      skillOpacity('skill-img1', 'skill1', 'sBtn1', 'sRow1');
      
      setTimeout(function()
      {
        document.querySelector('.sBtn1').classList.remove('off');
        document.querySelector('.sPrice1').classList.add('off');
        document.querySelector('.skill-img1').style.opacity = '1';
        document.querySelector('.skill1').style.opacity = '1';
        document.querySelector('.sBtn1').style.opacity = '1';
        document.querySelector('.sRow1').style.backgroundColor = 'gray';
        isOn1 = false;
        document.querySelector('.score').innerHTML=score;
        document.querySelector('.sBtn1').innerHTML='Use';
        document.querySelector('.sBtn1').style.marginLeft = "25%"
        document.querySelector('.sPrice1').classList.add('off');
        opacityFunction();
        saveGame();
      }, 120000)
  }
}

function skill2Check()
{
  if(isBuy2 === true && isOn2 === false)
  {
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn2').innerHTML='Use';
    document.querySelector('.sBtn2').style.marginLeft = "40%"
    document.querySelector('.sPrice2').classList.add('off');
    opacityFunction();
  }
  else if(isBuy2 === true && isOn2 === true)
  {
      
      skillsTimeout(skill2Timeout, 'sPrice2', 5, 60, skill2Time);
      skillOpacity('skill-img2', 'skill2', 'sBtn2', 'sRow2');
      
      setTimeout(function()
      {
        document.querySelector('.sBtn2').classList.remove('off');
        document.querySelector('.sPrice2').classList.add('off');
        document.querySelector('.skill-img2').style.opacity = '1';
        document.querySelector('.skill2').style.opacity = '1';
        document.querySelector('.sBtn2').style.opacity = '1';
        document.querySelector('.sRow2').style.backgroundColor = 'gray';
        isOn2 = false;
        document.querySelector('.score').innerHTML=score;
        document.querySelector('.sBtn2').innerHTML='Use';
        document.querySelector('.sBtn2').style.marginLeft = "40%"
        document.querySelector('.sPrice2').classList.add('off');
        opacityFunction();
        saveGame();
      }, 300000)
  }
}

function skill3Check()
{
  if(isBuy3 === true && isOn3 === false)
  {
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn3').innerHTML='Use';
    document.querySelector('.sBtn3').style.marginLeft = "5%"
    document.querySelector('.sPrice3').classList.add('off');
    opacityFunction();
  }
  else if(isBuy3 === true && isOn3 === true)
  {
      skillsTimeout(skill3Timeout, 'sPrice3', 10, 15, skill1Time);
      skillOpacity('skill-img3', 'skill3', 'sBtn3', 'sRow3');
      document.querySelector('.sBtn3').classList.add('off');
      
      setTimeout(function()
      {
        document.querySelector('.sBtn3').classList.remove('off');
        document.querySelector('.sPrice3').classList.add('off');
        document.querySelector('.skill-img3').style.opacity = '1';
        document.querySelector('.skill3').style.opacity = '1';
        document.querySelector('.sBtn3').style.opacity = '1';
        document.querySelector('.sRow3').style.backgroundColor = 'gray';
        isOn3 = false;
        document.querySelector('.score').innerHTML=score;
        document.querySelector('.sBtn3').innerHTML='Use';
        document.querySelector('.sBtn3').style.marginLeft = "5%"
        document.querySelector('.sPrice3').classList.add('off');
        opacityFunction();
        saveGame();
      }, 600000)
  }
}

function skill4Check()
{
  if(isBuy4 === true && isOn4 === false)
  {
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.sBtn4').innerHTML='Use';
    document.querySelector('.sBtn4').style.marginLeft = "27%"
    document.querySelector('.sPrice4').classList.add('off');
    opacityFunction();
  }
  else if(isBuy4 === true && isOn4 === true)
  {
      skillsTimeout(skill4Timeout, 'sPrice4', 7, 30, skill4Time);
      skillOpacity('skill-img4', 'skill4', 'sBtn4', 'sRow4');
      document.querySelector('.sBtn4').classList.add('off');
      document.querySelector('.sPrice4').style.marginLeft = '24%';
      
      setTimeout(function()
      {
        document.querySelector('.sBtn4').classList.remove('off');
        document.querySelector('.sPrice4').classList.add('off');
        document.querySelector('.skill-img4').style.opacity = '1';
        document.querySelector('.skill4').style.opacity = '1';
        document.querySelector('.sBtn4').style.opacity = '1';
        document.querySelector('.sRow4').style.backgroundColor = 'gray';
        isOn4 = false;
        document.querySelector('.score').innerHTML=score;
        document.querySelector('.sBtn4').innerHTML='Use';
        document.querySelector('.sBtn4').style.marginLeft = "27%"
        document.querySelector('.sPrice4').classList.add('off');
        opacityFunction();
        saveGame();
      }, 420000)
  }
}