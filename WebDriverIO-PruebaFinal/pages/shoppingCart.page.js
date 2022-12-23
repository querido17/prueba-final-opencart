import BasePage from '../pages/base.page';

//Boton eliminar

class ShoppingCartPage extends BasePage {
    //WebElements
    // get addToCartBtn(){ return $('#button-cart') }

    async agregarAlCarrito(){
        let addToCartBtn = await $('#button-cart');
        await addToCartBtn.click();
    }
 }
 export default new ShoppingCartPage();
 