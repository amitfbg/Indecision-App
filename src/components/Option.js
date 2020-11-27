import React from 'react';
const Option=(props)=>{
    return(
        <div >
                {props.options.map((option,index)=>{
                    return (
                        <div 
                        className="option-box"
                        key={option}>
                        <p className="option__text">{index+1}. {option}</p><button
                        className="button--link"
                        onClick={(e)=>{
                            props.handleDeleteOne(option)
                        }
                        }>Delete</button>

                        </div>
                );
                })}
        </div>
    );
};

export default Option;