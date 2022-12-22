import BasePage from '../pages/base.page';

// Esta página es para seleccionar el color

class AppleCinemaPage extends BasePage {
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
export default new AppleCinemaPage();
