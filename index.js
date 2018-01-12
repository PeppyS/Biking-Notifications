const config = require('./secrets.json');
const strava = require('./services/strava');
const notificationService = require('./services/notification');

/**
 * Lambda function entry point
 *
 * @param {{}} event 
 * @param {{}} context 
 * @param {Function} callback 
 */
exports.handler = (event, context, callback) => {
    var params = (JSON.parse(event.body) || {}),
        response = {
            queryParams: params
        };

    // Validate given params
    if (parseInt(params.owner_id, 10) === config.strava.peppyUserId
        && params.object_type === strava.OBJECT_TYPE_ACTIVITY
        && params.aspect_type === strava.ASPECT_TYPE_CREATE
        && params.object_id) {
        // Tell tori all about my bike ride!
        notificationService.sendStravaRideFinished(params.object_id, config.twilio.toriPhoneNumber)
            .then((message) => {
                console.log('Notification sent: ' + message);
            }, (error) => {
                console.log('Error: ' + error);
            });
    } else {
        response.error = 'Invalid params given';
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
    console.log(response);
};
