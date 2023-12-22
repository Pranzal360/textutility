import React ,{useState}from 'react'

export default function TextForm(props) {
    const handle_click = () => {
        let change_text = text.toUpperCase()
        setText(change_text)
    }

    const [text,setText] = useState('Enter text here')

    const handle_Lower_click = (event) => {
      let lower_text = text.toLowerCase()
      setText(lower_text)
    }

    const copyToClip = () => {
      navigator.clipboard.writeText(text)
      console.log('copied to clipboard')
      props.alert('Copied to Clipboard', 'success')
    }
    const clearText = () => {
      props.alert('Text field has been cleared', 'danger')
      setText('')
    }
    const handle_on_change = (event) => {

        setText(event.target.value)
    }
  return (
    <>
    <div>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleformControlTextarea1" className="form-label">Example textarea </label>
        <textarea className="form-control" id="exampleformControlTextarea1" rows="8" value = {text} onChange={handle_on_change}></textarea>
        <button className="btn btn-primary" onClick={handle_click}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handle_Lower_click}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={copyToClip}>Copy to Clipboard</button>
        <button className="btn btn-danger mx-2 my-3" onClick={clearText}>Clear</button>
        </div>
    </div>
    <div className="container">
      <h3>Summary</h3>
      <p>{text.trim().length <= 0? "0" : text.split(" ").length } Words and {text.length} Characters</p>
      <p>{text.trim().length <= 0? "0" : 0.008 * text.split(" ").length} Minutes read </p>
      <h3>Preview</h3>
      <p>{text.length > 0 ?text : 'Enter in the text box above to preview it here !'}</p>
    </div>
    </>
  )
}
