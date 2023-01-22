export class deposition {
    private name: string
    private relation: string
    private photo: string 

    constructor(name:string, relation:string, photo:string) {
        this.name = name
        this.relation = relation
        this.photo = photo
    }

    public get Name () {
        return this.name
    }

    public get Relation () {
        return this.relation
    }

    public get Photo () {
        return this.photo
    }
}