test:
	npm run test:unit

ci:
	npm run test:unit
	./node_modules/coveralls/bin/coveralls.js < coverage/lcov.info
