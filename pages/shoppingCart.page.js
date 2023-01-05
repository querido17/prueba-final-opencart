import BasePage from '../pages/base.page';

//Boton eliminar

class ShoppingCartPage extends BasePage {
    //WebElements
    get addToCartBtn() {return $('#button-cart') };
    get successMsg() {return $('.alert-success')};

    //-------------------------------------------------------------------------------------------------------//

    async addToCart(){
        addStep('Add to cart');
        await super.clickearElemento(this.addToCartBtn);
    }

    /* async getSuccessMsg() {
        return await (await this.successMsg).getText();
    } */
 }
 export default new ShoppingCartPage();
 