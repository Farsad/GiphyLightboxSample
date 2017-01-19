export function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}

export function clearChildren(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
}