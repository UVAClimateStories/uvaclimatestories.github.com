cd $(dirname ${BASH_SOURCE[0]})
make clean
git add -A
git commit -m "Changes."
git push
