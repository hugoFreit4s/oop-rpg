export default class HTMLBuilder {
    private element: HTMLElement;
    constructor(elementType: keyof HTMLElementTagNameMap) {
        this.element = document.createElement(elementType);
    }

    addChildren(...elementArr: HTMLElement[]): HTMLBuilder {
        elementArr.forEach(element => { this.element.appendChild(element) });
        return this;
    }

    addStyles(css: string): HTMLBuilder {
        this.element.style.cssText = css;
        return this
    }

    addText(text: string): HTMLBuilder {
        this.element.textContent = text;
        return this;
    }

    addClass(...classes: string[]) {
        this.element.classList.add(...classes);
        return this;
    }

    addId(idName: string) {
        this.element.id = idName;
        return this;
    }

    build(): HTMLElement {
        return this.element;
    }
}