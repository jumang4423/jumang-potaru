#!/bin/bash
rm -rf pkg/ && rm ../static/potaru*
wasm-pack build
cp pkg/* ../static/