#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer --allow-hash-href --url-swap "www.exeterdramacompany.co.uk:" --alt-ignore '/.*/' ./_site