export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() === "space debris") {
            return true;
        };
    }

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean, shouldShowWarning: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        this.shouldShowWarning();
    }

}