import BasePage from '../pages/base.page';

// Seleccionar first name, last name, email, telephone, password, password confirm
// seleccionar privacy police
// seleccionar continuar

class RegisterPage extends BasePage {
    //WebElements
    get dropDownColor(){ return $('select') }
 
    async seleccionarColor(indice){
         addStep('Seleccionar color')
         //Elijo el color
         await this.dropDownColor.selectByIndex(indice);
 
         //Guardo el color
         console.log(await this.dropDownColor.getValue());
    }
 
 }
 export default new RegisterPage();
 