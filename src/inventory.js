import _ from 'lodash';

const inventory = [
	{
		"id": "1",
		"name": "Nest",
		"description": "Programmable WiFi Thermostat 3 Heat 2 Cool (HP/AC) 3rd Gen Stainless Steel Ring",
		"price": "207",
		"category": "Thermostats"
	},
	{
		"id": "2",
		"name": "iComfort S30",
		"description": "Lennox iComfort S30 Ultra Smart Programmable Thermostat",
		"price": "458",
		"category": "Thermostats"
	},
	{
		"id": "3",
		"name": "T6 Pro 2/2",
		"description": "Honeywell T6 Pro Programmable Thermostat 2 Heat 1 Cool (HP) 2 Heat 2 Cool (AC)",
		"price": "84.4",
		"category": "Thermostats"
	},
	{
		"id": "4",
		"name": "T6 Pro 1/1",
		"description": "Honeywell T6 Pro Programmable Thermostat 2 Heat 1 Cool (HP) 1 Heat 1 Cool (AC)",
		"price": "62.53",
		"category": "Thermostats"
	},
	{
		"id": "5",
		"name": "CS7500",
		"description": "Lennox CS7500 Comfortsense 7500 Universal Programmable Thermostat",
		"price": "154",
		"category": "Thermostats"
	},
	{
		"id": "6",
		"name": "Merv 11 16x25",
		"description": "Healthy Climate HCF16-11 16 in. x 25 in. x 5 in. Replacement Filter MERV 11",
		"price": "21.31",
		"category": "Filtration"
	},
	{
		"id": "7",
		"name": "Merv 16 16x25",
		"description": "Healthy Climate HCF16-16 16 in. x 25 in. x 5 in. Carbon Clean Replacement Filter MERV 16",
		"price": "95.61",
		"category": "Filtration"
	},
	{
		"id": "8",
		"name": "Merv 11 20x25",
		"description": "Healthy Climate HCF16-16 16 in. x 25 in. x 5 in. Carbon Clean Replacement Filter MERV 16",
		"price": "22.97",
		"category": "Filtration"
	},
	{
		"id": "9",
		"name": "Merv16 20x25",
		"description": "Healthy Climate HCF20-16 20 in. x 25 in. x 5 in. Carbon Clean Replacement Filter MERV 16",
		"price": "111",
		"category": "Filtration"
	},
	{
		"id": "10",
		"name": "PCO16-28",
		"description": "Healthy Climate PureAir LB-113713B Annual Maintenance Kit for PCO16-28",
		"price": "177",
		"category": "IAQ"
	},
	{
		"id": "11",
		"name": "PCO20-28",
		"description": "Healthy Climate PureAir LB-113713A Annual Maintenance Kit for PCO20-28",
		"price": "186",
		"category": "IAQ"
	},
	{
		"id": "12",
		"name": "PCO316-16",
		"description": "Healthy Climate PureAir 612988-02 Annual Maintenance Kit for PCO3-16-16",
		"price": "127",
		"category": "IAQ"
	},
	{
		"id": "13",
		"name": "PCO320-16",
		"description": "Healthy Climate PureAir 612988-01 Annual Maintenance Kit for PCO3-20-16",
		"price": "127",
		"category": "IAQ"
	},
	{
		"id": "14",
		"name": "16 in. PureAir",
		"description": "Healthy Climate PureAir PCO3-16-16 Air Purification System",
		"price": "638",
		"category": "IAQ"
	},
	{
		"id": "15",
		"name": "20 in. PureAir",
		"description": "Healthy Climate PureAir PCO3-20-16 Air Purification System",
		"price": "638",
		"category": "IAQ"
	},
	{
		"id": "16",
		"name": "1/6Hp 1075/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3727",
		"price": "54.89",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "17",
		"name": "1/4Hp 1075/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3728",
		"price": "52.25",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "18",
		"name": "1/3Hp 1075/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3729",
		"price": "54.76",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "19",
		"name": "1/2Hp 1075/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3730",
		"price": "62.96",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "20",
		"name": "3/4Hp 1075/1 208-230V 1Ph Ball Cond Mtr",
		"description": "PP3731",
		"price": "77.44",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "21",
		"name": "1/6Hp 825/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3403",
		"price": "72.63",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "22",
		"name": "1/4Hp 825/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3404",
		"price": "83.03",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "23",
		"name": "1/3Hp 825/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3405",
		"price": "86.49",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "24",
		"name": "1/2Hp 825/1 208-230V 1Ph Slv Cond Mtr",
		"description": "PP3746",
		"price": "91.04",
		"category": "Condenser Fan Motors"
	},
	{
		"id": "25",
		"name": "5 Mfd 370V Oval Cap",
		"description": "PPS5370OV",
		"price": "1.37",
		"category": "Capacitors"
	},
	{
		"id": "26",
		"name": "7.5 Mfd 370V Oval Cap",
		"description": "PPS75370OV",
		"price": "1.56",
		"category": "Capacitors"
	},
	{
		"id": "27",
		"name": "10 Mfd 370V Oval Cap",
		"description": "PPS10370OV",
		"price": "1.81",
		"category": "Capacitors"
	},
	{
		"id": "28",
		"name": "12.5 Mfd 370V Oval Cap",
		"description": "PPS125370OV",
		"price": "2.09",
		"category": "Capacitors"
	},
	{
		"id": "29",
		"name": "15 Mfd 370V Oval Cap",
		"description": "PPS15370OV",
		"price": "2.16",
		"category": "Capacitors"
	},
	{
		"id": "30",
		"name": "3 Mfd 440V Oval Cap",
		"description": "PPS3440OV",
		"price": "1.65",
		"category": "Capacitors"
	},
	{
		"id": "31",
		"name": "4 Mfd 440V Oval Cap",
		"description": "PPS4440OV",
		"price": "1.7",
		"category": "Capacitors"
	},
	{
		"id": "32",
		"name": "5 Mfd 440V Oval Cap",
		"description": "PPS5440OV",
		"price": "1.67",
		"category": "Capacitors"
	},
	{
		"id": "33",
		"name": "10 Mfd 440V Oval Cap",
		"description": "PPS10440OV",
		"price": "2.16",
		"category": "Capacitors"
	},
	{
		"id": "34",
		"name": "12.5 Mfd 440V Oval Cap",
		"description": "PPS125440OV",
		"price": "2.44",
		"category": "Capacitors"
	},
	{
		"id": "35",
		"name": "15 Mfd 440V Oval Cap",
		"description": "PPS15440OV",
		"price": "2.81",
		"category": "Capacitors"
	},
	{
		"id": "36",
		"name": "20 Mfd 440V Oval Cap",
		"description": "PPS20440OV",
		"price": "3.48",
		"category": "Capacitors"
	},
	{
		"id": "37",
		"name": "25 Mfd 440V Oval Cap",
		"description": "PPS25440OV",
		"price": "4",
		"category": "Capacitors"
	},
	{
		"id": "38",
		"name": "30 Mfd 440V Oval Cap",
		"description": "PPS30440OV",
		"price": "4.38",
		"category": "Capacitors"
	},
	{
		"id": "39",
		"name": "35 Mfd 440V Oval Cap",
		"description": "PPS35440OV",
		"price": "4.79",
		"category": "Capacitors"
	},
	{
		"id": "40",
		"name": "40 Mfd 440V Oval Cap",
		"description": "PPS40440OV",
		"price": "5.14",
		"category": "Capacitors"
	},
	{
		"id": "41",
		"name": "45 Mfd 440V Oval Cap",
		"description": "PPS45440OV",
		"price": "5.5",
		"category": "Capacitors"
	},
	{
		"id": "42",
		"name": "50 Mfd 440V Oval Cap",
		"description": "PPS50440OV",
		"price": "6.26",
		"category": "Capacitors"
	},
	{
		"id": "43",
		"name": "5 Mfd 440V Round Cap",
		"description": "PPS5440RD",
		"price": "1.74",
		"category": "Capacitors"
	},
	{
		"id": "44",
		"name": "7.5 Mfd 440V Round Cap",
		"description": "PPS75440RD",
		"price": "1.9",
		"category": "Capacitors"
	},
	{
		"id": "45",
		"name": "10 Mfd 440V Round Cap",
		"description": "PPS10440RD",
		"price": "2.77",
		"category": "Capacitors"
	},
	{
		"id": "46",
		"name": "20 Mfd 440V Round Cap",
		"description": "PPS20440RD",
		"price": "3.22",
		"category": "Capacitors"
	},
	{
		"id": "47",
		"name": "20/5 Mfd 440V Round Cap",
		"description": "PPS520440RD",
		"price": "5.31",
		"category": "Capacitors"
	},
	{
		"id": "48",
		"name": "25 Mfd 440V Round Cap",
		"description": "PPS25440RD",
		"price": "3.71",
		"category": "Capacitors"
	},
	{
		"id": "49",
		"name": "25/5 Mfd 440V Round Cap",
		"description": "PPS525440RD",
		"price": "8.6",
		"category": "Capacitors"
	},
	{
		"id": "50",
		"name": "30/5 Mfd 440V Round Cap",
		"description": "PPS530440RD",
		"price": "7.32",
		"category": "Capacitors"
	},
	{
		"id": "51",
		"name": "30/7.5 Mfd 440V Round Cap",
		"description": "PPS7530440RD",
		"price": "5.26",
		"category": "Capacitors"
	},
	{
		"id": "52",
		"name": "35 Mfd 440V Round Cap",
		"description": "PPS35440RD",
		"price": "3.87",
		"category": "Capacitors"
	},
	{
		"id": "53",
		"name": "35/5 Mfd 440V Round Cap",
		"description": "PPS535440RD",
		"price": "6.86",
		"category": "Capacitors"
	},
	{
		"id": "54",
		"name": "35/7.5 Mfd 440V Round Cap",
		"description": "PPS7535440RD",
		"price": "6.98",
		"category": "Capacitors"
	},
	{
		"id": "55",
		"name": "35/10 Mfd 440V Round Cap",
		"description": "PPS1035440RD",
		"price": "8.02",
		"category": "Capacitors"
	},
	{
		"id": "56",
		"name": "40 Mfd 440V Round Cap",
		"description": "PPS40440RD",
		"price": "4.88",
		"category": "Capacitors"
	},
	{
		"id": "57",
		"name": "40/5 Mfd 440V Round Cap",
		"description": "PPS540440RD",
		"price": "10.07",
		"category": "Capacitors"
	},
	{
		"id": "58",
		"name": "40/7.5 Mfd 440V Round Cap",
		"description": "PPS7540440RD",
		"price": "7.48",
		"category": "Capacitors"
	},
	{
		"id": "59",
		"name": "40/10 Mfd 440V Round Cap",
		"description": "PPS1040440RD",
		"price": "6.54",
		"category": "Capacitors"
	},
	{
		"id": "60",
		"name": "45 Mfd 440V Round Cap",
		"description": "PPS45440RD",
		"price": "4.88",
		"category": "Capacitors"
	},
	{
		"id": "61",
		"name": "45/5 Mfd 440V Round Cap",
		"description": "PPS545440RD",
		"price": "7.37",
		"category": "Capacitors"
	},
	{
		"id": "62",
		"name": "45/7.5 Mfd 440V Round Cap",
		"description": "PPS7545440RD",
		"price": "8.53",
		"category": "Capacitors"
	},
	{
		"id": "63",
		"name": "45/10 Mfd 440V Round Cap",
		"description": "PPS1045440RD",
		"price": "7.38",
		"category": "Capacitors"
	},
	{
		"id": "64",
		"name": "50 Mfd 440V Round Cap",
		"description": "PPS50440RD",
		"price": "5.54",
		"category": "Capacitors"
	},
	{
		"id": "65",
		"name": "50/5 Mfd 440V Round Cap",
		"description": "PPS550440RD",
		"price": "7.56",
		"category": "Capacitors"
	},
	{
		"id": "66",
		"name": "50/7.5 Mfd 440V Round Cap",
		"description": "PPS7550440RD",
		"price": "8.64",
		"category": "Capacitors"
	},
	{
		"id": "67",
		"name": "55 Mfd 440V Round Cap",
		"description": "PPS55440RD",
		"price": "7",
		"category": "Capacitors"
	},
	{
		"id": "68",
		"name": "55/5 Mfd 440V Round Cap",
		"description": "PPS555440RD",
		"price": "7.54",
		"category": "Capacitors"
	},
	{
		"id": "69",
		"name": "55/7.5 Mfd 440V Round Cap",
		"description": "PPS7555440RD",
		"price": "9.25",
		"category": "Capacitors"
	},
	{
		"id": "70",
		"name": "55/10 Mfd 440V Round Cap",
		"description": "PPS1055440RD",
		"price": "7.43",
		"category": "Capacitors"
	},
	{
		"id": "71",
		"name": "60 Mfd 440V Round Cap",
		"description": "PPS60440RD",
		"price": "7.6",
		"category": "Capacitors"
	},
	{
		"id": "72",
		"name": "60/5 Mfd 440V Round Cap",
		"description": "PPS560440RD",
		"price": "8.64",
		"category": "Capacitors"
	},
	{
		"id": "73",
		"name": "60/7.5 Mfd 440V Round Cap",
		"description": "PPS7560440RD",
		"price": "8.11",
		"category": "Capacitors"
	},
	{
		"id": "74",
		"name": "60/10 Mfd 440V Round Cap",
		"description": "PPS1060440RD",
		"price": "8.72",
		"category": "Capacitors"
	},
	{
		"id": "75",
		"name": "65 Mfd 440V Round Cap",
		"description": "PPS65440RD",
		"price": "6.91",
		"category": "Capacitors"
	},
	{
		"id": "76",
		"name": "65/5 Mfd 440V Round Cap",
		"description": "PPS565440RD",
		"price": "6.93",
		"category": "Capacitors"
	},
	{
		"id": "77",
		"name": "65/7.5 Mfd 440V Round Cap",
		"description": "PPS7565440RD",
		"price": "7.2",
		"category": "Capacitors"
	},
	{
		"id": "78",
		"name": "65/10 Mfd 440V Round Cap",
		"description": "PPS1065440RD",
		"price": "7.02",
		"category": "Capacitors"
	},
	{
		"id": "79",
		"name": "70 Mfd 440V Round Cap",
		"description": "PPS7044RD",
		"price": "16.68",
		"category": "Capacitors"
	},
	{
		"id": "80",
		"name": "70/5 Mfd 440V Round Cap",
		"description": "PPS570440RD",
		"price": "10.28",
		"category": "Capacitors"
	},
	{
		"id": "81",
		"name": "70/7.5 Mfd 440V Round Cap",
		"description": "PPS7570440RD",
		"price": "8.67",
		"category": "Capacitors"
	},
	{
		"id": "82",
		"name": "70/10 Mfd 440V Round Cap",
		"description": "PPS1070440RD",
		"price": "8.81",
		"category": "Capacitors"
	},
	{
		"id": "83",
		"name": "80 Mfd 440V Round Cap",
		"description": "PPS80440RD",
		"price": "12.03",
		"category": "Capacitors"
	},
	{
		"id": "84",
		"name": "80/5 Mfd 440V Round Cap",
		"description": "PPS58044RD",
		"price": "11.1",
		"category": "Capacitors"
	},
	{
		"id": "85",
		"name": "80/7.5 Mfd 440V Round Cap",
		"description": "PPS7580440RD",
		"price": "17.19",
		"category": "Capacitors"
	},
	{
		"id": "86",
		"name": "80/10 Mfd 440V Round Cap",
		"description": "PPS1080440RD",
		"price": "9.17",
		"category": "Capacitors"
	},
	{
		"id": "87",
		"name": "1-3 Ton Compressor Saver",
		"description": "CSR-U-1",
		"price": "26.87",
		"category": "Compressor Savers"
	},
	{
		"id": "88",
		"name": "3-5 Ton Compressor Saver",
		"description": "CSR-U-2",
		"price": "32.58",
		"category": "Compressor Savers"
	},
	{
		"id": "89",
		"name": "4-5 Ton Compressor Saver",
		"description": "CSR-U-3",
		"price": "37.13",
		"category": "Compressor Savers"
	},
	{
		"id": "90",
		"name": "Universal Hard Start Kit 115-230V",
		"description": "ICM866U",
		"price": "37.17",
		"category": "Hard Start Kits"
	},
	{
		"id": "91",
		"name": "Kickstart To5 Hardstart 1-3 Ton",
		"description": "96503",
		"price": "31.7",
		"category": "Hard Start Kits"
	},
	{
		"id": "92",
		"name": "Kickstart Ks-1 Hardstart 3.5-5 Ton",
		"description": "96506",
		"price": "33.67",
		"category": "Hard Start Kits"
	},
	{
		"id": "93",
		"name": "1P 30A 24V Contactor",
		"description": "PPCON1P30A24V",
		"price": "6.59",
		"category": "Single Pole Contactors"
	},
	{
		"id": "94",
		"name": "1P 30A 120v Contactor",
		"description": "PPCON1P30A120",
		"price": "6.43",
		"category": "Single Pole Contactors"
	},
	{
		"id": "95",
		"name": "1P 40A 24V Contactor",
		"description": "PPCON1P40A24V",
		"price": "8.42",
		"category": "Single Pole Contactors"
	},
	{
		"id": "96",
		"name": "2P 30A 24V Contactor",
		"description": "PPCON2P30A24V",
		"price": "8.69",
		"category": "2 Pole Contactors"
	},
	{
		"id": "97",
		"name": "2P 30A 120V Contactor",
		"description": "PPCON2P30A120",
		"price": "8.09",
		"category": "2 Pole Contactors"
	},
	{
		"id": "98",
		"name": "2P 30A 240V Contactor",
		"description": "PPCON2P30A240",
		"price": "8.09",
		"category": "2 Pole Contactors"
	},
	{
		"id": "99",
		"name": "2P 40A 24V Contactor",
		"description": "PPCON2P40A24V",
		"price": "9.5",
		"category": "2 Pole Contactors"
	},
	{
		"id": "100",
		"name": "3P 30A 24V Contactor",
		"description": "PPCON3P30A24V",
		"price": "15.08",
		"category": "3 Pole Contactors"
	},
	{
		"id": "101",
		"name": "3P 30A 240V Contactor",
		"description": "PPCON3P30A240",
		"price": "16.36",
		"category": "3 Pole Contactors"
	},
	{
		"id": "102",
		"name": "3P 40A 24V Contactor",
		"description": "PPCON3P40A24V",
		"price": "16.71",
		"category": "3 Pole Contactors"
	},
	{
		"id": "103",
		"name": "3P 40A 120V Contactor",
		"description": "PPCON3P40A120",
		"price": "16.27",
		"category": "3 Pole Contactors"
	},
	{
		"id": "104",
		"name": "3P 40A 240V Contactor",
		"description": "PPCON3P40A240",
		"price": "16.71",
		"category": "3 Pole Contactors"
	},
	{
		"id": "105",
		"name": "3P 35A 24V Contactor",
		"description": "PPCON3P50A24V",
		"price": "43.29",
		"category": "3 Pole Contactors"
	}
];

// inventory = _.uniqBy(inventory, 'name')
const sortedInventory = _.sortBy(inventory, 'category');
const c = inventory.map(item => item.category);

export const categories = _.uniq(c);
export default sortedInventory;
