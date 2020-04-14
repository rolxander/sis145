export default class InicioDesing{
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
        componente.innerHTML="Vacio Inicio";
        this.componente = componente;
    }
    getComponente(){
        return this.componente;
    }
}