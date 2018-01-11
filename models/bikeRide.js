/**
 * Simple bike ride class handles collecting and manipulating bike ride related data
 */
var BikeRide = function () {
    /**
     * Bike rider's name (probably Peppy)
     *
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
        return 'Biker Pep\n\nYour handsome husband ' + this._name + ' just finshed up his bike ride!\n\n'
        + this._label + '\n\nMiles - ' + this._miles + '\nTime - '+ this._time +
            (this._fromAddress && this._toAddress ? '\nStart - ' + this._fromAddress + '\nFinish - ' + this._toAddress : '');
    }),

    /**
     * Get biker name
     *
     * @returns {string}
     */
    getName: (() => {
        return this._name;
    }),

    /**
     * Get bike ride label
     *
     * @returns {string}
     */
    getLabel: (() => {
        return this._label;
    }),

    /**
     * Get number of miles ridden
     *
     * @returns {Number}
     */
    getMiles: (() => {
        return this._miles;
    }),

    /**
     * Get bike ride time in minutes
     *
     * @returns {Number}
     */
    getTime: (() => {
        return this._time;
    }),

    /**
     * Get address from start of bike ride
     *
     * @returns {string}
     */
    getFromAddress: (() => {
        return this._fromAddress;
    }),

    /**
     * Get address from end of bike ride
     *
     * @returns {string}
     */
    getToAddress: (() => {
        return this._toAddress;
    }),

    /**
     * Set biker name
     *
     * @param {string} name
     */
    setName: (name => {
        this._name = name;
    }),

    /**
     * Set bike ride lable
     *
     * @param {string} label
     */
    setLabel: (label => {
        this._label = label;
    }),

    /**
     * Set number of miles ridden
     *
     * @param {Number} miles
     */
    setMiles: (miles => {
        this._miles = miles;
    }),

    /**
     * Set number of minutes elapsed during bike ride
     *
     * @param {Number} time
     */
    setTime: (time => {
        this._time = time;
    }),

    /**
     * Set address of start of bike ride
     *
     * @param {string} fromAddress
     */
    setFromAddress: (fromAddress => {
        this._fromAddress = fromAddress;
    }),

    /**
     * Set address of end of bike ride
     *
     * @param {string} toAddress
     */
    setToAddress: (toAddress => {
        this._toAddress = toAddress;
    })
});

module.exports = BikeRide;
