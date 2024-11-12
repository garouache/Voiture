pipeline {
    agent any
    environment {
        SONARQUBE_URL = 'http://localhost:9000'
        SONAR_TOKEN = 'your_generated_token' // Remplace par ton token SonarQube
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh './mvn clean install' // Utilise cette commande si Maven Wrapper est configuré dans ton projet
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo 'Running SonarQube Analysis...'
                sh "./mvn sonar:sonar -Dsonar.projectKey=my-project -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.login=${SONAR_TOKEN}"
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
                sh 'docker build -t LocationVoiture .' // Remplace `my-spring-app` par le nom de ton application
            }
        }
    }
    post {
        always {
            echo 'Pipeline terminé'
        }
    }
}
