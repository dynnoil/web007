(function () {
    'use strict';

    if ($ == undefined || jQuery == undefined) throw new Error('jQuery library is not found');

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
        this.onOkButtonClick = undefined;
        this.onCancelButtonClick = undefined;
    }

    Dialog.prototype._prepareHandlers = function () {
        const okButton = $(`#${this._id} .${OK_BUTTON_CLASS}`);
        okButton.on('click', this.onOkButtonClick && this.onOkButtonClick.bind(this));
        const cancelButton = $(`#${this._id} .${CANCEL_BUTTON_CLASS}`);
        cancelButton.on('click', this.onCancelButtonClick && this.onCancelButtonClick.bind(this));
    }

    Dialog.prototype.show = function (tagId = '') {
        const elementByTag = $(`#${tagId}`);
        const parentElement = elementByTag ? elementByTag : $('body');
        parentElement.append('' + this);
        this._prepareHandlers();
    }

    Dialog.prototype.hide = function () {
        $(`#${this._id}`).css('display', 'none');
    }

    Dialog.prototype.remove = function () {
        $(`#${this._id}`).remove();
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
