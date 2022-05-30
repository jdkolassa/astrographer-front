export interface Star {
    name?: string,
    HIP?: number,
    distance: number,
    hue: SpectralClasses,
    subclass: number,
    luminosity: LuminosityClasses,
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
    members: Star[],
}