pipeline {
  agent any
  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Run build') {
      steps {
        sh 'cd portafolio/'
        sh 'docker build --tag portafolio:latest .;'
      }
    }
    stage('Run Deploy') {
      steps {
        sh 'echo Run tests...'
        sh 'sudo docker stop $(sudo docker ps | sudo grep "0.0.0.0:3000" | sudo awk '{print $1}');'
        sh 'sudo docker rm $(sudo docker ps -a | sudo grep "Exited" | sudo awk '{print $1}');'
        sh 'sudo docker run -d --restart unless-stopped -p 3000:80 portafolio:latest;'
      }
    }
  }
}