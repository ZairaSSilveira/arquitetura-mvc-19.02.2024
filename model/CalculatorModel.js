exports.realizarCalculo = (operacao, a, b) => {
    switch(operacao) {
        case 'somar':
            return a + b;
        case 'subtrair':
            return a - b;
        case 'multiplicar':
            return a * b;
        case 'dividir':
            return b !== 0 ? a / b : 'Não é possível dividir por zero';
        default:
            return 'Operação inválida';
    }
};
