function propCheck(propName = "") {
  return !!this.props[propName];
}

module.exports = propCheck;
