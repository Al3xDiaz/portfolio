# $1 : password de Docker hub
# $2 : Usuario de docker hub
# $3 : puerto que se desea deshabilitar
# $4 : nombre de la imagen en docker hub
echo $1 | sudo docker login -u $2 --password-stdin;
sudo docker pull al3xleonel/$4:latest;
sudo docker stop $(sudo docker ps | sudo grep "0.0.0.0:$3" | sudo awk '{print $1}');
sudo docker rm $(sudo docker ps -a | sudo grep "Exited" | sudo awk '{print $1}');
sudo docker run -d --restart unless-stopped -p $3:80 $2/$4:latest;
