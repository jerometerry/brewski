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

###Building the Wweb Container

```
docker build -t jterry/brewski-web ./web
```

###Running API Container

```
docker run -d --name api -p 8080:8080 jterry/brewski-api
```

###Running Web Container

```
docker run -d -e "API_URL=http://localhost:8080" --name web -p 8081:8081 jterry/brewski-web
```

If you are using boot2docker, then you need to replace localhost in the API_URL with the IP address of the boot2docker VM. Alternatively, you can add 8080:8080 port mappings to the boot2docker VM.