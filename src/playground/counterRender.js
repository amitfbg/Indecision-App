//USING CLASS AND STATE
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleSubOne=this.handleSubOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count: 0
        };
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        });
        console.log('Add');
    }
    handleSubOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            };
        });
        console.log('Sub');
    }
    handleReset(){
        this.setState(()=>{
            return {
                count:0
            };
        });
        console.log('Reset');
    }
    render(){
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>B1(+1)</button>
                <button onClick={this.handleSubOne}>B2(-1)</button>
                <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById("app"));

//---------------------------
//WITHOUT CLASSS

// let count=0;
// const addOne=()=>{
//     count=count+1;
//     //console.log("add1",count);
//     counterRender();
// } 
// const subOne=()=>{
//     count=count-1;
//     //console.log("sub1");
//     counterRender();
// } 

// const reSet=()=>{
//     count=0;
//     //console.log("sub1");
//     counterRender();
// } 

// var appRoot=document.getElementById('app');

// const counterRender=()=>{
//     const templateSix=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>B1(+1)</button>
//             <button onClick={subOne}>B2(-1)</button>
//             <button onClick={reSet}>Reset</button>
//         </div>
    
//     );
//     ReactDOM.render(templateSix,appRoot);

// }

// counterRender();


