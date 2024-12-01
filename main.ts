basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.rest(music.beat(BeatFraction.Quarter))
    basic.clearScreen()
    music.rest(music.beat(BeatFraction.Sixteenth))
})
