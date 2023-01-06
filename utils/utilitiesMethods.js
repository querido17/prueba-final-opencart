class UtilitiesMethods {

    /**
     * Generar string para el E-Mail
     * @param {Number} lenght of the E-Mail before the @
     * @returns string of the E-Mail before the @
     */
    async makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     * Remove last 3 characters of a string
     * @param {String} message
     * @returns the message without the last 3 characters
     */
    async cutString(message){
        let str = message.slice(0, -2);
        return str;
    }
}
export default new UtilitiesMethods();