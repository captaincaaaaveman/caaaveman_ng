Caaaveman
=========

To deploy to GitHub pages:

```
npm run deploy
```

This builds as prod with base-href set and then pushes to GitHub. 

```json
    "deploy": "ng build --env=prod --base-href https://captaincaaaaveman.github.io/caaaveman/ && angular-cli-ghpages --branch gh-pages"
```

The GitHub Pages site is set to be built from the gh-pages branch.  (HitHub project settings)

Application is then visible via [GitHub Pages for project caaaveman](https://captaincaaaaveman.github.io/caaaveman/)