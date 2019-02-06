
import * as jwksRsa from 'jwks-rsa';
import * as jwt from 'express-jwt';

export const checkJwt = jwt({
    // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://aso-arco-backend.auth0.com/.well-known/jwks.json'
    }),
    issuer: 'https://aso-arco-backend.auth0.com/',
    algorithms: ['RS256']
});