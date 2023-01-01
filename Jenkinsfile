pipeline{
    agent any
    stages{
        stage('Test project') {
            steps {
                sh 'npm i'
                sh 'npm run build'
            }
        }
        stage("Prepare ansible for file transfer"){
            steps{
                sh 'sshpass -p "instagramclone-ansible" ssh root@43.204.45.242'
                sh 'sudo rm -rf /home/ubuntu/instagram_clone'
                sh 'sudo mkdir /home/ubuntu/instagram_clone'
                sh 'exit'
            }
        }
        stage('Send project files to ansible') {
            steps {
                sh 'sshpass -p "instagramclone-ansible" rsync -avh --exclude node_modules  /var/lib/jenkins/workspace/instagram_clone_dev/ root@43.204.45.242:/home/ubuntu/instagram_clone'
            }
        }
    }
}