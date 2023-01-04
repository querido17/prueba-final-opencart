import BasePage from '../pages/base.page';

//Boton eliminar

class ShoppingCartPage extends BasePage {
    //WebElements
    get addToCartBtn() {return $('#button-cart') }

    //-------------------------------------------------------------------------------------------------------//

    async addToCart(){
        addStep('Add to cart');
        await super.clickearElemento(this.addToCartBtn);
    }
 }
 export default new ShoppingCartPage();
 