export interface IStar {
    _id: string | number, // this will be the id in the MongoDB store
    name?: string, // Not all stars will have names, but they should if they don't have a HIP number
    otherNames?: string[], // any other names the star has
    GJ?: number, // Gliese Catalogue number, used for nearby stars
    HD?: number, // Henry Draper Catalogue number
    HIP?: number, // Hipparcos Catalogue number, used for many stars
    distance: number, // In lightyears from Earth
    hue: [SpectralClasses, number], // We'll use the first two parts to determine the color
    luminosity: LuminosityClasses, // We'll use this for determining the star size
    spectralType: string, // we're probably going to want the full spectralType for ease of use
}

/**
 * These are the specific classes we'll work with on this site. There are a handful of others
 * but they're sufficiently rare that we don't have to worry about them.
 */  
export enum SpectralClasses {
    O = "O",
    B = "B",
    A = "A",
    F = "F",
    G = "G",
    K = "K",
    M = "M",
    L = "L",
    T = "T",
    Y = "Y",
    D = "D",
    S = "S",
    C = "C",
    W = "W"
}

// Yerkes luminosity classes
export enum LuminosityClasses {
    "Hypergiant" = "0",
    "Luminous Supergiant" = "Ia",
    "Intermediate Supergiant" = "Iab",
    "Less Luminous Supergiant" = "Ib",
    "Bright giant" = "II",
    "Giant" = "III",
    "Subgiant" = "IV",
    "Main-Sequence Star (dwarf)" = "V",
    "Subdwarf" = "VI",
    "White dwarf" = "VII"
}

export interface Multiple {
    name: string,
    distance: number,
    members: IStar[],
}