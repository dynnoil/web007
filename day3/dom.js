function createParagraph() {
    let div = document.getElementById('main-window');
    let p = document.createElement('p');
    p.setAttribute('align', 'center');
    p.innerText = 'This is a simple paragraph';
    div.appendChild(p);
}

function createJavaScriptCode() {
    let code = document.createElement('script');
    code.innerText = 'alert("Wow!")';
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(code);
}

function removeParagraph() {
    const mainWindow = document.getElementById('main-window');
    const paragraphs = mainWindow.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        mainWindow.removeChild(paragraphs[0]);
    }
}
