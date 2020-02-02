
let canv = document.getElementById('picture');
let ctx = canv.getContext('2d');
let image = document.getElementById('source');
let myColor = "#F74141";
let isMouseDown = false;
let isClear = false;
let isPencil = false;

if (localStorage.getItem('picture')!==null) {
  let www = new Image();
  www.src = localStorage.getItem('picture');
  www.onload = function(){
    ctx.drawImage(www,0,0, 512, 512);
    };
}

document.getElementById('clear').onclick = function(){
  this.classList.add('active');
  document.getElementById('pencil').classList.remove('active');
  isClear=true;
  isPencil = false;
}

document.getElementById('pencil').onclick = function(){
  this.classList.add('active');
  document.getElementById('clear').classList.remove('active');
  isPencil=true;
  isClear = false;
}

document.getElementById('clearAll').onclick = function() {
  ctx.clearRect(0 ,0, canv.width, canv.height);
  document.getElementById('clear').classList.remove('active');
  document.getElementById('pencil').classList.remove('active');
  isClear = false;
  isPencil = false;
}

document.getElementById('color').oninput = function() {
  myColor = this.value;
}

canv.addEventListener('mousedown', function(){
  isMouseDown = true;
});

document.addEventListener('mouseup', function(){
  isMouseDown = false;
  ctx.beginPath();
});

ctx.lineWidth = 10;
canv.addEventListener('mousemove', function(e) {
  if(isMouseDown&isPencil){
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = myColor;
    ctx.lineWidth = 10;
    ctx.arc(e.offsetX, e.offsetY, ctx.lineWidth/2, 0, Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = myColor;
  }
});

canv.addEventListener('mousemove', function(e) {
  if(isMouseDown&isClear){
    ctx.clearRect(e.offsetX, e.offsetY, 30, 30);
  }
})

  function SearchPhotos(){
    let clientId ="10d36e1f9a6d4dbf661c2fdf5f20c934ffcb2e7c34a86592111ff1419c668381";
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/photos/random?client_id="+clientId+"&query=town,"+query;
  
      fetch(url)
      .then(function(data){
      return data.json();
      })
      .then(function(data){
        let img = new Image();
        img.src = data.urls.small;
        img.onload = function(){
        ctx.drawImage(img,0,0, 512, 512);
        localStorage.setItem('picture', img.src);
        };
      })
  }


  function Getting (){
    
  }
 
    
