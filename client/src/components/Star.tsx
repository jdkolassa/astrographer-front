import React from 'react';
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CListGroup, CListGroupItem } from '@coreui/react';

import { LuminosityClasses, SpectralClasses, IStar } from '../models/IStar';


const Star = (props: IStar) => {

    const {name, HIP, distance, hue, subclass, luminosity} = props;

    function assembleColorCode(hue: SpectralClasses, subclass: number) {
      // Trying to calculate with "5.5" classes is going to be hella-annoying
      // So let's make sure we only use the subclass BEFORE the decimal
      let subClean = String(subclass.toFixed(0));
      return hue.concat(subClean);
    }

    function assembleSpect(hue: SpectralClasses, subclass: number, luminosity: LuminosityClasses) {
        // First cast the values to strings
        let hueString = String(hue);
        let subcString = String(subclass);
        let lumosString = String(luminosity);
        // Then, let's concatenate them into a proper spectral classification
        return hueString.concat(subcString, lumosString);
    }

    const Spect = assembleSpect(hue, subclass, luminosity);
    const ColorCode = assembleColorCode(hue, subclass);

    const nameDisplay = () => {
      if(name === undefined && HIP !== undefined) {
        return <CCardTitle>HIP {HIP}</CCardTitle>
      } else if (name !== undefined && HIP === undefined) {
        return <CCardTitle>{name}</CCardTitle>
      } else if (name !== undefined && HIP !== undefined) {
        return (
          <>
            <CCardTitle>{name}</CCardTitle>
            <CCardSubtitle>HIP {HIP}</CCardSubtitle>
          </>
        )
      }
    }

    // TODO: Figure out how to turn the spectral class into an actual color for the card border


  return (
    <CCard className="starCard" id={name}>
        <CCardBody className={`drawBox ${hue} ${subclass} ${luminosity}`}>
          <div className={`star ${ColorCode}`}>

          </div>
        </CCardBody>
        <CCardBody>
          {nameDisplay()}
          <CListGroup flush>
            <CListGroupItem>Spectral Type: {Spect}</CListGroupItem>
            <CListGroupItem>Distance: {distance}</CListGroupItem>
          </CListGroup>
        </CCardBody>
        
    </CCard>
  )
}

export default Star;