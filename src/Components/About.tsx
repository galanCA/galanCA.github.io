import React, {Component} from 'react';

class About extends Component <any> {
	render() {
		var profilepic;
		if (this.props.data) {
			var name = this.props.data.name;
			profilepic= "images/"+this.props.data.image;
			var bio = this.props.data.bio;
			// var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			// var zip = this.props.data.address.zip;
			// var phone= this.props.data.phone;
			var email = this.props.data.email;
			// var resumeDownload = this.props.data.resumedownload;
		}
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
							<img className="profile-pic"  src={profilepic} alt="Picture of a profile"/>
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p>{bio}</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span><br />
									{city}, {state}<br />
								<span>{email}</span>
							</p>
						</div>
					</div>
					</div>
				</div>
   		</section>
		);
	}
}
export default About;