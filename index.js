class Formatter {
  static capitalize(string) {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string) {
    return (string.replace(/[^a-zA-Z0-9\-\'\ ]/g, ""))

  }
}

Formatter.sanitize( "ca$@#tching cold" )
