#!/bin/bash
rm -rf ../static/potaru* && wasm-pack build && cp pkg/potaru* ../static/