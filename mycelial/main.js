var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var n3 = document.getElementById("num3");
var n4 = document.getElementById("num4");
var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");

document.getElementById("add").addEventListener("click", function() {
    res1.value = 
    parseInt(n1.value)+parseInt(n2.value);
});

document.getElementById("sub").addEventListener("click", function() {
    res1.value = 
    parseInt(n1.value)-parseInt(n2.value);
});

ocument.getElementById("mul").addEventListener("click", function() {
    res1.value = 
    parseInt(n1.value)*parseInt(n2.value);});

document.getElementById("div").addEventListener("click", function() {
    res1.value = 
    parseInt(n1.value)/parseInt(n2.value);
});

document.getElementById("add2").addEventListener("click", function() {
    res2.value = 
    parseInt(n3.value)+parseInt(n4.value);
});

document.getElementById("sub2").addEventListener("click", function() {
    res2.value = 
    parseInt(n3.value)-parseInt(n4.value);
});

document.getElementById("mul2").addEventListener("click", function() {
    res2.value = 
    parseInt(n3.value)*parseInt(n4.value);
});

document.getElementById("div2").addEventListener("click", function() {
    res2.value = 
    parseInt(n3.value)/parseInt(n4.value);
});
