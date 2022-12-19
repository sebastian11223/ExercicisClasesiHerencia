//EXERCICI 1
let scoreBoard;
function createScoreBoard() {

  scoreBoard = {TheBestEver: 1000000,}
  
}
//EXERCICI 2
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
   
}

//EXERCICI 3
function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];

}

//EXERCICI 4
function updateScore(scoreBoard, player, score) {
    scoreBoard[player] += score;
    return scoreBoard;

}

//EXERCICI 5
function applyMondayBonus(scoreBoard) {
    for(let plus in scoreBoard){
      scoreBoard[plus] += 100;

    }
    return scoreBoard;
}

//EXERCICI 6
const params = {score: 200};

function normalize(score) {
  return 2 * score + 10;
}


function normalizeScore(params) {
  return params.normalize(params.score);
}