brewski
=======

App similar to untapped, but with a recommendation engine

Docker Containers
=================

###Building All Containers

```
./build-containers.sh
```

###Building the API Container

```
docker build -t jterry/brewski-api ./api
```

###Building the Web Container

```
docker build -t jterry/brewski-web ./web
```

###Running All Containers

```
./run-containers.sh
```

This will start the api container with port mapping 8080:8080, and will start the web container with port mapping 8081:8081, with API_URL configured as http://localhost:8080. 

###Running API Container

```
docker run -d --name api -p 8080:8080 jterry/brewski-api
```

###Running Web Container

```
docker run -d -e "API_URL=http://localhost:8080" --name web -p 8081:8081 jterry/brewski-web
```

If you are using boot2docker, then you need to replace localhost in the API_URL with the IP address of the boot2docker VM. Alternatively, you can add 8080:8080 port mappings to the boot2docker VM.

###Running in Web Browser

```
http://localhost:8081
```

If you're using boot2docker, this will only work if you have configured the port mapping for the boot2docker VM to expose ports 8080 and 8081.

If you're using boot2docker, you can use the IP address of the boot2doccker VM. However, for this to work, the run commaon for starting the web container needs to be modified as well, adding -e "API_URL=http://b2d_ip:8080" where b2d_ip is the ip address of the boot2docker VM.