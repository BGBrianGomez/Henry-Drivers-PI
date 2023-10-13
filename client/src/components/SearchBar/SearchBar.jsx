import { getByName } from "../../Redux/Actions/actions";

import { useState } from "react";

const SearchBar = ()=>{
    // const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        let name = e.target.value
        setTimeout(getByName(name), 1000);
    }

    return (
        <div>
            <input type="text" placeholder="buscar..." onChange={handleInputChange} />
        </div>
    )
}

export default SearchBar;