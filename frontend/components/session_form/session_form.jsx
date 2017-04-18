import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Don't have an account? Sign up here!</Link>;
		} else {
			return <Link to="/login">Already have an account? Log in here!</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container fullscreen">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username<br/>
							<input type="text"
								value={this.state.username}
                placeholder="Spotify username"
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password<br/>
							<input type="password"
								value={this.state.password}
                placeholder="Password"
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value={this.props.formType.toUpperCase()} />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
