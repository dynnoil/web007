(function () {
    'use strict';

    function* generateId(prefix = 'id', initialNumber = 1, maxAmount = 100) {
        let index = initialNumber;
        while (index < maxAmount) {
            yield prefix + index++;
        }
    }

    const OK_BUTTON_CLASS = 'dialog-ok-button';
    const CANCEL_BUTTON_CLASS = 'dialog-cancel-button';

    const dialogIdGenerator = generateId('dialog-');

    function Dialog(title = 'Title', x = 0, y = 0, backgroundColor = '#ffffff') {

        Object.defineProperty(this, '_id', {
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
        this.onOkButtonClick = undefined;
        this.onCancelButtonClick = undefined;
    }

    Dialog.prototype._prepareHandlers = function () {
        const dialog = document.getElementById(this._id);
        const okButton = dialog.getElementsByClassName(OK_BUTTON_CLASS)[0];
        const okButtonHandler = this.onOkButtonClick ? this.onOkButtonClick.bind(this) : this.hide.bind(this);
        okButton.addEventListener('click', okButtonHandler, false);
        const cancelButton = dialog.getElementsByClassName(CANCEL_BUTTON_CLASS)[0];
        const cancelButtonHandler = this.onCancelButtonClick ? this.onCancelButtonClick.bind(this) : this.hide.bind(this);
        cancelButton.addEventListener('click', cancelButtonHandler, false);
    }

    Dialog.prototype.show = function (tagId = '') {
        const elementByTag = document.getElementById(tagId);
        this._parentElement = elementByTag ? elementByTag : document.getElementsByTagName('body')[0];
        this._parentElement.innerHTML += this;
        this._prepareHandlers();
    }

    Dialog.prototype.hide = function () {
        const dialog = document.getElementById(this._id);
        if (this._parentElement != null) {
            this._parentElement.removeChild(dialog);
        }
    }

    Dialog.prototype.toString = function () {
        const style = `background-color: ${this.backgroundColor};
                       position: absolute;
                       top: ${this.y}px;
                       left: ${this.x}px`;
        return `<div id=${this._id} style="${style}">
                  <h1>${this.title}</h1>
                  <button class="${OK_BUTTON_CLASS}">Ok</button>
                  <button class="${CANCEL_BUTTON_CLASS}">Cancel</button>
                </div>`;
    }

    window._dialog = {
        Dialog: Dialog
    };

})();
