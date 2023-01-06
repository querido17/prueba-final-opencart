import BasePage from '../pages/base.page';

class LoginPage extends BasePage {
      //WebElements
      get emailTxtBox(){ return $('#input-email') };
      get passwordTxtBox(){ return $('#input-password') };
      get loginBtn(){ return $('input[value=Login]') };
      get loginContainer(){ return $('#account-login') };
      get accountContainer(){return $('#account-account')};
      get logOutBtn(){ return $('//div/a[contains(text(), "Logout")]')};
      get logOutTab(){ return $('//a[contains(text(), "Logout")]') };
      get warningMsg() {return $('div[class="alert alert-danger alert-dismissible"]')};

    
      //-------------------------------------------------------------------------------------------------------//

      /**
       * @param {String} email que se usará
       */
      async completeEMail(email){
         addStep(`Complete E-Mail Address with: ${email}`);
         await super.vaciarCampoYEnviarTexto(await this.emailTxtBox, email);
      }

      /**
       * @param {String} password que se usará
       */
      async completePassword(password){
         addStep(`Complete password with: ${password}`);
         await super.vaciarCampoYEnviarTexto(await this.passwordTxtBox, password);
      }

      async confirmLogin(){
         addStep('Confirm Login');
         await super.clickearElemento(this.loginBtn);
      }
   
      async logOut(){
         addStep('Logout');
         await super.clickearElemento(this.logOutBtn);
      }
   
      async getWarningMsg() {
         return await (await this.warningMsg).getText();
      }
}
