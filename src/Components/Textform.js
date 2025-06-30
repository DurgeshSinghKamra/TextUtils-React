import React, {useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState("Enter text here!");

    function handleUpClick() {
        let newText= text.toUpperCase();
        setText(newText);
        // console.log("Uppercase was clicked" + text);
        props.showAlert('Text has been Uppercased','success')

    }

    function handleLoClick() {
        let newText= text.toLowerCase();
        setText(newText);
        // console.log("lowercase was clicked" + text);
        props.showAlert('Text has been Lowercased','success')
    }

    function onchangetext(event) {
        setText(event.target.value);
        // console.log("onchange was clicked" + text);
    }

    function handleClearText() {
        setText('');
        props.showAlert('Text has been Cleared','success')

    }

  return (
    
    <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.text}</label>

        <textarea className="form-control" value={text} onChange={onchangetext} id="exampleFormControlTextarea1" rows="10"></textarea>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>


        <h2>Your text Summary:</h2>
        <p> Total words: {text.split(" ").length} </p>
        <p>Total characters: {text.length} </p>
    </div>
  )
}
