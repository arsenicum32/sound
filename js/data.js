// var data = [
//   {name: "A" , c: [55.728742600000004,37.6357925]},
//   {name: "B" , c: [53.728742600000004,39.6357925]},
//   {name: "C" , c: [52.728742600000004,32.6357925]},
//   {name: "D" , c: [58.728742600000004,29.6357925]},
//   {name: "E" , c: [55.728742600000004,31.6357925]}
// ]

var data = [{"name":"лаборатория дизайна","c":[55.7285477,37.634941399999995]},{"name":"мода","c":[55.728373,37.635089]},{"name":"3ый этаж","c":[55.7282812,37.635233899999996]},{"name":"дирекция","c":[55.7287306,37.6353826]},{"name":"шмулик","c":[55.7285938,37.635557]},{"name":"библиотека","c":[55.728654899999995,37.6355608]},
{"name":"коридор","c":[55.7287438,37.635692899999995],"dist":0.00009099857142312057,"volume":7.845628790933618},
{"name":"4ый этаж","c":[55.7287014,37.635788]}];


var aud = new Audio('audio/cha.mp3');

//Now lets play the music
aud.play();
aud.loop = true;

var aud2 = new Audio('audio/paganini.mp3');

//Now lets play the music
aud2.play();
aud2.loop = true;

var data = [
  {name: "мамм",c:[55.741501, 37.598846], src: "audio/mamm.mp3"},
  {name: "площадь на выходе",c:[55.744172, 37.601293], src: "audio/place.mp3"},
  {name: "сквер справа от церкви",c:[55.743522, 37.604709], src: "audio/rightSideChurch.mp3"},
  {name: "у петра первого",c:[55.739636, 37.610050], src: "audio/petr1.mp3"},
  {name: "сильвер панда",c:[55.741226, 37.609457], src: "audio/panda.mp3"},
  {name: "мамм",c:[55.742508, 37.600312], src: "audio/lightFire.mp3"},
  {name: "мамм",c:[55.743844, 37.607743], src: "audio/leftBridge.mp3"},
  {name: "мамм",c:[55.742458, 37.599975], src: "audio/kiss2.mp3"},
  {name: "мамм",c:[55.743531, 37.608033], src: "audio/handBridge.mp3"},
  {name: "мамм",c:[55.745095, 37.603677], src: "audio/frontChurch.mp3"},
  {name: "музей который закрывался",c:[55.746176, 37.608612], src: "audio/mirrors.mp3"},
  {name: "фигурки у ЦДХ",c:[55.736158, 37.608395], src: "audio/figureZDH.mp3"},
  {name: "двор диджилал октобер",c:[55.740976, 37.608977], src: "audio/DO.mp3"},
  {name: "айвазовский ожившие полотна",c:[55.744570, 37.610479], src: "audio/ars.mp3"},
  {name: "диванчик рядом с магазином шоколадок",c:[55.740173, 37.608668], src: "audio/alenka.mp3"}
]

for(var i in data){
  data[i].track =  new Audio(data[i].src);
  data[i].track.loop = true;
  data[i].track.play();
}
