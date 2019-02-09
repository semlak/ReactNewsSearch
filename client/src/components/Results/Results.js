'use strict';
import React, {Component} from 'react';
import {Button, Card, Row, Col } from 'reactstrap';

const ResultsDiv = props => (
	<Card className="results-div">
		<h3>Results</h3>
		{props.children}
	</Card>	
)


export default ResultsDiv;