#ALL COMMAND FOR DEV MODE ONLY
docker-up: docker-down npm-install
	docker compose -f docker-compose-dev.yml up --build
  

docker-down:
	docker compose -f docker-compose-dev.yml stop
	docker compose -f docker-compose-dev.yml down

node-console:
	docker compose -f docker-compose-dev.yml exec  node sh -c "/bin/bash"
  
db-migrate:
	docker compose -f docker-compose-dev.yml exec  node sh -c "npx prisma migrate dev --name init"

npm-install:
	docker compose -f docker-compose-dev.yml  run --user $(shell id -u):$(shell id -g)  node sh -c "npm i"







