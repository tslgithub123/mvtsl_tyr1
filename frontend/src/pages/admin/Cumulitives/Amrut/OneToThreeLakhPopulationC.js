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
            [" ", " ", "", "ULB Name", ...oneUsers.map(user => user.ulb_name)],
            [" ", " ", "", "ULB ID", ...oneUsers.map(user => user.ulb_code)],
            ["(Relative Marking)", "1.1.1 Number", "Total number of trees planted and survived during Majhi Vasundhara Abhiyan 4.0 ", "200 ", ...oneUsers.map(user => user.second_form_question_1)],
            ["(Relative Marking)", "1.1.1 Number ", " Indigenous trees:Out of total trees planted, number of indigenous trees planted and survived during Majhi Vasundhara Abhiyan 4.0  ", " 100", ...oneUsers.map(user => user.second_form_question_9)],
            ["(Relative Marking)", "1.1.1 Number", "Upkeep: Trees planted and survived during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0", "100"],
            [" ", " ", "MV01 ", " ", ...oneUsers.map(user => user.second_form_question_17)],
            [" ", " ", " MV02", " ", ...oneUsers.map(user => user.second_form_question_22)],
            [" ", " ", " MV03", " ", ...oneUsers.map(user => user.second_form_question_27)],


            [" ", " 1.1.2(Yes/No)", "Tree Census with Geotagging – Report Prepared and Published before Majhi Vasundhara Abhiyan 4.0 ", " 50", ...oneUsers.map(user => user.second_form_question_32)],


            [" ", " 1(a)  (Yes/No)", " If Yes, Tree Census with geotagging, report updatedand published during Majhi Vasundhara Abhiyan 4.0", " 25", ...oneUsers.map(user => user.second_form_question_39)],

            ["", "1(b)  (Yes/No)", "If No, Status during Majhi Vasundhara Abhiyan 4.0", ""],
            [" ", "(Yes/No) ", "Tree Census with geotagging –100% report prepared and published ", " 75", ...oneUsers.map(user => user.second_form_question_46)],
            [" ", " (Yes/No)", " List of Heritage Tree- updated and published ", " 25", ...oneUsers.map(user => user.second_form_question_52)],

            ["50", "1.1.3 (Yes/No)", "Percentage of projects for which NOC was processed in equal to /less than 60 days", ""],
            [" ", " (Yes/No)", "100% projects ", "50 ", ...oneUsers.map(user => user.second_form_question_58)],
            [" ", "(Yes/No) ", "100% ", " 50", ...oneUsers.map(user => user.second_form_question_66)],

            ["50", "1.1.3 (Yes/No)", "% survival of compensatory plantation", ""],
            [" ", "(Yes/No)", "95% or more", " 50", ...oneUsers.map(user => user.second_form_question_71)],
            ["(Relative Marking) ", "1.1.4", "Cumulative capacity of the nursery (sq m) ", " 20", ...oneUsers.map(user => user.second_form_question_76)],
            [" (Relative Marking)", "1.1.4", " Cumulative nursery capacity to Area of the Local body (CNCA) [=Cumulative capacity of the nursery/Total area of the Local body (in sq km)]", "20 ", ...oneUsers.map(user => user.second_form_question_81)],


            ["(Relative Marking)", "1.1.4", "Number of saplings (Height above 4 feet) present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0", "60", ...oneUsers.map(user => user.second_form_question_85)],


            [" ", "1.1.5  Number", "No. of new green areas createdThe evaluation will be done based on the number of green areas created. Each green area created will get 10 marks. ", "100", ...oneUsers.map(user => user.second_form_question_90)],

            ["", "1.1.5", "Upkeep: Maintenance of total green areas created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 Each green area maintained will get 05 marks", "100"],
            [" ", " ", "MV1.0", " ", ...oneUsers.map(user => user.second_form_question_101)],
            [" ", " ", "MV2.0", " ", ...oneUsers.map(user => user.second_form_question_107)],
            [" ", " ", "MV3.0", " ", ...oneUsers.map(user => user.second_form_question_113)],
            [" ", "1.1.6", "GIS/Remote Sensing based land use map", "50", ...oneUsers.map(user => user.second_form_question_119)],


            [" ", "1.1.6 (Yes/No)", "Does the ULB have 33% green cover?", "50", ...oneUsers.map(user => user.second_form_question_124)],

            ["50", "", "Does the ULB have a tree plan?", ""],
            [" ", " ", "If ULB has achieved 33% green cover and have a Tree plan to increase it further (Tree plan should be published on website) ", "50", ...oneUsers.map(user => user.second_form_question_132)],
            [" ", " ", "If ULB has not achieved 33% green cover and has a Tree Plan to achieve a minimum 33% green cover (Tree plan should be published on website)", "50", ...oneUsers.map(user => user.second_form_question_137)],
            [" ", " ", "If ULB has achieved 33% green cover but they have not prepared plan to increase beyond 33% green cover", "", ...oneUsers.map(user => user.second_form_question_142)],
            [" ", " ", "If ULB has not achieved 33% green cover and they have not prepared plan to achieve 33% green cover", " ", ...oneUsers.map(user => user.second_form_question_147)],


            ["50", "1.1.6", "Implementation of the Tree Plan", ""],
            [" ", " ", "Achieved milestone for the Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.second_form_question_152)],
            [" ", " ", "Haven’t achieved milestone for the Majhi Vasundhara Abhiyan 4.0", " ", ...oneUsers.map(user => user.second_form_question_156)],
            [" ", "1.1.7", "Formation of BMC", "20", ...oneUsers.map(user => user.second_form_question_160)],

            [" ", "1.1.7", "Number of meetings conducted by BMC (5 marks for each meeting)", "20", ...oneUsers.map(user => user.second_form_question_165)],




            [" ", "1.1.7", "PBR: Prepared and approved by BMC during and before Majhi Vasundhara Abhiyan 4.0", "20", ...oneUsers.map(user => user.second_form_question_172)],
            [" ", "1.1.7", "Submission of PBR to MSBB", "20", ...oneUsers.map(user => user.second_form_question_177)],
            [" ", "1.1.7", "BMC Action Plan", "20", ...oneUsers.map(user => user.second_form_question_182)],


            ["30", "1.1.8", "Harit Brand Certification during MVA 4.0 period", ""],
            [" ", " ", "ULB Re-certified with HARIT Brand ", "30", ...oneUsers.map(user => user.second_form_question_186)],

            ["70", "", "Usage of compost- % of Compost sold/ self utilized", ""],
            [" ", " ", "Above 90%", "70", ...oneUsers.map(user => user.second_form_question_191)],


            ["", "1.2.1", "Percentage of solid waste segregated at source and collected", "50"],
            [" ", "1(a) ", "Segregation at source 95%-100%", "25", ...oneUsers.map(user => user.second_form_question_198)],
            [" ", "1(b)", "Collection 95%-100%", "25", ...oneUsers.map(user => user.second_form_question_204)],

            ["50", "1.2.1", "GFC Rating of the cities", ""],
            [" ", " ", "7 star", "50", ...oneUsers.map(user => user.second_form_question_210)],

            ["50", "1.2.2", "% of wet waste processed 90% and above", "50", ...oneUsers.map(user => user.second_form_question_214)],
            [" ", "1.2.3 (Yes/No)", "Presence of functional MRF center", "10", ...oneUsers.map(user => user.second_form_question_221)],


            ["10", "1.2.3", "Secondary Segregation of dry waste collected ", ""],

            [" ", " ", " 90% or above", " 10", ...oneUsers.map(user => user.second_form_question_225)],
            [" 30", "1.2.3", "Dry waste processing /disposal", " ", ...oneUsers.map(user => user.second_form_question_230)],

            ["", "1.2.3", "% of dry waste processed/ disposal by the authorized parties ", ""],

            [" ", " ", "80% or above", "30", ...oneUsers.map(user => user.second_form_question_235)],


            ["100", "1.2.4", "Scientific treatment of legacy solid waste", ""],
            [" ", " ", " a. 100% of legacy waste treated and processed scientificallyb. 100% Land reclaimedc. 100% collection, segregation and treatment of current waste", " 100", ...oneUsers.map(user => user.second_form_question_240)],


            [" (Relative Marking) ", "1.2.5", "Awareness campaigns for Single Use Plastic ban.", "50", ...oneUsers.map(user => user.second_form_question_248)],

            ["(Relative Marking)", "1.2.5", "Awareness campaign on alternatives of plastic.", "50", ...oneUsers.map(user => user.second_form_question_255)],

            ["200", "", "Number of reports, updated on compliance module of CPCB portal ", ""],
            [" ", " ", "More than 100 reports", "200", ...oneUsers.map(user => user.second_form_question_262)],


            ["25", "1.2.6 (Yes/No)", "100% health care facilities and medical practitioners are member of Common Bio-medical Waste Treatment Facility (CBWTF)", " ", ...oneUsers.map(user => user.second_form_question_266)],


            ["(Relative Marking)", "1.2.6", "Percentage of Biomedical waste disposed scientifically", "25", ...oneUsers.map(user => user.second_form_question_270)],
            ["(Relative Marking)", "1.2.7", "Awareness activities on proper segregation of E-waste", "10", ...oneUsers.map(user => user.second_form_question_278)],
            [" ", "1.2.7 (Yes/No)", "Mechanism for E-waste collection", "10", ...oneUsers.map(user => user.second_form_question_284)],

            ["", "1.2.7 (Yes/No)", "Presence of functional collection center", "20", ...oneUsers.map(user => user.second_form_question_289)],
            ["(Relative Marking)", "1.2.7", "Amount of E-waste processed scientifically/ responsibly (in kg) by authorized dismantler or recycler", "10", ...oneUsers.map(user => user.second_form_question_294)],

            ["50", "1.2.8", "ODF Status", " "],
            ["50", "", "ODF ++", "40", ...oneUsers.map(user => user.second_form_question_300)],


            ["", "2.1", "Air quality monitoring report from – MoEFCC recognized/NABL accredited labs", "100"],
            [" ", " ", "8 Reports or more", "100", ...oneUsers.map(user => user.second_form_question_305)],

            ["(Relative Marking)", "2.1", "Number of Air Quality Monitoring stations, including visible public display", "50", ...oneUsers.map(user => user.second_form_question_320)],
            ["(Relative Marking)", "2.1", "Number of Air Quality Monitoring stations, without visible public display", "30", ...oneUsers.map(user => user.second_form_question_326)],


            [" ", "2.2.1 (Yes/No)", "Copy of order – ban on sale and use of firecrackers", "25", ...oneUsers.map(user => user.second_form_question_332)],


            ["(Relative Marking)", " ", "Number of awareness event/initiative taken up by Local body", "50", ...oneUsers.map(user => user.second_form_question_336)],

            ["75", "", "Air Quality Monitoring Report on the evening /Next morning of the festival - with AQI as per the National Air Quality Index", ""],
            [" ", " ", "0-100 (Good/Satisfactory)", "75", ...oneUsers.map(user => user.second_form_question_342)],


            ["100", "2.2.2", "Promotion of good habits", ""],
            ["(Relative Marking)", "", "Length of newly created obstruction free Cycling Track (in Km) during Majhi Vasundhara Abhiyan 4", "75", ...oneUsers.map(user => user.second_form_question_347)],


            ["(Relative Marking)", "2.2.2", "Upkeep:Length of obstruction free Cycling Track created (in Km) during MVA 1.0, 2.0, 3.0 and maintained", "25"],
            [" ", " ", "MV01", " ", ...oneUsers.map(user => user.second_form_question_355)],
            [" ", " ", "MV02", " ", ...oneUsers.map(user => user.second_form_question_361)],
            [" ", " ", "MV03", " ", ...oneUsers.map(user => user.second_form_question_367)],



            ["", "2.2.3", "Identification of land/area for C&D waste storage", "20 ", ...oneUsers.map(user => user.second_form_question_373)],




            [" ", " 2.2.3", "Dedicated vehicles for collection", "20", ...oneUsers.map(user => user.second_form_question_378)],

            [" ", "2.2.3", "Segregation of C&D waste ", " ", ...oneUsers.map(user => user.second_form_question_383)],


            ["(Relative Marking)", "2.2.3", "Percentage of C&D waste reused", "20", ...oneUsers.map(user => user.second_form_question_387)],
            ["(Relative Marking)", "2.2.3", "Percentage of construction sites having appropriate cover", "20", ...oneUsers.map(user => user.second_form_question_391)],
            ["(Relative Marking) 300", "2.3.1", "EVs registered in Local body area during Majhi Vasundhara Abhiyan 4.0", " "],
            ["", "", "2W EV", "50", ...oneUsers.map(user => user.second_form_question_395)],
            [" ", " ", "3W EV", "50", ...oneUsers.map(user => user.second_form_question_400)],
            [" ", " ", "4W EV", "100", ...oneUsers.map(user => user.second_form_question_405)],
            [" ", " ", "Buses EV", "100", ...oneUsers.map(user => user.second_form_question_410)],


            ["(Relative Marking) ", " 2.3.1", " EVs purchased/hired by Local body during Majhi Vasundhara Abhiyan 4.0", " 100", ...oneUsers.map(user => user.second_form_question_415)],


            ["(Relative Marking) 50 ", "2.3.1", " % of EV Public Transport 10% - 15% or more", "50", ...oneUsers.map(user => user.second_form_question_420)],

            ["(Relative Marking) 50", "2.3.1", "% of EV last mile delivery", ""],
            [" ", " ", "10% - 15% or more", "50", ...oneUsers.map(user => user.second_form_question_425)],


            ["(Relative Marking) 30", "2.3.2", "Number of EV charging stations created during Majhi Vasundhara Abhiyan 4.0", ""],
            [" ", " ", "Two Wheelers", "15", ...oneUsers.map(user => user.second_form_question_430)],
            [" ", " ", "Four Wheelers  ", "15", ...oneUsers.map(user => user.second_form_question_438)],


            ["(Relative Marking) 20", "2.3.2", "Upkeep:Number of EV charging stations created during Majhi Vasundhara Abhiyan 2.0, 3.0 and maintained", ""],
            [" ", " ", " Two Wheelers MV02", " ", ...oneUsers.map(user => user.second_form_question_446)],
            [" ", " ", " Four Wheelers MV02", " ", ...oneUsers.map(user => user.second_form_question_451)],
            [" ", " ", "Two Wheelers MV03 ", " ", ...oneUsers.map(user => user.second_form_question_456)],
            [" ", " ", "Four Wheelers MV03 ", " ", ...oneUsers.map(user => user.second_form_question_461)],
            [" ", " ", "Total Two Wheelers ", " 10", ...oneUsers.map(user => user.second_form_question_466)],
            [" ", " ", "Total Four Wheelers ", " 10", ...oneUsers.map(user => user.second_form_question_471)],


            [" (Relative Marking)", "2.3.2 ", " Total number of functional charging points available at charging stations.", " 20", ...oneUsers.map(user => user.second_form_question_476)],
            ["(Relative Marking)", " ", "Number of charging stations with renewable energy supply", "30", ...oneUsers.map(user => user.second_form_question_481)],


            ["100", "2.4", "Number of events organized to create awareness regarding climate change during:", ""],
            [" (Relative Marking)", " ", " First half (April to Sept) of the Majhi Vasundhara Abhiyan 4.0 ", "50 ", ...oneUsers.map(user => user.second_form_question_486)],
            ["(Relative Marking) ", " ", "Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0 ", " 50", ...oneUsers.map(user => user.second_form_question_492)],




            ["(Relative Marking)", "2.4", "Number of youth participants who have completed Climate Change Course on Youth Leadership for Climate Action ", "100", ...oneUsers.map(user => user.second_form_question_498)],
            ["", "2.5", "Reporting on CDP Portal (For Amrut City Only)", "100", ...oneUsers.map(user => user.second_form_question_504)],
            ["(Relative Marking)", "2.5", "Number of workshops / Events on Climate Action attended by head/representatives of AmrutCities which are organized by GoI, GoM, C40, WRI, and other partners", "100", ...oneUsers.map(user => user.second_form_question_508)],
            ["(Relative Marking)", "3.1", "Number of waterbodies rejuvenated by removing silt or through repair work during Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.second_form_question_515)],
            ["(Relative Marking)", "3.1", "Upkeep: Number of waterbodies rejuvenated during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained ", "50", ...oneUsers.map(user => user.second_form_question_523)],


            ["(Relative Marking)", "3.1", "Water storage capacity added through rejuvenation of existing waterbodies (in Cubic meter) during Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.second_form_question_527)],
            ["", "3.2.1", "% of govt. buildings with water audit conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0", "", ...oneUsers.map(user => user.second_form_question_531)],
            ["(Relative Marking)", "3.2.1", "Percentage of buildings where water audit recommendations are implemented ", "50", ...oneUsers.map(user => user.second_form_question_536)],
            ["", "3.2.2 (Yes/No)", "Water audit of water supply system carried out conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0", "75", ...oneUsers.map(user => user.second_form_question_542)],


            ["", "3.2.2 Yes/No", "Water audit recommendations implemented ", "25", ...oneUsers.map(user => user.second_form_question_548)],
            ["", "3.3.1", "Percentage of Public Buildings with functioning Rainwater harvesting projects installed before and during Majhi Vasundhara Abhiyan 4.0", "", ...oneUsers.map(user => user.second_form_question_554)],
            ["(Relative Marking)", "3.3.1", "Rainwater harvested during the Majhi Vasundhara Abhiyan 4.0 (in Cubic meter)", "50", ...oneUsers.map(user => user.second_form_question_560)],
            ["(Relative Marking)", "3.3.2", "Number of new percolation pits created during Majhi Vasundhara Abhiyan 4.0", "25", ...oneUsers.map(user => user.second_form_question_564)],
            ["(Relative Marking)", "3.3.2", "Upkeep:Number of percolation pits created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained", "25", ...oneUsers.map(user => user.second_form_question_571)],


            ["", "3.4", "Mapping of all wells in the Local body with geotagging.", "20", ...oneUsers.map(user => user.second_form_question_575)],
            ["", "3.4", "Identification of dysfunctional wells.", "20", ...oneUsers.map(user => user.second_form_question_580)],
            ["", "3.4", "Rejuvenation/Recharge of dysfunctional wells.", "40", ...oneUsers.map(user => user.second_form_question_585)],
            ["", "3.4", "Water quality report of rejuvenated wells ", "25", ...oneUsers.map(user => user.second_form_question_594)],
            ["", "3.4", "Preparation of water quality report", "50", ...oneUsers.map(user => user.second_form_question_598)],
            ["", "3.4", "Quality of water as per drinking water Standards ", "30", ...oneUsers.map(user => user.second_form_question_602)],
            ["", "3.5", "Presence of functional STP/FSTP in the Local body", "50", ...oneUsers.map(user => user.second_form_question_606)],
            ["", "3.5", "Percentage of treated water from STP/FSTP reused ", "50", ...oneUsers.map(user => user.second_form_question_610)],


            ["", "3.5", "Treated water quality report as per MPCB discharge standards", "50", ...oneUsers.map(user => user.second_form_question_616)],
            ["(Relative Marking)", "3.6", "Number of promotional activities for eco-friendly immersion", "20", ...oneUsers.map(user => user.second_form_question_620)],
            ["(Relative Marking)", "3.6", "No. of artificial immersion spots created", "50", ...oneUsers.map(user => user.second_form_question_626)],


            ["", "3.6", "Collection, segregation, transport and processing of worship material pre and post immersion", "30", ...oneUsers.map(user => user.second_form_question_632)],
            ["(Relative Marking)", "3.7", "No. of promotional activity done ", "50", ...oneUsers.map(user => user.second_form_question_636)],
            ["(Relative Marking)", "3.7", "Percentage of eco friendly idols worshipped. Community ", "50", ...oneUsers.map(user => user.second_form_question_642)],
            ["(Relative Marking)", "3.7", "Percentage of eco friendly idols worshipped. Individual", "50", ...oneUsers.map(user => user.second_form_question_648)],


            ["", "3.8", "Preparation of Brief Document. wetland as per Wetlands (Conservation & Management) Rules, 2017", "100", ...oneUsers.map(user => user.second_form_question_654)],
            ["", "4.1", "Number of awareness events organized to promote Renewable energy during Majhi Vasundhara Abhiyan 4.0", ""],
            ["(Relative Marking)", "4.1", "First Half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.second_form_question_659)],
            ["(Relative Marking)", "4.1", "Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.second_form_question_666)],
            ["", "4.2.1", "Percentage of LED Streetlights of total Streetlights", "100", ...oneUsers.map(user => user.second_form_question_673)],
            ["(Relative Marking)", "4.2.2", "Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 4.0", "200", ...oneUsers.map(user => user.second_form_question_683)],
            ["(Relative Marking)", "4.2.2", "Upkeep:Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0", "100"],
            ["", "", "MV1.0", "", ...oneUsers.map(user => user.second_form_question_693)],
            ["", "", "MV2.0", "", ...oneUsers.map(user => user.second_form_question_698)],


            ["", "", "MV3.0", "", ...oneUsers.map(user => user.second_form_question_703)],
            ["(Relative Marking)", "", "Total capacity (in Liter per Day) of solar water heaters installed in a Local body", "100", ...oneUsers.map(user => user.second_form_question_708)],
            ["(Relative Marking)", "4.2.3", "Number of new green buildings", "40", ...oneUsers.map(user => user.second_form_question_716)],
            ["(Relative Marking)", "4.2.3", "Number of existing buildings converted to green buildings during Majhi Vasundhara Abhiyan 4.0", "40", ...oneUsers.map(user => user.second_form_question_722)],
            ["(Relative Marking)", "4.2.3", "Percentage of Platinum rated (LEED and IGBC) or 5-star (GRIHA) rated green buildings", "20", ...oneUsers.map(user => user.second_form_question_728)],


            ["", "4.2.4", "% of public buildings with energy audit conducted during Majhi Vasundhara Abhiyan 3.0 and Majhi Vasundhara Abhiyan 4.0.", "", ...oneUsers.map(user => user.second_form_question_734)],
            ["(Relative Marking)", "4.2.4", "% of buildings in which recommendations of energy audit were implemented", "50", ...oneUsers.map(user => user.second_form_question_742)],
            ["(Relative Marking)", "5.1", "No. of E-Pledges registered on the portal by citizens of the Local body individually during MVA 4.0 for 3 quarters starting from July to Sept-23", "200", ...oneUsers.map(user => user.second_form_question_750)],
            ["(Relative Marking)", "5.1", "No. of E-Pledges registered on the portal by citizens of the Local body in a group during MVA 4.0 for 3 quarters starting from July to Sept-23", "100", ...oneUsers.map(user => user.second_form_question_755)],
            ["(Relative Marking)", "5.1", "Compliance: % of #Epledge registered and complied individually during MVA 4.0", "75", ...oneUsers.map(user => user.second_form_question_760)],
            ["(Relative Marking)", "5.1", "Compliance: % of #Epledge registered and complied in a group during MVA 4.0", "25", ...oneUsers.map(user => user.second_form_question_764)],


            ["(Relative Marking)", "5.1", "Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered)", "100", ...oneUsers.map(user => user.second_form_question_768)],
            ["", "5.2", "Number of Awareness Events/Activities/Spardha conducted by the Local body", ""],
            ["(Relative Marking)", "", "First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.second_form_question_772)],
            ["(Relative Marking)", "", "Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", "100", ...oneUsers.map(user => user.second_form_question_778)],
            ["(Relative Marking)", "5.2", "Number of likes and shares on posts of awareness events/activities/spardha on social media page of Local body with #majhivasundhara #MissionLiFE", "200", ...oneUsers.map(user => user.second_form_question_784)],


            ["(Relative Marking)", "5.2", "Use of eco friendly material for the promotional events/activity of Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.second_form_question_791)],
            ["(Relative Marking)", "5.2", "Effective use of Mission LiFE logo in organized activities and events", "50", ...oneUsers.map(user => user.second_form_question_797)],
            ["(Relative Marking)", "5.3", "Number of events conducted by Local body which involved participation of youths / youth groups", "100", ...oneUsers.map(user => user.second_form_question_803)],


            ["(Relative Marking)", "5.3", "Number of Paryavaran Doot identified", "50", ...oneUsers.map(user => user.second_form_question_809)],
            ["(Relative Marking)", "5.3", "Number of Youth identified as Paryavaran Doot", "50", ...oneUsers.map(user => user.second_form_question_815)],
            ["(Relative Marking) 100", "5.3", "Number of events conducted by the Local body with Paryavaran doot", ""],
            ["(Relative Marking)", "5.3", "First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.second_form_question_821)],
            ["(Relative Marking)", "5.3", "Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0", "50", ...oneUsers.map(user => user.second_form_question_828)],
            ["(Relative Marking)", "5.4", "Percentage of Schools participated in ESS during Majhi Vasundhara Abhiyan 4.0", "30", ...oneUsers.map(user => user.second_form_question_835)],
            ["(Relative Marking)", "5.4", "Formation of the group of students and appointment of respective in-charge from each participating school for ESS.", "20", ...oneUsers.map(user => user.second_form_question_841)],


            ["(Relative Marking)", "5.4", "Number of annual thematic camps/ campaigns/ activities organized to implement environmental initiatives", "30", ...oneUsers.map(user => user.second_form_question_846)],
            ["(Relative Marking)", "5.4", "Number of community meetings/events conducted by the ESS Groups", "20", ...oneUsers.map(user => user.second_form_question_852)],
            ["", "5.5", "Number of new spots Developed with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 100 marks will be allocated for each new spot developed. ", "500", ...oneUsers.map(user => user.second_form_question_859)],
            ["", "", "Upkeep:Number of old spots (created during MVA 1.0,2.0,3.0) refurbished with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 25 marks will be allocated for each spot refurbished.", "250"],
            ["", "5.5", "MV1.0", ...oneUsers.map(user => user.second_form_question_867)],
            ["", "5.5", "MV2.0", ...oneUsers.map(user => user.second_form_question_874)],
            ["", "5.5", "MV3.0", ...oneUsers.map(user => user.second_form_question_881)],


            ["(Relative Marking)", "5.5", "Number of innovative spots developed by using recycled waste during Majhi Vasundhara Abhiyan 4.0 ", "50", ...oneUsers.map(user => user.second_form_question_888)],
            ["(Relative Marking)", "5.6", "Number of Majhi Vasundhara Abhiyan initiatives funded through alternate funding channels.", "100", ...oneUsers.map(user => user.second_form_question_893)],
            ["(Relative Marking)", "5.6", "Amount of money leveraged through Alternative Funding channels.", "100", ...oneUsers.map(user => user.second_form_question_900)],
        ]);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(wb, ws, "Cities Data");

        // Save the workbook as an Excel file
        XLSX.writeFile(wb, "10Lakh+Population.xlsx");
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
                endpoint = '/api/v1/cities/amrut/category/1-3lakh';
            } else {
                endpoint = `/api/v1/city/${userId}`;
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
                const submittedResponse = await axios.get(`/api/v1/city-sub`, {
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
            <div className='addUsertt'>
                <h1 className="text-center m-2">Cumulative of 1-3Lakh Population</h1>
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
                                                <th></th>
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
                                                <td></td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-name-${user.ulb_code}`}>{user.ulb_name}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>ULB ID</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-id-${user.ulb_code}`}>{user.ulb_code}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>1.1.1 Number</td>
                                                <td>Total number of trees planted
                                                    and survived during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td>200</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question1-${user.ulb_code}`}>{user.second_form_question_1}</td>
                                                ))}

                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>Number</td>
                                                <td>Indigenous trees:
                                                    Out of total trees planted,
                                                    number of indigenous trees
                                                    planted and survived during
                                                    Majhi Vasundhara Abhiyan 4.0  </td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question9-${user.ulb_code}`}>{user.second_form_question_9}</td>
                                                ))}

                                            </tr>


                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>Number</td>
                                                <td>Upkeep:
                                                    Trees planted and survived
                                                    during Majhi Vasundhara
                                                    Abhiyan 1.0, 2.0, 3.0</td>
                                                <td>100</td>
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV01</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question17-${user.ulb_code}`}>{user.second_form_question_17}</td>
                                                ))}

                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV02</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question22-${user.ulb_code}`}>{user.second_form_question_22}</td>
                                                ))}

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV03</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question27-${user.ulb_code}`}>{user.second_form_question_27}</td>
                                                ))}

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>1.1.2 (Yes/No)</td>
                                                <td>Tree Census with Geotagging – Report Prepared and
                                                    Published before Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question32-${user.ulb_code}`}>{user.second_form_question_32}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td>1(a) (Yes/No)</td>
                                                <td>If Yes, Tree Census with geotagging, report updated
                                                    and published during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question39-${user.ulb_code}`}>{user.second_form_question_39}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>75</td>
                                                <td>1(b) (Yes/No)</td>
                                                <td>If No, Status during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td></td>
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>Tree Census with geotagging –100%
                                                    report prepared and published</td>
                                                <td>75</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question46-${user.ulb_code}`}>{user.second_form_question_46}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>List of Heritage Tree- updated and published </td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question52-${user.ulb_code}`}>{user.second_form_question_52}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>100% projects</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question58-${user.ulb_code}`}>{user.second_form_question_58}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td>1.1.3</td>
                                                <td>100%</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question66-${user.ulb_code}`}>{user.second_form_question_66}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>50</td>
                                                <td>(Yes/No)</td>
                                                <td>% survival of compensatory plantation</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>95% or more</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question71-${user.ulb_code}`}>{user.second_form_question_71}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>1.1.4</td>
                                                <td>Cumulative capacity of the
                                                    nursery (sq m)</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question76-${user.ulb_code}`}>{user.second_form_question_76}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Cumulative nursery capacity to Area
                                                    of the Local body (CNCA)
                                                    [=Cumulative capacity of the
                                                    nursery/Total area of the Local body
                                                    (in sq km)]</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question81-${user.ulb_code}`}>{user.second_form_question_81}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Number of saplings (Height above 4
                                                    feet) present and/or sold by the
                                                    nursery, during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>60</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question85-${user.ulb_code}`}>{user.second_form_question_85}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>1.1.5 Number</td>
                                                <td>No. of new green areas created
                                                    The evaluation will be done based
                                                    on the number of green areas
                                                    created. Each green area created
                                                    will get 10 marks. </td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question90-${user.ulb_code}`}>{user.second_form_question_90}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Upkeep:
                                                    Maintenance of total green areas
                                                    created during Majhi Vasundhara
                                                    Abhiyan 1.0, 2.0, 3.0
                                                    Each green area maintained will
                                                    get 05 marks</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV1.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question101-${user.ulb_code}`}>{user.second_form_question_101}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV2.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question107-${user.ulb_code}`}>{user.second_form_question_107}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV3.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question113-${user.ulb_code}`}>{user.second_form_question_113}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>1.1.6</td>
                                                <td>GIS/Remote Sensing based land use map</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question119-${user.ulb_code}`}>{user.second_form_question_119}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>Does the ULB have 33% green cover? </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question124-${user.ulb_code}`}>{user.second_form_question_124}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>50</td>
                                                <td></td>
                                                <td>Does the ULB have a tree plan?</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>If ULB has achieved 33% green cover and have a Tree plan to
                                                    increase it further (Tree plan should be published on website) </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question132-${user.ulb_code}`}>{user.second_form_question_132}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>If ULB has not achieved 33% green cover and has a Tree Plan to
                                                    achieve a minimum 33% green cover (Tree plan should be
                                                    published on website)</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question137-${user.ulb_code}`}>{user.second_form_question_137}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>If ULB has achieved 33% green cover but they have not prepared
                                                    plan to increase beyond 33% green cover</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question142-${user.ulb_code}`}>{user.second_form_question_142}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>If ULB has not achieved 33% green cover and they have not
                                                    prepared plan to achieve 33% green cover</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question147-${user.ulb_code}`}>{user.second_form_question_147}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>50</td>
                                                <td></td>
                                                <td>Implementation of the Tree Plan</td>
                                                <td></td>
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Achieved milestone for the Majhi Vasundhara Abhiyan 4.0 </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question152-${user.ulb_code}`}>{user.second_form_question_152}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Haven’t achieved milestone for the Majhi Vasundhara Abhiyan 4.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question156-${user.ulb_code}`}>{user.second_form_question_156}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>1.1.7 </td>
                                                <td>Formation of BMC</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question160-${user.ulb_code}`}>{user.second_form_question_160}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Number of meetings conducted by BMC
                                                    (5 marks for each meeting)</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question165-${user.ulb_code}`}>{user.second_form_question_165}</td>
                                                ))}
                                            </tr>





                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>PBR: Prepared and approved by BMC
                                                    during and before Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question172-${user.ulb_code}`}>{user.second_form_question_172}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Submission of PBR to MSBB</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question177-${user.ulb_code}`}>{user.second_form_question_177}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>BMC Action Plan</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question182-${user.ulb_code}`}>{user.second_form_question_182}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>30</td>
                                                <td>1.1.8</td>
                                                <td>Harit Brand Certification during MVA 4.0
                                                    period</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ULB Re-certified with HARIT
                                                    Brand </td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question186-${user.ulb_code}`}>{user.second_form_question_186}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>70</td>
                                                <td></td>
                                                <td>Usage of compost-
                                                    % of Compost sold/ self utilized Above 90%</td>
                                                <td>70</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question191-${user.ulb_code}`}>{user.second_form_question_191}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td>1.2.1</td>
                                                <td>Percentage of solid waste segregated at
                                                    source and collected</td>
                                                <td>50</td>
                                            </tr>

                                            <tr>
                                                <td>25</td>
                                                <td>1(a) </td>
                                                <td>Segregation at source</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question198-${user.ulb_code}`}>{user.second_form_question_198}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>25</td>
                                                <td>1(b)</td>
                                                <td>Collection</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question204-${user.ulb_code}`}>{user.second_form_question_204}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>50</td>
                                                <td></td>
                                                <td>GFC Rating of the cities</td>
                                                <td></td>
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>7 star</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question210-${user.ulb_code}`}>{user.second_form_question_210}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>50</td>
                                                <td>1.2.2</td>
                                                <td>% of wet waste processed</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>90% and above</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question214-${user.ulb_code}`}>{user.second_form_question_214}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td></td>
                                                <td>1.2.3 (Yes/No)</td>
                                                <td>Presence of functional MRF center</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question221-${user.ulb_code}`}>{user.second_form_question_221}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>10</td>
                                                <td></td>
                                                <td>Secondary Segregation of dry waste collected  </td>
                                                <td>10</td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>90% or above </td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question225-${user.ulb_code}`}>{user.second_form_question_225}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>30</td>
                                                <td></td>
                                                <td>Dry waste processing /disposal</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question230-${user.ulb_code}`}>{user.second_form_question_230}</td>
                                                ))}

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>% of dry waste processed/ disposal by
                                                    the authorized parties</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>80% and above</td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question235-${user.ulb_code}`}>{user.second_form_question_235}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>100</td>
                                                <td>1.2.4</td>
                                                <td>Scientific treatment of legacy solid waste</td>
                                                <td></td>
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>a. 100% of legacy waste treated and
                                                    processed scientifically
                                                    b. 100% Land reclaimed
                                                    c. 100% collection, segregation and
                                                    treatment of current waste</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question240-${user.ulb_code}`}>{user.second_form_question_240}</td>
                                                ))}
                                            </tr>




                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>1.2.5</td>
                                                <td>Awareness campaigns for Single Use Plastic ban.</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question248-${user.ulb_code}`}>{user.second_form_question_248}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Awareness campaign on alternatives of plastic.</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question255-${user.ulb_code}`}>{user.second_form_question_255}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>200</td>
                                                <td></td>
                                                <td>Number of reports, updated on compliance module of CPCB portal </td>
                                                <td></td>
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>More than 100 reports</td>
                                                <td>200</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question262-${user.ulb_code}`}>{user.second_form_question_262}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>25</td>
                                                <td>1.2.6 (Yes/No)</td>
                                                <td>100% health care facilities and
                                                    medical practitioners are member of
                                                    Common Bio-medical Waste
                                                    Treatment Facility (CBWTF)</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question266-${user.ulb_code}`}>{user.second_form_question_266}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Percentage of Biomedical waste
                                                    disposed scientifically</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question270-${user.ulb_code}`}>{user.second_form_question_270}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>1.2.7</td>
                                                <td>Awareness activities on proper segregation
                                                    of E-waste</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question278-${user.ulb_code}`}>{user.second_form_question_278}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>Mechanism for E-waste collection</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question284-${user.ulb_code}`}>{user.second_form_question_284}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>(Yes/No)</td>
                                                <td>Presence of functional collection center</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question289-${user.ulb_code}`}>{user.second_form_question_289}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Amount of E-waste processed scientifically/
                                                    responsibly (in kg) by authorized dismantler
                                                    or recycler</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question294-${user.ulb_code}`}>{user.second_form_question_294}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>50</td>
                                                <td>1.2.8</td>
                                                <td>ODF Status </td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>ODF++</td>
                                                <td>40</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question300-${user.ulb_code}`}>{user.second_form_question_300}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>50</td>
                                                <td>1.2.8</td>
                                                <td>ODF Status </td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>2.1</td>
                                                <td>Air quality monitoring report from – MoEFCC
                                                    recognized/NABL accredited labs</td>
                                                <td>100</td>

                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>8 Reports or more</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question305-${user.ulb_code}`}>{user.second_form_question_305}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Number of Air Quality Monitoring
                                                    stations, including visible public
                                                    display</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question320-${user.ulb_code}`}>{user.second_form_question_320}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Number of Air Quality Monitoring
                                                    stations, without visible public
                                                    display</td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question326-${user.ulb_code}`}>{user.second_form_question_326}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>2.2.1 (Yes/No)</td>
                                                <td>Copy of order – ban on sale and use of firecrackers</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question332-${user.ulb_code}`}>{user.second_form_question_332}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Number of awareness event/initiative
                                                    taken up by Local body</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question336-${user.ulb_code}`}>{user.second_form_question_336}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>75</td>
                                                <td></td>
                                                <td>Air Quality Monitoring Report on the evening /Next morning of the festival - with AQI as per the National Air Quality Index</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>0-100 (Good/Satisfactory)</td>
                                                <td>75</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question342-${user.ulb_code}`}>{user.second_form_question_342}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Length of newly created
                                                    obstruction free Cycling Track
                                                    (in Km) during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td>75</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question347-${user.ulb_code}`}>{user.second_form_question_347}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Upkeep:
                                                    Length of obstruction free
                                                    Cycling Track created (in Km)
                                                    during MVA 1.0, 2.0, 3.0 and
                                                    maintained</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV01</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question355-${user.ulb_code}`}>{user.second_form_question_355}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV02</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question361-${user.ulb_code}`}>{user.second_form_question_361}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV03</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question367-${user.ulb_code}`}>{user.second_form_question_367}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>2.2.3</td>
                                                <td>Identification of land/area for
                                                    C&D waste storage</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question373-${user.ulb_code}`}>{user.second_form_question_373}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Dedicated vehicles for collection</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question378-${user.ulb_code}`}>{user.second_form_question_378}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Segregation of C&D waste </td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question383-${user.ulb_code}`}>{user.second_form_question_383}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking) </td>
                                                <td></td>
                                                <td>Percentage of C&D waste reused</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question387-${user.ulb_code}`}>{user.second_form_question_387}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking) </td>
                                                <td></td>
                                                <td>Percentage of construction sites
                                                    having appropriate cover</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question391-${user.ulb_code}`}>{user.second_form_question_391}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>(Relative Marking) 300</td>
                                                <td>2.3.1</td>
                                                <td>EVs registered in Local body area during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>2W EV</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question395-${user.ulb_code}`}>{user.second_form_question_395}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>3W EV</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question400-${user.ulb_code}`}>{user.second_form_question_400}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>4W EV</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question405-${user.ulb_code}`}>{user.second_form_question_405}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Buses EV</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question410-${user.ulb_code}`}>{user.second_form_question_410}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>EVs purchased/hired by Local body during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question415-${user.ulb_code}`}>{user.second_form_question_415}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>(Relative Marking) 50</td>
                                                <td></td>
                                                <td>% of EV Public Transport</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>10% - 15% or more</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question420-${user.ulb_code}`}>{user.second_form_question_420}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>(Relative Marking) 50</td>
                                                <td></td>
                                                <td>% of EV last mile delivery</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>10% - 15% or more </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question425-${user.ulb_code}`}>{user.second_form_question_425}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking) 30</td>
                                                <td>2.3.2</td>
                                                <td>Number of EV charging stations created during Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Two Wheelers</td>
                                                <td>15</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question430-${user.ulb_code}`}>{user.second_form_question_430}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Four Wheelers </td>
                                                <td>15</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question438-${user.ulb_code}`}>{user.second_form_question_438}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking) 20</td>
                                                <td></td>
                                                <td>Upkeep:
                                                    Number of EV charging stations created during Majhi
                                                    Vasundhara Abhiyan 2.0, 3.0 and maintained</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Two Wheelers MV02</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question446-${user.ulb_code}`}>{user.second_form_question_446}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Four Wheelers MV02</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question451-${user.ulb_code}`}>{user.second_form_question_451}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Two Wheelers MV03</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question456-${user.ulb_code}`}>{user.second_form_question_456}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Four Wheelers MV03</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question461-${user.ulb_code}`}>{user.second_form_question_461}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total Two Wheelers</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question466-${user.ulb_code}`}>{user.second_form_question_466}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total Four Wheelers</td>
                                                <td>10</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question471-${user.ulb_code}`}>{user.second_form_question_471}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Total number of functional charging points available at charging stations.</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question476-${user.ulb_code}`}>{user.second_form_question_476}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Number of charging stations with renewable energy supply</td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question481-${user.ulb_code}`}>{user.second_form_question_481}</td>
                                                ))}
                                            </tr>


                                            <tr>
                                                <td>100</td>
                                                <td>2.4</td>
                                                <td>Number of events organized to create awareness regarding climate change during:</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>First half (April to Sept) of the Majhi
                                                    Vasundhara Abhiyan 4.0 </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question486-${user.ulb_code}`}>{user.second_form_question_486}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Second half (Oct – March) of the
                                                    Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question492-${user.ulb_code}`}>{user.second_form_question_492}</td>
                                                ))}
                                            </tr>








                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>2.4</td>
                                                <td>Number of youth participants who have completed Climate Change Course on Youth Leadership for Climate Action </td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question498-${user.ulb_code}`}>{user.second_form_question_498}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>2.5 </td>
                                                <td>Reporting on CDP Portal (For Amrut City Only)</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question504-${user.ulb_code}`}>{user.second_form_question_504}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>2.5</td>
                                                <td>Number of workshops / Events on Climate Action attended by head/representatives of AmrutCities which are organized by GoI, GoM, C40, WRI, and other partners</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question508-${user.ulb_code}`}>{user.second_form_question_508}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.1</td>
                                                <td>Number of waterbodies rejuvenated by removing silt or through repair work during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question515-${user.ulb_code}`}>{user.second_form_question_515}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.1</td>
                                                <td>Upkeep: Number of waterbodies rejuvenated during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question523-${user.ulb_code}`}>{user.second_form_question_523}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.1</td>
                                                <td>Water storage capacity added through rejuvenation of existing waterbodies (in Cubic meter) during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question527-${user.ulb_code}`}>{user.second_form_question_527}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.2.1</td>
                                                <td>% of govt. buildings with water audit conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question531-${user.ulb_code}`}>{user.second_form_question_531}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.2.1</td>
                                                <td>Percentage of buildings where water audit recommendations are implemented </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question536-${user.ulb_code}`}>{user.second_form_question_536}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.2.2 (Yes/No)</td>
                                                <td>Water audit of water supply system carried out conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>75</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question542-${user.ulb_code}`}>{user.second_form_question_542}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.2.2 Yes/No</td>
                                                <td>Water audit recommendations implemented </td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question548-${user.ulb_code}`}>{user.second_form_question_548}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.2.1</td>
                                                <td>Percentage of Public Buildings with functioning Rainwater harvesting projects installed before and during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question554-${user.ulb_code}`}>{user.second_form_question_554}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.3.1</td>
                                                <td>Rainwater harvested during the Majhi Vasundhara Abhiyan 4.0 (in Cubic meter)</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question560-${user.ulb_code}`}>{user.second_form_question_560}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.2.2</td>
                                                <td>Number of new percolation pits created during Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question564-${user.ulb_code}`}>{user.second_form_question_564}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.2.2</td>
                                                <td>Upkeep:Number of percolation pits created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question571-${user.ulb_code}`}>{user.second_form_question_571}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Mapping of all wells in the Local body with geotagging.</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question575-${user.ulb_code}`}>{user.second_form_question_575}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Identification of dysfunctional wells.</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question580-${user.ulb_code}`}>{user.second_form_question_580}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Rejuvenation/Recharge of dysfunctional wells.</td>
                                                <td>40</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question585-${user.ulb_code}`}>{user.second_form_question_585}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Water quality report of rejuvenated wells</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question594-${user.ulb_code}`}>{user.second_form_question_594}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Preparation of water quality report</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question598-${user.ulb_code}`}>{user.second_form_question_598}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.4</td>
                                                <td>Quality of water as per drinking water Standards </td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question602-${user.ulb_code}`}>{user.second_form_question_602}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.5</td>
                                                <td>Presence of functional STP/FSTP in the Local body</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question606-${user.ulb_code}`}>{user.second_form_question_606}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.5</td>
                                                <td>Percentage of treated water from STP/FSTP reused </td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question610-${user.ulb_code}`}>{user.second_form_question_610}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.5</td>
                                                <td>Treated water quality report as per MPCB discharge standards</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question616-${user.ulb_code}`}>{user.second_form_question_616}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.6</td>
                                                <td>Number of promotional activities for eco-friendly immersion</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question620-${user.ulb_code}`}>{user.second_form_question_620}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.6</td>
                                                <td>No. of artificial immersion spots created</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question626-${user.ulb_code}`}>{user.second_form_question_626}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>3.6</td>
                                                <td>Collection, segregation, transport and processing of worship material pre and post immersion</td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question632-${user.ulb_code}`}>{user.second_form_question_632}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.7</td>
                                                <td>No. of promotional activity done </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question636-${user.ulb_code}`}>{user.second_form_question_636}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.7</td>
                                                <td>Percentage of eco friendly idols worshipped. Community </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question642-${user.ulb_code}`}>{user.second_form_question_642}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>3.7</td>
                                                <td>Percentage of eco friendly idols worshipped. Individual</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question648-${user.ulb_code}`}>{user.second_form_question_648}</td>
                                                ))}
                                            </tr>

                                            {/*Check from here */}


                                            <tr>
                                                <td></td>
                                                <td>3.8</td>
                                                <td>Preparation of Brief
                                                    Document. wetland as per Wetlands
                                                    (Conservation & Management) Rules, 2017</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question654-${user.ulb_code}`}>{user.second_form_question_654}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>4.1</td>
                                                <td>Number of awareness events
                                                    organized to promote Renewable
                                                    energy during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>First Half (April – Sept) of the
                                                    Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question659-${user.ulb_code}`}>{user.second_form_question_659}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Second Half (Oct – March) of
                                                    the Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question666-${user.ulb_code}`}>{user.second_form_question_666}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>4.2.1</td>
                                                <td>Percentage of LED
                                                    Streetlights of total
                                                    Streetlights</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question673-${user.ulb_code}`}>{user.second_form_question_673}</td>
                                                ))}
                                            </tr>



                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.2</td>
                                                <td>Total capacity of solar installations
                                                    (in kW)
                                                    during Majhi Vasundhara Abhiyan
                                                    4.0</td>
                                                <td>200</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question683-${user.ulb_code}`}>{user.second_form_question_683}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.2</td>
                                                <td>Upkeep:
                                                    Total capacity of solar installations
                                                    (in kW)
                                                    during Majhi Vasundhara Abhiyan
                                                    1.0, 2.0, 3.0</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV1.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question693-${user.ulb_code}`}>{user.second_form_question_693}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV2.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question698-${user.ulb_code}`}>{user.second_form_question_698}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV3.0</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question703-${user.ulb_code}`}>{user.second_form_question_703}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Total capacity (in Liter per Day) of
                                                    solar water heaters installed in a
                                                    Local body</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question708-${user.ulb_code}`}>{user.second_form_question_708}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.3</td>
                                                <td>Number of new green
                                                    buildings</td>
                                                <td>40</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question716-${user.ulb_code}`}>{user.second_form_question_716}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.3</td>
                                                <td>Number of existing buildings
                                                    converted to green buildings
                                                    during Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>40</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question722-${user.ulb_code}`}>{user.second_form_question_722}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.3</td>
                                                <td>Percentage of Platinum rated
                                                    (LEED and IGBC) or 5-star
                                                    (GRIHA) rated green buildings</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question728-${user.ulb_code}`}>{user.second_form_question_728}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>4.2.4</td>
                                                <td>% of public buildings with energy
                                                    audit conducted during Majhi
                                                    Vasundhara Abhiyan 3.0 and Majhi
                                                    Vasundhara Abhiyan 4.0.</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question734-${user.ulb_code}`}>{user.second_form_question_734}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>4.2.4</td>
                                                <td>% of buildings in which
                                                    recommendations of energy audit
                                                    were implemented</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question742-${user.ulb_code}`}>{user.second_form_question_742}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.1</td>
                                                <td>No. of E-Pledges registered on the portal by citizens of the
                                                    Local body individually during MVA 4.0 for 3 quarters
                                                    starting from July to Sept-23</td>
                                                <td>200</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question750-${user.ulb_code}`}>{user.second_form_question_750}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.1</td>
                                                <td>No. of E-Pledges registered on the portal by citizens of the
                                                    Local body in a group during MVA 4.0 for 3 quarters
                                                    starting from July to Sept-23</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question755-${user.ulb_code}`}>{user.second_form_question_755}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.1</td>
                                                <td>Compliance: % of #Epledge registered and complied
                                                    individually during MVA 4.0</td>
                                                <td>75</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question760-${user.ulb_code}`}>{user.second_form_question_760}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.1</td>
                                                <td>Compliance: % of #Epledge registered and complied in a
                                                    group during MVA 4.0</td>
                                                <td>25</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question764-${user.ulb_code}`}>{user.second_form_question_764}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.1</td>
                                                <td>Continuous top performers in all 3 quarters (Top 10 Ranks
                                                    from every quarter will be considered) </td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question768-${user.ulb_code}`}>{user.second_form_question_768}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>5.2</td>
                                                <td>Number of Awareness Events/Activities/Spardha conducted
                                                    by the Local body</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>First half (April – Sept) of the Majhi Vasundhara
                                                    Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question772-${user.ulb_code}`}>{user.second_form_question_772}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Second half (Oct – March) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question778-${user.ulb_code}`}>{user.second_form_question_778}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.2</td>
                                                <td>Number of likes and shares on posts of awareness
                                                    events/activities/spardha on social media page of
                                                    Local body with #majhivasundhara #MissionLiFE</td>
                                                <td>200</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question784-${user.ulb_code}`}>{user.second_form_question_784}</td>
                                                ))}
                                            </tr>

                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.2</td>
                                                <td>Use of eco friendly material for the promotional
                                                    events/activity of Majhi Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question791-${user.ulb_code}`}>{user.second_form_question_791}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.2</td>
                                                <td>Effective use of Mission LiFE logo in organized
                                                    activities and events</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question797-${user.ulb_code}`}>{user.second_form_question_797}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.3</td>
                                                <td>Number of events conducted by Local body which
                                                    involved participation of youths / youth groups</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question803-${user.ulb_code}`}>{user.second_form_question_803}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.3</td>
                                                <td>Number of Paryavaran Doot identified</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question809-${user.ulb_code}`}>{user.second_form_question_809}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.3</td>
                                                <td>Number of Youth identified as Paryavaran Doot</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question815-${user.ulb_code}`}>{user.second_form_question_815}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.3</td>
                                                <td>Number of events conducted by the Local body
                                                    with Paryavaran doot</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>First half (April – Sept) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question821-${user.ulb_code}`}>{user.second_form_question_821}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td></td>
                                                <td>Second half (Oct – March) of the Majhi
                                                    Vasundhara Abhiyan 4.0</td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question828-${user.ulb_code}`}>{user.second_form_question_828}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.4</td>
                                                <td>Percentage of Schools participated in ESS
                                                    during Majhi Vasundhara Abhiyan 4.0 </td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question835-${user.ulb_code}`}>{user.second_form_question_835}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.4</td>
                                                <td>Formation of the group of students and
                                                    appointment of respective in-charge from
                                                    each participating school for ESS.</td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question841-${user.ulb_code}`}>{user.second_form_question_841}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.4</td>
                                                <td>Number of annual thematic camps/
                                                    campaigns/ activities organized to
                                                    implement environmental initiatives </td>
                                                <td>30</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question846-${user.ulb_code}`}>{user.second_form_question_846}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.4</td>
                                                <td>Number of community meetings/events
                                                    conducted by the ESS Groups </td>
                                                <td>20</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question852-${user.ulb_code}`}>{user.second_form_question_852}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>5.5</td>
                                                <td>Number of new spots Developed with focus
                                                    on Majhi Vasundhara Principles during Majhi
                                                    Vasundhara Abhiyan 4.0
                                                    100 marks will be allocated for each new
                                                    spot developed.</td>
                                                <td>500</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question859-${user.ulb_code}`}>{user.second_form_question_859}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>5.5</td>
                                                <td>Upkeep:
                                                    Number of old spots (created during MVA
                                                    1.0,2.0,3.0) refurbished with focus on Majhi
                                                    Vasundhara Principles during Majhi
                                                    Vasundhara Abhiyan 4.0
                                                    25 marks will be allocated for each spot
                                                    refurbished. </td>
                                                <td>250</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV01</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question867-${user.ulb_code}`}>{user.second_form_question_867}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV02</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question874-${user.ulb_code}`}>{user.second_form_question_874}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>MV03</td>
                                                <td></td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question881-${user.ulb_code}`}>{user.second_form_question_881}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.5</td>
                                                <td>Number of innovative spots developed by
                                                    using recycled waste during Majhi
                                                    Vasundhara Abhiyan 4.0 </td>
                                                <td>50</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question888-${user.ulb_code}`}>{user.second_form_question_888}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.6</td>
                                                <td>Number of Majhi Vasundhara
                                                    Abhiyan initiatives funded through alternate funding
                                                    channels.</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-question893-${user.ulb_code}`}>{user.second_form_question_893}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td>(Relative Marking)</td>
                                                <td>5.6</td>
                                                <td>Amount of money leveraged
                                                    through Alternative Funding
                                                    channels.</td>
                                                <td>100</td>
                                                {oneUsers.map((user) => (
                                                    <td key={`city-second_form_question900-${user.ulb_code}`}>{user.second_form_question_900}</td>
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
