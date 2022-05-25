import {Player} from './../models/Player.js'

class Npc {
    static state      = 0
    static countWin   = 0
    static countLose  = 0
    static select     = document.getElementById('playOption')
    static spanCount  = document.getElementById('vitoriasPlayer')
    static spanLose   = document.getElementById('vitoriasNpc')
    static spanMsg    = document.getElementById('showWin')
    static mainArea   = document.querySelector('.showMoves')

    static generator() {
        return this.state = Math.floor(Math.random() * 3);
    }

    static toHtml() {
       
        const li = document.createElement('li')
        if (this.state == 0) {
            li.innerHTML = `
            <figure>
            <img src="/src/img/pedra.jpg" alt="Pedra">
            </figure>`
        }
        if (this.state == 1) {
            li.innerHTML = `
            <figure>
            <img src="/src/img/Papel.png" alt="Papel">
            </figure>`
        }
        if (this.state == 2) {
            li.innerHTML = `
            <figure>
            <img src="/src/img/Tesoura.png" alt="Tesoura">
            </figure>`
        }

        this.mainArea.appendChild(li)
    }

    static countVictory() {
        
        if (this.select.value === 'Pedra' && this.state === 2 || this.select.value === 'Papel' && this.state === 0 || this.select.value === 'Tesoura' && this.state === 1) {
           return 1

        }
        if (this.select.value === 'Pedra' && this.state === 1 || this.select.value === 'Papel' && this.state === 2 || this.select.value === 'Tesoura' && this.state === 0) {
            return 2

        }
        return 0
    }
    
    static reset(){
        this.spanMsg.innerText      = 'VAMOS JOGAR!!!'
        this.countWin               = 0
        this.countLose              = 0
        this.spanCount.innerText    = 0
        this.spanLose.innerText     = 0
        this.mainArea.innerHTML     = ''

        const li = document.createElement('li')
        
            li.innerHTML = `
            <figure>
            <img src="/src/img/telainicial.jpg" alt="telainicial">
            </figure>`

        this.mainArea.appendChild(li)
    }

    static playEvent(event){
        const click = event.target
        
        

        if(click.id === 'btn' && this.countWin <10 && this.countLose<10){
            Player.selectRole()
            this.generator()
            this.toHtml()
            const victory = this.countVictory()
            if(victory === 1){
               this.spanMsg.innerText = 'Você Ganhou! Que Sorte !!!'
               this.countWin++
            }
            if(victory === 2){
                this.spanMsg.innerText = 'Você Perdeu para o NPC kkkkkkk!!!'
                this.countLose++
            }
            if(victory === 0){
                this.spanMsg.innerText = 'Empatou ! Ufa!!!'
            }
            if(this.countWin === 10){
                this.spanMsg.innerText = 'GAME OVER! VOCÊ É O VENCEDOR!!!'
            }
            if(this.countLose === 10){
                this.spanMsg.innerText = 'GAME OVER! VOCÊ É O PERDEDOR!!!'
            }
            this.spanCount.innerText = this.countWin
            this.spanLose.innerText = this.countLose     
        }

        if(click.id === 'rst'){
            this.reset()
        }
    } 
}

export {Npc}
