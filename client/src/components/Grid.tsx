import { CButton, CCol, CContainer, CFormCheck, CRow } from '@coreui/react';
import React, {useEffect, useState} from 'react';
import Star from './Star';
import { SpectralClasses, LuminosityClasses, IStar } from '../models/IStar';


// TODO: Implement lazy loading

const Grid = () => {

  const [showAll, setShowAll] = useState(true);
  const [stardata, setStardata] = useState<IStar[]>([]);

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

  useEffect(() => {
    async function getStars() {
      const response = await fetch('http://localhost:3009/record');

      if(!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const stardata = await response.json();
      setStardata(stardata);
    }

    getStars();
    return;
  }, [stardata.length]);

  function starsList() {
    return stardata.map((item) => {
      return (
        <CCol>
          <Star {...item} key={item._id} />
        </CCol>
      )
    })
  }
  

  return (
    <>
      <CContainer className="filtersContainer">
          <div className="filterTopBtns">
            <CButton type="reset" shape="rounded-0" variant="outline" className="filterBtn" id="resetBtn" onClick={() => setShowAll(true)}>Reset</CButton>
            <CButton type="button" shape="rounded-0" variant="outline" className="filterBtn" id="namedBtn">Named Stars Only</CButton>
          </div>
        <CRow>
          <CCol>
            <ul className="filterList" id="filtersSpectral">
              {spectClasses.map((item: SpectralClasses) =>
                <li className="filterItem">
                  <CFormCheck id={`spectralCheck-${item}`} label={item} className={`checkBox ${item}filter`} />
                </li>
              )}
            </ul>
          </CCol>
          <CCol>
            <ul className="filterList">
                {lumosClasses}
            </ul>
          </CCol>
        </CRow>
        <CRow  xs={{ cols: 1}} sm={{ cols: 2}} md={{ cols: 5}} lg={{cols: 8}}>
          {starsList()}
        </CRow>
      </CContainer>
      
    </>
    
  )
  
}

export default Grid

/**
 * <div className="filterContainer">
        <div className="filterTopBtns">
          <CButton type="reset" shape="rounded-0" variant="outline" className="filterBtn" id="resetBtn" onClick={() => setShowAll(true)}>Reset</CButton>
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
        <CContainer>
          <CRow>
            {starsList()}
          </CRow>

        </CContainer>
        
      </div>
 */