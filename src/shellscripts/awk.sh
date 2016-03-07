#!/bin/bash

echo "starting awk.sh"

WEB_FILE=../../public/templates/awk.html
rm -f $WEB_FILE

echo "<hr><h1>awk 版本信息</h1><p><code>awk -W version</code></p>" >> $WEB_FILE
echo "<pre>$(awk -W version)</pre>" >> $WEB_FILE
