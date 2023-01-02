import BasePage from '../pages/base.page';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('h4') }

   //-------------------------------------------------------------------------------------------------------//
 
   async ingresarAlResultado() {
       addStep('Click en el resultado de la búsqueda');
       await super.clickearElemento(this.resultado);
   }

   async obtenerNombreResultado() {
       addStep('Obtener texto del resultado de la búsqueda');
       return await this.resultado.getText();
   }

}

export default new BusquedaPage();