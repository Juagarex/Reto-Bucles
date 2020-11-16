function MayorOfAge() {
    var answer = document.getElementById("text1").value;
    if (answer === "si") {
        document.getElementById("txt").innerHTML = " Entonces si puedes ir a la disco";
    } else if (answer === "no") {
        document.getElementById("txt").innerHTML = " Lo siento, no puedes ir a la disco";
    } else {
        document.getElementById("txt").innerHTML = "Lo siento, la opción indicada no es válida";
    }
}


function BuyIcecream() {
    var answer = document.getElementById("text2").value;
    switch (answer) {
        case "oreo":
            document.getElementById("txt2").innerHTML = "El valor de tu helado es 1.$. ";
            break;
        case "kitkat":
            document.getElementById("txt2").innerHTML = " El valor de tu helado es 1.50$.";
            break;
        case "brownie":
            document.getElementById("txt2").innerHTML = " El valor de tu helado es 0.75$.";
            break;
        case "lacasitos":
            document.getElementById("txt2").innerHTML = " El valor de tu helado es 0.95$.";
            break;
        case "basico":
            document.getElementById("txt2").innerHTML = " El valor de tu helado basico es 1.90$.";
            break;
        default:
            document.getElementById("txt2").innerHTML = " El valor de tu helado por defecto es 1.90$.";
            break;
    }
}

function ecuation() {
    var a, b, c, d, e;
    a = document.getElementById("text3_a").value;
    b = document.getElementById("text3_b").value;
    c = document.getElementById("text3_c").value;
    d = b ^ 2 - 4 * a * c;
    e = 2 * a;
    if (d == 0) {
        document.getElementById("txt3").innerHTML = ("x1 = x2,", -b / e);
    } else if (d > 0) {

        document.getElementById("txt3").innerHTML = ("x1=" + (-b + Math.sqrt(d)) / e + "x2=" + (-b - Math.sqrt(d)) / e);
    } else {
        document.getElementById("txt3").innerHTML = ("x1=" + (-b / e + "+" + Math.sqrt(-d) / e + "i" + "x2=" + (-b / e + "+" + Math.sqrt(-d) / e)));

    }
}

function Par() {
    var valor = document.getElementById("text4").value;
    var res = valor % 2;
    if (res === 0) {
        document.getElementById("txt4").innerHTML = ("Es par");
    } else {
        document.getElementById("txt4").innerHTML = ("El numero es impar ");
    }


}

function tabla() {
    n = 1;
    for (i = 0; i <= 10; i++) {
        c = n * i;
        console.log(n + " * " + i + " = " + c);

    }
}

function tablaN() {
    var n = document.getElementById("txt6").value;
    i = 0;
    while (i < 11) {
        c = n * i;
        console.log(n + " * " + i + " = " + c);
        i++;
    }


}


function parOrImpar() {
    var num1 = parseInt(document.getElementById("text7_a").value);
    var num2 = parseInt(document.getElementById("text7_b").value);

    var par = [];
    var impar = [];

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        while (num1 <= num2) {

            if (num1 % 2 == 0) {
                par.push(num1);
                num1++;

            } else {
                impar.push(num1);
                num1++;

            }

        }
        console.log("numeros pares")
        for (let i = 0; i < par.length; i++) {
            console.log(par[i]);
        }

        console.log("numeros impares")
        for (let i = 0; i < impar.length; i++) {
            console.log(impar[i]);
        }
    }
}

function divider() {
    var num = parseInt(document.getElementById("text8_a").value);
    var divider = [];
    if (num > 0) {
        for (i = 0; i <= num; i++) {
            if (num % i == 0) {
                divider.push(i);
            }
        }
    }
    console.log("divisores");
    for (let i = 0; i < divider.length; i++) {
        console.log(divider[i]);

    }
}


function sumer() {
    var num1 = parseInt(document.getElementById("text9_a").value);
    var num2 = parseInt(document.getElementById("text9_b").value);

    var total = 0;

    while (num1 <= num2) {
        total += num1
        num1++
    }

    console.log(total);

}




