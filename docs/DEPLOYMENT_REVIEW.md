# GitHub Pages release

The approved standalone source is published on `main`. `.github/workflows/pages.yml` builds and tests before deploying only `dist/`. Relative assets and hash navigation support `/vintra/` without a backend or routing rewrites.

## Cost controls

Public repository; standard `ubuntu-latest` runner only. No package installation, caches, paid APIs, external runtime requests, database or authentication provider. Temporary Pages artifact limited to one day and explicitly deleted after the deployment attempt. Build must remain below 2 MB. No larger runner or paid service is configured.

GitHub Pages is available for public repositories on GitHub Free. Pages limits include 1 GB published size and a soft 100 GB/month bandwidth limit. Standard public-repository Actions runners are free. These limits are not an unlimited capacity guarantee; pause and review if exceeded, never automatically upgrade.

Official references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/billing/concepts/product-billing/github-actions

## Release procedure

1. Build and execute all tests.
2. Scan approved files, screenshots and static output for private data and credentials.
3. Publish reviewed source to main. Set Pages source to GitHub Actions.
4. Confirm the deployment workflow succeeds and test the public site.

No private application code tree, Git history, database, records, uploads or credentials are included.
