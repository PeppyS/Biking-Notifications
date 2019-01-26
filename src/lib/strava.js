import axios from 'axios'

import config from '../config'

/**
 * Handles communication with strava API
 */
export default {
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
    getActivity: async (id) => {
        const { data } = await axios.get(`https://www.strava.com/api/v3/activities/${id}`, {
            headers: { Authorization: `Bearer ${await fetchAccessToken()}` },
        })

        return data
    },
}

/**
 * Fetches a new Strava OAuth2 access token from a refresh token
 */
const fetchAccessToken = async () => {
    const { data } = await axios.post('https://www.strava.com/oauth/token', {
        client_id: config.STRAVA_CLIENT_ID,
        client_secret: config.STRAVA_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: config.STRAVA_REFRESH_TOKEN,
    })

    return data.access_token
}