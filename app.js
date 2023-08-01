class ColorSelectOption {
    constructor(color, id) {
      this.id = id;
      this.color = color;}
  }
  const colorCircle = [
    new ColorSelectOption('red', "redID"),
    new ColorSelectOption('orange', "orangeID"),
    new ColorSelectOption('yellow', "yellowID"),
    new ColorSelectOption('green', "greenID"),
    new ColorSelectOption('blue', "blueID"),
    new ColorSelectOption('indigo', "indigoID"),
    new ColorSelectOption('violet', "violetId"),
  ];
  function colorFunc(selectOption) {
    return `
      <div class="ball" style="background-color: ${selectOption.color};" 
      id="${selectOption.id}" onclick="selectColor('${selectOption.color}', '${selectOption.id}')"></div>
    `;
  }

  function selectColor(colorName,colorID) {
    let kj = document.getElementById("selectedColor");
    kj.textContent = "Selected option: " + colorName;
    document.body.style.backgroundColor = colorName;
    let newB=document.getElementById(colorID);
    newB.classList.add("myList");

  }
  window.addEventListener("load", () => {
    for (const selectOption of colorCircle) {
      document.getElementById("selectColorOption").innerHTML += colorFunc(selectOption);
    }
  });
