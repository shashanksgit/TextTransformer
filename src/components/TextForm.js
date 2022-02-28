import React, { useState } from 'react'
import Proptypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleTitleClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText)
  }

  const handleProperClick = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
  }

  const handleTextToSpeech = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;     //  text what you written
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const Reverse = () => {
    let spl = text.split(" ")
    let rev = spl.reverse();
    let join = rev.join(" ");
    setText(join)
  }

  const handleClrClick = () => {
    setText("")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#16161d', color: props.mode === 'light' ? '#16161d' : 'white' }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}>UPPERCASE 🔠</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>lowercase 🔡</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleTitleClick}>Title case</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleProperClick}>Proper Case</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleTextToSpeech}>Text to speech 🔊</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleExtraSpace}>Handle extra space</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={Reverse}>Reverse ◀</button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleClrClick}>Clear 🧹</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "> Enter something in the textbox to preview"}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: Proptypes.string.isRequired
}
