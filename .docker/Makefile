APPLICATION_NAME ?= starter-frontend-app

UID ?= $(shell id -u)
GID ?= $(shell id -g)

DOCKER_COMPOSE = docker compose --file .docker/docker-compose.yaml --project-name $(APPLICATION_NAME)
DOCKER_EXEC = $(DOCKER_COMPOSE) exec app

default: build up
.PHONY: default

build-msw: msw up
.PHONY: build-msw

build:
	$(DOCKER_COMPOSE) build --build-arg UID=$(UID) --build-arg GID=$(GID)
.PHONY: build

msw:
	$(DOCKER_COMPOSE) build --build-arg UID=$(UID) --build-arg GID=$(GID) --build-arg MSW=1
.PHONY: msw

up:
	$(DOCKER_COMPOSE) up --wait
.PHONY: up

halt:
	$(DOCKER_COMPOSE) stop
.PHONY: halt

destroy:
	$(DOCKER_COMPOSE) down --remove-orphans --volumes
.PHONY: destroy

ps:
	$(DOCKER_COMPOSE) ps
.PHONY: ps

ssh:
	$(DOCKER_EXEC) /bin/ash
.PHONY: ssh
