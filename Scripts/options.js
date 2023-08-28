function optionsOpen()
{
  document.querySelector('.div-info').classList.remove('off');
  document.querySelector('.body1').style.opacity = "0.3";
  document.querySelector('.body1').classList.add('unselectable')
}
function optionsExit()
{
  document.querySelector('.div-info').classList.add('off');
  document.querySelector('.body1').style.opacity = "1";
  document.querySelector('.body1').classList.remove('unselectable')
}