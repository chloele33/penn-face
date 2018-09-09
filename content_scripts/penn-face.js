var cursorURL1 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amyghappy-cursor.png';
var cursorURL2 = 'https://raw.githubusercontent.com/chloele33/penn-face/master/assets/amygsad-cursor.png';

// var reader = new FileReader();

// reader.onload = function(progressEvent){
//     // Entire file
//     console.log(this.result);

//     // By lines
//     var lines = this.result.split('\n');
//     for(var line = 0; line < lines.length; line++){
//       console.log(lines[line]);
//   }
// };

//reader.readAsText("file:///assets/currentURL.txt");

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("file://../assets/currentURL.txt");


$("body").css({'cursor': 'url(' + cursorURL1 + '), default'});

var mouseDownFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL2 + '), default'});
}

var mouseUpFunction = function (e) {
  $("body").css({'cursor': 'url(' + cursorURL1 + '), default'});
}

window.addEventListener("mousedown", mouseDownFunction);
window.addEventListener("mouseup", mouseUpFunction);


