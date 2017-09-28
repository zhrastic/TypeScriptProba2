import {Student} from "../classes/Student"
import {Profesor} from "../classes/Student"


export class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    contentParagraf: HTMLElement;
    timerToken: number;

    constructor (element: HTMLElement) { 
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.contentParagraf =document.createElement("p");
        this.element.appendChild(this.span);
        this.element.appendChild(this.contentParagraf);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
        let stud = new Student("Zvonko", "Palonko", 9875481);
        let profa = new Profesor("Jura", "Profesorović", 23);
        this.contentParagraf.innerText = stud.toString();
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}
