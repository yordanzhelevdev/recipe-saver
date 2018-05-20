import React from 'react';
import RecipesRender from './RecipesRender/RecipesRender';
import Modal from './Modal/Modal';
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
					recipeName: '3 Meals, 1 Snack, $10 (7-Day Make-Ahead Meal Plan Day 5)',
					cookTime: 60,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=2'
				},
				{	
					recipeName: 'Ramadan Dishes for Suhoor & Iftar',
					cookTime: 50,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=3'
				},
				{	
					recipeName: '3-Ingredient Cookies ‘n’ Cream Ice Cream',
					cookTime: 50,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=4'
				},
					{	
					recipeName: 'Cheesy Eggplant Roll-Ups',
					cookTime: 50,
					ingredients: ['Prod 1', 'Prod 2', 'Prod 3'],
					directions: ['Frist Direction', 'Second Direction', 'Third Direction'],
					dishImg: 'https://loremflickr.com/320/240?random=5'
				},

			]
		}
	}

	render() {
		return (
			<div>
				<Modal />
				<RecipesRender recipes={this.state.recipes} />
			</div>
			)
	}
}

export default RecipeSaver