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

function Player(player,callback) {
  callback(player);
}

Player(player_1, luckyDraw);

Player(player_z, luckyDraw);

Player(player_xz, luckyDraw);
