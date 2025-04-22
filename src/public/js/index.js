/**
 * 
 * @param {string?} selector 
 * @returns {HTMLElement}
 */
export const $ = (selector = 'body') => document.querySelector(selector)

export const stringToBool = (string) =>  string === 'true';