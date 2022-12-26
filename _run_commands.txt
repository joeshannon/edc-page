jekyll s -H 0.0.0.0 -P 8080 --livereload

Access:
$(hostname -I):<port>

`docker run --rm --volume="$PWD:/srv/jekyll" -p=4000:4000 -it jekyll/jekyll:3  jekyll serve`


`podman run -it --rm --name jekyll   -v $PWD:/srv/jekyll:rw,slave,Z   -v ./vendor:/usr/local/bundle:rw,slave,Z   --publish 4001:4000   -e JEKYLL_UID=$UID   -e JEKYLL_GID=$UID   docker.io/jekyll/jekyll:3.8.5 jekyll s --livereload`
