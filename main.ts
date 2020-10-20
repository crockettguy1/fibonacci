let Num3 = 0
let Num1 = 1
let Num2 = 1
basic.showNumber(Num1)
basic.showNumber(Num2)
while (true) {
    Num3 = Num1 + Num2
    basic.showNumber(Num3)
    basic.showString(" ")
    serial.writeLine("" + (Num3))
    Num1 = Num2
    Num2 = Num3
}
basic.forever(function () {
    serial.writeLine("" + (input.runningTime()))
})
