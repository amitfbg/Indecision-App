import React from 'react';

export default class AddOptions extends React.Component{
    state={
        error: undefined
    };
    
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        // this.state={
        //     error: undefined
        // };
    }
    handleAddOption(e){
        e.preventDefault();
        let optionAdd= e.target.optionAdd.value.trim() ;
        const error=this.props.handleAddOption(optionAdd);
        
        this.setState(()=>{
            return {
                error
            }
        });
        
        if(!error){
            e.target.optionAdd.value='';
        }
    }
    render(){
        return(
            <div>
                {this.state.error &&<p className="add-option-error">{this.state.error}</p>}
                <form 
                className="add-option-form"
                onSubmit={this.handleAddOption}>
                <input className="add-option-input" type='text' name='optionAdd'/>
                <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}