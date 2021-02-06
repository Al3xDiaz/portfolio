docker stop $(docker ps | grep "0.0.0.0:$1" | awk '{print $1}')
docker rm $(docker ps -a | grep "Exited" | awk '{print $1}')