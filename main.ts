let Jarak = 0
basic.showIcon(IconNames.Umbrella)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().show()
Tinybit.RGB_Car_Program().clear()
basic.forever(function () {
    Jarak = Tinybit.Ultrasonic_Car()
    if (Jarak < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (Jarak >= 5 && Jarak < 20) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    Jarak = Tinybit.Ultrasonic_Car()
    if (Jarak < 5) {
        Tinybit.RGB_Car_Big2(0, 0, 255)
    } else if (Jarak >= 5 && Jarak < 20) {
        Tinybit.RGB_Car_Big2(0, 255, 0)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
})
basic.forever(function () {
    Jarak = Tinybit.Ultrasonic_Car()
    if (Jarak < 5) {
        basic.showArrow(ArrowNames.North)
    } else if (Jarak >= 5 && Jarak < 20) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.clearScreen()
    }
})
