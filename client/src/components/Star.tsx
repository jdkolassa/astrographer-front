import React from 'react';
import { CCard, CCardBody, CCardSubtitle, CCardTitle, CListGroup, CListGroupItem } from '@coreui/react';

import { IStar } from '../models/IStar';


const Star = (props: IStar) => {

    const {name, otherNames, GJ, HD, HIP, distance, hue, luminosity, spectralType} = props;

    /**
     * * Stars can have many names: a proper "name", catalogue numbers, and alternate names from history and different cultures. Proper and other names take priority, followd by Gliese, HD, and then HIP numbers.
     * @param {string} [name] - proper name of star, if exists
     * @param {string[]} [otherNames] - other names the star has been called
     * @param {number} [GJ] - Gliese catalogue number, only nearby stars
     * @param {number} [HD] - Henry Draper catalogue number
     * @param {number} [HIP] - Hipparcos catalogue number
     * @returns {string | string[]} - The star name(s) 
     */

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

    /**
     * @returns {Star}
     */

  return (
    <CCard className="starCard" id={name}>
        <CCardBody className={`drawBox `}>
          <div className={`star ${hue} ${luminosity}`}>

          </div>
        </CCardBody>
        <CCardBody>
          {nameDisplay()}
          <CListGroup flush>
            <CListGroupItem>Spectral Type: {spectralType}</CListGroupItem>
            <CListGroupItem>Distance: {distance} ly</CListGroupItem>
          </CListGroup>
        </CCardBody>
        
    </CCard>
  )
}

export default Star;