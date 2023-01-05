import { assert } from 'chai';
import { expect } from 'chai';

import homePage from '../pages/home.page';
import shoppingCartPage from '../pages/shoppingCart.page';


describe('OpenCart Shopping Cart', () => {
    before('Ingresa a la página principal', async () => {
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        const arrayItems = [await homePage.macBook, await homePage.iPhone];
    });
    arrayItems.forEach(({item}) => {
        it(`Debería agregar ${item} al carrito de compras`, async ()=> {
            await homePage.clickearElemento(item);
            await homePage.returnHome();
        });
    });
 });