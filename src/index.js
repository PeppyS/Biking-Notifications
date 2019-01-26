import config from './config'

import strava from './lib/strava'
import notification from './service/notification'

/**
 * Lambda function entry point
 *
 * @param {{}} event 
 * @param {{}} context 
 * @param {Function} callback 
 */
exports.handler = async (event, context, callback) => {
    var params = (JSON.parse(event.body) || {}),
        response = {
            queryParams: params
        };

    // Validate given params
    if (parseInt(params.owner_id, 10) === config.STRAVA_PEPPY_USER_ID
        && params.object_type === strava.OBJECT_TYPE_ACTIVITY
        && params.aspect_type === strava.ASPECT_TYPE_CREATE
        && params.object_id) {
        handleStravaActivityFinished(params.object_id)
    } else {
        response.error = 'Invalid params given'
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
    console.log(response)
};

/**
 * Handles the event where a strava activity is finished
 *
 * @param {number} stravaActivityId 
 */
export const handleStravaActivityFinished = async (stravaActivityId) => {
    const activity = await strava.getActivity(stravaActivityId)

    // Tell tori all about my bike ride!
    await notification.sendStravaRideFinished(activity, config.TORI_PHONE_NUMBER)
}
