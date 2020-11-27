
//USING CLASS AND STATE
class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.changeVal=this.changeVal.bind(this);
        this.state={
            visibility:false
        };
    }
    changeVal(){
        this.setState((prevState)=>{
            return {
                visibility: !(prevState.visibility)
            };
            
        });
        //alert('working');
    }
    render(){
        return (
            <div>
                <h1>Visible Toggle</h1>
                {this.state.visibility && <p>Your Invisible text</p>}
                <button onClick={this.changeVal}>{this.state.visibility?"Hide Details":"Show Details"}</button>
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>,document.getElementById("app"));

//-----------------------------
//wITHOUT CLASS 
// let visibility=false;

// const changeVal=()=>{
//     // if(!visibility){
//     // visibility=true;
    
//     // }else{
//     //     visibility=false;
//     // }
//     visibility?visibility=false:visibility=true;
//     renderToggle();
//     //visibility=false;
// };



// const appRoot=document.getElementById("app");

// const renderToggle=()=>{
//     const template=(
//         <div>
//         <h1>Visible Toggle</h1>
//         {visibility && <p>Your Invisible text</p>}
//         <button onClick={changeVal}>{visibility?"Hide Details":"Show Details"}</button>
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// renderToggle();