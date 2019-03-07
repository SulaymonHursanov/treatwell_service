import React from 'react'
import classes  from './Navbar.module.css'

const Navbar = ()=> {
  return (
      <nav className={classes.nav}>
          <div className={classes.content}>
              <div>
                  <span>Sort by</span>
              </div>
              <div>
                  <select>
                      <option>Recommended</option>
                      <option>Most Popular</option>
                      <option>Highest Rated</option>
                      <option>Lowest Rated</option>
                      <option>Highest Price</option>
                      <option>Lowest Price</option>
                  </select>
                  <hr/>
              </div>
              <div className={classes.map}>
                  here will be map
              </div>
              <div>
                  <span>Location</span>
              </div>
              <div>
                  <input type="text" value={'UK'}/>
              </div>
              <hr/>
              <div>
                  <input type="text" value={'Any date'} />
              </div>
              <hr/>
              <div>
                  I want to book
              </div>
              <div>
                  <input type="radio" name="gender" value="For a specific date/time"/>For a specific date/time<br/>
                      <input type="radio" name="gender" value="For a specific date/time"/>For a specific date/time<br/>
                          <input type="radio" name="gender" value="other"/>Other
              </div>
              <hr/>

          </div>
      </nav>
  );
};

export default Navbar;