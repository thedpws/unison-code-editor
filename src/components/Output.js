import { useState } from 'react'
import TestCase from './TestCase'

const Output = (props) => {
  return (
    <div className='relative m-6 flex flex-col'>
      <div className='text-lg font-semibold font-sans text-left'>Output</div>
      <div className='mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-gray-400'>
        {props.text}
        <TestCase number={1} result={'Pass'} />
        <TestCase number={2} result={'Fail'} />
        <TestCase number={3} result={'Pass'} />
        <TestCase number={4} result={'Pass'} />
      </div>
    </div>
  )
}
export default Output
