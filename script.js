function contar(){
        const begin = document.getElementById('inicio').value
        const end = document.getElementById('fim').value
        const step = document.getElementById('passo').value
        let resp = document.getElementById('resp')
        if(begin.length == 0 || end.length == 0 || step.length == 0){
                //alert('[ERRO] Faltam preencher dados!')
                resp.innerHTML = 'Impossível Contar! Faltam Dados'
        }else{
                const inicio = Number(begin)
                const fim = Number(end)
                let passo = Number(step)
                resp.innerHTML = `<strong>Contando:<strong><br>`
                if(passo <= 0){
                        alert('Passo Inválido! Alterado para 1.')
                        passo = 1
                }
                if(inicio <= fim){
                        //Contagem crescente
                        for (let i = inicio; i <= fim; i+=passo) {
                                resp.innerHTML += `${i} \u{1F449}`
                        }
                }else{
                        //Contagem decrescente
                        for (let i = inicio; i >= fim; i-=passo) {
                                resp.innerHTML += `${i} \u{1F449}`
                        }
                }
                resp.innerHTML += `\u{1F3C1}`
        }
}