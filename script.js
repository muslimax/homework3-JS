
do {
    var a = +prompt('Введите число');
} while (isNaN(a) || a == 0);

var b = +prompt('Введите степень');
if (isNaN(b) || b==0) {
    b = 2
    
}
var c = 1;
for (var i = 1; i <= b; i++) {
    c = a*c;
   
} alert('Ответ равен ' + c)
