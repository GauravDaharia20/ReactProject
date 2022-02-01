import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("")          
    // text -> state Variable and setText-> function for setting the value for text
    // useState -> hook hai isse hm value state change kr skte hai    
    // onChange -> taki hmlog update kr ske
                             
    const handleUpClick = () => {
        //alert("Upper clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleClear = () =>{
        let newstr = ""
        setText(newstr)
    }

    const handleOnChange = (event) => {
        //console.log("On Change")
        setText(event.target.value) // allow us to update the text area value
    }
    return (

        <>

            <div className="container">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary my-3" onClick={handleUpClick}>ConvertUpper</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>ClearText</button>


            <div className="container my-3">
                <p>
                    number of word is {text.split(' ').length} and number of character is {text.length}
                </p>
            </div>


            <h6>Preview</h6>
            <p>
                {text}
            </p>


        </>



    );
}
