const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position = 50  

function handleKeyUp(event) {
    if (event.keyCode === 32) { 

        document.querySelector('img').src = './sprites/trex1.png'

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
            let cactusPosition = 1000
            let randomTime = Math.random() * 6000
        
            cactus.classList.add('cactus')
            cactus.style.left = 1000 + 'px'
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
        
                setTimeout(createCactus, randomTime)
        }
        
        createCactus()

        if(!isJumping) {
            jump()
        }
    }
}

document.addEventListener('keydown', handleKeyUp)