const html = document.querySelector('#html')
const style = document.querySelector('#style')
import str from './css.js'
let time =300
let n =1
let id 
const player = {
    events:{
        '#btnSpend':'purge',
        '#btnPlay':   'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: ()=>{
    //   html.innerText = str.substr(0,n)
    //   style.innerHTML = str.substr(0,n)  
      player.play()
      player.demoPlay()
    },
    
    run :()=>{
        n+=1
        if(n > str.length){
            window.clearInterval(id)
            return}
        html.innerText = str.substr(0,n)
        style.innerHTML = str.substr(0,n)
        html.scrollTop = html.scrollHeight
    },
    demoPlay: ()=>{
       for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
       }
    },
    play : ()=>{
        console.log(1)
        id = setInterval(player.run,time)
    },
    purge : ()=>{
        window.clearInterval(id)
    },
    slow : ()=>{
        player.purge()
        time = 300
        player.play()
    },
    normal : ()=>{
        player.purge()
        time = 100
        player.play()
    },
    fast : ()=>{
        player.purge()
        time = 0
        player.play()
    }
}
player.init()


