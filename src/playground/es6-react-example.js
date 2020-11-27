//es6 react render of form and normal templates

console.log("APP JS IS RUNNING");
//template with dynamic injection with objects
var appl={
    title: 'This is Title!!!',
    subtitle: 'This is SubTitle!!'
};
var template=(
<div>
    <h1>{appl.title}</h1>
    <p>{appl.subtitle}</p>
</div>
);
//static template
var templatetwo=(
    <div>
        <h1>Amit Kumar</h1>
        <p>Age : 22</p>
        <p>Location : Forbesganj</p>
    </div>
    );
//dynamic template
var userName='Amit';
var userAge='22';
var userCity='Forbesganj';
var templateThree=(
    <div>
        <h1>{userName}</h1>
        <h2>{userAge}</h2>
        <h3>{userCity}</h3>
    </div>
);
var user={
    userName:'Amit',
    userAge:'12',
    userCity:'Forbesganj'
};
function getLocation(userCity){
    return (userCity?userCity:'Unknown');
}
var templateFour=(
    <div>
        <h1>{user.userName}</h1>
        {user.userAge>=18 && <h2>{user.userAge}</h2>}
        <h3>{getLocation(user.userCity)}</h3>
    </div>
);
var ti={
    title:"THIS IS TITLE",
    subtitle:'This is subTitle',
    options:[]
};
var templateFive=(
    <div>
        <h1>{ti.title}</h1>
        {ti.subtitle && <p>SubTitle: {ti.subtitle}</p>}
        {ti.options.length>0?<p>"Here are your Options"</p>:<p>"No Options"</p>}
    </div>
);

const multiplier={
    numbers:[1,2,3,4,5],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number)=>number*this.multiplyBy);
    }
};
const addItem=(e) =>{
    e.preventDefault();

    const option=e.target.elements.option.value;
    if(option){
        ti.options.push(option);
        e.target.elements.option.value='';
        optionRender();
    }
};

const removeAll=()=>{
    ti.options=[];
    optionRender();
};

const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random() * ti.options.length);
    const ans=ti.options[randomNum];
    alert(ans);
};




var appRoot=document.getElementById('app');
//ReactDOM.render(template,appRoot);
//ReactDOM.render(templatetwo,appRoot);
//ReactDOM.render(templateThree,appRoot);
//ReactDOM.render(templateFour,appRoot);
//ReactDOM.render(templateFive,appRoot);
//console.log(multiplier.multiply());
const optionRender = ()=>{
    const templateSix=(
        <div>
            <h1>{ti.title}</h1>
            {ti.subtitle && <p>SubTitle: {ti.subtitle}</p>}
            {ti.options.length>0?<p>"Here are your Options"</p>:<p>"No Options"</p>}
            <p>Option Length : {ti.options.length} </p>
            <ol>
            {ti.options.map((option) =>  {
                return <li key={option}>{option}</li>;
            })}
            </ol>
            <form onSubmit={addItem}>
            <input type="text" name='option'/>
            <button >ADD ITEMS</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={true && ti.options.length<1} onClick={onMakeDecision}>Choose Random element from List:</button>
        </div>
    );
    ReactDOM.render(templateSix,appRoot);
};
optionRender();



