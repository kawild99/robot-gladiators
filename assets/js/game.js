//this asks for the robot's name
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if the player chooses to fight, then fight
  if (promptFight === "FIGHT" || promptFight === "fight") {
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  }

  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  //check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }

  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  }
  //if a player chooses to skip
  else if (promptFight === "SKIP" || promptFight === "skip") {
      var confirmSkip = window.confirm("Are you sure you want to skip?");
      //if yes, leave fight
      if(confirmSkip) {
        playerMoney = playerMoney - 2;
        window.alert(playerName + " has chosen to skip the fight! " + playerName + " has " + playerMoney + " dollars left.");
    }
    //if no, ask question again by running fight () again
    else {
        fight ();
    }
    }

  else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight ();