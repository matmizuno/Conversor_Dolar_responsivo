const btn = document.getElementById('send').addEventListener('click', function (e){
    e.preventDefault();
    fetch('https://cdn.moeda.info/api/latest.json').then(r=>{
        return r.json()
    }).then(corpo=>{

        const dl = document.getElementById('valor_dolar')
        const dollar_inp = valor_dolar.value
        const getMoedas = document.getElementById('more')
        const moedas = more.value
        const  res = document.getElementById('result')

        switch(more.value){
            case 'Real':
                const real_convert = valor_dolar.value*corpo.rates.BRL
                result.textContent = `${real_convert.toFixed(2)} Reais`
                break;
                case 'Iene'://jpy
                const iene_converte = valor_dolar.value*corpo.rates.JPY
                result.textContent = `${iene_converte.toFixed(2)} Ienes`
                  
                    break;
                    case 'Euro':
                        const euro_convert = valor_dolar.value*corpo.rates.EUR
                        result.textContent = `${euro_convert.toFixed(2)} Euros `
                       
                        break;
        }

        
})
})

const cl = document.getElementById("clear").addEventListener("click", function (){
        result.textContent = ""
        valor_dolar.value = ''
        more.value = ''
    }) 
    AOS.init();