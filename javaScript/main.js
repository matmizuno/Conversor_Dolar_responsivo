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
        const troca = document.getElementById('switch')


        switch(more.value){
            case 'Real':
                let real_convert = valor_dolar.value*corpo.rates.BRL
                result.textContent = `${real_convert.toFixed(2)} Reais`
                troca.onclick = function(){
                    real_convert = valor_dolar.value/ corpo.rates.BRL
                    result.textContent = `${real_convert.toFixed(2)} Dólares`
                }

                break;
                case 'Iene'://jpy
                let iene_converte = valor_dolar.value*corpo.rates.JPY
                result.textContent = `${iene_converte.toFixed(2)} Ienes`
                troca.onclick = function(){
                    iene_converte = (corpo.rates.JPY/corpo.rates.JPY)*valor_dolar.value
                    result.textContent = `${iene_converte} Dólares`
                }

                  
                    break;
                    case 'Euro':
                        let euro_convert = valor_dolar.value*corpo.rates.EUR
                        result.textContent = `${euro_convert.toFixed(2)} Euros `
                        troca.onclick = function(){
                            euro_convert = valor_dolar.value/corpo.rates.EUR
                            result.textContent =`${euro_convert.toFixed(2)} Dólares` 
                            }
                       
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