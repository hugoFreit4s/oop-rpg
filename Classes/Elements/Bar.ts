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

    setBarColor(color: string): Bar {
        this.barFill.style.backgroundColor = color;
        return this;
    }

    addClass(classname: string): Bar {
        this.barFill.classList.add(classname);
        this.bar.classList.add(classname);
        return this
    }

    setBorderStyle(borderStyle: string): Bar {
        this.barFill.style.border = borderStyle
        return this;
    }

    buildBar(): HTMLElement {
        return this.bar;
    }

}