let slider = document.getElementsByTagName("slider");
for (let i = 0; i < slider.length; i++) {
  // Guardar contenidos
  let contents = slider[i].innerHTML;
  // Numerar contenidos
  let NumContent=slider[i].getElementsByTagName("content").length;
  // Lista de intervalos
  let ListInter = [];
  // Crear elementos
  slider[i].innerHTML = '<div class="contents" active="0">'+contents+'</div>';

  // Añadir flechas
  if (slider[i].getAttribute("arrows") == "true"){
    slider[i].innerHTML += '<div class="ArrowLeft" onclick="SliderLeft(this)"><p>❮</p></div>';
    slider[i].innerHTML += '<div class="ArrowRight" onclick="SliderRight(this)"><p>❯</p></div>';
  }
  // Añadir selectores
   
  // Añadir repuccion automatica
  let autoplayTime = parseInt(slider[i].getAttribute('autoplay'));
  if (autoplayTime > 0){
    // Crear intervalo inicial
    ListInter[i] = setInterval(function() {Next(i)}, autoplayTime*1000);
    // Evento sacar raton en el slider
    slider[i].onmouseleave = function() {
      ListInter[i] = setInterval(function() {Next(i)}, autoplayTime*1000);
    }
    // Evento meter raton en el slider
    slider[i].onmouseenter = function() {clearInterval(ListInter[i]);};
  }
}





// Anterior
function SliderLeft(Elements){
  // Guardar variables
  let Num = parseInt(Elements.parentNode.querySelector("div.contents").getAttribute("active"));
  let MaxNum = Elements.parentNode.getElementsByTagName("content").length-1;
  let Element = Elements.parentNode.getElementsByTagName("content");

  // Cambiar activo
  if(Num==0){Elements.parentNode.querySelector("div.contents").setAttribute('active', MaxNum);}
  else {Elements.parentNode.querySelector("div.contents").setAttribute('active', Num-1);}


  // Desplazar actual
  Element[Num].animate([
    {transform: 'translate(0%, 0)'}, {transform: 'translate(100%, 0)'}
  ], {duration: 250});
  Element[Num].style.transform="translateX(100%)";

  if(Num==0){
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[MaxNum].className = "Activo";
    }
    // Pasar a ultimo
    Element[MaxNum].animate([
      {transform: 'translate(-100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[MaxNum].style.transform="translateX(0%)";

  } else {
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[Num-1].className = "Activo";
    }
    // Pasar a anterior
    Element[Num-1].animate([
      {transform: 'translate(-100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[Num-1].style.transform="translateX(0%)";
  }
}


// Siguiente
function SliderRight(Elements){
  // Guardar variables
  let Num = parseInt(Elements.parentNode.querySelector("div.contents").getAttribute("active"));
  let MaxNum = Elements.parentNode.getElementsByTagName("content").length-1;
  let Element = Elements.parentNode.getElementsByTagName("content");

  // Cambiar activo
  if(Num==MaxNum){Elements.parentNode.querySelector("div.contents").setAttribute('active', 0);}
  else {Elements.parentNode.querySelector("div.contents").setAttribute('active', Num+1);}


  // Desplazar actual
  Element[Num].animate([
    {transform: ' translate(0%, 0)'}, {transform: 'translate(-100%, 0)'}
  ], {duration: 250});
  Element[Num].style.transform="translateX(-100%)";

  // Nuevo
  if(Num==MaxNum){
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[0].className = "Activo";
    }
    // Pasar a primero
    Element[0].animate([
      {transform: 'translate(100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[0].style.transform="translateX(0%)";
  } else {
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[Num+1].className = "Activo";
    }
    // Pasar a anterior
    Element[Num+1].animate([
      {transform: 'translate(100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[Num+1].style.transform="translateX(0%)";
  }
}


// Selector

// Autoplay
function Next(Position){
  // Guardar variables
  let Elements = document.getElementsByTagName("slider")[Position];
  let Num = parseInt(Elements.querySelector("div.contents").getAttribute("active"));
  let MaxNum = Elements.getElementsByTagName("content").length-1;
  let Element = Elements.getElementsByTagName("content");

  // Cambiar activo
  if(Num==MaxNum){Elements.querySelector("div.contents").setAttribute('active', 0);}
  else {Elements.querySelector("div.contents").setAttribute('active', Num+1);}

  // Desplazar actual
  Element[Num].animate([
    {transform: ' translate(0%, 0)'}, {transform: 'translate(-100%, 0)'}
  ], {duration: 250});
  Element[Num].style.transform="translateX(-100%)";

  // Nuevo
  if(Num==MaxNum){
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[0].className = "Activo";
    }
    // Pasar a primero
    Element[0].animate([
      {transform: 'translate(100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[0].style.transform="translateX(0%)";
  } else {
    // Cambiar la clase de selector
    if(Elements.parentNode.querySelector("div.Selectores > div")){
      Elements.parentNode.getElementsByClassName("Activo")[0].className = "";
      Elements.parentNode.querySelector("div.Selectores").getElementsByTagName("div")[Num+1].className = "Activo";
    }
    // Pasar a anterior
    Element[Num+1].animate([
      {transform: 'translate(100%, 0)'}, {transform: 'translate(0%, 0)'}
    ], {duration: 250});
    Element[Num+1].style.transform="translateX(0%)";
  }
}