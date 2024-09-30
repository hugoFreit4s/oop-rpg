import HTMLBuilder from "../Builders/HTMLBuilder.js";

export default class Bar {
    private bar: HTMLElement;
    private barFill: HTMLElement;
    constructor() {
        this.barFill = new HTMLBuilder('div').addClass('bar-fill').addId('bar-fill').build();
        this.bar = new HTMLBuilder('div').addChildren(this.barFill).addClass('bar-background').build();
    }

    setWidth(value: number): Bar {
        this.barFill.style.width = `${value}%`
        return this;
    }

    getBar(): HTMLElement {
        return this.bar;
    }
}