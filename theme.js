b = document.getElementById("bored-btn");


document.addEventListener('click', (e) => {
  const colorOption = e.target.closest('.color-option');
  if (!colorOption) return;

  // unselect currently selected color options
  document.querySelectorAll('.color-option').forEach(colorOption => colorOption.classList.remove('is-selected'));
  colorOption.classList.add('is-selected');

  color = colorOption.dataset.color;
  // let root = document.documentElement;
  // current_theme=color;
  // root.style.setProperty('--primary-color', color);
});


function th1() {
  effect.setOptions({
    color: 0xff3f81,
    backgroundColor: 0x23163b
  })
  b.style.backgroundColor="#ff0081";
  b.style.color="white";
  b.style.boxShadow= "0 2px 25px rgba(255, 0, 130, 0.5)";
}

function th2() {
  effect.setOptions({
    color: 0xffffff,
    backgroundColor: 0x17171b
  })
  b.style.backgroundColor="white";
  b.style.color="black";
  b.style.boxShadow = "0 2px 25px rgba(0, 0, 0, 0.5)";
}

function th3() {
  effect.setOptions({
    color: 0xc01010,
    backgroundColor: 0x1d0b0b
  })
  b.style.backgroundColor="#c01010";
  b.style.color="white";
  b.style.boxShadow = "0 2px 25px #c01010";
}

function th4() {
  effect.setOptions({
    color: 0x4bd424,
    backgroundColor: 0x0
  })
  b.style.backgroundColor="#4bd424";
  b.style.color="white";
  b.style.boxShadow = "0 2px 25px #4bd424";
}