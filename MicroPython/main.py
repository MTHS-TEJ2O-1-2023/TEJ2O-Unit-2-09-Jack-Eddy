"""
Created by: Jack Eddy
Created on: oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
from random import *

# variables
random_number = randint(0, 2)
score = 0

display.clear()
display.show(Image.HAPPY)
sleep(1000)

accelerometer.is_gesture("shake")
if random_number == 0:
    display.show(Image.SQUARE_SMALL)
    sleep(5000)
    display.show(Image.HAPPY)

if random_number == 1:
    display.show(Image.SQUARE)
    sleep(5000)
    display.show(Image.HAPPY)

if random_number == 2:
    display.show(Image.SCISSORS)
    sleep(5000)
    display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        score = score + 1
        display.show(Image.YES)
    if button_b.is_pressed():
        display.scroll("Score: ")
        display.scroll(score)
