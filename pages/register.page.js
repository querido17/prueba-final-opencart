import BasePage from '../pages/base.page';

class RegisterPage extends BasePage {
     
    //WebElements
    get firstNameTxtBox(){ return $('#input-firstname') };
    get lastNameTxtBox(){ return $('#input-lastname') };
    get emailTxtBox(){ return $('#input-email') };
    get telephoneTxtBox(){ return $('#input-telephone') };
    get passwordTxtBox(){ return $('#input-password') };
    get passwordConfTxtBox(){ return $('#input-confirm') };
    get privacyPolicyChk(){ return $('input[type="checkbox"]') };
    get continueBtn(){ return $('input[type="submit"]') };
    get registerForm(){ return $('#account-register') };
    get successTab(){ return $('//a[contains(text(), "Success")]') };
    get logOutBtn(){ return $('//div/a[contains(text(), "Logout")]')};
    get logOutTab(){ return $('//a[contains(text(), "Logout")]') };
    get warningMsg() {return $('.alert-danger')};

    //-------------------------------------------------------------------------------------------------------//

    /**
     * @param {String} firstName
     */
    async completeFirstName(firstName){
         addStep(`Complete First Name with: ${firstName}`);
         await super.vaciarCampoYEnviarTexto(await this.firstNameTxtBox, firstName);
    }

    /**
     * @param {String} lastName
     */
    async completeLastName(lastName){
         addStep(`Complete Last Name with: ${lastName}`);
         await super.vaciarCampoYEnviarTexto(await this.lastNameTxtBox, lastName);
    }

    /**
     * @param {String} email
     */
     async completeEmail(email){
          addStep(`Complete E-Mail with: ${email}`);
          await super.vaciarCampoYEnviarTexto(await this.emailTxtBox, email);
     }

    /**
     * @param {String} telephone
     */
     async completeTelephone(telephone){
          addStep(`Complete Telephone with: ${telephone}`);
          await super.vaciarCampoYEnviarTexto(await this.telephoneTxtBox, telephone);
     }

    /**
     * @param {String} password
     */
     async completePassword(password){
          addStep(`Complete Passsword with: ${password}`);
          await super.vaciarCampoYEnviarTexto(await this.passwordTxtBox, password);
     }

     async confirmPassword(password){
          addStep('Confirm Password');
          await super.vaciarCampoYEnviarTexto(await this.passwordConfTxtBox, password);
     }

     async acceptPrivacyPolicy(){
          addStep('Agree to the Privacy Policy');
          await super.clickearElemento(this.privacyPolicyChk);
     }

     async confirmRegistry(){
          addStep('Confirm Registry');
          await super.clickearElemento(this.continueBtn);
     }

     async logOut(){
          addStep('Logout');
          await super.clickearElemento(this.logOutBtn);
     }

     async getWarningMsg() {
          return await (await this.warningMsg).getText();
     } 
 
 }
 export default new RegisterPage();
 