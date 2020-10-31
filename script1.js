  do {
    var a = +prompt('Введите количество ступенек');
  } while (isNaN(a) || a == 0 || a == null);           
do {
    var b = prompt('Введите символ отступов');
} while (b == "" || !isNaN(b));
do {
    var c = prompt('Введите конечный символ');   
} while (c == "" || !isNaN(c));

var f = ""
for (let i = 0; i < a; i++) {
    if (i == 0) {
        console.log(c);
    }
   f = f + b
    console.log(f + c);
 
}

