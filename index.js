class Formatter {
  static capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string) {
    return (string.replace(/[^a-zA-Z0-9\-\'\ ]/g, ""))

  }

  static titleize (string ) {
    const exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // create an array of the sentence
    const words = string.split(" ")
    // iterate through array
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exception.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word.toLowerCase()
      }
    })
    // check condition if in expection list
    // or first word
    // call function to capitalize
    return titleizedWords.join(" ")
    // change array back to string.
  }
}

Formatter.titleize( "where the wild things are" )
