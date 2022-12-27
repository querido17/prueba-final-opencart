import { assert } from "chai";
import { expect } from "chai";
import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import registerPage from '../pages/register.page';

describe('OpenCart Register', () => {

    it('[CP07] Debería registrar al usuario al ingresar datos válidos', async () => { 
        // Ingreso a la pantalla register
        await homePage.abrir('/');
        assert.equal(await homePage.getHomeTitle(), 'Your Store', 'Error: no se ingresó a la pantalla de inicio');
        await homePage.entrarAlRegister();
        expect(await registerPage.registerContainer.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        // Completar los campos
        

        await browser.pause(5000);
    });
  });