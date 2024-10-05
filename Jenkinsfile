pipeline {
    agent any
    tools {
        nodejs "NodeJS 20.11.1"
    }
    stages {
        stage('Checkout Source Code') {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/sar-custom/wicket-watchers.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                
                sh 'cd frontend && npm install'
            }
        }
        stage('Build Project') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sshagent(credentials:['ssh_jenkins']) {
                    sh 'scp -o StrictHostKeyChecking=no -r /var/lib/jenkins/workspace/wicketwatchers.in/frontend/dist/* root@193.203.161.155:/home/wicketwatchers.in/public_html/'
                    sh 'ssh -o StrictHostKeyChecking=no root@193.203.161.155 "chown -R wicketwatchers.in:wicketwatchers.in /home/wicketwatchers.in/public_html"'
                }
            }
        }
    }
    post {
        always {
            script {
                def buildStatus = currentBuild.result ?: 'UNKNOWN'
                emailext(
                    attachLog: true,
                    body: '''The build for ${JOB_NAME} (${BUILD_NUMBER}) has finished with status: ${buildStatus}
You can access the build details here: download attachment
Attached are the build logs for your reference.
''',
                    compressLog: true,
                    recipientProviders: [developers()],
                    replyTo: 'sandip.more@sarcustomize.in',
                    subject: "Jenkins Build - ${JOB_NAME} - ${buildStatus}",
                    to: 'sandip.more@sarcustomize.in, jenkins@sarcustomize.in'
                )
            }
        }
    }
}
