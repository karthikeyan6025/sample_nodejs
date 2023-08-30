pipeline {
    agent any
     
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', changelog: false, credentialsId: 'e3aac561-e58b-484f-9b01-fb0fb07550d2', poll: false, url: 'https://github.com/karthikeyan6025/sample_nodejs.git'
            }
        }
        stage('Listing the content') {
            steps {
                sh '''pwd
                       ls -al
                       cat Dockerfile
                    '''
            }
        }
}
}
