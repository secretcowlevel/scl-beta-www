import React, {Component} from 'react';
import hudBg from 'img/hud-bg.png';
import SupermolotFont from 'fonts/TT-Supermolot-Regular.ttf';
import LoadedFont from 'fonts/loaded.ttf';
import AppStyles from 'styles/app';

class App extends Component {

    render() {
        return (
	    	<div style={AppStyles.container}>
                <div style={{...AppStyles.primaryText, ...AppStyles.glowText, ...AppStyles.hud, opacity: 1, animation: 'none'}}>

                    <img src={hudBg} style={AppStyles.hudBg} />

                    <div style={{...AppStyles.flexCenter, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', padding: '10%', boxSizing: 'border-box'}}>
                        <div>
                        	<h1 className="title" style={{...AppStyles.title, fontFamily: LoadedFont, animation: 'none'}}>Doomtrooper</h1>
                            <div className="introText" style={{fontFamily: SupermolotFont, marginBottom: '2rem'}}>
                                If you've been invited to play Doomtrooper, please input your code below! The code will create an account and email you the information to install the client!
                            </div>
	        				<h1 className="title" style={{...AppStyles.title, fontFamily: LoadedFont, fontSize: '1.5rem', animation: 'none'}}>Finished! Check your email</h1>
        				</div>
    				</div>
				</div>
	    	</div>
    	)
    }
}

export default App
