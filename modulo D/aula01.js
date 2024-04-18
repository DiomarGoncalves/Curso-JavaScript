// ex 008
function calcular(){
    var velocidade = document.getElementById('vel');
    const res = document.getElementById('res');
    var vel = Number(velocidade.value)

    res.innerHTML = `Sua velocidade atual e de <strong>${vel}km/h</strong>`
    if(vel > 60){
        res.innerHTML += `<p>Você está MUTADO!</p>`
    }
    res.innerHTML += `<p>Diriga sempre com segurança</p>`

}
//ex009
function nacio(){
    const local = document.getElementById('pais');
    const resp = document.getElementById('resp');
    loc = String(local.value)
    if (loc == 'Brasil'){
        resp.innerHTML = `Brasileiro`
    }else{
        resp.innerHTML = `estrangeiro`
    }
}