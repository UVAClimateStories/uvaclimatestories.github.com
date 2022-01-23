cd $(dirname ${BASH_SOURCE[0]})
open -a Safari http://localhost:4000
make clean
docker compose -f docker-compose-auto.yml up --build
