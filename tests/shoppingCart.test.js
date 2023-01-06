import { assert } from 'chai';
import { expect } from 'chai';

import homePage from '../pages/home.page';
import shoppingCartPage from '../pages/shoppingCart.page';
import utilitiesMethods from '../utils/utilitiesMethods';

const articulo1 = 'MacBook';
const articulo2 = 'iPhone';
const arrayItems = [articulo1, articulo2];

describe('OpenCart Shopping Cart', () => {
    arrayItems.forEach((item) => {
        before('Ingresa a la página principal', async () => {
            await homePage.abrir('/');
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        });
           it(`[CP05] Debería agregar ${item} al carrito de compras`, async ()=> {
                await homePage.clickearElemento(await homePage.getProduct(item));
                expect(await (await homePage.getProduct(item)).isDisplayedInViewport(), `Error: no se ingresó a ${item}`).to.be.true;
                await shoppingCartPage.addToCart();

                const successMsg = await utilitiesMethods.cutString(await shoppingCartPage.getSuccessMsg());
                assert.equal(`${successMsg}`, `Success: You have added ${item} to your shopping cart!`, 'Error: Debería mostrar mensaje de éxito');
                
                await homePage.returnHome();
                expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
                await homePage.viewCart();
                expect(await homePage.cartTbl.isDisplayedInViewport(), 'Error: no se ingresó a Shopping Cart dropdown menu').to.be.true;
                await shoppingCartPage.removeFromCart();
                assert.equal(await homePage.getCartTotal(), '0 item(s) - $0.00', 'Error: El total debería ser de $0.00');
            });
    });
 });