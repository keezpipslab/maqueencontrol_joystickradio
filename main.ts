input.onButtonPressed(Button.A, function () {
    speedVar += -5
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.substr(0, 1) == "a") {
        led.plotBrightness(0, 2, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speedVar)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speedVar)
    } else if (receivedString.substr(0, 1) == "s") {
        led.plotBrightness(4, 2, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speedVar)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speedVar)
    } else if (receivedString.substr(0, 1) == "w") {
        led.plotBrightness(2, 0, 255)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speedVar * 3)
    } else if (receivedString.substr(0, 1) == "z") {
        led.plotBrightness(2, 4, 255)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speedVar * 3)
    } else {
        led.plotBrightness(0, 2, 0)
        led.plotBrightness(4, 2, 0)
        led.plotBrightness(2, 0, 0)
        led.plotBrightness(2, 4, 0)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
input.onButtonPressed(Button.B, function () {
    speedVar += 5
})
let speedVar = 0
let radioNummer = 0
let id = 0
if (control.deviceSerialNumber() == 1395126174) {
    id = 1
    radioNummer = id
} else if (control.deviceSerialNumber() == 589949937) {
    id = 2
    radioNummer = id
} else if (control.deviceSerialNumber() == -1379123023) {
    id = 3
    radioNummer = id
} else if (control.deviceSerialNumber() == -592996470) {
    id = 4
    radioNummer = id
} else if (control.deviceSerialNumber() == 658422676) {
    id = 5
} else if (control.deviceSerialNumber() == 734048875) {
    id = 6
} else if (control.deviceSerialNumber() == -1103148995) {
    id = 7
} else if (control.deviceSerialNumber() == 1589646707) {
    id = 8
} else if (control.deviceSerialNumber() == -1897610602) {
    id = 9
} else if (control.deviceSerialNumber() == 940218175) {
    id = 0
    radioNummer = id
} else {
    id = -1
}
radio.setGroup(radioNummer)
basic.showString("" + (id))
speedVar = 75
basic.forever(function () {
	
})
