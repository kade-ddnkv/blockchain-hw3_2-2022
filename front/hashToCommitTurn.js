function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// turnNumber - число 1, 2 или 3.
// 1 - Rock
// 2 - Paper
// 3 - Scissors
// Например:
// Rock  (это 1 и 1234): 0xda6fdbe096d5e05ba7588525187e798d5f1c4658bacdabccefb08c01d861c095
// Paper (это 2 и 5678): 0x574a9947c42495d484c173efc0d9774539fb08c6f2f7e2e1314dfaa921aabbe3
function generateCommit(turnNumber) {
    const keccak256 = require('keccak256')
    randomNumber = getRandomInt(1000000, 1000000000);
    console.log('turnNumber:   ' + turnNumber);
    console.log('randomNumber: ' + randomNumber);
    console.log('hash:         ' + keccak256(turnNumber.toString() + randomNumber.toString()).toString('hex'));
    console.log();
}

generateCommit(1);
generateCommit(3);