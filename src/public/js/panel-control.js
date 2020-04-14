import UsuarioDesing from './personal-desing';
import ProductosDesing from './productos-desing';
import VentasDesing from './ventas-desing';
import InventarioDesing from './inventario-desing';
import InicioDesing from'./inicio-desing';

export default class PanelControl{
    constructor(){
        this.personalDesing = new UsuarioDesing();
        this.productosDesing = new ProductosDesing();
        this.ventasDesing = new VentasDesing();
        this.inventarioDesing = new InventarioDesing();
        this.inicioDesing = new InicioDesing();

        this.opcionsControl = {
            1:{
                name : "Inicio",
                componente : {},
                componenteContenido:{}

            },
            2:{
                name : "Personal",
                componente : {},
                componenteContenido:{}

            },
            3:{
                name : "Productos",
                componente : {},
                componenteContenido:{}

            },
            4:{
                name : "Ventas",
                componente : {},
                componenteContenido:{}

            },
            5:{
                name : "Inventario",
                componente : {},
                componenteContenido:{}

            }
        
        }
        this.pintar();
        this.llenarComponentes();
        this.events();
        }
  pintar(){
      let enlaces_control =  document.querySelector('.butons-menu');
      Object.keys(this.opcionsControl).map((key)=>{
          let listaEnlaces = document.createElement('li');
         let enlace = document.createElement('a');
         enlace.setAttribute("href","#");
         enlace.innerHTML = this.opcionsControl[key]['name'];
         this.opcionsControl[key]['componente'] = enlace;
       /* enlace.addEventListener('click',function(e){
            let contenido = document.querySelector('.contenido-info');
            console.log(this)
        })*/
         listaEnlaces.appendChild(enlace)
         enlaces_control.appendChild(listaEnlaces)
      })
      /*
        */ 
  }
  events(){
        let contenido = document.querySelector('.contenido-info');
        Object.keys(this.opcionsControl).map((key)=>{
        let componente = this.opcionsControl[key]['componente'];
        componente.addEventListener('click',(e)=>{
            e.preventDefault();
            contenido.innerHTML="";
            contenido.appendChild(this.opcionsControl[key]['componenteContenido'])

        });
        

      });
      contenido.appendChild(this.opcionsControl[1]['componenteContenido']);
      
  }
  llenarComponentes(){
        this.opcionsControl[1]['componenteContenido'] = this.personalDesing.componteVacia()
        this.opcionsControl[2]['componenteContenido'] = this.personalDesing.componteVacia()
        this.opcionsControl[3]['componenteContenido'] = this.productosDesing.componteVacia()
        this.opcionsControl[4]['componenteContenido'] = this.ventasDesing.componteVacia()
        this.opcionsControl[5]['componenteContenido'] = this.inventarioDesing.componteVacia()
        
  }
}