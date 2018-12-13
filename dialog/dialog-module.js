(function () {
    'use strict';

    function* generateId(prefix = 'id', initialNumber = 1, maxAmount = 100) {
        let index = initialNumber;
        while (index < maxAmount) {
            yield prefix + index++;
        }
    }

    const dialogIdGenerator = generateId('dialog-');

    function Dialog(title = 'Title', x = 0, y = 0, backgroundColor = '#ffffff') {

        Object.defineProperty(this, 'id', {
            value: dialogIdGenerator.next().value,
            writable: false,
            enumerable: true,
            configurable: false
        });

        this.title = title;
        this.x = x;
        this.y = y;
        this.backgroundColor = backgroundColor;
        this._parentElement = null;
    }

    Dialog.prototype._prepareButtons = function () {
        const okButton = document.getElementById('dialog-ok-button');
        okButton.onclick = this.hide.bind(this);
        const cancelButton = document.getElementById('dialog-cancel-button');
        cancelButton.onclick = this.hide.bind(this);
    }

    Dialog.prototype.show = function (tagId = '') {
        const elementByTag = document.getElementById(tagId);
        this._parentElement = elementByTag ? elementByTag : document.getElementsByTagName('body')[0];
        this._parentElement.innerHTML += this;
        this._prepareButtons();
    }

    Dialog.prototype.hide = function () {
        const dialog = document.getElementById(this.id);
        this._parentElement.removeChild(dialog);
    }

    Dialog.prototype.toString = function () {
        const style = `background-color: ${this.backgroundColor};
                       position: absolute;
                       top: ${this.y}px;
                       left: ${this.x}px`;
        return `<div id=${this.id} style="${style}">
                  <h1>${this.title}</h1>
                  <button id="dialog-ok-button">Ok</button>
                  <button id="dialog-cancel-button">Cancel</button>
                </div>`;
    }

    window._dialog = {
        Dialog: Dialog
    };

})();
