# Creating a Electron project with Angular and FSharp-Library

## Install Angular if neccessary

```npm install -g @angular/cli```

 Create a new githup repository named ```electron-tutorial```. Don't check in anything at the moment.

## Create a new Angular project 

Start Visual Sudio Code, open a console, navigate to the projects folder, run the following command:
```ng new electron-tutorial --skip-tests```

Now open the newly created folder ```electron-tutorial``` in Visual Studio Code. Delete folder ```e2e``` and file ```karma.conf.js```. Test the project by typing ```ng serve --open```

## Publish repository

In console, enter 

```git remote add origin https://github.com/uriegel/electron-tutorial.git```

Now publish branch: open Source Control View in Visual Studio Code, menu item ```Publish Branch``` 

## Install electron

```npm i -D electron```

create a new folder ```electron``` for electron related files:
* tsconfig.json
* main.ts

### Compiling

add main in main section of package.json

```"main": "electron/dist/main.js",```

Add electron item in script section of package.json

```"electron": "ng build --base-href ./ && tsc --p electron && electron ."```

## Running app
In console, enter 

```npm run electron```