import { assert } from 'chai';
import { expect } from 'chai';

import basePage from '../pages/base.page';
import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import shoppingCartPage from '../pages/shoppingCart.page';

const arrayItems = [homePage.macBook, homePage.macBook, homePage.appleCinema30, homePage.canonEOS5D];

describe('OpenCart Shopping Cart', () => {

   arrayItems.forEach(({item}) => {
     it(`Debería agregar ${item} al carrito de compras`, async () => {
       await homePage.abrir('/');
       expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
       await basePage.clickearElemento(item);

       //await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
       //await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
     });
   });
 });