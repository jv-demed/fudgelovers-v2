const categories = [
    'Todos',
    'Fudges',
    'Caixas Especiais',
    'Tortas de Sorvete'
]

const products = [
    {
        name: 'Fudge Avelã',
        category: 'Fudges',
        img: 'https://i.imgur.com/Q2fODY6.jpg',
        value: 22.00,
        news: true,
        highlight: false,
        desc: 'Chocolate nobre meio amargo, leite condensado, creme de leite fresco e avelã.'
    },{
        name: 'Fudge Caramelo Salgado',
        category: 'Fudges',
        img: 'https://i.imgur.com/s8gA38n.jpg',
        value: 22.00,
        news: false,
        highlight: true,
        desc: 'Chocolate nobre meio amargo, chocolate nobre branco, caramelo, leite condensado, creme de leite fresco e flor de sal.'
    },{
        name: 'Fudge Pistache e Cranberry',
        category: 'Fudges',
        img: 'https://i.imgur.com/D8n0A8h.jpg',
        value: 22.00,
        news: false,
        highlight: false,
        desc: 'Chocolate nobre meio amargo, leite condensado, creme de leite fresco, pistache e cranberry.'
    },{
        name: 'Fudge Duo',
        category: 'Fudges',
        img: 'https://i.imgur.com/rmBGYvG.jpg',
        value: 22.00,
        news: false,
        highlight: false,
        desc: 'Chocolate nobre meio amargo, chocolate nobre branco, leite condensado e creme de leite fresco.'
    },{
        name: 'Fudge Nozes',
        category: 'Fudges',
        img: 'https://i.imgur.com/j7gO7QK.jpg',
        value: 22.00,
        news: false,
        highlight: false,
        desc: 'Chocolate nobre meio amargo, leite condensado, creme de leite fresco e nozes.'
    },{
        name: 'Fudge Limão Siciliano e Amêndoas',
        category: 'Fudges',
        img: 'https://i.imgur.com/ASm8CVb.jpg',
        value: 22.00,
        news: false,
        highlight: true,
        desc: 'Chocolate nobre branco, leite condensado, creme de leite fresco, limão siciliano e amêndoas.'
    },{
        name: 'Fudge Óreo',
        category: 'Fudges',
        img: 'https://i.imgur.com/IY93bvn.jpg',
        value: 22.00,
        news: true,
        highlight: false,
        desc: 'Chocolate nobre branco, leite condensado, creme de leite fresco e biscoito Óreo.'
    },{
        name: 'Fudge Chocolate Trufado',
        category: 'Fudges',
        img: 'https://i.imgur.com/U1odS5N.jpg',
        value: 22.00,
        news: false,
        highlight: true,
        desc: 'Chocolate nobre meio amargo, leite condensado, creme de leite fresco e licor de chocolate.'
    },{
        name: 'Caixa com 6 Fudges',
        category: 'Caixas Especiais',
        img: 'https://i.imgur.com/ew6hsoJ.jpg',
        value: 35.00,
        news: false,
        highlight: false,
        desc: 'Selecionamos para você seis sabores clássicos e deliciosos.',
        flavors: 'Caramelo Salgado, Duo, Chocolate Trufado, Limão Siciliano e Amêndoas, Nozes, Óreo.'
    },{
        name: 'Caixa com 8 Fudges',
        category: 'Caixas Especiais',
        img: 'https://i.imgur.com/oKWPmgb.jpg',
        value: 40.00,
        news: true,
        highlight: true,
        desc: 'Todos os sabores em uma caixa especial para você presentear.',
        flavors: 'Avelã, Caramelo Salgado, Duo, Chocolate Trufado, Limão Siciliano e Amêndoas, Nozes, Óreo, Pistache e Cranberry'
    },{
        name: 'Caixa com 5 Fudges e Espumante',
        category: 'Caixas Especiais',
        img: 'https://i.imgur.com/XJ4hKHI.jpg',
        value: 45.00,
        news: false,
        highlight: true,
        desc: 'Combinação perfeita de Fudge e espumante.',
        flavors: 'Avelã, Chocolate Trufado, Limão Siciliano e Amêndoas, Nozes, Pistache e Cranberry.'
    },{
        name: 'Torta de Sorvete de Creme',
        category: 'Tortas de Sorvete',
        img: 'https://i.imgur.com/s3umN3z.jpg',
        value: 60.00,
        news: false,
        highlight: true,
        desc: 'Torta de sorvete de creme com cobertura de Fudge cremoso de chocolate e suspiro.'
    },{
        name: 'Torta de Sorvete de Chocolate Trufado',
        category: 'Tortas de Sorvete',
        img: 'https://i.imgur.com/5QXRMpN.jpg',
        value: 70.00,
        news: true,
        highlight: false,
        desc: 'Torta de sorvete de chocolate com cobertura de Fudge cremoso de chocolate trufado.'
    },
]

export { categories, products }