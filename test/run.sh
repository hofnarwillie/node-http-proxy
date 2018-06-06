#! /bin/bash

CURR_DIR=$(pwd)
THIS_DIR=$( cd $( dirname "${BASH_SOURCE[0]}" ) && pwd )
cd $THIS_DIR
function cleanup {
    cd $CURR_DIR
}
trap cleanup EXIT

docker-compose up --build --exit-code-from test
