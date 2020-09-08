function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else {
        res.innerHTML ='Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = 1;c <=f; c+=p ){
            res.innerHTML += `<strong>  ${c}  \u{1F449} </strong>  `
        }
        res.innerHTML += `\u{1F3C1}`
    }
}