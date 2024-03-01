import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick = () =>{
    // console.log("upper was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase", "success")
  }

  const handleLoclick = () =>{
    // console.log("Lower was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", "success")
  }

  const handleClearclick = () =>{
    let newText = '';
     setText(newText);
     props.showAlert("Text cleared", "success")
  }

  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-2" >
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white'}} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick} >convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearclick} >Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2 " style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h3>your text summary</h3>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.split(" ").length-1 } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h4>perview</h4>
        <p>{text.length>0?text:"Enter something to texbox above to preview it here"}</p>
      </div>
      </>
  )
}
// style={{backgroundColor: props.mode=== 'dark'?'gary':'white'}}
// style={{Color: props.mode=== 'dark'?'white':'#042743'}}