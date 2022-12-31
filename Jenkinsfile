pipeline{
    agent any
    stages{
        stage('Test project') {
            steps {
                sh 'npm i'
                sh 'npm run build'
            }
        }
        stage('Send project files to ansible') {
            steps {
                sh 'rsync -avh /var/lib/jenkins/workspace/instagram_clone_dev/* root@3.110.62.23:/home/ubuntu/instagram_clone/'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}