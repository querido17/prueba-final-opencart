import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') };
   get myAccountCmb(){ return $('a[title="My Account"]') };
   get cmbOptRegister() {return $('//a[contains(text(), "Login")]') };
   get cmbOptLogin() {return $()};
   get carrusel() {return $('#slideshow0')};
   get homeTtl() {return $('//h1/a') };
   get macBook() {return $('img[title="MacBook"]')};
   get iPhone() {return $('img[title="iPhone"]')};


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

}
export default new HomePage();