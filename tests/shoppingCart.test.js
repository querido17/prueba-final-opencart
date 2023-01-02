import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import shoppingCartPage from '../pages/shoppingCart.page';



describe('OpenCart Shopping Cart', () => {

    it('Debería buscar iphone, ingresar al artículo y agregarlo al carrito de Compras', async () => { 
        // Busco el artículo
        await homePage.abrir('/');
        let articulo = 'iphone';
        await homePage.buscar(articulo);
        await busquedaPage.ingresarAlResultado();

        // Hago click en el artículo
        let iphone = await $('*=iPhone');
        await iphone.click();
        
        // Agrego al carrito de compras
        await shoppingCartPage.agregarAlCarrito();

        await browser.pause(5000);
    });
  });