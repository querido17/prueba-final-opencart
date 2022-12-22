import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import appleCinemaPage from '../pages/appleCinema.page';
import DATOS from '../datos/articulos';

describe('WebdriberIO', () => {
  it('Comparación de imágenes con página de WebdriverIO', async () => {
    await browser.url('https://webdriver.io');
    await $(".navbar--fixed-top").waitForDisplayed();
    expect(
        await browser.checkElement(await $(".navbar--fixed-top"), "wdio-headerContainer", {
            /* opciones de configuración para el elemento */
        }),
        "Error: la barra de navegación de WebdriverIO no coincide con la original"
    ).equal(0);
 
    await browser.url('https://webdriver.io/blog/');
    await $('.navbar--fixed-top').waitForDisplayed();
    expect(await browser.checkElement(await $('.navbar--fixed-top'), 'wdio-headerContainer', {})).to.not.equal(0);
 });
});

/* describe('Búsqueda', function () {
 it(`Debería buscar ${DATOS.articulo}`, async ()=> {
    await homePage.abrir('/');
    await homePage.buscar(DATOS.articulo);
    await expect(await homePage.obtenerTextoBusqueda()).to.equal(DATOS.articulo);
    await expect(await busquedaPage.obtenerNombreResultado()).to.equal(DATOS.articulo);
 });
}); */
 /*
 describe('Búsqueda', function () {
   DATOS.forEach(({articulo}) => {
     it(`Debería buscar ${articulo}`, async ()=> {
       await homePage.abrir('/');
       await homePage.buscar(articulo);
       await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
       await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
     });
   });
 });*/

/* it('Debería buscar iphone', async ()=> {
  await homePage.abrir('/');
  let articulo = 'iPhone';
  await homePage.buscar(articulo);
  await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
  await expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
});

it('Debería buscar iphone', async ()=> {
  await browser.url('/');
  let barraDeBusqueda = await $('input[name="search"]');
  await barraDeBusqueda.setValue('iphone');
  await expect(await barraDeBusqueda.getValue()).to.equal('iphone','Error: no se mostró el texto esperado en la barra de búsqueda');
  await barraDeBusqueda.keys('Enter');
  await expect(await $('h4').getText()).to.include.string('iPhone','Error: no se mostró el header esperado');
}); */

/* describe('OpenCart', () => {

  it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {  
      // Busco el artículo
      await homePage.abrir('/');
      let articulo = 'apple cinema';
      await homePage.buscar(articulo);
      await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
      await expect(await busquedaPage.obtenerNombreResultado()).to.equal('Apple Cinema 30"'); //Cómo hago que me de bien sin que tenga que ser idéntico?
                                                                                              //Por qué no me funciona como en el ejemplo?

      // Hago click en el artículo
      await busquedaPage.ingresarAlResultado();

      // Elijo y guardo el color
      await appleCinemaPage.seleccionarColor(2);

      await browser.pause(5000);
  });
}); */

/*
 describe('OpenCart', () => {
    it('Debería buscar iPhone', async () => {
      browser.url('/');
      let logo = $('#logo');
    });
 });
 describe('OpenCart', () => {
    it('Debería buscar iPhone', async () => {
      await browser.url('/');
      let logo = await $('#logo');
    });
 }); */
 
/* describe('OpenCart', () => {

    it('Debería buscar apple cinema, ingresar al artículo y seleccionar un color', async () => {  
        // Busco el artículo
        await browser.url('/');
        let barraDeBusqueda = await $('[name="search"]');
        await barraDeBusqueda.setValue('apple cinema');
        await assert.equal(await barraDeBusqueda.getValue(),'apple cinema','Error: no se mostró el texto esperado en la barra de búsqueda');
        await barraDeBusqueda.keys('Enter');
        await expect(await $('h4').getText()).to.include.string('Apple Cinema','Error: no se mostró el header esperado');

        // Hago click en el artículo
        let appleCinema = await $('*=Apple');
        await appleCinema.click();
        
        // Elijo el color
        let dropDownColor = await $('select');
        await dropDownColor.selectByIndex(2);

        // Guardo el color
        console.log(await dropDownColor.getValue());

        await browser.pause(5000);
    });
 }); */

/* describe('The Internet', () => {

  it('Debería subir un archivo al navegador', async () => {  
    // Ingresamos a la página
    await browser.url('http://the-internet.herokuapp.com/upload');

    // Obtenemos el input "Choose file" -> Qué pasaría si el input no estuviera visible? 
    //                                     Cómo modificaría la propiedad "hidden"?
    let subirArchivo = await $('#file-upload');

    // Agregamos el archivo que queremos subir a la carpeta tests y definimos la ruta del archivo
    const path = require('path');
    const rutaArchivo = path.join(__dirname, 'subir.png');

    // Subimos el archivo con la operación setValue()
    await subirArchivo.setValue(rutaArchivo);

    // Hacemos click en el botón de subir archivo "Upload", y esperamos el mensaje que indica que se subió con éxito
    await $('#file-submit').click();
    await browser.waitUntil(async () =>await $('h3').getText()=='File Uploaded!');

    await browser.pause(5000)
  });
}); */