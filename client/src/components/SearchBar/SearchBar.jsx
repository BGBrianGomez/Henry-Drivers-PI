import { getByName } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const SearchBar = ()=>{
    const dispatch = useDispatch()
    // const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        let name = e.target.value
        setTimeout(dispatch(getByName(name)), 1000);
    }

    return (
        <div>
            <input type="text" placeholder="buscar..." onChange={handleInputChange} />
        </div>
    )
}

export default SearchBar;