let skin1 = false;
let skin2 = false;
let skin3 = false;
let skin4 = false;
let skin5 = false;
let skin6 = false;
let skin7 = false;
let skin8 = false;
let skin9 = false;
let skin10 = false;

function skin1Change()
{
  skin1 = true;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Styles/clicker.png")`;
  document.querySelector('.favicon').href = "Styles/clicker.png";
  resetExit();
  saveGame();
}

function skin2Change()
{
  skin1 = false;
  skin2 = true;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin2.png")`;
  document.querySelector('.favicon').href = "Images/skin2.png";
  resetExit();
  saveGame();
}

function skin3Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = true;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin3.png")`;
  document.querySelector('.favicon').href = "Images/skin3.png";
  resetExit();
  saveGame();
}

function skin4Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = true;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin4.png")`;
  document.querySelector('.favicon').href = "Images/skin4.png";
  resetExit();
  saveGame();
}

function skin5Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = true;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin5.png")`;
  document.querySelector('.favicon').href = "Images/skin5.png";
  resetExit();
  saveGame();
}

function skin6Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = true; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin6.png")`;
  document.querySelector('.favicon').href = "Images/skin6.png";
  resetExit();
  saveGame();
}

function skin7Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = true;
  skin8 = false; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin7.png")`;
  document.querySelector('.favicon').href = "Images/skin7.png";
  resetExit();
  saveGame();
}

function skin8Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = true; 
  skin9 = false;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin8.png")`;
  document.querySelector('.favicon').href = "Images/skin8.png";
  resetExit();
  saveGame();
}

function skin9Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = true;
  skin10 = false;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin9.png")`;
  document.querySelector('.favicon').href = "Images/skin9.png";
  resetExit();
  saveGame();
}

function skin10Change()
{
  skin1 = false;
  skin2 = false;
  skin3 = false;
  skin4 = false;
  skin5 = false;
  skin6 = false; 
  skin7 = false;
  skin8 = false; 
  skin9 = false;
  skin10 = true;
  document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin10.png")`;
  document.querySelector('.favicon').href = "Images/skin10.png";
  resetExit();
  saveGame();
}

function skinCheck()
{
  if(skin1 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Styles/clicker.png")`;
    document.querySelector('.favicon').href = "Styles/clicker.png";
  }
  else if(skin2 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin2.png")`;
    document.querySelector('.favicon').href = "Images/skin2.png";
  }
  else if(skin3 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin3.png")`;
    document.querySelector('.favicon').href = "Images/skin3.png";
  }
  else if(skin4 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin4.png")`;
    document.querySelector('.favicon').href = "Images/skin4.png";
  }
  else if(skin5 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin5.png")`;
    document.querySelector('.favicon').href = "Images/skin5.png";
  }
  else if(skin6 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin6.png")`;
    document.querySelector('.favicon').href = "Images/skin6.png";
  }
  else if(skin7 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin7.png")`;
    document.querySelector('.favicon').href = "Images/skin7.png";
  }
  else if(skin8 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin8.png")`;
    document.querySelector('.favicon').href = "Images/skin8.png";
  }
  else if(skin9 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin9.png")`;
    document.querySelector('.favicon').href = "Images/skin9.png";
  }
  else if(skin10 === true)
  {
    document.querySelector('.div-clicker').style.backgroundImage = `url("Images/skin10.png")`;
    document.querySelector('.favicon').href = "Images/skin10.png";
  }
}
