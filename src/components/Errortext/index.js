import React from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai';

function ErrorText({errorMsg}) {
  return(
    <div className="text-red-500">
      <p className="flex items-center text-xs">
        <span className="pr-1">
          {errorMsg === undefined ? null : (
            <AiOutlineInfoCircle fill="#DA1414" />
          )}
        </span>
        {errorMsg}
      </p>
    </div>
  )
};

export default ErrorText;