import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import axios from "axios";
import { Spin } from "antd";
import { getUserId } from '../../../auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../admin/tryCumulative.css";
import * as XLSX from 'xlsx';

//client\src\pages\admin\tryCumulative.css


const OneUsers = () => {
    const [oneUsers, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submittedCities, setSubmittedCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);



    // Function to export data to Excel
    const exportToExcel = () => {
        const wb = XLSX.utils.book_new(); // Create a new workbook

        // Create a new worksheet
        const ws = XLSX.utils.aoa_to_sheet([
            ["", "", "", "ULB Name", ...oneUsers.map(user => user.ulb_name)],
            ["", "", "", "ULB ID", ...oneUsers.map(user => user.ulb_code)],
            ["(Relative Marking)", "1.1.1 Number", "Total number of trees planted and survived during Majhi Vasundhara Abhiyan 4.0 ", "200", ...oneUsers.map(user => user.question_1)],
            ["(Relative Marking)", "1.1.1 Number", "Indigenous trees:Out of total trees planted, number of indigenous trees planted and survived during Majhi Vasundhara Abhiyan 4.0 ", "100", ...oneUsers.map(user => user.question_10)],

            ["(Relative Marking)", "1.1.1 Number", "Upkeep: Trees planted and survived during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0", "100"],
            ["", "1.1.1 Number", "MV1.0", "", ...oneUsers.map(user => user.question_19)],

            ["", "1.1.1 Number", "MV2.0", "", ...oneUsers.map(user => user.question_24)],

            ["", "1.1.1 Number", "MV3.0", "", ...oneUsers.map(user => user.question_29)],

            ["75", "1.1.2 Yes/No", "Tree Census with Geotagging –Report Prepared and Published during Majhi Vasundhara Abhiyan 4.0", ""],
            ["75", "1.1.2 Yes/No", "100%", "75", ...oneUsers.map(user => user.question_34)],
            ["25", "1.1.2 Yes/No", "List of Heritage Tree-published", "25", ...oneUsers.map(user => user.question_41)],

            ["(Relative Marking)", "1.1.3", "Cumulative capacity of the nursery (sq m)", "20", ...oneUsers.map(user => user.question_45)],
            ["(Relative Marking)", "1.1.3", "Cumulative nursery capacity to Area of the Local Body (CNCA)[=Cumulative capacity of the nursery/Total area of the Local Body (in sq km)", "20", ...oneUsers.map(user => user.question_50)],


            ["(Relative Marking)", "1.1.3", "Number of saplings (Height above 4 feet) present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0 ", "60", ...oneUsers.map(user => user.question_55)],


            ["", "1.1.4", "No. of new green areas created The evaluation will be done based on the number of green areas created. Each green area created will get 10 marks. ", "100", ...oneUsers.map(user => user.question_60)],
            ["", "", "Upkeep:Maintenance of total green areas created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 Each green area maintained will get 05 marks", "100 "],
            ["", "1.1.4", "MV1.0", "", ...oneUsers.map(user => user.question_71)],
            ["", "1.1.4", "MV2.0", "", ...oneUsers.map(user => user.question_77)],
            ["", "1.1.4", "MV3.0", "", ...oneUsers.map(user => user.question_83)],


            ["", "1.1.5 Yes/No", "Formation of BMC", "20", ...oneUsers.map(user => user.question_89)],


            ["", "1.1.5 Number", "Number of meetings conducted by BMC (5 marks for each meeting)", "20", ...oneUsers.map(user => user.question_94)],

            ["", "1.1.5 Yes/No", "PBR: Prepared and approved by BMC during and before Majhi Vasundhara Abhiyan 4.0 ", "20", ...oneUsers.map(user => user.question_101)],


            ["", "1.1.5 Yes/No", "Submission of PBR to MSBB", "20", ...oneUsers.map(user => user.question_106)],


            ["", "1.1.5 Yes/No", "BMC Action Plan", "20", ...oneUsers.map(user => user.question_111)],


            ["", "1.1.6 Yes/No", "Compost quality report complying with FCO norms ", "20", ...oneUsers.map(user => user.question_115)],


            ["80", "1.1.6 Yes/No", "Usage of compost- % of Compost sold/ self utilized Above 80%", "80", ...oneUsers.map(user => user.question_119)],


            ["50", "1.2.1 1(a)  ", "Percentage of solid waste segregated at source and collected ", "", ...oneUsers.map(user => user.question_126)],


            ["50", "1.2.1 1(b) ", "Collection", ...oneUsers.map(user => user.question_132)],

            ["100", "1.2.2", "% of wet waste processed ", "100", ...oneUsers.map(user => user.question_138)],


            ["", "1.2.3  (Yes/No)", "Presence of functional MRF center", "50", ...oneUsers.map(user => user.question_145)],


            ["", "1.2.3 ", "Secondary Segregation of dry waste", "20", ...oneUsers.map(user => user.question_150)],


            ["30", "1.2.3", "Dry waste processing /disposal", "", ...oneUsers.map(user => user.question_155)],


            ["", "1.2.3", "% of dry waste processed/ disposal by the authorized parties", "", ...oneUsers.map(user => user.question_160)],

            ["100", "1.2.4 Yes/No", "Scientific treatment of legacy solid waste", ""],
            ["", "1.2.4 Yes/No", "Stages of Remediation ", "", ...oneUsers.map(user => user.question_165)],

            ["(Relative Marking)", "1.2.5 Number", "Awareness campaigns for Single Use Plastic ban.", "100", ...oneUsers.map(user => user.question_173)],

            ["(Relative Marking)", "1.2.5 Number", "Awareness campaigns on alternatives of plastic", "100", ...oneUsers.map(user => user.question_180)],


            ["", "1.2.5 (Yes/No)", "Action taken on SUP elimination with fine collection", "100", ...oneUsers.map(user => user.question_187)],

            ["", "1.2.6 (Yes/No)", "100% health care facilities and medical practitioners are member of Common Bio-medical Waste Treatment Facility (CBWTF)", "25", ...oneUsers.map(user => user.question_191)],

            ["(Relative Marking)", "1.2.6 Number", "Percentage of Biomedical waste disposed scientifically", "25", ...oneUsers.map(user => user.question_195)],

            ["(Relative Marking)", "1.2.7 ", "Awareness activities on proper segregation of E-waste ", "20", ...oneUsers.map(user => user.question_203)],

            ["", "1.2.7 (Yes/No)", "Mechanism for E-waste collection", "20", ...oneUsers.map(user => user.question_209)],
            ["", "1.2.7 (Yes/No)", "Presence of functional collection center", "10", ...oneUsers.map(user => user.question_214)],
            ["50", "1.2.8", "ODF+", "50", ...oneUsers.map(user => user.question_219)],
            ["150", "2.1", "Air quality monitoring report from –MoEFCC recognized/NABL accredited labs", "150", ...oneUsers.map(user => user.question_224)],

            ["", "2.2.1 (Yes/No)", "Copy of order – ban on sale and use of firecrackers", "25", ...oneUsers.map(user => user.question_239)],
            ["(Relative Marking)", "2.2.1", "Number of awareness event/initiative taken up by Local Body", "50", ...oneUsers.map(user => user.question_243)],

            ["", "2.2.1", "Air Quality Monitoring Report on the evening /Next morning of the festival with AQI as per the National Air Quality Index 0-100 (Good/Satisfactory)", "75", ...oneUsers.map(user => user.question_249)],


            ["", "2.2.2", "Ban on Crop residue burning", "50", ...oneUsers.map(user => user.question_254)],

            ["(Relative Marking)", "2.2.2", "Number of awareness Initiatives taken for agricultural waste management.", "50", ...oneUsers.map(user => user.question_258)],
            ["", "2.2.2  (Yes/No)", "Formation of FPOs in Biomass collection, aggregation and pellet manufacturing", "50", ...oneUsers.map(user => user.question_265)],
            ["(Relative Marking)", "2.2.3", "% of Households with new gas connection installed during Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.question_269)],

            ["(Relative Marking)", "2.2.3", "% of Households with gas connection before Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_274)],

            ["(Relative Marking) 400", "2.3.1", "EVs registered in Local Body area during Majhi Vasundhara Abhiyan 4.0", ""],
            ["", "2.3.1", "2W EV", "200", ...oneUsers.map(user => user.question_279)],
            ["", "2.3.1", "3W EV", "100", ...oneUsers.map(user => user.question_284)],
            ["", "2.3.1", "4W EV", "100", ...oneUsers.map(user => user.question_289)],


            ["(Relative Marking) 100", "2.3.1", "% of EV Public Transport 10 % or more", "100", ...oneUsers.map(user => user.question_294)],

            ["(Relative Marking) 30", "2.3.2", "Number of EV charging stations created during Majhi Vasundhara Abhiyan 4.0", ""],
            ["", "2.3.2", "Two Wheelers", "15", ...oneUsers.map(user => user.question_299)],
            ["", "2.3.2", "Four Wheelers", "15", ...oneUsers.map(user => user.question_307)],


            ["(Relative Marking) 20", "2.3.2", "Upkeep: Number of EV charging stations created during Majhi Vasundhara Abhiyan 2.0, 3.0 and maintained", ""],
            ["", "2.3.2", "Two Wheelers MV02 ", "", ...oneUsers.map(user => user.question_315)],
            ["", "2.3.2", "Four Wheelers MV02", "", ...oneUsers.map(user => user.question_320)],
            ["", "2.3.2", "Two Wheelers MV03", "", ...oneUsers.map(user => user.question_325)],
            ["", "2.3.2", "Four Wheelers MV03", "", ...oneUsers.map(user => user.question_330)],
            ["", "2.3.2", "Two Wheelers Total", "10", ...oneUsers.map(user => user.question_335)],
            ["", "2.3.2", "Four Wheelers Total", "10", ...oneUsers.map(user => user.question_340)],
            ["(Relative Marking)", "2.3.2", "Total number of functional charging points available at charging stations", "20", ...oneUsers.map(user => user.question_345)],
            ["(Relative Marking)", "2.3.2", "Number of charging stations with renewable energy supply", "30", ...oneUsers.map(user => user.question_350)],



            ["100", "2.4", "Number of events organized to create awareness regarding climate change during MV04", ""],
            ["100 (Relative Marking)", "2.4", "First half (April - Sept) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_355)],
            ["100 (Relative Marking)", "2.4", "Second half (Oct - March) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_361)],
            ["Relative", "2.4", "Number of youth participants who have completed Climate Change Course on Youth Leadership for Climate Action", "100", ...oneUsers.map(user => user.question_367)],


            ["(Relative Marking)", "3.1", "Number of waterbodies rejuvenated by removing silt or through repair work", "50", ...oneUsers.map(user => user.question_373)],
            ["(Relative Marking)", "3.1", "Water storage capacity added through rejuvenation of existing waterbodies in Cubic meter", "50", ...oneUsers.map(user => user.question_381)],
            ["(Relative Marking)", "3.1", "Number of new waterbodies created during Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_385)],
            ["(Relative Marking)", "3.1", "Water storage capacity added through creation of new waterbodies in Majhi Vasundhara Abhiyan 4.0 (in cubic meters) ", "50", ...oneUsers.map(user => user.question_393)],
            ["(Relative Marking)", "3.1", "CCT / Deep CCT projects implemented in Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_397)],
            ["(Relative Marking)", "3.1", "Catchment Area Treated (in ha) through CCT/ Deep CCT projects implemented in Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.question_403)],



            ["", "3.2 Yes/No", "Measurement of rainfall using rainwater gauge and record maintenance in logbook", "20", ...oneUsers.map(user => user.question_410)],
            ["", "3.2 Yes/No", "Submission of water budget report prepared by the Gram Panchayat", "20", ...oneUsers.map(user => user.question_414)],
            ["", "3.2 Yes/No", "Actions taken as per the water budget", "20", ...oneUsers.map(user => user.question_419)],
            ["", "3.2 Yes/No", "Local Body’s water supply system audit", "20", ...oneUsers.map(user => user.question_423)],
            ["", "3.2 Yes/No", "Percentage of recommendations implemented as per Local Body’s water supply system audit", "20", ...oneUsers.map(user => user.question_427)],



            ["100", "3.3.1", "Percentage of Public Buildings with functioning Rainwater harvesting projects installed before and during Majhi Vasundhara Abhiyan 4.0 100%", "100", ...oneUsers.map(user => user.question_432)],
            ["(Relative Marking)", "3.3.1", "Rainwater harvested during the Majhi Vasundhara Abhiyan 4.0 (in Cubic meter)", "50", ...oneUsers.map(user => user.question_438)],

            ["(Relative Marking)", "3.3.2", "Number of new percolation pits created during Majhi Vasundhara Abhiyan 4.0", "25", ...oneUsers.map(user => user.question_442)],


            ["(Relative Marking)", "3.3.2", "Upkeep:Number of percolation pits created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained ", ""],
            ["", "3.3.2", "MV1.0", "25", ...oneUsers.map(user => user.question_449)],
            ["", "3.3.2", "MV2.0", "25", ...oneUsers.map(user => user.question_454)],
            ["", "3.3.2", "MV3.0", "25", ...oneUsers.map(user => user.question_459)],





            ["", "3.4 Yes/No", "Mapping of all wells in the Local Body with geotagging", "20", ...oneUsers.map(user => user.question_464)],
            ["", "3.4 Yes/No", "Identification of dysfunctional wells", "20", ...oneUsers.map(user => user.question_469)],
            ["", "3.4 Yes/No", "Rejuvenation/Recharge of dysfunctional wells", "40", ...oneUsers.map(user => user.question_474)],
            ["", "3.4 Yes/No", "Preparation of water quality report", "10", ...oneUsers.map(user => user.question_483)],
            ["", "3.4 Yes/No", "Quality of water as per drinking water Standards", "10", ...oneUsers.map(user => user.question_487)],



            ["(Relative Marking)", "3.5", "Percentage of farmland covered under drip irrigation/micro irrigation projects.", "50", ...oneUsers.map(user => user.question_491)],
            ["(Relative Marking)", "3.5", "Percentage of farmland brought under drip irrigation during Majhi Vasundhara Abhiyan 4.0.", "50", ...oneUsers.map(user => user.question_499)],
            ["(Relative Marking)", "3.5", "Percentage of farmland covered under organic farming (including land in conversion period).", "50", ...oneUsers.map(user => user.question_507)],
            ["(Relative Marking)", "3.5", "Percentage of farmland brought under organic farming during Majhi Vasundhara Abhiyan 4.0.", "50", ...oneUsers.map(user => user.question_515)],




            ["(Relative Marking)", "3.6", "Percentage of households connected with piped water supply", "25", ...oneUsers.map(user => user.question_523)],
            ["(Relative Marking)", "3.6", "Percentage of Schools and Anganwadi centers connected with piped water supply", "25", ...oneUsers.map(user => user.question_528)],

            ["(Relative Marking)", "3.7", "List of Heritage Tree-published", "50", ...oneUsers.map(user => user.question_533)],
            ["", "3.7", "List of Heritage Tree-published", "30", ...oneUsers.map(user => user.question_539)],
            ["(Relative Marking)", "3.7", "List of Heritage Tree-published", "50", ...oneUsers.map(user => user.question_545)],


            ["(Relative Marking)", "3.8", "List of Heritage Tree-published", "50", ...oneUsers.map(user => user.question_549)],
            ["(Relative Marking)", "3.8", "List of Heritage Tree-published", "50", ...oneUsers.map(user => user.question_555)],
            ["(Relative Marking)", "3.8", "List of Heritage Tree-published", "50", ...oneUsers.map(user => user.question_561)],



            ["", "3.9", "Preparation of Brief Document. Wetlands (Conservation & Management), Rules, 2017.", "100", ...oneUsers.map(user => user.question_567)],

            ["200", "4.1", "Number of awareness events organized  to promote Renewable energy during Majhi Vasundhara Abhiyan 4.0", ""],
            ["(Relative Marking)", "First Half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", ...oneUsers.map(user => user.question_572)],
            ["(Relative Marking)", "Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", ...oneUsers.map(user => user.question_579)],

            ["", "4.2.1 Number", "Percentage of LED Streetlights of total Streetlights", "100", ...oneUsers.map(user => user.question_586)],

            ["(Relative Marking)", "4.2.2", "List of Heritage Tree-published", ...oneUsers.map(user => user.question_596)],
            ["(Relative Marking)", "", "Upkeep:Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0", "100"],
            ["", "4.2.2", "MV1.0", ...oneUsers.map(user => user.question_606)],
            ["", "4.2.2", "MV2.0", ...oneUsers.map(user => user.question_611)],
            ["", "4.2.2", "MV3.0", ...oneUsers.map(user => user.question_616)],
            ["(Relative Marking)", "4.2.2", "Total capacity (in Liter per Day) of solar water heaters installed in a Local Body", "100", ...oneUsers.map(user => user.question_621)],


            ["(Relative Marking)", "4.2.3", "Number of biogas plants in working condition installed during Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.question_629)],
            ["(Relative Marking)", "4.2.3", "Total capacity of the functional biogas plant installed in the Local Body (Cubic meter per day)- during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0, 4.0", "100"],
            ["", "4.2.3", "MV1.0", "", ...oneUsers.map(user => user.question_637)],
            ["", "4.2.3", "MV2.0", "", ...oneUsers.map(user => user.question_642)],
            ["", "4.2.3", "MV3.0", "", ...oneUsers.map(user => user.question_647)],
            ["", "4.2.3", "MV4.0", "", ...oneUsers.map(user => user.question_652)],


            ["(Relative Marking)", "4.2.4", "Number of new solar pumps installed in individual and community areas during Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.question_657)],
            ["(Relative Marking)", "4.2.4", "Total number of solar pumps installed in individual or community areas before Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.question_665)],


            ["(Relative Marking)", "4.2.5", "Capacity of decentralized solar energy plants in MW during Majhi Vasundhara Abhiyan 4 .0", ...oneUsers.map(user => user.question_673)],
            ["(Relative Marking)", "4.2.5", "Capacity of decentralized solar energy plants in MW before Majhi Vasundhara Abhiyan 4 .0", ...oneUsers.map(user => user.question_681)],

            ["(Relative Marking)", "5.1", "No. of E-Pledges registered on the portal by citizens of the Local body individually during MVA 4.0 for 3 quarters starting from July to Sept-23", ...oneUsers.map(user => user.question_689)],
            ["(Relative Marking)", "5.1", "No. of E-Pledges registered on the portal by citizens of the Local body in a group during MVA 4.0 for 3 quarters starting from July to Sept-23", ...oneUsers.map(user => user.question_694)],
            ["(Relative Marking)", "5.1", "Compliance: % of #Epledge registered and complied individually during MVA 4.0", ...oneUsers.map(user => user.question_699)],
            ["(Relative Marking)", "5.1", "Compliance: % of #Epledge registered and complied in a group during MVA 4.0", ...oneUsers.map(user => user.question_703)],
            ["", "5.1", "Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered)", ...oneUsers.map(user => user.question_707)],


            ["200", "5.2", "Number of Awareness Events/Activities/Spardha conducted by the Local body ", ...oneUsers.map(user => user.question_711)],
            ["(Relative Marking)", "5.2", "First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.question_711)],


            ["(Relative Marking)", "5.2", "Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.question_717)],

            ["(Relative Marking)", "5.2", "Number of likes and shares on posts of awareness events/activities/spardha on social media page of Local body with #majhivasundhara #MissionLiFE", "200", ...oneUsers.map(user => user.question_723)],
            ["(Relative Marking)", "5.2", "Use of eco friendly material for the promotional events/activity of Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_730)],
            ["(Relative Marking)", "5.2", "Effective use of Mission LiFE logo in organized activities and events", "50", ...oneUsers.map(user => user.question_736)],


            ["(Relative Marking)", "5.3", "Number of events conducted by Local body which involved participation of youths / youth groups", "100", ...oneUsers.map(user => user.question_742)],
            ["(Relative Marking)", "5.3", "Number of Paryavaran Doot identified", "50", ...oneUsers.map(user => user.question_748)],
            ["(Relative Marking)", "5.3", "Number of Youth identified as Paryavaran Doot", "50", ...oneUsers.map(user => user.question_754)],

            ["(Relative Marking) 100", "5.3", "Number of events conducted by the Local body with Paryavaran doot", ""],
            ["(Relative Marking)", "5.3", "First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_760)],
            ["(Relative Marking)", "5.3", "Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.question_767)],



            ["(Relative Marking)", "5.4", "Percentage of Schools participated in ESS during Majhi Vasundhara Abhiyan 4.0", "30", ...oneUsers.map(user => user.question_774)],
            ["(Relative Marking)", "5.4", "Formation of the group of students and appointment of respective in-charge from each participating school for ESS.", "20", ...oneUsers.map(user => user.question_780)],
            ["(Relative Marking)", "5.4", "Number of annual thematic camps/ campaigns/ activities organized to implement environmental initiatives", ...oneUsers.map(user => user.question_785)],
            ["(Relative Marking)", "5.4", "Number of community meetings/events conducted by the ESS Groups", ...oneUsers.map(user => user.question_791)],

            ["", "5.5", "Number of new spots Developed with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 100 marks will be allocated for each new spot developed. ", ...oneUsers.map(user => user.question_798)],

            ["", "", "Upkeep:Number of old spots (created during MVA 1.0,2.0,3.0) refurbished with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 25 marks will be allocated for each spot refurbished.", "250"],
            ["", "5.5", "MV1.0", ...oneUsers.map(user => user.question_806)],
            ["", "5.5", "MV2.0", ...oneUsers.map(user => user.question_813)],
            ["", "5.5", "MV3.0", ...oneUsers.map(user => user.question_820)],
            ["(Relative Marking)", "5.5", "Number of innovative spots developed by using recycled waste during Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.question_827)],


            ["(Relative Marking)", "5.6", "Number of Majhi Vasundhara Abhiyan initiatives funded through alternate funding channels.", "100", ...oneUsers.map(user => user.question_832)],
            ["(Relative Marking)", "5.6", "Amount of money leveraged through Alternative Funding channels.", "100", ...oneUsers.map(user => user.question_839)],
        ]);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "Cities Data");

        // Save the workbook as an Excel file
        XLSX.writeFile(wb, "10k+_Population_Cumulative.xlsx");
    };



    const fetchData = async (page) => {
        try {
            setLoading(true);
            const userId = getUserId();
            const token = localStorage.getItem('token');
            const isAdmin = localStorage.getItem('isAdmin') === 'admin';

            if (!token) {
                throw new Error('Token not found');
            }

            let endpoint;
            if (isAdmin) {
                endpoint = 'http://89.116.20.162:8080/api/v1/cities/rural/category/10k+';
            } else {
                endpoint = `http://89.116.20.162:8080/api/v1/city/${userId}`;
            }

            const response = await axios.get(endpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    page,
                    category: "10 Lakh+ Population"
                },
            });

            if (response.data.success) {
                setUsers(response.data.cities);
            } else {
                throw new Error('Failed to fetch cities');
            }

            if (isAdmin) {
                const submittedResponse = await axios.get(`http://89.116.20.162:8080/api/v1/city-sub`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (submittedResponse.data.success) {
                    setSubmittedCities(submittedResponse.data.cities);
                } else {
                    throw new Error('Failed to fetch submitted cities');
                }
            } else {
                const submittedResponse = await axios.get(`/api/v1/city-submissions/submitted/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (submittedResponse.data.success) {
                    setSubmittedCities(submittedResponse.data.cities);
                } else {
                    throw new Error('Failed to fetch submitted cities');
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);


    return (
        <Layout>
            <div className='addUser'>
                <h1 className="text-center m-2">Cumulative of 10K + Population</h1>
                <button onClick={exportToExcel} className="btn btn-primary">Export to Excel</button>

                <div className="scrollable-tablett">
                    <div className="scrollable-containertt">
                        <div className="scrollabe-contenttt">

                            {loading ? (
                                <div className="text-center">
                                    <Spin size="large" />
                                </div>
                            ) : oneUsers.length > 0 ? (
                                <div className="table-container">
                                    <table className="custom-table">
                                        <thead>
                                            <tr>
                                                <th>S.NO</th>
                                                <th></th>
                                                {oneUsers.map((user, index) => (
                                                    <th key={`city-serial-${user.ulb_code}`}>{index + 1}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ULB Name</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-name-${user.ulb_code}`}>{user.ulb_name}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>ULB ID</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-id-${user.ulb_code}`}>{user.ulb_code}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>1.1.1 Number</td>
                                                <td>Total number of trees planted and survived during Majhi Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question1-${user.ulb_code}`}>{user.question_1}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Number</td>
                                                <td>Indigenous trees:Out of total trees planted, number of indigenous trees planted and survived during Majhi Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question10-${user.ulb_code}`}>{user.question_10}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Number</td>
                                                <td>Upkeep: Trees planted and survived during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question19-${user.ulb_code}`}>{user.question_19}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question24-${user.ulb_code}`}>{user.question_24}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question29-${user.ulb_code}`}>{user.question_29}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.1.2</td>
                                                <td>Tree Census with Geotagging – Report Prepared and Published during Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question34-${user.ulb_code}`}>{user.question_34}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>List of Heritage Tree-published</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question41-${user.ulb_code}`}>{user.question_41}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.1.3</td>
                                                <td>Cumulative capacity of the nursery (sq m)</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question45-${user.ulb_code}`}>{user.question_45}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Cumulative nursery capacity to Area of the Local Body (CNCA)[=Cumulative capacity of the nursery/Total area of the Local Body (in sq km)]</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question50-${user.ulb_code}`}>{user.question_50}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of saplings (Height above 4 feet)present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question55-${user.ulb_code}`}>{user.question_55}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.1.4</td>
                                                <td>No. of new green areas created The evaluation will be done based on the number of green areas created. Each green area created will get 10 marks.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question60-${user.ulb_code}`}>{user.question_60}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Upkeep:Maintenance of total green areas created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 Each green area maintained will get 05 marks</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question71-${user.ulb_code}`}>{user.question_71}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question77-${user.ulb_code}`}>{user.question_77}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question83-${user.ulb_code}`}>{user.question_83}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.1.5 Yes/No</td>
                                                <td>Formation of BMC</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question89-${user.ulb_code}`}>{user.question_89}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Number</td>
                                                <td>Number of meetings conducted by
                                                    BMC
                                                    (5 marks for each meeting) </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question94-${user.ulb_code}`}>{user.question_94}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>PBR: Prepared and approved by BMC
                                                    during and before Majhi Vasundhara
                                                    Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question101-${user.ulb_code}`}>{user.question_101}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Submission of PBR to MSBB</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question106-${user.ulb_code}`}>{user.question_106}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>Yes/No</td>
                                                <td>BMC Action Plan</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question111-${user.ulb_code}`}>{user.question_111}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>1.1.6 Yes/No</td>
                                                <td>Compost quality report
                                                    complying with FCO norms </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question115-${user.ulb_code}`}>{user.question_115}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>Usage of compost- % of
                                                    Compost sold/ self utilized </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question119-${user.ulb_code}`}>{user.question_119}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1(a) </td>
                                                <td>Segregation at source</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question126-${user.ulb_code}`}>{user.question_126}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1(b)</td>
                                                <td>Collection</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question132-${user.ulb_code}`}>{user.question_132}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.2.2</td>
                                                <td>% of wet waste processed </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question138-${user.ulb_code}`}>{user.question_138}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.2.3  (Yes/No)          </td>
                                                <td>Presence of functional MRF center. </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question145-${user.ulb_code}`}>{user.question_145}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Secondary Segregation of dry waste</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question150-${user.ulb_code}`}>{user.question_150}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Dry waste processing /disposal</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question155-${user.ulb_code}`}>{user.question_155}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>% of dry waste processed/
                                                    disposal by the authorized
                                                    parties</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question160-${user.ulb_code}`}>{user.question_160}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>1.2.4 Yes/No</td>
                                                <td>Scientific treatment of legacy solid waste </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question165-${user.ulb_code}`}>{user.question_165}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.2.5     Number</td>
                                                <td>Awareness campaigns for Single Use
                                                    Plastic ban.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question173-${user.ulb_code}`}>{user.question_173}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Number</td>
                                                <td>Awareness campaigns on alternatives
                                                    of plastic</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question180-${user.ulb_code}`}>{user.question_180}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Action taken on SUP elimination with
                                                    fine collection</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question187-${user.ulb_code}`}>{user.question_187}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>1.2.6  (Yes/No)</td>
                                                <td>100% health care facilities and
                                                    medical practitioners are member of
                                                    Common Bio-medical Waste
                                                    Treatment Facility (CBWTF)</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question191-${user.ulb_code}`}>{user.question_191}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Question 21</td>
                                                <td>List of Heritage Tree-published</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question195-${user.ulb_code}`}>{user.question_195}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.2.7 </td>
                                                <td>Awareness activities on proper
                                                    segregation of E-waste </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question203-${user.ulb_code}`}>{user.question_203}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Yes/No)</td>
                                                <td>Mechanism for E-waste collection</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question209-${user.ulb_code}`}>{user.question_209}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Yes/No)</td>
                                                <td>Presence of functional collection
                                                    center</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question214-${user.ulb_code}`}>{user.question_214}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>1.2.8</td>
                                                <td>ODF Status</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question219-${user.ulb_code}`}>{user.question_219}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>2.1</td>
                                                <td>Air quality monitoring report from –
                                                    MoEFCC recognized/NABL
                                                    accredited labs</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question224-${user.ulb_code}`}>{user.question_224}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>2.2.1  (Yes/No)</td>
                                                <td>Copy of order – ban on sale and use of
                                                    firecrackers</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question239-${user.ulb_code}`}>{user.question_239}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of awareness event/initiative
                                                    taken up by Local Body</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question243-${user.ulb_code}`}>{user.question_243}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>0-100 (Good/Satisfactory)</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question249-${user.ulb_code}`}>{user.question_249}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>2.2.2  (Yes/No)</td>
                                                <td>Ban on Crop residue burning</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question254-${user.ulb_code}`}>{user.question_254}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of awareness Initiatives
                                                    taken for agricultural waste
                                                    management.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question258-${user.ulb_code}`}>{user.question_258}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Formation of FPOs in Biomass
                                                    collection, aggregation and pellet
                                                    manufacturing</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question265-${user.ulb_code}`}>{user.question_265}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>2.2.3</td>
                                                <td>% of Households with new gas
                                                    connection installed during Majhi
                                                    Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question269-${user.ulb_code}`}>{user.question_269}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>% of Households with gas
                                                    connection before Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question274-${user.ulb_code}`}>{user.question_274}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>2W EV</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question279-${user.ulb_code}`}>{user.question_279}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3W EV</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question284-${user.ulb_code}`}>{user.question_284}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>4W EV</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question289-${user.ulb_code}`}>{user.question_289}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>10 % or more</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question294-${user.ulb_code}`}>{user.question_294}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Two Wheelers</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question299-${user.ulb_code}`}>{user.question_299}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Four Wheelers</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question307-${user.ulb_code}`}>{user.question_307}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Two Wheelers MV02</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question315-${user.ulb_code}`}>{user.question_315}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Four Wheelers MV02</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question320-${user.ulb_code}`}>{user.question_320}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Two Wheelers MV03</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question325-${user.ulb_code}`}>{user.question_325}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Four Wheelers MV03</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question330-${user.ulb_code}`}>{user.question_330}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>Two Wheelers Total</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question335-${user.ulb_code}`}>{user.question_335}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Four Wheelers Total</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question340-${user.ulb_code}`}>{user.question_340}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Total number of functional charging points available
                                                    at charging stations</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question345-${user.ulb_code}`}>{user.question_345}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of charging stations with renewable energy supply</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question350-${user.ulb_code}`}>{user.question_350}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>First half (April - Sept) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question355-${user.ulb_code}`}>{user.question_355}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Second half (Oct - March) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question361-${user.ulb_code}`}>{user.question_361}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of youth participants who have
                                                    completed Climate Change Course on Youth
                                                    Leadership for Climate Action</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question367-${user.ulb_code}`}>{user.question_367}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.1</td>
                                                <td>Number of waterbodies rejuvenated by removing
                                                    silt or through repair work</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question373-${user.ulb_code}`}>{user.question_373}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>Water storage capacity added through rejuvenation
                                                    of existing waterbodies in Cubic meter</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question381-${user.ulb_code}`}>{user.question_381}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of new waterbodies created during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question385-${user.ulb_code}`}>{user.question_385}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Water storage capacity added through creation of
                                                    new waterbodies in Majhi Vasundhara Abhiyan 4.0
                                                    (in cubic meters) </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question393-${user.ulb_code}`}>{user.question_393}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>CCT / Deep CCT projects implemented in Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question397-${user.ulb_code}`}>{user.question_397}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Catchment Area Treated (in ha) through CCT/ Deep
                                                    CCT projects implemented in Majhi Vasundhara
                                                    Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question403-${user.ulb_code}`}>{user.question_403}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>3.2 Yes/No</td>
                                                <td>Measurement of rainfall using rainwater
                                                    gauge and record maintenance in
                                                    logbook</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question410-${user.ulb_code}`}>{user.question_410}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Submission of water budget report
                                                    prepared by the Gram Panchayat</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question414-${user.ulb_code}`}>{user.question_414}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Actions taken as per the water budget</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question419-${user.ulb_code}`}>{user.question_419}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>Yes/No</td>
                                                <td>Local Body’s water supply system audit</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question423-${user.ulb_code}`}>{user.question_423}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>Yes/No </td>
                                                <td>Percentage of recommendations
                                                    implemented as per Local Body’s water
                                                    supply system audit</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question427-${user.ulb_code}`}>{user.question_427}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.3.1</td>
                                                <td>Percentage of Public Buildings with
                                                    functioning Rainwater harvesting
                                                    projects installed before and during
                                                    Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question432-${user.ulb_code}`}>{user.question_432}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Rainwater harvested during the Majhi
                                                    Vasundhara Abhiyan 4.0 (in Cubic
                                                    meter)</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question438-${user.ulb_code}`}>{user.question_438}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.3.2</td>
                                                <td>Number of new percolation
                                                    pits created during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question442-${user.ulb_code}`}>{user.question_442}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Upkeep:
                                                    Number of percolation pits
                                                    created during Majhi
                                                    Vasundhara Abhiyan 1.0,
                                                    2.0, 3.0 and maintained</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question449-${user.ulb_code}`}>{user.question_449}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question454-${user.ulb_code}`}>{user.question_454}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question459-${user.ulb_code}`}>{user.question_459}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.4 Yes/No</td>
                                                <td>Mapping of all wells in the Local
                                                    Body with geotagging</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question464-${user.ulb_code}`}>{user.question_464}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Identification of dysfunctional
                                                    wells</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question469-${user.ulb_code}`}>{user.question_469}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Rejuvenation/Recharge of
                                                    dysfunctional wells</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question474-${user.ulb_code}`}>{user.question_474}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Preparation of water quality
                                                    report</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question483-${user.ulb_code}`}>{user.question_483}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Quality of water as per
                                                    drinking water Standards</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question487-${user.ulb_code}`}>{user.question_487}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.5</td>
                                                <td>Percentage of farmland covered
                                                    under drip irrigation/micro
                                                    irrigation projects.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question491-${user.ulb_code}`}>{user.question_491}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of farmland brought
                                                    under drip irrigation during Majhi
                                                    Vasundhara Abhiyan 4.0.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question499-${user.ulb_code}`}>{user.question_499}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of farmland covered
                                                    under organic farming (including
                                                    land in conversion period).</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question507-${user.ulb_code}`}>{user.question_507}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of farmland brought
                                                    under organic farming during
                                                    Majhi Vasundhara Abhiyan 4.0.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question515-${user.ulb_code}`}>{user.question_515}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.6</td>
                                                <td>Percentage of households
                                                    connected with piped water
                                                    supply</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question523-${user.ulb_code}`}>{user.question_523}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of Schools and
                                                    Anganwadi centers
                                                    connected with piped water
                                                    supply</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question528-${user.ulb_code}`}>{user.question_528}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.7</td>
                                                <td>Number of promotional activities
                                                    for eco-friendly immersion </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question533-${user.ulb_code}`}>{user.question_533}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>No. of artificial immersion spots
                                                    created</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question539-${user.ulb_code}`}>{user.question_539}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Collection, segregation, transport
                                                    and processing of worship material
                                                    pre and post immersion</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question545-${user.ulb_code}`}>{user.question_545}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.8</td>
                                                <td>No. of
                                                    promotional
                                                    activity done </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question549-${user.ulb_code}`}>{user.question_549}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of
                                                    eco-friendly idols
                                                    worshipped Community</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question555-${user.ulb_code}`}>{user.question_555}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Percentage of
                                                    eco-friendly idols
                                                    worshipped Individual</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question561-${user.ulb_code}`}>{user.question_561}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>3.9</td>
                                                <td>Preparation of Brief
                                                    Document. Wetlands
                                                    (Conservation & Management), Rules, 2017.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question567-${user.ulb_code}`}>{user.question_567}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4.1</td>
                                                <td>First Half (April – Sept) of the
                                                    Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question572-${user.ulb_code}`}>{user.question_572}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Second Half (Oct – March) of
                                                    the Majhi Vasundhara Abhiyan
                                                    4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question579-${user.ulb_code}`}>{user.question_579}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>4.2.1 Number</td>
                                                <td>Percentage of LED Streetlights of
                                                    total Streetlights</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question586-${user.ulb_code}`}>{user.question_586}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4.2.2</td>
                                                <td>Total capacity of solar installations (in
                                                    kW)
                                                    during Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question596-${user.ulb_code}`}>{user.question_596}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV1.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question606-${user.ulb_code}`}>{user.question_606}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question611-${user.ulb_code}`}>{user.question_611}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question616-${user.ulb_code}`}>{user.question_616}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Total capacity (in Liter per Day) of solar
                                                    water heaters installed in a Local Body</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question621-${user.ulb_code}`}>{user.question_621}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4.2.3</td>
                                                <td>Number of biogas plants in
                                                    working condition installed
                                                    during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question629-${user.ulb_code}`}>{user.question_629}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV1.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question637-${user.ulb_code}`}>{user.question_637}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question642-${user.ulb_code}`}>{user.question_642}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question647-${user.ulb_code}`}>{user.question_647}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question652-${user.ulb_code}`}>{user.question_652}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4.2.4</td>
                                                <td>Number of new solar pumps installed
                                                    in individual and community areas
                                                    during Majhi Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question657-${user.ulb_code}`}>{user.question_657}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Total number of solar pumps installed
                                                    in individual or community areas
                                                    before Majhi Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question665-${user.ulb_code}`}>{user.question_665}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>4.2.5</td>
                                                <td>Capacity of decentralized solar
                                                    energy plants in MW during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question673-${user.ulb_code}`}>{user.question_673}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Capacity of decentralized solar
                                                    energy plants in MW before Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question681-${user.ulb_code}`}>{user.question_681}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.1</td>
                                                <td>No. of E-Pledges registered on the portal by citizens of the
                                                    Local body individually during MVA 4.0 for 3 quarters
                                                    starting from July to Sept-23</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question689-${user.ulb_code}`}>{user.question_689}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>No. of E-Pledges registered on the portal by citizens of the
                                                    Local body in a group during MVA 4.0 for 3 quarters
                                                    starting from July to Sept-23</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question694-${user.ulb_code}`}>{user.question_694}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Compliance: % of #Epledge registered and complied
                                                    individually during MVA 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question699-${user.ulb_code}`}>{user.question_699}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Compliance: % of #Epledge registered and complied in a
                                                    group during MVA 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question703-${user.ulb_code}`}>{user.question_703}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Continuous top performers in all 3 quarters (Top 10 Ranks
                                                    from every quarter will be considered)</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question707-${user.ulb_code}`}>{user.question_707}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.2</td>
                                                <td>First half (April – Sept) of the Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question711-${user.ulb_code}`}>{user.question_711}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Second half (Oct – March) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question717-${user.ulb_code}`}>{user.question_717}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of likes and shares on posts of awareness
                                                    events/activities/spardha on social media page of
                                                    Local body with #majhivasundhara #MissionLiFE</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question723-${user.ulb_code}`}>{user.question_723}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Use of eco friendly material for the promotional
                                                    events/activity of Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question730-${user.ulb_code}`}>{user.question_730}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Effective use of Mission LiFE logo in organized
                                                    activities and events</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question736-${user.ulb_code}`}>{user.question_736}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.3</td>
                                                <td>Number of events conducted by Local body which
                                                    involved participation of youths / youth groups</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question742-${user.ulb_code}`}>{user.question_742}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of Paryavaran Doot identified</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question748-${user.ulb_code}`}>{user.question_748}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of Youth identified as Paryavaran Doot</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question754-${user.ulb_code}`}>{user.question_754}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>First half (April – Sept) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question760-${user.ulb_code}`}>{user.question_760}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Second half (Oct – March) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question767-${user.ulb_code}`}>{user.question_767}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.4</td>
                                                <td>Percentage of Schools participated in ESS
                                                    during Majhi Vasundhara Abhiyan 4.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question774-${user.ulb_code}`}>{user.question_774}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Formation of the group of students and
                                                    appointment of respective in-charge from
                                                    each participating school for ESS.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question780-${user.ulb_code}`}>{user.question_780}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of annual thematic camps/
                                                    campaigns/ activities organized to
                                                    implement environmental initiatives</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question785-${user.ulb_code}`}>{user.question_785}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of community meetings/events
                                                    conducted by the ESS Groups</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question791-${user.ulb_code}`}>{user.question_791}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.5</td>
                                                <td>Number of new spots Developed with focus
                                                    on Majhi Vasundhara Principles during Majhi
                                                    Vasundhara Abhiyan 4.0
                                                    100 marks will be allocated for each new
                                                    spot developed. </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question798-${user.ulb_code}`}>{user.question_798}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV1.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question806-${user.ulb_code}`}>{user.question_806}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV2.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question813-${user.ulb_code}`}>{user.question_813}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MV3.0</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question820-${user.ulb_code}`}>{user.question_820}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Number of innovative spots developed by
                                                    using recycled waste during Majhi
                                                    Vasundhara Abhiyan 4.0 </td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question827-${user.ulb_code}`}>{user.question_827}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>5.6</td>
                                                <td>Number of Majhi Vasundhara
                                                    Abhiyan initiatives funded through alternate funding
                                                    channels.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question832-${user.ulb_code}`}>{user.question_832}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Amount of money leveraged through Alternative Funding channels.</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question839-${user.ulb_code}`}>{user.question_839}</td>
                                                ))}
                                            </tr>



                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center">No data available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );

};

export default OneUsers;
