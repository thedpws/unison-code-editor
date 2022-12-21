import TestCase from "./TestCase";
const TestCaseContainer = (props) => {
    return (
        <div className='flkex space-y-0'>
            <div>
                {props.testCases}
            </div>
            {/* <div className="mt-3 grid grid-cols-4 auto-rows-auto overscroll-y-auto overflow-auto bg-gray-400"> */}
            <div className="bg-gray-400 ">
                {props.testCases?.map((testcase) => {
                    return (
                        <TestCase
                            key={testcase.key}
                            number={testcase.number}
                            result={testcase.result}
                            stdout={testcase?.stdout}
                        />
                    );
                })}

            </div>

            <div>
                hello
            </div>
        </div>
    )
};
export default TestCaseContainer;
