type props = {

}

export class Experince {
    private business: string
    private word: {
        job: string
        start: {
            startMonth: number
            endMonth: number
        }
        end: string
    }

    constructor(business: string) {
        this.business = business
    }
}