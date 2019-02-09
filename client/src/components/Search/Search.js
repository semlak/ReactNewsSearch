'use strict';
import React, {Component} from 'react';
import {Button, Card, Row, Col } from 'reactstrap';

const SearchDiv = props => (
	<Card className="search-div">
		<h3>Search</h3>
		<form>
			<h5>Topic</h5>
			<input 
				name="searchTopic" 
				type="text" 
				placeholder="Enter a news topic to search..."
				value={props.searchTopic} 
				onChange={props.handleInputChange} 
			/>
		</form>
	</Card>	
)


export default SearchDiv;