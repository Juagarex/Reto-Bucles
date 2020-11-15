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
