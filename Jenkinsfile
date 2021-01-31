pipeline {
  agent any
  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'echo Install dependencies...'
        sh 'echo Install dependencies succefull!!!'
      }
    }
    stage('Run tests') {
      steps {
        sh 'echo Run tests...'
      }
    }
    stage('Run Deploy') {
      steps {
        sh 'echo Run tests...'
      }
    }
  }
}