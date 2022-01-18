# Inventory Management API

A RESTful API with a visual dashboard that allows users to Create, Edit, Delete, and View a list of inventory items.

## Bonus Feature

Users are able to add deletion comments when deleting items. As well as re-activate any items deleted.

## Getting Started

- Make sure the latest version of Node and NPM installed installed
- Fork and clone the project
- Enter into the project folder

```bash
cd backend-inventory-management
```

- Install all dependecies

```bash
npm install
```

- Start up the server

```bash
npm start
```

- Visit localhost:8080 in the browser to interact with the app

## To Add Additional Resources & Features

### New Features for Items Resource

- extend the itemsRoutes with the relevant API endpoint
- extend the itemsController with the logic to handle the endpoint
- extend the itemsModel with logic to manipulate "database" and provide requeted data

### New Resources

- create a new route file in routes folder
  - import the file into server.js for us
- create a new resource controller file with logic to handle CRUD operations
- create a new resources models file with logic to handle database requests

## Dependencies

- Tachyons
- EJS
- Express
- Node
- NPM
