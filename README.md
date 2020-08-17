# AirBee&Bee Description + Amenities Module

> Repo contains a full-stack module for displaying the description & amenities sections (plus additional amenities modal) for each AirBee&Bee listing.

## Related Services

  - https://github.com/AirBee-Bee/photo-carousel
  - https://github.com/AirBee-Bee/checkin-checkout
  - https://github.com/AirBee-Bee/reviews

## Proxy Server for All Services

  - https://github.com/AirBee-Bee/description-amenities-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> After installing dependencies, follow these steps to get the app up and running.

```sh
mysql.server start
mysql
mysql source database/schema.sql
npm run seed
npm run build
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Axios 0.19.2
- Express 4.17.1
- Faker 4.1.0
- MySQL 2.18.1
- React 16.13.1
- React DOM 16.13.1
- React Modal 3.11.2
- Styled Components 5.1.1

## Development

- @babel/core 7.11.1
- @babel/preset-env 7.11.0
- @babel/preset-react 7.10.4
- babel-jest 26.3.0
- babel-loader 8.1.0
- cli 1.0.1
- css-loader 4.2.1
- enzyme 3.11.0
- enzyme-adapter-react-16 1.15.3
- eslint 7.2.0
- eslint-config-airbnb 18.2.0
- eslint-plugin-import 2.22.0
- eslint-plugin-jsx-a11y 6.3.1
- eslint-plugin-react 7.20.5
- eslint-plugin-react-hooks 4.0.0
- jest 26.3.0
- jest-cli 26.3.0
- jest-enzyme 7.1.2
- jsdom 16.4.0
- jsdom-global 3.0.2
- nodemon 2.0.4
- react-test-renderer 16.13.1
- style-loader 1.2.1
- supertest 4.0.2
- webpack 4.44.1
- webpack-cli 3.3.12

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

