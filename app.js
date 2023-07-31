class ColorSelectOption {
    constructor(color, id) {
      this.id = id;
      this.color = color;}
  }
  const colorCircle = [
    new ColorSelectOption('red', "red"),
    new ColorSelectOption('orange', "orange"),
    new ColorSelectOption('yellow', "yellow"),
    new ColorSelectOption('green', "green"),
    new ColorSelectOption('blue', "blue"),
    new ColorSelectOption('indigo', "indigo"),
    new ColorSelectOption('violet', "violet"),
  ];
  function colorFunc(selectOption) {
    return `
      <div class="ball" style="background-color: ${selectOption.color};" 
      id="${selectOption.id}" onclick="selectColor('${selectOption.id}')"></div>
    `;
  }
  function selectColor(colorName) {
    let kj = document.getElementById("selectedColor");
    kj.textContent = "Selected option: " + colorName;
    document.body.style.backgroundColor = colorName;
    let newB=document.getElementById(colorName);
    newB.classList.add("myList");

  }
  window.addEventListener("load", () => {
    for (const selectOption of colorCircle) {
      document.getElementById("selectColorOption").innerHTML += colorFunc(selectOption);
    }
  });
