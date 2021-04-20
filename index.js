const path = require('path');

module.exports = (options, context) => ({
    enhanceAppFiles: [path.resolve(__dirname, 'handler.js')],
    clientDynamicModules: () => ({
        name: 'vuepress-pulse-keycloak',
        content: `export const OPTIONS = ${JSON.stringify(options)}`,
    }),
});