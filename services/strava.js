const config = require('../secrets.json').strava;
const strava = require('strava-v3');

/**
 * Handles communication with strava API
 */
module.exports = {
    /**
     * Strava's object type activity constant
     *
     * @type {string}
     */
    OBJECT_TYPE_ACTIVITY: 'activity',

    /**
     * Strava's aspect type create constant
     *
     * @type {string}
     */
    ASPECT_TYPE_CREATE: 'create',

    /**
     * Get strava activity given id
     *
     * @param {Number} id
     * @returns {Promise}
     */
    getActivity: (id) => {
        return new Promise((resolve, reject) => {
            strava.activities.get({ id: id }, (error, payload, limit) => {
                if (!error) {
                    resolve(payload);
                } else {
                    reject(error);
                }
            });
        });
    }
}
