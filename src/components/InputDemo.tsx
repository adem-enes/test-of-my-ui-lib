import React, { useState } from 'react'
import { Input, CheckBox, Form } from '../my-ui-lib/components';

const InputDemo = () => {
  const [state, setstate] = useState("");

  const handleSubmit = () => {
    console.log("hello");
  }
  const handleReset = () => {
    setstate("");
  }

  return (
    <div style={{ backgroundColor: "yellow", marginTop: "50px", width: "80%" }}>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Input bgColor='cornflowerblue' placeholder='Name' value={state} onChange={(e) => setstate(e.target.value)} />
        <Input placeholder='Name' variant='standard' containerStyle={{ width: '50%' }} />
        <Input bgColor='cornflowerblue' placeholder='Name' value={state} onChange={(e) => setstate(e.target.value)}
          containerStyle={{ width: '50%' }} />
        <Input placeholder='Name' variant='standard' containerStyle={{ width: '50%' }} />
        <Input placeholder='Not Styled Yet' variant='filled' disabled containerStyle={{ width: '50%' }} />
        <div style={{ width: "100%" }}>
          <CheckBox bgColor='cornflowerblue' />
        </div>
        <CheckBox />

        <div style={{ background: "var(--color)" }}>Test Div</div>
      </Form>
    </div>
  )
}

export default InputDemo;