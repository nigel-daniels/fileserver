# fileserver
A simple backend for testing, serves file directories.

Create a directory called `upload` and place files to be served there.

Build the image using:


When using the docker image start it using:

`docker build -t fileserver .`

Run it using:

`docker run -d --network=bridge -p 3000:3000 --name fileserver fileserver`
