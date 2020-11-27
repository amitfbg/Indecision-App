import React from 'react';
import Option from './Option';

const Options=(props)=>{
    return(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button--link" 
                onClick={props.handleDeleteOptions}
                >Remove All</button>
            </div>
            {props.options.length==0 && <p className="widget__message">Please add an option!!</p>}
            <Option 
            options={props.options}
            handleDeleteOne={props.handleDeleteOne}
            />           
        </div>
    );
};

export default Options;