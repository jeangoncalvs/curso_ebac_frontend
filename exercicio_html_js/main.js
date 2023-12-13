const form = document.getElementById('form-exercicio');

function validarFormulario() {
    // Código utilizado para obter os valores dos campos
    var campoA = document.getElementById("campo-a").value;
    var campoB = document.getElementById("campo-b").value;

    campoA = parseFloat(campoA); // transforma a string em outra variável (float)
    campoB = parseFloat(campoB);

    // código responsável por validar se B é maior que A
    if (campoB > campoA) {
        // Exibir mensagem positiva
        document.getElementById('mensagem').innerHTML = 'Parabéns! O formulário está válido!';
        document.getElementById('mensagem').style.color = 'green';

        // Exibir pop-up positivo
        alert('Formulário válido!');
    } else {
        // Exibir mensagem negativa
        document.getElementById('mensagem').innerHTML = 'O número do Campo B deve ser maior que o número do campo A.';
        document.getElementById('mensagem').style.color = 'red';
        alert('Formulário inválido!')
    }
}
