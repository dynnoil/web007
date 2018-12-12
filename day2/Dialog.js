function Dialog(title = 'Dialog', name = 'dialog', x = 0, y = 0, backgroundColor = '#ffffff') {
    this.title = title;
    this.name = name;
    this.x = x;
    this.y = y;
    this.backgroundColor = backgroundColor;
}

Dialog.prototype.toString = function () {
    const style = `background-color: ${this.backgroundColor};
                   position: absolute;
                   top: ${this.y}px;
                   left: ${this.x}px`;
    return `<div id=${this.name} style="${style}">
              <h1>${this.title}</h1>
            </div>`;
}

const dialog = new Dialog('Dialog1', 'dialog1', 50, 50, '#ffffff');
document.writeln(dialog);
const dialog2 = new Dialog();
document.writeln(dialog2);
