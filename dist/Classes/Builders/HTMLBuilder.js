export default class HTMLBuilder {
    element;
    constructor(elementType) {
        this.element = document.createElement(elementType);
    }
    addChildren(...elementArr) {
        elementArr.forEach(element => { this.element.appendChild(element); });
        return this;
    }
    addStyles(css) {
        this.element.style.cssText = css;
        return this;
    }
    addText(text) {
        this.element.textContent = text;
        return this;
    }
    addClass(...classes) {
        this.element.classList.add(...classes);
        return this;
    }
    addId(idName) {
        this.element.id = idName;
        return this;
    }
    build() {
        return this.element;
    }
}
