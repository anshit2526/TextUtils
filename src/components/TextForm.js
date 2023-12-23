import React, { useState } from "react";


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();

        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);

        
    }

    const handleClearClick = (event) => {
        console.log("Clear was clicked");
        setText(event.target.value);
    }

    const handleCopyClick = (event) => {
        console.log("Copy was clicked");
        let selectedText = document.getElementById('myBox').value;
        
        navigator.clipboard.writeText(selectedText).then(() => {
            alert("Copied");
        }).catch((error) => {
            // Error handling
            console.log(error);
        });

    }

    const handlePasteClick = (event) => {
        console.log("Paste was Clicked");
        navigator.clipboard
            .readText()
            .then(
                (clipText) => (setText(clipText)),
            )
            .catch((error) => {
                // Error handling
                console.log(error);
            });

    }

   

    const [text, setText] = useState(String);
    // text = "new Text";  // Wrong way to chnage the state
    // setText("New Text");  // Correct way to change the state

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`placeholder-glow col-12 bg-${props.mode} text-${props.mode!=='light'?'light':'dark'}`} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick} >Copy</button>
                <button className="btn btn-primary mx-3" onClick={handlePasteClick} >Paste</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p> {text===""?0:text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minutes to read </p>
                <h3>Preview</h3>
                <pre><p>{text}</p></pre>
            </div>
        </>
    );
}