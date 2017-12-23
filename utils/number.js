/**
 * Number utility methods
 */
module.exports = {
    /**
     * Number of meters in a mile
     *
     * @type {Number}
     */
    METERS_IN_A_MILE: 1609.34,

    /**
     * Number of seconds in a minute
     *
     * @type {Number}
     */
    SECONDS_IN_A_MINUTE: 60,

    /**
     * Rounds number to the given number of decimal places
     *
     * @param {Number} number
     * @param {Number} numDecimalPlaces
     * @returns {Number}
     */
    round: (number, numDecimalPlaces) => {
        return parseFloat(number)
            .toFixed(numDecimalPlaces);
    }
}
