let yes = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.showNumber(4)
    basic.showNumber(5)
    basic.showNumber(6)
})
input.onButtonPressed(Button.B, function () {
    yes = 9
    basic.showNumber(yes)
    for (let index = 0; index < 9; index++) {
        yes += -1
        basic.showNumber(yes)
    }
})
basic.forever(function () {
	
})
