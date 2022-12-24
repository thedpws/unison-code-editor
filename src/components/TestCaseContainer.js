import TestCase from "./TestCase";
import { useState } from "react";
const TestCaseContainer = (props) => {
    const [selectedCase, setSelectedCase] = useState(1);
    return props.testCases ? (
        <div className='flex space-y-0'>
            {/*Only Scroll on the Test Cases*/}
            {/* <div className='bg-gray-700  p-2 flex-1 overscroll-y-auto overflow-auto'>
                <div className="bg-gray-400">
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
            </div> */}

            {/*Create Grid*/}
            <div className='grid grid-cols-5 bg-gray-200 '>
                <div className='bg-gray-700 p-2 flex-1 overscroll-y-auto overflow-auto'>
                    <div className="bg-gray-400">
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
                <div className='col-span-4 bg-gray-300'>
                    <div>
                        <h1 className='text-xl font-bold'>
                            {"Test Case " + selectedCase + ": " + props.testCases[selectedCase].result}
                        </h1>
                    </div>
                    <div>
                        {props.testCases[selectedCase].stdout}
                    </div>

                </div>
            </div>
        </div>
    ) : (<div></div>);
};
export default TestCaseContainer;
