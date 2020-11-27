import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModel from './OptionModel';

//here we used babel plugin for class transformation
//which removes the over head of this
//which removes the overhead of constructor
//function to arrowfunction

export default class Indecision extends React.Component{
    state={
        options: [],
        selectedOption: undefined
    };
    //for Delete Button state Setting
    handleDeleteOptions=()=>{
        this.setState(()=>{
            return {
                options: []
            };
        });
    };
    //for what should i do button random number generate to show the option selected
    handlePick=()=>{
        const randomNum=Math.floor(Math.random() * this.state.options.length);
        const ans=this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption: ans
            };
        });
        
        //alert(ans);
    };
    //for form submit to add option
    handleAddOption=(option)=>{
        if(!option){
            return 'Please Enter The Value';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Option already Exist';
        }
        //state set for adding new option using concat property without changing the default array
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            }
        });
    };
    handleDeleteOne=(optionToRemove)=>{
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>{
                    return optionToRemove!=option;
                })
            };
        });
        //console.log('hi',option);
    };
    handleClearOkay=()=>{
        this.setState(()=>{
           return {
               selectedOption: undefined
           } 
        });
    };


    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //     this.handlePick=this.handlePick.bind(this);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     this.handleDeleteOne=this.handleDeleteOne.bind(this);
    //     // this.state={
    //     //     options: []
    //     // };
    // }
    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);

            if(options)
                this.setState(()=>({options}));
        }
        catch(e){
            //do nothing
        }
        
        //console.log("MOUNT");
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!=this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            //console.log("Saving data");
        }
    }

    render(){
        const title="Indecision App";
        const subTitle="Hello React";
       // const options=['A','B','C','D'];
        //return <p>This is from Header</p>;
        return(
            <div>
                <Header title={title} subTitle={subTitle}/> {/* Header Component(Functional Component) with title and Subtitle prop */}
                {/* Action Component (Functional Component)*/}
                <div className="container">
                <Action 
                handlePick={this.handlePick}
                hasOptions={this.state.options.length>0}
                />
                {/* Options Component (Functional Component)*/}
                    <div className="widget">
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOne={this.handleDeleteOne}
                        />
                        {/* AddOptions Component (Class Component)*/}
                        <AddOptions
                        handleAddOption={this.handleAddOption}
                        />
                    </div>                
                </div>
                
                <OptionModel
                    selectedOption={this.state.selectedOption}
                    handleClearOkay={this.handleClearOkay}
                />
            </div>
        );
    }
}