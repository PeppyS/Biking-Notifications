import axios from 'axios'
import config from '../config';

/**
 * Handles communication with maps api
 */
export default {
    /**
     * Get address string from lattitude longitude coordinates
     *
     * @param {Number} lattitude
     * @param {Number} longitude
     * @returns {Promise}
    */
    getAddressFromCoordinates: async (lattitude, longitude) => {
        const { data } = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lattitude},${longitude}.json`, {
            params: {
                access_token: config.MAPBOX_ACCESS_TOKEN,
            }
        })

        if (!data.features || !data.features[0] || !data.features[0].place_name) {
            throw new Error(`Problem fetching address for lattitude, longitude: ${lattitude}, ${longitude}`)
        }

        return data.features[0].place_name
    }
}
