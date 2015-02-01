# nodejs-microservice-aws-architecture


## Description

A repository where I put all my thoughts about a possible architecture that uses:

 * nodejs
 * AWS
 * microservices
 * go server

## Overview of what we have

A microservice is intended as a git repo and is generally a server listening on a specific port, exposing REST endpoints that let the user query its domain.

A Go server instance is taking care of the deployment phase, if this becomes cumbersome to use we can definitely replace that.

An HAProxy instance (two in reality but let's make this simple) are routing traffic to the servers.

All servers are managed by a CloudFormation script and are hosted on an EC2 instance.

# Challenges

HAProxy configuration needs to be updated each time a new server gets added or removed to the pool. We managed to have this setup in place without losing requests but as it is now it's cumbersome and could not be easily replicated in a small amount of time.

There's a deploy script that gets called from Go with the purpose of copying the code into the proper folder in the server, this has to be done each time, along with the Go server configuration which resembles it.

