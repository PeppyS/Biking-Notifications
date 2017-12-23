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
        bodyMessage;

    // Validate given params
    if (parseInt(params.owner_id, 10) === config.strava.peppyUserId
        && params.object_type === strava.OBJECT_TYPE_ACTIVITY
        && params.aspect_type === strava.ASPECT_TYPE_CREATE
        && params.object_id) {
        // Tell tori all about my bike ride!
        notificationService.sendStravaRideFinished(params.object_id, config.toriPhoneNumber)
            .then((message) => {
                console.log('Notification sent: ' + message);
            })
            .catch((error) => {
                console.log('Error: ' + error);
            });

        bodyMessage = JSON.stringify({
            response: {
                success: true,
                message: 'Notification sent',
                params: params
            }
        });
    } else {
        bodyMessage = JSON.stringify({
            response: {
                success: false,
                message: 'Invalid params given',
                params: params
            }
        });
    }

    callback(null, {
        statusCode: 200,
        body: bodyMessage
    });
};
