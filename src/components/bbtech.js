import React,{Component} from 'react';
import 'bulma/css/bulma.css';
import Locations from './locations.js';
class BbTech extends Component{
	constructor(props){
		super(props);
		this.state={
			locations:['Durban,SA','Cape town,SA','PE,SA','Johannesburg,SA','Pretoria,SA','Delhi,India','Gujarat,India','Big Ben,UK','California,USA','London,UK']
		}
	}
	render(){
		return (
			<div className='content'>
				<div className='container'>
					<section className='section'>
						<h1>BB Tech Location search</h1>
						<Locations items={this.state.locations}/>
					</section>
				</div>
			</div>

		);
	}
}


export default BbTech;

