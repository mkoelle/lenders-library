alias aws="aws2"
user="$USER"
region='us-east-1'
export AWS_DEFAULT_REGION=$region
export AWS_REGION=$region

hosted_zone_domain='shadow.mkoelle.com'
hosted_zone_export_key='shadow-mkoelle-com-id'

set -x

hosted_zone_id=$(aws cloudformation list-exports --query "Exports[?Name=='${hosted_zone_export_key}'].Value" --output text)

aws cloudformation deploy \
  --region ${region} \
  --template-file cfn/infra.yaml \
  --stack-name lenders-library \
  --parameter-overrides \
    HostedZoneId=${hosted_zone_id} \
    HostedZoneDomain=${hosted_zone_domain} \
  --tags \
      mkoelle:team=mkoelle \
      mkoelle:product=lenders-library \
      mkoelle:createdBy=${user}
