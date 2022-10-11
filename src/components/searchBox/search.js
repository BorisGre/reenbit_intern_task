import React, { useContext} from 'react';
import { Context } from '../../components/context';

const Search = () => {

    const boundedActions = useContext(Context);
    const onInput = (e) => {

            const searchRequest = e.target.value
            boundedActions.doSearch(searchRequest) 
    };

    return (

        <form className="searchBox">
            <fieldset>
                <input type="text" name="message" placeholder="Type here a new message"
                onChange={onInput}/>
            </fieldset>
        </form>
    )
}

export default Search;