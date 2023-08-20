"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// setting up a communication channel between your program and the user.
//  Your program can ask questions, show messages, and get responses from the user, all through this interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playGame() {
    const targetNumber = generateRandomNumber(1, 100);
    let attempts = 0;
    console.log('Welcome to the Number Guessing Game!');
    console.log('I\'m thinking of a number between 1 and 100.');
    function makeGuess() {
        rl.question('Enter your guess: ', (userInput) => {
            const userGuess = parseInt(userInput, 10);
            if (isNaN(userGuess)) {
                console.log('Invalid input. Please enter a number.');
                makeGuess();
            }
            else {
                attempts++;
                if (userGuess < targetNumber) {
                    console.log('Try higher.');
                    makeGuess();
                }
                else if (userGuess > targetNumber) {
                    console.log('Try lower.');
                    makeGuess();
                }
                else {
                    console.log(`Congratulations! You guessed the number ${targetNumber} correctly in ${attempts} attempts.`);
                    rl.close();
                }
            }
        });
    }
    makeGuess();
}
playGame();
// Using the Midpoint Strategy:
// To efficiently narrow down your guesses, you can use a strategy similar to binary search. Start by guessing the middle number of the possible range (e.g., 50 if the range is 1 to 100).
// Based on the feedback, adjust your next guess to the midpoint of the remaining range. For example, if your first guess is 50 and the game says "Try higher," you would guess 75 (the midpoint between 51 and 100).
// Continue adjusting your guesses based on the midpoint strategy to quickly approach the correct number.
