import React, {Component} from "react";

class Header extends Component <any> {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var occupation= this.props.data.occupation;
			var description= this.props.data.description;
			var city= this.props.data.address.city;
			var networks= this.props.data.social.map(function(network: any){
				return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
			})
		}
		return (
			<header id="home">
				<nav id="nav-wrap">
					
				</nav>
			</header>
		);
	}
};

export default Header;