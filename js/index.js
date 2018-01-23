var x = document.getElementById("demo"),
    r = document.getElementById("result");
var fault = [],
    iterator = 0;

cp = [];


setInterval(function (_) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}, 250);

document.getElementById("add").addEventListener('click', e=> {
  data.push({name: document.getElementById("inp").value , c:cp });
})

/*
aud.pause();
aud.currentTime = 0.0;
*/

function showPosition(p) {

    // подсчет погрешности измерений
    //fault[iterator] = [p.coords.latitude, p.coords.longitude];
    //iterator < 100 ? iterator++ : iterator = 0;
    //x.innerHTML = countFault(fault);

    //var au = [ aud, aud2 ];
    r.innerHTML = "";
    var pr = main(data,p);
    for(var i in pr){
      //delete pr[i].c;
      //  au[i]?au[i].volume = Math.floor(pr[i].volume)/100:null;
      // var delta = (function(){
      //   switch (i) {
      //     case pr.length -1 :
      //       return 1;
      //       break;
      //       case pr.length -2 :
      //         return .5;
      //         break;
      //         case pr.length -3 :
      //           return .3;
      //           break;
      //     default:
      //       return .25;
      //   }
      // })()

      //console.log(i == pr.length -1);


      pr[i].track.volume = Math.floor(pr[i].volume) *
      (i==pr.length-1?1:i==pr.length-2?.45:i==pr.length-3?.25:.25) 
      /  100;

      r.innerHTML +=  '<b>'+ pr[i].name + '</b>  расстояние: ' + pr[i].dist + ' громкость: ' + pr[i].track.volume + '<br/>';
    }

    cp = [p.coords.latitude, p.coords.longitude];

    //r.innerHTML = JSON.stringify( pr , '\n' , null);
    x.innerHTML = "Latitude: " + p.coords.latitude +
    "<br>Longitude: " + p.coords.longitude;
}

// вычисляем расстояние между двумя координатами
var dist = (a,b)=>{
  var x1 = a.coords && a.coords.latitude ? a.coords.latitude : a[0],
      x2 = b.coords && b.coords.latitude ? b.coords.latitude : b[0],
      y1 = a.coords && a.coords.longitude? a.coords.longitude: a[1],
      y2 = b.coords && b.coords.longitude? b.coords.longitude: b[1];
  return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}

/*
  основная функция на вход получает массив точек: {name: "название", c: [координаты] }
  вычисляет минимальное расстояние и максимальное
  и для каждой возвращает процент
*/
function main(arr , cur){
  if(!arr.length){
    return null;
  }

  var ds = arr;
  for(var i in ds){
    ds[i].dist = dist(ds[i].c, cur);
  }
  // ds.sort((a,b)=>{
  //   return dist(a.c, cur) > dist(b.c, cur) ? -1 : 1;
  // })
  ds.sort((a,b)=>(a.dist>b.dist?-1:1));

  var mn = ds[ds.length-1].dist;
  var mx = ds[0].dist;

  for(var i in ds){
    var volume = mp(ds[i].dist, mx , mn , 0, 100);
    ds[i].volume = volume == 100 ? volume = 95 : volume;
  }

  return ds; //.map(e => e.volume = mp(e.dist, mn,mx,0,100) );
}
// вычисляем значение в процентах от минимального до максимального
var mp = (x, in_min, in_max, out_min, out_max) => ((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

// вычисляем погрешность измерений (до какого колличества запятых округлять)
function countFault(arr) {
    var all = 0;
    for (var i = 1; i < arr.length; i++) {
        all += Math.abs(arr[i][0] - arr[i - 1][0]);
    }
    var f = all.toString().split('.')[1];
    var r = 0;
    while (f[0] == "0") {
        f = f.slice(1);
        r++;
    }
    return r;
}
