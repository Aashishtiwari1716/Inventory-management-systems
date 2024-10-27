A ready-to-use inventory management system with Node.js, Express, and Mongoose.

## Getting started
This project will run on **NodeJs** using **Mongoose** as database. 

## Software Requirements

- Node.js **8+**
- Mongoose **5.12** (Recommended **5+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/Aashishtiwari1716/Inventory-management-systems.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd projectFileName
npm i
```


## Project structure

```sh
.
├── app.js
├── package.json
├── .env
├── controllers
│   ├── product.controller.js
│   
├── models
│   ├── product.model.js
│   ├── brand.model.js
|   ├── category.model.js
|   ├─ store.model.js
├── routes
│   ├── product.router.js
├── middlewares
│   
├── helpers
├── service
│   ├── product.services.js
│   
└── views
    ├── index.pug
```

## How to run

### Running API server locally

```bash
nodemon app.js
```

