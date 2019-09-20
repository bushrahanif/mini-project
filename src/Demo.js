import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// class component 

// class Demo extends Component{
// 	render (){
// 		return <div> 
// 			<h1> hello world </h1>
// 			<p> my reat app </p>
// 		</div>
// 			  }
// }
// export default Demo;
   

//functional component 

// const Demo = () => {
// 	return <h1> helloww World </h1>
// }
// export default Demo;

//destructuing 

// const Demo = (props) => {
// 	return <h1> helloww {props.name} </h1>
// }
// export default Demo;

//destructuing method 2

const Demo = ({name}) => {
	return <h1> helloww {name} </h1>
}
export default Demo;