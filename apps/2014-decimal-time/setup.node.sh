#!/bin/bash

echo "Installing NVM"
apt-get -y install build-essential libssl-dev git-core curl


echo "Installing Node via NVM..."
export HOME=/home/vagrant
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash
source ~/.nvm/nvm.sh

nvm install 0.11.14
nvm use 0.11.14
nvm alias default 0.11.14


echo "Install popular node packages"
npm install -g yo
npm install -g karma-cli
npm install -g bower
npm install -g mocha
npm install -g grunt-cli
