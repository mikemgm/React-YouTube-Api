import React, {Component} from "react"; 


class SearchBar extends Component{
    state = {userInput: "  " };
    
    inputChange = (event) => {
        this.setState({ userInput: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault(); 
    };
    
    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit= {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search </label>
                            <input 
                            input="text" 
                            value={this.state.userInput} 
                            onChange={this.inputChange}
                            />
                    </div>
                </form>
            </div>
        )
    }


}

export default SearchBar; 