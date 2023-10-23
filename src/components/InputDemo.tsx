import React, { useState } from 'react'
import { Input, CheckBox, Form } from '../my-ui-lib/components';

const InputDemo = () => {
  const [state, setstate] = useState("");
  const [color, setcolor] = useState("#191919");
  const [range, setrange] = useState<number>(0);

  const handleSubmit = () => {
    console.log("hello");
  }
  const handleReset = () => {
    setstate("");
  }

  return (
    <div style={{ marginTop: "50px", width: "80%" }}>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Input bgColor='cornflowerblue' placeholder='Name' value={state} onChange={(e) => setstate(e.target.value)} />
        <Input placeholder='Name' variant='standard' containerStyle={{ width: '50%' }} />
        <Input bgColor='cornflowerblue' placeholder='Name' value={state} onChange={(e) => setstate(e.target.value)}
          containerStyle={{ width: '50%' }} />
        <Input placeholder='Name' variant='standard' containerStyle={{ width: '50%' }} />
        <Input placeholder='Not Styled Yet' variant='filled' disabled containerStyle={{ width: '50%' }} />
        <div style={{ width: "50%" }}>
          <CheckBox />
        </div>
        <div style={{ width: "50%" }}>
          <CheckBox />
        </div>
        <CheckBox containerStyle={{ width: "100%" }} />
        <Input type='radio' placeholder='Radio' col={6} />
        <Input type='radio' placeholder='Radio' col={6} />
        <Input type='checkbox' placeholder='CheckBox' col={6} />
        <div style={{ background: "var(--color)", width: '100%' }}>Test Inputs</div>
        <Input type='button' placeholder='Button' col={3} />
        <Input type='color' placeholder='Color' col={3}
          value={color} onChange={(e) => setcolor(e.target.value)} />
        <Input type='color' placeholder='Color' col={3} />
        <Input type='date' placeholder='Date' col={3} />
        <Input type='datetime-local' placeholder='datetime-local' col={3} />
        <Input type='email' placeholder='Email' col={4} />
        <Input type='file' placeholder='File' col={4} />
        <Input type='image' placeholder='Image' col={4} />
        <Input type='month' placeholder='Month' col={4} />
        <Input type='number' placeholder='Number' col={4} />
        <Input type='password' placeholder='Password' col={4} />
        <Input type='range' placeholder='Range' col={10}
          value={range} onChange={(e) => setrange(Number(e.target.value))} />
        <Input type='search' placeholder='Search' col={2} />
        <Input type='tel' placeholder='Tel' col={1} />
        <Input type='time' placeholder='Time' col={11} />
        <Input type='url' placeholder='Url' col={6} />
        <Input type='week' placeholder='Week' col={6} />

      </Form>
    </div>
  )
}

export default InputDemo;