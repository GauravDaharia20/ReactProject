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
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleClear = () => {
        let newstr = ""
        setText(newstr)
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange = (event) => {
        //console.log("On Change")
        setText(event.target.value) // allow us to update the text area value
    }
    return (

        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <div className="container">

                <button className="btn btn-primary my-3" onClick={handleUpClick} >ConvertUpper</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>ClearText</button>

            </div>


            <div className="container">


                <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <p>
                        number of word is {text.length > 0 ? text.split(' ').length : 0} and number of character is {text.length}
                    </p>
                </div>


                <h6 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h6>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    {text.length > 0 ? text : "Enter Text Above to Preview"}
                </p>
            </div>



        </>



    );
}
