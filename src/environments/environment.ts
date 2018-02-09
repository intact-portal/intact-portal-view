// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Environment for production
const EBI_BASE_URL = 'https://www.ebi.ac.uk/';

export const environment = {
  production: false,
  ebi_base_url: EBI_BASE_URL
};
