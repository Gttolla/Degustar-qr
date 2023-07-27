import React from "react";

function Test () {
    return (
        <div className="relative">
          <div className="overflow-auto h-64 border border-gray-300 p-4">
                <div className="bg-primary h-screen w-1/2"></div>
          </div>
          <div className="bg-blue-500 text-black p-4 absolute right-0 top-0 w-full">
        
            Componente Fixo
          </div>
        </div>
      );
}


export default Test;