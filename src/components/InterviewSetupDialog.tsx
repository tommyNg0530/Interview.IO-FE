import React, { useState } from 'react';
import { InterviewParam } from './Content';

export type InterviewSetupDialogProps = {
  startLLMConversation: (interviewParam: InterviewParam) => void;
};

export const InterviewSetupDialog = React.forwardRef(
  ({ startLLMConversation }: InterviewSetupDialogProps, ref: React.Ref<HTMLDialogElement>) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    return (
      <dialog
        className="w-[max-content] h-[max-content] bg-slate-100 relative rounded-lg"
        ref={ref}
        id="interview-setup-dialog"
      >
        <div className="py-8 px-16 flex flex-col items-center gap-4 w-[70ch] max-w-full">
          <h4 className="text-2xl font-bold text-center text-gray-800">
            <span className="font-bold ml-2 decoration-purple-500 animate-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Interview Setup
            </span>
          </h4>
          <form className="flex flex-col justify-center gap-4 w-full">
            <label>
              <p className="font-bold">Company</p>
              <input
                className="w-full"
                type="text"
                value={company}
                onChange={e => {
                  setCompany(e.target.value);
                }}
              />
            </label>
            <label>
              <p className="font-bold">Position</p>
              <input
                className="w-full h-8"
                type="text"
                value={position}
                onChange={e => {
                  setPosition(e.target.value);
                }}
              />
            </label>
            <label>
              <p className="font-bold">Responsibiliites</p>
              <textarea
                className="w-full"
                value={responsibilities}
                onChange={e => {
                  setResponsibilities(e.target.value);
                }}
              ></textarea>
            </label>
          </form>
          <div className="flex gap-4">
            <button
              className="flex flex-row items-center w-[max-content] space-x-2 rounded-lg px-4 py-2 font-medium text-white bg-gradient-to-tr from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-700 active:from-indigo-700 active:to-purple-800 transition-colors duration-300"
              onClick={() => {
                startLLMConversation({ company, position, responsibilities });
                ref?.current?.close();
              }}
            >
              Start
            </button>
            <button
              className="flex flex-row items-center space-x-2 rounded-lg px-4 py-2 font-medium text-white bg-gradient-to-l from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 active:from-orange-800 active:to-red-800 transition-colors duration-300"
              onClick={() => {
                if (ref) ref?.current?.close();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default InterviewSetupDialog;
