const valorDolar = document.getElementById('valor_dolar').value
const  res = document.getElementById('result')

fetch('https://cdn.moeda.info/api/latest.json').then(r=>{
    return r.json()
}).then(corpo=>{ 
    const moedas = document.querySelector('[data-js="allmoedas"]')
    const options = Object.keys(corpo.rates).map(currency => `<option>${currency}</option>`)
    moedas.innerHTML = options

    const btn = document.getElementById('send').addEventListener('click', function (e){
        e.preventDefault();
        let Tmoedas = document.getElementById('more').value
        let conversao = valor_dolar.value * corpo.rates[Tmoedas]
        result.textContent = `${conversao.toFixed(2)} ${Tmoedas}`
    }) 
})

const cl = document.getElementById("clear").addEventListener("click", function (){
        result.textContent = ''
        valor_dolar.value = ''
        more.value = ''
    }) 
   
  AOS.init();
