const dino = document.querySelector('.dino')
let isJumping = false

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping) {
            jump()
        }
    }
}

function jump() {
    let position = 50  
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

document.addEventListener('keyup', handleKeyUp)