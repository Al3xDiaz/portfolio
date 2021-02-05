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
        sh 'sudo docker run -d --restart unless-stopped -p 3000:80 portafolio:latest;'
      }
    }
  }
}