# pre

`npm install -D sass`

## articles feature

### get the key
go to `google console` --> `api's and services` --> `credentials` --> `create credentials` and make sure the key has the google sheets API selected (if not shown go and enable the API), then restrict the key to only the needed URL's (including maybe the local one as well)

### make the sheet

create the spreadsheet, set the general access to 'anyone with the link' and make sure its set to 'viewer'. also to grab its id, copy the string after /d/ in url


### deployment setup

create a file **_redirects** in /public with the following contents:
```
/*    /index.html   200
```

go to cloudflare dashboard --> workers & pages --> create application --> pages tab --> connect to git --> select the repo

fill in the form as follows:
- build command: npm run build
- deploy command: npm run build
- preview command: npm run preview


also add the domain in cloudflare and modify the nameservers in the registrar with the ones provided by cloudflare + update dns ssl/tls settings


# during

`npm run dev`

`npm run build`


# post

## deploy

just push the code to the repo and cloudflare will take it up from there

## others

any react dom \<Link\> tag should have the following:
`onMouseDown={(e) => e.preventDefault()}`
and
`draggable={false}` attributes as to not freeze the page on a long press... <small>weird bug</small>

^^^ actually it was just my browser apparently ;-P

^^^ and also it wasnt just ract dom \<Link\> tags but anything draggable like images and such







<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
