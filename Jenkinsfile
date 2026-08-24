pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Jenkins successfully read this file from GitHub!'
            }
        }

        stage('Windows Check') {
            steps {
                bat 'echo Jenkins is running'
            }
        }
    }
}
