export default class PersonalDesing{
    constructor(){
        this.componente
    }
    componteVacia(){
        this.crearComponente();
        return this.getComponente();
    }
    componenteUpdate(){}
    crearComponente(){
        let componente = document.createElement('div');
        
        this.componente = componente;
    }
    getComponente(){
        return this.componente;
    }
}