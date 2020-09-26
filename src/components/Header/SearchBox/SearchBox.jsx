import React, { useState, }  from 'react'
import classes from './SearchBox.module.css'
import { FaSearch } from 'react-icons/fa';
import {useHistory} from 'react-router-dom';


function SearchBox() {
    let history = useHistory();
	const [value, setValue] = useState()

	const handleSubmit = (val) => {
		const subValue = value || val
	history.push({
		pathname: '/search',
		search: '?s='+subValue,
	  })
	}

	const handleChange = (event) => {	
		setValue(event.target.value)
         handleSubmit(event.target.value)
	  };

    return (
        <div className={classes.Search}>
			{/* <form action="/search"> */}
			<form onSubmit={handleSubmit}>
				<input className={classes.SearchInput} type="text" name="s" 
				onChange={handleChange}
				></input>
				<div className={classes.SearchIcon}>
					<FaSearch />
				</div>
			</form>
        </div>
	)
	
}

export default SearchBox
