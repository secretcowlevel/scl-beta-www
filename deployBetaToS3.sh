#!/bin/bash

# copy the assets folder to the right place and set headers/permissions
aws s3 sync ./beta s3://doomtroopergame.com/betaTest \
	--region us-west-1 \
	--grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers \

# invalidate the cloudfront cache
aws cloudfront create-invalidation --distribution-id E1G3NK2TUN5MU1 \
  --paths /betaTest/*
