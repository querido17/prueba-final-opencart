import BasePage from '../pages/base.page';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('h4') }

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async ingresarAlResultado() {
        addStep('Ingresar al resultado')
        await super.clickearElemento(this.resultado);
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
       addStep('Obtener texto del resultado de la búsqueda')
       return await this.resultado.getText();
   }

}

export default new BusquedaPage();