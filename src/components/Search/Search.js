import React from 'react';
import Input from '../Input/Input';

const Search = (props) => {
    return (
        <form className="input-group">
            <Input
                type="search"
                placeholder={props.placeholder}
                inputChangeHandler={(event) => props.search(event.target.value)}
            />
        </form>
    );
};

export default Search;
