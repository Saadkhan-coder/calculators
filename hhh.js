function Solve(val) {
    var a = document.getElementById('screen');
    a.value += val;
 }
 function Result() {
    var num1 = document.getElementById('screen').value;
    var num2 = eval(num1);
    document.getElementById('screen').value = num2;
 }
 function Clear() {
    var ss = document.getElementById('screen');
    ss.value = '';
 }
 function Back() {
    var as = document.getElementById('screen');
    as.value = as.value.slice(0,-1);
 }
