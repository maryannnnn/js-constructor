import {col, css, row} from "../utils";

class Blocks {
    constructor(type, value, options) {
        this.type = type
        this.value = value
        this.options = options

    }

    toHTML() {
        throw new Error('Method dont relized')
    }
}

export class TitleBlock extends Blocks {
    constructor(value, options) {
        super('title', value, options)
    }

    toHTML() {
        const {tag, styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Blocks {
    constructor(value, options) {
        super('image', value, options)
    }

    toHTML() {
        return row(col(`<img src = "${this.value}" />`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Blocks {
    constructor(value, options) {
        super('columns', value, options)
    }

    toHTML() {
        const html = this.value.map(col).join('')
        return  row(html, css(this.options.styles))
    }
}
export class TextBlock extends Blocks {
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

