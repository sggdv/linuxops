#!/bin/bash

for file in `ls | awk '{if($0!="main.sh") print $0}'`
do
	./$file
done 
