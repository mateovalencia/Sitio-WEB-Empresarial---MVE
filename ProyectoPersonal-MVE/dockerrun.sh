#!/bin/bash
sudo docker build -t webpagemateo .
sudo docker run -d -p 1000:80 webpagemateo