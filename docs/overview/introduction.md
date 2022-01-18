# Introduction

The official viagogo API v2 connects your website or application with the
world’s largest ticket marketplace. Your application can use the API to search
for and view events, purchase tickets for an event or list tickets on the
viagogo platform.

All API access is over HTTPS, and accessed from the `api.viagogo.net` domain.
Request and response payloads are formatted as `application/hal+json`, which is
basically just plain old JSON with hyperlinks (see [Media Type](./media-type.md)).
We support [cross-origin resource sharing][cors] to allow you to interact
securely with our API from a client-side web application. [OAuth2][oauth2]
is used for all authentication. All API requests must be authenticated or you
will receive a `401 Unauthorized` error response (see
[Authentication](../authentication/index.md)).

Client libraries are [available in several languages](./libraries.md).

[cors]: http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[oauth2]: http://oauth.net/2/
