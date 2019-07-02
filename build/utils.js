const {
    NODE_ENV
} = process.env
function devMode() {
    return NODE_ENV === 'development'
}

module.exports = {
    devMode
}
