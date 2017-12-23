const config = require('../secrets.json');
const mapService = require('./maps');
const stravaService = require('./strava');
const twilioService = require('./twilio');
const BikeRide = require('../models/bikeRide');
const numberUtils = require('../utils/number');

/**
 * Handles communicating with various APIs for building and sending notifications
 */
module.exports = {
    /**
     * Sends notification related to strava activity finished
     *
     * @param {Number} stravaActivityId
     * @param {string} toPhoneNumber
     */
    sendStravaRideFinished: (stravaActivityId, toPhoneNumber) => {
        return new Promise((resolve, reject) => {
            var bikeRide = new BikeRide();

            stravaService.getActivity(stravaActivityId)
                .then((activity) => {
                    bikeRide.setName('Peppy'); // The man himself
                    bikeRide.setLabel(activity.name);
                    bikeRide.setMiles(
                        numberUtils.round(activity.distance / numberUtils.METERS_IN_A_MILE, 2)
                    );
                    bikeRide.setTime(
                        numberUtils.round(activity.moving_time / numberUtils.SECONDS_IN_A_MINUTE, 2)
                    );

                    // Return promise grabbing additional location context
                    return Promise.all([
                        mapService.getAddressFromCoordinates(activity.start_latlng[0], activity.start_latlng[1]),
                        mapService.getAddressFromCoordinates(activity.end_latlng[0], activity.end_latlng[1])
                    ]);
                })
                .then((addresses) => {
                    bikeRide.setFromAddress(addresses[0]);
                    bikeRide.setToAddress(addresses[1]);

                    // Return promise initiating text
                    return twilioService.send(
                        bikeRide.getSummary(),
                        toPhoneNumber
                    );
                })
                .then(() => {
                    resolve(bikeRide.getSummary());
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
