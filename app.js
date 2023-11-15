const express = require("express");
const cors = require("cors");
const { Board } = require("johnny-five");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    const { blinkInterval } = req.body;

    const board = new Board({
        port: "COM5",
    });

    board.on("ready", () => {
        board.pinMode(10, board.MODES.OUTPUT);

        board.loop(blinkInterval, () => {
            board.digitalWrite(10, board.pins[10].value ? 0 : 1);
        });
    });

    res.send(`Blinking led every ${blinkInterval}ms`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
