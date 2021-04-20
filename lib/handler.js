const Keycloak = require('keycloak-js')
const { OPTIONS } = require('@dynamic/vuepress-keycloak');

module.exports = ({
    isServer
}) => {
    if (isServer) return;

    const keycloak = Keycloak({
        ...OPTIONS
    })

    keycloak.init({
        onLoad: OPTIONS.onLoad
    }).then((auth) => {
        if (!auth) {
            window.location.reload()
        } else {
            console.info("AUTH OK")
        }
    }).catch((err) => {
        console.error(`AUTH FAILED ::${err}`)
    })

}