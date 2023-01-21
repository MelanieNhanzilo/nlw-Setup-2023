//coloca na varia um formulario
const form=document.querySelector('form')
//criando uma variavel  e cria um novo objecto do formulario
const nlwSetup= new NLWSetup(form)
//carregando um dados com setdata que deve receber um objecto, o nome do objecto
//criando um array e um objecto neste caso o dado run vai conter um dias e meses
//criando uma constante para o botao
const button =document.querySelector('header button')
form.addEventListener("change", save)

button.addEventListener('click',add)
//salva no local 
function save(){
localStorage.setItem('NLWsetup@habits',JSON.stringify(nlwSetup.data))

}
//transformacao em objecto e // // carregamento interno usando o load e fazer um renderLayout()
const data=JSON.parse(localStorage.getItem('NLWsetup@habits')) || {}//se carregar num ambiente diferente ele vai aceitar pois acetara o vazio
nlwSetup.setData(data)

nlwSetup.load()


//formula dinanica de carregar aas datas e armazenando os dados
function add(){
   
   const today=new Date().toLocaleDateString("pt-br").slice(0,-5)
   
   const dayExists= nlwSetup.dayExists(today)
  
    if(dayExists){
        alert("Dia ja incluso")
        return 
    }
    alert("sucesso na adicao")
   nlwSetup.addDay(today)
}


