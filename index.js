class Formatter {
  static capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string) {
    return (string.replace(/[^a-zA-Z0-9\-\'\ ]/g, ""))

  }

  static titleize (string ) {
    const exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(" ")
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exception.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word.toLowerCase()
      }
    })
    return titleizedWords.join(" ")
  }
}
