export default class HTMLBuilder {
    element;
    constructor(rootElement) {
        this.element = document.createElement(rootElement);
    }
    addChilds(...elementArray) {
        elementArray.forEach(element => {
            this.element.appendChild(element);
        });
        return this;
    }
    addClass(...classNameArr) {
        this.element.classList.add(...classNameArr);
        return this;
    }
    addId(idName) {
        this.element.id = idName;
        return this;
    }
    addStyle(styles) {
        this.element.style.cssText = styles;
        return this;
    }
    build() {
        return this.element;
    }
}
// export class Bar {
//     private background: HTMLDivElement;
//     private fill: HTMLDivElement;
//     constructor() {
//         this.background = new HTMLBuilder('div').
//         //Passar params individuais, ex: cor da barra.
//     }
// }
