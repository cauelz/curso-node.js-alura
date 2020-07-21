
const { check } = require('express-validator/check');

class Livro {
    static validacoes() {
        return  [
            check('titulo').isLength({ min: 5 }).withMessage('O título precisa ternmo mínimo 5 caracteres'),
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário valido!')
        ];
    }
}

module.exports = Livro;