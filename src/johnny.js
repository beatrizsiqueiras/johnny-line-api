const { Board } = require("johnny-five");

const board = new Board({
    port: "COM5",
});

board.on("ready", () => {
    board.pinMode(10, board.MODES.OUTPUT);

    board.loop(1000, () => {
        board.digitalWrite(10, board.pins[10].value ? 0 : 1);
    });
});