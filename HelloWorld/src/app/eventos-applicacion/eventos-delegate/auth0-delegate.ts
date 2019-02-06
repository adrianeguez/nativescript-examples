const Auth0 = require('nativescript-auth0');

const aplicarAuth0Delegate = (EventosDelegate) => {
    EventosDelegate.apply('applicationOpenURLOptions', (event) => {
        return Auth0.resumeAuth(event.args.url, event.args.options);
    });
};
