import {ICovjek} from "../interfaces/ICovjek"; 

export class Covjek implements ICovjek {
    Ime: string;
    Prezime: string;
    OIB: number;
    constructor(ime: string, prezime: string, oib?:number) {
        this.Ime = ime;
        this.Prezime =prezime;
        this.OIB = oib ? oib : -1;
    };
    getFullName(): string {
        return this.Ime + " " + this.Prezime + " [" + this.OIB + "]";
    };
    toString(): string {
        return this.getFullName();
    };
}