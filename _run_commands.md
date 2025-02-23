jekyll s -H 0.0.0.0 -P 8080 --livereload

Access:
$(hostname -I):<port>

```
podman run --rm -it --network=host --security-opt label=disable -v $PWD:$PWD ruby:3.3.4 /bin/bash
cd <wd>
bundle install
bundle exec jekyll s
```

