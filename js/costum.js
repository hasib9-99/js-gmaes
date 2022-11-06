let player = document.querySelector(".player")
let playerOne = document.querySelector(".playerOne")
let playerOneInput = document.querySelector(".playerOneInput")
let playerOneBtn = document.querySelector(".playerOneBtn")
let playerOneError = document.querySelector(".playerOneError")
let playerTwo = document.querySelector(".playerTwo")
let playerTwoBtn = document.querySelector(".playerTwoBtn")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoError = document.querySelector(".playerTwoError")
let Chance = document.querySelector(".Chance")


let playerNumber
let ChanceNumber = 3


playerOneBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(playerOneInput.value){
        if(playerOneInput.value - 10){
            if(playerOneInput.value > 0 && playerOneInput.value < 10){
                playerOneError.innerHTML = ""
                playerNumber = playerOneInput.value
                player.innerHTML = "Player Two"
                playerOne.style.display = "none"
                playerTwo.style.display = "block"
            }else{
                playerOneError.innerHTML = "Enter The Value 1 to 10"
            }
        }else{
            playerOneError.innerHTML = "Plaease Input The Number Not String"
        }
    }else{
        playerOneError.innerHTML = "Please Input The Number"
    }
})


playerTwoBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(playerTwoInput.value){
        if(playerTwoInput.value - 10){
            if(playerTwoInput.value > 0 && playerTwoInput.value < 10){
                playerTwoError.innerHTML = ""
                if(playerNumber == playerTwoInput.value){
                    console.log("ok");
                }else{
                    console.log("not ok");
                }
            }else{
                playerTwoError.innerHTML = "Enter The Value 1 to 10"
            }
        }else{
            playerTwoError.innerHTML = "Plaease Input The Number Not String"
        }
    }else{
        playerTwoError.innerHTML = "Please Input The Number"
    }
}) 