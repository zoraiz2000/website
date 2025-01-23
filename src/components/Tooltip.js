import React, { useState} from 'react';

export const Tooltip = ({infoText, children}) => {

    const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
    >
        {children}

        {showTooltip && (
        <div className="absolute top-10 text-xs bg-background text-center font-poppins px-3 py-1 rounded-full
        dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
            {infoText}
        </div>
        )}

    </div>
  )
}
