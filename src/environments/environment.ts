// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Environment for production
const EBI_BASE_URL = 'https://www.ebi.ac.uk';
const INTACT_FTP_BASE_URL = 'ftp://ftp.ebi.ac.uk/pub/databases/intact';

export const environment = {
  production: false,
  ebi_base_url: EBI_BASE_URL,
  intact_psi25_url : INTACT_FTP_BASE_URL + '/current/psi25/pmid',
  intact_psi30_url : INTACT_FTP_BASE_URL + '/current/psi30/pmid',
  intact_psimitab_url : INTACT_FTP_BASE_URL + '/current/psimitab/pmid',
  intact_dotm_url: EBI_BASE_URL + '/~intact/site/dotm/dotm-1.1.xml',
  complex_portal_url: EBI_BASE_URL + '/complexportal',
  interactor_service_url: 'http://ves-hx-47:8081/intact/ws/interactor',
  interaction_service_url: 'http://ves-hx-47:8082/intact/ws/interaction'
};
