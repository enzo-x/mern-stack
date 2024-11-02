import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WritingPad({value,setValue, theme,readOnly}) {

  return (
    <div>

         <ReactQuill
        className=""
        theme={theme}
        value={value.slice(0,300)}
        readOnly={readOnly}
        onChange={setValue}
      />
    </div>
  )
}

export default WritingPad
