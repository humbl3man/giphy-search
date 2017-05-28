import React, {Component} from 'react';

import './Searchbar.css';

export default class Searchbar extends Component {

    constructor(props) {
        super(props);
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.searchInput.value);

        this.searchInput.value = '';
        this.searchInput.focus();
    };

    render() {

        return (
            <header className="searchbar">
                <form className="searchform" onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        placeholder="search (i.e. 'bear')"
                        ref={input => this.searchInput = input }
                    />
                    <button type="submit" >Search</button>
                </form>
            </header>
        );

    }


}
