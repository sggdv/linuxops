#!/bin/bash

echo "starting apache.sh"

WEB_FILE=../../public/templates/apache.html
rm -f $WEB_FILE

echo "<p>主机名: <strong>$(hostname)</strong></p>" >> $WEB_FILE
echo "<p>检测时间: <strong>$(date)</strong></p>" >> $WEB_FILE

echo "<hr><h1>版本信息</h1><p><code>service httpd -v</code></p>" >> $WEB_FILE
echo "<pre>$(service httpd -v)</pre>" >> $WEB_FILE

echo "<hr><h1>已加载的模块</h1><p><code>service httpd -M</code></p>" >> $WEB_FILE
echo "<pre>$(service httpd -M)</pre>" >> $WEB_FILE
