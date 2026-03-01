export type StatusType = "Active" | "Proposed" | "Under Construction" | "Cancelled" | "Suspended";
export type FuelType = "Natural Gas" | "Dual Fuel" | "Coal" | "Nuclear" | "Hydro" | "Wind" | "Solar" | "Storage";
export interface Generator { id: string; name: string; operator: string; fuelType: FuelType; capacityMW: number; status: StatusType; province: string; region: string; onlineYear?: number; retirementYear?: number; notes?: string; }
export const generators: Generator[] = [
  { id: "G001", name: "Cascade Power Plant", operator: "Cascade Power", fuelType: "Natural Gas", capacityMW: 900, status: "Active", province: "AB", region: "Central Alberta", onlineYear: 2023, notes: "Largest combined-cycle gas plant in Alberta" },
  { id: "G002", name: "Heartland Generation", operator: "Heartland Generation", fuelType: "Natural Gas", capacityMW: 756, status: "Active", province: "AB", region: "Edmonton", onlineYear: 1999 },
  { id: "G003", name: "Genesee Generating Station", operator: "Capital Power", fuelType: "Coal", capacityMW: 1380, status: "Active", province: "AB", region: "Edmonton", onlineYear: 1989, notes: "Unit 3 converting to gas" },
  { id: "G004", name: "Shepard Energy Centre", operator: "Capital Power / ENMAX", fuelType: "Natural Gas", capacityMW: 800, status: "Active", province: "AB", region: "Calgary", onlineYear: 2015 },
  { id: "G005", name: "Joffre Cogeneration", operator: "NOVA Chemicals", fuelType: "Natural Gas", capacityMW: 480, status: "Active", province: "AB", region: "Red Deer", onlineYear: 2000 },
  { id: "G006", name: "Balancing Pool Sundance", operator: "Balancing Pool", fuelType: "Natural Gas", capacityMW: 706, status: "Active", province: "AB", region: "Central Alberta", onlineYear: 1970 },
  { id: "G007", name: "Wolf Lake CCGT", operator: "Wolf Midstream", fuelType: "Natural Gas", capacityMW: 250, status: "Proposed", province: "AB", region: "Cold Lake", notes: "Proposed cogeneration for oil sands" },
  { id: "G008", name: "Battle River Generating Station", operator: "Capital Power", fuelType: "Coal", capacityMW: 660, status: "Active", province: "AB", region: "Central Alberta", onlineYear: 1969, retirementYear: 2026 },
  { id: "G009", name: "Keephills Generating Station", operator: "TransAlta", fuelType: "Coal", capacityMW: 780, status: "Active", province: "AB", region: "Edmonton", onlineYear: 1983, retirementYear: 2026 },
  { id: "G010", name: "Highvale Mine Power", operator: "TransAlta", fuelType: "Coal", capacityMW: 620, status: "Active", province: "AB", region: "Edmonton", onlineYear: 1976, retirementYear: 2026 },
  { id: "G011", name: "Pincher Creek Wind", operator: "TransAlta", fuelType: "Wind", capacityMW: 199, status: "Active", province: "AB", region: "Southern Alberta", onlineYear: 2001 },
  { id: "G012", name: "Bowmanton Solar", operator: "Enel Green Power", fuelType: "Solar", capacityMW: 200, status: "Active", province: "AB", region: "Eastern Alberta", onlineYear: 2022 },
  { id: "G013", name: "Travers Solar", operator: "Greengate Power", fuelType: "Solar", capacityMW: 465, status: "Active", province: "AB", region: "Southern Alberta", onlineYear: 2022, notes: "Largest solar project in Canada at commissioning" },
  { id: "G014", name: "Rattlesnake Ridge Wind", operator: "Capstone Infrastructure", fuelType: "Wind", capacityMW: 120, status: "Active", province: "AB", region: "Southern Alberta", onlineYear: 2013 },
  { id: "G015", name: "Invenergy CCGT Lethbridge", operator: "Invenergy", fuelType: "Natural Gas", capacityMW: 550, status: "Proposed", province: "AB", region: "Southern Alberta", notes: "Proposed peaker/dispatchable gas" },
];
export interface DataCenter { id: string; name: string; operator: string; location: string; province: string; capacityMW: number; status: StatusType; powerSource: string; onlineYear?: number; notes?: string; }
export const dataCenters: DataCenter[] = [
  { id: "DC001", name: "AWS Calgary Region (Proposed)", operator: "Amazon Web Services", location: "Calgary, AB", province: "AB", capacityMW: 300, status: "Proposed", powerSource: "Grid / Natural Gas", notes: "Rumored AWS expansion into Alberta" },
  { id: "DC002", name: "Microsoft Azure Edmonton", operator: "Microsoft", location: "Edmonton, AB", province: "AB", capacityMW: 200, status: "Proposed", powerSource: "Grid / Renewables", notes: "Part of Microsoft Canadian expansion" },
  { id: "DC003", name: "Shaw/Rogers Calgary DC", operator: "Rogers Communications", location: "Calgary, AB", province: "AB", capacityMW: 40, status: "Active", powerSource: "Grid", onlineYear: 2018 },
  { id: "DC004", name: "Aptum Technologies Calgary", operator: "Aptum", location: "Calgary, AB", province: "AB", capacityMW: 20, status: "Active", powerSource: "Grid", onlineYear: 2015 },
  { id: "DC005", name: "Evoque Calgary", operator: "Evoque Data Center Solutions", location: "Calgary, AB", province: "AB", capacityMW: 35, status: "Active", powerSource: "Grid", onlineYear: 2010 },
  { id: "DC006", name: "Telus Quaternary Calgary", operator: "TELUS", location: "Calgary, AB", province: "AB", capacityMW: 60, status: "Active", powerSource: "Grid / Natural Gas backup", onlineYear: 2020 },
  { id: "DC007", name: "Government of Alberta Data Hub", operator: "Service Alberta", location: "Edmonton, AB", province: "AB", capacityMW: 25, status: "Active", powerSource: "Grid", onlineYear: 2016 },
];
export interface Pipeline { id: string; name: string; operator: string; capacityMMcfd: number; lengthKm: number; status: StatusType; from: string; to: string; province: string; onlineYear?: number; notes?: string; }
export const pipelines: Pipeline[] = [
  { id: "P001", name: "NOVA Gas Transmission (NGTL) Main Line", operator: "TC Energy", capacityMMcfd: 14000, lengthKm: 25000, status: "Active", from: "BC/AB Border", to: "Alberta Distribution", province: "AB", onlineYear: 1954, notes: "Core Alberta gas transmission backbone" },
  { id: "P002", name: "TransCanada Mainline", operator: "TC Energy", capacityMMcfd: 9500, lengthKm: 14900, status: "Active", from: "Alberta", to: "Eastern Canada / US", province: "AB/SK/MB/ON", onlineYear: 1958 },
  { id: "P003", name: "Alliance Pipeline", operator: "Enbridge / Pembina", capacityMMcfd: 1600, lengthKm: 3858, status: "Active", from: "NE British Columbia / NW Alberta", to: "Chicago", province: "AB/SK", onlineYear: 2000 },
  { id: "P004", name: "Foothills Pipe Lines", operator: "TC Energy", capacityMMcfd: 3200, lengthKm: 1040, status: "Active", from: "Alberta", to: "US Border (Montana/Idaho)", province: "AB", onlineYear: 1981 },
  { id: "P005", name: "Enbridge Athabasca Pipeline", operator: "Enbridge", capacityMMcfd: 400, lengthKm: 538, status: "Active", from: "Fort McMurray", to: "Edmonton", province: "AB", onlineYear: 1999, notes: "Primarily diluent and NGL" },
];
export const lastUpdated = "2025-06-15";
export const dataVersion = "1.2.0";
