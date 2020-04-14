export default class ProductosDesing{
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
        componente.innerHTML="Vacia Producto";
        this.componente = componente;
    }
    getComponente(){
        return this.componente;
    }
}