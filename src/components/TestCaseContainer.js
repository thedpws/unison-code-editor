import TestCase from "./TestCase";
import { useState } from "react";

import OutputEditor from "./OutputEditor";
import Output from "./Output";

const TestCaseContainer = (props) => {
    const [selectedCase, setSelectedCase] = useState(1);
    return props.testCases ? (
        <div className='flex'  >
            {/*Create Grid*/}
            <div className='grid grid-cols-8 bg-gray-300' >
                <div className='bg-gray-700 col-span-1 p-2 flex-1 overscroll-y-auto overflow-auto'>
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
                <div className='col-span-7 bg-gray-500'>
                    <p className="text-lg text-gray-900 dark:text-white" style={{ border: '1px solid black', padding: '10px'}}>
                        {"Test Case " + selectedCase}
                    </p>
                    <div style={{ border: '1px solid black', textAlign: 'left', padding: '15px' }}>
                        <p className="text-base text-gray-900 dark:text-white">
                            Input (stdin)
                        </p>
                        <OutputEditor defaultVal={props.testCases[selectedCase - 1].stdin} />
                    </div>
                    <div style={{ border: '1px solid black', textAlign: 'left', padding: '15px' }}>
                        <p className="text-base text-gray-900 dark:text-white">
                            Output (stdout)
                        </p>
                        <OutputEditor defaultVal={props.testCases[selectedCase - 1].stdout} />
                    </div>
                    <div style={{ border: '1px solid black', textAlign: 'left', padding: '15px' }}>
                        <p className="text-base text-gray-900 dark:text-white">
                            Expected Output
                        </p>
                        <OutputEditor defaultVal={props.testCases[selectedCase - 1].stdout_expected} />
                    </div>
                </div>
            </div>
        </div>
    ) : (<div></div>);
};
export default TestCaseContainer;
