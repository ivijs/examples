build: build_snake build_10k build_dbmon build_uibench build_uibench_fc

build_snake:
	cd packages/apps/snake && yarn dist && yarn gh-publish

build_10k:
	cd packages/benchmarks/10k && yarn dist && yarn gh-publish

build_dbmon:
	cd packages/benchmarks/dbmon && yarn dist && yarn gh-publish

build_uibench:
	cd packages/benchmarks/uibench && yarn dist && yarn gh-publish

build_uibench_fc:
	cd packages/benchmarks/uibench_fc && yarn dist && yarn gh-publish
