import React from 'react';

const Button = (props) => {
    return (
        
            <button className=" border-none p-5 text-gray-700 text-xl font-bold m-1 focus:outline-none  bg-gradient-to-r from white to white hover:from-green-400 hover:to-blue-500 ..." value = {props.value} onClick={(e)=>{props.run(e);}} >{props.op}</button>
        
    );
};

export default Button;
//hover: bg-gradient-to-r from-green-400 to-blue-500