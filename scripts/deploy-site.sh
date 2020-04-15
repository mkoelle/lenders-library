alias aws="aws2"
user="$USER"
region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

s3_bucket_key='lenders-library-content-bucket'

set -x

bucket=$(aws cloudformation list-exports --query "Exports[?Name=='${s3_bucket_key}'].Value" --output text)

aws s3 sync ../dist s3://${bucket}