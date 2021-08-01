function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('erro Verificar data')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''


        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino_bebe.png')
                document.body.style.background = '#b18876'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menino.png')
                document.body.style.background = '#b68479'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
                document.body.style.background = '#f5c8b3'
            } else {
                //idoso
                img.setAttribute('src', 'idoso_homem.png')
                document.body.style.background = '#62463b'
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina_bebe.png')
                document.body.style.background = '#fbdddd'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'menina.png')
                document.body.style.background = '#ccc2cd'
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
                document.body.style.background = '#83533f'
            } else {
                //idoso
                img.setAttribute('src', 'idosa_mulher.png')
                document.body.style.background = '#eff0de'
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos sua  idade: <p> ${idade} anos </p>   <p>${data} ${ano}</p>`
        res.appendChild(img)

    }
}