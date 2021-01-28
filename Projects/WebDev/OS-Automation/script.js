var robot = require("robotjs")
var fs = require("fs")

setTimeout(openPaint, 500)
// var loc = robot.getMousePos();
// console.log(loc);
function openPaint() {
    robot.moveMouseSmooth(19, 750)
    robot.mouseClick()
    robot.typeString(" paint")
    robot.keyTap("enter")
    robot.moveMouseSmooth(687, 311)
    robot.mouseClick()
    setTimeout(writeHI, 1000)
}
function writeHI() {
    robot.moveMouseSmooth(400, 250)
    robot.mouseToggle("down", "left")
    robot.dragMouse(400, 450)
    robot.mouseToggle("up", "left")

    robot.moveMouseSmooth(400, 350)
    robot.mouseToggle("down", "left")
    robot.dragMouse(600, 350)
    robot.mouseToggle("up", "left")

    robot.moveMouseSmooth(600, 250)
    robot.mouseToggle("down", "left")
    robot.dragMouse(600, 450)
    robot.mouseToggle("up", "left")
}
setTimeout(openWps, 8000)
function openWps() {
    setTimeout(function () {
        robot.moveMouseSmooth(19, 750)
        robot.mouseClick()
        robot.typeString(" WPS")
        robot.keyTap("enter")
        setTimeout(openChrome, 2000)
    }, 2000)
}
function openChrome() {
    robot.moveMouseSmooth(19, 750)
    setTimeout(function () {
        robot.mouseClick()
        robot.typeString(" chrome")
        robot.keyTap("enter")
        setTimeout(openTabs, 2000)

    }, 2000)
}
function openTabs() {
    var rdata = fs.readFileSync("./chrome.json")
    var tabs = JSON.parse(rdata);
    for (var i = 0; i < tabs.length; i++) {
        for (var j = 0; j < tabs[i].length; j++) {
            robot.typeString(tabs[i][j])
            robot.keyTap("enter")

            if (j < tabs[i].length - 1) {
                robot.keyToggle("control","down")
                robot.keyTap("t")
                robot.keyToggle("control", "up")
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n")
                robot.keyToggle("control","up")
            }

        }
    }
}

