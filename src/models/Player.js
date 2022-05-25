class Player {    

    static selectRole() {
        const element = document.querySelector('.showMoves')
        const li = document.createElement('li')
        const select = document.getElementById('playOption')

        if (select.value == 'Pedra') {
            li.innerHTML = `
            <figure>
            <img src="/src/img/pedraPlayer.jpg" alt="Pedra">
            </figure>`
        }
        if (select.value == 'Papel') {
            li.innerHTML = `
            <figure>
            <img src="/src/img/PapelPlayer.png" alt="Papel">
            </figure>`
        }
        if (select.value == 'Tesoura') {
            li.innerHTML = `
            <figure>
            <img src="/src/img/TesouraPlayer.png" alt="Tesoura">
            </figure>`
        }
        element.innerHTML = ''
        element.appendChild(li)
        return select.value
    }
}

export{Player}

