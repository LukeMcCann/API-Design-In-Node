# Infrastructure
INFRASTRUCTURE_COMPOSE_FILE=infrastructure/docker-compose.yml
DATABASE_COMPOSE_FILE=infrastructure/db/docker-compose.yml

# CV Builder
CV_BUILDER_API_COMPOSE_FILE=services/app/api/docker-compose.yml

.PHONY: all infra app networks dev stop api

all: networks app infra

dev: networks app
	docker-compose -f $(DATABASE_COMPOSE_FILE) up --build -d

app: networks
	cd services/app/api && yarn install
	docker-compose -f $(CV_BUILDER_API_COMPOSE_FILE) up --build -d

api: networks
	cd services/app/api && yarn install
	docker-compose -f $(CV_BUILDER_API_COMPOSE_FILE) up --build -d
	docker-compose -f $(DATABASE_COMPOSE_FILE) up --build -d

infra: networks
	docker-compose -f $(DATABASE_COMPOSE_FILE) up --build -d
	docker-compose -f $(INFRASTRUCTURE_COMPOSE_FILE) up --build -d

networks:
	docker network create microservice-network
	docker network create app-network

stop:
	docker-compose -f $(CV_BUILDER_API_COMPOSE_FILE) down
	docker-compose -f $(INFRASTRUCTURE_COMPOSE_FILE) down
	docker-compose -f $(DATABASE_COMPOSE_FILE) down
	docker network rm microservice-network || true
	docker network rm app-network || true