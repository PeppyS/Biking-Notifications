const config = require('../secrets.json').twilio;
const service = require('twilio')(config.accountSid, config.authToken);

/**
 * Handles communication between twilio api
 */
module.exports = {
    /**
     * Send text notification via twilio
     *
     * @param {string} text
     * @param {string} toPhoneNumber
     * @returns {Promise}
     */
    send: (text, toPhoneNumber) => {
        return new Promise(function (resolve, reject) {
            service.messages.create({
                to: toPhoneNumber,
                from: config.fromPhoneNumber,
                body: text
            }, function (error, message) {
                if (error) {
                    reject(error);
                } else {
                    resolve(message);
                }
            });
        });
    }
}
