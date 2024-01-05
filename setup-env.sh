#!/bin/bash
echo "in setup env - amplify"

rm .env
rm .env.local
#set env
echo REACT_APP_ENV=$REACT_APP_ENV >> .env
echo REACT_APP_ENV=$REACT_APP_ENV >> .env.local

function get_parameter {
    ENV_VAR_NAME=$1
    SSM_PARAM_NAME="$2"
    
    echo "Getting parameter $SSM_PARAM_NAME from SSM parameter store if it exists and setting into the variable $ENV_VAR_NAME"
    
    SSM_VALUE=`aws ssm get-parameters --with-decryption --names "${SSM_PARAM_NAME}"  --query 'Parameters[*].Value' --output text`

    echo $ENV_VAR_NAME=$SSM_VALUE >> .env
    echo $ENV_VAR_NAME=$SSM_VALUE >> .env.local
}



if [[ -z "${APPWRITE_SERVER_API_KEY}" ]];
then
    get_parameter APPWRITE_SERVER_API_KEY /staging/internal/apwrite/apikey
fi

if [[ -z "${APPWRITE_ENDPOINT}" ]];
then
    get_parameter APPWRITE_ENDPOINT /$REACT_APP_ENV/internal/apwrite/endpoint
fi

if [[ -z "${APPWRITE_PROJECT_ID}" ]];
then
    get_parameter APPWRITE_PROJECT_ID /$REACT_APP_ENV/internal/apwrite/projectid
fi
