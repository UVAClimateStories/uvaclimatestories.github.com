cd $(dirname ${BASH_SOURCE[0]})
make clean
rm -rf _site
rm -rf .sass-cache
git add -A
git commit -m "Changes."
git push
