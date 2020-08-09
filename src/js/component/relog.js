import React from "react";
import { SecondsCounter } from "./vista";
import { Start } from "./clickBotton";

export class Contador extends React.Component {
	constructor() {
		super();
		this.state = {
			second: 0,
			second2: 0,
			second3: 0,
			second4: 0
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ second: this.state.second + 1 });
			if (this.state.second == 10) {
				this.setState({
					second: 0,
					second2: this.state.second2 + 1
				});
			}
			if (this.state.second2 == 10) {
				this.setState({
					second2: 0,
					second3: this.state.second3 + 1
				});
			}
			if (this.state.second3 == 10) {
				this.setState({
					second3: 0,
					second4: this.state.second4 + 1
				});
			}
		}, 1000);
	}

	render() {
		return (
			<div className="rounded d-flex mt-5 mx-auto justify-content-center bg-secondary col-3">
				<SecondsCounter countSecond={this.state.second4} />
				<SecondsCounter countSecond={this.state.second3} />
				<SecondsCounter countSecond={this.state.second2} />
				<SecondsCounter countSecond={this.state.second} />
			</div>
		);
	}
}
