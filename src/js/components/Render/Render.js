export class Render {
    constructor(element, template, options) {
        this.$el = document.querySelector(element)
        this.template = template
        this.options = options

        this.render()
    }
    
    render () {
        this.$el.innerHTML = this.template(this.options)
    }

    consoleLog() {
        console.log(this.options);
    }
}