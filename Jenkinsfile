pipeline {
    agent any

    tools {
        maven 'maven' // Ensure Maven is installed on your Jenkins
        jdk 'jdk-17' // Ensure JDK 11 is installed on your Jenkins
    }

    environment {
        SONARQUBE_URL = 'http://localhost:9000' // Replace with your SonarQube server URL
        SONARQUBE_TOKEN = credentials('sonarqube-token') // Replace with your SonarQube token ID in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/garouache/Voiture.git' // Replace with your repository URL
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                dir('backend') {
                    withSonarQubeEnv('SonarQube') { // 'SonarQube' is the name of the SonarQube server configured in Jenkins
                        sh 'mvn sonar:sonar -Dsonar.host.url=$SONARQUBE_URL -Dsonar.login=$SONARQUBE_TOKEN'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    sh 'mvn test'
                }
            }
        }

        stage('Package') {
            steps {
                dir('backend') {
                    sh 'mvn package'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here, e.g., using SCP, FTP, or a specific Jenkins plugin
                echo 'Deploying application...'
            }
        }
    }

    post {
        always {
            junit '**/target/surefire-reports/*.xml'
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
        }
    }
}
