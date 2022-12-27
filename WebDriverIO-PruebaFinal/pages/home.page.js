import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') };
   get myAccountCmb(){ return $('a[title="My Account"]') };
   get cmbOptRegister() {return $('//a[contains(text(), "Register")]') };
   get homeTtl() {return $('#logo') };


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
       return await this.barraDeBusqueda.getValue();
   }

   async entrarAlRegister() {
        await super.clickearElemento(this.myAccountCmb);
        await super.clickearElemento(this.cmbOptRegister);
   }

   async getHomeTitle() {
        return await this.homeTtl.getText();
   }


}
export default new HomePage();