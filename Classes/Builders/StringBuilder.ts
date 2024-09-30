export default class StringBuilder {
    private message: string;

    constructor() {
        this.message = '';
    }

    setString(text: string): StringBuilder {
        this.message = text;
        return this;
    }

    concatString(text: string): StringBuilder {
        this.message += text;
        return this;
    }

    concatLn(text: string): StringBuilder {
        this.message += `\n${text}`;
        return this;
    }

    build(): string {
        return this.message;
    }
}