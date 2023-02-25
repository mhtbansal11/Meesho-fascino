import React, {useEffect, useState}from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from "./Sidebar2_P.module.css";


const Sidebar2_P = () => {
  const Searchurl = "";
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand");
  const [category, setCategory] = useState(initialState || []);

  // console.log(category);
  // console.log(searchParams.getAll("category"));

  const handleFilter = (e) =>{
  let newCategory = [...category]
  //   // if user checks any category it should be store in state
  //   // if the category is already present pop out of the state

    if(newCategory.includes(e.target.value)){
        newCategory.splice(newCategory.indexOf(e.target.value),1)
    }else{
      newCategory.push(e.target.value)
    }
    setCategory(newCategory);
};

  useEffect(()=>{
    const params = {
        category
    }

    setSearchParams(params);

  },[category])


  return (
    <div id={styles.sidebar_container}>
      <div id={styles.border}>
        <h3><b>CATEGORIES</b></h3>
        <div id={styles.arrow}>
            <p>&#8592;</p>
          <h2></h2>
        </div>
        <h2 id={styles.orrange}><b></b></h2>
      </div>
      {/* ----------------Brand section--------------- */}
        <h3 id={styles.brand_heading}><b>BRANDS</b></h3>
        <div className={styles.input_container}>
            <input type="text" placeholder='Search by Brands' />
            <img src={Searchurl} alt="search" />
        </div>
        <div className={styles.brandSearch}>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
            <div>
              <input type="Checkbox" value='' onChange={handleFilter} checked={category.includes("")}/>
              <p></p>
            </div>
        </div>
        <div className={styles.dashline}></div>


     {/* ----------------Price section--------------- */}   
      <h3 id={styles.brand_heading}><b>PRICE</b></h3> 
          <div className={styles.Discount}>
            <div>
                <input type="radio"  name="price"/>
                <p>Low to High</p>
              </div>
              <div>
                <input type="radio"  name="price"/>
                <p>High to Low</p>
             </div>
          </div>
          <div className={styles.dashline}></div>
    </div>
  )
}

export default Sidebar2_P