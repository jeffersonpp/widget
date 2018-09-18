import React, { Component } from 'react';
import './Review.css';
import Star from './Star.js';
import bootstrap from 'bootstrap';

class Review extends Component {
  render() {
    return (
<div className = "tp-review">
	<div className="tp-widget-stars">
		<div className="tp-widget-stars-wrapper">
			<Star  key={"star_"+this.props.firstName} rank={this.props.starRating}/>
		</div>
	<div className="tp-widget-review_name" >{this.props.fullName}</div>
     </div>

	<div className="panel" >
		<div className="panel-heading">
		  <h4 className="panel-title">
			<a data-toggle="collapse" href={"#collapse_"+this.props.firstName}>
				{this.props.reviewTitle}
			</a>
		  </h4>
		</div>
		<div id={"collapse_"+this.props.firstName} className="panel-collapse collapse">
		  <div className="panel-body">
		   {this.props.reviewBody}
		  </div>
	    </div>
    </div>
</div>
    );
  }
}

export default Review;

