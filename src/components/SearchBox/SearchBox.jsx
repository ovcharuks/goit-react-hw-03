import { useState } from "react";
import styles from "./SearchBox.module.css";
const SearchBox = ({value, onFilter}) => {



  return (
    <label className={styles.searchLabel}>
      Find contacts by name
      <input type="text" value={value} onChange={(event) => onFilter(event.target.value)} className={styles.searchInput}/>
    </label>
  );
};

export default SearchBox;
