import React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `Gadget Heaven | ${title}`
    },[])
    return (
        <div>
            
        </div>
    );
};

export default UseTitle;