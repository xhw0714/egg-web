module.exports = {
  error(message) {
    this.render('exception.tpl', { message })
  }
};