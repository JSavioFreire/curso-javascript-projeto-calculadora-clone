class CalcController{       //class sao usadas em orientacao a objeto. dentro de uma Class tem variaveis e funcoes, so que dentro de uma class, variaveis sao chamadas de atributos, e funcoes, de metodos.

//para representar uma class, precisamos de um objeto. um objeto representa uma class
constructor(){
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');


    //this é como uma variavel so que com mais "poderes" dentro da class.
    //quando tem underline antes do nome da variavel, ela se torna privada, e so a galera da mesma class tem acesso a ela
    this.initialize();    
    this.initButtonsEvents();
}
initialize(){
    this.setDisplayDateTime()       //metodo utilizado

    setInterval(() => {

        this.setDisplayDateTime();  //metodo utilizado

    }, 1000);

}

initButtonsEvents(){

    let buttons = document.querySelectorAll('#buttons > g, #parts > g')

    buttons.forEach( (btn, index) => {
        btn.addEventListener('click', e=> {
            console.log(e)
            console.log(btn)
            console.log(index)
        })
        
    });
   
}
setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this._locale)
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
}       //tudo que preciso usar 2 vezes, eu posso criar um metodo

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    } 
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date;
    }
    
    set currentDate(value){
        this._currentDate = value;
    }




    




}