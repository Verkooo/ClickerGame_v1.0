function reset()
{
  document.querySelector('.div-reset').classList.remove('off');
  document.querySelector('.div-info').style.opacity = "0.4";
  document.querySelector('.body1').style.opacity = "0.1";
  document.querySelector('.exit-btn').classList.add('disabled');
}
function resetGame()
{
    let gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
}
function resetExit()
{
  document.querySelector('.div-reset').classList.add('off');
  document.querySelector('.div-info').classList.add('off');
  document.querySelector('.div-info').style.opacity = "1";
  document.querySelector('.body1').style.opacity = "1";
  document.querySelector('.exit-btn').classList.remove('disabled');
}
