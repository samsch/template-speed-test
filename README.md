[Measurement tool](https://github.com/rakyll/hey)

Run command:

`~/go/bin/hey -c $C -z 5s http://localhost:3400/$T`

Where "$C" is the concurrency (1, 5, 50, 500), and "$T" is the templating engine route (`pug`, `hyperscript`, `react`, `preact`).

Each test is run twice, using the results from the second test.

## Requests per second

Higher is better

Concurrency | Pug | Hyperscript | React | Preact
-- | -- | -- | -- | --
1 | 12951 | 3855 | 10324 | 9867
5 | 20813 | 4619 | 15808 | 15419
50 | 20176 | 4516 | 15180 | 15232
500 | 18850 | 4400 | 13831 | 13480

## Average Response time / Slowest Response time (in seconds)

Lower is better

Concurrency | Pug | Hyperscript | React | Preact
-- | -- | -- | -- | --
1 | 0.0001 / 0.0008 | 0.0003 / 0.0032 | 0.0001 / 0.0028 | 0.0001 / 0.0026
5 | 0.0002 / 0.0011 | 0.0011 / 0.0132 | 0.0003 / 0.0053 | 0.0003 / 0.0035
50 | 0.0025 / 0.0225 | 0.0110 / 0.0426 | 0.0033 / 0.0727 | 0.0033 / 0.0091
500 | 0.0265 / 0.2686 | 0.1117 / 0.3339 | 0.0360 / 0.3014 | 0.0369 / 0.2951

## Setting up the app

Install the project dependencies with from a terminal by running `npm install`.

The source and built templates are both committed, but if you make changes to the .jsx files, you can rebuild with `npm run build` (starts with --watch, so it will rebuild as well).

## Running the server

To run the server, run `npm start`.

For development, run `npm run dev`. This will use nodemon to restart the server when files change.
