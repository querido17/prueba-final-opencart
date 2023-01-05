import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') };
   get myAccountCmb(){ return $('a[title="My Account"]') };
   get cmbOptRegister() {return $('//a[contains(text(), "Register")]') };
   get cmbOptLogin() {return $('//a[contains(text(), "Login")]')};
   get carrusel() {return $('#slideshow0')};
   get homeTtl() {return $('//h1/a') };

   //-------------------------------------------------------------------------------------------------------//

   /**
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
       addStep(`Escribe el artículo ${articulo} en el campo de búsqueda y presiona Enter`);
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   async obtenerTextoBusqueda() {
       addStep('Obtener texto de la barra de búsqueda');
       return await this.barraDeBusqueda.getValue();
   }

   async entrarAlRegister() {
        addStep('Go to Register Page');
        await super.clickearElemento(this.myAccountCmb);
        await super.clickearElemento(this.cmbOptRegister);
   }

   async entrarAlLogin() {
        addStep('Go to Login Page');
        await super.clickearElemento(this.myAccountCmb);
        await super.clickearElemento(this.cmbOptLogin);
   }

   /* async getHomeTitle() {
        return await this.homeTtl.getText();
   } */
   
   async returnHome(){
      addStep('Return to Home Page');
      await super.clickearElemento(this.homeTtl);
   }

   /**
     * @param {String} articulo nombre del producto
     * @returns Selector
     */
   async getProduct(articulo){
     addStep('Devuelve selector del artículo del block "Featured" acorde al nombre');
     const producto = await $(`img[title="${articulo}"]`);
     return producto;
   }

}
export default new HomePage();