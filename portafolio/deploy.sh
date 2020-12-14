mkdir ~/.ssh
touch ~/.ssh/known_hosts
echo "Deploy..."
echo "$key"> ~/.ssh/key.pem
ssh-keyscan -t ecdsa $DEPLOY_HOST >> ~/.ssh/known_hosts
chmod 400 ~/.ssh/key.pem
ssh -i "~/.ssh/key.pem"  $DEPLOY_USER@$DEPLOY_HOST "sh ~/up.sh $DOCKER_PASS $DOCKER_USER 80 portafolio";
echo Y | rm ~/.ssh/key.pem
rm -r ~/.ssh
echo "Deploy success!!! you are awesome."