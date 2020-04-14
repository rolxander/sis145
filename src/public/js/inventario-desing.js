export default class InventarioDesing{
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
        componente.innerHTML="Vacio Inventario";
        this.componente = componente;
    }
    getComponente(){
        return this.componente;
    }
}