#!/bin/bash

echo "starting df.sh"

WEB_FILE=../../public/templates/df.html
rm -f $WEB_FILE

echo "<p>主机名: <strong>$(hostname)</strong></p>" >> $WEB_FILE
echo "<p>检测时间: <strong>$(date)</strong></p>" >> $WEB_FILE

echo "<hr><h1>硬盘信息</h1><p><code>df -h</code></p>" >> $WEB_FILE
echo "<pre>$(df -h)</pre>" >> $WEB_FILE

echo "<hr><h1>内存信息</h1><p><code>free -m</code></p>" >> $WEB_FILE
echo "<pre>$(free -m)</pre>" >> $WEB_FILE

echo "<hr><h1>Kernel信息</h1><p><code>uname -a</code></p>" >> $WEB_FILE
echo "<pre>$(uname -a)</pre>" >> $WEB_FILE
