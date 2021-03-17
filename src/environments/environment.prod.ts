// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Environment for production
const EBI_BASE_URL = 'https://wwwdev.ebi.ac.uk/';
const EBI_URL = 'https://www.ebi.ac.uk';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const INTACT_FTP_BASE_URL = 'https://ftp.ebi.ac.uk/pub/databases/intact/';
const INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/';
// TODO inject the context path programmatically.
// No trailing bar
const CONTEXT_PATH = '/intact/beta'

export const environment = {
  production: true,
  evn: 'prod',

  // analytics_id: 'UA-XXXXXX-XX',
  ebi_base_url: EBI_BASE_URL,
  ebi_url: EBI_URL,
  context_path: CONTEXT_PATH,
  license_url: LICENSE_URL,
  intact_psi25_url : INTACT_FTP_BASE_URL + '/current/psi25',
  intact_psi30_url : INTACT_FTP_BASE_URL + '/current/psi30',
  intact_psimitab_url : INTACT_FTP_BASE_URL + '/current/psimitab/pmid',
  intact_dotm_url: EBI_BASE_URL + '/~intact/site/dotm/dotm-1.1.xml',
  intact_portal_url: EBI_BASE_URL + '/intact',
  intact_portal_support_url: EBI_BASE_URL + 'support/intact',
  intact_training_url: EBI_BASE_URL + 'intact/resources/training',
  intact_portal_ws: EBI_BASE_URL + 'intact/test/ws',
  // todo remove it when all the ws are mapped to www.ebi.ac.uk/intact/ws
  intact_portal_graph_ws: EBI_URL + '/intact/ws',
  intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL

};
