import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './Minipro.css'
import ChefList from './ChefList';
import 'tachyons';

class Minipro extends Component{

		constructor (){
			super();
			this.state = {
				name : "Chef Chart made by bushra."
			}
		}

		namenext(){
			this.setState({
				name : "subscribe to bushra hanif."
			})

		}

		render(){


			const ChefListArray = [
		{
			id:1,
			name : 'juggy',
			work : 'head chef'
	    },
	    {
			id: 2,
			name : 'betty',
			work : 'assit chef'
	    },
	    {
			id:3,
			name : 'veronica',
			work : 'sr chef'
	    },
	    {
			id:4,
			name : 'tommy',
			work : 'jr chef'
	    }
	    
	   
	]

	const Chefcardinfo = ChefListArray.map( (chefcardinfo , i ) => {

			        return  <ChefList key={i} id={ChefListArray[0].name}
			        		          name={ChefListArray[0].name} 
			        		          work={ChefListArray[0].work} />

	} )
			return  ( <div className='mainpage'>
					<div>
					<h1 className='firstdiv'> {this.state.name} </h1>
			        </div>

			        {Chefcardinfo}
			        
			        <div>
			   			<button onClick = { () => this.namenext() } className='ma4'> Subscribe </button>
			   		</div>
			    </div>
	
    				)

				}

								}
 
	
	    
 

export default Minipro;