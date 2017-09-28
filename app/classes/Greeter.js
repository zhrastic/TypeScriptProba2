define(["require", "exports", "../classes/Student", "../classes/Student"], function (require, exports, Student_1, Student_2) {
    "use strict";
    class Greeter {
        constructor(element) {
            this.element = element;
            this.element.innerText += "The time is: ";
            this.span = document.createElement('span');
            this.contentParagraf = document.createElement("p");
            this.element.appendChild(this.span);
            this.element.appendChild(this.contentParagraf);
            this.span.innerText = new Date().toUTCString();
        }
        start() {
            this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
            let stud = new Student_1.Student("Zvonko", "Palonko", 9875481);
            let profa = new Student_2.Profesor("Jura", "Profesorović", 23);
            this.contentParagraf.innerText = stud.toString();
        }
        stop() {
            clearTimeout(this.timerToken);
        }
    }
    exports.Greeter = Greeter;
});
//# sourceMappingURL=Greeter.js.map