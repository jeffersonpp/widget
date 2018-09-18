import React, { Component } from 'react';
import './Star.css';



class Star extends Component {
  render() {
	let abc=[];
	abc.push(<path key={"star_"+Math.random()} className={"st"+this.props.rank} d="M0 0h79.7v79.7H0z"/>);
	abc.push(<path key={"star_"+Math.random()} className="st0" d="M39.9 53.9L52 50.7l5.1 15.7-17.2-12.5zm27.9-20.3H46.4l-6.6-20.3-6.6 20.3H11.8l17.3 12.6-6.6 20.3L39.8 54l10.7-7.8 17.3-12.6z"/>);

	if(this.props.rank>1){
	abc.push(<path key={"star_"+Math.random()} className={"st"+this.props.rank} d="M88.2 0h79.7v79.7H88.2z"/>);
	}
	else{
	abc.push(<path key={"star_"+Math.random()} className="_st" d="M88.2 0h79.7v79.7H88.2z"/>);		
	}
	abc.push(<path key={"star_"+Math.random()} className="st0" d="M128 53.9l12.2-3.2 5.1 15.7L128 53.9zm28-20.3h-21.4L128 13.3l-6.6 20.3H100l17.3 12.6-6.6 20.3L128 53.9l10.7-7.8L156 33.6z"/>);

	if(this.props.rank>2){
	abc.push(<path key={"star_"+Math.random()} className={"st"+this.props.rank} d="M176.3 0H256v79.7h-79.7z"/>);
	}
	else{
	abc.push(<path key={"star_"+Math.random()} className="_st" d="M176.3 0H256v79.7h-79.7z"/>);		
	}
	abc.push(<path key={"star_"+Math.random()} className="st0" d="M216.2 53.9l12.2-3.2 5.1 15.7-17.3-12.5zm27.9-20.3h-21.4l-6.6-20.3-6.6 20.3h-21.4l17.3 12.6-6.6 20.3L216.1 54l10.7-7.8 17.3-12.6z"/>);

	if(this.props.rank>3){
	abc.push(<path key={"star_"+Math.random()} className={"st"+this.props.rank} d="M264.5 0h79.7v79.7h-79.7z"/>);
	}
	else{
	abc.push(<path key={"star_"+Math.random()} className="_st" d="M264.5 0h79.7v79.7h-79.7z"/>);		
	}
	abc.push(<path key={"star_"+Math.random()} className="st0" d="M304.3 53.9l12.2-3.2 5.1 15.7-17.3-12.5zm28-20.3h-21.4l-6.6-20.3-6.6 20.3h-21.4l17.3 12.6-6.6 20.3L304.3 54l10.7-7.8 17.3-12.6z"/>);

	if(this.props.rank>4){
	abc.push(<path key={"star_"+Math.random()} className={"st"+this.props.rank} d="M352.6 0h79.7v79.7h-79.7z"/>);
	}
	else{
	abc.push(<path key={"star_"+Math.random()} className="_st" d="M352.6 0h79.7v79.7h-79.7z"/>);		
	}
	abc.push(<path key={"star_"+Math.random()} className="st0" d="M392.5 53.9l12.2-3.2 5.1 15.7-17.3-12.5zm27.9-20.3H399l-6.6-20.3-6.6 20.3h-21.4l17.3 12.6-6.6 20.3L392.4 54l10.7-7.8 17.3-12.6z"/>);

    return (
<div className="tp-stars--">
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.4 79.7">
{abc}
</svg>

</div>
    );
  }
}

export default Star;