pipeline{
    agent any
    stages{
        stage('Test project') {
            steps {
                sh 'npm i'
                sh 'npm run build'
            }
        }
        // stage('Test') {
        //     steps {
        //         echo 'Testing..'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}