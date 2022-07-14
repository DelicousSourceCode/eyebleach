const filterList = []

/**
 * 
 * @param {string} text
 * @returns {string[]}
 */
function parseWords(text) {
  const words = text.split(' ')
  let detectedWords = []
  filterList.forEach(item => {
    if (words.includes(item)) {
      detectedWords.push(item)
    }
  })
  return detectedWords
}

/**
 * Main function for parsing banned words
 * @param {string} text Text to parse
 * @param {string} censor Optional - text that replaces filtered words, defaults to nothing
 */
export default (text, censor = '') => {
  const parsedWords = parseWords(text)
  parsedWords.forEach(word => {
    let len = (char) => char * word.length
  })
  return text
}

/**
 * Returns list of banned words
 * @returns {string} - Filter list
 */
export const getList = () => filterList
/**
 * 
 * @param {string} text 
 */
export const setListItem = (text) => filterList.push(text)
/**
 * Removes an item from the filter list
 */
export const deleteListItem = () => filterList.pop()