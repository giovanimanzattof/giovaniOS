import { input, numeros, operadores, apagarTudo, apagarUm, resultado, calculator, calculadora, fechar_calculator } from './linux.js';
// calculadora //



// numeros
numeros.forEach(btn => {

    btn.addEventListener('click', () => {
        input.value += btn.textContent;
    });

});


// operadores
operadores.forEach(btn => {

    btn.addEventListener('click', () => {
        input.value += btn.textContent;
    });

});


// AC
apagarTudo.addEventListener('click', () => {
    input.value = '';
});


// C
apagarUm.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});


// resultado
resultado.addEventListener('click', () => {

    try {

        input.value = eval(input.value);

    } catch {

        input.value = 'Erro';

        setTimeout(() => {
            input.value = '';
        }, 1000);

    }

});

// clique para abrir calculadora //

calculator.addEventListener('click', () => {
    if(calculadora.style.display === 'none'){
        calculadora.style.display = 'block'
    } else{
        calculadora.style.display = 'none'
    }
        
})

fechar_calculator.addEventListener('click', () => {
    if(calculadora.style.display === 'block'){
        calculadora.style.display = 'none'
    } else{
        calculadora.style.display = 'block'
    }
})
