/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program plays rock paper scissors
*/

// variables
let randomNumber: number
let score: number
score = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// shake
input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

  // rock
  if (randomNumber === 0) {
    basic.showIcon(IconNames.SmallSquare)
  }

  // paper
  if (randomNumber === 2) {
    basic.showIcon(IconNames.Square)
  }

  // scissors
  if (randomNumber === 3) {
    basic.showIcon(IconNames.Scissors)
  }

  // add point to score
  input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showIcon(IconNames.Yes)
  })

  // show score
  input.onButtonPressed(Button.B, function () {
    basic.showString('Score: ' + (score).toString())
  })

  // pause
  basic.pause(5000)
  basic.showIcon(IconNames.Happy)
})
