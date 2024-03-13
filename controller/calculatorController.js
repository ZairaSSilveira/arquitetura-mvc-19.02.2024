const CalculatorModel = require('../models/CalculatorModel');

exports.index = (req, res) => {
    // Agora, renderizamos uma View ao invés de apenas enviar um texto.
    res.render('index');
};

exports.calcular = (req, res) => {
    const { operacao, a, b } = req.body;
    const resultado = CalculatorModel.realizarCalculo(operacao, a, b);
    // Podemos enviar os dados do cálculo para uma View que irá renderizá-los.
    res.render('resultado', { resultado: resultado });
};
