import HTMLBuilder from "../Builders/HTMLBuilder.js";
export default class Bar {
    bar;
    barFill;
    constructor() {
        this.barFill = new HTMLBuilder('div').addClass('bar-fill').addId('bar-fill').build();
        this.bar = new HTMLBuilder('div').addChildren(this.barFill).addClass('bar-background').build();
    }
    setWidth(value) {
        this.barFill.style.width = `${value}%`;
        return this;
    }
    setBarColor(color) {
        this.barFill.style.backgroundColor = color;
        return this;
    }
    addClass(classname) {
        this.barFill.classList.add(classname);
        this.bar.classList.add(classname);
        return this;
    }
    buildBar() {
        return this.bar;
    }
}
