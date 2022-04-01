basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.showNumber(5)
    }
    if (input.lightLevel() > 160) {
        basic.showNumber(4)
    }
    if (input.lightLevel() == 120) {
        basic.showNumber(3)
    }
    if (input.lightLevel() > 80) {
        basic.showNumber(2)
    }
    if (input.lightLevel() > 40) {
        basic.showNumber(5)
    }
})
