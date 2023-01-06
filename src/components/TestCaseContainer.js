import TestCase from "./TestCase";
import { useState } from "react";
const TestCaseContainer = (props) => {
    const [selectedCase, setSelectedCase] = useState(1);
    return props.testCases ? (
        <div className='flex'  >
            {/*Create Grid*/}
            <div className='grid grid-cols-12 bg-gray-300' >
                <div className='bg-gray-700 col-span-2 p-2 flex-1 overscroll-y-auto overflow-auto'>
                    <div>
                        {props.testCases?.map((testcase) => {
                            return (
                                <TestCase
                                    key={testcase.key}
                                    number={testcase.number}
                                    result={testcase.result}
                                    stdout={testcase?.stdout}
                                    setSelectedCase={setSelectedCase}
                                />
                            );
                        })}

                    </div>
                </div>
                <div className='col-span-10 bg-gray-500'>
                    <div>
                        <h1 className='text-xl font-bold'>
                            {"Test Case " + selectedCase + ": " + props.testCases[selectedCase - 1].result}
                        </h1>
                    </div>
                    <div>
                        {"stdin: " + props.testCases[selectedCase - 1].stdin}
                    </div>
                    <div className='font-sans text-base'>
                        {"stdout: " + props.testCases[selectedCase - 1].stdout}
                    </div>

                </div>
            </div>
        </div>
    ) : (<div></div>);
};
export default TestCaseContainer;
