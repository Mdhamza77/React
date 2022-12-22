import React, { Component } from 'react';
import {ThemeContext,themes} from './theme-context';
import ThemedButton from './themed-button';

// An Intermediate Component that uses themed button. 
function Tool(props){
    return (
        <ThemedButton onClick ={props.changeTheme}>
            changeTheme
        </ThemedButton>
    )
}
class DynamicContext extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme : themes.light 
        };
        this.toggleTheme = ()=>{
            this.setState(state => ({
                theme : 
                state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
    }
    render() {
        return (
            <div>
                
                    <ThemeContext.Provider value={this.state.theme}>
                        <Tool changeTheme={this.toggleTheme} />
                    </ThemeContext.Provider>
                    <section>
                    <ThemedButton />
                    </section>
            </div>
        );
    }
}

export default DynamicContext;
