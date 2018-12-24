
export class Recipe {

    private _name: string;
    private _description: string;
    private _image: string;



    constructor(name?: string, description?: string, image?: string) {
        this._name = name;
        this._description = description;
        this._image = image;
    }


    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter image
     * @return {string}
     */
    public get image(): string {
        return this._image;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter image
     * @param {string} value
     */
    public set image(value: string) {
        this._image = value;
    }

}


