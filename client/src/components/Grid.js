import React, {useState, useMemo} from 'react';
import Star from './Star';
import {CODES} from "../codes";
import FilterMenu from './FilterMenu';


// TODO: Implement lazy loading

const Grid = ({state}) => {

  const stars = state.source.get('/').items

  /**
   * By default, "defaultShowAll" == true
   * while (dSA == true) {
   *  all stars displayed; overrides individual types
   * }
   * when (dSA !== true) {
   *  individual state properties are examined
   * }
   */

   const [setFilters, Filters] = useState({
      astrog_hue: [],
      astrog_lumos: []
    });
    const [setShowAll, ShowAll] = useState(true);

    function updateFilters(add, value, cat) {
      if (add) {
        // I just don't want to call "setShowAll()" if there's no reason to
        if(Filters.astrog_hue.length == 0 && Filters.astrog_lumos.length == 0) {
          setShowAll(false);
        }
        let newValue = {[cat]: value};
        setFilters({
          ...Filters,
          ...newValue
        });
      } else {
        let remain = Filters[cat].filter((item) => item !== value);
        setFilters({...Filters, remain});
        // If the user deselects everything, we should automatically reset the filters
        if(Filters.astrog_hue.length == 0 && Filters.astrog_lumos.length == 0) {
          setShowAll(true);
        }
      }
    }

    function resetFilters(input) {
      if (input == true) {
        setFilters({
          astrog_hue: [],
          astrog_lumos: [],
        });
        setShowAll(true);
      }
    }

     let results = stars.filter(function(post) {
       if (Filters.astrog_hue.length == 0 && Filters.astrog_lumos.length == 0) {
         return true;
       } else {
        for (let key in Filters) {
          if(key.includes(post.key)) {
            return true;
          } else if (post.key === undefined || !key.includes(post.key)) {
            return false;
          }
        }
       }
     })
  
  return (
  <div>
      <FilterMenu updateFilters={updateFilters} resetFilters={resetFilters} />
      <GridWrapper>
        {console.log(results)}
           {results.map((item) => {
             const star = state.source[item.type][item.id];

            return (
              <Star key={star.id} name={star.title.rendered} spect={star.spect} hue={star.astrog_hue} lumos={star.astrog_lumos} distance={star.distance}></Star>
            ) 
          })}
      </GridWrapper>
  </div>
  );
}

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0.5rem;
  justify-content: center;
`;


export default connect(Grid);
