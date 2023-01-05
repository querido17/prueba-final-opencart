import { assert } from 'chai';
import { expect } from 'chai';

import homePage from '../pages/home.page';
import shoppingCartPage from '../pages/shoppingCart.page';

const articulo1 = MacBook;
const articulo2 = iPhone;
const arrayItems = [articulo1, articulo2];

describe('OpenCart Shopping Cart', () => {
    arrayItems.forEach(({item}) => {
        before('Ingresa a la página principal', async () => {
            await homePage.abrir('/');
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        });
           it(`[CP05] Debería agregar ${item} al carrito de compras`, async ()=> {
                await homePage.clickearElemento(await homePage.getProduct(item));
                expect(await (homePage.getProduct(item)).isDisplayedInViewport(), `Error: no se ingresó a ${item}`).to.be.true;
                await shoppingCartPage.addToCart();
                expect(await shoppingCartPage.successMsg.isDisplayedInViewport(), `Error: No se agregó ${item} al carrito de compras`).to.be.true;
                // assert.equal(await shoppingCartPage.getSuccessMsg(), `Success: You have added ${item} to your `, 'Error: debería mostrarse mensaje de éxito');
                await homePage.returnHome();
                expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
            });
    });
 });