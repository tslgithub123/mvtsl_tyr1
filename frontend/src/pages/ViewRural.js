import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Layout from "../components/Layout";
import "./add.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';


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
            question_838: ""
    });


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
            const response = await axios.get(`/api/v1/ruralview/${ulbCode}`, {
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



    return (
        <Layout>
            <div className='addUser'>
                <Link to={"/"}>Back</Link>
                <h3>View Rural City Form</h3>
                <form className='addUserForm'>
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
                                            <td>{formData.ulb_name}</td>
                                            <td>{formData.ulb_code}</td>
                                            <td>{formData.category}</td>
                                            <td>{formData.type}</td>
                                            <td>{formData.verticals}</td>
                                            <td>{formData.present_date}</td>
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
                                            <td>{formData.question_1}</td>
                                            <td>{formData.question_2}</td>
                                            <td>{formData.question_3}</td>
                                            <td>{formData.question_4}</td>
                                            <td>{formData.question_5}</td>
                                            <td>{formData.question_6}</td>
                                            <td>{formData.question_7}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_8}</td>
                                            <td>{formData.question_9}</td>
                                        </tr>
                                    </tbody>

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
                                            <td>{formData.question_10}</td>
                                            <td>{formData.question_11}</td>
                                            <td>{formData.question_12}</td>
                                            <td>{formData.question_13}</td>
                                            <td>{formData.question_14}</td>
                                            <td>{formData.question_15}</td>
                                            <td>{formData.question_16}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_17}</td>
                                            <td>{formData.question_18}</td>
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
                                            <td>{formData.question_19}</td>
                                            <td>{formData.question_20}</td>
                                            <td>{formData.question_21}</td>
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
                                            <td>{formData.question_22}</td>
                                            <td>{formData.question_23}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_24"></label></td>
                                            <td><label htmlFor="question_25"></label></td>
                                            <td><label htmlFor="question_26">MV2.0</label></td>
                                            <td><label htmlFor="question_27"></label></td>

                                            <td><label htmlFor="question_28"></label></td>
                                            <td>{formData.question_24}</td>
                                            <td>{formData.question_25}</td>
                                            <td>{formData.question_26}</td>
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
                                            <td>{formData.question_27}</td>
                                            <td>{formData.question_28}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_29"></label></td>
                                            <td><label htmlFor="question_30"></label></td>
                                            <td><label htmlFor="question_31">MV3.0</label></td>
                                            <td><label htmlFor="question_32"></label></td>

                                            <td><label htmlFor="question_33"></label></td>
                                            <td>{formData.question_29}</td>
                                            <td>{formData.question_30}</td>
                                            <td>{formData.question_31}</td>
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
                                            <td>{formData.question_32}</td>
                                            <td>{formData.question_33}</td>
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
                                            <td>{formData.question_34}</td>
                                            <td>{formData.question_35}</td>
                                            <td>{formData.question_36}</td>
                                            <td>{formData.question_37}</td>
                                            <td>{formData.question_38}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_39}</td>
                                            <td>{formData.question_40}</td>
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
                                            <td>{formData.question_41}</td>
                                            <td>{formData.question_42}</td>
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
                                            <td>{formData.question_43}</td>
                                            <td>{formData.question_43}</td>
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
                                            <td>{formData.question_45}</td>
                                            <td>{formData.question_46}</td>
                                            <td>{formData.question_47}</td>
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
                                            <td>{formData.question_48}</td>
                                            <td>{formData.question_49}</td>
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
                                            <td>{formData.question_50}</td>
                                            <td>{formData.question_51}</td>
                                            <td>{formData.question_52}</td>
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
                                            <td>{formData.question_53}</td>
                                            <td>{formData.question_54}</td>
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
                                            <td>{formData.question_55}</td>
                                            <td>{formData.question_56}</td>
                                            <td>{formData.question_57}</td>
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
                                            <td>{formData.question_58}</td>
                                            <td>{formData.question_59}</td>
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
                                            <td>{formData.question_60}</td>
                                            <td>{formData.question_61}</td>
                                            <td>{formData.question_62}</td>
                                            <td>{formData.question_63}</td>
                                            <td>{formData.question_64}</td>
                                            <td>{formData.question_65}</td>
                                            <td>{formData.question_66}</td>
                                            <td>{formData.question_67}</td>
                                            <td>{formData.question_68}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_69}</td>
                                            <td>{formData.question_70}</td>
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
                                            <td>{formData.question_71}</td>
                                            <td>{formData.question_72}</td>
                                            <td>{formData.question_73}</td>
                                            <td>{formData.question_74}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_75}</td>
                                            <td>{formData.question_76}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_77"></label></td>
                                            <td><label htmlFor="question_78"></label></td>
                                            <td><label htmlFor="question_79">MV2.0</label></td>
                                            <td><label htmlFor="question_80"></label></td>

                                            <td><label htmlFor="question_81"></label></td>
                                            <td>{formData.question_77}</td>
                                            <td>{formData.question_78}</td>
                                            <td>{formData.question_79}</td>
                                            <td>{formData.question_80}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_82"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_81}</td>
                                            <td>{formData.question_82}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_83"></label></td>
                                            <td><label htmlFor="question_84"></label></td>
                                            <td><label htmlFor="question_85">MV3.0</label></td>
                                            <td><label htmlFor="question_86"></label></td>

                                            <td><label htmlFor="question_87"></label></td>
                                            <td>{formData.question_83}</td>
                                            <td>{formData.question_84}</td>
                                            <td>{formData.question_85}</td>
                                            <td>{formData.question_86}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_88"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_87}</td>
                                            <td>{formData.question_88}</td>
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
                                            <td>{formData.question_89}</td>
                                            <td>{formData.question_90}</td>
                                            <td>{formData.question_91}</td>
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
                                            <td>{formData.question_92}</td>
                                            <td>{formData.question_93}</td>
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
                                            <td>{formData.question_94}</td>
                                            <td>{formData.question_95}</td>
                                            <td>{formData.question_96}</td>
                                            <td>{formData.question_97}</td>
                                            <td>{formData.question_98}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_99}</td>
                                            <td>{formData.question_100}</td>
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
                                            <td>{formData.question_101}</td>
                                            <td>{formData.question_102}</td>
                                            <td>{formData.question_103}</td>
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
                                            <td>{formData.question_104}</td>
                                            <td>{formData.question_105}</td>
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
                                            <td>{formData.question_106}</td>
                                            <td>{formData.question_107}</td>
                                            <td>{formData.question_108}</td>
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
                                            <td>{formData.question_109}</td>
                                            <td>{formData.question_110}</td>
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
                                            <td>{formData.question_111}</td>
                                            <td>{formData.question_112}</td>
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
                                            <td>{formData.question_113}</td>
                                            <td>{formData.question_114}</td>
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
                                            <td>{formData.question_115}</td>
                                            <td>{formData.question_116}</td>
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
                                            <td>{formData.question_117}</td>
                                            <td>{formData.question_118}</td>
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
                                            <td>{formData.question_119}</td>
                                            <td>{formData.question_120}</td>
                                            <td>{formData.question_121}</td>
                                            <td>{formData.question_122}</td>
                                            <td>{formData.question_123}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_124}</td>
                                            <td>{formData.question_125}</td>
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
                                            <td>{formData.question_126}</td>
                                            <td>{formData.question_127}</td>
                                            <td>{formData.question_128}</td>
                                            <td>{formData.question_129}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_130}</td>
                                            <td>{formData.question_131}</td>
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
                                            <td>{formData.question_132}</td>
                                            <td>{formData.question_133}</td>
                                            <td>{formData.question_134}</td>
                                            <td>{formData.question_135}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_136}</td>
                                            <td>{formData.question_137}</td>
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
                                            <td>{formData.question_138}</td>
                                            <td>{formData.question_139}</td>
                                            <td>{formData.question_140}</td>
                                            <td>{formData.question_141}</td>
                                            <td>{formData.question_142}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_143}</td>
                                            <td>{formData.question_144}</td>
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
                                            <td>{formData.question_145}</td>
                                            <td>{formData.question_146}</td>
                                            <td>{formData.question_147}</td>
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
                                            <td>{formData.question_148}</td>
                                            <td>{formData.question_149}</td>
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
                                            <td>{formData.question_150}</td>
                                            <td>{formData.question_151}</td>
                                            <td>{formData.question_152}</td>
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
                                            <td>{formData.question_153}</td>
                                            <td>{formData.question_154}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_155">30</label></td>
                                            <td><label htmlFor="question_156"></label></td>
                                            <td><label htmlFor="question_157">Dry waste processing /disposal</label></td>
                                            <td><label htmlFor="question_158"></label></td>

                                            <td><label htmlFor="question_159"></label></td>
                                            <td>{formData.question_155}</td>
                                            <td>{formData.question_156}</td>
                                            <td>{formData.question_157}</td>
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
                                            <td>{formData.question_158}</td>
                                            <td>{formData.question_159}</td>
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
                                            <td>{formData.question_160}</td>
                                            <td>{formData.question_161}</td>
                                            <td>{formData.question_162}</td>
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
                                            <td>{formData.question_163}</td>
                                            <td>{formData.question_164}</td>
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
                                            <td>{formData.question_165}</td>
                                            <td>{formData.question_166}</td>
                                            <td>{formData.question_167}</td>
                                            <td>{formData.question_168}</td>
                                            <td>{formData.question_169}</td>
                                            <td>{formData.question_170}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_171}</td>
                                            <td>{formData.question_172}</td>
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
                                            <td>{formData.question_173}</td>
                                            <td>{formData.question_174}</td>
                                            <td>{formData.question_175}</td>
                                            <td>{formData.question_176}</td>
                                            <td>{formData.question_177}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_178}</td>
                                            <td>{formData.question_179}</td>
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
                                            <td>{formData.question_180}</td>
                                            <td>{formData.question_181}</td>
                                            <td>{formData.question_182}</td>
                                            <td>{formData.question_183}</td>
                                            <td>{formData.question_184}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_185}</td>
                                            <td>{formData.question_186}</td>
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
                                            <td>{formData.question_187}</td>
                                            <td>{formData.question_188}</td>
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
                                            <td>{formData.question_189}</td>
                                            <td>{formData.question_190}</td>
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
                                            <td>{formData.question_191}</td>
                                            <td>{formData.question_192}</td>
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
                                            <td>{formData.question_193}</td>
                                            <td>{formData.question_194}</td>
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
                                            <td>{formData.question_195}</td>
                                            <td>{formData.question_196}</td>
                                            <td>{formData.question_197}</td>
                                            <td>{formData.question_198}</td>
                                            <td>{formData.question_199}</td>
                                            <td>{formData.question_200}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_201}</td>
                                            <td>{formData.question_202}</td>
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
                                            <td>{formData.question_203}</td>
                                            <td>{formData.question_204}</td>
                                            <td>{formData.question_205}</td>
                                            <td>{formData.question_206}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_207}</td>
                                            <td>{formData.question_208}</td>
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
                                            <td>{formData.question_209}</td>
                                            <td>{formData.question_210}</td>
                                            <td>{formData.question_211}</td>
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
                                            <td>{formData.question_212}</td>
                                            <td>{formData.question_213}</td>
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
                                            <td>{formData.question_214}</td>
                                            <td>{formData.question_215}</td>
                                            <td>{formData.question_216}</td>
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
                                            <td>{formData.question_217}</td>
                                            <td>{formData.question_218}</td>
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
                                            <td>{formData.question_219}</td>
                                            <td>{formData.question_220}</td>
                                            <td>{formData.question_221}</td>
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
                                            <td>{formData.question_222}</td>
                                            <td>{formData.question_223}</td>
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
                                            <td>{formData.question_224}</td>
                                            <td>{formData.question_225}</td>
                                            <td>{formData.question_226}</td>
                                            <td>{formData.question_227}</td>
                                            <td>{formData.question_228}</td>
                                            <td>{formData.question_229}</td>
                                            <td>{formData.question_230}</td>
                                            <td>{formData.question_231}</td>
                                            <td>{formData.question_232}</td>
                                            <td>{formData.question_233}</td>
                                            <td>{formData.question_234}</td>
                                            <td>{formData.question_235}</td>
                                            <td>{formData.question_236}</td>
                                            <td>{formData.question_237}</td>
                                            <td>{formData.question_238}</td>
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
                                            <td>{formData.question_239}</td>
                                            <td>{formData.question_240}</td>
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
                                            <td>{formData.question_241}</td>
                                            <td>{formData.question_242}</td>
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
                                            <td>{formData.question_243}</td>
                                            <td>{formData.question_244}</td>
                                            <td>{formData.question_245}</td>
                                            <td>{formData.question_246}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_247}</td>
                                            <td>{formData.question_248}</td>
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
                                            <td>{formData.question_249}</td>
                                            <td>{formData.question_250}</td>
                                            <td>{formData.question_251}</td>
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
                                            <td>{formData.question_252}</td>
                                            <td>{formData.question_253}</td>
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
                                            <td>{formData.question_254}</td>
                                            <td>{formData.question_255}</td>
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
                                            <td>{formData.question_256}</td>
                                            <td>{formData.question_257}</td>
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
                                            <td>{formData.question_258}</td>
                                            <td>{formData.question_259}</td>
                                            <td>{formData.question_260}</td>
                                            <td>{formData.question_261}</td>
                                            <td>{formData.question_262}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_263}</td>
                                            <td>{formData.question_264}</td>
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
                                            <td>{formData.question_265}</td>
                                            <td>{formData.question_266}</td>
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
                                            <td>{formData.question_267}</td>
                                            <td>{formData.question_268}</td>
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
                                            <td>{formData.question_269}</td>
                                            <td>{formData.question_270}</td>
                                            <td>{formData.question_271}</td>
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
                                            <td>{formData.question_272}</td>
                                            <td>{formData.question_273}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_274">(Relative Marking)</label></td>
                                            <td><label htmlFor="question_275"></label></td>
                                            <td><label htmlFor="question_276">% of Households with gas connection before Majhi Vasundhara Abhiyan 4.0</label></td>
                                            <td><label htmlFor="question_277">50</label></td>

                                            <td><label htmlFor="question_278"></label></td>
                                            <td>{formData.question_274}</td>
                                            <td>{formData.question_275}</td>
                                            <td>{formData.question_276}</td>
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
                                            <td>{formData.question_277}</td>
                                            <td>{formData.question_278}</td>
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
                                            <td>{formData.question_279}</td>
                                            <td>{formData.question_280}</td>
                                            <td>{formData.question_281}</td>
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
                                            <td>{formData.question_282}</td>
                                            <td>{formData.question_283}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_284"></label></td>
                                            <td><label htmlFor="question_285"></label></td>
                                            <td><label htmlFor="question_286">3W EV</label></td>
                                            <td><label htmlFor="question_287">100</label></td>

                                            <td><label htmlFor="question_288"></label></td>
                                            <td>{formData.question_284}</td>
                                            <td>{formData.question_285}</td>
                                            <td>{formData.question_286}</td>
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
                                            <td>{formData.question_287}</td>
                                            <td>{formData.question_288}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_289"></label></td>
                                            <td><label htmlFor="question_290"></label></td>
                                            <td><label htmlFor="question_291">4W EV</label></td>
                                            <td><label htmlFor="question_292">100</label></td>

                                            <td><label htmlFor="question_293"></label></td>
                                            <td>{formData.question_289}</td>
                                            <td>{formData.question_290}</td>
                                            <td>{formData.question_291}</td>
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
                                            <td>{formData.question_292}</td>
                                            <td>{formData.question_293}</td>
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
                                            <td>{formData.question_294}</td>
                                            <td>{formData.question_295}</td>
                                            <td>{formData.question_296}</td>
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
                                            <td>{formData.question_297}</td>
                                            <td>{formData.question_298}</td>
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
                                            <td>{formData.question_299}</td>
                                            <td>{formData.question_300}</td>
                                            <td>{formData.question_301}</td>
                                            <td>{formData.question_302}</td>
                                            <td>{formData.question_303}</td>
                                            <td>{formData.question_304}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_305}</td>
                                            <td>{formData.question_306}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_307"></label></td>
                                            <td><label htmlFor="question_308"></label></td>
                                            <td><label htmlFor="question_309">Four Wheelers</label></td>
                                            <td><label htmlFor="question_310">5</label></td>

                                            <td><label htmlFor="question_311"></label></td>
                                            <td>{formData.question_307}</td>
                                            <td>{formData.question_308}</td>
                                            <td>{formData.question_309}</td>
                                            <td>{formData.question_310}</td>
                                            <td>{formData.question_311}</td>
                                            <td>{formData.question_312}</td>
                                            <td></td>
                                            <td><label htmlFor="question_312"></label></td>
                                            <td><label htmlFor="question_313"></label></td>
                                            <td><label htmlFor="question_314"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_313}</td>
                                            <td>{formData.question_314}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th>(Relative Marking) 20</th>
                                            <th>2.3.2</th>
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
                                            <td>{formData.question_315}</td>
                                            <td>{formData.question_316}</td>
                                            <td>{formData.question_317}</td>
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
                                            <td>{formData.question_318}</td>
                                            <td>{formData.question_319}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_320"></label></td>
                                            <td><label htmlFor="question_321"></label></td>
                                            <td><label htmlFor="question_322">Four Wheelers MV02</label></td>
                                            <td><label htmlFor="question_323"></label></td>

                                            <td><label htmlFor="question_324"></label></td>
                                            <td>{formData.question_320}</td>
                                            <td>{formData.question_321}</td>
                                            <td>{formData.question_322}</td>
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
                                            <td>{formData.question_323}</td>
                                            <td>{formData.question_324}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_325"></label></td>
                                            <td><label htmlFor="question_326"></label></td>
                                            <td><label htmlFor="question_327">Two Wheelers MV03</label></td>
                                            <td><label htmlFor="question_328"></label></td>

                                            <td><label htmlFor="question_329"></label></td>
                                            <td>{formData.question_325}</td>
                                            <td>{formData.question_326}</td>
                                            <td>{formData.question_327}</td>
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
                                            <td>{formData.question_328}</td>
                                            <td>{formData.question_329}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_330"></label></td>
                                            <td><label htmlFor="question_331"></label></td>
                                            <td><label htmlFor="question_332"></label>Four Wheelers MV03</td>
                                            <td><label htmlFor="question_333"></label></td>

                                            <td><label htmlFor="question_334"></label></td>
                                            <td>{formData.question_330}</td>
                                            <td>{formData.question_331}</td>
                                            <td>{formData.question_332}</td>
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
                                            <td>{formData.question_333}</td>
                                            <td>{formData.question_334}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_335"></label></td>
                                            <td><label htmlFor="question_336"></label></td>
                                            <td><label htmlFor="question_337">Two Wheelers Total</label></td>
                                            <td><label htmlFor="question_338">10</label></td>

                                            <td><label htmlFor="question_339"></label></td>
                                            <td>{formData.question_335}</td>
                                            <td>{formData.question_336}</td>
                                            <td>{formData.question_337}</td>
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
                                            <td>{formData.question_338}</td>
                                            <td>{formData.question_339}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_340"></label></td>
                                            <td><label htmlFor="question_341"></label></td>
                                            <td><label htmlFor="question_342">Four Wheelers Total</label></td>
                                            <td><label htmlFor="question_343">10</label></td>

                                            <td><label htmlFor="question_344"></label></td>
                                            <td>{formData.question_340}</td>
                                            <td>{formData.question_341}</td>
                                            <td>{formData.question_342}</td>
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
                                            <td>{formData.question_343}</td>
                                            <td>{formData.question_344}</td>
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
                                            <td>{formData.question_345}</td>
                                            <td>{formData.question_346}</td>
                                            <td>{formData.question_347}</td>
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
                                            <td>{formData.question_348}</td>
                                            <td>{formData.question_349}</td>
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
                                            <td>{formData.question_350}</td>
                                            <td>{formData.question_351}</td>
                                            <td>{formData.question_352}</td>
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
                                            <td>{formData.question_353}</td>
                                            <td>{formData.question_354}</td>
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
                                            <td>{formData.question_355}</td>
                                            <td>{formData.question_356}</td>
                                            <td>{formData.question_357}</td>
                                            <td>{formData.question_358}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_359}</td>
                                            <td>{formData.question_360}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_361">(Relative Marking)</label></td>
                                            <td><label htmlFor="question_362"></label></td>
                                            <td><label htmlFor="question_363">Second half (Oct - March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                                            <td><label htmlFor="question_364">50</label></td>

                                            <td><label htmlFor="question_365"></label></td>
                                            <td>{formData.question_361}</td>
                                            <td>{formData.question_362}</td>
                                            <td>{formData.question_363}</td>
                                            <td>{formData.question_364}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_366"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_365}</td>
                                            <td>{formData.question_366}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th>100</th>
                                            <th>2.4</th>
                                            <th>Number of events organized to create awareness regarding climate change during MV04</th>
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
                                            <td>{formData.question_367}</td>
                                            <td>{formData.question_368}</td>
                                            <td>{formData.question_369}</td>
                                            <td>{formData.question_370}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_371}</td>
                                            <td>{formData.question_372}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Number of events organized to create awareness regarding climate change during MV04</th>
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
                                            <td>{formData.question_373}</td>
                                            <td>{formData.question_374}</td>
                                            <td>{formData.question_375}</td>
                                            <td>{formData.question_376}</td>
                                            <td>{formData.question_377}</td>
                                            <td>{formData.question_378}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_379}</td>
                                            <td>{formData.question_380}</td>
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
                                            <td>{formData.question_381}</td>
                                            <td>{formData.question_382}</td>
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
                                            <td>{formData.question_383}</td>
                                            <td>{formData.question_384}</td>
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
                                            <td>{formData.question_385}</td>
                                            <td>{formData.question_386}</td>
                                            <td>{formData.question_387}</td>
                                            <td>{formData.question_388}</td>
                                            <td>{formData.question_389}</td>
                                            <td>{formData.question_390}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_391}</td>
                                            <td>{formData.question_392}</td>
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
                                            <td>{formData.question_393}</td>
                                            <td>{formData.question_394}</td>
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
                                            <td>{formData.question_395}</td>
                                            <td>{formData.question_396}</td>
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
                                            <td>{formData.question_397}</td>
                                            <td>{formData.question_398}</td>
                                            <td>{formData.question_399}</td>
                                            <td>{formData.question_400}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_401}</td>
                                            <td>{formData.question_402}</td>
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
                                            <td>{formData.question_403}</td>
                                            <td>{formData.question_404}</td>
                                            <td>{formData.question_405}</td>
                                            <td>{formData.question_406}</td>
                                            <td>{formData.question_407}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_408}</td>
                                            <td>{formData.question_409}</td>
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
                                            <td>{formData.question_410}</td>
                                            <td>{formData.question_411}</td>
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
                                            <td>{formData.question_412}</td>
                                            <td>{formData.question_413}</td>
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
                                            <td>{formData.question_414}</td>
                                            <td>{formData.question_415}</td>
                                            <td>{formData.question_416}</td>
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
                                            <td>{formData.question_417}</td>
                                            <td>{formData.question_418}</td>
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
                                            <td>{formData.question_419}</td>
                                            <td>{formData.question_420}</td>
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
                                            <td>{formData.question_421}</td>
                                            <td>{formData.question_422}</td>
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
                                            <td>{formData.question_423}</td>
                                            <td>{formData.question_424}</td>
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
                                            <td>{formData.question_425}</td>
                                            <td>{formData.question_426}</td>
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
                                            <td>{formData.question_427}</td>
                                            <td>{formData.question_428}</td>
                                            <td>{formData.question_429}</td>
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
                                            <td>{formData.question_430}</td>
                                            <td>{formData.question_431}</td>
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
                                            <td>{formData.question_432}</td>
                                            <td>{formData.question_433}</td>
                                            <td>{formData.question_434}</td>
                                            <td>{formData.question_435}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_439}</td>
                                            <td>{formData.question_437}</td>
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
                                            <td>{formData.question_438}</td>
                                            <td>{formData.question_439}</td>
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
                                            <td>{formData.question_440}</td>
                                            <td>{formData.question_441}</td>
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
                                            <th><label htmlFor="question_444">Work Order/MOU with NGO/ Corporaters</label></th>
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
                                            <td>{formData.question_442}</td>
                                            <td>{formData.question_443}</td>
                                            <td>{formData.question_444}</td>
                                            <td>{formData.question_445}</td>
                                            <td>{formData.question_446}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_447}</td>
                                            <td>{formData.question_448}</td>
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
                                            <td>{formData.question_449}</td>
                                            <td>{formData.question_450}</td>
                                            <td>{formData.question_451}</td>
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
                                            <td>{formData.question_452}</td>
                                            <td>{formData.question_453}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_454"></label></td>
                                            <td><label htmlFor="question_455"></label></td>
                                            <td><label htmlFor="question_456">MV2.0</label></td>
                                            <td><label htmlFor="question_457"></label></td>

                                            <td><label htmlFor="question_458"></label></td>
                                            <td>{formData.question_454}</td>
                                            <td>{formData.question_455}</td>
                                            <td>{formData.question_456}</td>
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
                                            <td>{formData.question_457}</td>
                                            <td>{formData.question_458}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_459"></label></td>
                                            <td><label htmlFor="question_460"></label></td>
                                            <td><label htmlFor="question_461">MV3.0</label></td>
                                            <td><label htmlFor="question_462"></label></td>

                                            <td><label htmlFor="question_463"></label></td>
                                            <td>{formData.question_459}</td>
                                            <td>{formData.question_460}</td>
                                            <td>{formData.question_461}</td>
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
                                            <td>{formData.question_462}</td>
                                            <td>{formData.question_463}</td>
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
                                            <td>{formData.question_464}</td>
                                            <td>{formData.question_465}</td>
                                            <td>{formData.question_466}</td>
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
                                            <td>{formData.question_467}</td>
                                            <td>{formData.question_468}</td>
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
                                            <td>{formData.question_469}</td>
                                            <td>{formData.question_470}</td>
                                            <td>{formData.question_471}</td>
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
                                            <td>{formData.question_472}</td>
                                            <td>{formData.question_473}</td>
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
                                            <td>{formData.question_474}</td>
                                            <td>{formData.question_475}</td>
                                            <td>{formData.question_476}</td>
                                            <td>{formData.question_477}</td>
                                            <td>{formData.question_478}</td>
                                            <td>{formData.question_479}</td>
                                            <td>{formData.question_480}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_481}</td>
                                            <td>{formData.question_482}</td>
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
                                            <td>{formData.question_483}</td>
                                            <td>{formData.question_484}</td>
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
                                            <td>{formData.question_485}</td>
                                            <td>{formData.question_486}</td>
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
                                            <td>{formData.question_487}</td>
                                            <td>{formData.question_488}</td>
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
                                            <td>{formData.question_489}</td>
                                            <td>{formData.question_490}</td>
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
                                            <td>{formData.question_491}</td>
                                            <td>{formData.question_492}</td>
                                            <td>{formData.question_493}</td>
                                            <td>{formData.question_494}</td>
                                            <td>{formData.question_495}</td>
                                            <td>{formData.question_496}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_497}</td>
                                            <td>{formData.question_498}</td>
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
                                            <td>{formData.question_499}</td>
                                            <td>{formData.question_500}</td>
                                            <td>{formData.question_501}</td>
                                            <td>{formData.question_502}</td>
                                            <td>{formData.question_503}</td>
                                            <td>{formData.question_504}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_505}</td>
                                            <td>{formData.question_506}</td>
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
                                            <td>{formData.question_507}</td>
                                            <td>{formData.question_508}</td>
                                            <td>{formData.question_509}</td>
                                            <td>{formData.question_510}</td>
                                            <td>{formData.question_511}</td>
                                            <td>{formData.question_512}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_513}</td>
                                            <td>{formData.question_514}</td>
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
                                            <td>{formData.question_515}</td>
                                            <td>{formData.question_516}</td>
                                            <td>{formData.question_517}</td>
                                            <td>{formData.question_518}</td>
                                            <td>{formData.question_519}</td>
                                            <td>{formData.question_520}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_521}</td>
                                            <td>{formData.question_522}</td>
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
                                            <td>{formData.question_523}</td>
                                            <td>{formData.question_524}</td>
                                            <td>{formData.question_525}</td>
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
                                            <td>{formData.question_526}</td>
                                            <td>{formData.question_527}</td>
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
                                            <td>{formData.question_528}</td>
                                            <td>{formData.question_529}</td>
                                            <td>{formData.question_530}</td>
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
                                            <td>{formData.question_531}</td>
                                            <td>{formData.question_532}</td>
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
                                            <td>{formData.question_533}</td>
                                            <td>{formData.question_534}</td>
                                            <td>{formData.question_535}</td>
                                            <td>{formData.question_536}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_537}</td>
                                            <td>{formData.question_538}</td>
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
                                            <td>Number of promotional activities for eco-friendly immersion </td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_539}</td>
                                            <td>{formData.question_540}</td>
                                            <td>{formData.question_541}</td>
                                            <td>{formData.question_542}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_543}</td>
                                            <td>{formData.question_544}</td>
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
                                            <td>{formData.question_545}</td>
                                            <td>{formData.question_546}</td>
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
                                            <td>{formData.question_547}</td>
                                            <td>{formData.question_548}</td>
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
                                            <td>{formData.question_549}</td>
                                            <td>{formData.question_550}</td>
                                            <td>{formData.question_551}</td>
                                            <td>{formData.question_552}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_553}</td>
                                            <td>{formData.question_554}</td>
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
                                            <td>{formData.question_555}</td>
                                            <td>{formData.question_556}</td>
                                            <td>{formData.question_557}</td>
                                            <td>{formData.question_558}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_559}</td>
                                            <td>{formData.question_560}</td>
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
                                            <td>{formData.question_561}</td>
                                            <td>{formData.question_562}</td>
                                            <td>{formData.question_563}</td>
                                            <td>{formData.question_564}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_565}</td>
                                            <td>{formData.question_566}</td>
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
                                            <td>{formData.question_567}</td>
                                            <td>{formData.question_568}</td>
                                            <td>{formData.question_569}</td>
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
                                            <td>{formData.question_570}</td>
                                            <td>{formData.question_571}</td>
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
                                            <td>{formData.question_572}</td>
                                            <td>{formData.question_573}</td>
                                            <td>{formData.question_574}</td>
                                            <td>{formData.question_575}</td>
                                            <td>{formData.question_576}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_577}</td>
                                            <td>{formData.question_578}</td>
                                        </tr>
                                    </tbody>

                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_579">(Relative Marking)</label></td>
                                            <td><label htmlFor="question_580"></label></td>
                                            <td><label htmlFor="question_581">Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                                            <td><label htmlFor="question_582">100</label></td>

                                            <td><label htmlFor="question_583"></label></td>
                                            <td>{formData.question_579}</td>
                                            <td>{formData.question_580}</td>
                                            <td>{formData.question_581}</td>
                                            <td>{formData.question_582}</td>
                                            <td>{formData.question_583}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_584"></label></td>
                                            <td><label htmlFor="question_585"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_584}</td>
                                            <td>{formData.question_585}</td>
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
                                            <td>{formData.question_586}</td>
                                            <td>{formData.question_587}</td>
                                            <td>{formData.question_588}</td>
                                            <td>{formData.question_589}</td>
                                            <td>{formData.question_590}</td>
                                            <td>{formData.question_591}</td>
                                            <td>{formData.question_592}</td>
                                            <td>{formData.question_593}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_594}</td>
                                            <td>{formData.question_595}</td>
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
                                            <td>{formData.question_596}</td>
                                            <td>{formData.question_597}</td>
                                            <td>{formData.question_598}</td>
                                            <td>{formData.question_599}</td>
                                            <td>{formData.question_600}</td>
                                            <td>{formData.question_601}</td>
                                            <td>{formData.question_602}</td>
                                            <td>{formData.question_603}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_604}</td>
                                            <td>{formData.question_605}</td>
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
                                            <td>{formData.question_606}</td>
                                            <td>{formData.question_607}</td>
                                            <td>{formData.question_608}</td>
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
                                            <td>{formData.question_609}</td>
                                            <td>{formData.question_610}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_611"></label></td>
                                            <td><label htmlFor="question_612"></label></td>
                                            <td><label htmlFor="question_613">MV2.0</label></td>
                                            <td><label htmlFor="question_614"></label></td>

                                            <td><label htmlFor="question_615"></label></td>
                                            <td>{formData.question_611}</td>
                                            <td>{formData.question_612}</td>
                                            <td>{formData.question_613}</td>
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
                                            <td>{formData.question_614}</td>
                                            <td>{formData.question_615}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_616"></label></td>
                                            <td><label htmlFor="question_617"></label></td>
                                            <td><label htmlFor="question_618">MV3.0</label></td>
                                            <td><label htmlFor="question_619"></label></td>

                                            <td><label htmlFor="question_620"></label></td>
                                            <td>{formData.question_616}</td>
                                            <td>{formData.question_617}</td>
                                            <td>{formData.question_618}</td>
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
                                            <td>{formData.question_619}</td>
                                            <td>{formData.question_620}</td>
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
                                            <td>{formData.question_621}</td>
                                            <td>{formData.question_622}</td>
                                            <td>{formData.question_623}</td>
                                            <td>{formData.question_624}</td>
                                            <td>{formData.question_625}</td>
                                            <td>{formData.question_626}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_627}</td>
                                            <td>{formData.question_628}</td>
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
                                            <td>{formData.question_629}</td>
                                            <td>{formData.question_630}</td>
                                            <td>{formData.question_631}</td>
                                            <td>{formData.question_632}</td>
                                            <td>{formData.question_633}</td>
                                            <td>{formData.question_634}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_635}</td>
                                            <td>{formData.question_636}</td>
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
                                            <td>{formData.question_637}</td>
                                            <td>{formData.question_638}</td>
                                            <td>{formData.question_639}</td>
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
                                            <td>{formData.question_640}</td>
                                            <td>{formData.question_641}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_642"></label></td>
                                            <td><label htmlFor="question_643"></label></td>
                                            <td><label htmlFor="question_644">MV2.0</label></td>
                                            <td><label htmlFor="question_645"></label></td>

                                            <td><label htmlFor="question_646"></label></td>
                                            <td>{formData.question_642}</td>
                                            <td>{formData.question_643}</td>
                                            <td>{formData.question_644}</td>
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
                                            <td>{formData.question_645}</td>
                                            <td>{formData.question_646}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_647"></label></td>
                                            <td><label htmlFor="question_648"></label></td>
                                            <td><label htmlFor="question_649">V3.0</label></td>
                                            <td><label htmlFor="question_650"></label></td>

                                            <td><label htmlFor="question_651"></label></td>
                                            <td>{formData.question_647}</td>
                                            <td>{formData.question_648}</td>
                                            <td>{formData.question_649}</td>
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
                                            <td>{formData.question_650}</td>
                                            <td>{formData.question_651}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_652"></label></th>
                                            <th><label htmlFor="question_653">Total no. of solar pumps During MV04, write number from excel</label></th>
                                            <th><label htmlFor="question_654">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_655">Completion Certificate </label></th>
                                            <th><label htmlFor="question_656">Financial Brief</label></th>
                                            <th><label htmlFor="question_657">Geotag photos</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_658"></label></th>
                                            <th><label htmlFor="question_659"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td>4.2.4</td>
                                            <td>Number of new solar pumps installed in individual and community areas during Majhi Vasundhara Abhiyan 4.0 </td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_652}</td>
                                            <td>{formData.question_653}</td>
                                            <td>{formData.question_654}</td>
                                            <td>{formData.question_655}</td>
                                            <td>{formData.question_656}</td>
                                            <td>{formData.question_657}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_658}</td>
                                            <td>{formData.question_659}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_660"></label></th>
                                            <th><label htmlFor="question_661">Total no. of solar pumps before MV04, write number from excel</label></th>
                                            <th><label htmlFor="question_662">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_663">Completion Certificate </label></th>
                                            <th><label htmlFor="question_664">Financial Brief</label></th>
                                            <th><label htmlFor="question_665">Geotag photos</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_666"></label></th>
                                            <th><label htmlFor="question_667"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Total number of solar pumps installed in individual or community areas before Majhi Vasundhara Abhiyan 4.0 </td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_660}</td>
                                            <td>{formData.question_661}</td>
                                            <td>{formData.question_662}</td>
                                            <td>{formData.question_663}</td>
                                            <td>{formData.question_664}</td>
                                            <td>{formData.question_665}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_666}</td>
                                            <td>{formData.question_667}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_668"></label></th>
                                            <th><label htmlFor="question_669">Total no. of decentralized solar energy plants During MV04, write number from excel</label></th>
                                            <th><label htmlFor="question_670">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_671">Completion Certificate </label></th>
                                            <th><label htmlFor="question_672">Financial Brief</label></th>
                                            <th><label htmlFor="question_673">Geotag photos</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_674"></label></th>
                                            <th><label htmlFor="question_675"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td>4.2.5</td>
                                            <td>Capacity of decentralized solar energy plants in MW during Majhi Vasundhara Abhiyan 4 .0</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_668}</td>
                                            <td>{formData.question_669}</td>
                                            <td>{formData.question_670}</td>
                                            <td>{formData.question_671}</td>
                                            <td>{formData.question_672}</td>
                                            <td>{formData.question_673}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_674}</td>
                                            <td>{formData.question_675}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_676"></label></th>
                                            <th><label htmlFor="question_677">Total no. of decentralized solar energy plants before MV04, write number from excel</label></th>
                                            <th><label htmlFor="question_678">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_679">Completion Certificate </label></th>
                                            <th><label htmlFor="question_680">Financial Brief</label></th>
                                            <th><label htmlFor="question_681">Geotag photos</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_682"></label></th>
                                            <th><label htmlFor="question_683"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Capacity of decentralized solar energy plants in MW before Majhi Vasundhara Abhiyan 4 .0</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_676}</td>
                                            <td>{formData.question_677}</td>
                                            <td>{formData.question_678}</td>
                                            <td>{formData.question_679}</td>
                                            <td>{formData.question_680}</td>
                                            <td>{formData.question_681}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_682}</td>
                                            <td>{formData.question_683}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_684"></label></th>
                                            <th><label htmlFor="question_685">Written As per MIS</label></th>
                                            <th><label htmlFor="question_686">screenshot of dashboard stating number of e-pledge register</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
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
                                            <td>5.1</td>
                                            <td>No. of E-Pledges registered on the portal by citizens of the Local body individually during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                                            <td>200</td>

                                            <td></td>
                                            <td>{formData.question_684}</td>
                                            <td>{formData.question_685}</td>
                                            <td>{formData.question_686}</td>
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
                                            <td>{formData.question_687}</td>
                                            <td>{formData.question_688}</td>
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
                                            <th></th>
                                            <th><label htmlFor="question_692"></label></th>
                                            <th><label htmlFor="question_693"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>No. of E-Pledges registered on the portal by citizens of the Local body in a group during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_689}</td>
                                            <td>{formData.question_690}</td>
                                            <td>{formData.question_691}</td>
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
                                            <td>{formData.question_692}</td>
                                            <td>{formData.question_693}</td>
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
                                            <th><label htmlFor="question_696"></label></th>
                                            <th><label htmlFor="question_697"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Compliance: % of #Epledge registered and complied individually during MVA 4.0</td>
                                            <td>75</td>

                                            <td></td>
                                            <td>{formData.question_694}</td>
                                            <td>{formData.question_695}</td>
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
                                            <td>{formData.question_696}</td>
                                            <td>{formData.question_697}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_698"></label></th>
                                            <th><label htmlFor="question_699">Written As per MIS</label></th>
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
                                            <th><label htmlFor="question_700"></label></th>
                                            <th><label htmlFor="question_701"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Compliance: % of #Epledge registered and complied in a group during MVA 4.0</td>
                                            <td>25</td>

                                            <td></td>
                                            <td>{formData.question_698}</td>
                                            <td>{formData.question_699}</td>
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
                                            <td>{formData.question_700}</td>
                                            <td>{formData.question_701}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_702"></label></th>
                                            <th><label htmlFor="question_703">Written As per MIS</label></th>
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
                                            <th><label htmlFor="question_704"></label></th>
                                            <th><label htmlFor="question_705"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered)</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_702}</td>
                                            <td>{formData.question_703}</td>
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
                                            <td>{formData.question_704}</td>
                                            <td>{formData.question_705}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th>200</th>
                                            <th>5.2</th>
                                            <th>Number of Awareness Events/Activities/Spardha conducted by the Local body </th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_706"></label></th>
                                            <th><label htmlFor="question_707">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                                            <th><label htmlFor="question_708">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_709">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_710"></label></th>
                                            <th><label htmlFor="question_711"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_706}</td>
                                            <td>{formData.question_707}</td>
                                            <td>{formData.question_708}</td>
                                            <td>{formData.question_709}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_710}</td>
                                            <td>{formData.question_711}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_712"></label>(Relative Marking)</td>
                                            <td><label htmlFor="question_713"></label></td>
                                            <td><label htmlFor="question_714"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                                            <td><label htmlFor="question_715"></label>100</td>

                                            <td><label htmlFor="question_716"></label></td>
                                            <td>{formData.question_712}</td>
                                            <td>{formData.question_713}</td>
                                            <td>{formData.question_714}</td>
                                            <td>{formData.question_715}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_717"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_716}</td>
                                            <td>{formData.question_717}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_718"></label></th>
                                            <th><label htmlFor="question_719">Number of posts from Excel </label></th>
                                            <th><label htmlFor="question_720">Official Facebook Link. during 01.04.232 to 31.03.24(check posts from #majhi vasundhara and #E pledge) & put excel count</label></th>
                                            <th><label htmlFor="question_721">Official twitter handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge) & & put excel count </label></th>
                                            <th><label htmlFor="question_722">Official instagram handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge)  & put excel count </label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_723"></label></th>
                                            <th><label htmlFor="question_724"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Number of likes and shares on posts of awareness events/activities/spardha on social media page of Local body with #majhivasundhara #MissionLiFE</td>
                                            <td>200</td>

                                            <td></td>
                                            <td>{formData.question_718}</td>
                                            <td>{formData.question_719}</td>
                                            <td>{formData.question_720}</td>
                                            <td>{formData.question_721}</td>
                                            <td>{formData.question_722}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_723}</td>
                                            <td>{formData.question_724}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_725"></label></th>
                                            <th><label htmlFor="question_726">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                                            <th><label htmlFor="question_727">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_728">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_729"></label></th>
                                            <th><label htmlFor="question_730"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Use of eco friendly material for the promotional events/activity of Majhi Vasundhara Abhiyan 4.0</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_725}</td>
                                            <td>{formData.question_726}</td>
                                            <td>{formData.question_727}</td>
                                            <td>{formData.question_728}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_729}</td>
                                            <td>{formData.question_730}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_731"></label></th>
                                            <th><label htmlFor="question_732">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                                            <th><label htmlFor="question_733">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_734">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_735"></label></th>
                                            <th><label htmlFor="question_736"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Effective use of Mission LiFE logo in organized activities and events</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_731}</td>
                                            <td>{formData.question_732}</td>
                                            <td>{formData.question_733}</td>
                                            <td>{formData.question_734}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_735}</td>
                                            <td>{formData.question_736}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_737"></label></th>
                                            <th><label htmlFor="question_738">Number of event conducted by local body written number from excel </label></th>
                                            <th><label htmlFor="question_739">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_740">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_741"></label></th>
                                            <th><label htmlFor="question_742"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td>5.3</td>
                                            <td>Number of events conducted by Local body which involved participation of youths / youth groups</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_737}</td>
                                            <td>{formData.question_738}</td>
                                            <td>{formData.question_739}</td>
                                            <td>{formData.question_740}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_741}</td>
                                            <td>{formData.question_742}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_743"></label></th>
                                            <th><label htmlFor="question_744">Number of Paryawaran Doot from from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                                            <th><label htmlFor="question_745">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_746">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_747"></label></th>
                                            <th><label htmlFor="question_748"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Number of Paryavaran Doot identified</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_743}</td>
                                            <td>{formData.question_744}</td>
                                            <td>{formData.question_745}</td>
                                            <td>{formData.question_746}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_747}</td>
                                            <td>{formData.question_748}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_749">(Relative Marking)</label></td>
                                            <td><label htmlFor="question_750"></label></td>
                                            <td><label htmlFor="question_751">Number of Youth identified as Paryavaran Doot</label></td>
                                            <td><label htmlFor="question_752">50</label></td>

                                            <td><label htmlFor="question_753"></label></td>
                                            <td>{formData.question_749}</td>
                                            <td>{formData.question_750}</td>
                                            <td>{formData.question_751}</td>
                                            <td>{formData.question_752}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_754"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_753}</td>
                                            <td>{formData.question_754}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th>(Relative Marking) 100</th>
                                            <th></th>
                                            <th>Number of events conducted by the Local body with Paryavaran doot</th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_755"></label></th>
                                            <th><label htmlFor="question_756">Number of events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                                            <th><label htmlFor="question_757">Social Media Link during 01.04.23 to 31.03.24</label></th>
                                            <th><label htmlFor="question_758">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                                            <th><label htmlFor="question_759">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_760"></label></th>
                                            <th><label htmlFor="question_761"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_755}</td>
                                            <td>{formData.question_756}</td>
                                            <td>{formData.question_757}</td>
                                            <td>{formData.question_758}</td>
                                            <td>{formData.question_759}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_760}</td>
                                            <td>{formData.question_761}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_762"></label>(Relative Marking)</td>
                                            <td><label htmlFor="question_763"></label></td>
                                            <td><label htmlFor="question_764"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                                            <td><label htmlFor="question_765"></label>0</td>

                                            <td><label htmlFor="question_766"></label></td>
                                            <td>{formData.question_762}</td>
                                            <td>{formData.question_763}</td>
                                            <td>{formData.question_764}</td>
                                            <td>{formData.question_765}</td>
                                            <td>{formData.question_766}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_767"></label></td>
                                            <td><label htmlFor="question_768"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_767}</td>
                                            <td>{formData.question_768}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_769"></label></th>
                                            <th><label htmlFor="question_770">No. of school in local body as per excel</label></th>
                                            <th><label htmlFor="question_771">No. of school participates in ESS</label></th>
                                            <th><label htmlFor="question_772">Certificate of participation of schools</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_773"></label></th>
                                            <th><label htmlFor="question_774"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td>5.4</td>
                                            <td>Percentage of Schools participated in ESS during Majhi Vasundhara Abhiyan 4.0</td>
                                            <td>30</td>

                                            <td></td>
                                            <td>{formData.question_769}</td>
                                            <td>{formData.question_770}</td>
                                            <td>{formData.question_771}</td>
                                            <td>{formData.question_772}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_773}</td>
                                            <td>{formData.question_774}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_775"></label></th>
                                            <th><label htmlFor="question_776">As per Excel</label></th>
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
                                            <td></td>
                                            <td>Formation of the group of students and appointment of respective in-charge from each participating school for ESS.</td>
                                            <td>20</td>

                                            <td></td>
                                            <td>{formData.question_775}</td>
                                            <td>{formData.question_776}</td>
                                            <td>{formData.question_777}</td>
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
                                            <td>{formData.question_778}</td>
                                            <td>{formData.question_779}</td>
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
                                            <th><label htmlFor="question_782">Geotag photos</label></th>
                                            <th><label htmlFor="question_783">Completion Report</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_784"></label></th>
                                            <th><label htmlFor="question_785"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Number of annual thematic camps/ campaigns/ activities organized to implement environmental initiatives</td>
                                            <td>30</td>

                                            <td></td>
                                            <td>{formData.question_780}</td>
                                            <td>{formData.question_781}</td>
                                            <td>{formData.question_782}</td>
                                            <td>{formData.question_783}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_784}</td>
                                            <td>{formData.question_785}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_786"></label></th>
                                            <th><label htmlFor="question_787">As per Excel</label></th>
                                            <th><label htmlFor="question_788">Community Meeting</label></th>
                                            <th><label htmlFor="question_789">Agenda of meeting</label></th>
                                            <th><label htmlFor="question_790">MoM</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_791"></label></th>
                                            <th><label htmlFor="question_792"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Number of community meetings/events conducted by the ESS Groups</td>
                                            <td>20</td>

                                            <td></td>
                                            <td>{formData.question_786}</td>
                                            <td>{formData.question_787}</td>
                                            <td>{formData.question_788}</td>
                                            <td>{formData.question_789}</td>
                                            <td>{formData.question_790}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_791}</td>
                                            <td>{formData.question_792}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_793"></label></th>
                                            <th><label htmlFor="question_794">Verify minimum 5 spots created during 01-04-2023 to 31-03-2024  written number from excel</label></th>
                                            <th><label htmlFor="question_795">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_796">Work Completion Certificate</label></th>
                                            <th><label htmlFor="question_797">Location Link</label></th>
                                            <th><label htmlFor="question_798">Geo tagged photograph during 01-04-2023 to 31-03-2024 (photos are focus on Majhi Vasundhara principles) </label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_799"></label></th>
                                            <th><label htmlFor="question_800"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>5.5</td>
                                            <td>Number of new spots Developed with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 100 marks will be allocated for each new spot developed. </td>
                                            <td>500</td>

                                            <td></td>
                                            <td>{formData.question_793}</td>
                                            <td>{formData.question_794}</td>
                                            <td>{formData.question_795}</td>
                                            <td>{formData.question_796}</td>
                                            <td>{formData.question_797}</td>
                                            <td>{formData.question_798}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_799}</td>
                                            <td>{formData.question_800}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Upkeep:Number of old spots (created during MVA 1.0,2.0,3.0) refurbished with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 25 marks will be allocated for each spot refurbished.</th>
                                            <th>250</th>
                                            <th></th>
                                            <th><label htmlFor="question_801"></label></th>
                                            <th><label htmlFor="question_802">No. of spots</label></th>
                                            <th><label htmlFor="question_803">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_804">Work Completion Certificate</label></th>
                                            <th><label htmlFor="question_805">Geotag photos</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_806"></label></th>
                                            <th><label htmlFor="question_807"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>MV1.0</td>
                                            <td></td>

                                            <td></td>
                                            <td>{formData.question_801}</td>
                                            <td>{formData.question_802}</td>
                                            <td>{formData.question_803}</td>
                                            <td>{formData.question_804}</td>
                                            <td>{formData.question_805}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_806}</td>
                                            <td>{formData.question_807}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_808"></label></td>
                                            <td><label htmlFor="question_809"></label></td>
                                            <td><label htmlFor="question_810">MV2.0</label></td>
                                            <td><label htmlFor="question_811"></label></td>

                                            <td><label htmlFor="question_812"></label></td>
                                            <td>{formData.question_808}</td>
                                            <td>{formData.question_809}</td>
                                            <td>{formData.question_810}</td>
                                            <td>{formData.question_811}</td>
                                            <td>{formData.question_812}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_813"></label></td>
                                            <td><label htmlFor="question_814"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_813}</td>
                                            <td>{formData.question_814}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="question_815"></label></td>
                                            <td><label htmlFor="question_816"></label></td>
                                            <td><label htmlFor="question_817">MV3.0</label></td>
                                            <td><label htmlFor="question_818"></label></td>

                                            <td><label htmlFor="question_819"></label></td>
                                            <td>{formData.question_815}</td>
                                            <td>{formData.question_816}</td>
                                            <td>{formData.question_817}</td>
                                            <td>{formData.question_818}</td>
                                            <td>{formData.question_819}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><label htmlFor="question_820"></label></td>
                                            <td><label htmlFor="question_821"></label></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_820}</td>
                                            <td>{formData.question_821}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_822"></label></th>
                                            <th><label htmlFor="question_823">No. of enovative spots developed written from Excel</label></th>
                                            <th><label htmlFor="question_824">Geotag photos</label></th>
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
                                            <th><label htmlFor="question_825"></label></th>
                                            <th><label htmlFor="question_826"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Number of innovative spots developed by using recycled waste during Majhi Vasundhara Abhiyan 4.0 </td>
                                            <td>50</td>

                                            <td></td>
                                            <td>{formData.question_822}</td>
                                            <td>{formData.question_823}</td>
                                            <td>{formData.question_824}</td>
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
                                            <td>{formData.question_825}</td>
                                            <td>{formData.question_826}</td>
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
                                            <th><label htmlFor="question_828">Total number of initiatives funded through alternate funding channels</label></th>
                                            <th><label htmlFor="question_829">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                                            <th><label htmlFor="question_830">Work Completion Certificate</label></th>
                                            <th><label htmlFor="question_831">Financial Brief</label></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_832"></label></th>
                                            <th><label htmlFor="question_833"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td>5.6</td>
                                            <td>Number of Majhi Vasundhara Abhiyan initiatives funded through alternate funding channels.</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_827}</td>
                                            <td>{formData.question_828}</td>
                                            <td>{formData.question_829}</td>
                                            <td>{formData.question_830}</td>
                                            <td>{formData.question_831}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>{formData.question_832}</td>
                                            <td>{formData.question_833}</td>
                                        </tr>
                                    </tbody>

                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><label htmlFor="question_834"></label></th>
                                            <th><label htmlFor="question_835">Total amount of money leveraged through Alternative Funding channels</label></th>
                                            <th><label htmlFor="question_836">Details of funding utilization</label></th>
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
                                            <th><label htmlFor="question_837"></label></th>
                                            <th><label htmlFor="question_838"></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>(Relative Marking)</td>
                                            <td></td>
                                            <td>Amount of money leveraged through Alternative Funding channels.</td>
                                            <td>100</td>

                                            <td></td>
                                            <td>{formData.question_834}</td>
                                            <td>{formData.question_835}</td>
                                            <td>{formData.question_836}</td>
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
                                            <td>{formData.question_837}</td>
                                            <td>{formData.question_838}</td>
                                        </tr>
                                    </tbody>


                                </table>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Add;
