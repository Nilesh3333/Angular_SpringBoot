pipeline {
    agent any
    environment {
        PROJECT_ID = 'swe642'
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
        stage('BuildAngular') {
            steps {
            	dir(' ') {
                    
					sh 'ng build'
            	}
            }
        }
        
    }    
}