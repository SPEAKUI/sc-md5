build:
	@npm install
	@./node_modules/.bin/mocha

clean:
	@rm -rf node_modules

release:
	@make clean
	@make build

.PHONY: build clean release