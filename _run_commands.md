jekyll s -H 0.0.0.0 -P 8080 --livereload

Access:
$(hostname -I):<port>

```
podman run --rm -it --network=host --security-opt label=disable -v $PWD:$PWD -w $PWD ruby:$(cat .ruby-version) /bin/bash
bundle install
bundle exec jekyll s
```

