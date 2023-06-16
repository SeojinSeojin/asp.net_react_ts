I simply modified all .js files into ts, of the template dotnet gave by `dotnet new react -o {ProjectName}`

## How to use

### pre-requirements

**1. Download dotnet CLI**

[MAC](https://formulae.brew.sh/cask/dotnet)

```sh
brew install --cask dotnet
```

**2. Download node.js (16+)**

### how to run app

**1. get client app node_modules**

```sh
cd ClientApp
```

```sh
npm install
```

**2. run dotnet app**

```sh
dotnet run
```

## Warnings

there are still codes written by js in `src/ClientApp`. So i added this line in `tsconfig.json`. It might cause some tricky error.

```json
{
  "compilerOptions": {
    ...,
    "jsx": "preserve"
  }
}
```
