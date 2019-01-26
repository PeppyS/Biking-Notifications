/**
 * Encapsulates bike ride data
 */
export default class BikeRide {
    constructor({ name, label, miles, time }) {
        this.name = name
        this.label = label
        this.miles = miles
        this.time = time
    }

    /**
     * Builds a readable summary about the bike ride
     */
    getSummary() {
        return (
            `\nBiker Pep\n\n
Your handsome husband ${this.name} just finished his bike ride!\n\n
${this.label}\n\n
Miles - ${this.miles}\n
Time - ${this.time}
` + (this.fromAddress && this.toAddress ? `\n
Start - ${this.fromAddress}\n
Finish - ${this.toAddress}` : '')
        )
    }
}

