# NextJS Starter by Runroom
[![Runroom. We think. We do. We connect.](https://private-user-images.githubusercontent.com/1675045/301127464-5f88a3a9-c7e2-45b4-b5db-355a9ca93537.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY2OTczMDIsIm5iZiI6MTcwNjY5NzAwMiwicGF0aCI6Ii8xNjc1MDQ1LzMwMTEyNzQ2NC01Zjg4YTNhOS1jN2UyLTQ1YjQtYjVkYi0zNTVhOWNhOTM1MzcucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDEzMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAxMzFUMTAzMDAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjlmYzI2ZGViOTNiMzI5MzdmOWI1YThiZDMwYzM3YmVhNzU0ZjIwYTQyOTMwMmJkN2IyZDlmOTQxZTExOTJjZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.DmIAXn-LCcYgZRxfBO15L35KepuhZcrEV1pJrOC9ZGo)](https://runroom.com)

[![CI](https://github.com/Runroom/starter-next-js/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/Runroom/starter-next-js/actions/workflows/ci.yaml)

## Setting up your local repo
This starter uses **NPM** to manage dependencies and **Node version >= 20** to be executed. In order to clone and start it you can use this following commnads in your local machine:

```bash
git clone git@github.com:Runroom/starter-next-js.git
cd starter-next-js
npm install
```

This will leave everything ready to checkout your localhost starter site. To run your localhost environment you can use the following commands:

```bash
npm run build
```

After this command execution **you can access** `http://localhost:3000` with your browser and see the initial page.


## Local Development
When developing with this starter you can the following command to **enable a development environment** and **live reload** to see your code changes instantly affecting the frontend:

```bash
# Run a NextJS server and checkout http://localhost:3000/
npm run dev
# Run a test server with Mock Service Workers
npm run dev:test
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Local Development with Docker
We have created a basic Docker config to enable local development environment as well. You can see all options listed in `.docker/makefile` and run the following command to use it:

```bash
# Run a Docker server and checkout http://localhost:3000/
make
```

## Running tests
We have added this short commands to run unit and end to end testing than you can use:

```bash
# Run all Unit testing with Vitest
npm run test
# Run all End to End testing with Cypress
npm run e2e:dev:test
```

## Contribution
We are **happy to receive contributions** to this starter. If you want to contribute you can follow the next steps:

- Fork this repository
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create a new Pull Request

Also [we are keeping track of issues for this project here](https://github.com/Runroom/starter-next-js/issues), feel free to check them or **contribute and help us** with any of them.

## License

This starter is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits

This starter is based on [Runroom/starter-next-js](https://github.com/Runroom/starter-next-js).

---
## Runroom ♥

[Runroom is a software development company](https://runroom.com) based in Barcelona. We are a team of passionate developers and designers that create memorable experiences for your customers.

### More open Source Projects made at Ruroom:
* [Stooa](https://github.com/Stooa): The free & open source fishbowl solution, where online unconference events happen.
