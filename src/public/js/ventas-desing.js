export default class VentasDesing{
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
        componente.innerHTML="Vacia Ventas";
        this.componente = componente;
    }
    getComponente(){
        return this.componente;
    }
}