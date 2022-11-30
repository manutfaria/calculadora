function criaCalculadora() {
    return{
        display:document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace(){
            this.display.assEventListener('Keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

pressionaEnter() {
    this.
}

    }
}