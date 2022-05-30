import { CButton, CForm, CFormCheck } from '@coreui/react';
import React, {useState, useMemo} from 'react';
import Star from './Star';
import { SpectralClasses, LuminosityClasses } from '../models/Star';


// TODO: Implement lazy loading

const Grid = () => {

  const [showAll, setShowAll] = useState(true);

  const spectClasses = Object.values(SpectralClasses);
  const lumosClasses = (Object.keys(LuminosityClasses) as (keyof typeof LuminosityClasses)[]).map(
    (key, value) => {
      return (
        <li className="filterItem">
          <CFormCheck id={`luminosityCheck-${value}`} label={key} className={`checkbox ${value}filter`} />
        </li>
      )
    }
  )
  

  return (
    <>
      <div className="filterContainer">
        <div className="filterTopBtns">
          <CButton type="reset" shape="rounded-0" variant="outline" className="filterBtn" id="resetBtn">Reset</CButton>
          <CButton type="button" shape="rounded-0" variant="outline" className="filterBtn" id="namedBtn">Named Stars Only</CButton>
        </div>
        <div className="filterChecksWrapper">
          <div id="filtersSpectral" className="filterChecksContainer">
            <ul className="filterList">
             {spectClasses.map((item: SpectralClasses) =>
              <li className="filterItem">
                <CFormCheck id={`spectralCheck-${item}`} label={item} className={`checkBox ${item}filter`} />
              </li>
             )}
            </ul>
          </div>
          <div id="filtersLuminosity" className="filterChecksContainer">
              <ul className="filterList">
                {lumosClasses}
              </ul>
          </div>
        </div>
      </div>
      <div className="GridWrapper">
        
      </div>
    </>
    
  )
  
}

export default Grid
