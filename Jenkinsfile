pipeline {
    agent any

    tools {
        nodejs 'Node-LTS'
    }

    stages {
        stage('Check Node.js') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Build Application') {
            steps {
                bat 'call npm run build'
            }
        }

        stage('Test Application') {
            steps {
                bat 'call npm test'
            }
        }
    }

    post {
        success {
            echo 'Node.js application build and test completed successfully.'
        }

        failure {
            echo 'Build failed. Check Console Output.'
        }
    }
}
