import React from "react";
import './Footer.css';
import githubImg from '../../Images/github.png';

class Footer extends React.Component {
	render() {
		return(
			<footer class="footer">
				<span>Created with <span className="love" aria-label="heart emoticon">&#x1F496;</span>by <span>Yordan Zhelev</span></span>
				<a href="https://github.com/yordanzhelevdev"><img src={githubImg} /></a>
			</footer>
		)
	}
}


export default Footer;
