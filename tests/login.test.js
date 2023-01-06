import { assert } from 'chai';
import { expect } from 'chai';
import { DATA } from '../data/loginData.json';

import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';

const userOne = DATA.userOne;
const userTwo = DATA.userTwo;
const userThree = DATA.userThree;
const arrayUsers = [userOne, userTwo, userThree];

describe('OpenCart Login', () => {

    arrayUsers.forEach((user) => {
        it('[CP10] Debería iniciar sesión al ingresar datos válidos', async ()=> {
            await homePage.abrir('/');
            addStep(`Abrir página OpenCart`);
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
            await homePage.entrarAlLogin();
            expect(await loginPage.loginContainer.isDisplayedInViewport(), 'Error: no se ingresó a Login Page').to.be.true;

            await loginPage.completeEmail(user.email);
            await loginPage.completePassword(user.password);
            await loginPage.confirmLogin();
            expect(await loginPage.accountContainer.isDisplayedInViewport(), 'Error: no se inició sesión').to.be.true;

            await loginPage.logOut();
            expect(await registerPage.logOutTab.isDisplayedInViewport(), 'Error: no se cerró sesión').to.be.true;
            await homePage.returnHome();
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        });
    });

    arrayUsers.forEach((user) => {
        it('[CP11] No debería iniciar sesión al no ingresar contraseña', async ()=> {
            await homePage.abrir('/');
            addStep(`Abrir página OpenCart`);
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
            await homePage.entrarAlLogin();
            expect(await loginPage.loginContainer.isDisplayedInViewport(), 'Error: no se ingresó a Login Page').to.be.true;

            await loginPage.completeEmail(user.email);
            await loginPage.confirmLogin();
            assert.equal(await loginPage.getWarningMsg(), ' Warning: No match for E-Mail Address and/or Password.', 'Error: debería mostrarse mensaje de error correpondiente');

            await homePage.returnHome();
            expect(await homePage.carrusel.isDisplayedInViewport(), 'Error: no se ingresó a la pantalla de inicio').to.be.true;
        });
    });
  });