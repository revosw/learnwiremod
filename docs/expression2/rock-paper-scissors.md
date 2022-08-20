# Putting it all together
You've learned a whole bunch. In this section, we will recreate rock-paper-scissors, and go into detail how to start thinking about projects like these.

## Analyzing the finished code
```
@name Rock Paper Scissors
          
function string randomChoice() {
    RNG = randint(3)
    
    if (RNG == 1) {
        Choice = "rock"
    }
    elseif (RNG == 2) {
        Choice = "paper"
    }
    else {
        Choice = "scissors"
    }
    
    return Choice
}

Player = "paper"
Computer = randomChoice()

print(" ")
print("You chose: " + Player)
print("Computer chose: " + Computer)

if (Player == Computer) {
    print("Draw")
}
elseif (Player == "rock" && Computer == "paper") {
    print("You lost")
}
elseif (Player == "rock" && Computer == "scissors") {
    print("You won!")
}
elseif (Player == "paper" && Computer == "rock") {
    print("You won!")
}
elseif (Player == "paper" && Computer == "scissors") {
    print("You lost")
}
elseif (Player == "scissors" && Computer == "rock") {
    print("You lost")
}
elseif (Player == "scissors" && Computer == "paper") {
    print("You won!")
}
```