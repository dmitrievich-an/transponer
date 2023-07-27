let startButton = document.querySelector(".start-button")


startButton.addEventListener('click', () => {
  let areaValue = document.getElementById("inputNotes").value.split("\n");
  document.querySelector(".result").innerHTML = areaValue;
  console.log(areaValue[0]);
});