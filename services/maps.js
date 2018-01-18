const request = require('request');

/**
 * Handles communication with maps api
 */
module.exports = {
    /**
     * Get address string from lattitude longitude coordinates
     *
     * @param {Number} lattitude
     * @param {Number} longitude
     * @returns {Promise}
     */
    getAddressFromCoordinates: (lattitude, longitude) => {
        return new Promise(function (resolve, reject) {
            request.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lattitude + ',' + longitude + '&sensor=true',
                (error, response, body) => {
                    const responseJson = JSON.parse(body);

                    if (responseJson && responseJson.results && responseJson.results[0]
                        && responseJson.results[0].formatted_address) {
                        resolve(responseJson.results[0].formatted_address);
                    } else {
                        reject('Problem fetching address for lattitude, longitude: ' + lattitude + ', ' + longitude);
                    }
                });
        });
    }
}
