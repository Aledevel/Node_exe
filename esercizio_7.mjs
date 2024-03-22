// Create agetResults function that uses async and await. Inside of the function,
// call the luckyDraw function for each of the players: Tina, Jorge, Julien
// Log out the resolved value for each promise and handle any promise rejections.

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      try {
        if (win) {
        resolve(console.log(`${player} won a prize in the draw!`));
      } else {
        throw new error;
      }
      } catch (error) {
       console.log(`${player} lost the draw.`) ;
        
      }
      
    });
  });
}
let player_1 = "Tina";
let player_z = "Jorge";
let player_xz = "Julien";

async function Player(player1,player2,player3,callback) {
  await callback(player1);
  await callback(player2);
  await callback(player3);
}

Player(player_1,player_z,player_xz ,luckyDraw);

