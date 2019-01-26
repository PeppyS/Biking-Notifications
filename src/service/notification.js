import maps from '../lib/maps'
import twilio from '../lib/twilio'

import numberUtils from '../utils/number'

import BikeRide from '../model/bikeRide'

/**
 * Handles communicating with various APIs for building and sending notifications
 */
export default {
    /**
     * Sends notification related to strava activity finished
     *
     * @param {{}}} stravaActivity
     * @param {string} toPhoneNumber
     */
    sendStravaRideFinished: async (stravaActivity, toPhoneNumber) => {
        const bikeRide = new BikeRide({
            name: 'Peppy',
            label: stravaActivity.name,
            miles: numberUtils.round(stravaActivity.distance / numberUtils.METERS_IN_A_MILE, 2),
            time: numberUtils.round(stravaActivity.moving_time / numberUtils.SECONDS_IN_A_MINUTE, 2).toString().replace('.', ':'),
        })

        // Attempt to add address to bike ride
        try {
            const [startAddress, endAddress] = await Promise.all([
                maps.getAddressFromCoordinates(stravaActivity.start_latlng[0], stravaActivity.start_latlng[1]),
                maps.getAddressFromCoordinates(stravaActivity.end_latlng[0], stravaActivity.end_latlng[1]),
            ])

            bikeRide.startAddress = startAddress
            bikeRide.endAddress = endAddress
        } catch (err) {
            console.log(`Issue getting address info: ${err.message}`)
        }

        await twilio.send(bikeRide.getSummary(), toPhoneNumber)
    }
}
