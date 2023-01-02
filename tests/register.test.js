import { assert } from 'chai';
import { expect } from 'chai';
import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import registerPage from '../pages/register.page';
import { DATA } from '../data/registerData.json';
import utilitiesMethods from '../utils/utilitiesMethods';

describe('OpenCart Register', () => {

    it('[CP07] Debería registrar al usuario al ingresar datos válidos', async () => { 
        // Ingreso a la pantalla register
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        //assert.equal(await homePage.getHomeTitle(), 'Your Store', 'Error: no se ingresó a la pantalla de inicio');
        await homePage.entrarAlRegister();
        expect(await registerPage.registerContainer.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        // Completar los campos
        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        const randomEmail = await utilitiesMethods.makeid(10) + '@testmail.com';
        await registerPage.completeEmail(`${randomEmail}`);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        // Aceptar Privacy Policy y confirmar el registro
        await registerPage.acceptPrivacyPolicy();
        await registerPage.confirmRegistry();

        expect(await registerPage.successTab.isDisplayedInViewport(), 'Error: no se registró el usuario').to.be.true;

        // Vuelvo al estado inicial cerrando sesión
        await registerPage.logOut();
        expect(await registerPage.logOutTab.isDisplayedInViewport(), 'Error: no se cerró sesión').to.be.true;
        await homePage.returnHome();
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        
        await browser.pause(5000);
    }); 

    it('[CP08] No debería registrar al usuario al ingresar E-Mail asociado a otro usuario', async () => { 
        // Ingreso a la pantalla register
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        await homePage.entrarAlRegister();
        expect(await registerPage.registerContainer.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        // Completar los campos utilizando E-Mail asociado a otro usuario
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

    it('[CP09] No debería registrar al usuario al ingresar datos válidos pero no aceptar la política de privacidad', async () => { 
        // Ingreso a la pantalla register
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        await homePage.entrarAlRegister();
        expect(await registerPage.registerContainer.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        // Completar los campos
        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        await registerPage.completeEmail(DATA.email);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        // No aceptar Privacy Policy y confirmar el registro
        await registerPage.confirmRegistry();

        await browser.pause(5000);
    });
  });