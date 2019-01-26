import config from '../config'

import TwilioClient from 'twilio'

const twilio = TwilioClient(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

/**
 * Handles communication between twilio api
 */
export default {
    /**
     * Send text notification via twilio
     *
     * @param {string} text
     * @param {string} toPhoneNumber
     * @returns {Promise}
     */
    send: async (text, toPhoneNumber) => {
        return twilio.messages.create({
            to: toPhoneNumber,
            from: config.TWILIO_PHONE_NUMBER,
            body: text
        })
    }
}
