document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-container button');
    const resetButton = document.querySelector('.reset-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const operation = button.innerText.trim(); // Usar el texto del botón como operación
            calculate(operation);
        });
    });

    resetButton.addEventListener('click', resetCalculator);
});

function calculate(operation) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    let result = 0;

    if (isNaN(operand1) || isNaN(operand2)) {
        alert('Por favor, ingresa ambos números');
        return;
    }

    switch (operation) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                alert('No se puede dividir por cero');
                return;
            }
            result = operand1 / operand2;
            break;
    }

    document.getElementById('result').innerText = result;
}

function resetCalculator() {
    document.getElementById('operand1').value = '';
    document.getElementById('operand2').value = '';
    document.getElementById('result').innerText = '0';
}
