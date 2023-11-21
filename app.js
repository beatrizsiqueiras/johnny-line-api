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

    board.on("ready", function () {
        var ledRed = new five.Led(5);
        var ledBlue = new five.Led(10);
        var interval = 2000;

        commands.forEach(function (command, index) {
            setTimeout(function () {
                if (command.type === "nodeAdvance") {
                    ledBlue.off();
                    ledRed.off();
                    ledRed.on();
                } else if (command.type === "nodeSpin") {
                    ledRed.off();
                    ledBlue.off();
                    ledBlue.on();
                }
            }, index * interval);
        });
        
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
