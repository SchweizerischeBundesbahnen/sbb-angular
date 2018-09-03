#!groovy

String cron_string = BRANCH_NAME == 'develop' ? '@midnight' : ''

pipeline {
  agent { label 'nodejs' }
  triggers { cron(cron_string) }

  stages {
    stage('Unit Tests') {
      when {
        not { branch 'develop' }
        not { branch 'master' }
      }
      steps {
        withCredentials([
            usernamePassword(
              credentialsId: 'browserstack',
              passwordVariable: 'BROWSER_STACK_ACCESS_KEY',
              usernameVariable: 'BROWSER_STACK_USERNAME')
          ]) {
          sh 'npm die'
          sh 'npm install'
          sh 'npm test'
          sh 'npm run lint'
        }
      }
    }

    stage('When on develop, analyze for sonar') {
      when {
        branch 'develop'
      }
      steps {
        withCredentials([
            usernamePassword(
              credentialsId: 'browserstack',
              passwordVariable: 'BROWSER_STACK_ACCESS_KEY',
              usernameVariable: 'BROWSER_STACK_USERNAME')
          ]) {
          withSonarQubeEnv('Sonar SBB CFF FFS AG') {
            sh 'npm install'
            sh 'npm test'
            sh 'npm run lint'
            sh 'npm run sonar'
          }
        }
      }
    }

    stage('When on master, we create a release') {
      when {
        branch 'master'
      }
      steps {
        script {
          sh 'npm install'
        }
      }
    }
  }

  post {
    regression {
      emailext(
        subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
        body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
          <p>See output in attachment.</p>""",
        attachLog: true,
        to: "lukas.spirig@sbb.ch")
    }

    failure {
      emailext(
        subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
        body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
          <p>See output in attachment.</p>""",
        attachLog: true,
        recipientProviders: 'culprits'
      )
    }

    fixed {
      emailext(
        subject: "FIXED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
        body: """<p>FIXED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
          <p>See output in attachment.</p>""",
        attachLog: true,
        to: "lukas.spirig@sbb.ch")
    }
  }
}
