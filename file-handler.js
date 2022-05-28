'use strict'

let fileHandle;
let loadFileButton = document.getElementById("loadFileButton");
let fileContentTextArea = document.getElementById("fileContentTextArea");

loadFileButton.addEventListener('click', async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    fileContentTextArea.value = contents;
});

let generateNewFileButton = document.getElementById("generateNewFileButton");

generateNewFileButton.addEventListener('click', async () => {
    const opts = {
        suggestedName: 'CreateNewFile',
        types: [{
            accept: {'text/plain': ['.txt']}
        }]
    };    
    const newHandle = await window.showSaveFilePicker(opts);
    const writableStream = await newHandle.createWritable();
    await writableStream.write(fileContentTextArea.value);
    await writableStream.close();
})