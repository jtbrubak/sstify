import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  handleError(error) {
    if (error === "Password digest can't be blank") {
      return "Password can't be blank";
    }
    return error;
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

  handleGuestLogin(e) {
    e.preventDefault();
    const user = { username: 'guest', password: 'password' };
    this.props.processForm({ user });
  }

  handleSwitch() {
    this.props.clearErrors();
    this.setState({ username: "", password: "" });
  }

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className='form-change-link' onClick={this.handleSwitch}>Don't have an account? Sign up here!</Link>;
		} else {
			return <Link to="/login" className='form-change-link' onClick={this.handleSwitch}>Already have an account? Log in here!</Link>;
		}
	}

  renderGuestLogin() {
    if (this.props.formType === "login") {
      return <button onClick={this.handleGuestLogin}>GUEST LOGIN</button>;
    }
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li className='form-error' key={`error-${i}`}>
						{this.handleError(error)}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container fullscreen">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          <div className='logo'>
            <img src="http://imgur.com/vmOaIbJ.png"/><span>SSTify</span>
          </div>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label className="login-form-label"> Username<br/>
							<input type="text"
								value={this.state.username}
                placeholder="SSTify username"
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label className="login-form-label"> Password<br/>
							<input type="password"
								value={this.state.password}
                placeholder="Password"
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value={this.props.formType.toUpperCase()} />
            <br/>
            {this.renderGuestLogin()}
            {this.navLink()}
					</div>
				</form>
        <div className="app-description">
          <h1>Get the right music, right now</h1><br/>
          <h3>Listen to the legendary SST Records catalog for free.</h3><br/>
          <ul>
            <li>Search & discover music you'll love</li>
            <li>Create playlists of your favorite music</li>
          </ul>
        </div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
