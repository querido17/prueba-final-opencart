const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Go to page
    * @param {String} ruta
    */
   async abrir(ruta) {
       await browser.url(`${ruta}`);
   }


   /**
    * Wait for element to be clickable and click
    * @param {Object} element
    */
   async clickearElemento(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }


   /**
    * Method to send text to an element
    * @param {Object} element
    * @param {String} text
    */
   async vaciarCampoYEnviarTexto(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.clearValue();
       await element.click();
       await element.keys(text);
   }


}