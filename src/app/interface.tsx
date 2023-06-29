export interface FetchWelcomeData {
	name: string;
	jobs: Job[];
	websites: Website[];
}

export interface Job {
	id: number;
	reference: string;
	name: string;
	slug: string;
	description: string;
	published_at: Date;
	created_at: CreatedAt;
	start_date?: CreatedAt;
	office: Office;
	offices: Office[];
	department: Department | null;
	contract_type: ContractType;
	profile: string;
	recruitment_process: string;
	salary: Salary;
	cms_sites_references: Reference[];
	websites_urls: WebsitesURL[];
}

enum Reference {
	Afxr = 'afxr',
	CzechCrunchShine = 'czech-crunch-shine',
	EdtechFrance = 'edtech-france',
	HubBpifrance = 'hub-bpifrance',
	Jobsforukrainefrance = 'jobsforukrainefrance',
	NUMAJobboard = 'numa-jobboard',
	Naaphii = 'naaphii',
	RaiseCo = 'raise-co',
	ReseauAlliancePaysage = 'reseau-alliance-paysage',
	ReseauEntreprendreParis = 'reseau-entreprendre-paris',
	Starther = 'starther',
	StationFJobBoard = 'station-f-job-board',
	Techcity = 'techcity',
	Wttj = 'wttj',
	WttjFr = 'wttj_fr',
	Xange = 'xange',
}

interface ContractType {
	fr: Fr;
	en: En;
	es: Es;
	cs: CS;
	sk: Sk;
}

enum CS {
	Jiné = 'Jiné',
	PlnýÚvazek = 'Plný úvazek',
	SmlouvaNaDobuUrčitou = 'Smlouva na dobu určitou',
	Stáž = 'Stáž',
}

enum En {
	FullTime = 'Full-Time',
	Internship = 'Internship',
	Other = 'Other',
	Temporary = 'Temporary',
}

enum Es {
	ContratoIndefinido = 'Contrato indefinido',
	ContratoTemporal = 'Contrato temporal',
	Otros = 'Otros',
	Prácticas = 'Prácticas',
}

enum Fr {
	Autres = 'Autres',
	CDDTemporaire = 'CDD / Temporaire',
	Cdi = 'CDI',
	Stage = 'Stage',
}

enum Sk {
	Iné = 'Iné',
	Stáž = 'Stáž',
	ZmluvaNaDobuNeurčitú = 'Zmluva na dobu neurčitú',
	ZmluvaNaDobuUrčitú = 'Zmluva na dobu určitú',
}

export interface CreatedAt {
	fr: string;
	en: string;
}

interface Department {
	id: number;
	name: string;
}

interface Office {
	id: number;
	name: City;
	address: Address;
	zip_code: string;
	district: City;
	city: City;
	country: CreatedAt;
}

enum Address {
	Anglická20 = 'Anglická 20 ',
	The24RueDuMailParis = '24, Rue du Mail, Paris',
}

enum City {
	Paris = 'Paris',
	Prague = 'Prague',
}

interface Salary {
	min: any;
	max: any;
	currency: string | null;
	period: string;
}

export interface WebsitesURL {
	website_reference: Reference;
	url: string;
}

interface Website {
	reference: Reference;
	kind: Kind;
	root_url: string;
	organization_url: string;
}

enum Kind {
	ExternalWttj = 'external_wttj',
	Multi = 'multi',
}
