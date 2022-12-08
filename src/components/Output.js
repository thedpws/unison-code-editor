import { useState } from 'react'
import TestCase from './TestCase'

const Output = (props) => {
  return (
    <div className='relative m-6 flex flex-col'>
      <div className='text-lg font-semibold font-sans text-left'>Output</div>
      <div className='mt-3 grid grid-cols-4 grid-flow-col bg-gray-400'>
        
        <TestCase number={1} result={'Pass'} />
        <TestCase number={2} result={'Fail'} />
        <TestCase number={3} result={'Pass'} />
        <TestCase number={4} result={'Pass'} />
      </div>
    </div>
  )
}
export default Output
