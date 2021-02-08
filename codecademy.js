const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error!')
    }
  };
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
    case 3:
      return 'rock'
      break;
  }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie!'
    }
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer WIns'
      } else{
        return 'User WIns'
      }
    }
  }
  