define(["require", "exports"], function (require, exports) {
    "use strict";
    class Covjek {
        constructor(ime, prezime, oib) {
            this.Ime = ime;
            this.Prezime = prezime;
            this.OIB = oib ? oib : -1;
        }
        ;
        getFullName() {
            return this.Ime + " " + this.Prezime + " [" + this.OIB + "]";
        }
        ;
        toString() {
            return this.getFullName();
        }
        ;
    }
    exports.Covjek = Covjek;
});
//# sourceMappingURL=Covjek.js.map