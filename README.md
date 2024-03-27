# prism-ton

🔺 Maintained set of TON blockchain programming language definitions for Prism.js

* ⚡ Tact — https://tact-lang.org
* 💎 FunC — https://docs.ton.org/develop/func/overview
* 📚 Fift — https://docs.ton.org/develop/fift/overview
* 📄 TL-B — https://docs.ton.org/develop/data-formats/tl-b-language

## Initialization

Upon cloning this repo, invoke the following commands in order of appearance (but just once!):

1. `yarn prism:init` — initializes the prismjs/prism submodule and installes it's dependencies
2. `yarn prism:links` — creates all the necessary symbolic links from local files to the prismjs/prism submodule
3. `yarn prism:build` — builds all the grammars and everything there is in prismjs/prism

## Layout

Grammar files are located in `langs/X` files, where `X` can be one of:

* `prism-tact.js` — Tact grammar
* `prism-func.js` — FunC grammar
* `prism-fift.js` — Fift grammar
* `prism-tlb.js` — TL-B grammar

Test files are located in `tests/X` folders, where `X` can be one of:

* `tact` — Tact tests
* `func` — FunC tests
* `fift` — Fift tests
* `tlb` — TL-B tests

## Running tests

[Once initialized](#initialization), you'll be able to run tests for each language in this repo, namely:

* `yarn test-tact` will run tests for Tact
* `yarn test-func` will run tests for FunC
* `yarn test-fift` will run tests for Fift
* `yarn test-tlb` will run tests for TL-B

And `yarn test` runs all those tests in succession.

## Workflow

The workflow looks like this:

1. Add changes to the grammar
2. Add/update tests
3. Execute and modify tests until they pass :)
4. Commit & push
5. Make PRs to:
  * ton-community/ton-docs
  * tact-lang/tact-docs
  * TelegramMessenger/libprisma

## TODO

* [ ] Github Actions checks akin to ones in prismjs/prism
* [ ] Pre-push hooks with mandatory builds & tests -> push shall be stopped in case of errors

## Credits

Based on [The Open Network](https://ton.org).

Made & maintained with 🤍 by [Novus Nota](https://github.com/novusnota).

## License

[MIT](LICENSE)
