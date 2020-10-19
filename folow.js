//teste tudo acima
const l = "/actions"
var b = window.location.pathname
if (l != b) {var node = document.getElementById('divimy') + node.parentNode.removeChild(node);}
var dno = document.getElementById('notification')
var divi = document.createElement('div')
divi.id="divimy" 
divi.align="center"
var text = document.createElement('h1')
text.id="textone"
text.align="center"
var br = document.createElement('br')
text.innerHTML=" COMPANYTEC 👁‍🗨"
divi.appendChild(text)
dno.appendChild(divi)
divi.appendChild(br)
var brduo = document.createElement('br')
divi.appendChild(brduo)
var btnstop = document.createElement('button')
btnstop.id="parar"
btnstop.innerText="parar tarefas"
divi.appendChild(btnstop)
var brthree = document.createElement('br')
var brfour = document.createElement('br')
divi.appendChild(brthree)
divi.appendChild(brfour)
var caution = document.createElement('p')
caution.innerHTML="ATENÇÃO: nosso robô faz as tarefas com intervalo embutido de 40 segundos, em breve será possivel escolher o tempo manualmente! Copyright© Companytec TODOS DIRETOS RESERVADOS."
caution.id="reservado"
//divi.appendChild(caution)
//aqui
var btnstart = document.createElement('button')
btnstart.id="iniciar"
btnstart.innerText="iniciar tarefas"
divi.appendChild(btnstart)
//aqui option
var x = document.createElement('select')
x.id="tempo"
var opone = document.createElement('option')
opone.innerHTML="QUAL TEMPO DE INTERVALO?"
opone.disabled="true"
var opduo = document.createElement('option')
opduo.innerHTML =" 15 SEGUNDOS"
x.appendChild(opone)
x.appendChild(opduo)
var di = document.getElementById('divimy')
di.appendChild(x)
