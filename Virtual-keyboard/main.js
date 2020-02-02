// create an input field
let input = document.createElement('textarea');
input.classList.add('input');
document.body.append(input);

let keysArray = [
  {keycode: "Backquote", key: "`"},
  {keycode: "Digit1", key: "1"},
  {keycode: "Digit2", key: "2"},
  {keycode: "Digit3", key: "3"},
  {keycode: "Digit4", key: "4"},
  {keycode: "Digit5", key: "5"},
  {keycode: "Digit6", key: "6"},
  {keycode: "Digit7", key: "7"},
  {keycode: "Digit8", key: "8"},
  {keycode: "Digit9", key: "9"},
  {keycode: "Digit0", key: "0"},
  {keycode: "Minus", key: "-"},
  {keycode: "Equal", key: "="},
  {keycode: "Backspace", key: "Backspace"},
  {keycode: "Tab", key: "Tab"},
  {keycode: "KeyQ", key: "q"},
  {keycode: "KeyW", key: "w"},
  {keycode: "KeyE", key: "e"},
  {keycode: "KeyR", key: "r"},
  {keycode: "KeyT", key: "t"},
  {keycode: "KeyY", key: "y"},
  {keycode: "KeyU", key: "u"},
  {keycode: "KeyI", key: "i"},
  {keycode: "KeyO", key: "o"},
  {keycode: "KeyP", key: "p"},
  {keycode: "BracketLeft", key: "["},
  {keycode: "BracketRight", key: "]"},
  {keycode: "Backslash", key: "&#92"},
  {keycode: "Delete", key: "Del"},
  {keycode: "CapsLock", key: "CapsLock"},
  {keycode: "KeyA", key: "a"},
  {keycode: "KeyS", key: "s"},
  {keycode: "KeyD", key: "d"},
  {keycode: "KeyF", key: "f"},
  {keycode: "KeyG", key: "g"},
  {keycode: "KeyH", key: "h"},
  {keycode: "KeyJ", key: "j"},
  {keycode: "KeyK", key: "k"},
  {keycode: "KeyL", key: "l"},
  {keycode: "Semicolon", key: ";"},
  {keycode: "Quote", key: "'"},
  {keycode: "Enter", key: "Enter"},
  {keycode: "ShiftLeft", key: "Shift"},
  {keycode: "KeyZ", key: "z"},
  {keycode: "KeyX", key: "x"},
  {keycode: "KeyC", key: "c"},
  {keycode: "KeyV", key: "v"},
  {keycode: "KeyB", key: "b"},
  {keycode: "KeyN", key: "n"},
  {keycode: "KeyM", key: "m"},
  {keycode: "Comma", key: ","},
  {keycode: "Period", key: "."},
  {keycode: "Slash", key: "/"},
  {keycode: "ArrowUp", key: "&#9650"},
  {keycode: "ShiftRight", key: "Shift"},
  {keycode: "ControlLeft", key: "Ctrl"},
  {keycode: "MetaLeft", key: "Win"},
  {keycode: "AltLeft", key: "Alt"},
  {keycode: "Space", key: "(Space character)"},
  {keycode: "AltRight", key: "Alt"},
  {keycode: "ArrowLeft", key: "&#9664"},
  {keycode: "ArrowDown", key: "&#9660"},
  {keycode: "ArrowRight", key: "&#9654"},
  {keycode: "ControlRight", key: "Ctrl"},   
];

//create a container for keys
let board = document.createElement('div'); 
board.classList.add('board');
document.body.append(board);

let div;  

// create keys
for (i=0; i<keysArray.length; i++) {
  div = document.createElement('div');
  div.classList.add('key', keysArray[i].keycode);
  div.innerHTML = keysArray[i].key;
  board.append(div);

  if (keysArray[i].key=="Backspace") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="Tab") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="Del") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="CapsLock") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="Enter") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="Shift") {
    div.classList.add('shift', 'fkay');
  }
  if (keysArray[i].key=="Ctrl") {
    div.classList.add( 'fkay');
  }
  if (keysArray[i].key=="Win") {
    div.classList.add( 'fkay');
  }
  if (keysArray[i].key=="Alt") {
    div.classList.add('fkay');
  }
  if (keysArray[i].key=="(Space character)") {
    div.innerHTML = " ";
  }
  if (keysArray[i].key=="&#9650"||keysArray[i].key=="&#9664"||keysArray[i].key=="&#9660"||keysArray[i].key=="&#9654") {
    div.classList.add('fkay');
  }
}

//add events for keys
document.addEventListener('keydown', function(event) {
  let b = '.'+event.code;
  document.querySelector(b).classList.add("active");
});

document.addEventListener('keyup', function(event) {
  let b = '.'+event.code;
  document.querySelector(b).classList.remove("active");
});


