import BasePage from '../pages/base.page';

class ShoppingCartPage extends BasePage {
    //WebElements
    get addToCartBtn() {return $('#button-cart') };
    get successMsg() {return $('.alert-success')};
    get removeBtn() {return $('button[title="Remove"]')};

    //-------------------------------------------------------------------------------------------------------//

    async addToCart(){
        addStep('Add to Shopping Cart');
        await super.clickearElemento(this.addToCartBtn);
    }

    async removeFromCart(){
        addStep('Remove from Shopping Cart');
        await super.clickearElemento(this.removeBtn);
    }

    async getSuccessMsg() {
        return await (await this.successMsg).getText();
    }
 }
 export default new ShoppingCartPage();
 