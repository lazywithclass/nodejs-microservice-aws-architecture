# nodejs-microservice-aws-architecture


## Description

A repository where I put all my thoughts about a possible architecture that uses:

 * nodejs
 * AWS
 * microservices
 * go server

## Overview of what we have

### Nodejs servers

Nodejs servers should each run a single instance of a microservice, a microservice is intended as a git repo and is generally a server listening on a specific port, exposing REST endpoints that let the user query its domain, data is queried from a dynamodb instance.

From now on I will use the term microservice intending a single nodejs server that runs the right amount of code needed for a single task.

### Continuous deployment server

A Go server instance is taking care of the deployment phase, which contains 

* testing
* tagging - so that we can fetch the latest version when a new microservice is coming up, where version is just the value of the special variable `$GO_PIPELINE_LABEL`
* deploying - where we `scp` the code to the microservice

### Load balancing

An HAProxy instance (two in reality but let's keep it simple) is routing traffic to the microservices.

### Servers management

All microservices are managed by a CloudFormation script and are hosted on EC2 instances.

# Challenges

HAProxy configuration needs to be updated each time a new microservice gets added or removed to the pool. We managed to have this setup in place without losing requests but as it is now it's cumbersome and could not be easily replicated in a small amount of time.

We have two distinct ways of getting the code on the microservice

 * by pushing it during a deploy
 * by fetching it when a new server comes up

This probably leads to duplication and unneeded complexity, we might want to have this as one process.
Also there's the Go server configuration that has to be done each time for a new deploy process.
