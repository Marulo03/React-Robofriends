import React from "react";

const Searchbox = ({ searchfield, searchChange} ) => {
    return (
        <div>
            <input
            className="pa3 ba b--green bg-gold"
            type='search'
            placeholder="search robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;