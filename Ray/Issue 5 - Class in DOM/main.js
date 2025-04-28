// Create a Button class that represents an HTML button element. The class should accept label and color as properties and include a render() method that appends the button to the document body. Add an event listener inside the class to change the button color when clicked.


class Button {
    constructor(label, color) {
        this.label = label;
        this.color = color;
        this.button = null;
    }
    render() {

        this.button = document.createElement('button');
        this.button.textContent = this.label;
        this.button.style.color = this.color;

        this.button.addEventListener('click', () => {
            if (this.button.style.backgroundColor === 'yellow') {
                this.button.style.backgroundColor = 'red'
            } else {
                this.button.style.backgroundColor = 'yellow'
            }
        });
document.body.appendChild(this.button);
    }
}
const newButton = new Button('Click', 'black')
newButton.render();
