import React, { useEffect, useState } from 'react';

function MobileScren (props){
    const [hr, setHr] = useState('00');
    const [min, setMin] = useState('00');

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const dateToday = new Date();
            const hr = String(dateToday.getHours()).padStart(2, '0');
            const min = String(dateToday.getMinutes()).padStart(2, '0');

            setHr(hr);
            setMin(min);
        }, 1000); 

        return () => clearInterval(timeInterval);
    }, []);

    return(
        <div id="container">
            <div className="mobile">
                <div className="screen overflow-auto">
                    <div className="px-6 py-1 text-text" id="top-screen">
                        
                        <div className="w-11">
                            <span>{hr}</span>
                            <span>:</span>
                            <span>{min}</span>
                        </div>

                        <div className="h-6 w-6 rounded-full border-8 border-gray-900 bg-gray-500"></div>

                        <div>
                            <span className="font-semibold text-sm" id="batery">100%</span>
                        </div>
                        
                    </div>

                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default MobileScren;