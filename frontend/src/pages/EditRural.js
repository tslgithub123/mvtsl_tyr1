import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Layout from "../components/Layout";
import "./add.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { Link, useParams, useNavigate } from 'react-router-dom';


const Add = () => {
    const [formData, setFormData] = useState({
        ulb_name: "",
            ulb_code: "",
            category: "",
            type: "",
            verticals: "",
            present_date: "",
            question_1: "",
            question_2: "",
            question_3: "",
            question_4: "",
            question_5: "",
            question_6: "",
            question_7: "",
            question_8: "",
            question_9: "",
            question_10: "",
            question_11: "",
            question_12: "",
            question_13: "",
            question_14: "",
            question_15: "",
            question_16: "",
            question_17: "",
            question_18: "",
            question_19: "",
            question_20: "",
            question_21: "",
            question_22: "",
            question_23: "",
            question_24: "",
            question_25: "",
            question_26: "",
            question_27: "",
            question_28: "",
            question_29: "",
            question_30: "",
            question_31: "",
            question_32: "",
            question_33: "",
            question_34: "",
            question_35: "",
            question_36: "",
            question_37: "",
            question_38: "",
            question_39: "",
            question_40: "",
            question_41: "",
            question_42: "",
            question_43: "",
            question_44: "",
            question_45: "",
            question_46: "",
            question_47: "",
            question_48: "",
            question_49: "",
            question_50: "",
            question_51: "",
            question_52: "",
            question_53: "",
            question_54: "",
            question_55: "",
            question_56: "",
            question_57: "",
            question_58: "",
            question_59: "",
            question_60: "",
            question_61: "",
            question_62: "",
            question_63: "",
            question_64: "",
            question_65: "",
            question_66: "",
            question_67: "",
            question_68: "",
            question_69: "",
            question_70: "",
            question_71: "",
            question_72: "",
            question_73: "",
            question_74: "",
            question_75: "",
            question_76: "",
            question_77: "",
            question_78: "",
            question_79: "",
            question_80: "",
            question_81: "",
            question_82: "",
            question_83: "",
            question_84: "",
            question_85: "",
            question_86: "",
            question_87: "",
            question_88: "",
            question_89: "",
            question_90: "",
            question_91: "",
            question_92: "",
            question_93: "",
            question_94: "",
            question_95: "",
            question_96: "",
            question_97: "",
            question_98: "",
            question_99: "",
            question_100: "",
    
            question_101: "",
            question_102: "",
            question_103: "",
            question_104: "",
            question_105: "",
            question_106: "",
            question_107: "",
            question_108: "",
            question_109: "",
            question_110: "",
            question_111: "",
            question_112: "",
            question_113: "",
            question_114: "",
            question_115: "",
            question_116: "",
            question_117: "",
            question_118: "",
            question_119: "",
            question_120: "",
            question_121: "",
            question_122: "",
            question_123: "",
            question_124: "",
            question_125: "",
            question_126: "",
            question_127: "",
            question_128: "",
            question_129: "",
            question_130: "",
            question_131: "",
            question_132: "",
            question_133: "",
            question_134: "",
            question_135: "",
            question_136: "",
            question_137: "",
            question_138: "",
            question_139: "",
            question_140: "",
            question_141: "",
            question_142: "",
            question_143: "",
            question_144: "",
            question_145: "",
            question_146: "",
            question_147: "",
            question_148: "",
            question_149: "",
            question_150: "",
            question_151: "",
            question_152: "",
            question_153: "",
            question_154: "",
            question_155: "",
            question_156: "",
            question_157: "",
            question_158: "",
            question_159: "",
            question_160: "",
            question_161: "",
            question_162: "",
            question_163: "",
            question_164: "",
            question_165: "",
            question_166: "",
            question_167: "",
            question_168: "",
            question_169: "",
            question_170: "",
            question_171: "",
            question_172: "",
            question_173: "",
            question_174: "",
            question_175: "",
            question_176: "",
            question_177: "",
            question_178: "",
            question_179: "",
            question_180: "",
            question_181: "",
            question_182: "",
            question_183: "",
            question_184: "",
            question_185: "",
            question_186: "",
            question_187: "",
            question_188: "",
            question_189: "",
            question_190: "",
            question_191: "",
            question_192: "",
            question_193: "",
            question_194: "",
            question_195: "",
            question_196: "",
            question_197: "",
            question_198: "",
            question_199: "",
            question_200: "",
    
            question_201: "",
            question_202: "",
            question_203: "",
            question_204: "",
            question_205: "",
            question_206: "",
            question_207: "",
            question_208: "",
            question_209: "",
            question_210: "",
            question_211: "",
            question_212: "",
            question_213: "",
            question_214: "",
            question_215: "",
            question_216: "",
            question_217: "",
            question_218: "",
            question_219: "",
            question_220: "",
            question_221: "",
            question_222: "",
            question_223: "",
            question_224: "",
            question_225: "",
            question_226: "",
            question_227: "",
            question_228: "",
            question_229: "",
            question_230: "",
            question_231: "",
            question_232: "",
            question_233: "",
            question_234: "",
            question_235: "",
            question_236: "",
            question_237: "",
            question_238: "",
            question_239: "",
            question_240: "",
            question_241: "",
            question_242: "",
            question_243: "",
            question_244: "",
            question_245: "",
            question_246: "",
            question_247: "",
            question_248: "",
            question_249: "",
            question_250: "",
            question_251: "",
            question_252: "",
            question_253: "",
            question_254: "",
            question_255: "",
            question_256: "",
            question_257: "",
            question_258: "",
            question_259: "",
            question_260: "",
            question_261: "",
            question_262: "",
            question_263: "",
            question_264: "",
            question_265: "",
            question_266: "",
            question_267: "",
            question_268: "",
            question_269: "",
            question_270: "",
            question_271: "",
            question_272: "",
            question_273: "",
            question_274: "",
            question_275: "",
            question_276: "",
            question_277: "",
            question_278: "",
            question_279: "",
            question_280: "",
            question_281: "",
            question_282: "",
            question_283: "",
            question_284: "",
            question_285: "",
            question_286: "",
            question_287: "",
            question_288: "",
            question_289: "",
            question_290: "",
            question_291: "",
            question_292: "",
            question_293: "",
            question_294: "",
            question_295: "",
            question_296: "",
            question_297: "",
            question_298: "",
            question_299: "",
            question_300: "",
    
            question_301: "",
            question_302: "",
            question_303: "",
            question_304: "",
            question_305: "",
            question_306: "",
            question_307: "",
            question_308: "",
            question_309: "",
            question_310: "",
            question_311: "",
            question_312: "",
            question_313: "",
            question_314: "",
            question_315: "",
            question_316: "",
            question_317: "",
            question_318: "",
            question_319: "",
            question_320: "",
            question_321: "",
            question_322: "",
            question_323: "",
            question_324: "",
            question_325: "",
            question_326: "",
            question_327: "",
            question_328: "",
            question_329: "",
            question_330: "",
            question_331: "",
            question_332: "",
            question_333: "",
            question_334: "",
            question_335: "",
            question_336: "",
            question_337: "",
            question_338: "",
            question_339: "",
            question_340: "",
            question_341: "",
            question_342: "",
            question_343: "",
            question_344: "",
            question_345: "",
            question_346: "",
            question_347: "",
            question_348: "",
            question_349: "",
            question_350: "",
            question_351: "",
            question_352: "",
            question_353: "",
            question_354: "",
            question_355: "",
            question_356: "",
            question_357: "",
            question_358: "",
            question_359: "",
            question_360: "",
            question_361: "",
            question_362: "",
            question_363: "",
            question_364: "",
            question_365: "",
            question_366: "",
            question_367: "",
            question_368: "",
            question_369: "",
            question_370: "",
            question_371: "",
            question_372: "",
            question_373: "",
            question_374: "",
            question_375: "",
            question_376: "",
            question_377: "",
            question_378: "",
            question_379: "",
            question_380: "",
            question_381: "",
            question_382: "",
            question_383: "",
            question_384: "",
            question_385: "",
            question_386: "",
            question_387: "",
            question_388: "",
            question_389: "",
            question_390: "",
            question_391: "",
            question_392: "",
            question_393: "",
            question_394: "",
            question_395: "",
            question_396: "",
            question_397: "",
            question_398: "",
            question_399: "",
            question_400: "",
    
            question_401: "",
            question_402: "",
            question_403: "",
            question_404: "",
            question_405: "",
            question_406: "",
            question_407: "",
            question_408: "",
            question_409: "",
            question_410: "",
            question_411: "",
            question_412: "",
            question_413: "",
            question_414: "",
            question_415: "",
            question_416: "",
            question_417: "",
            question_418: "",
            question_419: "",
            question_420: "",
            question_421: "",
            question_422: "",
            question_423: "",
            question_424: "",
            question_425: "",
            question_426: "",
            question_427: "",
            question_428: "",
            question_429: "",
            question_430: "",
            question_431: "",
            question_432: "",
            question_433: "",
            question_434: "",
            question_435: "",
            question_436: "",
            question_437: "",
            question_438: "",
            question_439: "",
            question_440: "",
            question_441: "",
            question_442: "",
            question_443: "",
            question_444: "",
            question_445: "",
            question_446: "",
            question_447: "",
            question_448: "",
            question_449: "",
            question_450: "",
            question_451: "",
            question_452: "",
            question_453: "",
            question_454: "",
            question_455: "",
            question_456: "",
            question_457: "",
            question_458: "",
            question_459: "",
            question_460: "",
            question_461: "",
            question_462: "",
            question_463: "",
            question_464: "",
            question_465: "",
            question_466: "",
            question_467: "",
            question_468: "",
            question_469: "",
            question_470: "",
            question_471: "",
            question_472: "",
            question_473: "",
            question_474: "",
            question_475: "",
            question_476: "",
            question_477: "",
            question_478: "",
            question_479: "",
            question_480: "",
            question_481: "",
            question_482: "",
            question_483: "",
            question_484: "",
            question_485: "",
            question_486: "",
            question_487: "",
            question_488: "",
            question_489: "",
            question_490: "",
            question_491: "",
            question_492: "",
            question_493: "",
            question_494: "",
            question_495: "",
            question_496: "",
            question_497: "",
            question_498: "",
            question_499: "",
            question_500: "",
    
            question_501: "",
            question_502: "",
            question_503: "",
            question_504: "",
            question_505: "",
            question_506: "",
            question_507: "",
            question_508: "",
            question_509: "",
            question_510: "",
            question_511: "",
            question_512: "",
            question_513: "",
            question_514: "",
            question_515: "",
            question_516: "",
            question_517: "",
            question_518: "",
            question_519: "",
            question_520: "",
            question_521: "",
            question_522: "",
            question_523: "",
            question_524: "",
            question_525: "",
            question_526: "",
            question_527: "",
            question_528: "",
            question_529: "",
            question_530: "",
            question_531: "",
            question_532: "",
            question_533: "",
            question_534: "",
            question_535: "",
            question_536: "",
            question_537: "",
            question_538: "",
            question_539: "",
            question_540: "",
            question_541: "",
            question_542: "",
            question_543: "",
            question_544: "",
            question_545: "",
            question_546: "",
            question_547: "",
            question_548: "",
            question_549: "",
            question_550: "",
            question_551: "",
            question_552: "",
            question_553: "",
            question_554: "",
            question_555: "",
            question_556: "",
            question_557: "",
            question_558: "",
            question_559: "",
            question_560: "",
            question_561: "",
            question_562: "",
            question_563: "",
            question_564: "",
            question_565: "",
            question_566: "",
            question_567: "",
            question_568: "",
            question_569: "",
            question_570: "",
            question_571: "",
            question_572: "",
            question_573: "",
            question_574: "",
            question_575: "",
            question_576: "",
            question_577: "",
            question_578: "",
            question_579: "",
            question_580: "",
            question_581: "",
            question_582: "",
            question_583: "",
            question_584: "",
            question_585: "",
            question_586: "",
            question_587: "",
            question_588: "",
            question_589: "",
            question_590: "",
            question_591: "",
            question_592: "",
            question_593: "",
            question_594: "",
            question_595: "",
            question_596: "",
            question_597: "",
            question_598: "",
            question_599: "",
            question_600: "",
    
            question_601: "",
            question_602: "",
            question_603: "",
            question_604: "",
            question_605: "",
            question_606: "",
            question_607: "",
            question_608: "",
            question_609: "",
            question_610: "",
            question_611: "",
            question_612: "",
            question_613: "",
            question_614: "",
            question_615: "",
            question_616: "",
            question_617: "",
            question_618: "",
            question_619: "",
            question_620: "",
            question_621: "",
            question_622: "",
            question_623: "",
            question_624: "",
            question_625: "",
            question_626: "",
            question_627: "",
            question_628: "",
            question_629: "",
            question_630: "",
            question_631: "",
            question_632: "",
            question_633: "",
            question_634: "",
            question_635: "",
            question_636: "",
            question_637: "",
            question_638: "",
            question_639: "",
            question_640: "",
            question_641: "",
            question_642: "",
            question_643: "",
            question_644: "",
            question_645: "",
            question_646: "",
            question_647: "",
            question_648: "",
            question_649: "",
            question_650: "",
            question_651: "",
            question_652: "",
            question_653: "",
            question_654: "",
            question_655: "",
            question_656: "",
            question_657: "",
            question_658: "",
            question_659: "",
            question_660: "",
            question_661: "",
            question_662: "",
            question_663: "",
            question_664: "",
            question_665: "",
            question_666: "",
            question_667: "",
            question_668: "",
            question_669: "",
            question_670: "",
            question_671: "",
            question_672: "",
            question_673: "",
            question_674: "",
            question_675: "",
            question_676: "",
            question_677: "",
            question_678: "",
            question_679: "",
            question_680: "",
            question_681: "",
            question_682: "",
            question_683: "",
            question_684: "",
            question_685: "",
            question_686: "",
            question_687: "",
            question_688: "",
            question_689: "",
            question_690: "",
            question_691: "",
            question_692: "",
            question_693: "",
            question_694: "",
            question_695: "",
            question_696: "",
            question_697: "",
            question_698: "",
            question_699: "",
            question_700: "",
    
            question_701: "",
            question_702: "",
            question_703: "",
            question_704: "",
            question_705: "",
            question_706: "",
            question_707: "",
            question_708: "",
            question_709: "",
            question_710: "",
            question_711: "",
            question_712: "",
            question_713: "",
            question_714: "",
            question_715: "",
            question_716: "",
            question_717: "",
            question_718: "",
            question_719: "",
            question_720: "",
            question_721: "",
            question_722: "",
            question_723: "",
            question_724: "",
            question_725: "",
            question_726: "",
            question_727: "",
            question_728: "",
            question_729: "",
            question_730: "",
            question_731: "",
            question_732: "",
            question_733: "",
            question_734: "",
            question_735: "",
            question_736: "",
            question_737: "",
            question_738: "",
            question_739: "",
            question_740: "",
            question_741: "",
            question_742: "",
            question_743: "",
            question_744: "",
            question_745: "",
            question_746: "",
            question_747: "",
            question_748: "",
            question_749: "",
            question_750: "",
            question_751: "",
            question_752: "",
            question_753: "",
            question_754: "",
            question_755: "",
            question_756: "",
            question_757: "",
            question_758: "",
            question_759: "",
            question_760: "",
            question_761: "",
            question_762: "",
            question_763: "",
            question_764: "",
            question_765: "",
            question_766: "",
            question_767: "",
            question_768: "",
            question_769: "",
            question_770: "",
            question_771: "",
            question_772: "",
            question_773: "",
            question_774: "",
            question_775: "",
            question_776: "",
            question_777: "",
            question_778: "",
            question_779: "",
            question_780: "",
            question_781: "",
            question_782: "",
            question_783: "",
            question_784: "",
            question_785: "",
            question_786: "",
            question_787: "",
            question_788: "",
            question_789: "",
            question_790: "",
            question_791: "",
            question_792: "",
            question_793: "",
            question_794: "",
            question_795: "",
            question_796: "",
            question_797: "",
            question_798: "",
            question_799: "",
            question_800: "",
    
            question_801: "",
            question_802: "",
            question_803: "",
            question_804: "",
            question_805: "",
            question_806: "",
            question_807: "",
            question_808: "",
            question_809: "",
            question_810: "",
            question_811: "",
            question_812: "",
            question_813: "",
            question_814: "",
            question_815: "",
            question_816: "",
            question_817: "",
            question_818: "",
            question_819: "",
            question_820: "",
            question_821: "",
            question_822: "",
            question_823: "",
            question_824: "",
            question_825: "",
            question_826: "",
            question_827: "",
            question_828: "",
            question_829: "",
            question_830: "",
            question_831: "",
            question_832: "",
            question_833: "",
            question_834: "",
            question_835: "",
            question_836: "",
            question_837: "",
            question_838: "",
            question_839: "",
            question_840: "",
            question_841: "",
            question_842: "",
            question_843: ""
    });

   
    const navigate = useNavigate();
    const { ulb_code: ulbCode } = useParams();

    useEffect(() => {
        if (ulbCode) {
            // Fetch previously submitted form data
            fetchFormData(ulbCode);
        }
    }, [ulbCode]);

    const fetchFormData = async (ulbCode) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication token missing", { position: "top-right" });
                return;
            }
            const response = await axios.get(`/api/v1/ruralone/${ulbCode}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFormData(response.data); // Set fetched data to form state
        } catch (error) {
            console.error("Error fetching form data:", error);
            toast.error("Error fetching form data", { position: "top-right" });
        }
    };

    console.log("User state:", formData); // Log user state after setting it
    
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        console.log(formData);
    };

    const exportToExcel = () => {
        // Create a new Excel workbook
        const workbook = XLSX.utils.book_new();
    
        // Initialize an array to hold data for each row
        const excelData = [];
    
        // Gather data from the form
        const tableRows = document.querySelectorAll('.addUserForm tbody tr, .addUserForm thead tr');
    
        // Process each row
        tableRows.forEach(row => {
            const rowData = [];
            const cells = row.querySelectorAll('td, th');
            cells.forEach(cell => {
                if (cell.tagName === 'TH') {
                    rowData.push(cell.innerText.trim()); // Add header text to rowData
                } else if (cell.tagName === 'TD') {
                    const input = cell.querySelector('input, select');
                    if (input) {
                        rowData.push(input.value.trim()); // Add input value to rowData
                    } else {
                        rowData.push(cell.innerText.trim()); // Add cell text to rowData
                    }
                }
            });
            excelData.push(rowData); // Add rowData to excelData
        });
    
        // Convert data to worksheet
        const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'RuralForm');
    
        // Export workbook to Excel file
        XLSX.writeFile(workbook, 'rural_form.xlsx');
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication token missing", { position: "top-right" });
                return;
            }
            const response = await axios.post(`http://localhost:8090/api/v1/ruraledi/${ulbCode}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            exportToExcel();
            toast.success(response.data.msg, { position: "top-right" });
            navigate("/");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form", { position: "top-right" });
        }
    };
    
   
    return (
        <Layout>
            <div className='addUser'>
                <Link to={"/"}>Back</Link>
                <h3>Edit Rural City Form</h3>
                <form className='addUserForm' onSubmit={submitForm}>
            <div className="scrollable-table">
                <div className="scrollable-container">
                    <div className="scrollabe-content">
            <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                        <tr>
                            <th className="fixed-column-right"></th>
                            <th className="fixed-column-right">Scheme & Unit</th>
                            <th className="fixed-column-right">Parameters</th>
                            <th className="fixed-column-right"></th>
                            <th>ULB Name</th>
                            <th>ULB Code</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Verticals</th>
                            <th><label htmlFor="present_date">DATE</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="fixed-column-left"></th>
                            <th className="fixed-column-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Marking</td>
                            <td><input type="text" id="ulb_name" name="ulb_name" value={formData.ulb_name} onChange={inputHandler} readOnly/></td>
                            <td><input type="text" id="ulb_code" name="ulb_code" value={formData.ulb_code} onChange={inputHandler} readOnly/></td>
                            <td><input type="text" id="category" name="category" value={formData.category} onChange={inputHandler} readOnly/></td>
                            <td><input type="text" id="type" name="type" value={formData.type} onChange={inputHandler} readOnly/></td>
                            <td><input type="text" id="verticals" name="verticals" value={formData.verticals} onChange={inputHandler} readOnly/></td>
                            <td><input type="date" id="present_date" name="present_date" value={formData.present_date} onChange={inputHandler} placeholder="dd-mm-yyyy" required/></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total</th>
                            <th></th>
                            <th>Self Declaration is with stamp and sign</th>
                            <th>Yes</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>Sectors</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>MIS</td>
                            <td>Actual Data</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Remarks/Comments</th>
                            <th>Verified by QA</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Greenary</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_1"></label></th>
                            <th><label htmlFor="question_2">surrived betn 01-04-2023 to 31-03-2024 excel(Column 6)</label></th>
                            <th><label htmlFor="question_3">Date betn 01-04-2023 to 31-03-2024 on geo-tagged photographs</label></th>
                            <th><label htmlFor="question_4">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_5">Whether Financial Brief stating fund for plantation</label></th>
                            <th><label htmlFor="question_6">CSR Detials like acknowlledgement slip/MoU</label></th>
                            <th><label htmlFor="question_7">Completion Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_8"></label></th>
                            <th><label htmlFor="question_9"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.1.1 Numbers</td>
                            <td>Total number of trees planted and survived during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.question_1} onChange={inputHandler} id="question_1" name="question_1" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.question_2} onChange={inputHandler} id="question_2" name="question_2" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.question_3} onChange={inputHandler} id="question_3" name="question_3" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.question_4} onChange={inputHandler} id="question_4" name="question_4" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_5} onChange={inputHandler} id="question_5" name="question_5" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_6} onChange={inputHandler} id="question_6" name="question_6" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_7} onChange={inputHandler} id="question_7" name="question_7" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_8} onChange={inputHandler} id="question_8" name="question_8" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_9} onChange={inputHandler} id="question_9" name="question_9" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    {/*1st*/}

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_10"></label></th>
                            <th><label htmlFor="question_11">surrived betn 01-04-2023 to 31-03-2024 excel(Column 8) </label></th>
                            <th><label htmlFor="question_12">Date betn 01-04-2023 to 31-03-2024 on geo-tagged photographs</label></th>
                            <th><label htmlFor="question_13">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_14">Whether Financial Brief stating fund for plantation</label></th>
                            <th><label htmlFor="question_15">CSR Detials like acknowlledgement slip/MoU</label></th>
                            <th><label htmlFor="question_16">Completion Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_17"></label></th>
                            <th><label htmlFor="question_18"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>Number</td>
                            <td>Indigenous trees:Out of total trees planted, number of indigenous trees planted and survived during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_10} onChange={inputHandler} id="question_10" name="question_10" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_11} onChange={inputHandler} id="question_11" name="question_11" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_12} onChange={inputHandler} id="question_12" name="question_12" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.question_13} onChange={inputHandler} id="question_13" name="question_13" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_14} onChange={inputHandler} id="question_14" name="question_14" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_15} onChange={inputHandler} id="question_15" name="question_15" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_16} onChange={inputHandler} id="question_16" name="question_16" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_17} onChange={inputHandler} id="question_17" name="question_17" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_18} onChange={inputHandler} id="question_18" name="question_18" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th>Number</th>
                            <th>Upkeep: Trees planted and survived during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="question_19"></label></th>
                            <th><label htmlFor="question_20">Trees Survived</label></th>
                            <th><label htmlFor="question_21">Geotag Photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_22"></label></th>
                            <th><label htmlFor="question_23"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_19} onChange={inputHandler} id="question_19" name="question_19" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_20} onChange={inputHandler} id="question_20" name="question_20" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_21} onChange={inputHandler} id="question_21" name="question_21" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_22} onChange={inputHandler} id="question_22" name="question_22" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_23} onChange={inputHandler} id="question_23" name="question_23" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_24"></label></td>
                            <td><label htmlFor="question_25"></label></td>
                            <td><label htmlFor="question_26">MV2.0</label></td>
                            <td><label htmlFor="question_27"></label></td>

                            <td><label htmlFor="question_28"></label></td>
                            <td><input type="number" value={formData.question_24} onChange={inputHandler} id="question_24" name="question_24" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_25} onChange={inputHandler} id="question_25" name="question_25" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_26} onChange={inputHandler} id="question_26" name="question_26" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_27} onChange={inputHandler} id="question_27" name="question_27" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_28} onChange={inputHandler} id="question_28" name="question_28" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_29"></label></td>
                            <td><label htmlFor="question_30"></label></td>
                            <td><label htmlFor="question_31">MV3.0</label></td>
                            <td><label htmlFor="question_32"></label></td>

                            <td><label htmlFor="question_33"></label></td>
                            <td><input type="number" value={formData.question_29} onChange={inputHandler} id="question_29" name="question_29" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_30} onChange={inputHandler} id="question_30" name="question_30" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_31} onChange={inputHandler} id="question_31" name="question_31" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_32} onChange={inputHandler} id="question_32" name="question_32" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_33} onChange={inputHandler} id="question_33" name="question_33" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>75</th>
                            <th>1.1.2 </th>
                            <th>Tree Census with Geotagging – Report Prepared and Published during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_34"></label></th>
                            <th><label htmlFor="question_35">Notice Board/link of the Tree Census Report</label></th>
                            <th><label htmlFor="question_36">Date of Publication between 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_37">Geo-tagged photographs</label></th>
                            <th><label htmlFor="question_38">screenshot/photo of announcement for preparation of tree census on social media channels if annouce by local body on social media</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_39"></label></th>
                            <th><label htmlFor="question_40"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>100%</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.question_34} onChange={inputHandler} id="question_34" name="question_34" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_35} onChange={inputHandler} id="question_35" name="question_35" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="date" value={formData.question_36} onChange={inputHandler} id="question_36" name="question_36" placeholder="dd-mm-yyyy" /></td>
                            <td><select value={formData.question_37} onChange={inputHandler} id="question_37" name="question_37" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_38} onChange={inputHandler} id="question_38" name="question_38" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_39} onChange={inputHandler} id="question_39" name="question_39" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_40} onChange={inputHandler} id="question_40" name="question_40" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_41"></label></th>
                            <th><label htmlFor="question_42">List of heritage trees with geotagging </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_43"></label></th>
                            <th><label htmlFor="question_44"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25</td>
                            <td>Yes/No</td>
                            <td>List of Heritage Tree- published </td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.question_41} onChange={inputHandler} id="question_41" name="question_41" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_42} onChange={inputHandler} id="question_42" name="question_42" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_43} onChange={inputHandler} id="question_43" name="question_43" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_44} onChange={inputHandler} id="question_44" name="question_44" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th>1.1.3</th>
                            <th>Cumulative capacity of the nursery (sq m)</th>
                            <th>20</th>
                            <th></th>
                            <th><label htmlFor="question_45"></label></th>
                            <th><label htmlFor="question_46">write cumulative capacity of all nurseries from Excel (Sr. 9)</label></th>
                            <th><label htmlFor="question_47">geo-tagged photographs attached during 01-04-2023 to 31-03-2024, even if one geotag photograph evidance is ok</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_48"></label></th>
                            <th><label htmlFor="question_49"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_45} onChange={inputHandler} id="question_45" name="question_45" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_46} onChange={inputHandler} id="question_46" name="question_46" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_47} onChange={inputHandler} id="question_47" name="question_47" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_48} onChange={inputHandler} id="question_48" name="question_48" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_49} onChange={inputHandler} id="question_49" name="question_49" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_50"></label></th>
                            <th><label htmlFor="question_51">From Excel/MIS</label></th>
                            <th><label htmlFor="question_52">Getotag Photographs</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_53"></label></th>
                            <th><label htmlFor="question_54"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Cumulative nursery capacity to Area of the Local Body (CNCA)[=Cumulative capacity of the nursery/Total area of the Local Body (in sq km)]</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_50} onChange={inputHandler} id="question_50" name="question_50" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_51} onChange={inputHandler} id="question_51" name="question_51" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_52} onChange={inputHandler} id="question_52" name="question_52" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_53} onChange={inputHandler} id="question_53" name="question_53" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_54} onChange={inputHandler} id="question_54" name="question_54" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_55"></label></th>
                            <th><label htmlFor="question_56">Write Number from excel if I is ‘Yes’ unless ‘0’</label></th>
                            <th><label htmlFor="question_57">geo-tagged photographs betn 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_58"></label></th>
                            <th><label htmlFor="question_59"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of saplings (Height above 4 feet)present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>60</td>

                            <td></td>
                            <td><input type="number" value={formData.question_55} onChange={inputHandler} id="question_55" name="question_55" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_56} onChange={inputHandler} id="question_56" name="question_56" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_57} onChange={inputHandler} id="question_57" name="question_57" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_58} onChange={inputHandler} id="question_58" name="question_58" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_59} onChange={inputHandler} id="question_59" name="question_59" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_60"></label></th>
                            <th><label htmlFor="question_61">No. of areas not less 2500sq.feet.</label></th>
                            <th><label htmlFor="question_62">No. of areas less than 2500sq.feet.</label></th>
                            <th><label htmlFor="question_63">Geotagged photographs during 01-04.2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_64"> Work Order </label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_65"> work Completion Certificate </label></th>
                            <th><label htmlFor="question_66">Whether Financial Brief stating fund for plantation</label></th>
                            <th><label htmlFor="question_67">Maintanace plan report</label></th>
                            <th><label htmlFor="question_68">Check link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_69"></label></th>
                            <th><label htmlFor="question_70"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.4</td>
                            <td>No. of new green areas created The evaluation will be done based on the number of green areas created. Each green area created will get 10 marks.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_60} onChange={inputHandler} id="question_60" name="question_60" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_61} onChange={inputHandler} id="question_61" name="question_61" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_62} onChange={inputHandler} id="question_62" name="question_62" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_63} onChange={inputHandler} id="question_63" name="question_63" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.question_64} onChange={inputHandler} id="question_64" name="question_64" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_65} onChange={inputHandler} id="question_65" name="question_65" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_66} onChange={inputHandler} id="question_66" name="question_66" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_67} onChange={inputHandler} id="question_67" name="question_67" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_68} onChange={inputHandler} id="question_68" name="question_68" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_69} onChange={inputHandler} id="question_69" name="question_69" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_70} onChange={inputHandler} id="question_70" name="question_70" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Upkeep:Maintenance of total green areas created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 Each green area maintained will get 05 marks</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="question_71"></label></th>
                            <th><label htmlFor="question_72">Value from MIS</label></th>
                            <th><label htmlFor="question_73">Geotag photographs (01.04.2023 to 31.03.2023)</label></th>
                            <th><label htmlFor="question_74">Maintenance Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_75"></label></th>
                            <th><label htmlFor="question_76"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_71} onChange={inputHandler} id="question_71" name="question_71" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_72} onChange={inputHandler} id="question_72" name="question_72" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_73} onChange={inputHandler} id="question_73" name="question_73" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_74} onChange={inputHandler} id="question_74" name="question_74" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_75} onChange={inputHandler} id="question_75" name="question_75" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_76} onChange={inputHandler} id="question_76" name="question_76" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_77"></label></td>
                            <td><label htmlFor="question_78"></label></td>
                            <td><label htmlFor="question_79">MV2.0</label></td>
                            <td><label htmlFor="question_80"></label></td>

                            <td><label htmlFor="question_81"></label></td>
                            <td><input type="number" value={formData.question_77} onChange={inputHandler} id="question_77" name="question_77" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_78} onChange={inputHandler} id="question_78" name="question_78" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_79} onChange={inputHandler} id="question_79" name="question_79" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_80} onChange={inputHandler} id="question_80" name="question_80" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_82"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_81} onChange={inputHandler} id="question_81" name="question_81" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_82} onChange={inputHandler} id="question_82" name="question_82" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_83"></label></td>
                            <td><label htmlFor="question_84"></label></td>
                            <td><label htmlFor="question_85">MV3.0</label></td>
                            <td><label htmlFor="question_86"></label></td>

                            <td><label htmlFor="question_87"></label></td>
                            <td><input type="number" value={formData.question_83} onChange={inputHandler} id="question_83" name="question_83" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_84} onChange={inputHandler} id="question_84" name="question_84" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_85} onChange={inputHandler} id="question_85" name="question_85" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_86} onChange={inputHandler} id="question_86" name="question_86" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_88"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_87} onChange={inputHandler} id="question_87" name="question_87" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_88} onChange={inputHandler} id="question_88" name="question_88" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>MIS</th>
                            <th></th>
                            <th><label htmlFor="question_89"></label></th>
                            <th><label htmlFor="question_90">Formation Date (From MIS)</label></th>
                            <th><label htmlFor="question_91">BMC Formation Details</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_92"></label></th>
                            <th><label htmlFor="question_93"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.5 Yes/No</td>
                            <td>Formation of BMC</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_89} onChange={inputHandler} id="question_89" name="question_89" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="date" value={formData.question_90} onChange={inputHandler} id="question_90" name="question_90" placeholder="dd-mm-yyyy" /></td>
                            <td><select value={formData.question_91} onChange={inputHandler} id="question_91" name="question_91" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_92} onChange={inputHandler} id="question_92" name="question_92" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_93} onChange={inputHandler} id="question_93" name="question_93" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_94"></label></th>
                            <th><label htmlFor="question_95">Only one MOM date in Q- April-June23</label></th>
                            <th><label htmlFor="question_96">Only one MOM date in Q- July-Sept23</label></th>
                            <th><label htmlFor="question_97">Only one MOM date in Q- Oct-Dec23</label></th>
                            <th><label htmlFor="question_98">Only one MOM date in Q- Jan-March24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_99"></label></th>
                            <th><label htmlFor="question_100"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Numbers</td>
                            <td>Number of meetings conducted by BMC (5 marks for each meeting)</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_94} onChange={inputHandler} id="question_94" name="question_94" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_95} onChange={inputHandler} id="question_95" name="question_95" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_96} onChange={inputHandler} id="question_96" name="question_96" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_97} onChange={inputHandler} id="question_97" name="question_97" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_98} onChange={inputHandler} id="question_98" name="question_98" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_99} onChange={inputHandler} id="question_99" name="question_99" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_100} onChange={inputHandler} id="question_100" name="question_100" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_101"></label></th>
                            <th><label htmlFor="question_102">Date of PBR published on or Before MV04</label></th>
                            <th><label htmlFor="question_103">Certificate of  approval by BMC/TSG/MSBB</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_104"></label></th>
                            <th><label htmlFor="question_105"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>PBR: Prepared and approved by BMC during and before Majhi Vasundhara Abhiyan 4.0</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_101} onChange={inputHandler} id="question_101" name="question_101" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_102} onChange={inputHandler} id="question_102" name="question_102" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_103} onChange={inputHandler} id="question_103" name="question_103" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_104} onChange={inputHandler} id="question_104" name="question_104" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_105} onChange={inputHandler} id="question_105" name="question_105" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_106"></label></th>
                            <th><label htmlFor="question_107">Submission of PBR to MSBB(If submission before 15March 2024 and no receipt still Yes)</label></th>
                            <th><label htmlFor="question_108">Date of Ackowledgement receipt of submission of PBR to MSBB</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_109"></label></th>
                            <th><label htmlFor="question_110"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Submission of PBR to MSBB</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_106} onChange={inputHandler} id="question_106" name="question_106" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_107} onChange={inputHandler} id="question_107" name="question_107" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_108} onChange={inputHandler} id="question_108" name="question_108" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_109} onChange={inputHandler} id="question_109" name="question_109" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_110} onChange={inputHandler} id="question_110" name="question_110" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_111"></label></th>
                            <th><label htmlFor="question_112">Copy of BMC action Plan</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_113"></label></th>
                            <th><label htmlFor="question_114"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>BMC Action Plan</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_111} onChange={inputHandler} id="question_111" name="question_111" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_112} onChange={inputHandler} id="question_112" name="question_112" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_113} onChange={inputHandler} id="question_113" name="question_113" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_114} onChange={inputHandler} id="question_114" name="question_114" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_115"></label></th>
                            <th><label htmlFor="question_116"> Copy of compost quality report betn 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_117"></label></th>
                            <th><label htmlFor="question_118"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.6 Yes/No</td>
                            <td>Compost quality report complying with FCO norms </td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_115} onChange={inputHandler} id="question_115" name="question_115" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_116} onChange={inputHandler} id="question_116" name="question_116" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_117} onChange={inputHandler} id="question_117" name="question_117" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_118} onChange={inputHandler} id="question_118" name="question_118" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>80</th>
                            <th></th>
                            <th>Usage of compost- % of Compost sold/ self utilized </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_119"></label></th>
                            <th><label htmlFor="question_120">% of compost sold utilized from MIS</label></th>
                            <th><label htmlFor="question_121">geo-tagged photographs of compost plants</label></th>
                            <th><label htmlFor="question_122">logbook</label></th>
                            <th><label htmlFor="question_123">Location of compost plant</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_124"></label></th>
                            <th><label htmlFor="question_125"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Above 80%</td>
                            <td>80</td>

                            <td></td>
                            <td><input type="number" value={formData.question_119} onChange={inputHandler} id="question_119" name="question_119" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_120} onChange={inputHandler} id="question_120" name="question_120" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_121} onChange={inputHandler} id="question_121" name="question_121" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_122} onChange={inputHandler} id="question_122" name="question_122" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_123} onChange={inputHandler} id="question_123" name="question_123" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_124} onChange={inputHandler} id="question_124" name="question_124" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_125} onChange={inputHandler} id="question_125" name="question_125" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>100</th>
                            <th>1.2.1</th>
                            <th>Percentage of solid waste segregated at source and collected  </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_126"></label></th>
                            <th><label htmlFor="question_127">Amount Of Solid Waste Segregated (MT) SBM/logbook, from MIS</label></th>
                            <th><label htmlFor="question_128">Geo tag photographs of door to door collection</label></th>
                            <th><label htmlFor="question_129">LOGBOOK</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_130"></label></th>
                            <th><label htmlFor="question_131"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>50</td>
                            <td>1(a) </td>
                            <td>Segregation at source</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_126} onChange={inputHandler} id="question_126" name="question_126" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_127} onChange={inputHandler} id="question_127" name="question_127" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_128} onChange={inputHandler} id="question_128" name="question_128" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_129} onChange={inputHandler} id="question_129" name="question_129" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_130} onChange={inputHandler} id="question_130" name="question_130" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_131} onChange={inputHandler} id="question_131" name="question_131" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>50</td>
                            <td>1(b)</td>
                            <td>Collection</td>
                            <td>0</td>

                            <td></td>
                            <td><label htmlFor="question_132"></label></td>
                            <td><label htmlFor="question_133">Amount Of Solid Waste Collected(MT) from SBM/logbook, from MIS</label></td>
                            <td><label htmlFor="question_134">Geo tag photographs of door to door collection</label></td>
                            <td><label htmlFor="question_135">LOGBOOK</label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_136"></label></td>
                            <td><label htmlFor="question_137"></label></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>75%-100%</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_132} onChange={inputHandler} id="question_132" name="question_132" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_133} onChange={inputHandler} id="question_133" name="question_133" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_134} onChange={inputHandler} id="question_134" name="question_134" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_135} onChange={inputHandler} id="question_135" name="question_135" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_136} onChange={inputHandler} id="question_136" name="question_136" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_137} onChange={inputHandler} id="question_137" name="question_137" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                   

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>1.2.2</th>
                            <th>% of wet waste processed </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_138"></label></th>
                            <th><label htmlFor="question_139">Total amt. of wet waste Processed in MT %</label></th>
                            <th><label htmlFor="question_140">Log book/SBM data/Monthly Report</label></th>
                            <th><label htmlFor="question_141">Geo tag photographs of compost/Biogass plants</label></th>
                            <th><label htmlFor="question_142">Location of Compost/Biogas Plant</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_143"></label></th>
                            <th><label htmlFor="question_144"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>90% and above</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_138} onChange={inputHandler} id="question_138" name="question_138" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_139} onChange={inputHandler} id="question_139" name="question_139" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_140} onChange={inputHandler} id="question_140" name="question_140" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_141} onChange={inputHandler} id="question_141" name="question_141" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_142} onChange={inputHandler} id="question_142" name="question_142" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_143} onChange={inputHandler} id="question_143" name="question_143" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_144} onChange={inputHandler} id="question_144" name="question_144" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th></th>
                            <th>% of wet waste processed </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_145"></label></th>
                            <th><label htmlFor="question_146">geotagged photographs of functional MRF Centre </label></th>
                            <th><label htmlFor="question_147">Google Map link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_148"></label></th>
                            <th><label htmlFor="question_149"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.2.3 (Yes/No)</td>
                            <td>Presence of functional MRF center.</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.question_145} onChange={inputHandler} id="question_145" name="question_145" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_146} onChange={inputHandler} id="question_146" name="question_146" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_147} onChange={inputHandler} id="question_147" name="question_147" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_148} onChange={inputHandler} id="question_148" name="question_148" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_149} onChange={inputHandler} id="question_149" name="question_149" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>20</th>
                            <th></th>
                            <th>Secondary Segregation of dry waste</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_150"></label></th>
                            <th><label htmlFor="question_151">In %</label></th>
                            <th><label htmlFor="question_152">Mechanisam for collection of dry waste (examine how efficiently practicing recycling/treatment/Final disposal of dry waste)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_153"></label></th>
                            <th><label htmlFor="question_154"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>90% or above</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_150} onChange={inputHandler} id="question_150" name="question_150" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_151} onChange={inputHandler} id="question_151" name="question_151" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_152} onChange={inputHandler} id="question_152" name="question_152" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_153} onChange={inputHandler} id="question_153" name="question_153" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_154} onChange={inputHandler} id="question_154" name="question_154" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
    
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_155">30</label></td>
                            <td><label htmlFor="question_156"></label></td>
                            <td><label htmlFor="question_157">Dry waste processing /disposal</label></td>
                            <td><label htmlFor="question_158"></label></td>

                            <td><label htmlFor="question_159"></label></td>
                            <td><input type="number" value={formData.question_155} onChange={inputHandler} id="question_155" name="question_155" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_156} onChange={inputHandler} id="question_156" name="question_156" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_157} onChange={inputHandler} id="question_157" name="question_157" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_158} onChange={inputHandler} id="question_158" name="question_158" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_159} onChange={inputHandler} id="question_159" name="question_159" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>   

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>% of dry waste processed/disposal by the authorized parties</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_160"></label></th>
                            <th><label htmlFor="question_161">% of dry waste recycled/treated/scientifically disposed in MT</label></th>
                            <th><label htmlFor="question_162">Agreement/montly report/logbook</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_163"></label></th>
                            <th><label htmlFor="question_164"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>80% and above </td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.question_160} onChange={inputHandler} id="question_160" name="question_160" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_161} onChange={inputHandler} id="question_161" name="question_161" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_162} onChange={inputHandler} id="question_162" name="question_162" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_163} onChange={inputHandler} id="question_163" name="question_163" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_164} onChange={inputHandler} id="question_164" name="question_164" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                    

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>1.2.4 Yes/No</th>
                            <th>Scientific treatment of legacy solid waste </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_165"></label></th>
                            <th><label htmlFor="question_166">Stages of Remediation</label></th>
                            <th><label htmlFor="question_167">location of the land reclaimed/reused on link provided</label></th>
                            <th><label htmlFor="question_168">Geo tagged Photographs of before land reclaimed</label></th>
                            <th><label htmlFor="question_169">Geo tagged Photographs of after land reclaimed</label></th>
                            <th><label htmlFor="question_170">Completion Certificate/Tender awarded  certificate/No Legacy Certificate(Certificate from BDO will be considered)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_171"></label></th>
                            <th><label htmlFor="question_172"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Stages of Remediation</td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.question_165} onChange={inputHandler} id="question_165" name="question_165" required>
                            <option value="">Choose</option>
                            <option value="Land reclaimed and reused">Land reclaimed and reused</option>
                            <option value="100% of legacy waste treated and processed scientifically">100% of legacy waste treated and processed scientifically</option>
                            <option value="50% of legacy waste is treated and processed">50% of legacy waste is treated and processed</option>
                            <option value="Work Started">Work Started</option>
                            <option value="Tenders has been called in">Tenders has been called in</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_166} onChange={inputHandler} id="question_166" name="question_166" required>
                            <option value="">Choose</option>
                            <option value="Land reclaimed and reused">Land reclaimed and reused</option>
                            <option value="100% of legacy waste treated and processed scientifically">100% of legacy waste treated and processed scientifically</option>
                            <option value="50% of legacy waste is treated and processed">50% of legacy waste is treated and processed</option>
                            <option value="Work Started">Work Started</option>
                            <option value="Tenders has been called in">Tenders has been called in</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_167} onChange={inputHandler} id="question_167" name="question_167" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_168} onChange={inputHandler} id="question_168" name="question_168" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_169} onChange={inputHandler} id="question_169" name="question_169" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_170} onChange={inputHandler} id="question_170" name="question_170" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_171} onChange={inputHandler} id="question_171" name="question_171" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_172} onChange={inputHandler} id="question_172" name="question_172" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_173"></label></th>
                            <th><label htmlFor="question_174">Number of drives conducted on Single Use Plastic (SUP) ban from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_175">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_176">No. of Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="question_177">No. of  Geotagged photos with backdrop/banner of single use plastic</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_178"></label></th>
                            <th><label htmlFor="question_179"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.2.5 Number</td>
                            <td>Awareness campaigns for Single Use Plastic ban.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_173} onChange={inputHandler} id="question_173" name="question_173" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_174} onChange={inputHandler} id="question_174" name="question_174" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_175} onChange={inputHandler} id="question_175" name="question_175" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_176} onChange={inputHandler} id="question_176" name="question_176" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_177} onChange={inputHandler} id="question_177" name="question_177" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_178} onChange={inputHandler} id="question_178" name="question_178" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_179} onChange={inputHandler} id="question_179" name="question_179" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_180"></label></th>
                            <th><label htmlFor="question_181">Number of drives conducted on ALTERNATIVES of plastic  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_182">Social Media Link during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="question_183">No. of Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="question_184">No. of  Geotagged photos with backdrop/banner of alternatives of plastic</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_185"></label></th>
                            <th><label htmlFor="question_186"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> (Relative Marking) </td>
                            <td>Number</td>
                            <td>Awareness campaigns on alternatives of plastic</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_180} onChange={inputHandler} id="question_180" name="question_180" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_181} onChange={inputHandler} id="question_181" name="question_181" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_182} onChange={inputHandler} id="question_182" name="question_182" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_183} onChange={inputHandler} id="question_183" name="question_183" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_184} onChange={inputHandler} id="question_184" name="question_184" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_185} onChange={inputHandler} id="question_185" name="question_185" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_186} onChange={inputHandler} id="question_186" name="question_186" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_187"></label></th>
                            <th><label htmlFor="question_188">Penalty Collection receipt/photo</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_189"></label></th>
                            <th><label htmlFor="question_190"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Action taken on SUP elimination with fine collection</td>
                            <td>100</td>

                            <td></td>
                            <td><select value={formData.question_187} onChange={inputHandler} id="question_187" name="question_187" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_188} onChange={inputHandler} id="question_188" name="question_188" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_189} onChange={inputHandler} id="question_189" name="question_189" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_190} onChange={inputHandler} id="question_190" name="question_190" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_191"></label></th>
                            <th><label htmlFor="question_192">Certification</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_193"></label></th>
                            <th><label htmlFor="question_194"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.2.6  (Yes/No)</td>
                            <td>100% health care facilities and medical practitioners are member of Common Bio-medical Waste Treatment Facility (CBWTF)</td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.question_191} onChange={inputHandler} id="question_191" name="question_191" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_192} onChange={inputHandler} id="question_192" name="question_192" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_193} onChange={inputHandler} id="question_193" name="question_193" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_194} onChange={inputHandler} id="question_194" name="question_194" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_195"></label></th>
                            <th><label htmlFor="question_196">Percentage of Biomedical waste</label></th>
                            <th><label htmlFor="question_197">Agreement with CBMWTF or MPCB authorized Bio-medical waste management vendors</label></th>
                            <th><label htmlFor="question_198">Logbook/SBM</label></th>
                            <th><label htmlFor="question_199">Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="question_200">Functional Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_201"></label></th>
                            <th><label htmlFor="question_202"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>Number</td>
                            <td>Percentage of Biomedical waste disposed scientifically</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.question_195} onChange={inputHandler} id="question_195" name="question_195" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_196} onChange={inputHandler} id="question_196" name="question_196" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_197} onChange={inputHandler} id="question_197" name="question_197" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_198} onChange={inputHandler} id="question_198" name="question_198" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_199} onChange={inputHandler} id="question_199" name="question_199" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_200} onChange={inputHandler} id="question_200" name="question_200" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_201} onChange={inputHandler} id="question_201" name="question_201" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_202} onChange={inputHandler} id="question_202" name="question_202" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_203"></label></th>
                            <th><label htmlFor="question_204">details of awareness activities on proper segregation of E –waste from Excel</label></th>
                            <th><label htmlFor="question_205">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_206">photos checked on social media</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_207"></label></th>
                            <th><label htmlFor="question_208"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.2.7 </td>
                            <td>Awareness activities on proper segregation of E-waste </td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_203} onChange={inputHandler} id="question_203" name="question_203" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_204} onChange={inputHandler} id="question_204" name="question_204" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_205} onChange={inputHandler} id="question_205" name="question_205" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_206} onChange={inputHandler} id="question_206" name="question_206" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_207} onChange={inputHandler} id="question_207" name="question_207" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_208} onChange={inputHandler} id="question_208" name="question_208" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_209"></label></th>
                            <th><label htmlFor="question_210">Work Order or other document showing E-waste collection</label></th>
                            <th><label htmlFor="question_211">Logbook</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_212"></label></th>
                            <th><label htmlFor="question_213"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Mechanism for E-waste collection</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_209} onChange={inputHandler} id="question_209" name="question_209" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_210} onChange={inputHandler} id="question_210" name="question_210" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_211} onChange={inputHandler} id="question_211" name="question_211" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_212} onChange={inputHandler} id="question_212" name="question_212" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_213} onChange={inputHandler} id="question_213" name="question_213" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_214"></label></th>
                            <th><label htmlFor="question_215">Geotag photos</label></th>
                            <th><label htmlFor="question_216">Type of Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_217"></label></th>
                            <th><label htmlFor="question_218"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Presence of functional collection center</td>
                            <td>10</td>

                            <td></td>
                            <td><select value={formData.question_214} onChange={inputHandler} id="question_214" name="question_214" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_215} onChange={inputHandler} id="question_215" name="question_215" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_216} onChange={inputHandler} id="question_216" name="question_216" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_217} onChange={inputHandler} id="question_217" name="question_217" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_218} onChange={inputHandler} id="question_218" name="question_218" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>1.2.8</th>
                            <th>ODF Status</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_219"></label></th>
                            <th><label htmlFor="question_220">Type of Certificate</label></th>
                            <th><label htmlFor="question_221">Date Of Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_222"></label></th>
                            <th><label htmlFor="question_223"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Status</td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.question_219} onChange={inputHandler} id="question_219" name="question_219" required>
                            <option value="">Choose One</option>
                            <option value="ODF+">ODF+</option>
                            <option value="ODF">ODF</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_220} onChange={inputHandler} id="question_220" name="question_220" required>
                            <option value="">Choose One</option>
                            <option value="ODF+">ODF+</option>
                            <option value="ODF">ODF</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="date" value={formData.question_221} onChange={inputHandler} id="question_221" name="question_221" placeholder="dd-mm-yyyy" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_222} onChange={inputHandler} id="question_222" name="question_222" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_223} onChange={inputHandler} id="question_223" name="question_223" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>150</th>
                            <th>2.1</th>
                            <th>Air quality monitoring report from – MoEFCC recognized/NABL accredited labs</th>
                            <th></th>

                            <th></th>
                            <th><label htmlFor="question_224"></label></th>
                            <th><label htmlFor="question_225">No. of Air Quality Monitoring Reports in 01-04-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_226">No. of Air Quality Monitoring Reports in 01-05-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_227">No. of Air Quality Monitoring Reports in 01-06-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_228">No. of Air Quality Monitoring Reports in 01-07-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_229">No. of Air Quality Monitoring Reports in 01-08-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_230">No. of Air Quality Monitoring Reports in 01-09-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_231">No. of Air Quality Monitoring Reports in 01-10-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_232">No. of Air Quality Monitoring Reports in 01-11-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_233">No. of Air Quality Monitoring Reports in 01-12-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_234">No. of Air Quality Monitoring Reports in 01-01-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_235">No. of Air Quality Monitoring Reports in 01-02-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_236">No. of Air Quality Monitoring Reports in 01-03-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="question_237"></label></th>
                            <th><label htmlFor="question_238"></label></th>
                        </tr>
                    </thead>                                          
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>6 Reports and more</td>
                            <td>150</td>

                            <td></td>
                            <td><input type="number" value={formData.question_224} onChange={inputHandler} id="question_224" name="question_224" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_225} onChange={inputHandler} id="question_225" name="question_225" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_226} onChange={inputHandler} id="question_226" name="question_226" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_227} onChange={inputHandler} id="question_227" name="question_227" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_228} onChange={inputHandler} id="question_228" name="question_228" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_229} onChange={inputHandler} id="question_229" name="question_229" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_230} onChange={inputHandler} id="question_230" name="question_230" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_231} onChange={inputHandler} id="question_231" name="question_231" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_232} onChange={inputHandler} id="question_232" name="question_232" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_233} onChange={inputHandler} id="question_233" name="question_233" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_234} onChange={inputHandler} id="question_234" name="question_234" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_235} onChange={inputHandler} id="question_235" name="question_235" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_236} onChange={inputHandler} id="question_236" name="question_236" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_237} onChange={inputHandler} id="question_237" name="question_237" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_238} onChange={inputHandler} id="question_238" name="question_238" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_239"></label></th>
                            <th><label htmlFor="question_240">Notification for ban of firecrackers on official letter head</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_241"></label></th>
                            <th><label htmlFor="question_242"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>2.2.1  (Yes/No)</td>
                            <td>Copy of order – ban on sale and use of firecrackers</td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.question_239} onChange={inputHandler} id="question_239" name="question_239" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_240} onChange={inputHandler} id="question_240" name="question_240" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_241} onChange={inputHandler} id="question_241" name="question_241" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_242} onChange={inputHandler} id="question_242" name="question_242" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_243"></label></th>
                            <th><label htmlFor="question_244">Number of awareness conducted on FIRE CRACKERS from excel during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="question_245">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_246">No. of  Geotagged photos with backdrop/banner of GREEN FESTIVAL during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_247"></label></th>
                            <th><label htmlFor="question_248"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of awareness event/initiative taken up by Local Body</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_243} onChange={inputHandler} id="question_243" name="question_243" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_244} onChange={inputHandler} id="question_244" name="question_244" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_245} onChange={inputHandler} id="question_245" name="question_245" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_246} onChange={inputHandler} id="question_246" name="question_246" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_247} onChange={inputHandler} id="question_247" name="question_247" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_248} onChange={inputHandler} id="question_248" name="question_248" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>75</th>
                            <th></th>
                            <th>Air Quality Monitoring Report on the evening /Next morning of the festival with AQI as per the National Air Quality Index </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_249"></label></th>
                            <th><label htmlFor="question_250">Air quality Report</label></th>
                            <th><label htmlFor="question_251">Air Quality Report from MOFCC/NABL Accrediated</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_252"></label></th>
                            <th><label htmlFor="question_253"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>0-100 (Good/Satisfactory)</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.question_249} onChange={inputHandler} id="question_249" name="question_249" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_250} onChange={inputHandler} id="question_250" name="question_250" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_251} onChange={inputHandler} id="question_251" name="question_251" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_252} onChange={inputHandler} id="question_252" name="question_252" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_253} onChange={inputHandler} id="question_253" name="question_253" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_254"></label></th>
                            <th><label htmlFor="question_255">Official Notification for the banning of burning of agriculture waste</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_256"></label></th>
                            <th><label htmlFor="question_257"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>2.2.2  (Yes/No)</td>
                            <td>Ban on Crop residue burning</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.question_254} onChange={inputHandler} id="question_254" name="question_254" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_255} onChange={inputHandler} id="question_255" name="question_255" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_256} onChange={inputHandler} id="question_256" name="question_256" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_257} onChange={inputHandler} id="question_257" name="question_257" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_258"></label></th>
                            <th><label htmlFor="question_259">Number of awareness initiatives taken from agricultural waste management during 01.04.23 to 31.03.24 write value from excel</label></th>
                            <th><label htmlFor="question_260">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_261"> Geotagged photos with backdrop/banner of agreeculture management during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_262">Social media Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_263"></label></th>
                            <th><label htmlFor="question_264"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of awareness Initiatives taken for agricultural waste management.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_258} onChange={inputHandler} id="question_258" name="question_258" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_259} onChange={inputHandler} id="question_259" name="question_259" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_260} onChange={inputHandler} id="question_260" name="question_260" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_261} onChange={inputHandler} id="question_261" name="question_261" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_262} onChange={inputHandler} id="question_262" name="question_262" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_263} onChange={inputHandler} id="question_263" name="question_263" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_264} onChange={inputHandler} id="question_264" name="question_264" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_265"></label></th>
                            <th><label htmlFor="question_266">Document for function of the FPO like letter of formation, mom, documents of transaction</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_267"></label></th>
                            <th><label htmlFor="question_268"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Formation of FPOs in Biomass collection, aggregation and pellet manufacturing</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.question_265} onChange={inputHandler} id="question_265" name="question_265" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_266} onChange={inputHandler} id="question_266" name="question_266" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_267} onChange={inputHandler} id="question_267" name="question_267" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_268} onChange={inputHandler} id="question_268" name="question_268" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_269"></label></th>
                            <th><label htmlFor="question_270">% from Excel workbook /MIS</label></th>
                            <th><label htmlFor="question_271">Geo tag images of cylinders in use</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_272"></label></th>
                            <th><label htmlFor="question_273"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>2.2.3</td>
                            <td>% of Households with new gas connection installed during Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_269} onChange={inputHandler} id="question_269" name="question_269" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_270} onChange={inputHandler} id="question_270" name="question_270" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_271} onChange={inputHandler} id="question_271" name="question_271" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_272} onChange={inputHandler} id="question_272" name="question_272" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_273} onChange={inputHandler} id="question_273" name="question_273" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_274">(Relative Marking)</label></td>
                            <td><label htmlFor="question_275"></label></td>
                            <td><label htmlFor="question_276">% of Households with gas connection before Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="question_277">50</label></td>

                            <td><label htmlFor="question_278"></label></td>
                            <td><input type="number" value={formData.question_274} onChange={inputHandler} id="question_274" name="question_274" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_275} onChange={inputHandler} id="question_275" name="question_275" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_276} onChange={inputHandler} id="question_276" name="question_276" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_277} onChange={inputHandler} id="question_277" name="question_277" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_278} onChange={inputHandler} id="question_278" name="question_278" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 400</th>
                            <th>2.3.1</th>
                            <th>EVs registered in Local Body area during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_279"></label></th>
                            <th><label htmlFor="question_280">Value from MIS</label></th>
                            <th><label htmlFor="question_281">RTO Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_282"></label></th>
                            <th><label htmlFor="question_283"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>2W EV</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.question_279} onChange={inputHandler} id="question_279" name="question_279" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_280} onChange={inputHandler} id="question_280" name="question_280" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_281} onChange={inputHandler} id="question_281" name="question_281" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_282} onChange={inputHandler} id="question_282" name="question_282" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_283} onChange={inputHandler} id="question_283" name="question_283" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_284"></label></td>
                            <td><label htmlFor="question_285"></label></td>
                            <td><label htmlFor="question_286">3W EV</label></td>
                            <td><label htmlFor="question_287">100</label></td>

                            <td><label htmlFor="question_288"></label></td>
                            <td><input type="number" value={formData.question_284} onChange={inputHandler} id="question_284" name="question_284" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_285} onChange={inputHandler} id="question_285" name="question_285" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_286} onChange={inputHandler} id="question_286" name="question_286" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_287} onChange={inputHandler} id="question_287" name="question_287" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_288} onChange={inputHandler} id="question_288" name="question_288" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_289"></label></td>
                            <td><label htmlFor="question_290"></label></td>
                            <td><label htmlFor="question_291">4W EV</label></td>
                            <td><label htmlFor="question_292">100</label></td>

                            <td><label htmlFor="question_293"></label></td>
                            <td><input type="number" value={formData.question_289} onChange={inputHandler} id="question_289" name="question_289" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_290} onChange={inputHandler} id="question_290" name="question_290" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_291} onChange={inputHandler} id="question_291" name="question_291" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_292} onChange={inputHandler} id="question_292" name="question_292" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_293} onChange={inputHandler} id="question_293" name="question_293" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 100</th>
                            <th></th>
                            <th>% of EV Public Transport</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_294"></label></th>
                            <th><label htmlFor="question_295">Self Cerfication/ Report mentioning % of EV public transport</label></th>
                            <th><label htmlFor="question_296">Self Certification/Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_297"></label></th>
                            <th><label htmlFor="question_298"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>10 % or more</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_294} onChange={inputHandler} id="question_294" name="question_294" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_295} onChange={inputHandler} id="question_295" name="question_295" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_296} onChange={inputHandler} id="question_296" name="question_296" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_297} onChange={inputHandler} id="question_297" name="question_297" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_298} onChange={inputHandler} id="question_298" name="question_298" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 30</th>
                            <th>2.3.2</th>
                            <th>Number of EV charging stations created during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_299"></label></th>
                            <th><label htmlFor="question_300">No. of EV charging stations from Excel </label></th>
                            <th><label htmlFor="question_301"> Work Order </label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_302">Completion Certificate </label></th>
                            <th><label htmlFor="question_303">No. of  geo-tagged photographs before EV charging stations</label></th>
                            <th><label htmlFor="question_304">No. of geo-tagged photos after charging stationsDate betn 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_305"></label></th>
                            <th><label htmlFor="question_306"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Two Wheelers</td>
                            <td>15</td>

                            <td></td>
                            <td><input type="number" value={formData.question_299} onChange={inputHandler} id="question_299" name="question_299" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_300} onChange={inputHandler} id="question_300" name="question_300" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_301} onChange={inputHandler} id="question_301" name="question_301" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_302} onChange={inputHandler} id="question_302" name="question_302" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_303} onChange={inputHandler} id="question_303" name="question_303" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_304} onChange={inputHandler} id="question_304" name="question_304" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_305} onChange={inputHandler} id="question_305" name="question_305" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_306} onChange={inputHandler} id="question_306" name="question_306" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_307"></label></td>
                            <td><label htmlFor="question_308"></label></td>
                            <td><label htmlFor="question_309">Four Wheelers</label></td>
                            <td><label htmlFor="question_310">5</label></td>

                            <td><label htmlFor="question_311"></label></td>
                            <td><input type="number" value={formData.question_307} onChange={inputHandler} id="question_307" name="question_307" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_308} onChange={inputHandler} id="question_308" name="question_308" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_309} onChange={inputHandler} id="question_309" name="question_309" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_310} onChange={inputHandler} id="question_310" name="question_310" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_311} onChange={inputHandler} id="question_311" name="question_311" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_312} onChange={inputHandler} id="question_312" name="question_312" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td><label htmlFor="question_312"></label></td>
                            <td><label htmlFor="question_313"></label></td>
                            <td><label htmlFor="question_314"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_313} onChange={inputHandler} id="question_313" name="question_313" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_314} onChange={inputHandler} id="question_314" name="question_314" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 20</th>
                            <th></th>
                            <th>Upkeep:Number of EV charging stations created during Majhi Vasundhara Abhiyan 2.0, 3.0 and maintained </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_315"></label></th>
                            <th><label htmlFor="question_316">Number of EV charging station</label></th>
                            <th><label htmlFor="question_317">Geotagphotos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th> 
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_318"></label></th>
                            <th><label htmlFor="question_319"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Two Wheelers MV02</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_315} onChange={inputHandler} id="question_315" name="question_315" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_316} onChange={inputHandler} id="question_316" name="question_316" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_317} onChange={inputHandler} id="question_317" name="question_317" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_318} onChange={inputHandler} id="question_318" name="question_318" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_319} onChange={inputHandler} id="question_319" name="question_319" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_320"></label></td>
                            <td><label htmlFor="question_321"></label></td>
                            <td><label htmlFor="question_322">Four Wheelers MV02</label></td>
                            <td><label htmlFor="question_323"></label></td>

                            <td><label htmlFor="question_324"></label></td>
                            <td><input type="number" value={formData.question_320} onChange={inputHandler} id="question_320" name="question_320" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_321} onChange={inputHandler} id="question_321" name="question_321" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_322} onChange={inputHandler} id="question_322" name="question_322" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_323} onChange={inputHandler} id="question_323" name="question_323" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_324} onChange={inputHandler} id="question_324" name="question_324" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_325"></label></td>
                            <td><label htmlFor="question_326"></label></td>
                            <td><label htmlFor="question_327">Two Wheelers MV03</label></td>
                            <td><label htmlFor="question_328"></label></td>

                            <td><label htmlFor="question_329"></label></td>
                            <td><input type="number" value={formData.question_325} onChange={inputHandler} id="question_325" name="question_325" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_326} onChange={inputHandler} id="question_326" name="question_326" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_327} onChange={inputHandler} id="question_327" name="question_327" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_328} onChange={inputHandler} id="question_328" name="question_328" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_329} onChange={inputHandler} id="question_329" name="question_329" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_330"></label></td>
                            <td><label htmlFor="question_331"></label></td>
                            <td><label htmlFor="question_332"></label>Four Wheelers MV03</td>
                            <td><label htmlFor="question_333"></label></td>

                            <td><label htmlFor="question_334"></label></td>
                            <td><input type="number" value={formData.question_330} onChange={inputHandler} id="question_330" name="question_330" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_331} onChange={inputHandler} id="question_331" name="question_331" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_332} onChange={inputHandler} id="question_332" name="question_332" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_333} onChange={inputHandler} id="question_333" name="question_333" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_334} onChange={inputHandler} id="question_334" name="question_334" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_335"></label></td>
                            <td><label htmlFor="question_336"></label></td>
                            <td><label htmlFor="question_337">Two Wheelers Total</label></td>
                            <td><label htmlFor="question_338">10</label></td>

                            <td><label htmlFor="question_339"></label></td>
                            <td><input type="number" value={formData.question_335} onChange={inputHandler} id="question_335" name="question_335" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_336} onChange={inputHandler} id="question_336" name="question_336" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_337} onChange={inputHandler} id="question_337" name="question_337" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_338} onChange={inputHandler} id="question_338" name="question_338" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_339} onChange={inputHandler} id="question_339" name="question_339" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_340"></label></td>
                            <td><label htmlFor="question_341"></label></td>
                            <td><label htmlFor="question_342">Four Wheelers Total</label></td>
                            <td><label htmlFor="question_343">10</label></td>

                            <td><label htmlFor="question_344"></label></td>
                            <td><input type="number" value={formData.question_340} onChange={inputHandler} id="question_340" name="question_340" autoComplete='off' placeholder='Enter nunumber' required /></td>
                            <td><input type="number" value={formData.question_341} onChange={inputHandler} id="question_341" name="question_341" autoComplete='off' placeholder='Enter nunumber' required /></td>
                            <td><select value={formData.question_342} onChange={inputHandler} id="question_342" name="question_342" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_343} onChange={inputHandler} id="question_343" name="question_343" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_344} onChange={inputHandler} id="question_344" name="question_344" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_345"></label></th>
                            <th><label htmlFor="question_346">Value from Excel (Col.9)</label></th>
                            <th><label htmlFor="question_347">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_348"></label></th>
                            <th><label htmlFor="question_349"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total number of functional charging points available at charging stations</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_345} onChange={inputHandler} id="question_345" name="question_345" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_346} onChange={inputHandler} id="question_346" name="question_346" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_347} onChange={inputHandler} id="question_347" name="question_347" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_348} onChange={inputHandler} id="question_348" name="question_348" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_349} onChange={inputHandler} id="question_349" name="question_349" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_350"></label></th>
                            <th><label htmlFor="question_351">ref from Excel (Col.10)/MIS</label></th>
                            <th><label htmlFor="question_352">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_353"></label></th>
                            <th><label htmlFor="question_354"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of charging stations with renewable energy supply</td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.question_350} onChange={inputHandler} id="question_350" name="question_350" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_351} onChange={inputHandler} id="question_351" name="question_351" autoComplete='off' placeholder='Enter nunumber' required /></td>
                            <td><select value={formData.question_352} onChange={inputHandler} id="question_352" name="question_352" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_353} onChange={inputHandler} id="question_353" name="question_353" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_354} onChange={inputHandler} id="question_354" name="question_354" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>2.4</th>
                            <th>Number of events organized to create awareness regarding climate change during MV04</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_355"></label></th>
                            <th><label htmlFor="question_356">Value from Excel</label></th>
                            <th><label htmlFor="question_357">Geotag photos</label></th>
                            <th><label htmlFor="question_358">Media Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_359"></label></th>
                            <th><label htmlFor="question_360"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April - Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_355} onChange={inputHandler} id="question_355" name="question_355" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_356} onChange={inputHandler} id="question_356" name="question_356" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_357} onChange={inputHandler} id="question_357" name="question_357" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_358} onChange={inputHandler} id="question_358" name="question_358" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_359} onChange={inputHandler} id="question_359" name="question_359" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_360} onChange={inputHandler} id="question_360" name="question_360" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_361">(Relative Marking)</label></td>
                            <td><label htmlFor="question_362"></label></td>
                            <td><label htmlFor="question_363">Second half (Oct - March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="question_364">50</label></td>

                            <td><label htmlFor="question_365"></label></td>
                            <td><input type="number" value={formData.question_361} onChange={inputHandler} id="question_361" name="question_361" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_362} onChange={inputHandler} id="question_362" name="question_362" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_363} onChange={inputHandler} id="question_363" name="question_363" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_364} onChange={inputHandler} id="question_364" name="question_364" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_366"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_365} onChange={inputHandler} id="question_365" name="question_365" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_366} onChange={inputHandler} id="question_366" name="question_366" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_367"></label></th>
                            <th><label htmlFor="question_368">Value from Excel</label></th>
                            <th><label htmlFor="question_369">Geotag photos</label></th>
                            <th><label htmlFor="question_370">Certificates of completion of course</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_371"></label></th>
                            <th><label htmlFor="question_372"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of youth participants who have completed Climate Change Course on Youth Leadership for Climate Action</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_367} onChange={inputHandler} id="question_367" name="question_367" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_368} onChange={inputHandler} id="question_368" name="question_368" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_369} onChange={inputHandler} id="question_369" name="question_369" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_370} onChange={inputHandler} id="question_370" name="question_370" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_371} onChange={inputHandler} id="question_371" name="question_371" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_372} onChange={inputHandler} id="question_372" name="question_372" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_373"></label></th>
                            <th><label htmlFor="question_374">No. of water bodies rejuvenated as per excel </label></th>
                            <th><label htmlFor="question_375">stage wise geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_376">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_377">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_378">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_379"></label></th>
                            <th><label htmlFor="question_380"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.1</td>
                            <td>Number of waterbodies rejuvenated by removing silt or through repair work</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_373} onChange={inputHandler} id="question_373" name="question_373" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_374} onChange={inputHandler} id="question_374" name="question_374" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_375} onChange={inputHandler} id="question_375" name="question_375" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.question_376} onChange={inputHandler} id="question_376" name="question_376" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_377} onChange={inputHandler} id="question_377" name="question_377" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_378} onChange={inputHandler} id="question_378" name="question_378" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_379} onChange={inputHandler} id="question_379" name="question_379" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_380} onChange={inputHandler} id="question_380" name="question_380" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_381"></label></th>
                            <th><label htmlFor="question_382">from Excel /MIS</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_383"></label></th>
                            <th><label htmlFor="question_384"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Water storage capacity added through rejuvenation of existing waterbodies in Cubic meter</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_381} onChange={inputHandler} id="question_381" name="question_381" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_382} onChange={inputHandler} id="question_382" name="question_382" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_383} onChange={inputHandler} id="question_383" name="question_383" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_384} onChange={inputHandler} id="question_384" name="question_384" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_385"></label></th>
                            <th><label htmlFor="question_386">No. of newly created water bodies  (If geotag photos are their then No. written from excel)</label></th>
                            <th><label htmlFor="question_387">Geotag photos from 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_388">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_389">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_390">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_391"></label></th>
                            <th><label htmlFor="question_392"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of new waterbodies created during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_385} onChange={inputHandler} id="question_385" name="question_385" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_386} onChange={inputHandler} id="question_386" name="question_386" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_387} onChange={inputHandler} id="question_387" name="question_387" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.question_388} onChange={inputHandler} id="question_388" name="question_388" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_389} onChange={inputHandler} id="question_389" name="question_389" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_390} onChange={inputHandler} id="question_390" name="question_390" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_391} onChange={inputHandler} id="question_391" name="question_391" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_392} onChange={inputHandler} id="question_392" name="question_392" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_393"></label></th>
                            <th><label htmlFor="question_394">from Excel (Column6)/MIS</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_395"></label></th>
                            <th><label htmlFor="question_396"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Water storage capacity added through creation of new waterbodies in Majhi Vasundhara Abhiyan 4.0 (in cubic meters) </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_393} onChange={inputHandler} id="question_393" name="question_393" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_394} onChange={inputHandler} id="question_394" name="question_394" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_395} onChange={inputHandler} id="question_395" name="question_395" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_396} onChange={inputHandler} id="question_396" name="question_396" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_397"></label></th>
                            <th><label htmlFor="question_398">No. of CCT/DEEP CCT projects from Excel(10)</label></th>
                            <th><label htmlFor="question_399">Geotag photos from 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_400">Measuremet book</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_401"></label></th>
                            <th><label htmlFor="question_402"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>CCT / Deep CCT projects implemented in Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_397} onChange={inputHandler} id="question_397" name="question_397" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_398} onChange={inputHandler} id="question_398" name="question_398" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_399} onChange={inputHandler} id="question_399" name="question_399" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_400} onChange={inputHandler} id="question_400" name="question_400" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_401} onChange={inputHandler} id="question_401" name="question_401" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_402} onChange={inputHandler} id="question_402" name="question_402" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_403"></label></th>
                            <th><label htmlFor="question_404">No. of CCT/DEEP CCT projects from Excel (Column 6)</label></th>
                            <th><label htmlFor="question_405">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_406">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_407">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_408"></label></th>
                            <th><label htmlFor="question_409"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Catchment Area Treated (in ha) through CCT/ Deep CCT projects implemented in Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_403} onChange={inputHandler} id="question_403" name="question_403" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_404} onChange={inputHandler} id="question_404" name="question_404" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_405} onChange={inputHandler} id="question_405" name="question_405" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_406} onChange={inputHandler} id="question_406" name="question_406" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_407} onChange={inputHandler} id="question_407" name="question_407" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_408} onChange={inputHandler} id="question_408" name="question_408" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_409} onChange={inputHandler} id="question_409" name="question_409" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_410"></label></th>
                            <th><label htmlFor="question_411">Logbook (Check details of rainfall record)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_412"></label></th>
                            <th><label htmlFor="question_413"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.2 Yes/No</td>
                            <td>Measurement of rainfall using rainwater gauge and record maintenance in logbook</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_410} onChange={inputHandler} id="question_410" name="question_410" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_411} onChange={inputHandler} id="question_411" name="question_411" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_412} onChange={inputHandler} id="question_412" name="question_412" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_413} onChange={inputHandler} id="question_413" name="question_413" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_414"></label></th>
                            <th><label htmlFor="question_415">Water budget Report approved by Gramsabha</label></th>
                            <th><label htmlFor="question_416">Geotag Photos of water budget out side of grampanchayat</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_417"></label></th>
                            <th><label htmlFor="question_418"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Submission of water budget report prepared by the Gram Panchayat</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_414} onChange={inputHandler} id="question_414" name="question_414" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_415} onChange={inputHandler} id="question_415" name="question_415" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_416} onChange={inputHandler} id="question_416" name="question_416" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_417} onChange={inputHandler} id="question_417" name="question_417" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_418} onChange={inputHandler} id="question_418" name="question_418" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_419"></label></th>
                            <th><label htmlFor="question_420">Work Order/Document</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_421"></label></th>
                            <th><label htmlFor="question_422"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Actions taken as per the water budget</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_419} onChange={inputHandler} id="question_419" name="question_419" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_420} onChange={inputHandler} id="question_420" name="question_420" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_421} onChange={inputHandler} id="question_421" name="question_421" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_422} onChange={inputHandler} id="question_422" name="question_422" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_423"></label></th>
                            <th><label htmlFor="question_424">Water Supply System Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_425"></label></th>
                            <th><label htmlFor="question_426"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Local Body’s water supply system audit</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_423} onChange={inputHandler} id="question_423" name="question_423" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_424} onChange={inputHandler} id="question_424" name="question_424" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_425} onChange={inputHandler} id="question_425" name="question_425" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_426} onChange={inputHandler} id="question_426" name="question_426" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_427"></label></th>
                            <th><label htmlFor="question_428">% from Implementaion Report</label></th>
                            <th><label htmlFor="question_429">Implementation Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_430"></label></th>
                            <th><label htmlFor="question_431"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Percentage of recommendations implemented as per Local Body’s water supply system audit</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_427} onChange={inputHandler} id="question_427" name="question_427" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_428} onChange={inputHandler} id="question_428" name="question_428" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_429} onChange={inputHandler} id="question_429" name="question_429" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_430} onChange={inputHandler} id="question_430" name="question_430" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_431} onChange={inputHandler} id="question_431" name="question_431" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>3.3.1</th>
                            <th>Percentage of Public Buildings with functioning Rainwater harvesting projects installed before and during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_432"></label></th>
                            <th><label htmlFor="question_433">No. of Total Buildings </label></th>
                            <th><label htmlFor="question_434">No. of Buildings with functioning rain water harvesting as per excel</label></th>
                            <th><label htmlFor="question_435">geotagged photographs </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_436"></label></th>
                            <th><label htmlFor="question_437"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>100%</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_432} onChange={inputHandler} id="question_432" name="question_432" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_433} onChange={inputHandler} id="question_433" name="question_433" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_434} onChange={inputHandler} id="question_434" name="question_434" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_435} onChange={inputHandler} id="question_435" name="question_435" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_436} onChange={inputHandler} id="question_436" name="question_436" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_437} onChange={inputHandler} id="question_437" name="question_437" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                   

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_438"></label></th>
                            <th><label htmlFor="question_439">Rainwater harvested from excel sheet(add all the quantities from column 9)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_440"></label></th>
                            <th><label htmlFor="question_441"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Rainwater harvested during the Majhi Vasundhara Abhiyan 4.0 (in Cubic meter)</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_438} onChange={inputHandler} id="question_438" name="question_438" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_439} onChange={inputHandler} id="question_439" name="question_439" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_440} onChange={inputHandler} id="question_440" name="question_440" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_441} onChange={inputHandler} id="question_441" name="question_441" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_442"></label></th>
                            <th><label htmlFor="question_443">No. of percolation pits as per excel</label></th>
                            <th><label htmlFor="question_444">Work Order/MOU with NGO/ Corporaters</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_445">No. of geotagged photographs from 01-04-2022 to 31-03-2023</label></th>
                            <th><label htmlFor="question_446">Capacity of the project and project brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_447"></label></th>
                            <th><label htmlFor="question_448"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.3.2</td>
                            <td>Number of new percolation pits created during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.question_442} onChange={inputHandler} id="question_442" name="question_442" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_443} onChange={inputHandler} id="question_443" name="question_443" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_444} onChange={inputHandler} id="question_444" name="question_444" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_445} onChange={inputHandler} id="question_445" name="question_445" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_446} onChange={inputHandler} id="question_446" name="question_446" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_447} onChange={inputHandler} id="question_447" name="question_447" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_448} onChange={inputHandler} id="question_448" name="question_448" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th></th>
                            <th>Upkeep:Number of percolation pitscreated during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained</th>
                            <th>25</th>
                            <th></th>
                            <th><label htmlFor="question_449"></label></th>
                            <th><label htmlFor="question_450">As per Data</label></th>
                            <th><label htmlFor="question_451">Geotagphotos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_452"></label></th>
                            <th><label htmlFor="question_453"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_449} onChange={inputHandler} id="question_449" name="question_449" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_450} onChange={inputHandler} id="question_450" name="question_450" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_451} onChange={inputHandler} id="question_451" name="question_451" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_452} onChange={inputHandler} id="question_452" name="question_452" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_453} onChange={inputHandler} id="question_453" name="question_453" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_454"></label></td>
                            <td><label htmlFor="question_455"></label></td>
                            <td><label htmlFor="question_456">MV2.0</label></td>
                            <td><label htmlFor="question_457"></label></td>

                            <td><label htmlFor="question_458"></label></td>
                            <td><input type="number" value={formData.question_454} onChange={inputHandler} id="question_454" name="question_454" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_455} onChange={inputHandler} id="question_455" name="question_455" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_456} onChange={inputHandler} id="question_456" name="question_456" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_457} onChange={inputHandler} id="question_457" name="question_457" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_458} onChange={inputHandler} id="question_458" name="question_458" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_459"></label></td>
                            <td><label htmlFor="question_460"></label></td>
                            <td><label htmlFor="question_461">MV3.0</label></td>
                            <td><label htmlFor="question_462"></label></td>

                            <td><label htmlFor="question_463"></label></td>
                            <td><input type="number" value={formData.question_459} onChange={inputHandler} id="question_459" name="question_459" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_460} onChange={inputHandler} id="question_460" name="question_460" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_461} onChange={inputHandler} id="question_461" name="question_461" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_462} onChange={inputHandler} id="question_462" name="question_462" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_463} onChange={inputHandler} id="question_463" name="question_463" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_464"></label></th>
                            <th><label htmlFor="question_465">No. OF Wells </label></th>
                            <th><label htmlFor="question_466">No. of Maps & geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_467"></label></th>
                            <th><label htmlFor="question_468"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.4 Yes/No</td>
                            <td>Mapping of all wells in the Local Body with geotagging</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_464} onChange={inputHandler} id="question_464" name="question_464" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_465} onChange={inputHandler} id="question_465" name="question_465" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_466} onChange={inputHandler} id="question_466" name="question_466" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_467} onChange={inputHandler} id="question_467" name="question_467" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_468} onChange={inputHandler} id="question_468" name="question_468" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_469"></label></th>
                            <th><label htmlFor="question_470">Identification of dysfunctional wells from MIS</label></th>
                            <th><label htmlFor="question_471">No. of Maps & geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_472"></label></th>
                            <th><label htmlFor="question_473"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Identification of dysfunctional wells</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.question_469} onChange={inputHandler} id="question_469" name="question_469" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_470} onChange={inputHandler} id="question_470" name="question_470" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_471} onChange={inputHandler} id="question_471" name="question_471" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_472} onChange={inputHandler} id="question_472" name="question_472" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_473} onChange={inputHandler} id="question_473" name="question_473" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_474"></label></th>
                            <th><label htmlFor="question_475">No. of projects of rejuvenation taken up from Excel</label></th>
                            <th><label htmlFor="question_476">Work Order</label></th>
                            <th><label htmlFor="question_477"> Work completion Certificate</label></th>
                            <th><label htmlFor="question_478">Financial progress brief</label></th>
                            <th><label htmlFor="question_479">Stage wise photgraphs</label></th>
                            <th><label htmlFor="question_480">Maintenance Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_481"></label></th>
                            <th><label htmlFor="question_482"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Yes/No</td>
                            <td>Rejuvenation/Recharge of dysfunctional wells</td>
                            <td>40</td>

                            <td></td>
                            <td><input type="number" value={formData.question_474} onChange={inputHandler} id="question_474" name="question_474" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.question_475} onChange={inputHandler} id="question_475" name="question_475" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.question_476} onChange={inputHandler} id="question_476" name="question_476" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_477} onChange={inputHandler} id="question_477" name="question_477" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_478} onChange={inputHandler} id="question_478" name="question_478" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_479} onChange={inputHandler} id="question_479" name="question_479" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_480} onChange={inputHandler} id="question_480" name="question_480" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_481} onChange={inputHandler} id="question_481" name="question_481" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_482} onChange={inputHandler} id="question_482" name="question_482" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>20</th>
                            <th>Yes/No</th>
                            <th>Water quality report of rejuvenated wells</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_483"></label></th>
                            <th><label htmlFor="question_484">Water Quality Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_485"></label></th>
                            <th><label htmlFor="question_486"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Preparation of water quality report</td>
                            <td>10</td>

                            <td></td>
                            <td><select value={formData.question_483} onChange={inputHandler} id="question_483" name="question_483" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_484} onChange={inputHandler} id="question_484" name="question_484" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_485} onChange={inputHandler} id="question_485" name="question_485" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_486} onChange={inputHandler} id="question_486" name="question_486" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_487"></label></th>
                            <th><label htmlFor="question_488">Water Quality Report (Parameter checking)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_489"></label></th>
                            <th><label htmlFor="question_490"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Quality of water as per drinking water Standards</td>
                            <td>10</td>

                            <td></td>
                            <td><select value={formData.question_487} onChange={inputHandler} id="question_487" name="question_487" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_488} onChange={inputHandler} id="question_488" name="question_488" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_489} onChange={inputHandler} id="question_489" name="question_489" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_490} onChange={inputHandler} id="question_490" name="question_490" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_491"></label></th>
                            <th><label htmlFor="question_492">Percentage of farmland covered under drip irrigation/micro irrigation projects from Excel/MIS</label></th>
                            <th><label htmlFor="question_493">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_494">Work Completion certificate</label></th>
                            <th><label htmlFor="question_495">Financial Brief</label></th>
                            <th><label htmlFor="question_496">Geotag photoas</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_497"></label></th>
                            <th><label htmlFor="question_498"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.5</td>
                            <td>Percentage of farmland covered under drip irrigation/micro irrigation projects.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_491} onChange={inputHandler} id="question_491" name="question_491" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_492} onChange={inputHandler} id="question_492" name="question_492" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_493} onChange={inputHandler} id="question_493" name="question_493" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_494} onChange={inputHandler} id="question_494" name="question_494" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_495} onChange={inputHandler} id="question_495" name="question_495" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_496} onChange={inputHandler} id="question_496" name="question_496" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_497} onChange={inputHandler} id="question_497" name="question_497" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_498} onChange={inputHandler} id="question_498" name="question_498" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_499"></label></th>
                            <th><label htmlFor="question_500">Percentage of farmland brought under drip irrigation/micro irrigation projects from Excel/MIS</label></th>
                            <th><label htmlFor="question_501">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_502">Work Completion certificate</label></th>
                            <th><label htmlFor="question_503">Financial Brief</label></th>
                            <th><label htmlFor="question_504">Geotag photoas</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_505"></label></th>
                            <th><label htmlFor="question_506"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of farmland brought under drip irrigation during Majhi Vasundhara Abhiyan 4.0.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_499} onChange={inputHandler} id="question_499" name="question_499" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_500} onChange={inputHandler} id="question_500" name="question_500" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_501} onChange={inputHandler} id="question_501" name="question_501" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_502} onChange={inputHandler} id="question_502" name="question_502" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_503} onChange={inputHandler} id="question_503" name="question_503" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_504} onChange={inputHandler} id="question_504" name="question_504" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_505} onChange={inputHandler} id="question_505" name="question_505" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_506} onChange={inputHandler} id="question_506" name="question_506" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_507"></label></th>
                            <th><label htmlFor="question_508">Percentage of farmland covered under organic farming from Excel/MIS</label></th>
                            <th><label htmlFor="question_509">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_510">Work Completion certificate</label></th>
                            <th><label htmlFor="question_511">Financial Brief</label></th>
                            <th><label htmlFor="question_512">Geotag photoas</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_513"></label></th>
                            <th><label htmlFor="question_514"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of farmland covered under organic farming (including land in conversion period).</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_507} onChange={inputHandler} id="question_507" name="question_507" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_508} onChange={inputHandler} id="question_508" name="question_508" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_509} onChange={inputHandler} id="question_509" name="question_509" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_510} onChange={inputHandler} id="question_510" name="question_510" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_511} onChange={inputHandler} id="question_511" name="question_511" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_512} onChange={inputHandler} id="question_512" name="question_512" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_513} onChange={inputHandler} id="question_513" name="question_513" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_514} onChange={inputHandler} id="question_514" name="question_514" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_515"></label></th>
                            <th><label htmlFor="question_516">Percentage of farmland brought under organic farming during Majhi Vasundhara Abhiyan 4.0. from MIS/Excel</label></th>
                            <th><label htmlFor="question_517">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_518">Work Completion certificate</label></th>
                            <th><label htmlFor="question_519">Financial Brief</label></th>
                            <th><label htmlFor="question_520">Geotag photoas</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_521"></label></th>
                            <th><label htmlFor="question_522"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of farmland brought under organic farming during Majhi Vasundhara Abhiyan 4.0.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_515} onChange={inputHandler} id="question_515" name="question_515" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_516} onChange={inputHandler} id="question_516" name="question_516" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_517} onChange={inputHandler} id="question_517" name="question_517" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_518} onChange={inputHandler} id="question_518" name="question_518" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_519} onChange={inputHandler} id="question_519" name="question_519" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_520} onChange={inputHandler} id="question_520" name="question_520" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_521} onChange={inputHandler} id="question_521" name="question_521" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_522} onChange={inputHandler} id="question_522" name="question_522" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_523"></label></th>
                            <th><label htmlFor="question_524">from Excel/MIS</label></th>
                            <th><label htmlFor="question_525">Copy of JJM Portal</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_526"></label></th>
                            <th><label htmlFor="question_527"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.6</td>
                            <td>Percentage of households connected with piped water supply</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.question_523} onChange={inputHandler} id="question_523" name="question_523" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_524} onChange={inputHandler} id="question_524" name="question_524" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_525} onChange={inputHandler} id="question_525" name="question_525" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_526} onChange={inputHandler} id="question_526" name="question_526" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_527} onChange={inputHandler} id="question_527" name="question_527" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_528"></label></th>
                            <th><label htmlFor="question_529">from Excel/MIS</label></th>
                            <th><label htmlFor="question_530">Copy of JJM Portal</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_531"></label></th>
                            <th><label htmlFor="question_532"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of Schools and Anganwadi centers connected with piped water supply</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.question_528} onChange={inputHandler} id="question_528" name="question_528" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_529} onChange={inputHandler} id="question_529" name="question_529" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_530} onChange={inputHandler} id="question_530" name="question_530" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_531} onChange={inputHandler} id="question_531" name="question_531" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_532} onChange={inputHandler} id="question_532" name="question_532" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_533"></label></th>
                            <th><label htmlFor="question_534">Number of promotion of eco-friendly immersion from excel during 01.04.23 to 31.03.24 from Excel</label></th>
                            <th><label htmlFor="question_535">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_536">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_537"></label></th>
                            <th><label htmlFor="question_538"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.7</td>
                            <td>Number of promotional activities for eco-friendly immersion </td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_533} onChange={inputHandler} id="question_533" name="question_533" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_534} onChange={inputHandler} id="question_534" name="question_534" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_535} onChange={inputHandler} id="question_535" name="question_535" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_536} onChange={inputHandler} id="question_536" name="question_536" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_537} onChange={inputHandler} id="question_537" name="question_537" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_538} onChange={inputHandler} id="question_538" name="question_538" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_539"></label></th>
                            <th><label htmlFor="question_540">Number of promotion of eco-friendly immersion from excel during 01.04.23 to 31.03.24 from Excel</label></th>
                            <th><label htmlFor="question_541">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_542">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_543"></label></th>
                            <th><label htmlFor="question_544"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>No. of artifical immersion spots created</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_539} onChange={inputHandler} id="question_539" name="question_539" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_540} onChange={inputHandler} id="question_540" name="question_540" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_541} onChange={inputHandler} id="question_541" name="question_541" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_542} onChange={inputHandler} id="question_542" name="question_542" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_543} onChange={inputHandler} id="question_543" name="question_543" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_544} onChange={inputHandler} id="question_544" name="question_544" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_545"></label></th>
                            <th><label htmlFor="question_546">Report on collection, segregation, transport process of worship material after immersion</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_547"></label></th>
                            <th><label htmlFor="question_548"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Collection, segregation, transport and processing of worship material pre and post immersion</td>
                            <td>30</td>

                            <td></td>
                            <td><select value={formData.question_545} onChange={inputHandler} id="question_545" name="question_545" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_546} onChange={inputHandler} id="question_546" name="question_546" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_547} onChange={inputHandler} id="question_547" name="question_547" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_548} onChange={inputHandler} id="question_548" name="question_548" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_549"></label></th>
                            <th><label htmlFor="question_550">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_551">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_552">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_553"></label></th>
                            <th><label htmlFor="question_554"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.8</td>
                            <td>No. of promotional activity done </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_549} onChange={inputHandler} id="question_549" name="question_549" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_550} onChange={inputHandler} id="question_550" name="question_550" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_551} onChange={inputHandler} id="question_551" name="question_551" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_552} onChange={inputHandler} id="question_552" name="question_552" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_553} onChange={inputHandler} id="question_553" name="question_553" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_554} onChange={inputHandler} id="question_554" name="question_554" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_555"></label></th>
                            <th><label htmlFor="question_556">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_557">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_558">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_559"></label></th>
                            <th><label htmlFor="question_560"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of eco-friendly idols worshipped Community</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_555} onChange={inputHandler} id="question_555" name="question_555" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_556} onChange={inputHandler} id="question_556" name="question_556" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_557} onChange={inputHandler} id="question_557" name="question_557" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_558} onChange={inputHandler} id="question_558" name="question_558" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_559} onChange={inputHandler} id="question_559" name="question_559" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_560} onChange={inputHandler} id="question_560" name="question_560" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_561"></label></th>
                            <th><label htmlFor="question_562">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_563">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_564">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_565"></label></th>
                            <th><label htmlFor="question_566"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of eco-friendly idols worshipped Individual</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_561} onChange={inputHandler} id="question_561" name="question_561" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_562} onChange={inputHandler} id="question_562" name="question_562" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_563} onChange={inputHandler} id="question_563" name="question_563" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_564} onChange={inputHandler} id="question_564" name="question_564" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_565} onChange={inputHandler} id="question_565" name="question_565" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_566} onChange={inputHandler} id="question_566" name="question_566" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_567"></label></th>
                            <th><label htmlFor="question_568">Brief document mentioning wetland name as per link mentioned Column I</label></th>
                            <th><label htmlFor="question_569">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_570"></label></th>
                            <th><label htmlFor="question_571"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.9</td>
                            <td>Preparation of Brief Document. Wetlands (Conservation & Management), Rules, 2017.</td>
                            <td>100</td>

                            <td></td>
                            <td><select value={formData.question_567} onChange={inputHandler} id="question_567" name="question_567" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_568} onChange={inputHandler} id="question_568" name="question_568" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_569} onChange={inputHandler} id="question_569" name="question_569" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_570} onChange={inputHandler} id="question_570" name="question_570" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_571} onChange={inputHandler} id="question_571" name="question_571" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>200</th>
                            <th>4.1</th>
                            <th>Number of awareness events organized to promote Renewable energy during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_572"></label></th>
                            <th><label htmlFor="question_573">Number of awareness events  during 01-04-2023 to 31-03-2024 </label></th>
                            <th><label htmlFor="question_574">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_575">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_576">Geotagged photos with backdrop/banner of renewable energy during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_577"></label></th>
                            <th><label htmlFor="question_578"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First Half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_572} onChange={inputHandler} id="question_572" name="question_572" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_573} onChange={inputHandler} id="question_573" name="question_573" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_574} onChange={inputHandler} id="question_574" name="question_574" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_575} onChange={inputHandler} id="question_575" name="question_575" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_576} onChange={inputHandler} id="question_576" name="question_576" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_577} onChange={inputHandler} id="question_577" name="question_577" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_578} onChange={inputHandler} id="question_578" name="question_578" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="question_579">(Relative Marking)</label></td>
                            <td><label htmlFor="question_580"></label></td>
                            <td><label htmlFor="question_581">Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="question_582">100</label></td>

                            <td><label htmlFor="question_583"></label></td>
                            <td><input type="number" value={formData.question_579} onChange={inputHandler} id="question_579" name="question_579" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_580} onChange={inputHandler} id="question_580" name="question_580" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_581} onChange={inputHandler} id="question_581" name="question_581" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_582} onChange={inputHandler} id="question_582" name="question_582" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_583} onChange={inputHandler} id="question_583" name="question_583" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_584"></label></td>
                            <td><label htmlFor="question_585"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_584} onChange={inputHandler} id="question_584" name="question_584" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_585} onChange={inputHandler} id="question_585" name="question_585" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_586"></label></th>
                            <th><label htmlFor="question_587">No. of total LED street Lights (from Excel/MIS)</label></th>
                            <th><label htmlFor="question_588">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_589">Completion Certificate during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_590">Financial Brief</label></th>
                            <th><label htmlFor="question_591">Energy Saving Report validate eclectity bill before and after installation of LED light</label></th>
                            <th><label htmlFor="question_592">Before geotag photos</label></th>
                            <th><label htmlFor="question_593">After geotag Photos during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_594"></label></th>
                            <th><label htmlFor="question_595"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>4.2.1 Number</td>
                            <td>Percentage of LED Streetlights of total Streetlights</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_586} onChange={inputHandler} id="question_586" name="question_586" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_587} onChange={inputHandler} id="question_587" name="question_587" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_588} onChange={inputHandler} id="question_588" name="question_588" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_589} onChange={inputHandler} id="question_589" name="question_589" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_590} onChange={inputHandler} id="question_590" name="question_590" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_591} onChange={inputHandler} id="question_591" name="question_591" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_592} onChange={inputHandler} id="question_592" name="question_592" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_593} onChange={inputHandler} id="question_593" name="question_593" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_594} onChange={inputHandler} id="question_594" name="question_594" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_595} onChange={inputHandler} id="question_595" name="question_595" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_596"></label></th>
                            <th><label htmlFor="question_597">Total capacity of solar installation (IN KW) from Excel </label></th>
                            <th><label htmlFor="question_598">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_599">Commissioning/Completion Certificate during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_600">Financial Brief</label></th>
                            <th><label htmlFor="question_601">Energy Saving Report validate electrity bill before and after installation</label></th>
                            <th><label htmlFor="question_602">Before geotag photos</label></th>
                            <th><label htmlFor="question_603">After geotag Photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_604"></label></th>
                            <th><label htmlFor="question_605"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>4.2.2</td>
                            <td>Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.question_596} onChange={inputHandler} id="question_596" name="question_596" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_597} onChange={inputHandler} id="question_597" name="question_597" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_598} onChange={inputHandler} id="question_598" name="question_598" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_599} onChange={inputHandler} id="question_599" name="question_599" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_600} onChange={inputHandler} id="question_600" name="question_600" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_601} onChange={inputHandler} id="question_601" name="question_601" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_602} onChange={inputHandler} id="question_602" name="question_602" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_603} onChange={inputHandler} id="question_603" name="question_603" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_604} onChange={inputHandler} id="question_604" name="question_604" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_605} onChange={inputHandler} id="question_605" name="question_605" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th></th>
                            <th>Upkeep:Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="question_606"></label></th>
                            <th><label htmlFor="question_607">value from MIS</label></th>
                            <th><label htmlFor="question_608">Geotag photographs</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_609"></label></th>
                            <th><label htmlFor="question_610"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_606} onChange={inputHandler} id="question_606" name="question_606" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_607} onChange={inputHandler} id="question_607" name="question_607" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_608} onChange={inputHandler} id="question_608" name="question_608" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_609} onChange={inputHandler} id="question_609" name="question_609" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_610} onChange={inputHandler} id="question_610" name="question_610" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_611"></label></td>
                            <td><label htmlFor="question_612"></label></td>
                            <td><label htmlFor="question_613">MV2.0</label></td>
                            <td><label htmlFor="question_614"></label></td>

                            <td><label htmlFor="question_615"></label></td>
                            <td><input type="number" value={formData.question_611} onChange={inputHandler} id="question_611" name="question_611" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_612} onChange={inputHandler} id="question_612" name="question_612" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_613} onChange={inputHandler} id="question_613" name="question_613" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_614} onChange={inputHandler} id="question_614" name="question_614" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_615} onChange={inputHandler} id="question_615" name="question_615" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_616"></label></td>
                            <td><label htmlFor="question_617"></label></td>
                            <td><label htmlFor="question_618">MV3.0</label></td>
                            <td><label htmlFor="question_619"></label></td>

                            <td><label htmlFor="question_620"></label></td>
                            <td><input type="number" value={formData.question_616} onChange={inputHandler} id="question_616" name="question_616" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_617} onChange={inputHandler} id="question_617" name="question_617" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_618} onChange={inputHandler} id="question_618" name="question_618" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_619} onChange={inputHandler} id="question_619" name="question_619" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_620} onChange={inputHandler} id="question_620" name="question_620" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_621"></label></th>
                            <th><label htmlFor="question_622">Total capacity of solar water heater (IN Litre per day) from Excel </label></th>
                            <th><label htmlFor="question_623">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_624">Financial Brief</label></th>
                            <th><label htmlFor="question_625">Before geotag photos</label></th>
                            <th><label htmlFor="question_626">After geotag Photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_627"></label></th>
                            <th><label htmlFor="question_628"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total capacity (in Liter per Day) of solar water heaters installed in a Local Body</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_621} onChange={inputHandler} id="question_621" name="question_621" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_622} onChange={inputHandler} id="question_622" name="question_622" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_623} onChange={inputHandler} id="question_623" name="question_623" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_624} onChange={inputHandler} id="question_624" name="question_624" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_625} onChange={inputHandler} id="question_625" name="question_625" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_626} onChange={inputHandler} id="question_626" name="question_626" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_627} onChange={inputHandler} id="question_627" name="question_627" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_628} onChange={inputHandler} id="question_628" name="question_628" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_629"></label></th>
                            <th><label htmlFor="question_630">No. of biogas plants in working condidtion from Excel during MIV04</label></th>
                            <th><label htmlFor="question_631">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_632">Completion Certificate during 01-04-2022 to 31-03-2023</label></th>
                            <th><label htmlFor="question_633">Financial Brief</label></th>
                            <th><label htmlFor="question_634">Geotagged photographs during 01-04-2022 to 31-03-2023</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_635"></label></th>
                            <th><label htmlFor="question_636"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>4.2.3</td>
                            <td>Number of biogas plants in working condition installed during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_629} onChange={inputHandler} id="question_629" name="question_629" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_630} onChange={inputHandler} id="question_630" name="question_630" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_631} onChange={inputHandler} id="question_631" name="question_631" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_632} onChange={inputHandler} id="question_632" name="question_632" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_633} onChange={inputHandler} id="question_633" name="question_633" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_634} onChange={inputHandler} id="question_634" name="question_634" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_635} onChange={inputHandler} id="question_635" name="question_635" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_636} onChange={inputHandler} id="question_636" name="question_636" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th></th>
                            <th>Total capacity of the functional biogas plant installed in the Local Body (Cubic meter per day)- during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0, 4.0</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="question_637"></label></th>
                            <th><label htmlFor="question_638">Total biogas plants in working condidtion </label></th>
                            <th><label htmlFor="question_639">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_640"></label></th>
                            <th><label htmlFor="question_641"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_637} onChange={inputHandler} id="question_637" name="question_637" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_638} onChange={inputHandler} id="question_638" name="question_638" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_639} onChange={inputHandler} id="question_639" name="question_639" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_640} onChange={inputHandler} id="question_640" name="question_640" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_641} onChange={inputHandler} id="question_641" name="question_641" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_642"></label></td>
                            <td><label htmlFor="question_643"></label></td>
                            <td><label htmlFor="question_644">MV2.0</label></td>
                            <td><label htmlFor="question_645"></label></td>

                            <td><label htmlFor="question_646"></label></td>
                            <td><input type="number" value={formData.question_642} onChange={inputHandler} id="question_642" name="question_642" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_643} onChange={inputHandler} id="question_643" name="question_643" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_644} onChange={inputHandler} id="question_644" name="question_644" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_645} onChange={inputHandler} id="question_645" name="question_645" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_646} onChange={inputHandler} id="question_646" name="question_646" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_647"></label></td>
                            <td><label htmlFor="question_648"></label></td>
                            <td><label htmlFor="question_649">V3.0</label></td>
                            <td><label htmlFor="question_650"></label></td>

                            <td><label htmlFor="question_651"></label></td>
                            <td><input type="number" value={formData.question_647} onChange={inputHandler} id="question_647" name="question_647" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_648} onChange={inputHandler} id="question_648" name="question_648" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_649} onChange={inputHandler} id="question_649" name="question_649" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_650} onChange={inputHandler} id="question_650" name="question_650" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_651} onChange={inputHandler} id="question_651" name="question_651" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_652"></label></td>
                            <td><label htmlFor="question_653"></label></td>
                            <td><label htmlFor="question_654">V3.0</label></td>
                            <td><label htmlFor="question_655"></label></td>

                            <td><label htmlFor="question_656"></label></td>
                            <td><input type="number" value={formData.question_652} onChange={inputHandler} id="question_652" name="question_652" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_653} onChange={inputHandler} id="question_653" name="question_653" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_654} onChange={inputHandler} id="question_654" name="question_654" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_655} onChange={inputHandler} id="question_655" name="question_655" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_656} onChange={inputHandler} id="question_656" name="question_656" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_657"></label></th>
                            <th><label htmlFor="question_658">Total no. of solar pumps During MV04, write number from excel</label></th>
                            <th><label htmlFor="question_659">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_660">Completion Certificate </label></th>
                            <th><label htmlFor="question_661">Financial Brief</label></th>
                            <th><label htmlFor="question_662">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_663"></label></th>
                            <th><label htmlFor="question_664"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>4.2.4</td>
                            <td>Number of new solar pumps installed in individual and community areas during Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_657} onChange={inputHandler} id="question_657" name="question_657" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_658} onChange={inputHandler} id="question_658" name="question_658" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_659} onChange={inputHandler} id="question_659" name="question_659" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_660} onChange={inputHandler} id="question_660" name="question_660" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_661} onChange={inputHandler} id="question_661" name="question_661" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_662} onChange={inputHandler} id="question_662" name="question_662" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_663} onChange={inputHandler} id="question_663" name="question_663" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_664} onChange={inputHandler} id="question_664" name="question_664" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>    

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_665"></label></th>
                            <th><label htmlFor="question_666">Total no. of solar pumps before MV04, write number from excel</label></th>
                            <th><label htmlFor="question_667">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_668">Completion Certificate </label></th>
                            <th><label htmlFor="question_669">Financial Brief</label></th>
                            <th><label htmlFor="question_670">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_671"></label></th>
                            <th><label htmlFor="question_672"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total number of solar pumps installed in individual or community areas before Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_665} onChange={inputHandler} id="question_665" name="question_665" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_666} onChange={inputHandler} id="question_666" name="question_666" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_667} onChange={inputHandler} id="question_667" name="question_667" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_668} onChange={inputHandler} id="question_668" name="question_668" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_669} onChange={inputHandler} id="question_669" name="question_669" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_670} onChange={inputHandler} id="question_670" name="question_670" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_671} onChange={inputHandler} id="question_671" name="question_671" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_672} onChange={inputHandler} id="question_672" name="question_672" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_673"></label></th>
                            <th><label htmlFor="question_674">Total no. of decentralized solar energy plants During MV04, write number from excel</label></th>
                            <th><label htmlFor="question_675">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_676">Completion Certificate </label></th>
                            <th><label htmlFor="question_677">Financial Brief</label></th>
                            <th><label htmlFor="question_678">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_679"></label></th>
                            <th><label htmlFor="question_680"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>4.2.5</td>
                            <td>Capacity of decentralized solar energy plants in MW during Majhi Vasundhara Abhiyan 4 .0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_673} onChange={inputHandler} id="question_673" name="question_673" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_674} onChange={inputHandler} id="question_674" name="question_674" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_675} onChange={inputHandler} id="question_675" name="question_675" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_676} onChange={inputHandler} id="question_676" name="question_676" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_677} onChange={inputHandler} id="question_677" name="question_677" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_678} onChange={inputHandler} id="question_678" name="question_678" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_679} onChange={inputHandler} id="question_679" name="question_679" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_680} onChange={inputHandler} id="question_680" name="question_680" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_681"></label></th>
                            <th><label htmlFor="question_682">Total no. of decentralized solar energy plants before MV04, write number from excel</label></th>
                            <th><label htmlFor="question_683">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_684">Completion Certificate </label></th>
                            <th><label htmlFor="question_685">Financial Brief</label></th>
                            <th><label htmlFor="question_686">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_687"></label></th>
                            <th><label htmlFor="question_688"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Capacity of decentralized solar energy plants in MW before Majhi Vasundhara Abhiyan 4 .0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_681} onChange={inputHandler} id="question_681" name="question_681" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_682} onChange={inputHandler} id="question_682" name="question_682" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_683} onChange={inputHandler} id="question_683" name="question_683" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_684} onChange={inputHandler} id="question_684" name="question_684" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_685} onChange={inputHandler} id="question_685" name="question_685" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_686} onChange={inputHandler} id="question_686" name="question_686" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_687} onChange={inputHandler} id="question_687" name="question_687" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_688} onChange={inputHandler} id="question_688" name="question_688" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_689"></label></th>
                            <th><label htmlFor="question_690">Written As per MIS</label></th>
                            <th><label htmlFor="question_691">screenshot of dashboard stating number of e-pledge register</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_692"></label></th>
                            <th><label htmlFor="question_693"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.1</td>
                            <td>No. of E-Pledges registered on the portal by citizens of the Local body individually during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.question_689} onChange={inputHandler} id="question_689" name="question_689" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_690} onChange={inputHandler} id="question_690" name="question_690" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_691} onChange={inputHandler} id="question_691" name="question_691" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_692} onChange={inputHandler} id="question_692" name="question_692" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_693} onChange={inputHandler} id="question_693" name="question_693" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_694"></label></th>
                            <th><label htmlFor="question_695">Written As per MIS</label></th>
                            <th><label htmlFor="question_696">screenshot of dashboard stating number of e-pledge register</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_697"></label></th>
                            <th><label htmlFor="question_698"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>No. of E-Pledges registered on the portal by citizens of the Local body in a group during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_694} onChange={inputHandler} id="question_694" name="question_694" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_695} onChange={inputHandler} id="question_695" name="question_695" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_696} onChange={inputHandler} id="question_696" name="question_696" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_697} onChange={inputHandler} id="question_697" name="question_697" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_698} onChange={inputHandler} id="question_698" name="question_698" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_699"></label></th>
                            <th><label htmlFor="question_700">Written As per MIS</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_701"></label></th>
                            <th><label htmlFor="question_702"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Compliance: % of #Epledge registered and complied individually during MVA 4.0</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.question_699} onChange={inputHandler} id="question_699" name="question_699" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_700} onChange={inputHandler} id="question_700" name="question_700" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_701} onChange={inputHandler} id="question_701" name="question_701" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_702} onChange={inputHandler} id="question_702" name="question_702" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_703"></label></th>
                            <th><label htmlFor="question_704">Written As per MIS</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_705"></label></th>
                            <th><label htmlFor="question_706"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Compliance: % of #Epledge registered and complied in a group during MVA 4.0</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.question_703} onChange={inputHandler} id="question_703" name="question_703" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_704} onChange={inputHandler} id="question_704" name="question_704" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_705} onChange={inputHandler} id="question_705" name="question_705" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_706} onChange={inputHandler} id="question_706" name="question_706" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_707"></label></th>
                            <th><label htmlFor="question_708">Written As per MIS</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_709"></label></th>
                            <th><label htmlFor="question_710"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered)</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_707} onChange={inputHandler} id="question_707" name="question_707" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_708} onChange={inputHandler} id="question_708" name="question_708" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_709} onChange={inputHandler} id="question_709" name="question_709" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_710} onChange={inputHandler} id="question_710" name="question_710" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>200</th>
                            <th>5.2</th>
                            <th>Number of Awareness Events/Activities/Spardha conducted by the Local body </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_711"></label></th>
                            <th><label htmlFor="question_712">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="question_713">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_714">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_715"></label></th>
                            <th><label htmlFor="question_716"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_711} onChange={inputHandler} id="question_711" name="question_711" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_712} onChange={inputHandler} id="question_712" name="question_712" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_713} onChange={inputHandler} id="question_713" name="question_713" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_714} onChange={inputHandler} id="question_714" name="question_714" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_715} onChange={inputHandler} id="question_715" name="question_715" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_716} onChange={inputHandler} id="question_716" name="question_716" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_717"></label>(Relative Marking)</td>
                            <td><label htmlFor="question_718"></label></td>
                            <td><label htmlFor="question_719"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="question_720"></label>100</td>

                            <td><label htmlFor="question_721"></label></td>
                            <td><input type="number" value={formData.question_717} onChange={inputHandler} id="question_717" name="question_717" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_718} onChange={inputHandler} id="question_718" name="question_718" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_719} onChange={inputHandler} id="question_719" name="question_719" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_720} onChange={inputHandler} id="question_720" name="question_720" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_722"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_721} onChange={inputHandler} id="question_721" name="question_721" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_722} onChange={inputHandler} id="question_722" name="question_722" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_723"></label></th>
                            <th><label htmlFor="question_724">Number of posts from Excel </label></th>
                            <th><label htmlFor="question_725">Official Facebook Link. during 01.04.232 to 31.03.24(check posts from #majhi vasundhara and #E pledge) & put excel count</label></th>
                            <th><label htmlFor="question_726">Official twitter handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge) & & put excel count </label></th>
                            <th><label htmlFor="question_727">Official instagram handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge)  & put excel count </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_728"></label></th>
                            <th><label htmlFor="question_729"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of likes and shares on posts of awareness events/activities/spardha on social media page of Local body with #majhivasundhara #MissionLiFE</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.question_723} onChange={inputHandler} id="question_723" name="question_723" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_724} onChange={inputHandler} id="question_724" name="question_724" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_725} onChange={inputHandler} id="question_725" name="question_725" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_726} onChange={inputHandler} id="question_726" name="question_726" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_727} onChange={inputHandler} id="question_727" name="question_727" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_728} onChange={inputHandler} id="question_728" name="question_728"autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_729} onChange={inputHandler} id="question_729" name="question_729"autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_730"></label></th>
                            <th><label htmlFor="question_731">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="question_732">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_733">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_734"></label></th>
                            <th><label htmlFor="question_735"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Use of eco friendly material for the promotional events/activity of Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_730} onChange={inputHandler} id="question_730" name="question_730" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_731} onChange={inputHandler} id="question_731" name="question_731" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_732} onChange={inputHandler} id="question_732" name="question_732" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_733} onChange={inputHandler} id="question_733" name="question_733" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_734} onChange={inputHandler} id="question_734" name="question_734" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_735} onChange={inputHandler} id="question_735" name="question_735" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_736"></label></th>
                            <th><label htmlFor="question_737">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="question_738">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_739">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_740"></label></th>
                            <th><label htmlFor="question_741"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Effective use of Mission LiFE logo in organized activities and events</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_736} onChange={inputHandler} id="question_736" name="question_736" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_737} onChange={inputHandler} id="question_737" name="question_737" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_738} onChange={inputHandler} id="question_738" name="question_738" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_739} onChange={inputHandler} id="question_739" name="question_739" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_740} onChange={inputHandler} id="question_740" name="question_740" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_741} onChange={inputHandler} id="question_741" name="question_741" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_742"></label></th>
                            <th><label htmlFor="question_743">Number of event conducted by local body written number from excel </label></th>
                            <th><label htmlFor="question_744">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_745">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_746"></label></th>
                            <th><label htmlFor="question_747"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.3</td>
                            <td>Number of events conducted by Local body which involved participation of youths / youth groups</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_742} onChange={inputHandler} id="question_742" name="question_742" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_743} onChange={inputHandler} id="question_743" name="question_743" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_744} onChange={inputHandler} id="question_744" name="question_744" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_745} onChange={inputHandler} id="question_745" name="question_745" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_746} onChange={inputHandler} id="question_746" name="question_746" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_747} onChange={inputHandler} id="question_747" name="question_747" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_748"></label></th>
                            <th><label htmlFor="question_749">Number of Paryawaran Doot from from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                            <th><label htmlFor="question_750">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_751">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_752"></label></th>
                            <th><label htmlFor="question_753"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of Paryavaran Doot identified</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_748} onChange={inputHandler} id="question_748" name="question_748" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_749} onChange={inputHandler} id="question_749" name="question_749" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_750} onChange={inputHandler} id="question_750" name="question_750" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_751} onChange={inputHandler} id="question_751" name="question_751" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_752} onChange={inputHandler} id="question_752" name="question_752" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_753} onChange={inputHandler} id="question_753" name="question_753" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_754">(Relative Marking)</label></td>
                            <td><label htmlFor="question_755"></label></td>
                            <td><label htmlFor="question_756">Number of Youth identified as Paryavaran Doot</label></td>
                            <td><label htmlFor="question_757">50</label></td>

                            <td><label htmlFor="question_758"></label></td>
                            <td><input type="number" value={formData.question_754} onChange={inputHandler} id="question_754" name="question_754" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_755} onChange={inputHandler} id="question_755" name="question_755" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_756} onChange={inputHandler} id="question_756" name="question_756" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_757} onChange={inputHandler} id="question_757" name="question_757" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_759"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_758} onChange={inputHandler} id="question_758" name="question_758" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_759} onChange={inputHandler} id="question_759" name="question_759" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 100</th>
                            <th></th>
                            <th>Number of events conducted by the Local body with Paryavaran doot</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_760"></label></th>
                            <th><label htmlFor="question_761">Number of events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                            <th><label htmlFor="question_762">Social Media Link during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="question_763">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="question_764">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_765"></label></th>
                            <th><label htmlFor="question_766"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_760} onChange={inputHandler} id="question_760" name="question_760" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_761} onChange={inputHandler} id="question_761" name="question_761" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_762} onChange={inputHandler} id="question_762" name="question_762" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_763} onChange={inputHandler} id="question_763" name="question_763" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_764} onChange={inputHandler} id="question_764" name="question_764" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_765} onChange={inputHandler} id="question_765" name="question_765" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_766} onChange={inputHandler} id="question_766" name="question_766" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_767"></label>(Relative Marking)</td>
                            <td><label htmlFor="question_768"></label></td>
                            <td><label htmlFor="question_769"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="question_770"></label>0</td>

                            <td><label htmlFor="question_771"></label></td>
                            <td><input type="number" value={formData.question_767}onChange={inputHandler} id="question_767" name="question_767" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_768}onChange={inputHandler} id="question_768" name="question_768" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_769}onChange={inputHandler} id="question_769" name="question_769" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_770}onChange={inputHandler} id="question_770" name="question_770" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_771}onChange={inputHandler} id="question_771" name="question_771" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_772"></label></td>
                            <td><label htmlFor="question_773"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_772}onChange={inputHandler} id="question_772" name="question_772" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_773}onChange={inputHandler} id="question_773" name="question_773" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_774"></label></th>
                            <th><label htmlFor="question_775">No. of school in local body as per excel</label></th>
                            <th><label htmlFor="question_776">No. of school participates in ESS</label></th>
                            <th><label htmlFor="question_777">Certificate of participation of schools</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_778"></label></th>
                            <th><label htmlFor="question_779"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.4</td>
                            <td>Percentage of Schools participated in ESS during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.question_774} onChange={inputHandler} id="question_774" name="question_774" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_775} onChange={inputHandler} id="question_775" name="question_775" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_776} onChange={inputHandler} id="question_776" name="question_776" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_777} onChange={inputHandler} id="question_777" name="question_777" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_778} onChange={inputHandler} id="question_778" name="question_778" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_779} onChange={inputHandler} id="question_779" name="question_779" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_780"></label></th>
                            <th><label htmlFor="question_781">As per Excel</label></th>
                            <th><label htmlFor="question_782">Certificate of participation of schools</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_783"></label></th>
                            <th><label htmlFor="question_784"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Formation of the group of students and appointment of respective in-charge from each participating school for ESS.</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_780} onChange={inputHandler} id="question_780" name="question_780" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_781} onChange={inputHandler} id="question_781" name="question_781" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_782} onChange={inputHandler} id="question_782" name="question_782" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_783} onChange={inputHandler} id="question_783" name="question_783" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_784} onChange={inputHandler} id="question_784" name="question_784" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_785"></label></th>
                            <th><label htmlFor="question_786">As per Excel</label></th>
                            <th><label htmlFor="question_787">Geotag photos</label></th>
                            <th><label htmlFor="question_788">Completion Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_789"></label></th>
                            <th><label htmlFor="question_790"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of annual thematic camps/ campaigns/ activities organized to implement environmental initiatives</td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.question_785} onChange={inputHandler} id="question_785" name="question_785" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_786} onChange={inputHandler} id="question_786" name="question_786" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_787} onChange={inputHandler} id="question_787" name="question_787" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_788} onChange={inputHandler} id="question_788" name="question_788" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_789} onChange={inputHandler} id="question_789" name="question_789" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_790} onChange={inputHandler} id="question_790" name="question_790" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_791"></label></th>
                            <th><label htmlFor="question_792">As per Excel</label></th>
                            <th><label htmlFor="question_793">Community Meeting</label></th>
                            <th><label htmlFor="question_794">Agenda of meeting</label></th>
                            <th><label htmlFor="question_795">MoM</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_796"></label></th>
                            <th><label htmlFor="question_797"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of community meetings/events conducted by the ESS Groups</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.question_791} onChange={inputHandler} id="question_791" name="question_791" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_792} onChange={inputHandler} id="question_792" name="question_792" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_793} onChange={inputHandler} id="question_793" name="question_793" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_794} onChange={inputHandler} id="question_794" name="question_794" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="number" value={formData.question_795} onChange={inputHandler} id="question_795" name="question_795" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_796} onChange={inputHandler} id="question_796" name="question_796" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_797} onChange={inputHandler} id="question_797" name="question_797" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_798"></label></th>
                            <th><label htmlFor="question_799">Verify minimum 5 spots created during 01-04-2023 to 31-03-2024  written number from excel</label></th>
                            <th><label htmlFor="question_800">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_801">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_802">Location Link</label></th>
                            <th><label htmlFor="question_803">Geo tagged photograph during 01-04-2023 to 31-03-2024 (photos are focus on Majhi Vasundhara principles) </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_804"></label></th>
                            <th><label htmlFor="question_805"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>5.5</td>
                            <td>Number of new spots Developed with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 100 marks will be allocated for each new spot developed. </td>
                            <td>500</td>

                            <td></td>
                            <td><input type="number" value={formData.question_798} onChange={inputHandler} id="question_798" name="question_798" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_799} onChange={inputHandler} id="question_799" name="question_799" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_800} onChange={inputHandler} id="question_800" name="question_800" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_801} onChange={inputHandler} id="question_801" name="question_801" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_802} onChange={inputHandler} id="question_802" name="question_802" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_803} onChange={inputHandler} id="question_803" name="question_803" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_804} onChange={inputHandler} id="question_804" name="question_804" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_805} onChange={inputHandler} id="question_805" name="question_805" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Upkeep:Number of old spots (created during MVA 1.0,2.0,3.0) refurbished with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 25 marks will be allocated for each spot refurbished.</th>
                            <th>250</th>
                            <th></th>
                            <th><label htmlFor="question_806"></label></th>
                            <th><label htmlFor="question_807">No. of spots</label></th>
                            <th><label htmlFor="question_808">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_809">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_810">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_811"></label></th>
                            <th><label htmlFor="question_812"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.question_806} onChange={inputHandler} id="question_806" name="question_806" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_807} onChange={inputHandler} id="question_807" name="question_807" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_808} onChange={inputHandler} id="question_808" name="question_808" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_809} onChange={inputHandler} id="question_809" name="question_809" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_810} onChange={inputHandler} id="question_810" name="question_810" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_811} onChange={inputHandler} id="question_811" name="question_811" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_812} onChange={inputHandler} id="question_812" name="question_812" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_813"></label></td>
                            <td><label htmlFor="question_814"></label></td>
                            <td><label htmlFor="question_815">MV2.0</label></td>
                            <td><label htmlFor="question_816"></label></td>

                            <td><label htmlFor="question_817"></label></td>
                            <td><input type="number" value={formData.question_813} onChange={inputHandler} id="question_813" name="question_813" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_814} onChange={inputHandler} id="question_814" name="question_814" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_815} onChange={inputHandler} id="question_815" name="question_815" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_816} onChange={inputHandler} id="question_816" name="question_816" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_817} onChange={inputHandler} id="question_817" name="question_817" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_818"></label></td>
                            <td><label htmlFor="question_819"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_818} onChange={inputHandler} id="question_818" name="question_818" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_819} onChange={inputHandler} id="question_819" name="question_819" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="question_820"></label></td>
                            <td><label htmlFor="question_821"></label></td>
                            <td><label htmlFor="question_822">MV3.0</label></td>
                            <td><label htmlFor="question_823"></label></td>

                            <td><label htmlFor="question_824"></label></td>
                            <td><input type="number" value={formData.question_820} onChange={inputHandler} id="question_820" name="question_820" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_821} onChange={inputHandler} id="question_821" name="question_821" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_822} onChange={inputHandler} id="question_822" name="question_822" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_823} onChange={inputHandler} id="question_823" name="question_823" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_824} onChange={inputHandler} id="question_824" name="question_824" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="question_825"></label></td>
                            <td><label htmlFor="question_826"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_825} onChange={inputHandler} id="question_825" name="question_825" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_826} onChange={inputHandler} id="question_826" name="question_826" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_827"></label></th>
                            <th><label htmlFor="question_828">No. of enovative spots developed written from Excel</label></th>
                            <th><label htmlFor="question_829">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_830"></label></th>
                            <th><label htmlFor="question_831"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of innovative spots developed by using recycled waste during Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.question_827} onChange={inputHandler} id="question_827" name="question_827" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_828} onChange={inputHandler} id="question_828" name="question_828" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_829} onChange={inputHandler} id="question_829" name="question_829" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_830} onChange={inputHandler} id="question_830" name="question_830" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_831} onChange={inputHandler} id="question_831" name="question_831" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_832"></label></th>
                            <th><label htmlFor="question_833">Total number of initiatives funded through alternate funding channels</label></th>
                            <th><label htmlFor="question_834">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="question_835">Work Completion Certificate</label></th>
                            <th><label htmlFor="question_836">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_837"></label></th>
                            <th><label htmlFor="question_838"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.6</td>
                            <td>Number of Majhi Vasundhara Abhiyan initiatives funded through alternate funding channels.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_832} onChange={inputHandler} id="question_832" name="question_832" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_833} onChange={inputHandler} id="question_833" name="question_833" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.question_834} onChange={inputHandler} id="question_834" name="question_834" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.question_835} onChange={inputHandler} id="question_835" name="question_835" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.question_836} onChange={inputHandler} id="question_836" name="question_836" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_837} onChange={inputHandler} id="question_837" name="question_837" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_838} onChange={inputHandler} id="question_838" name="question_838" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_839"></label></th>
                            <th><label htmlFor="question_840">Total amount of money leveraged through Alternative Funding channels</label></th>
                            <th><label htmlFor="question_841">Details of funding utilization</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="question_842"></label></th>
                            <th><label htmlFor="question_843"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Amount of money leveraged through Alternative Funding channels.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.question_839} onChange={inputHandler} id="question_839" name="question_839" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.question_840} onChange={inputHandler} id="question_840" name="question_840" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.question_841} onChange={inputHandler} id="question_841" name="question_841" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.question_842} onChange={inputHandler} id="question_842" name="question_842" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.question_843} onChange={inputHandler} id="question_843" name="question_843" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>


            </table>
            </div>
            </div>
           </div>
            <div className="inputGroup">
                <button type='submit'>Add</button>
            </div>
        </form>
            </div>
        </Layout>
    );
}

export default Add;
