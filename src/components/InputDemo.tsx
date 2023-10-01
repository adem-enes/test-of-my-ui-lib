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
          <CheckBox containerStyle={{width: "100%"}} />
          <Input type='radio' placeholder='Radio' containerStyle={{ width: '50%' }} />
          <Input type='radio' placeholder='Radio' containerStyle={{ width: '50%' }} />
          <Input type='checkbox' placeholder='CheckBox' containerStyle={{ width: '50%' }} />
        <div style={{ background: "var(--color)", width: '100%' }}>Test Inputs</div>
        <Input type='button' placeholder='Button' containerStyle={{ width: '50%' }} />
        <Input type='color' placeholder='Color' containerStyle={{ width: '50%' }}
          value={color} onChange={(e) => setcolor(e.target.value)} />
        <Input type='date' placeholder='Date' containerStyle={{ width: '50%' }} />
        <Input type='datetime-local' placeholder='datetime-local' containerStyle={{ width: '50%' }} />
        <Input type='email' placeholder='Email' containerStyle={{ width: '50%' }} />
        <Input type='file' placeholder='File' containerStyle={{ width: '50%' }} />
        <Input type='image' placeholder='Image' containerStyle={{ width: '50%' }} />
        <Input type='month' placeholder='Month' containerStyle={{ width: '50%' }} />
        <Input type='number' placeholder='Number' containerStyle={{ width: '50%' }} />
        <Input type='password' placeholder='Password' containerStyle={{ width: '50%' }} />
        <Input type='range' placeholder='Range' containerStyle={{ width: '50%' }}
          value={range} onChange={(e) => setrange(Number(e.target.value))} />
        <Input type='search' placeholder='Search' containerStyle={{ width: '50%' }} />
        <Input type='tel' placeholder='Tel' containerStyle={{ width: '50%' }} />
        <Input type='time' placeholder='Time' containerStyle={{ width: '50%' }} />
        <Input type='url' placeholder='Url' containerStyle={{ width: '50%' }} />
        <Input type='week' placeholder='Week' containerStyle={{ width: '50%' }} />

      </Form>
    </div>
  )
}

export default InputDemo;