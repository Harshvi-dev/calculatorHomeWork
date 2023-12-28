var num
var num2
function getVal() {
    num = document.getElementById('textBox1').value;
    num=+num
    if (isNaN(num)) {
        document.getElementById('textBox1').value="";
        alert("enter the number");
    }
    if (document.getElementById('textBox1').value != null||document.getElementById('textBox1').value!="") {
        num2 = document.getElementById('textBox2').value
        num2=+num2
        if (isNaN(num2)) {
            document.getElementById('textBox2').value="";
            alert("enter the number");
        }
    }
}
function add() {
    document.getElementById("symbol").innerHTML = "+";
    document.getElementById("symbol").setAttribute("value","+");
}

function sub() {
    document.getElementById("symbol").innerHTML = "-";
    document.getElementById("symbol").setAttribute("value","-");
}

function mul() {
    document.getElementById("symbol").innerHTML = "*";
    document.getElementById("symbol").setAttribute("value","*");
}

function div() {
    document.getElementById("symbol").innerHTML = "/";
    document.getElementById("symbol").setAttribute("value","/");
}
function ans() {
    var symbol = document.getElementById("symbol").getAttribute('value')
    switch (symbol) {
        case "+":
            document.getElementById('ans').innerHTML=num+num2
            break;
        case "-":
            document.getElementById('ans').innerHTML=num-num2
            break;
        case "*":
            document.getElementById('ans').innerHTML=num*num2
            break;
        case "/":
            document.getElementById('ans').innerHTML=num/num2
            break;
        default:
            break;
    }
}