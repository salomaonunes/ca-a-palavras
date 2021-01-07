document.getElementById("botao").onclick = function () {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var empresa = document.getElementById("empresa").value;
    var estado = document.getElementById("estado").value;

    var palavra1 = document.getElementById("palavra1de4").value;
    var palavra2 = document.getElementById("palavra2de4").value;
    var palavra3 = document.getElementById("palavra3de4").value;
    var palavra4 = document.getElementById("palavra4de4").value;

    var senha1 = "RAEL";
    var senha2 = "RODRIGO";
    var senha3 = "SALOMAO";
    var senha4 = "RICARDO";

    palavra1 = palavra1.toUpperCase();
    palavra2 = palavra2.toUpperCase();
    palavra3 = palavra3.toUpperCase();
    palavra4 = palavra4.toUpperCase();

    if (
        palavra1 == senha1 ||
        palavra1 == senha2 ||
        palavra1 == senha3 ||
        (palavra1 == senha4 && palavra2 == senha2) ||
        palavra2 == senha1 ||
        palavra2 == senha3 ||
        (palavra2 == senha4 && palavra3 == senha3) ||
        palavra3 == senha1 ||
        palavra3 == senha2 ||
        (palavra3 == senha4 && palavra4 == senha4) ||
        palavra4 == senha1 ||
        palavra4 == senha2 ||
        palavra4 == senha3
    ) {
        document.getElementById("resultado").innerHTML +=
            nome +
            "<br>" +
            email +
            "<br>" +
            empresa +
            "<br>" +
            estado +
            "<br>" +
            "VocÃª acertou!";
    } else {
        alert("Tente novamente.");
    }
};
