# netflix-clone-vuejs

Create netflix clone with VueJs 3.

Front-end only, no back-end

## Project Setup

```sh
npm install
```

### Get API Key for themoviedb.org

The project use the api of themoviedb for got all the movies data (image, title, description, ...).

Create an account on the website: https://www.themoviedb.org/

Validate your account with the account verification email

Click on your user image and go to 'Settings'

Go to the API section an generate a new API key (you have to follow the instructions)

### Use you API Key

You have to store API Key on the project for get all the movies data.

Create a file call 'apikey.js' on the path : src > api > apikey.js

On this file add the line bellow and replace YOUR_API_KEY by your API Key
```sh
export default { API_KEY: 'YOUR_API_KEY' };
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
