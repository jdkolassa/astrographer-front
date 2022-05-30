import React from 'react';
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CListGroup, CListGroupItem } from '@coreui/react';

import { LuminosityClasses, SpectralClasses, Star as StarProps } from '../models/Star';
import Graph from './Graph';


const Star = (props: StarProps) => {

    const {name, HIP, distance, hue, subclass, luminosity} = props;

    function assembleSpect(hue: SpectralClasses, subclass: number, luminosity: LuminosityClasses) {
        // First cast the values to strings
        let hueString = String(hue);
        let subcString = String(subclass);
        let lumosString = String(luminosity);
        // Then, let's concatenate them into a proper spectral classification
        return hueString.concat(subcString, lumosString);
    }

    const Spect = assembleSpect(hue, subclass, luminosity);

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
          <Graph hue={hue} luminosity={luminosity}/>
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