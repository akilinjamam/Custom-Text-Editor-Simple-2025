function format(command) {
    document.execCommand(command, false, null);
    updatePreview();
}

function setColor(input) {
    document.execCommand('foreColor', false, input.value);
    updatePreview();
}

function setFontSize(select) {
    document.execCommand('fontSize', false, 7); // placeholder size
    const fonts = document.getElementsByTagName('font');
    for (let i = 0; i < fonts.length; i++) {
        if (fonts[i].size === '7') {
            fonts[i].removeAttribute('size');
            fonts[i].style.fontSize = select.value;
        }
    }
    updatePreview();
}

function updatePreview() {
    const content = document.getElementById('editor').innerHTML;
    const escaped = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    // document.getElementById('previewContent').innerHTML = `<pre>${escaped}</pre>`;
    // const result = escaped
    // console.log(result);
}
console.log(updatePreview())

function insertImage(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '600px';
        img.style.height = 'auto';
        document.getElementById('editor').appendChild(img);
        updatePreview();
    };
    reader.readAsDataURL(file);

    // Reset input to allow same file re-selection
    input.value = '';
}

function setAlignment(align) {
    document.getElementById('editor').style.textAlign = align
}