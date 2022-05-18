pipeline {
    agent any
    environment {
        PROJECT_ID = 'Angular_SpringBoot'
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
        stage('BuildAngular') {
            steps {
       
                    
					sh 'ng build'
           
            }
        }
        
    }    
}
