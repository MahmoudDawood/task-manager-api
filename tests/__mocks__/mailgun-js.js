module.exports = function (apiKey, domain) {
    const message = {
        send () {

        }
    }
    const send = {
        messages() {
            return message
        }
    }

    return send
}