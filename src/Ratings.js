import React, { Component } from 'react';
import Review from './Review.js';
import ReviewList from './reviewList.js';

		
class Ratings extends Component {	
  render() {
		const list = ReviewList();
    return (
	
<div className="container" id="accordion">
	     {list.map(function(list, i){
       return <Review key={"review"+i} firstName={list.firstName} fullName={list.fullName} reviewTitle={list.reviewTitle} reviewBody={list.reviewBody} starRating={list.starRating} />
		 })
		 }
	</div>
	
    );
  }
}

export default Ratings;

