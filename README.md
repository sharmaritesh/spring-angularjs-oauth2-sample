# Spring, AngularJS and OAuth2 sample

An extension to Dave Syer's effort on integrated Spring security, OAuth2 and AngularJS article.
https://spring.io/blog/2015/02/03/sso-with-oauth2-angular-js-and-spring-security-part-v

Areas extended
1. Seperate(seperate deployables) auth and resource servers.
2. Role based access to resources
3. check_token api integration
4. JWT is not used


# How to run 

On each module, execute `mvn clean install exec:java` (on different console)
