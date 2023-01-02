import { assert } from 'chai';
import { expect } from 'chai';
import { DATA } from '../data/registerData.json';

import homePage from '../pages/home.page';
import registerPage from '../pages/register.page';
import utilitiesMethods from '../utils/utilitiesMethods';

describe('OpenCart Register', () => {

    it('[CP07] Debería registrar al usuario al ingresar datos válidos', async () => { 
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        //assert.equal(await homePage.getHomeTitle(), 'Your Store', 'Error: no se ingresó a la pantalla de inicio');
        await homePage.entrarAlRegister();
        expect(await registerPage.registerForm.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        const randomEmail = await utilitiesMethods.makeid(10) + '@testmail.com';
        await registerPage.completeEmail(`${randomEmail}`);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        await registerPage.acceptPrivacyPolicy();
        await registerPage.confirmRegistry();
        expect(await registerPage.successTab.isDisplayedInViewport(), 'Error: no se registró el usuario').to.be.true;

        await registerPage.logOut();
        expect(await registerPage.logOutTab.isDisplayedInViewport(), 'Error: no se cerró sesión').to.be.true;
        await homePage.returnHome();
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
    }); 

    it('[CP08] No debería registrar al usuario al ingresar E-Mail asociado a otro usuario', async () => { 
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        await homePage.entrarAlRegister();
        expect(await registerPage.registerForm.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        await registerPage.completeEmail(DATA.email);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        await registerPage.acceptPrivacyPolicy();
        await registerPage.confirmRegistry();
        expect(await registerPage.warningMsg.isDisplayedInViewport(), 'Error: debería mostrarse mensaje de error correpondiente').to.be.true;

        await homePage.returnHome();
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
    });

    it('[CP09] No debería registrar al usuario al ingresar datos válidos pero no aceptar la política de privacidad', async () => { 
        await homePage.abrir('/');
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        await homePage.entrarAlRegister();
        expect(await registerPage.registerForm.isDisplayedInViewport(), 'Error: no se ingresó a Register Page').to.be.true;

        await registerPage.completeFirstName(DATA.firstName);
        await registerPage.completeLastName(DATA.lastName);
        const randomEmail = await utilitiesMethods.makeid(10) + '@testmail.com';
        await registerPage.completeEmail(`${randomEmail}`);
        await registerPage.completeTelephone(DATA.telephone);
        await registerPage.completePassword(DATA.password);
        await registerPage.confirmPassword(DATA.password);

        await registerPage.confirmRegistry();
        expect(await registerPage.warningMsg.isDisplayedInViewport(), 'Error: debería mostrarse mensaje de error correpondiente').to.be.true;

        await homePage.returnHome();
        expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
    });
  });