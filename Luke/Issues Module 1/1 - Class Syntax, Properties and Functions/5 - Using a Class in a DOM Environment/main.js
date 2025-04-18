class Button {
    constructor(label, color) {
        this.label = label;
        this.color = color;
    }


    render() {
        const button = document.createElement("button");
        button.innerHTML = this.label;
        button.style.color = this.color;
        document.body.appendChild(button);

        button.addEventListener("click", function () {
            button.style.backgroundColor= "purple";
        });

        }
    }

let myButton = new Button("Click Me", "orange");
myButton.render();
