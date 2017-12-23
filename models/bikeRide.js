/**
 * Simple bike ride class handles collecting and manipulating bike ride related data
 */
var BikeRide = function () {
    /**
     * Bike rider's name (probably Peppy)
     * @type {string}
     * @private
     */
    this._name = '';

    /**
     * Bike ride's given label
     * 
     * @type {string}
     * @private
     */
    this._label = '';

    /**
     * Number of miles ridden
     *
     * @type {Number}
     * @private
     */
    this._miles = -1;

    /**
     * Total minutes elapsed during bike ride
     * 
     * @type {Number}
     * @private
     */
    this._time = -1;

    /**
     * Address of where bike ride started
     *
     * @type {string}
     * @private
     */
    this._fromAddress = '';

    /**
     * Address of where bike ride ended
     *
     * @type {string}
     * @private
     */
    this._toAddress = -1;
}

Object.assign(BikeRide.prototype, {
    /**
     * Builds summary from ride properties
     * 
     * @returns {string}
     */
    getSummary: (() => {
        return this._name + ' just finshed ride: ' + this._label + ' - Biking ' + this._miles + ' miles in '
            + this._time + ' minutes, from ' + this._fromAddress + ' to ' + this._toAddress;
    }),

    /**
     * @returns {string}
     */
    getName: (() => {
        return this._name;
    }),

    /**
     * @returns {string}
     */
    getLabel: (() => {
        return this._label;
    }),

    /**
     * @returns {Number}
     */
    getMiles: (() => {
        return this._miles;
    }),

    /**
     * @returns {Number}
     */
    getTime: (() => {
        return this._time;
    }),

    /**
     * @returns {string}
     */
    getFromAddress: (() => {
        return this._fromAddress;
    }),

    /**
     * @returns {string}
     */
    getToAddress: (() => {
        return this._toAddress;
    }),

    /**
     * @param {string} name
     */
    setName: (name => {
        this._name = name;
    }),

    /**
     * @param {string} label
     */
    setLabel: (label => {
        this._label = label;
    }),

    /**
     * @param {Number} miles
     */
    setMiles: (miles => {
        this._miles = miles;
    }),

    /**
     * @param {Number} time
     */
    setTime: (time => {
        this._time = time;
    }),

    /**
     * @param {string} fromAddress
     */
    setFromAddress: (fromAddress => {
        this._fromAddress = fromAddress;
    }),

    /**
     * @param {string} toAddress
     */
    setToAddress: (toAddress => {
        this._toAddress = toAddress;
    })
});

module.exports = BikeRide;
