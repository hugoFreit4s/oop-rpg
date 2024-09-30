export default class StringBuilder {
    message;
    constructor() {
        this.message = '';
    }
    setString(text) {
        this.message = text;
        return this;
    }
    concatString(text) {
        this.message += text;
        return this;
    }
    concatLn(text) {
        this.message += `\n${text}`;
        return this;
    }
    build() {
        return this.message;
    }
}
