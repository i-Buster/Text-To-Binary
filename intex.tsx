'use client'

import { useState } from "react";

const TextToBinary = () => {
    const [textEntered, setTextEntered] = useState('')
    const [convertedBinary, setConvertedBinary] = useState('')

    const handleBinaryConversion = (string) => {
        let binaryOutput = ''
        for (var i = 0; i < string.length; i++) {
            // charCodeAt(0) will return returns an integer representing the UTF-16 code unit at index 0

            // toString(2) will convert the number into binary (radix 2)
            binaryOutput += string[i].charCodeAt(0).toString(2) + " ";
        }
        setConvertedBinary(binaryOutput)
    }

    const handleTyping = (event) => {
        setTextEntered(event.target.value)
        handleBinaryConversion(event.target.value)
    };

    return (
        <div className="flex flex-col justify-around items-center h-full">
            <h1 className="text-3xl font-bold">Text to Binary</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="textInput">Enter the Text to Binary decode:
</label>
                <textarea id="textInput" name="textInput" value={textEntered} onChange={handleTyping} rows={4} cols={50} autoFocus={true} placeholder="Enter binary" className="p-2 rounded-lg">
                </textarea>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="convertedBinary">The decoded text:</label>
                <textarea id="convertedBinary" name="convertedBinary" value={convertedBinary} readOnly rows={4} cols={50} className="p-2 rounded-lg" placeholder="Binary data from text">
                </textarea>
            </div>
        </div>
    )
}

export default TextToBinary;
