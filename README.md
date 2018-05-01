# di-landing
Domain Insurance - Landingpage

## Stage deploy 
  `aws s3 sync . s3://stage-domaininsure.com.au --exclude ".git/*" --dryrun --acl=public-read`

## Prod deploy
  `aws s3 sync s3://stage-domaininsure.com.au s3://domaininsure.com.au --dryrun --acl=public-read`

