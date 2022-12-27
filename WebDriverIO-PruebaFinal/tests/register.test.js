import { assert } from "chai";
import { expect } from "chai";
import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import registerPage from '../pages/register.page';
import { DATA } from '../data/registerData.json';

describe('OpenCart Register', () => {

    it('[CP07] Debería registrar al usuario al ingresar datos válidos', async () => { 
        // Ingreso a la pantalla register
        await homePage.abrir('/');
        assert.equal(await homePage.getHomeTitle(), 'Your Store', 'Error: no se ingresó a la pantalla de inicio');
        await homePage.entrarAlRegister();
        expect(await registerPage.registerContainer.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        // Completar los campos
        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        await registerPage.completeEmail(DATA.email);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        // Aceptar Privacy Policy y confirmar el registro
        await registerPage.acceptPrivacyPolicy();
        await registerPage.confirmRegistry();

        await browser.pause(5000);
    });
  });