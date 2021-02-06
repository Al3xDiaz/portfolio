pipeline {
  agent any
  options {
    timeout(time: 5, unit: 'MINUTES')
  }

  stages {
    stage('Run build') {
      steps {
          sh 'echo $USER'
          sh 'docker build --tag portafolio:latest portafolio;'
      }
    }
     stage('stop container') {
      steps {
        sh 'sh portafolio/down.sh 3000'
      }
    }
    stage('Run Deploy') {
      steps {
        sh 'echo Run deploy...'
        sh 'docker run -d --restart unless-stopped -p 3000:80 portafolio:latest'
      }
    }
  }
}