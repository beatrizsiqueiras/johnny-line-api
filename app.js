const express = require("express");
const cors = require("cors");
var five = require("johnny-five");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    const { commands } = req.body;
    const board = new five.Board({ port: "COM5" });

    board.on("ready", () => {
        // Create a new `motor` hardware instance.
        const motorA = new five.Motor({
            pins: {
                pwm: 6,
                dir: 5,
            },
        });
        const motorB = new five.Motor({
            pins: {
                pwm: 10,
                dir: 9,
            },
        });
        motorA.forward(10);
        // motorB.forward(10);
        // Forward at full spe
    });

    // board.on("ready", function () {
    //     // var ledWhite = new five.Led(10);
    //     // var ledBlue = new five.Led(5);
    //     // var interval = 1000;

    //     // commands.forEach(function (command, index) {
    //     //     setTimeout(function () {
    //     //         if (command.type === "nodeAdvance") {
    //     //             ledWhite.off();
    //     //             ledBlue.off();
    //     //             ledWhite.on();
    //     //         } else if (command.type === "nodeSpin") {
    //     //             ledBlue.off();
    //     //             ledWhite.off();
    //     //             ledBlue.on();
    //     //         }
    //     //     }, index * interval);
    //     // });
    //     // ledBlue.off();
    //     // ledWhite.off();
    // });

    // res.send(`Blinking led every ${blinkInterval}ms`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
