import {Npc} from './models/Npc.js'

const button = document.querySelector('.clickArea')

button.addEventListener('click',Npc.playEvent.bind(Npc))


