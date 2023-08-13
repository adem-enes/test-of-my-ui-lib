import React from 'react'
import { Input, CheckBox } from '../my-ui-lib/components';

const InputDemo = () => {
  return (
      <div style={{ backgroundColor: "inherit" }}>

        <Input bgColor='cornflowerblue' />
        <hr style={{ margin: "10px 0", border: "1px solid black " }} />
        <Input />
        <hr style={{ margin: "10px 0", border: "1px solid black " }} />
        <hr style={{ margin: "10px 0", border: "1px solid black " }} />
        <div style={{ width: "100%" }}>
          <CheckBox bgColor='cornflowerblue' />
        </div>
        <hr style={{ margin: "10px 0", border: "1px solid black " }} />
        <CheckBox />

        <div style={{ background: "var(--color)" }}>Test Div</div>
      </div>
  )
}

export default InputDemo;