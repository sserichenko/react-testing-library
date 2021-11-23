import React from 'react';
import cn from 'classnames';
import styles from "./Search.module.css";

const Search = (props) => {

    const {value, onChange, children = 'Search', placeholder = "Search..."} = props;

    const inputClass = cn({
        [styles.input]: true,
        [styles.filled]: value.length
    })

    return (
        <label className={styles.label}>
            {children}
            <input 
            className={inputClass}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            /> 
        </label>
    );
};

export default Search;