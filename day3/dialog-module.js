(function () {
    'use strict';

    function Dialog(name, title = 'Title', x = 0, y = 0, backgroundColor = '#ffffff') {
        if (!name) throw new Error('Should specify "name" parameter');
        this.name = name;
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
        const dialog = document.getElementById(this.name);
        this._parentElement.removeChild(dialog);
    }

    Dialog.prototype.toString = function () {
        const style = `background-color: ${this.backgroundColor};
                       position: absolute;
                       top: ${this.y}px;
                       left: ${this.x}px`;
        return `<div id=${this.name} style="${style}">
                  <h1>${this.title}</h1>
                  <button id="dialog-ok-button">Ok</button>
                  <button id="dialog-cancel-button">Cancel</button>
                </div>`;
    }

    window._dialog = {
        Dialog: Dialog
    };

})();
