import React from 'react';
import RecipesRender from './RecipesRender/RecipesRender';
import './global.css';


class RecipeSaver extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [
				{	
					recipeName: 'Ham And Cheese Breakfast Pockets',
					cookTime: 10,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=1'
				},
				{	
					recipeName: 'Recipe 2',
					cookTime: 60,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=2'
				},
				{	
					recipeName: 'Recipe 3',
					cookTime: 50,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=3'
				}
			]
		}
	}

	render() {
		return <RecipesRender recipes={this.state.recipes} />
	}
}

export default RecipeSaver