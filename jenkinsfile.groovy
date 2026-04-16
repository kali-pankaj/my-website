pipeline {
    agent any

    stages {

        stage('Code Checkout') {
            steps {
                git url: "https://github.com/kali-pankaj/my-website.git", branch: "main"
                echo 'Code pull successful...'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t my-test-jenkins .
                    echo "Docker build success..."
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker stop my-container || true
                    docker rm my-container || true

                    docker run -d -p 8082:80 --name my-container my-test-jenkins
                    echo "Docker run success port=8082 "
                '''
            }
        }

    }
}