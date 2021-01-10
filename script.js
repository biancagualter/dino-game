const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let wasPressed = false
let position = 50  

background.style.backgroundImage= 'none'

function handleKeyUp(event) {
    if (event.keyCode === 32) { 

        background.style.backgroundImage = 'url("./sprites/background.png")'

        document.querySelector('.dinoImg').src = './sprites/trex1.png'


        function jump() {
            isJumping = true
        
            let upInterval = setInterval(() => {
                if(position >= 200) {
                    clearInterval(upInterval)
        
                    let downInterval = setInterval(() => {
                        if(position <= 50){
                            clearInterval(downInterval)
                            isJumping = false
                        } else {
                            position -= 20
                            dino.style.bottom = position + 'px'
                        }
                    }, 35)
                } else {
                    position += 20
                    dino.style.bottom = position + 'px'
                }
            
            }, 20)
        }     
    

        function createCactus() {
            const cactus = document.createElement('div')
            let cactusPosition = 2000
            let randomTime = Math.random() * 6000
        
            cactus.classList.add('cactus')
            cactus.style.left = 2000 + 'px'
            background.appendChild(cactus)
        
            let leftInterval = setInterval(() => {
                
                if(cactusPosition < -60){
                    clearInterval(leftInterval)
                    background.removeChild(cactus)
                } else if (cactusPosition > 0 && cactusPosition < 60 && position <  60) {
                    clearInterval(leftInterval)
                    document.body.innerHTML = '<img class="game-over" src="./sprites/game_over.png">'
                } else {
                    cactusPosition -= 10
                    cactus.style.left = cactusPosition + 'px'
                }
        
            }, 30)
        
                setTimeout(createCactus, randomTime * 10)
        }

        function createScoreboard() {
            wasPressed = true
        
            const score = document.querySelector('.scoreboard')
            let count = 0
        
           setInterval(() => score.innerHTML = count++, 250)
           
        }
        
        createCactus()
        

        if(!isJumping) {
            jump()
        }

        if(!wasPressed) {
            createScoreboard()
        }
    }
}

document.addEventListener('keydown', handleKeyUp)