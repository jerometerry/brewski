docker run -d --name api -p 8080:8080 jterry/brewski-api

# If you're running boot2docker, replace localhost with the boot2docker VM ip address,
# or add port mappings 8080:8080 8081:8081 to the boot2docker VM in VirtualBox
docker run -d --name web -p 8081:8081 -e "API_URL=http://localhost:8080" jterry/brewski-web