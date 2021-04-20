# Vuepress Keycloak Plugin
This vuepress plugin interact with Keycloak Auth Server to protect doc application
## Installation
```bash
yarn add vuepress-keycloak
```
or
```bash
npm install vuepress-keycloak --save
```
## Using
In your `.vuepress/config.js` project file, add `plugins` object with:
```javascript
plugins: [
    [
        keycloak, {
            name: 'vuepress-keycloak',
            url: 'KEYCLOAK_URL',
            realm: 'KEYCLOAK_REALM',
            clientId: 'KEYCLOAK_CLIENT_ID',
            onLoad: 'login-required'
        }
    ]
]
```

`KEYCLOAK_URL`, `KEYCLOAK_REALM` and `KEYCLOAK_CLIENT_ID` are defined in Gitlab CI/CD Variables Config