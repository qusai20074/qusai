basic.forever(function () {
    basic.showNumber(100)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . . . #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Tortoise)
    basic.pause(2000)
    basic.showString("qusai")
})
