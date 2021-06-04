pipeline {
  agent any
  options {
    timeout(time: 5, unit: 'MINUTES')
  }

  stages {
    stage('Run build') {
      steps {
        sh 'echo Build...'
        sh 'sh portafolio/down.sh 3000'
        sh 'docker build --tag portafolio:latest portafolio;'
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