export default class StringBuilder {
    string;
    constructor() {
        this.string = '';
    }
    setString(string) {
        this.string = string;
        return this;
    }
    concat(string) {
        this.string += string;
        return this;
    }
    concatLn(string) {
        this.string += `\n${string}`;
        return this;
    }
    build() {
        return this.string;
    }
}
