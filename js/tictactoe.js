"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

const size = BATTLEFIELD.length
let winner = null;
let winType = "";


// Check Horizontal
for (let i = 0; i < size; i++) {
    let firstElement = BATTLEFIELD[i][0];
    if (firstElement !== null) {
        let isWin = true;
        for(let j = 1; j < size; j++) {
            if (BATTLEFIELD[i][j] !== firstElement) {
                isWin = false;
            }
        }
        if (isWin === true) {
            winner = firstElement;
            winType = "horizontal";
        }
    }
}
// Check Vertical
for (let j = 0; j < size; j++) {
    let firstElement = BATTLEFIELD[0][j];
    if (firstElement !== null) {
        let isWin = true;
        for(let i = 1; i < size; i++) {
            if (BATTLEFIELD[i][j] !== firstElement) {
                isWin = false;
            }
        }
        if (isWin === true) {
            winner = firstElement;
            winType = "vertical";
        }
    }
}

// Check Main Diagonal

let firstMain = BATTLEFIELD[0][0];
if (firstMain !== null) {
    let isWin = true;
    for (let i = 1; i < size; i++) {
        if (BATTLEFIELD[i][i] !== firstMain) {
            isWin = false;
        }
    }
    if (isWin === true) {
        winner = firstMain;
        winType = "main-diagonal";
    }
}


// Check Anti Diagonal

let firstAnti = BATTLEFIELD[0][size-1];
    if(firstAnti !== null && firstAnti !== undefined) {
        let isWin = true;
        for(let i = 1; i < size; i++) {
            if(BATTLEFIELD[i][size-1-i] !== firstAnti) {
                isWin = false;
            }
        }
        if (isWin === true) {
            winner = firstAnti;
            winType = "anti-diagonal";
        }
    }

if (winner !== null) {
    console.log("The great Battle is over!");
    console.log("The great winner is: " + winner + " (" + winType + ")");
} else {
    console.log("No winner!")
}

//what .... was that.... i almost lost my mind coding this... the javascript way...  a hard way indeed
//when i catch u jimmy... oh when i catch u....