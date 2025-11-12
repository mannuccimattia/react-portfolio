// src/utils/paths.js

/**
 * Determina il prefisso di base per gli asset e le chiamate fetch 
 * in base all'URL corrente (per gestire /staging).
 */
const isStaging = window.location.pathname.includes('/staging');
export const BASE_PATH = isStaging ? '/staging' : '';