import React, { useState } from "react";


export default function TextForm(props) {

    const [text, setText] = useState(String);

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        let selectedText = document.getElementById('myBox').value;  // remove to not to selecet text
        navigator.clipboard.writeText(selectedText);
        document.getSelection().removeAllRanges();  // remove it also you don't need to deselect.
        props.showAlert('Copied!', 'success');
    }

    const handlePasteClick = () => {
        navigator.clipboard
            .readText()
            .then(
                (clipText) => setText(clipText)
            );
    }


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`placeholder-glow col-12 bg-${props.mode} text-${props.mode !== 'light' ? 'light' : 'dark'}`} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick} >Copy</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handlePasteClick} >Paste</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read </p>
                <h3>Preview</h3>
                <pre><p>{text}</p></pre>
            </div>
        </>
    );
}