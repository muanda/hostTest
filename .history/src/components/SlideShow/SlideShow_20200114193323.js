import React from "react";

import M from "materialize-css/dist/js/materialize.min.js";


class SlideShow extends React.Component  {
	componentDidMount() {
		var instance = M.Carousel.init({
			fullWidth: true,
			indicators: true
		  });
    }

	render(){
		return (
				<div class="carousel carousel-slider center">
				<div class="carousel-fixed-item center">
				  <a class="btn waves-effect white grey-text darken-text-2">button</a>
				</div>
				<div class="carousel-item red white-text" href="#one!">
				  <h2>First Panel</h2>
				  <p class="white-text">This is your first panel</p>
				</div>
				<div class="carousel-item amber white-text" href="#two!">
				  <h2>Second Panel</h2>
				  <p class="white-text">This is your second panel</p>
				</div>
				<div class="carousel-item green white-text" href="#three!">
				  <h2>Third Panel</h2>
				  <p class="white-text">This is your third panel</p>
				</div>
				<div class="carousel-item blue white-text" href="#four!">
				  <h2>Fourth Panel</h2>
				  <p class="white-text">This is your fourth panel</p>
				</div>
			  </div>
			);
		}
	

	
}

export default SlideShow;
