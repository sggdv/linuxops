#!/bin/bash

echo "starting perm777.sh"

WEB_FILE=../../public/templates/perm777.html
rm -f $WEB_FILE

date >> $WEB_FILE
find . -type f -perm 777 >> $WEB_FILE
