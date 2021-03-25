isGameOver() {
    const matches = ["XXX", "OOO"]

    const firstNull = this._cells.findIndex((cell) => cell.symbol == null);
    if(firstNull == -1) {
        return { gameOver: true, winner: null};
    }

    const winningConditions = [
        //Linha
        this.cells[0] + this.cells[1].symbol + this.cells[2].symbol
        this.cells[3] + this.cells[4].symbol + this.cells[5].symbol
        this.cells[6] + this.cells[7].symbol + this.cells[8].symbol

        //Colunas
        this.cells[0] + this.cells[3].symbol + this.cells[6].symbol
        this.cells[1] + this.cells[4].symbol + this.cells[7].symbol
        this.cells[2] + this.cells[5].symbol + this.cells[8].symbol

        //Diagonais
        this.cells[0] + this.cells[4].symbol + this.cells[8].symbol
        this.cells[6] + this.cells[4].symbol + this.cells[2].symbol
    ]

    const winningCondtion = winningConditions.find((condtion) => {
        return condtion == matches[0] || condtion == matches[1];
    });

    if (winningConditions) {
        return {gameOver: true, winner: winningCondition == matches[0] ? 'x' : '0',
    };
    }

    return { gameOver:false, winner: null};
}