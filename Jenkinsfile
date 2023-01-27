pipeline{
    agent any
    stages{
        stage('Test project') {
            steps {
                sh 'npm i'
                sh 'npm run build'
                sh 'pm2 --name instagram_clone start npm -- start'
            }
        }
        stage("Prepare ansible for file transfer"){
            steps{
                sh 'ssh root@172.31.5.1'
                sh 'sudo rm -rf /home/ubuntu/instagram-clone'
                sh 'sudo mkdir /home/ubuntu/instagram-clone'
                sh 'exit'
                sh 'rsync -avh --exclude node_modules  /var/lib/jenkins/workspace/instagram-clone/ root@172.31.5.1:/home/ubuntu/instagram-clone'
            }
        }      
        stage('Prepare docker image on ansible'){
            steps{
                script{
                    def remote = [:]
                    remote.name = 'ansible-server'
                    remote.host = '172.31.5.1'
                    remote.user = 'root'
                    remote.password = 'instagramclone'
                    remote.allowAnyHosts = true
                    stage('Build docker image') {
                        sshCommand remote: remote, command: '''
                            cd /home/ubuntu/instagram-clone
                            docker compose -f docker-compose.yaml -f docker-compose.dev.yaml build
                        '''
                    }
                    stage('Push image to docker hub') {
                        sshCommand remote: remote, command: '''
                            docker tag instagram_clone:0.0.2 yash6370/instagram-clone
                            echo dckr_pat_9sKgLA6xTn4A9uhR4pzQjo1-x2g | docker login -u yash6370 --password-stdin
                            docker push yash6370/instagram-clone
                        '''
                    }
                    stage('Logout from docker hub'){
                        sshCommand remote: remote, command: 'docker logout'
                    }
                }
            }
        }
        stage('Run project'){
            steps{
                script{
                    def remote = [:]
                    remote.name = 'ansible-server'
                    remote.host = '172.31.5.1'
                    remote.user = 'root'
                    remote.password = 'instagramclone'
                    remote.allowAnyHosts = true
                    stage('Setup nodes') {
                        sshCommand remote: remote, command: 'ansible-playbook /etc/ansible/playbooks/setup-nodes.yaml'
                    }
                    stage('Start docker') {
                        sshCommand remote: remote, command: 'ansible-playbook /etc/ansible/playbooks/run-project.yaml'
                    }
                }
            }
        }
    }
}