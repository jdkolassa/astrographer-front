import React, { useMemo } from 'react';
import {CODES} from "../codes";


const FilterMenu = (props) => {
    
    const handleClick = (e, cat) => {
        let value = e.target.value;
        if (e.target.checked) {
            let add = true;
            updateFilters(add, value, cat);
        } else {
            let add = false;
            updateFilters(add, value, cat);
        }
       
    }
  
  
    return (
    <>
        <div css={css`width: 30%; margin: 0 auto;`}>
            <button type="button" onClick={() => props.resetFilters(true)}>
                Reset
            </button>
        </div>
        <div css={css`display:flex;flex-direction:row;flex-wrap:wrap;`}>
          {CODES.map((cat) =>
              <ul css={css`padding:1rem;list-style-type: none;display:flex;flex-direction:row;border:1px solid #ffc877`}>
                {cat.map((item) =>
                  <li key={`${cat}--${item}`} css={css`margin:0.75rem;`}>
                  <label>
                  &nbsp;&nbsp;&nbsp;<input 
                      type="checkbox"
                      onClick={e => handleClick(e, cat)}
                      value={item}
                    />
                    {item}
                  </label>
                </li>
                )}
              </ul>
            )}
        </div>
    </>
    
  )
}

export default connect(FilterMenu)