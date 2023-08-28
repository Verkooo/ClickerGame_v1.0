function randomNumber(min, max)
{
  return Math.round(Math.random() * (max - min) + min)
}

function fadeOut(element, duration, finalOpacity, callback)
{
  let opacity = 0.8;
  let elementFadingInterval = window.setInterval(function()
  {
    opacity -= 50 / duration
    if(opacity <= finalOpacity)
    {
      clearInterval(elementFadingInterval);
      callback();
    }
    element.style.opacity = opacity;
  },50)
}

function createNumberOnclick(event)
{
  let clicker = document.querySelector('.clicker');

  let clickerOffSet = clicker.getBoundingClientRect();
  let position = 
  {
    x: event.pageX - clickerOffSet.left + randomNumber(-5, 5),
    y: event.pageY - clickerOffSet.top
  };

  let element = document.createElement("div");
  element.textContent = `+${clickingPower}`;
  element.classList.add("number", "unselectable");
  element.style.top = `${position.y}px`;
  element.style.left = `${position.x}px`;

  clicker.appendChild(element);
  let movementInterval = window.setInterval(function()
  {
    if(typeof element === "undefined" && element === null) clearInterval(movementInterval);

    position.y--
    element.style.top = `${position.y}px`
  }, 10);

  fadeOut(element, 3000, 0, function()
  {
    element.remove();
  });
}
