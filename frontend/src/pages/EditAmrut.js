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
        second_form_question_1: "",
        second_form_question_2: "",
        second_form_question_3: "",
        second_form_question_4: "",
        second_form_question_5: "",
        second_form_question_6: "",
        second_form_question_7: "",
        second_form_question_8: "",
        second_form_question_9: "",
        second_form_question_10: "",
        second_form_question_11: "",
        second_form_question_12: "",
        second_form_question_13: "",
        second_form_question_14: "",
        second_form_question_15: "",
        second_form_question_16: "",
        second_form_question_17: "",
        second_form_question_18: "",
        second_form_question_19: "",
        second_form_question_20: "",
        second_form_question_21: "",
        second_form_question_22: "",
        second_form_question_23: "",
        second_form_question_24: "",
        second_form_question_25: "",
        second_form_question_26: "",
        second_form_question_27: "",
        second_form_question_28: "",
        second_form_question_29: "",
        second_form_question_30: "",
        second_form_question_31: "",
        second_form_question_32: "",
        second_form_question_33: "",
        second_form_question_34: "",
        second_form_question_35: "",
        second_form_question_36: "",
        second_form_question_37: "",
        second_form_question_38: "",
        second_form_question_39: "",
        second_form_question_40: "",
        second_form_question_41: "",
        second_form_question_42: "",
        second_form_question_43: "",
        second_form_question_44: "",
        second_form_question_45: "",
        second_form_question_46: "",
        second_form_question_47: "",
        second_form_question_48: "",
        second_form_question_49: "",
        second_form_question_50: "",
        second_form_question_51: "",
        second_form_question_52: "",
        second_form_question_53: "",
        second_form_question_54: "",
        second_form_question_55: "",
        second_form_question_56: "",
        second_form_question_57: "",
        second_form_question_58: "",
        second_form_question_59: "",
        second_form_question_60: "",
        second_form_question_61: "",
        second_form_question_62: "",
        second_form_question_63: "",
        second_form_question_64: "",
        second_form_question_65: "",
        second_form_question_66: "",
        second_form_question_67: "",
        second_form_question_68: "",
        second_form_question_69: "",
        second_form_question_70: "",
        second_form_question_71: "",
        second_form_question_72: "",
        second_form_question_73: "",
        second_form_question_74: "",
        second_form_question_75: "",
        second_form_question_76: "",
        second_form_question_77: "",
        second_form_question_78: "",
        second_form_question_79: "",
        second_form_question_80: "",
        second_form_question_81: "",
        second_form_question_82: "",
        second_form_question_83: "",
        second_form_question_84: "",
        second_form_question_85: "",
        second_form_question_86: "",
        second_form_question_87: "",
        second_form_question_88: "",
        second_form_question_89: "",
        second_form_question_90: "",
        second_form_question_91: "",
        second_form_question_92: "",
        second_form_question_93: "",
        second_form_question_94: "",
        second_form_question_95: "",
        second_form_question_96: "",
        second_form_question_97: "",
        second_form_question_98: "",
        second_form_question_99: "",
        second_form_question_100: "",

        second_form_question_101: "",
        second_form_question_102: "",
        second_form_question_103: "",
        second_form_question_104: "",
        second_form_question_105: "",
        second_form_question_106: "",
        second_form_question_107: "",
        second_form_question_108: "",
        second_form_question_109: "",
        second_form_question_110: "",
        second_form_question_111: "",
        second_form_question_112: "",
        second_form_question_113: "",
        second_form_question_114: "",
        second_form_question_115: "",
        second_form_question_116: "",
        second_form_question_117: "",
        second_form_question_118: "",
        second_form_question_119: "",
        second_form_question_120: "",
        second_form_question_121: "",
        second_form_question_122: "",
        second_form_question_123: "",
        second_form_question_124: "",
        second_form_question_125: "",
        second_form_question_126: "",
        second_form_question_127: "",
        second_form_question_128: "",
        second_form_question_129: "",
        second_form_question_130: "",
        second_form_question_131: "",
        second_form_question_132: "",
        second_form_question_133: "",
        second_form_question_134: "",
        second_form_question_135: "",
        second_form_question_136: "",
        second_form_question_137: "",
        second_form_question_138: "",
        second_form_question_139: "",
        second_form_question_140: "",
        second_form_question_141: "",
        second_form_question_142: "",
        second_form_question_143: "",
        second_form_question_144: "",
        second_form_question_145: "",
        second_form_question_146: "",
        second_form_question_147: "",
        second_form_question_148: "",
        second_form_question_149: "",
        second_form_question_150: "",
        second_form_question_151: "",
        second_form_question_152: "",
        second_form_question_153: "",
        second_form_question_154: "",
        second_form_question_155: "",
        second_form_question_156: "",
        second_form_question_157: "",
        second_form_question_158: "",
        second_form_question_159: "",
        second_form_question_160: "",
        second_form_question_161: "",
        second_form_question_162: "",
        second_form_question_163: "",
        second_form_question_164: "",
        second_form_question_165: "",
        second_form_question_166: "",
        second_form_question_167: "",
        second_form_question_168: "",
        second_form_question_169: "",
        second_form_question_170: "",
        second_form_question_171: "",
        second_form_question_172: "",
        second_form_question_173: "",
        second_form_question_174: "",
        second_form_question_175: "",
        second_form_question_176: "",
        second_form_question_177: "",
        second_form_question_178: "",
        second_form_question_179: "",
        second_form_question_180: "",
        second_form_question_181: "",
        second_form_question_182: "",
        second_form_question_183: "",
        second_form_question_184: "",
        second_form_question_185: "",
        second_form_question_186: "",
        second_form_question_187: "",
        second_form_question_188: "",
        second_form_question_189: "",
        second_form_question_190: "",
        second_form_question_191: "",
        second_form_question_192: "",
        second_form_question_193: "",
        second_form_question_194: "",
        second_form_question_195: "",
        second_form_question_196: "",
        second_form_question_197: "",
        second_form_question_198: "",
        second_form_question_199: "",
        second_form_question_200: "",

        second_form_question_201: "",
        second_form_question_202: "",
        second_form_question_203: "",
        second_form_question_204: "",
        second_form_question_205: "",
        second_form_question_206: "",
        second_form_question_207: "",
        second_form_question_208: "",
        second_form_question_209: "",
        second_form_question_210: "",
        second_form_question_211: "",
        second_form_question_212: "",
        second_form_question_213: "",
        second_form_question_214: "",
        second_form_question_215: "",
        second_form_question_216: "",
        second_form_question_217: "",
        second_form_question_218: "",
        second_form_question_219: "",
        second_form_question_220: "",
        second_form_question_221: "",
        second_form_question_222: "",
        second_form_question_223: "",
        second_form_question_224: "",
        second_form_question_225: "",
        second_form_question_226: "",
        second_form_question_227: "",
        second_form_question_228: "",
        second_form_question_229: "",
        second_form_question_230: "",
        second_form_question_231: "",
        second_form_question_232: "",
        second_form_question_233: "",
        second_form_question_234: "",
        second_form_question_235: "",
        second_form_question_236: "",
        second_form_question_237: "",
        second_form_question_238: "",
        second_form_question_239: "",
        second_form_question_240: "",
        second_form_question_241: "",
        second_form_question_242: "",
        second_form_question_243: "",
        second_form_question_244: "",
        second_form_question_245: "",
        second_form_question_246: "",
        second_form_question_247: "",
        second_form_question_248: "",
        second_form_question_249: "",
        second_form_question_250: "",
        second_form_question_251: "",
        second_form_question_252: "",
        second_form_question_253: "",
        second_form_question_254: "",
        second_form_question_255: "",
        second_form_question_256: "",
        second_form_question_257: "",
        second_form_question_258: "",
        second_form_question_259: "",
        second_form_question_260: "",
        second_form_question_261: "",
        second_form_question_262: "",
        second_form_question_263: "",
        second_form_question_264: "",
        second_form_question_265: "",
        second_form_question_266: "",
        second_form_question_267: "",
        second_form_question_268: "",
        second_form_question_269: "",
        second_form_question_270: "",
        second_form_question_271: "",
        second_form_question_272: "",
        second_form_question_273: "",
        second_form_question_274: "",
        second_form_question_275: "",
        second_form_question_276: "",
        second_form_question_277: "",
        second_form_question_278: "",
        second_form_question_279: "",
        second_form_question_280: "",
        second_form_question_281: "",
        second_form_question_282: "",
        second_form_question_283: "",
        second_form_question_284: "",
        second_form_question_285: "",
        second_form_question_286: "",
        second_form_question_287: "",
        second_form_question_288: "",
        second_form_question_289: "",
        second_form_question_290: "",
        second_form_question_291: "",
        second_form_question_292: "",
        second_form_question_293: "",
        second_form_question_294: "",
        second_form_question_295: "",
        second_form_question_296: "",
        second_form_question_297: "",
        second_form_question_298: "",
        second_form_question_299: "",
        second_form_question_300: "",

        second_form_question_301: "",
        second_form_question_302: "",
        second_form_question_303: "",
        second_form_question_304: "",
        second_form_question_305: "",
        second_form_question_306: "",
        second_form_question_307: "",
        second_form_question_308: "",
        second_form_question_309: "",
        second_form_question_310: "",
        second_form_question_311: "",
        second_form_question_312: "",
        second_form_question_313: "",
        second_form_question_314: "",
        second_form_question_315: "",
        second_form_question_316: "",
        second_form_question_317: "",
        second_form_question_318: "",
        second_form_question_319: "",
        second_form_question_320: "",
        second_form_question_321: "",
        second_form_question_322: "",
        second_form_question_323: "",
        second_form_question_324: "",
        second_form_question_325: "",
        second_form_question_326: "",
        second_form_question_327: "",
        second_form_question_328: "",
        second_form_question_329: "",
        second_form_question_330: "",
        second_form_question_331: "",
        second_form_question_332: "",
        second_form_question_333: "",
        second_form_question_334: "",
        second_form_question_335: "",
        second_form_question_336: "",
        second_form_question_337: "",
        second_form_question_338: "",
        second_form_question_339: "",
        second_form_question_340: "",
        second_form_question_341: "",
        second_form_question_342: "",
        second_form_question_343: "",
        second_form_question_344: "",
        second_form_question_345: "",
        second_form_question_346: "",
        second_form_question_347: "",
        second_form_question_348: "",
        second_form_question_349: "",
        second_form_question_350: "",
        second_form_question_351: "",
        second_form_question_352: "",
        second_form_question_353: "",
        second_form_question_354: "",
        second_form_question_355: "",
        second_form_question_356: "",
        second_form_question_357: "",
        second_form_question_358: "",
        second_form_question_359: "",
        second_form_question_360: "",
        second_form_question_361: "",
        second_form_question_362: "",
        second_form_question_363: "",
        second_form_question_364: "",
        second_form_question_365: "",
        second_form_question_366: "",
        second_form_question_367: "",
        second_form_question_368: "",
        second_form_question_369: "",
        second_form_question_370: "",
        second_form_question_371: "",
        second_form_question_372: "",
        second_form_question_373: "",
        second_form_question_374: "",
        second_form_question_375: "",
        second_form_question_376: "",
        second_form_question_377: "",
        second_form_question_378: "",
        second_form_question_379: "",
        second_form_question_380: "",
        second_form_question_381: "",
        second_form_question_382: "",
        second_form_question_383: "",
        second_form_question_384: "",
        second_form_question_385: "",
        second_form_question_386: "",
        second_form_question_387: "",
        second_form_question_388: "",
        second_form_question_389: "",
        second_form_question_390: "",
        second_form_question_391: "",
        second_form_question_392: "",
        second_form_question_393: "",
        second_form_question_394: "",
        second_form_question_395: "",
        second_form_question_396: "",
        second_form_question_397: "",
        second_form_question_398: "",
        second_form_question_399: "",
        second_form_question_400: "",

        second_form_question_401: "",
        second_form_question_402: "",
        second_form_question_403: "",
        second_form_question_404: "",
        second_form_question_405: "",
        second_form_question_406: "",
        second_form_question_407: "",
        second_form_question_408: "",
        second_form_question_409: "",
        second_form_question_410: "",
        second_form_question_411: "",
        second_form_question_412: "",
        second_form_question_413: "",
        second_form_question_414: "",
        second_form_question_415: "",
        second_form_question_416: "",
        second_form_question_417: "",
        second_form_question_418: "",
        second_form_question_419: "",
        second_form_question_420: "",
        second_form_question_421: "",
        second_form_question_422: "",
        second_form_question_423: "",
        second_form_question_424: "",
        second_form_question_425: "",
        second_form_question_426: "",
        second_form_question_427: "",
        second_form_question_428: "",
        second_form_question_429: "",
        second_form_question_430: "",
        second_form_question_431: "",
        second_form_question_432: "",
        second_form_question_433: "",
        second_form_question_434: "",
        second_form_question_435: "",
        second_form_question_436: "",
        second_form_question_437: "",
        second_form_question_438: "",
        second_form_question_439: "",
        second_form_question_440: "",
        second_form_question_441: "",
        second_form_question_442: "",
        second_form_question_443: "",
        second_form_question_444: "",
        second_form_question_445: "",
        second_form_question_446: "",
        second_form_question_447: "",
        second_form_question_448: "",
        second_form_question_449: "",
        second_form_question_450: "",
        second_form_question_451: "",
        second_form_question_452: "",
        second_form_question_453: "",
        second_form_question_454: "",
        second_form_question_455: "",
        second_form_question_456: "",
        second_form_question_457: "",
        second_form_question_458: "",
        second_form_question_459: "",
        second_form_question_460: "",
        second_form_question_461: "",
        second_form_question_462: "",
        second_form_question_463: "",
        second_form_question_464: "",
        second_form_question_465: "",
        second_form_question_466: "",
        second_form_question_467: "",
        second_form_question_468: "",
        second_form_question_469: "",
        second_form_question_470: "",
        second_form_question_471: "",
        second_form_question_472: "",
        second_form_question_473: "",
        second_form_question_474: "",
        second_form_question_475: "",
        second_form_question_476: "",
        second_form_question_477: "",
        second_form_question_478: "",
        second_form_question_479: "",
        second_form_question_480: "",
        second_form_question_481: "",
        second_form_question_482: "",
        second_form_question_483: "",
        second_form_question_484: "",
        second_form_question_485: "",
        second_form_question_486: "",
        second_form_question_487: "",
        second_form_question_488: "",
        second_form_question_489: "",
        second_form_question_490: "",
        second_form_question_491: "",
        second_form_question_492: "",
        second_form_question_493: "",
        second_form_question_494: "",
        second_form_question_495: "",
        second_form_question_496: "",
        second_form_question_497: "",
        second_form_question_498: "",
        second_form_question_499: "",
        second_form_question_500: "",

        second_form_question_501: "",
        second_form_question_502: "",
        second_form_question_503: "",
        second_form_question_504: "",
        second_form_question_505: "",
        second_form_question_506: "",
        second_form_question_507: "",
        second_form_question_508: "",
        second_form_question_509: "",
        second_form_question_510: "",
        second_form_question_511: "",
        second_form_question_512: "",
        second_form_question_513: "",
        second_form_question_514: "",
        second_form_question_515: "",
        second_form_question_516: "",
        second_form_question_517: "",
        second_form_question_518: "",
        second_form_question_519: "",
        second_form_question_520: "",
        second_form_question_521: "",
        second_form_question_522: "",
        second_form_question_523: "",
        second_form_question_524: "",
        second_form_question_525: "",
        second_form_question_526: "",
        second_form_question_527: "",
        second_form_question_528: "",
        second_form_question_529: "",
        second_form_question_530: "",
        second_form_question_531: "",
        second_form_question_532: "",
        second_form_question_533: "",
        second_form_question_534: "",
        second_form_question_535: "",
        second_form_question_536: "",
        second_form_question_537: "",
        second_form_question_538: "",
        second_form_question_539: "",
        second_form_question_540: "",
        second_form_question_541: "",
        second_form_question_542: "",
        second_form_question_543: "",
        second_form_question_544: "",
        second_form_question_545: "",
        second_form_question_546: "",
        second_form_question_547: "",
        second_form_question_548: "",
        second_form_question_549: "",
        second_form_question_550: "",
        second_form_question_551: "",
        second_form_question_552: "",
        second_form_question_553: "",
        second_form_question_554: "",
        second_form_question_555: "",
        second_form_question_556: "",
        second_form_question_557: "",
        second_form_question_558: "",
        second_form_question_559: "",
        second_form_question_560: "",
        second_form_question_561: "",
        second_form_question_562: "",
        second_form_question_563: "",
        second_form_question_564: "",
        second_form_question_565: "",
        second_form_question_566: "",
        second_form_question_567: "",
        second_form_question_568: "",
        second_form_question_569: "",
        second_form_question_570: "",
        second_form_question_571: "",
        second_form_question_572: "",
        second_form_question_573: "",
        second_form_question_574: "",
        second_form_question_575: "",
        second_form_question_576: "",
        second_form_question_577: "",
        second_form_question_578: "",
        second_form_question_579: "",
        second_form_question_580: "",
        second_form_question_581: "",
        second_form_question_582: "",
        second_form_question_583: "",
        second_form_question_584: "",
        second_form_question_585: "",
        second_form_question_586: "",
        second_form_question_587: "",
        second_form_question_588: "",
        second_form_question_589: "",
        second_form_question_590: "",
        second_form_question_591: "",
        second_form_question_592: "",
        second_form_question_593: "",
        second_form_question_594: "",
        second_form_question_595: "",
        second_form_question_596: "",
        second_form_question_597: "",
        second_form_question_598: "",
        second_form_question_599: "",
        second_form_question_600: "",

        second_form_question_601: "",
        second_form_question_602: "",
        second_form_question_603: "",
        second_form_question_604: "",
        second_form_question_605: "",
        second_form_question_606: "",
        second_form_question_607: "",
        second_form_question_608: "",
        second_form_question_609: "",
        second_form_question_610: "",
        second_form_question_611: "",
        second_form_question_612: "",
        second_form_question_613: "",
        second_form_question_614: "",
        second_form_question_615: "",
        second_form_question_616: "",
        second_form_question_617: "",
        second_form_question_618: "",
        second_form_question_619: "",
        second_form_question_620: "",
        second_form_question_621: "",
        second_form_question_622: "",
        second_form_question_623: "",
        second_form_question_624: "",
        second_form_question_625: "",
        second_form_question_626: "",
        second_form_question_627: "",
        second_form_question_628: "",
        second_form_question_629: "",
        second_form_question_630: "",
        second_form_question_631: "",
        second_form_question_632: "",
        second_form_question_633: "",
        second_form_question_634: "",
        second_form_question_635: "",
        second_form_question_636: "",
        second_form_question_637: "",
        second_form_question_638: "",
        second_form_question_639: "",
        second_form_question_640: "",
        second_form_question_641: "",
        second_form_question_642: "",
        second_form_question_643: "",
        second_form_question_644: "",
        second_form_question_645: "",
        second_form_question_646: "",
        second_form_question_647: "",
        second_form_question_648: "",
        second_form_question_649: "",
        second_form_question_650: "",
        second_form_question_651: "",
        second_form_question_652: "",
        second_form_question_653: "",
        second_form_question_654: "",
        second_form_question_655: "",
        second_form_question_656: "",
        second_form_question_657: "",
        second_form_question_658: "",
        second_form_question_659: "",
        second_form_question_660: "",
        second_form_question_661: "",
        second_form_question_662: "",
        second_form_question_663: "",
        second_form_question_664: "",
        second_form_question_665: "",
        second_form_question_666: "",
        second_form_question_667: "",
        second_form_question_668: "",
        second_form_question_669: "",
        second_form_question_670: "",
        second_form_question_671: "",
        second_form_question_672: "",
        second_form_question_673: "",
        second_form_question_674: "",
        second_form_question_675: "",
        second_form_question_676: "",
        second_form_question_677: "",
        second_form_question_678: "",
        second_form_question_679: "",
        second_form_question_680: "",
        second_form_question_681: "",
        second_form_question_682: "",
        second_form_question_683: "",
        second_form_question_684: "",
        second_form_question_685: "",
        second_form_question_686: "",
        second_form_question_687: "",
        second_form_question_688: "",
        second_form_question_689: "",
        second_form_question_690: "",
        second_form_question_691: "",
        second_form_question_692: "",
        second_form_question_693: "",
        second_form_question_694: "",
        second_form_question_695: "",
        second_form_question_696: "",
        second_form_question_697: "",
        second_form_question_698: "",
        second_form_question_699: "",
        second_form_question_700: "",

        second_form_question_701: "",
        second_form_question_702: "",
        second_form_question_703: "",
        second_form_question_704: "",
        second_form_question_705: "",
        second_form_question_706: "",
        second_form_question_707: "",
        second_form_question_708: "",
        second_form_question_709: "",
        second_form_question_710: "",
        second_form_question_711: "",
        second_form_question_712: "",
        second_form_question_713: "",
        second_form_question_714: "",
        second_form_question_715: "",
        second_form_question_716: "",
        second_form_question_717: "",
        second_form_question_718: "",
        second_form_question_719: "",
        second_form_question_720: "",
        second_form_question_721: "",
        second_form_question_722: "",
        second_form_question_723: "",
        second_form_question_724: "",
        second_form_question_725: "",
        second_form_question_726: "",
        second_form_question_727: "",
        second_form_question_728: "",
        second_form_question_729: "",
        second_form_question_730: "",
        second_form_question_731: "",
        second_form_question_732: "",
        second_form_question_733: "",
        second_form_question_734: "",
        second_form_question_735: "",
        second_form_question_736: "",
        second_form_question_737: "",
        second_form_question_738: "",
        second_form_question_739: "",
        second_form_question_740: "",
        second_form_question_741: "",
        second_form_question_742: "",
        second_form_question_743: "",
        second_form_question_744: "",
        second_form_question_745: "",
        second_form_question_746: "",
        second_form_question_747: "",
        second_form_question_748: "",
        second_form_question_749: "",
        second_form_question_750: "",
        second_form_question_751: "",
        second_form_question_752: "",
        second_form_question_753: "",
        second_form_question_754: "",
        second_form_question_755: "",
        second_form_question_756: "",
        second_form_question_757: "",
        second_form_question_758: "",
        second_form_question_759: "",
        second_form_question_760: "",
        second_form_question_761: "",
        second_form_question_762: "",
        second_form_question_763: "",
        second_form_question_764: "",
        second_form_question_765: "",
        second_form_question_766: "",
        second_form_question_767: "",
        second_form_question_768: "",
        second_form_question_769: "",
        second_form_question_770: "",
        second_form_question_771: "",
        second_form_question_772: "",
        second_form_question_773: "",
        second_form_question_774: "",
        second_form_question_775: "",
        second_form_question_776: "",
        second_form_question_777: "",
        second_form_question_778: "",
        second_form_question_779: "",
        second_form_question_780: "",
        second_form_question_781: "",
        second_form_question_782: "",
        second_form_question_783: "",
        second_form_question_784: "",
        second_form_question_785: "",
        second_form_question_786: "",
        second_form_question_787: "",
        second_form_question_788: "",
        second_form_question_789: "",
        second_form_question_790: "",
        second_form_question_791: "",
        second_form_question_792: "",
        second_form_question_793: "",
        second_form_question_794: "",
        second_form_question_795: "",
        second_form_question_796: "",
        second_form_question_797: "",
        second_form_question_798: "",
        second_form_question_799: "",
        second_form_question_800: "",

        second_form_question_801: "",
        second_form_question_802: "",
        second_form_question_803: "",
        second_form_question_804: "",
        second_form_question_805: "",
        second_form_question_806: "",
        second_form_question_807: "",
        second_form_question_808: "",
        second_form_question_809: "",
        second_form_question_810: "",
        second_form_question_811: "",
        second_form_question_812: "",
        second_form_question_813: "",
        second_form_question_814: "",
        second_form_question_815: "",
        second_form_question_816: "",
        second_form_question_817: "",
        second_form_question_818: "",
        second_form_question_819: "",
        second_form_question_820: "",
        second_form_question_821: "",
        second_form_question_822: "",
        second_form_question_823: "",
        second_form_question_824: "",
        second_form_question_825: "",
        second_form_question_826: "",
        second_form_question_827: "",
        second_form_question_828: "",
        second_form_question_829: "",
        second_form_question_830: "",
        second_form_question_831: "",
        second_form_question_832: "",
        second_form_question_833: "",
        second_form_question_834: "",
        second_form_question_835: "",
        second_form_question_836: "",
        second_form_question_837: "",
        second_form_question_838: "",    
        second_form_question_839: "",
        second_form_question_840: "",
        second_form_question_841: "",
        second_form_question_842: "",
        second_form_question_843: "",
        second_form_question_844: "",
        second_form_question_845: "",
        second_form_question_846: "",
        second_form_question_847: "",
        second_form_question_848: "",
        second_form_question_849: "",
        second_form_question_850: "",
        second_form_question_851: "",
        second_form_question_852: "",
        second_form_question_853: "",
        second_form_question_854: "",
        second_form_question_855: "",
        second_form_question_856: "",
        second_form_question_857: "",
        second_form_question_858: "",
        second_form_question_859: "",
        second_form_question_860: "",
        second_form_question_861: "",
        second_form_question_862: "",
        second_form_question_863: "",
        second_form_question_864: "",
        second_form_question_865: "",
        second_form_question_866: "",
        second_form_question_867: "",
        second_form_question_868: "",
        second_form_question_869: "",
        second_form_question_870: "",
        second_form_question_871: "",
        second_form_question_872: "",
        second_form_question_873: "",
        second_form_question_874: "",
        second_form_question_875: "",
        second_form_question_876: "",
        second_form_question_877: "",
        second_form_question_878: "",
        second_form_question_879: "",
        second_form_question_880: "",
        second_form_question_881: "",
        second_form_question_882: "",
        second_form_question_883: "",
        second_form_question_884: "",
        second_form_question_885: "",
        second_form_question_886: "",
        second_form_question_887: "",
        second_form_question_888: "",
        second_form_question_889: "",
        second_form_question_890: "",
        second_form_question_891: "",
        second_form_question_892: "",
        second_form_question_893: "",
        second_form_question_894: "",
        second_form_question_895: "",
        second_form_question_896: "",
        second_form_question_897: "",
        second_form_question_898: "",
        second_form_question_899: "",
        second_form_question_900: "",

        second_form_question_901: "",
        second_form_question_902: "",
        second_form_question_903: "",
        second_form_question_904: ""
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
            const response = await axios.get(`/api/v1/amrutone/${ulbCode}`, {
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
        XLSX.utils.book_append_sheet(workbook, worksheet, 'AmrutForm');
    
        // Export workbook to Excel file
        XLSX.writeFile(workbook, 'amrut_form.xlsx');
    };


    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication token missing", { position: "top-right" });
                return;
            }
            const response = await axios.post(`http://89.116.20.162:8080/api/v1/amrutedi/${ulbCode}`, formData, {
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
            <h3>Edit Amrut City Form</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="scrollable-table">
                    <div className="scrollable-container">
                        <div className="scrollabe-content">
                <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                        <tr>
                            <th></th>
                            <th>Scheme & Unit</th>
                            <th>Parameters</th>
                            <th></th>
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
                            <th></th>
                            <th></th>
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
                            <td><input type="date" value={formData.present_date} onChange={inputHandler} id="present_date" name="present_date" placeholder="dd-mm-yyyy" required/></td>
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
                    <tbody>
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
                    </tbody>

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
                            <th><label htmlFor="second_form_question_1"></label></th>
                            <th><label htmlFor="second_form_question_2">surrived betn 01-04-2023 to 31-03-2024 excel(Column 6)</label></th>
                            <th><label htmlFor="second_form_question_3">Date betn 01-04-2023 to 31-03-2024 on geo-tagged photographs</label></th>
                            <th><label htmlFor="second_form_question_4">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_5">Whether Financial Brief stating fund for plantation</label></th>
                            <th><label htmlFor="second_form_question_6">CSR Detials like acknowlledgement slip/MoU</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_7"></label></th>
                            <th><label htmlFor="second_form_question_8"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.1.1 Numbers</td>
                            <td>Total number of trees planted and survived during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_1} onChange={inputHandler} id="second_form_question_1" name="second_form_question_1" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_2} onChange={inputHandler} id="second_form_question_2" name="second_form_question_2" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_3} onChange={inputHandler} id="second_form_question_3" name="second_form_question_3" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.second_form_question_4} onChange={inputHandler} id="second_form_question_4" name="second_form_question_4" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_5} onChange={inputHandler} id="second_form_question_5" name="second_form_question_5" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_6} onChange={inputHandler} id="second_form_question_6" name="second_form_question_6" required>
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
                            <td><input type="text" value={formData.second_form_question_7} onChange={inputHandler} id="second_form_question_7" name="second_form_question_7" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_8} onChange={inputHandler} id="second_form_question_8" name="second_form_question_8" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_9"></label></th>
                            <th><label htmlFor="second_form_question_10">surrived betn 01-04-2023 to 31-03-2024 excel(Column 6)</label></th>
                            <th><label htmlFor="second_form_question_11">Date betn 01-04-2023 to 31-03-2024 on geo-tagged photographs</label></th>
                            <th><label htmlFor="second_form_question_12">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_13">Whether Financial Brief stating fund for plantation</label></th>
                            <th><label htmlFor="second_form_question_14">CSR Detials like acknowlledgement slip/MoU</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_15"></label></th>
                            <th><label htmlFor="second_form_question_16"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>Number</td>
                            <td>Indigenous trees: Out of total trees planted, number of indigenous trees planted and survived during Majhi Vasundhara Abhiyan 4.0  </td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_9} onChange={inputHandler} id="second_form_question_9" name="second_form_question_9" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_10} onChange={inputHandler} id="second_form_question_10" name="second_form_question_10" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_11} onChange={inputHandler} id="second_form_question_11" name="second_form_question_11" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.second_form_question_12} onChange={inputHandler} id="second_form_question_12" name="second_form_question_12" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_13} onChange={inputHandler} id="second_form_question_13" name="second_form_question_13" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_14} onChange={inputHandler} id="second_form_question_14" name="second_form_question_14" required>
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
                            <td><input type="text" value={formData.second_form_question_15} onChange={inputHandler} id="second_form_question_15" name="second_form_question_15" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_16} onChange={inputHandler} id="second_form_question_16" name="second_form_question_16" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th>Number</th>
                            <th>Upkeep: Trees planted and survived during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_17"></label></th>
                            <th><label htmlFor="second_form_question_18">Trees Survived</label></th>
                            <th><label htmlFor="second_form_question_19">Geotag Photos</label></th>
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
                            <th><label htmlFor="second_form_question_20"></label></th>
                            <th><label htmlFor="second_form_question_21"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_17} onChange={inputHandler} id="second_form_question_17" name="second_form_question_17" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_18} onChange={inputHandler} id="second_form_question_18" name="second_form_question_18" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_19} onChange={inputHandler} id="second_form_question_19" name="second_form_question_19" required>
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
                            <td><input type="text" value={formData.second_form_question_20} onChange={inputHandler} id="second_form_question_20" name="second_form_question_20" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_21} onChange={inputHandler} id="second_form_question_21" name="second_form_question_21" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_22"></label></td>
                            <td><label htmlFor="second_form_question_23"></label></td>
                            <td><label htmlFor="second_form_question_24">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_25"></label></td>

                            <td><label htmlFor="second_form_question_26"></label></td>
                            <td><input type="number" value={formData.second_form_question_22} onChange={inputHandler} id="second_form_question_22" name="second_form_question_22" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_23} onChange={inputHandler} id="second_form_question_23" name="second_form_question_23" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_24} onChange={inputHandler} id="second_form_question_24" name="second_form_question_24" required>
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
                            <td><input type="text" value={formData.second_form_question_25} onChange={inputHandler} id="second_form_question_25" name="second_form_question_25" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_26} onChange={inputHandler} id="second_form_question_26" name="second_form_question_26" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_27"></label></td>
                            <td><label htmlFor="second_form_question_28"></label></td>
                            <td><label htmlFor="second_form_question_29">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_30"></label></td>

                            <td><label htmlFor="second_form_question_31"></label></td>
                            <td><input type="number" value={formData.second_form_question_27} onChange={inputHandler} id="second_form_question_27" name="second_form_question_27" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_28} onChange={inputHandler} id="second_form_question_28" name="second_form_question_28" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_29} onChange={inputHandler} id="second_form_question_29" name="second_form_question_29" required>
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
                            <td><input type="text" value={formData.second_form_question_30} onChange={inputHandler} id="second_form_question_30" name="second_form_question_30" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_31} onChange={inputHandler} id="second_form_question_31" name="second_form_question_31" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>50</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_32"></label></th>
                            <th><label htmlFor="second_form_question_33">link of the Tree Census Report</label></th>
                            <th><label htmlFor="second_form_question_34">Date of Publication between 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_35">Geo-tagged photographs</label></th>
                            <th><label htmlFor="second_form_question_36">screenshot/photo of announcement for preparation of tree census on social media channels if annouce by local body on social media</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_37"></label></th>
                            <th><label htmlFor="second_form_question_38"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.2 (Yes/No)</td>
                            <td>Tree Census with Geotagging – Report Prepared and Published before Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_32} onChange={inputHandler} id="second_form_question_32" name="second_form_question_32" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_33} onChange={inputHandler} id="second_form_question_33" name="second_form_question_33" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="date" value={formData.second_form_question_34} onChange={inputHandler} id="second_form_question_34" name="second_form_question_34" placeholder="dd-mm-yyyy" required /></td>
                            <td><select value={formData.second_form_question_35} onChange={inputHandler} id="second_form_question_35" name="second_form_question_35" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_36} onChange={inputHandler} id="second_form_question_36" name="second_form_question_36" required>
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
                            <td><input type="text" value={formData.second_form_question_37} onChange={inputHandler} id="second_form_question_37" name="second_form_question_37" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_38} onChange={inputHandler} id="second_form_question_38" name="second_form_question_38" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_39"></label></th>
                            <th><label htmlFor="second_form_question_40">Check link of the Tree Census Report</label></th>
                            <th><label htmlFor="second_form_question_41">Date of Publication (DD-MM-YYYY)</label></th>
                            <th><label htmlFor="second_form_question_42">Check additional geotag photos </label></th>
                            <th><label htmlFor="second_form_question_43">Additional Land area surveyed in sq. m/acres/sq.km</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_44"></label></th>
                            <th><label htmlFor="second_form_question_45"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1(a) (Yes/No)</td>
                            <td>If Yes, Tree Census with geotagging, report updated and published during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_39} onChange={inputHandler} id="second_form_question_39" name="second_form_question_39" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_40} onChange={inputHandler} id="second_form_question_40" name="second_form_question_40" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="date" value={formData.second_form_question_41} onChange={inputHandler} id="second_form_question_41" name="second_form_question_41" placeholder="dd-mm-yyyy" required /></td>
                            <td><select value={formData.second_form_question_42} onChange={inputHandler} id="second_form_question_42" name="second_form_question_42" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_43} onChange={inputHandler} id="second_form_question_43" name="second_form_question_43" required>
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
                            <td><input type="text" value={formData.second_form_question_44} onChange={inputHandler} id="second_form_question_44" name="second_form_question_44" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_45} onChange={inputHandler} id="second_form_question_45" name="second_form_question_45" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>75</th>
                            <th>1(b) (Yes/No)</th>
                            <th>If No, Status during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_46"></label></th>
                            <th><label htmlFor="second_form_question_47">Written % of tree census done </label></th>
                            <th><label htmlFor="second_form_question_48">link of the tree census report</label></th>
                            <th><label htmlFor="second_form_question_49">Declaration/Self certification</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_50"></label></th>
                            <th><label htmlFor="second_form_question_51"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Tree Census with geotagging –100% report prepared and published</td>
                            <td>75</td>

                            <td></td>
                            <td><select value={formData.second_form_question_46} onChange={inputHandler} id="second_form_question_46" name="second_form_question_46" required>
                            <option value="">Choose one</option>
                            <option value="Tree Census with geotagging –100% report prepared and published">Tree Census with geotagging –100% report prepared and published</option>
                            <option value="Tree Census with geotagging –50% report prepared and published">Tree Census with geotagging –50% report prepared and published</option>
                            <option value="Tree Census with geotagging –Less than 50% report prepared and published">Tree Census with geotagging –Less than 50% report prepared and published</option>
                            </select></td>
                            <td><select value={formData.second_form_question_47} onChange={inputHandler} id="second_form_question_47" name="second_form_question_47" required>
                            <option value="">Choose one</option>
                            <option value="Tree Census with geotagging –100% report prepared and published">Tree Census with geotagging –100% report prepared and published</option>
                            <option value="Tree Census with geotagging –50% report prepared and published">Tree Census with geotagging –50% report prepared and published</option>
                            <option value="Tree Census with geotagging –Less than 50% report prepared and published">Tree Census with geotagging –Less than 50% report prepared and published</option>
                            </select></td>
                            <td><select value={formData.second_form_question_48} onChange={inputHandler} id="second_form_question_48" name="second_form_question_48" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_49} onChange={inputHandler} id="second_form_question_49" name="second_form_question_49" required>
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
                            <td><input type="text" value={formData.second_form_question_50} onChange={inputHandler} id="second_form_question_50" name="second_form_question_50" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_51} onChange={inputHandler} id="second_form_question_51" name="second_form_question_51" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_52"></label></th>
                            <th><label htmlFor="second_form_question_53">link of Heritage Tree Census report</label></th>
                            <th><label htmlFor="second_form_question_54">list of geotagged heritage trees which is been prepared and published </label></th>
                            <th><label htmlFor="second_form_question_55">Self Certification</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_56"></label></th>
                            <th><label htmlFor="second_form_question_57"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>List of Heritage Tree- updated and published </td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.second_form_question_52} onChange={inputHandler} id="second_form_question_52" name="second_form_question_52" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_53} onChange={inputHandler} id="second_form_question_53" name="second_form_question_53" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_54} onChange={inputHandler} id="second_form_question_54" name="second_form_question_54" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_55} onChange={inputHandler} id="second_form_question_55" name="second_form_question_55" required>
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
                            <td><input type="text" value={formData.second_form_question_56} onChange={inputHandler} id="second_form_question_56" name="second_form_question_56" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_57} onChange={inputHandler} id="second_form_question_57" name="second_form_question_57" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>1.1.3 (Yes/No)</th>
                            <th>Percentage of projects for which NOC was processed in equal to /less than 60 days</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_58"></label></th>
                            <th><label htmlFor="second_form_question_59">Chcek date in excel to be from 16-07-2021 to 31-03-2024) if not put filter for this date</label></th>
                            <th><label htmlFor="second_form_question_60">No. of application received</label></th>
                            <th><label htmlFor="second_form_question_61">No. of applications NOCs granted within or equal to 60 days</label></th>
                            <th><label htmlFor="second_form_question_62">copy of NOCs granted by Tree Authority </label></th>
                            <th><label htmlFor="second_form_question_63">Summary Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_64"></label></th>
                            <th><label htmlFor="second_form_question_65"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of saplings (Height above 4 feet)present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>60</td>

                            <td></td>
                            <td><select value={formData.second_form_question_58} onChange={inputHandler} id="second_form_question_58" name="second_form_question_58" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_59} onChange={inputHandler} id="second_form_question_59" name="second_form_question_59" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_60} onChange={inputHandler} id="second_form_question_60" name="second_form_question_60" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_61} onChange={inputHandler} id="second_form_question_61" name="second_form_question_61" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_62} onChange={inputHandler} id="second_form_question_62" name="second_form_question_62" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_63} onChange={inputHandler} id="second_form_question_63" name="second_form_question_63" required>
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
                            <td><input type="text" value={formData.second_form_question_64} onChange={inputHandler} id="second_form_question_64" name="second_form_question_64" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_65} onChange={inputHandler} id="second_form_question_65" name="second_form_question_65" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>(Yes/No)</th>
                            <th>Percentage of Compensatory plantation done as per NOCs granted by the Local body</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_66"></label></th>
                            <th><label htmlFor="second_form_question_67">Chcek date in excel to be from 16-07-2021 to 31-03-2024) if not put filter for this date</label></th>
                            <th><label htmlFor="second_form_question_68">details of compensatory plantation done as per NOCs granted by the local body </label></th>
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
                            <th><label htmlFor="second_form_question_69"></label></th>
                            <th><label htmlFor="second_form_question_70"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>100%</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_66} onChange={inputHandler} id="second_form_question_66" name="second_form_question_66" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_67} onChange={inputHandler} id="second_form_question_67" name="second_form_question_67" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_68} onChange={inputHandler} id="second_form_question_68" name="second_form_question_68" required>
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
                            <td><input type="text" value={formData.second_form_question_69} onChange={inputHandler} id="second_form_question_69" name="second_form_question_69" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_70} onChange={inputHandler} id="second_form_question_70" name="second_form_question_70" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>(Yes/No)</th>
                            <th>% survival of compensatory plantation</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_71"></label></th>
                            <th><label htmlFor="second_form_question_72">% of surrival as per excel sheet.</label></th>
                            <th><label htmlFor="second_form_question_73">Copy of Annual Compliance Report</label></th>
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
                            <th><label htmlFor="second_form_question_74"></label></th>
                            <th><label htmlFor="second_form_question_75"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_71} onChange={inputHandler} id="second_form_question_71" name="second_form_question_71" required>
                            <option value="">Choose one</option>
                            <option value="95% or more">95% or more</option>
                            <option value="75% - 95%">75% - 95%</option>
                            <option value="Less than 75%">Less than 75%</option>
                            </select></td>
                            <td><select value={formData.second_form_question_72} onChange={inputHandler} id="second_form_question_72" name="second_form_question_72" required>
                            <option value="">Choose one</option>
                            <option value="95% or more">95% or more</option>
                            <option value="75% - 95%">75% - 95%</option>
                            <option value="Less than 75%">Less than 75%</option>
                            </select></td>
                            <td><select value={formData.second_form_question_73} onChange={inputHandler} id="second_form_question_73" name="second_form_question_73" required>
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
                            <td><input type="text" value={formData.second_form_question_74} onChange={inputHandler} id="second_form_question_74" name="second_form_question_74" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_75} onChange={inputHandler} id="second_form_question_75" name="second_form_question_75" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>MIS</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_76"></label></th>
                            <th><label htmlFor="second_form_question_77">write cumulative capacity of all nurseries from Excel (Sr. 9)</label></th>
                            <th><label htmlFor="second_form_question_78">geo-tagged photographs attached during 01-04-2023 to 31-03-2024, even if one geotag photograph evidance is ok</label></th>
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
                            <th><label htmlFor="second_form_question_79"></label></th>
                            <th><label htmlFor="second_form_question_80"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.1.4</td>
                            <td>Cumulative capacity of the nursery (sq m)</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_76} onChange={inputHandler} id="second_form_question_76" name="second_form_question_76" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_77} onChange={inputHandler} id="second_form_question_77" name="second_form_question_77" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_78} onChange={inputHandler} id="second_form_question_78" name="second_form_question_78" required>
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
                            <td><input type="text" value={formData.second_form_question_79} onChange={inputHandler} id="second_form_question_79" name="second_form_question_79" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_80} onChange={inputHandler} id="second_form_question_80" name="second_form_question_80" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_81"></label></th>
                            <th><label htmlFor="second_form_question_82">From Excel/MIS </label></th>
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
                            <th><label htmlFor="second_form_question_83"></label></th>
                            <th><label htmlFor="second_form_question_84"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Cumulative nursery capacity to Area of the Local body (CNCA)[=Cumulative capacity of the nursery/Total area of the Local body (in sq km)]</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_81} onChange={inputHandler} id="second_form_question_81" name="second_form_question_81" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_82} onChange={inputHandler} id="second_form_question_82" name="second_form_question_82" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_83} onChange={inputHandler} id="second_form_question_83" name="second_form_question_83" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_84} onChange={inputHandler} id="second_form_question_84" name="second_form_question_84" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_85"></label></th>
                            <th><label htmlFor="second_form_question_86">Write Number from excel </label></th>
                            <th><label htmlFor="second_form_question_87">geo-tagged photographs betn 01-04-2023 to 31-03-2024</label></th>
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
                            <th><label htmlFor="second_form_question_88"></label></th>
                            <th><label htmlFor="second_form_question_89"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of saplings (Height above 4 feet) present and/or sold by the nursery, during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_85} onChange={inputHandler} id="second_form_question_85" name="second_form_question_85" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_86} onChange={inputHandler} id="second_form_question_86" name="second_form_question_86" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_87} onChange={inputHandler} id="second_form_question_87" name="second_form_question_87" required>
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
                            <td><input type="text" value={formData.second_form_question_88} onChange={inputHandler} id="second_form_question_88" name="second_form_question_88" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_89} onChange={inputHandler} id="second_form_question_89" name="second_form_question_89" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_90"></label></th>
                            <th><label htmlFor="second_form_question_91">No. of areas not less 10000 sq.feet. (For Amrut)</label></th>
                            <th><label htmlFor="second_form_question_92">No. of areas less than 10000 sq.feet.</label></th>
                            <th><label htmlFor="second_form_question_93">Geotagged photographs during 01-04.2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_94">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_95">work Completion Certificate </label></th>
                            <th><label htmlFor="second_form_question_96">Whether Financial Brief stating fund for plantation </label></th>
                            <th><label htmlFor="second_form_question_97">Maintanace plan report</label></th>
                            <th><label htmlFor="second_form_question_98">Check link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_99"></label></th>
                            <th><label htmlFor="second_form_question_100"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.5  Number</td>
                            <td>No. of new green areas created The evaluation will be done based on the number of green areas created. Each green area created will get 10 marks. </td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_90} onChange={inputHandler} id="second_form_question_90" name="second_form_question_90" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_91} onChange={inputHandler} id="second_form_question_91" name="second_form_question_91" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_92} onChange={inputHandler} id="second_form_question_92" name="second_form_question_92" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_93} onChange={inputHandler} id="second_form_question_93" name="second_form_question_93" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.second_form_question_94} onChange={inputHandler} id="second_form_question_94" name="second_form_question_94" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_95} onChange={inputHandler} id="second_form_question_95" name="second_form_question_95" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_96} onChange={inputHandler} id="second_form_question_96" name="second_form_question_96" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_97} onChange={inputHandler} id="second_form_question_97" name="second_form_question_97" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_98} onChange={inputHandler} id="second_form_question_98" name="second_form_question_98" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_99} onChange={inputHandler} id="second_form_question_99" name="second_form_question_99" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_100} onChange={inputHandler} id="second_form_question_100" name="second_form_question_100" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Upkeep:Maintenance of total green areas created during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 Each green area maintained will get 05 marks</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_101"></label></th>
                            <th><label htmlFor="second_form_question_102">Value from MIS</label></th>
                            <th><label htmlFor="second_form_question_103">Geotag photographs (01.04.2023 to 31.03.2023)</label></th>
                            <th><label htmlFor="second_form_question_104">Maintenance Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_105"></label></th>
                            <th><label htmlFor="second_form_question_106"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_101} onChange={inputHandler} id="second_form_question_101" name="second_form_question_101" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_102} onChange={inputHandler} id="second_form_question_102" name="second_form_question_102" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_103} onChange={inputHandler} id="second_form_question_103" name="second_form_question_103" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_104} onChange={inputHandler} id="second_form_question_104" name="second_form_question_104" required>
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
                            <td><input type="text" value={formData.second_form_question_105} onChange={inputHandler} id="second_form_question_105" name="second_form_question_105" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_106} onChange={inputHandler} id="second_form_question_106" name="second_form_question_106" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_107"></label></td>
                            <td><label htmlFor="second_form_question_108"></label></td>
                            <td><label htmlFor="second_form_question_109">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_110"></label></td>

                            <td><label htmlFor="second_form_question_111"></label></td>
                            <td><input type="number" value={formData.second_form_question_107} onChange={inputHandler} id="second_form_question_107" name="second_form_question_107" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_108} onChange={inputHandler} id="second_form_question_108" name="second_form_question_108" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_109} onChange={inputHandler} id="second_form_question_109" name="second_form_question_109" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_110} onChange={inputHandler} id="second_form_question_110" name="second_form_question_110" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_112"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_111} onChange={inputHandler} id="second_form_question_111" name="second_form_question_111" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_112} onChange={inputHandler} id="second_form_question_112" name="second_form_question_112" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_113"></label></td>
                            <td><label htmlFor="second_form_question_114"></label></td>
                            <td><label htmlFor="second_form_question_115">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_116"></label></td>

                            <td><label htmlFor="second_form_question_117"></label></td>
                            <td><input type="number" value={formData.second_form_question_113} onChange={inputHandler} id="second_form_question_113" name="second_form_question_113" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_114} onChange={inputHandler} id="second_form_question_114" name="second_form_question_114" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_115} onChange={inputHandler} id="second_form_question_115" name="second_form_question_115" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_116} onChange={inputHandler} id="second_form_question_116" name="second_form_question_116" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_118"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_117} onChange={inputHandler} id="second_form_question_117" name="second_form_question_117" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_118} onChange={inputHandler} id="second_form_question_118" name="second_form_question_118" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_119"></label></th>
                            <th><label htmlFor="second_form_question_120">Plan prepared</label></th>
                            <th><label htmlFor="second_form_question_121">Authorized by local planning authority</label></th>
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
                            <th><label htmlFor="second_form_question_122"></label></th>
                            <th><label htmlFor="second_form_question_123"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.6</td>
                            <td>GIS/Remote Sensing based land use map</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_119} onChange={inputHandler} id="second_form_question_119" name="second_form_question_119" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_120} onChange={inputHandler} id="second_form_question_120" name="second_form_question_120" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_121} onChange={inputHandler} id="second_form_question_121" name="second_form_question_121" required>
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
                            <td><input type="text" value={formData.second_form_question_122} onChange={inputHandler} id="second_form_question_122" name="second_form_question_122" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_123} onChange={inputHandler} id="second_form_question_123" name="second_form_question_123" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_124"></label></th>
                            <th><label htmlFor="second_form_question_125">Published on ULB website</label></th>
                            <th><label htmlFor="second_form_question_126">Link of the webpage active or not</label></th>
                            <th><label htmlFor="second_form_question_127">check the plan as per proposed green area covered</label></th>
                            <th><label htmlFor="second_form_question_128">write % of proposed tree cover as per plan</label></th>
                            <th><label htmlFor="second_form_question_129">Declaration</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_130"></label></th>
                            <th><label htmlFor="second_form_question_131"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Does the ULB have 33% green cover? </td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_124} onChange={inputHandler} id="second_form_question_124" name="second_form_question_124" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_125} onChange={inputHandler} id="second_form_question_125" name="second_form_question_125" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_126} onChange={inputHandler} id="second_form_question_126" name="second_form_question_126" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_127} onChange={inputHandler} id="second_form_question_127" name="second_form_question_127" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="number" value={formData.second_form_question_128} onChange={inputHandler} id="second_form_question_128" name="second_form_question_128" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_129} onChange={inputHandler} id="second_form_question_129" name="second_form_question_129" required>
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
                            <td><input type="text" value={formData.second_form_question_130} onChange={inputHandler} id="second_form_question_130" name="second_form_question_130" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_131} onChange={inputHandler} id="second_form_question_131" name="second_form_question_131" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th>50</th>
                            <th></th>
                            <th>Does the ULB have a tree plan?</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_132"></label></th>
                            <th><label htmlFor="second_form_question_133">Published on ULB website</label></th>
                            <th><label htmlFor="second_form_question_134">Link of the webpage active or not</label></th>
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
                            <th><label htmlFor="second_form_question_135"></label></th>
                            <th><label htmlFor="second_form_question_136"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>If ULB has achieved 33% green cover and have a Tree plan to increase it further (Tree plan should be published on website) </td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_132} onChange={inputHandler} id="second_form_question_132" name="second_form_question_132" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_133} onChange={inputHandler} id="second_form_question_133" name="second_form_question_133" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_134} onChange={inputHandler} id="second_form_question_134" name="second_form_question_134" required>
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
                            <td><input type="text" value={formData.second_form_question_135} onChange={inputHandler} id="second_form_question_135" name="second_form_question_135" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_136} onChange={inputHandler} id="second_form_question_136" name="second_form_question_136" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_137"></label></td>
                            <td><label htmlFor="second_form_question_138"></label></td>
                            <td><label htmlFor="second_form_question_139">If ULB has not achieved 33% green cover and has a Tree Plan to achieve a minimum 33% green cover (Tree plan should be published on website)</label></td>
                            <td><label htmlFor="second_form_question_140">50</label></td>

                            <td><label htmlFor="second_form_question_141"></label></td>
                            <td><select value={formData.second_form_question_137} onChange={inputHandler} id="second_form_question_137" name="second_form_question_137" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_138} onChange={inputHandler} id="second_form_question_138" name="second_form_question_138" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_139} onChange={inputHandler} id="second_form_question_139" name="second_form_question_139" required>
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
                            <td><input type="text" value={formData.second_form_question_140} onChange={inputHandler} id="second_form_question_140" name="second_form_question_140" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_141} onChange={inputHandler} id="second_form_question_141" name="second_form_question_141" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_142"></label></td>
                            <td><label htmlFor="second_form_question_143"></label></td>
                            <td><label htmlFor="second_form_question_144">If ULB has achieved 33% green cover but they have not prepared plan to increase beyond 33% green cover</label></td>
                            <td><label htmlFor="second_form_question_145">50</label></td>

                            <td><label htmlFor="second_form_question_146"></label></td>
                            <td><select value={formData.second_form_question_142} onChange={inputHandler} id="second_form_question_142" name="second_form_question_142" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_143} onChange={inputHandler} id="second_form_question_143" name="second_form_question_143" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_144} onChange={inputHandler} id="second_form_question_144" name="second_form_question_144" required>
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
                            <td><input type="text" value={formData.second_form_question_145} onChange={inputHandler} id="second_form_question_145" name="second_form_question_145" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_146} onChange={inputHandler} id="second_form_question_146" name="second_form_question_146" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_147"></label></td>
                            <td><label htmlFor="second_form_question_148"></label></td>
                            <td><label htmlFor="second_form_question_149">If ULB has not achieved 33% green cover and they have not prepared plan to achieve 33% green cover</label></td>
                            <td><label htmlFor="second_form_question_150">50</label></td>

                            <td><label htmlFor="second_form_question_151"></label></td>
                            <td><select value={formData.second_form_question_147} onChange={inputHandler} id="second_form_question_147" name="second_form_question_147" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_148} onChange={inputHandler} id="second_form_question_148" name="second_form_question_148" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_149} onChange={inputHandler} id="second_form_question_149" name="second_form_question_149" required>
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
                            <td><input type="text" value={formData.second_form_question_150} onChange={inputHandler} id="second_form_question_150" name="second_form_question_150" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_151} onChange={inputHandler} id="second_form_question_151" name="second_form_question_151" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                        

                    <thead>
                        <tr>
                            <th>50</th>
                            <th></th>
                            <th>Implementation of the Tree Plan</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_152"></label></th>
                            <th><label htmlFor="second_form_question_153">Check work completion certificate </label></th>
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
                            <th><label htmlFor="second_form_question_154"></label></th>
                            <th><label htmlFor="second_form_question_155"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Achieved milestone for the Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_152} onChange={inputHandler} id="second_form_question_152" name="second_form_question_152" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_153} onChange={inputHandler} id="second_form_question_153" name="second_form_question_153" required>
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
                            <td><input type="text" value={formData.second_form_question_154} onChange={inputHandler} id="second_form_question_154" name="second_form_question_154" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_155} onChange={inputHandler} id="second_form_question_155" name="second_form_question_155" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_156"></label></td>
                            <td><label htmlFor="second_form_question_157"></label></td>
                            <td><label htmlFor="second_form_question_158">Haven’t achieved milestone for the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="second_form_question_159"></label></td>

                            <td></td>
                            <td><select value={formData.second_form_question_156} onChange={inputHandler} id="second_form_question_156" name="second_form_question_156" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_157} onChange={inputHandler} id="second_form_question_157" name="second_form_question_157" required>
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
                            <td><input type="text" value={formData.second_form_question_158} onChange={inputHandler} id="second_form_question_158" name="second_form_question_158" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_159} onChange={inputHandler} id="second_form_question_159" name="second_form_question_159" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_160"></label></th>
                            <th><label htmlFor="second_form_question_161">Formation Date (From MIS)</label></th>
                            <th><label htmlFor="second_form_question_162">BMC Formation Details</label></th>
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
                            <th><label htmlFor="second_form_question_163"></label></th>
                            <th><label htmlFor="second_form_question_164"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.1.7 (Yes/No)</td>
                            <td>Formation of BMC</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_160} onChange={inputHandler} id="second_form_question_160" name="second_form_question_160" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_161} onChange={inputHandler} id="second_form_question_161" name="second_form_question_161" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_162} onChange={inputHandler} id="second_form_question_162" name="second_form_question_162" required>
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
                            <td><input type="text" value={formData.second_form_question_163} onChange={inputHandler} id="second_form_question_163" name="second_form_question_163" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_164} onChange={inputHandler} id="second_form_question_164" name="second_form_question_164" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_165"></label></th>
                            <th><label htmlFor="second_form_question_166">Only one MOM date in Q- April-June23</label></th>
                            <th><label htmlFor="second_form_question_167">Only one MOM date in Q- July-Sept23</label></th>
                            <th><label htmlFor="second_form_question_168">Only one MOM date in Q- Oct-Dec23</label></th>
                            <th><label htmlFor="second_form_question_169">Only one MOM date in Q- Jan-March24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_170"></label></th>
                            <th><label htmlFor="second_form_question_171"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Number of meetings conducted by BMC (5 marks for each meeting)</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_165} onChange={inputHandler} id="second_form_question_165" name="second_form_question_165" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_166} onChange={inputHandler} id="second_form_question_166" name="second_form_question_166" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_167} onChange={inputHandler} id="second_form_question_167" name="second_form_question_167" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_168} onChange={inputHandler} id="second_form_question_168" name="second_form_question_168" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_169} onChange={inputHandler} id="second_form_question_169" name="second_form_question_169" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_170} onChange={inputHandler} id="second_form_question_170" name="second_form_question_170" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_171} onChange={inputHandler} id="second_form_question_171" name="second_form_question_171" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
    
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_172"></label></th>
                            <th><label htmlFor="second_form_question_173">Date of PBR published on or Before MV04</label></th>
                            <th><label htmlFor="second_form_question_174">Certificate of  approval by BMC/TSG/MSBB</label></th>
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
                            <th><label htmlFor="second_form_question_175"></label></th>
                            <th><label htmlFor="second_form_question_176"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>PBR: Prepared and approved by BMC during and before Majhi Vasundhara Abhiyan 4.0</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_172} onChange={inputHandler} id="second_form_question_172" name="second_form_question_172" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_173} onChange={inputHandler} id="second_form_question_173" name="second_form_question_173" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_174} onChange={inputHandler} id="second_form_question_174" name="second_form_question_174" required>
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
                            <td><input type="text" value={formData.second_form_question_175} onChange={inputHandler} id="second_form_question_175" name="second_form_question_175" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_176} onChange={inputHandler} id="second_form_question_176" name="second_form_question_176" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                    

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_177"></label></th>
                            <th><label htmlFor="second_form_question_178">Submission of PBR to MSBB(If submission before 15March 2024 and no receipt still Yes)</label></th>
                            <th><label htmlFor="second_form_question_179">Date of Ackowledgement receipt of submission of PBR to MSBB</label></th>
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
                            <th><label htmlFor="second_form_question_180"></label></th>
                            <th><label htmlFor="second_form_question_181"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Submission of PBR to MSBB</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_177} onChange={inputHandler} id="second_form_question_177" name="second_form_question_177" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_178} onChange={inputHandler} id="second_form_question_178" name="second_form_question_178" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_179} onChange={inputHandler} id="second_form_question_179" name="second_form_question_179" required>
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
                            <td><input type="text" value={formData.second_form_question_180} onChange={inputHandler} id="second_form_question_180" name="second_form_question_180" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_181} onChange={inputHandler} id="second_form_question_181" name="second_form_question_181" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_182"></label></th>
                            <th><label htmlFor="second_form_question_183">Copy of BMC action Plan</label></th>
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
                            <th><label htmlFor="second_form_question_184"></label></th>
                            <th><label htmlFor="second_form_question_185"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>BMC Action Plan</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_182} onChange={inputHandler} id="second_form_question_182" name="second_form_question_182" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_183} onChange={inputHandler} id="second_form_question_183" name="second_form_question_183" required>
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
                            <td><input type="text" value={formData.second_form_question_184} onChange={inputHandler} id="second_form_question_184" name="second_form_question_184" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_185} onChange={inputHandler} id="second_form_question_185" name="second_form_question_185" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>30</th>
                            <th>1.1.8</th>
                            <th>Harit Brand Certification during MVA 4.0 period</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_186"></label></th>
                            <th><label htmlFor="second_form_question_187">check HARIT Brand Certificate betn 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_188">Date of Certification</label></th>
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
                            <th><label htmlFor="second_form_question_189"></label></th>
                            <th><label htmlFor="second_form_question_190"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_186} onChange={inputHandler} id="second_form_question_186" name="second_form_question_186" required>
                            <option value="">Choose one</option>
                            <option value="ULB Re-certified with HARIT ">Brand </option>
                            <option value="ULB certified with HARIT Brand ">ULB certified with HARIT Brand </option>
                            </select></td>
                            <td><select value={formData.second_form_question_187} onChange={inputHandler} id="second_form_question_187" name="second_form_question_187" required>
                            <option value="">Choose one</option>
                            <option value="ULB Re-certified with HARIT ">Brand </option>
                            <option value="ULB certified with HARIT Brand ">ULB certified with HARIT Brand </option>
                            </select></td>
                            <td><input type="date" value={formData.second_form_question_188} onChange={inputHandler} id="second_form_question_188" name="second_form_question_188" placeholder="dd-mm-yyyy" required/></td>
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
                            <td><input type="text" value={formData.second_form_question_189} onChange={inputHandler} id="second_form_question_189" name="second_form_question_189" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_190} onChange={inputHandler} id="second_form_question_190" name="second_form_question_190" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>70</th>
                            <th></th>
                            <th>Usage of compost-% of Compost sold/ self utilized</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_191"></label></th>
                            <th><label htmlFor="second_form_question_192">% of compost sold utilized</label></th>
                            <th><label htmlFor="second_form_question_193">geo-tagged photographs of compost plants, shops, even one photograph is shown write Yes</label></th>
                            <th><label htmlFor="second_form_question_194">logbook</label></th>
                            <th><label htmlFor="second_form_question_195">Location of compost plant</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_196"></label></th>
                            <th><label htmlFor="second_form_question_197"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_191} onChange={inputHandler} id="second_form_question_191" name="second_form_question_191" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_192} onChange={inputHandler} id="second_form_question_192" name="second_form_question_192" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_193} onChange={inputHandler} id="second_form_question_193" name="second_form_question_193" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_194} onChange={inputHandler} id="second_form_question_194" name="second_form_question_194" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_195} onChange={inputHandler} id="second_form_question_195" name="second_form_question_195" required>
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
                            <td><input type="text" value={formData.second_form_question_196} onChange={inputHandler} id="second_form_question_196" name="second_form_question_196" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_197} onChange={inputHandler} id="second_form_question_197" name="second_form_question_197" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th>1.2.1</th>
                            <th>Percentage of solid waste segregated at source and collected</th>
                            <th>50</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_198"></label></th>
                            <th><label htmlFor="second_form_question_199">Amount Of Solid Waste Segregated (MT) SBM/logbook, from MIS</label></th>
                            <th><label htmlFor="second_form_question_200">Geo tag photographs of door to door collection</label></th>
                            <th><label htmlFor="second_form_question_201">LOGBOOK</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_202"></label></th>
                            <th><label htmlFor="second_form_question_203"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>25</td>
                            <td>1(a)</td>
                            <td>Segregation at source</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_198} onChange={inputHandler} id="second_form_question_198" name="second_form_question_198" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_199} onChange={inputHandler} id="second_form_question_199" name="second_form_question_199" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_200} onChange={inputHandler} id="second_form_question_200" name="second_form_question_200" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_201} onChange={inputHandler} id="second_form_question_201" name="second_form_question_201" required>
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
                            <td><input type="text" value={formData.second_form_question_202} onChange={inputHandler} id="second_form_question_202" name="second_form_question_202" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_203} onChange={inputHandler} id="second_form_question_203" name="second_form_question_203" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td>25</td>
                            <td>1(b)</td>
                            <td>Collection</td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_204"></label></td>
                            <td><label htmlFor="second_form_question_205">Amount Of Solid Waste collected (MT) SBM/logbook, from MIS</label></td>
                            <td><label htmlFor="second_form_question_206">Geo tag photographs of door to door collection</label></td>
                            <td><label htmlFor="second_form_question_207">LOGBOOK</label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_208"></label></td>
                            <td><label htmlFor="second_form_question_209"></label></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_204} onChange={inputHandler} id="second_form_question_204" name="second_form_question_204" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_205} onChange={inputHandler} id="second_form_question_205" name="second_form_question_205" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_206} onChange={inputHandler} id="second_form_question_206" name="second_form_question_206" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_207} onChange={inputHandler} id="second_form_question_207" name="second_form_question_207" required>
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
                            <td><input type="text" value={formData.second_form_question_208} onChange={inputHandler} id="second_form_question_208" name="second_form_question_208" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_209} onChange={inputHandler} id="second_form_question_209" name="second_form_question_209" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th></th>
                            <th>GFC Rating of the cities</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_210"></label></th>
                            <th><label htmlFor="second_form_question_211">GFC rating Certificate (Valid during 01-04-2023 to 31-03-2024)</label></th>
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
                            <th><label htmlFor="second_form_question_212"></label></th>
                            <th><label htmlFor="second_form_question_213"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_210} onChange={inputHandler} id="second_form_question_210" name="second_form_question_210" required>
                            <option value="">Chooseone</option>
                            <option value="7 star">7 star</option>
                            <option value="5 star">5 star</option>
                            <option value="3 star">3 star</option>
                            <option value="1 star">1 star</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_211} onChange={inputHandler} id="second_form_question_211" name="second_form_question_211" required>
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
                            <td><input type="text" value={formData.second_form_question_212} onChange={inputHandler} id="second_form_question_212" name="second_form_question_212" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_213} onChange={inputHandler} id="second_form_question_213" name="second_form_question_213" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>1.2.2</th>
                            <th>% of wet waste processed</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_214"></label></th>
                            <th><label htmlFor="second_form_question_215">Total amt. of wet waste Processed in MT %</label></th>
                            <th><label htmlFor="second_form_question_216">Log book/SBM data/Monthly Report</label></th>
                            <th><label htmlFor="second_form_question_217">Geo tag photographs of compost/Biogass plants</label></th>
                            <th><label htmlFor="second_form_question_218">Location of Compost/Biogas Plant</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_219"></label></th>
                            <th><label htmlFor="second_form_question_220"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_214} onChange={inputHandler} id="second_form_question_214" name="second_form_question_214" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_215} onChange={inputHandler} id="second_form_question_215" name="second_form_question_215" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_216} onChange={inputHandler} id="second_form_question_216" name="second_form_question_216" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_217} onChange={inputHandler} id="second_form_question_217" name="second_form_question_217" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_218} onChange={inputHandler} id="second_form_question_218" name="second_form_question_218" required>
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
                            <td><input type="text" value={formData.second_form_question_219} onChange={inputHandler} id="second_form_question_219" name="second_form_question_219" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_220} onChange={inputHandler} id="second_form_question_220" name="second_form_question_220" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_221"></label></th>
                            <th><label htmlFor="second_form_question_222">geotagged photographs of functional MRF Centre </label></th>
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
                            <th><label htmlFor="second_form_question_223"></label></th>
                            <th><label htmlFor="second_form_question_224"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.2.3(Yes/No)</td>
                            <td>Presence of functional MRF center</td>
                            <td>10</td>

                            <td></td>
                            <td><select value={formData.second_form_question_221} onChange={inputHandler} id="second_form_question_221" name="second_form_question_221" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_222} onChange={inputHandler} id="second_form_question_222" name="second_form_question_222" required>
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
                            <td><input type="text" value={formData.second_form_question_223} onChange={inputHandler} id="second_form_question_223" name="second_form_question_223" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_224} onChange={inputHandler} id="second_form_question_224" name="second_form_question_224" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>10</th>
                            <th></th>
                            <th>Secondary Segregation of dry waste collected </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_225"></label></th>
                            <th><label htmlFor="second_form_question_226">In %</label></th>
                            <th><label htmlFor="second_form_question_227">Mechanisam for collection of dry waste (examine how efficiently practicing recycling/treatment/Final disposal of dry waste)</label></th>
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
                            <th><label htmlFor="second_form_question_228"></label></th>
                            <th><label htmlFor="second_form_question_229"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Status</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_225} onChange={inputHandler} id="second_form_question_225" name="second_form_question_225" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_226} onChange={inputHandler} id="second_form_question_226" name="second_form_question_226" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_227} onChange={inputHandler} id="second_form_question_227" name="second_form_question_227" required>
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
                            <td><input type="text" value={formData.second_form_question_228} onChange={inputHandler} id="second_form_question_228" name="second_form_question_228" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_229} onChange={inputHandler} id="second_form_question_229" name="second_form_question_229" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_230">30</label></td>
                            <td><label htmlFor="second_form_question_231"></label></td>
                            <td><label htmlFor="second_form_question_232">Dry waste processing /disposal</label></td>
                            <td><label htmlFor="second_form_question_233"></label></td>

                            <td><label htmlFor="second_form_question_234"></label></td>
                            <td><input type="number" value={formData.second_form_question_230} onChange={inputHandler} id="second_form_question_230" name="second_form_question_230" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_231} onChange={inputHandler} id="second_form_question_231" name="second_form_question_231" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_232} onChange={inputHandler} id="second_form_question_232" name="second_form_question_232" required>
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
                            <td><input type="text" value={formData.second_form_question_233} onChange={inputHandler} id="second_form_question_233" name="second_form_question_233" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_234} onChange={inputHandler} id="second_form_question_234" name="second_form_question_234" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>% of dry waste processed/ disposal by the authorized parties</th>
                            <th></th>

                            <th></th>
                            <th><label htmlFor="second_form_question_235"></label></th>
                            <th><label htmlFor="second_form_question_236">% of dry waste recycled/treated/scientifically disposed in MT</label></th>
                            <th><label htmlFor="second_form_question_237">Agreement/montly report/logbook</label></th>
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
                            <th><label htmlFor="second_form_question_238"></label></th>
                            <th><label htmlFor="second_form_question_239"></label></th>
                        </tr>
                    </thead>                                          
                    <tbody>
                    <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_235} onChange={inputHandler} id="second_form_question_235" name="second_form_question_235" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_236} onChange={inputHandler} id="second_form_question_236" name="second_form_question_236" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_237} onChange={inputHandler} id="second_form_question_237" name="second_form_question_237" required>
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
                            <td><input type="text" value={formData.second_form_question_238} onChange={inputHandler} id="second_form_question_238" name="second_form_question_238" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_239} onChange={inputHandler} id="second_form_question_239" name="second_form_question_239" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>1.2.4</th>
                            <th>Scientific treatment of legacy solid waste</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_240"></label></th>
                            <th><label htmlFor="second_form_question_241">Stages</label></th>
                            <th><label htmlFor="second_form_question_242">location of the land reclaimed/reused on link provided</label></th>
                            <th><label htmlFor="second_form_question_243">Geo tagged Photographs of before land reclaimed</label></th>
                            <th><label htmlFor="second_form_question_244">Geo tagged Photographs of after land reclaimed</label></th>
                            <th><label htmlFor="second_form_question_245">Completion Certificate/Tender awarded  certificate/No Legacy Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_246"></label></th>
                            <th><label htmlFor="second_form_question_247"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_240} onChange={inputHandler} id="second_form_question_240" name="second_form_question_240" required>
                            <option value="">Choose one</option>
                            <option value="a. 100% of legacy waste treated and 
                                    processed scientifically
                                    b. 100% Land reclaimed
                                    c. 100% collection, segregation and 
                                    treatment of current waste">a. 100% of legacy waste treated and 
                                    processed scientifically
                                    b. 100% Land reclaimed
                                    c. 100% collection, segregation and 
                                    treatment of current waste</option>
                            <option value="75% to less than 100% of legacy waste 
                                    is treated and processed">75% to less than 100% of legacy waste 
                                    is treated and processed</option>
                            <option value="25% to less than 75% of legacy waste is 
                                    treated and processed">25% to less than 75% of legacy waste is 
                                    treated and processed</option>
                            <option value="Less than 25% of legacy waste is 
                                    treated and processed">Less than 25% of legacy waste is 
                                    treated and processed</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_241} onChange={inputHandler} id="second_form_question_241" name="second_form_question_241" required>
                            <option value="">Choose one</option>
                            <option value="a. 100% of legacy waste treated and 
                                    processed scientifically
                                    b. 100% Land reclaimed
                                    c. 100% collection, segregation and 
                                    treatment of current waste">a. 100% of legacy waste treated and 
                                    processed scientifically
                                    b. 100% Land reclaimed
                                    c. 100% collection, segregation and 
                                    treatment of current waste</option>
                            <option value="75% to less than 100% of legacy waste 
                                    is treated and processed">75% to less than 100% of legacy waste 
                                    is treated and processed</option>
                            <option value="25% to less than 75% of legacy waste is 
                                    treated and processed">25% to less than 75% of legacy waste is 
                                    treated and processed</option>
                            <option value="Less than 25% of legacy waste is 
                                    treated and processed">Less than 25% of legacy waste is 
                                    treated and processed</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_242} onChange={inputHandler} id="second_form_question_242" name="second_form_question_242" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_243} onChange={inputHandler} id="second_form_question_243" name="second_form_question_243" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_244} onChange={inputHandler} id="second_form_question_244" name="second_form_question_244" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_245} onChange={inputHandler} id="second_form_question_245" name="second_form_question_245" required>
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
                            <td><input type="text" value={formData.second_form_question_246} onChange={inputHandler} id="second_form_question_246" name="second_form_question_246" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_247} onChange={inputHandler} id="second_form_question_247" name="second_form_question_247" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_248"></label></th>
                            <th><label htmlFor="second_form_question_249">Number of drives conducted on Single Use Plastic (SUP) ban from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_250">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_251">No. of Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="second_form_question_252">No. of  Geotagged photos with backdrop/banner of single use plastic</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_253"></label></th>
                            <th><label htmlFor="second_form_question_254"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.2.5</td>
                            <td>Awareness campaigns for Single Use Plastic ban.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_248} onChange={inputHandler} id="second_form_question_248" name="second_form_question_248" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_249} onChange={inputHandler} id="second_form_question_249" name="second_form_question_249" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_250} onChange={inputHandler} id="second_form_question_250" name="second_form_question_250" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_251} onChange={inputHandler} id="second_form_question_251" name="second_form_question_251" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_252} onChange={inputHandler} id="second_form_question_252" name="second_form_question_252" required>
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
                            <td><input type="text" value={formData.second_form_question_253} onChange={inputHandler} id="second_form_question_253" name="second_form_question_253" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_254} onChange={inputHandler} id="second_form_question_254" name="second_form_question_254" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>75</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_255"></label></th>
                            <th><label htmlFor="second_form_question_256">Number of drives conducted on ALTERNATIVES of plastic  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_257">Social Media Link during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="second_form_question_258">No. of Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="second_form_question_259">No. of  Geotagged photos with backdrop/banner of alternatives of plastic</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_260"></label></th>
                            <th><label htmlFor="second_form_question_261"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Awareness campaign on alternatives of plastic.</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_255} onChange={inputHandler} id="second_form_question_255" name="second_form_question_255" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_256} onChange={inputHandler} id="second_form_question_256" name="second_form_question_256" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_257} onChange={inputHandler} id="second_form_question_257" name="second_form_question_257" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_258} onChange={inputHandler} id="second_form_question_258" name="second_form_question_258" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_259} onChange={inputHandler} id="second_form_question_259" name="second_form_question_259" required>
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
                            <td><input type="text" value={formData.second_form_question_260} onChange={inputHandler} id="second_form_question_260" name="second_form_question_260" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_261} onChange={inputHandler} id="second_form_question_261" name="second_form_question_261" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>200</th>
                            <th></th>
                            <th>Number of reports, updated on compliance module of CPCB portal </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_262"></label></th>
                            <th><label htmlFor="second_form_question_263">No. of daily Reports (Annual cumulative) from CPCB portal</label></th>
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
                            <th><label htmlFor="second_form_question_264"></label></th>
                            <th><label htmlFor="second_form_question_265"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_262} onChange={inputHandler} id="second_form_question_262" name="second_form_question_262" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_263} onChange={inputHandler} id="second_form_question_263" name="second_form_question_263" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_264} onChange={inputHandler} id="second_form_question_264" name="second_form_question_264" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_265} onChange={inputHandler} id="second_form_question_265" name="second_form_question_265" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_266"></label></th>
                            <th><label htmlFor="second_form_question_267">Self Certification</label></th>
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
                            <th><label htmlFor="second_form_question_268"></label></th>
                            <th><label htmlFor="second_form_question_269"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_266} onChange={inputHandler} id="second_form_question_266" name="second_form_question_266" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_267} onChange={inputHandler} id="second_form_question_267" name="second_form_question_267" required>
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
                            <td><input type="text" value={formData.second_form_question_268} onChange={inputHandler} id="second_form_question_268" name="second_form_question_268" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_269} onChange={inputHandler} id="second_form_question_269" name="second_form_question_269" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_270"></label></th>
                            <th><label htmlFor="second_form_question_271">Percentage of Biomedical waste</label></th>
                            <th><label htmlFor="second_form_question_272">Agreement with CBMWTF or MPCB authorized Bio-medical waste management vendors</label></th>
                            <th><label htmlFor="second_form_question_273">Logbook/SBM</label></th>
                            <th><label htmlFor="second_form_question_274">Geotagged photos(should have location & Date)</label></th>
                            <th><label htmlFor="second_form_question_275">Functional Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_276"></label></th>
                            <th><label htmlFor="second_form_question_277"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of Biomedical waste disposed scientifically</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_270} onChange={inputHandler} id="second_form_question_270" name="second_form_question_270" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_271} onChange={inputHandler} id="second_form_question_271" name="second_form_question_271" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_272} onChange={inputHandler} id="second_form_question_272" name="second_form_question_272" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_273} onChange={inputHandler} id="second_form_question_273" name="second_form_question_273" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_274} onChange={inputHandler} id="second_form_question_274" name="second_form_question_274" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_275} onChange={inputHandler} id="second_form_question_275" name="second_form_question_275" required>
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
                            <td><input type="text" value={formData.second_form_question_276} onChange={inputHandler} id="second_form_question_276" name="second_form_question_276" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_277} onChange={inputHandler} id="second_form_question_277" name="second_form_question_277" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_278"></label></th>
                            <th><label htmlFor="second_form_question_279">details of awareness activities on proper segregation of E –waste from Excel</label></th>
                            <th><label htmlFor="second_form_question_280">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_281">photos checked on social media</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_282"></label></th>
                            <th><label htmlFor="second_form_question_283"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>1.2.7</td>
                            <td>Awareness activities on proper segregation of E-waste</td>
                            <td>10</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_278} onChange={inputHandler} id="second_form_question_278" name="second_form_question_278" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_279} onChange={inputHandler} id="second_form_question_279" name="second_form_question_279" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_280} onChange={inputHandler} id="second_form_question_280" name="second_form_question_280" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_281} onChange={inputHandler} id="second_form_question_281" name="second_form_question_281" required>
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
                            <td><input type="text" value={formData.second_form_question_282} onChange={inputHandler} id="second_form_question_282" name="second_form_question_282" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_283} onChange={inputHandler} id="second_form_question_283" name="second_form_question_283" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_284"></label></th>
                            <th><label htmlFor="second_form_question_285">Work Order or other document showing E-waste collection</label></th>
                            <th><label htmlFor="second_form_question_286">Logbook</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_287"></label></th>
                            <th><label htmlFor="second_form_question_288"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Mechanism for E-waste collection</td>
                            <td>10</td>

                            <td></td>
                            <td><select value={formData.second_form_question_284} onChange={inputHandler} id="second_form_question_284" name="second_form_question_284" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_285} onChange={inputHandler} id="second_form_question_285" name="second_form_question_285" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_286} onChange={inputHandler} id="second_form_question_286" name="second_form_question_286" required>
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
                            <td><input type="text" value={formData.second_form_question_287} onChange={inputHandler} id="second_form_question_287" name="second_form_question_287" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_288} onChange={inputHandler} id="second_form_question_288" name="second_form_question_288" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_289"></label></th>
                            <th><label htmlFor="second_form_question_290">Geotag photos</label></th>
                            <th><label htmlFor="second_form_question_291">Type of Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_292"></label></th>
                            <th><label htmlFor="second_form_question_293"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Presence of functional collection center</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_289} onChange={inputHandler} id="second_form_question_289" name="second_form_question_289" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_290} onChange={inputHandler} id="second_form_question_290" name="second_form_question_290" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_291} onChange={inputHandler} id="second_form_question_291" name="second_form_question_291" required>
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
                            <td><input type="text" value={formData.second_form_question_292} onChange={inputHandler} id="second_form_question_292" name="second_form_question_292" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_293} onChange={inputHandler} id="second_form_question_293" name="second_form_question_293" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_294"></label></th>
                            <th><label htmlFor="second_form_question_295">Amount of E-waste</label></th>
                            <th><label htmlFor="second_form_question_296">Agreement of MPCB with authorized dismantler</label></th>
                            <th><label htmlFor="second_form_question_297">No. of photos showing segregation of e-waste</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_298"></label></th>
                            <th><label htmlFor="second_form_question_299"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Amount of E-waste processed scientifically/responsibly (in kg) by authorized dismantler or recycler</td>
                            <td>10</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_294} onChange={inputHandler} id="second_form_question_294" name="second_form_question_294" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_295} onChange={inputHandler} id="second_form_question_295" name="second_form_question_295" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_296} onChange={inputHandler} id="second_form_question_296" name="second_form_question_296" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_297} onChange={inputHandler} id="second_form_question_297" name="second_form_question_297" required>
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
                            <td><input type="text" value={formData.second_form_question_298} onChange={inputHandler} id="second_form_question_298" name="second_form_question_298" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_299} onChange={inputHandler} id="second_form_question_299" name="second_form_question_299" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>1.2.8</th>
                            <th>ODF Status </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_300"></label></th>
                            <th><label htmlFor="second_form_question_301">Type of Certificate</label></th>
                            <th><label htmlFor="second_form_question_302">Date Of Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th> 
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_303"></label></th>
                            <th><label htmlFor="second_form_question_304"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_300} onChange={inputHandler} id="second_form_question_300" name="second_form_question_300" required>
                            <option value="">Choose one</option>
                            <option value="Water +">Water +</option>
                            <option value="ODF ++">ODF ++</option>
                            <option value="ODF+">ODF+</option>
                            </select></td>
                            <td><select value={formData.second_form_question_301} onChange={inputHandler} id="second_form_question_301" name="second_form_question_301" required>
                            <option value="">Choose one</option>
                            <option value="Water +">Water +</option>
                            <option value="ODF ++">ODF ++</option>
                            <option value="ODF+">ODF+</option>
                            </select></td>
                            <td><input type="date" value={formData.second_form_question_302} onChange={inputHandler} id="second_form_question_302" name="second_form_question_302" placeholder="dd-mm-yyyy" required /></td>
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
                            <td><input type="text" value={formData.second_form_question_303} onChange={inputHandler} id="second_form_question_303" name="second_form_question_303" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_304} onChange={inputHandler} id="second_form_question_304" name="second_form_question_304" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                   

                    <thead>
                        <tr>
                            <th></th>
                            <th>2.1</th>
                            <th>Air quality monitoring report from – MoEFCC recognized/NABL accredited labs</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_305"></label></th>
                            <th><label htmlFor="second_form_question_306">No. of Air Quality Monitoring Reports in 01-04-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_307">No. of Air Quality Monitoring Reports in 01-05-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_308">No. of Air Quality Monitoring Reports in 01-06-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_309">No. of Air Quality Monitoring Reports in 01-07-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_310">No. of Air Quality Monitoring Reports in 01-08-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_311">No. of Air Quality Monitoring Reports in 01-09-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_312">No. of Air Quality Monitoring Reports in 01-10-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_313">No. of Air Quality Monitoring Reports in 01-11-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_314">No. of Air Quality Monitoring Reports in 01-12-2023 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_315">No. of Air Quality Monitoring Reports in 01-01-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_316">No. of Air Quality Monitoring Reports in 01-02-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_317">No. of Air Quality Monitoring Reports in 01-03-2024 from MoEFCC recognized/NABL accredited labs</label></th>
                            <th><label htmlFor="second_form_question_318"></label></th>
                            <th><label htmlFor="second_form_question_319"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total number of functional charging points available at charging stations</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_305} onChange={inputHandler} id="second_form_question_305" name="second_form_question_305" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_306} onChange={inputHandler} id="second_form_question_306" name="second_form_question_306" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_307} onChange={inputHandler} id="second_form_question_307" name="second_form_question_307" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_308} onChange={inputHandler} id="second_form_question_308" name="second_form_question_308" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_309} onChange={inputHandler} id="second_form_question_309" name="second_form_question_309" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_310} onChange={inputHandler} id="second_form_question_310" name="second_form_question_310" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_311} onChange={inputHandler} id="second_form_question_311" name="second_form_question_311" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_312} onChange={inputHandler} id="second_form_question_312" name="second_form_question_312" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_313} onChange={inputHandler} id="second_form_question_313" name="second_form_question_313" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_314} onChange={inputHandler} id="second_form_question_314" name="second_form_question_314" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_315} onChange={inputHandler} id="second_form_question_315" name="second_form_question_315" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_316} onChange={inputHandler} id="second_form_question_316" name="second_form_question_316" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_317} onChange={inputHandler} id="second_form_question_317" name="second_form_question_317" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_318} onChange={inputHandler} id="second_form_question_318" name="second_form_question_318" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_319} onChange={inputHandler} id="second_form_question_319" name="second_form_question_319" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_320"></label></th>
                            <th><label htmlFor="second_form_question_321">total Number of AQM stations, including visible public display</label></th>
                            <th><label htmlFor="second_form_question_322">total Number of AQM stations, without visible public display</label></th>
                            <th><label htmlFor="second_form_question_323">No. of Geotagging photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_324"></label></th>
                            <th><label htmlFor="second_form_question_325"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of Air Quality Monitoring stations, including visible public display</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_320} onChange={inputHandler} id="second_form_question_320" name="second_form_question_320" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_321} onChange={inputHandler} id="second_form_question_321" name="second_form_question_321" autoComplete='off' placeholder='Enter nunumber' required /></td>
                            <td><select value={formData.second_form_question_322} onChange={inputHandler} id="second_form_question_322" name="second_form_question_322" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_323} onChange={inputHandler} id="second_form_question_323" name="second_form_question_323" required>
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
                            <td><input type="text" value={formData.second_form_question_324} onChange={inputHandler} id="second_form_question_324" name="second_form_question_324" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_325} onChange={inputHandler} id="second_form_question_325" name="second_form_question_325" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_326">(Relative Marking)</label></td>
                            <td><label htmlFor="second_form_question_327"></label></td>
                            <td><label htmlFor="second_form_question_328">Number of Air Quality Monitoring stations, without visible public display</label></td>
                            <td><label htmlFor="second_form_question_329">30</label></td>

                            <td><label htmlFor="second_form_question_330"></label></td>
                            <td><input type="number" value={formData.second_form_question_326} onChange={inputHandler} id="second_form_question_326" name="second_form_question_326" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_327} onChange={inputHandler} id="second_form_question_327" name="second_form_question_327" autoComplete='off' placeholder='Enter nunumber' required /></td>
                            <td><select value={formData.second_form_question_328} onChange={inputHandler} id="second_form_question_328" name="second_form_question_328" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_329} onChange={inputHandler} id="second_form_question_329" name="second_form_question_329" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_331"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_330} onChange={inputHandler} id="second_form_question_330" name="second_form_question_330" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_331} onChange={inputHandler} id="second_form_question_331" name="second_form_question_331" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_332"></label></th>
                            <th><label htmlFor="second_form_question_333">Notification for ban of firecrackers on official letter head</label></th>
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
                            <th><label htmlFor="second_form_question_334"></label></th>
                            <th><label htmlFor="second_form_question_335"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>2.2.1 (Yes/No)</td>
                            <td>Copy of order – ban on sale and use of firecrackers</td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.second_form_question_332} onChange={inputHandler} id="second_form_question_332" name="second_form_question_332" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_333} onChange={inputHandler} id="second_form_question_333" name="second_form_question_333" required>
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
                            <td><input type="text" value={formData.second_form_question_334} onChange={inputHandler} id="second_form_question_334" name="second_form_question_334" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_335} onChange={inputHandler} id="second_form_question_335" name="second_form_question_335" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_336"></label></th>
                            <th><label htmlFor="second_form_question_337">Number of awareness conducted on FIRE CRACKERS from excel during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="second_form_question_338">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_339">No. of  Geotagged photos with backdrop/banner of GREEN FESTIVAL during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_340"></label></th>
                            <th><label htmlFor="second_form_question_341"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of awareness event/initiative taken up by Local body</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_336} onChange={inputHandler} id="second_form_question_336" name="second_form_question_336" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_337} onChange={inputHandler} id="second_form_question_337" name="second_form_question_337" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_338} onChange={inputHandler} id="second_form_question_338" name="second_form_question_338" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_339} onChange={inputHandler} id="second_form_question_339" name="second_form_question_339" required>
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
                            <td><input type="text" value={formData.second_form_question_340} onChange={inputHandler} id="second_form_question_340" name="second_form_question_340" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_341} onChange={inputHandler} id="second_form_question_341" name="second_form_question_341" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>75</th>
                            <th></th>
                            <th>Air Quality Monitoring Report on the evening /Next morning of the festival - with AQI as per the National Air Quality Index</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_342"></label></th>
                            <th><label htmlFor="second_form_question_343">Air quality Report</label></th>
                            <th><label htmlFor="second_form_question_344">Air quality Report from MOFC/NABL</label></th>
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
                            <th><label htmlFor="second_form_question_345"></label></th>
                            <th><label htmlFor="second_form_question_346"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_342} onChange={inputHandler} id="second_form_question_342" name="second_form_question_342" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_343} onChange={inputHandler} id="second_form_question_343" name="second_form_question_343" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_344} onChange={inputHandler} id="second_form_question_344" name="second_form_question_344" required>
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
                            <td><input type="text" value={formData.second_form_question_345} onChange={inputHandler} id="second_form_question_345" name="second_form_question_345" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_346} onChange={inputHandler} id="second_form_question_346" name="second_form_question_346" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>2.2.2</th>
                            <th>Promotion of good habits</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_347"></label></th>
                            <th><label htmlFor="second_form_question_348">Total Length of cycling track as per google map</label></th>
                            <th><label htmlFor="second_form_question_349">No. of Geotagged photos before creation of cycle track</label></th>
                            <th><label htmlFor="second_form_question_350">Geotagged photos after creation of cycle track</label></th>
                            <th><label htmlFor="second_form_question_351">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_352">Date of completion certificate (should betn 01.04.2023 to 31.03.2024)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_353"></label></th>
                            <th><label htmlFor="second_form_question_354"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Length of newly created obstruction free Cycling Track (in Km) during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_347} onChange={inputHandler} id="second_form_question_347" name="second_form_question_347" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_348} onChange={inputHandler} id="second_form_question_348" name="second_form_question_348" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_349} onChange={inputHandler} id="second_form_question_349" name="second_form_question_349" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_350} onChange={inputHandler} id="second_form_question_350" name="second_form_question_350" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.second_form_question_351} onChange={inputHandler} id="second_form_question_351" name="second_form_question_351" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="date" value={formData.second_form_question_352} onChange={inputHandler} id="second_form_question_352" name="second_form_question_352" placeholder="dd-mm-yyyy" required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_353} onChange={inputHandler} id="second_form_question_353" name="second_form_question_353" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_354} onChange={inputHandler} id="second_form_question_354" name="second_form_question_354" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th></th>
                            <th>Upkeep:Length of obstruction free Cycling Track created (in Km) during MVA 1.0, 2.0, 3.0 and maintained</th>
                            <th>25</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_355"></label></th>
                            <th><label htmlFor="second_form_question_356">Values from MIS</label></th>
                            <th><label htmlFor="second_form_question_357">Geotag</label></th>
                            <th><label htmlFor="second_form_question_358">Maintain</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_359"></label></th>
                            <th><label htmlFor="second_form_question_360"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV01</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_355} onChange={inputHandler} id="second_form_question_355" name="second_form_question_355" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_356} onChange={inputHandler} id="second_form_question_356" name="second_form_question_356" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_357} onChange={inputHandler} id="second_form_question_357" name="second_form_question_357" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_358} onChange={inputHandler} id="second_form_question_358" name="second_form_question_358" required>
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
                            <td><input type="text" value={formData.second_form_question_359} onChange={inputHandler} id="second_form_question_359" name="second_form_question_359" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_360} onChange={inputHandler} id="second_form_question_360" name="second_form_question_360" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_361"></label></td>
                            <td><label htmlFor="second_form_question_362"></label></td>
                            <td><label htmlFor="second_form_question_363">MV02</label></td>
                            <td><label htmlFor="second_form_question_364"></label></td>

                            <td><label htmlFor="second_form_question_365"></label></td>
                            <td><input type="number" value={formData.second_form_question_361} onChange={inputHandler} id="second_form_question_361" name="second_form_question_361" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_362} onChange={inputHandler} id="second_form_question_362" name="second_form_question_362" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_363} onChange={inputHandler} id="second_form_question_363" name="second_form_question_363" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_364} onChange={inputHandler} id="second_form_question_364" name="second_form_question_364" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_366"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_365} onChange={inputHandler} id="second_form_question_365" name="second_form_question_365" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_366} onChange={inputHandler} id="second_form_question_366" name="second_form_question_366" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_367"></label></td>
                            <td><label htmlFor="second_form_question_368"></label></td>
                            <td><label htmlFor="second_form_question_369">MV03</label></td>
                            <td><label htmlFor="second_form_question_370"></label></td>

                            <td><label htmlFor="second_form_question_371"></label></td>
                            <td><input type="number" value={formData.second_form_question_367} onChange={inputHandler} id="second_form_question_367" name="second_form_question_367" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_368} onChange={inputHandler} id="second_form_question_368" name="second_form_question_368" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_369} onChange={inputHandler} id="second_form_question_369" name="second_form_question_369" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_370} onChange={inputHandler} id="second_form_question_370" name="second_form_question_370" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_372"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_371} onChange={inputHandler} id="second_form_question_371" name="second_form_question_371" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_372} onChange={inputHandler} id="second_form_question_372" name="second_form_question_372" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_373"></label></th>
                            <th><label htmlFor="second_form_question_374">No. of land/area alloted for C &D</label></th>
                            <th><label htmlFor="second_form_question_375">No. of location link checked</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_376"></label></th>
                            <th><label htmlFor="second_form_question_377"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Water storage capacity added through creation of new waterbodies in Majhi Vasundhara Abhiyan 4.0 (in cubic meters) </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_373} onChange={inputHandler} id="second_form_question_373" name="second_form_question_373" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_374} onChange={inputHandler} id="second_form_question_374" name="second_form_question_374" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_375} onChange={inputHandler} id="second_form_question_375" name="second_form_question_375" required>
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
                            <td><input type="text" value={formData.second_form_question_376} onChange={inputHandler} id="second_form_question_376" name="second_form_question_376" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_377} onChange={inputHandler} id="second_form_question_377" name="second_form_question_377" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_378"></label></th>
                            <th><label htmlFor="second_form_question_379">Vehicle assignment order</label></th>
                            <th><label htmlFor="second_form_question_380">No. of vehicles dedicated as per vehicle assignment order</label></th>
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
                            <th><label htmlFor="second_form_question_381"></label></th>
                            <th><label htmlFor="second_form_question_382"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Dedicated vehicles for collection</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_378} onChange={inputHandler} id="second_form_question_378" name="second_form_question_378" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_379} onChange={inputHandler} id="second_form_question_379" name="second_form_question_379" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_380} onChange={inputHandler} id="second_form_question_380" name="second_form_question_380" required>
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
                            <td><input type="text" value={formData.second_form_question_381} onChange={inputHandler} id="second_form_question_381" name="second_form_question_381" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_382} onChange={inputHandler} id="second_form_question_382" name="second_form_question_382" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_383"></label></th>
                            <th><label htmlFor="second_form_question_384">No. of geotagged photographs of segregation process </label></th>
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
                            <th><label htmlFor="second_form_question_385"></label></th>
                            <th><label htmlFor="second_form_question_386"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Segregation of C&D waste </td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_383} onChange={inputHandler} id="second_form_question_383" name="second_form_question_383" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_384} onChange={inputHandler} id="second_form_question_384" name="second_form_question_384" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_385} onChange={inputHandler} id="second_form_question_385" name="second_form_question_385" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_386} onChange={inputHandler} id="second_form_question_386" name="second_form_question_386" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_387"></label></th>
                            <th><label htmlFor="second_form_question_388">% of C & D reused as per MIS</label></th>
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
                            <th><label htmlFor="second_form_question_389"></label></th>
                            <th><label htmlFor="second_form_question_390"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking) </td>
                            <td></td>
                            <td>Percentage of C&D waste reused</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_387} onChange={inputHandler} id="second_form_question_387" name="second_form_question_387" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_388} onChange={inputHandler} id="second_form_question_388" name="second_form_question_388" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_389} onChange={inputHandler} id="second_form_question_389" name="second_form_question_389" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_390} onChange={inputHandler} id="second_form_question_390" name="second_form_question_390" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_391"></label></th>
                            <th><label htmlFor="second_form_question_392">% of C & D reused as per MIS</label></th>
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
                            <th><label htmlFor="second_form_question_393"></label></th>
                            <th><label htmlFor="second_form_question_394"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of construction sites having appropriate cover</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_391} onChange={inputHandler} id="second_form_question_391" name="second_form_question_391" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_392} onChange={inputHandler} id="second_form_question_392" name="second_form_question_392" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_393} onChange={inputHandler} id="second_form_question_393" name="second_form_question_393" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_394} onChange={inputHandler} id="second_form_question_394" name="second_form_question_394" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 300</th>
                            <th>2.3.1</th>
                            <th>EVs registered in Local body area during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_395"></label></th>
                            <th><label htmlFor="second_form_question_396">Value from MIS</label></th>
                            <th><label htmlFor="second_form_question_397">RTO Report</label></th>
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
                            <th><label htmlFor="second_form_question_398"></label></th>
                            <th><label htmlFor="second_form_question_399"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>2W EV</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_395} onChange={inputHandler} id="second_form_question_395" name="second_form_question_395" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_396} onChange={inputHandler} id="second_form_question_396" name="second_form_question_396" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_397} onChange={inputHandler} id="second_form_question_397" name="second_form_question_397" required>
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
                            <td><input type="text" value={formData.second_form_question_398} onChange={inputHandler} id="second_form_question_398" name="second_form_question_398" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_399} onChange={inputHandler} id="second_form_question_399" name="second_form_question_399" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_400"></label></td>
                            <td><label htmlFor="second_form_question_401"></label></td>
                            <td><label htmlFor="second_form_question_402">3W EV</label></td>
                            <td><label htmlFor="second_form_question_403">50</label></td>

                            <td><label htmlFor="second_form_question_404"></label></td>
                            <td><input type="number" value={formData.second_form_question_400} onChange={inputHandler} id="second_form_question_400" name="second_form_question_400" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_401} onChange={inputHandler} id="second_form_question_401" name="second_form_question_401" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_402} onChange={inputHandler} id="second_form_question_402" name="second_form_question_402" required>
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
                            <td><input type="text" value={formData.second_form_question_403} onChange={inputHandler} id="second_form_question_403" name="second_form_question_403" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_404} onChange={inputHandler} id="second_form_question_404" name="second_form_question_404" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_405"></label></td>
                            <td><label htmlFor="second_form_question_406"></label></td>
                            <td><label htmlFor="second_form_question_407">4W EV</label></td>
                            <td><label htmlFor="second_form_question_408">100</label></td>

                            <td><label htmlFor="second_form_question_409"></label></td>
                            <td><input type="number" value={formData.second_form_question_405} onChange={inputHandler} id="second_form_question_405" name="second_form_question_405" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_406} onChange={inputHandler} id="second_form_question_406" name="second_form_question_406" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_407} onChange={inputHandler} id="second_form_question_407" name="second_form_question_407" required>
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
                            <td><input type="text" value={formData.second_form_question_408} onChange={inputHandler} id="second_form_question_408" name="second_form_question_408" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_409} onChange={inputHandler} id="second_form_question_409" name="second_form_question_409" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_410"></label></td>
                            <td><label htmlFor="second_form_question_411"></label></td>
                            <td><label htmlFor="second_form_question_412">Buses EV</label></td>
                            <td><label htmlFor="second_form_question_413">100</label></td>

                            <td><label htmlFor="second_form_question_414"></label></td>
                            <td><input type="number" value={formData.second_form_question_410} onChange={inputHandler} id="second_form_question_410" name="second_form_question_410" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_411} onChange={inputHandler} id="second_form_question_411" name="second_form_question_411" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_412} onChange={inputHandler} id="second_form_question_412" name="second_form_question_412" required>
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
                            <td><input type="text" value={formData.second_form_question_413} onChange={inputHandler} id="second_form_question_413" name="second_form_question_413" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_414} onChange={inputHandler} id="second_form_question_414" name="second_form_question_414" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_415"></label></th>
                            <th><label htmlFor="second_form_question_416">As per MIS</label></th>
                            <th><label htmlFor="second_form_question_417">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
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
                            <th><label htmlFor="second_form_question_418"></label></th>
                            <th><label htmlFor="second_form_question_419"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>EVs purchased/hired by Local body during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_415} onChange={inputHandler} id="second_form_question_415" name="second_form_question_415" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_416} onChange={inputHandler} id="second_form_question_416" name="second_form_question_416" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_417} onChange={inputHandler} id="second_form_question_417" name="second_form_question_417" autoComplete='off' placeholder='Enter' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_418} onChange={inputHandler} id="second_form_question_418" name="second_form_question_418" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_419} onChange={inputHandler} id="second_form_question_419" name="second_form_question_419" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 50</th>
                            <th></th>
                            <th>% of EV Public Transport</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_420"></label></th>
                            <th><label htmlFor="second_form_question_421">Self Cerfication/ Report mentioning % of EV public transport</label></th>
                            <th><label htmlFor="second_form_question_422">Self Cerfication/ Report</label></th>
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
                            <th><label htmlFor="second_form_question_423"></label></th>
                            <th><label htmlFor="second_form_question_424"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_420} onChange={inputHandler} id="second_form_question_420" name="second_form_question_420" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_421} onChange={inputHandler} id="second_form_question_421" name="second_form_question_421" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_422} onChange={inputHandler} id="second_form_question_422" name="second_form_question_422" required>
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
                            <td><input type="text" value={formData.second_form_question_423} onChange={inputHandler} id="second_form_question_423" name="second_form_question_423" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_424} onChange={inputHandler} id="second_form_question_424" name="second_form_question_424" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 50</th>
                            <th></th>
                            <th>% of EV last mile delivery</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_425"></label></th>
                            <th><label htmlFor="second_form_question_426">As per MIS</label></th>
                            <th><label htmlFor="second_form_question_427">Self Cerfication mentioning % of EV public transport</label></th>
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
                            <th><label htmlFor="second_form_question_428"></label></th>
                            <th><label htmlFor="second_form_question_429"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_425} onChange={inputHandler} id="second_form_question_425" name="second_form_question_425" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_426} onChange={inputHandler} id="second_form_question_426" name="second_form_question_426" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_427} onChange={inputHandler} id="second_form_question_427" name="second_form_question_427" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_428} onChange={inputHandler} id="second_form_question_428" name="second_form_question_428" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_429} onChange={inputHandler} id="second_form_question_429" name="second_form_question_429" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>                   

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_430"></label></th>
                            <th><label htmlFor="second_form_question_431">No. of EV charging stations from Excel </label></th>
                            <th><label htmlFor="second_form_question_432">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_433">Completion Certificate </label></th>
                            <th><label htmlFor="second_form_question_434">No. of  geo-tagged photographs before EV charging stations</label></th>
                            <th><label htmlFor="second_form_question_435">No. of geo-tagged photos after charging stationsDate betn 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_436"></label></th>
                            <th><label htmlFor="second_form_question_437"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Two Wheelers</td>
                            <td>15</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_430} onChange={inputHandler} id="second_form_question_430" name="second_form_question_430" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_431} onChange={inputHandler} id="second_form_question_431" name="second_form_question_431" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_432} onChange={inputHandler} id="second_form_question_432" name="second_form_question_432" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_433} onChange={inputHandler} id="second_form_question_433" name="second_form_question_433" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_434} onChange={inputHandler} id="second_form_question_434" name="second_form_question_434" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_435} onChange={inputHandler} id="second_form_question_435" name="second_form_question_435" required>
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
                            <td><input type="text" value={formData.second_form_question_436} onChange={inputHandler} id="second_form_question_436" name="second_form_question_436" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_437} onChange={inputHandler} id="second_form_question_437" name="second_form_question_437" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_438"></label></td>
                            <td><label htmlFor="second_form_question_439"></label></td>
                            <td><label htmlFor="second_form_question_440">Fours Wheelers</label></td>
                            <td><label htmlFor="second_form_question_441">15</label></td>

                            <td><label htmlFor="second_form_question_442"></label></td>
                            <td><input type="number" value={formData.second_form_question_438} onChange={inputHandler} id="second_form_question_438" name="second_form_question_438" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_439} onChange={inputHandler} id="second_form_question_439" name="second_form_question_439" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_440} onChange={inputHandler} id="second_form_question_440" name="second_form_question_440" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_441} onChange={inputHandler} id="second_form_question_441" name="second_form_question_441" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_442} onChange={inputHandler} id="second_form_question_442" name="second_form_question_442" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_443} onChange={inputHandler} id="second_form_question_443" name="second_form_question_443" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_443"></label></td>
                            <td><label htmlFor="second_form_question_444"></label></td>
                            <td><label htmlFor="second_form_question_445"></label></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_444} onChange={inputHandler} id="second_form_question_444" name="second_form_question_444" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_445} onChange={inputHandler} id="second_form_question_445" name="second_form_question_445" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 20</th>
                            <th></th>
                            <th>Upkeep:Number of EV charging stations created during Majhi Vasundhara Abhiyan 2.0, 3.0 and maintained</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_446"></label></th>
                            <th><label htmlFor="second_form_question_447">Number of EV</label></th>
                            <th><label htmlFor="second_form_question_448">Geotag photos</label></th>
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
                            <th><label htmlFor="second_form_question_449"></label></th>
                            <th><label htmlFor="second_form_question_450"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Two Wheelers MV02</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_446} onChange={inputHandler} id="second_form_question_446" name="second_form_question_446" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_447} onChange={inputHandler} id="second_form_question_447" name="second_form_question_447" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_448} onChange={inputHandler} id="second_form_question_448" name="second_form_question_448" required>
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
                            <td><input type="text" value={formData.second_form_question_449} onChange={inputHandler} id="second_form_question_449" name="second_form_question_449" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_450} onChange={inputHandler} id="second_form_question_450" name="second_form_question_450" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_451"></label></td>
                            <td><label htmlFor="second_form_question_452"></label></td>
                            <td><label htmlFor="second_form_question_453">Four Wheelers MV02</label></td>
                            <td><label htmlFor="second_form_question_454"></label></td>

                            <td><label htmlFor="second_form_question_455"></label></td>
                            <td><input type="number" value={formData.second_form_question_451} onChange={inputHandler} id="second_form_question_451" name="second_form_question_451" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_452} onChange={inputHandler} id="second_form_question_452" name="second_form_question_452" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_453} onChange={inputHandler} id="second_form_question_453" name="second_form_question_453" required>
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
                            <td><input type="text" value={formData.second_form_question_454} onChange={inputHandler} id="second_form_question_454" name="second_form_question_454" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_455} onChange={inputHandler} id="second_form_question_455" name="second_form_question_455" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_456"></label></td>
                            <td><label htmlFor="second_form_question_457"></label></td>
                            <td><label htmlFor="second_form_question_458">Two Wheelers MV03</label></td>
                            <td><label htmlFor="second_form_question_459"></label></td>

                            <td><label htmlFor="second_form_question_460"></label></td>
                            <td><input type="number" value={formData.second_form_question_456} onChange={inputHandler} id="second_form_question_456" name="second_form_question_456" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_457} onChange={inputHandler} id="second_form_question_457" name="second_form_question_457" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_458} onChange={inputHandler} id="second_form_question_458" name="second_form_question_458" required>
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
                            <td><input type="text" value={formData.second_form_question_459} onChange={inputHandler} id="second_form_question_459" name="second_form_question_459" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_460} onChange={inputHandler} id="second_form_question_460" name="second_form_question_460" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_461"></label></td>
                            <td><label htmlFor="second_form_question_462"></label></td>
                            <td><label htmlFor="second_form_question_463">Four Wheelers MV03</label></td>
                            <td><label htmlFor="second_form_question_464"></label></td>

                            <td><label htmlFor="second_form_question_465"></label></td>
                            <td><input type="number" value={formData.second_form_question_461} onChange={inputHandler} id="second_form_question_461" name="second_form_question_461" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_462} onChange={inputHandler} id="second_form_question_462" name="second_form_question_462" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_463} onChange={inputHandler} id="second_form_question_463" name="second_form_question_463" required>
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
                            <td><input type="text" value={formData.second_form_question_464} onChange={inputHandler} id="second_form_question_464" name="second_form_question_464" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_465} onChange={inputHandler} id="second_form_question_465" name="second_form_question_465" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_466"></label></td>
                            <td><label htmlFor="second_form_question_467"></label></td>
                            <td><label htmlFor="second_form_question_468">Total Two Wheelers</label></td>
                            <td><label htmlFor="second_form_question_469">10</label></td>

                            <td><label htmlFor="second_form_question_470"></label></td>
                            <td><input type="number" value={formData.second_form_question_466} onChange={inputHandler} id="second_form_question_466" name="second_form_question_466" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_467} onChange={inputHandler} id="second_form_question_467" name="second_form_question_467" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_468} onChange={inputHandler} id="second_form_question_468" name="second_form_question_468" required>
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
                            <td><input type="text" value={formData.second_form_question_469} onChange={inputHandler} id="second_form_question_469" name="second_form_question_469" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_470} onChange={inputHandler} id="second_form_question_470" name="second_form_question_470" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_471"></label></td>
                            <td><label htmlFor="second_form_question_472"></label></td>
                            <td><label htmlFor="second_form_question_473">Total Four Wheelers</label></td>
                            <td><label htmlFor="second_form_question_474">10</label></td>

                            <td><label htmlFor="second_form_question_475"></label></td>
                            <td><input type="number" value={formData.second_form_question_471} onChange={inputHandler} id="second_form_question_471" name="second_form_question_471" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_472} onChange={inputHandler} id="second_form_question_472" name="second_form_question_472" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_473} onChange={inputHandler} id="second_form_question_473" name="second_form_question_473" required>
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
                            <td><input type="text" value={formData.second_form_question_474} onChange={inputHandler} id="second_form_question_474" name="second_form_question_474" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_475} onChange={inputHandler} id="second_form_question_475" name="second_form_question_475" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_476"></label></th>
                            <th><label htmlFor="second_form_question_477">Value from Excel (Col.9)</label></th>
                            <th><label htmlFor="second_form_question_478">Geotagphotos</label></th>
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
                            <th><label htmlFor="second_form_question_479"></label></th>
                            <th><label htmlFor="second_form_question_480"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total number of functional charging points available at charging stations.</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_476} onChange={inputHandler} id="second_form_question_476" name="second_form_question_476" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_477} onChange={inputHandler} id="second_form_question_477" name="second_form_question_477" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_478} onChange={inputHandler} id="second_form_question_478" name="second_form_question_478" required>
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
                            <td><input type="text" value={formData.second_form_question_479} onChange={inputHandler} id="second_form_question_479" name="second_form_question_479" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_480} onChange={inputHandler} id="second_form_question_480" name="second_form_question_480" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_481"></label></th>
                            <th><label htmlFor="second_form_question_482">ref from Excel (Col.10)/MIS</label></th>
                            <th><label htmlFor="second_form_question_483">Geotag photos</label></th>
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
                            <th><label htmlFor="second_form_question_484"></label></th>
                            <th><label htmlFor="second_form_question_485"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of charging stations with renewable energy supply</td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_481} onChange={inputHandler} id="second_form_question_481" name="second_form_question_481" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_482} onChange={inputHandler} id="second_form_question_482" name="second_form_question_482" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_483} onChange={inputHandler} id="second_form_question_483" name="second_form_question_483" required>
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
                            <td><input type="text" value={formData.second_form_question_484} onChange={inputHandler} id="second_form_question_484" name="second_form_question_484" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_485} onChange={inputHandler} id="second_form_question_485" name="second_form_question_485" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>2.4</th>
                            <th>Number of events organized to create awareness regarding climate change during:</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_486"></label></th>
                            <th><label htmlFor="second_form_question_487">Value from Excel</label></th>
                            <th><label htmlFor="second_form_question_488">Geotag phots</label></th>
                            <th><label htmlFor="second_form_question_489">Media Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_490"></label></th>
                            <th><label htmlFor="second_form_question_491"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April to Sept) of the Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_486} onChange={inputHandler} id="second_form_question_486" name="second_form_question_486" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_487} onChange={inputHandler} id="second_form_question_487" name="second_form_question_487" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_488} onChange={inputHandler} id="second_form_question_488" name="second_form_question_488" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_489} onChange={inputHandler} id="second_form_question_489" name="second_form_question_489" required>
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
                            <td><input type="text" value={formData.second_form_question_490} onChange={inputHandler} id="second_form_question_490" name="second_form_question_490" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_491} onChange={inputHandler} id="second_form_question_491" name="second_form_question_491" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_492"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_493"></label></td>
                            <td><label htmlFor="second_form_question_494"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_495"></label>50</td>

                            <td><label htmlFor="second_form_question_496"></label></td>
                            <td><input type="number" value={formData.second_form_question_492} onChange={inputHandler} id="second_form_question_492" name="second_form_question_492" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_493} onChange={inputHandler} id="second_form_question_493" name="second_form_question_493" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_494} onChange={inputHandler} id="second_form_question_494" name="second_form_question_494" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_495} onChange={inputHandler} id="second_form_question_495" name="second_form_question_495" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_497"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_496} onChange={inputHandler} id="second_form_question_496" name="second_form_question_496" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_497} onChange={inputHandler} id="second_form_question_497" name="second_form_question_497" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_498"></label></th>
                            <th><label htmlFor="second_form_question_499">Value from Excel</label></th>
                            <th><label htmlFor="second_form_question_500">Geo tag photos</label></th>
                            <th><label htmlFor="second_form_question_501">Certificates of completion of course</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_502"></label></th>
                            <th><label htmlFor="second_form_question_503"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of youth participants who have completed Climate Change Course on Youth Leadership for Climate Action </td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_498} onChange={inputHandler} id="second_form_question_498" name="second_form_question_498" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><input type="number" value={formData.second_form_question_499} onChange={inputHandler} id="second_form_question_499" name="second_form_question_499" autoComplete='off' placeholder='Enter Number' required /></td>
                            <td><select value={formData.second_form_question_500} onChange={inputHandler} id="second_form_question_500" name="second_form_question_500" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_501} onChange={inputHandler} id="second_form_question_501" name="second_form_question_501" required>
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
                            <td><input type="text" value={formData.second_form_question_502} onChange={inputHandler} id="second_form_question_502" name="second_form_question_502" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_503} onChange={inputHandler} id="second_form_question_503" name="second_form_question_503" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_504"></label></th>
                            <th><label htmlFor="second_form_question_505">Email of succeful registration of raise to zero commitment</label></th>
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
                            <th><label htmlFor="second_form_question_506"></label></th>
                            <th><label htmlFor="second_form_question_507"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>2.5</td>
                            <td>Reporting on CDP Portal (For Amrut City Only)</td>
                            <td>100</td>

                            <td></td>
                            <td><select value={formData.second_form_question_504} onChange={inputHandler} id="second_form_question_504" name="second_form_question_504" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_505} onChange={inputHandler} id="second_form_question_505" name="second_form_question_505" required>
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
                            <td><input type="text" value={formData.second_form_question_506} onChange={inputHandler} id="second_form_question_506" name="second_form_question_506" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_507} onChange={inputHandler} id="second_form_question_507" name="second_form_question_507" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_508"></label></th>
                            <th><label htmlFor="second_form_question_509">Value from Excel</label></th>
                            <th><label htmlFor="second_form_question_510">List of attendees with invitation letters</label></th>
                            <th><label htmlFor="second_form_question_511">Geotag photos</label></th>
                            <th><label htmlFor="second_form_question_512">Media Link</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_513"></label></th>
                            <th><label htmlFor="second_form_question_514"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>2.5</td>
                            <td>Reporting on CDP Portal (For Amrut City Only)</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_508} onChange={inputHandler} id="second_form_question_508" name="second_form_question_508" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_509} onChange={inputHandler} id="second_form_question_509" name="second_form_question_509" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_510} onChange={inputHandler} id="second_form_question_510" name="second_form_question_510" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_511} onChange={inputHandler} id="second_form_question_511" name="second_form_question_511" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_512} onChange={inputHandler} id="second_form_question_512" name="second_form_question_512" required>
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
                            <td><input type="text" value={formData.second_form_question_513} onChange={inputHandler} id="second_form_question_513" name="second_form_question_513" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_514} onChange={inputHandler} id="second_form_question_514" name="second_form_question_514" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_515"></label></th>
                            <th><label htmlFor="second_form_question_516">No. of water bodies rejuvenated as per excel </label></th>
                            <th><label htmlFor="second_form_question_517">stage wise geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_518">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_519">Work Completion Certificate</label></th>
                            <th><label htmlFor="second_form_question_520">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_521"></label></th>
                            <th><label htmlFor="second_form_question_522"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.1</td>
                            <td>Number of waterbodies rejuvenated by removing silt or through repair work during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_515} onChange={inputHandler} id="second_form_question_515" name="second_form_question_515" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_516} onChange={inputHandler} id="second_form_question_516" name="second_form_question_516" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_517} onChange={inputHandler} id="second_form_question_517" name="second_form_question_517" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="text" value={formData.second_form_question_518} onChange={inputHandler} id="second_form_question_518" name="second_form_question_518" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_519} onChange={inputHandler} id="second_form_question_519" name="second_form_question_519" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_520} onChange={inputHandler} id="second_form_question_520" name="second_form_question_520" required>
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
                            <td><input type="text" value={formData.second_form_question_521} onChange={inputHandler} id="second_form_question_521" name="second_form_question_521" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_522} onChange={inputHandler} id="second_form_question_522" name="second_form_question_522" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_523"></label></th>
                            <th><label htmlFor="second_form_question_524">From Excel/MIS</label></th>
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
                            <th><label htmlFor="second_form_question_525"></label></th>
                            <th><label htmlFor="second_form_question_526"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Upkeep: Number of waterbodies rejuvenated during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0 and maintained </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_523} onChange={inputHandler} id="second_form_question_523" name="second_form_question_523" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_524} onChange={inputHandler} id="second_form_question_524" name="second_form_question_524" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_525} onChange={inputHandler} id="second_form_question_525" name="second_form_question_525" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_526} onChange={inputHandler} id="second_form_question_526" name="second_form_question_526" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_527"></label></th>
                            <th><label htmlFor="second_form_question_528">from Excel (Column6)/MIS</label></th>
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
                            <th><label htmlFor="second_form_question_529"></label></th>
                            <th><label htmlFor="second_form_question_530"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Water storage capacity added through rejuvenation of existing waterbodies (in Cubic meter) during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_527} onChange={inputHandler} id="second_form_question_527" name="second_form_question_527" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_528} onChange={inputHandler} id="second_form_question_528" name="second_form_question_528" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_529} onChange={inputHandler} id="second_form_question_529" name="second_form_question_529" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_530} onChange={inputHandler} id="second_form_question_530" name="second_form_question_530" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_531"></label></th>
                            <th><label htmlFor="second_form_question_532">No. of government building during 01-04-2022 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_533">No. of audited reports from Excel</label></th>
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
                            <th><label htmlFor="second_form_question_534"></label></th>
                            <th><label htmlFor="second_form_question_535"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>50</td>
                            <td>3.2.1</td>
                            <td>% of govt. buildings with water audit conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_531} onChange={inputHandler} id="second_form_question_531" name="second_form_question_531" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_532} onChange={inputHandler} id="second_form_question_532" name="second_form_question_532" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_533} onChange={inputHandler} id="second_form_question_533" name="second_form_question_533" required>
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
                            <td><input type="text" value={formData.second_form_question_534} onChange={inputHandler} id="second_form_question_534" name="second_form_question_534" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_535} onChange={inputHandler} id="second_form_question_535" name="second_form_question_535" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_536"></label></th>
                            <th><label htmlFor="second_form_question_537">No. of buildings where recommendation were provided from excel</label></th>
                            <th><label htmlFor="second_form_question_538">Water Audit Report</label></th>
                            <th><label htmlFor="second_form_question_539">Executive Document</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_540"></label></th>
                            <th><label htmlFor="second_form_question_541"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of buildings where water audit recommendations are implemented </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_536} onChange={inputHandler} id="second_form_question_536" name="second_form_question_536" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_537} onChange={inputHandler} id="second_form_question_537" name="second_form_question_537" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_538} onChange={inputHandler} id="second_form_question_538" name="second_form_question_538" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_539} onChange={inputHandler} id="second_form_question_539" name="second_form_question_539" required>
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
                            <td><input type="text" value={formData.second_form_question_540} onChange={inputHandler} id="second_form_question_540" name="second_form_question_540" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_541} onChange={inputHandler} id="second_form_question_541" name="second_form_question_541" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_542"></label></th>
                            <th><label htmlFor="second_form_question_543">Water supply system audit conducted/Audit summary report</label></th>
                            <th><label htmlFor="second_form_question_544">Audit is conducted during 01-04-2022 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_545">Audit by authorized institute </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_546"></label></th>
                            <th><label htmlFor="second_form_question_547"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.2.2 (Yes/No)</td>
                            <td>Water audit of water supply system carried out conducted during Majhi Vasundhara Abhiyan 3.0 and/or Majhi Vasundhara Abhiyan 4.0</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_542} onChange={inputHandler} id="second_form_question_542" name="second_form_question_542" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_543} onChange={inputHandler} id="second_form_question_543" name="second_form_question_543" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_544} onChange={inputHandler} id="second_form_question_544" name="second_form_question_544" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_545} onChange={inputHandler} id="second_form_question_545" name="second_form_question_545" required>
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
                            <td><input type="text" value={formData.second_form_question_546} onChange={inputHandler} id="second_form_question_546" name="second_form_question_546" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_547} onChange={inputHandler} id="second_form_question_547" name="second_form_question_547" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_548"></label></th>
                            <th><label htmlFor="second_form_question_549">Work Order issued</label></th>
                            <th><label htmlFor="second_form_question_550">Whether work order mentions  implementation of recommedation</label></th>
                            <th><label htmlFor="second_form_question_551">Work Completion Certificate</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_552"></label></th>
                            <th><label htmlFor="second_form_question_553"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>Water audit recommendations implemented </td>
                            <td>25</td>

                            <td></td>
                            <td><select value={formData.second_form_question_548} onChange={inputHandler} id="second_form_question_548" name="second_form_question_548" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_549} onChange={inputHandler} id="second_form_question_549" name="second_form_question_549" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_550} onChange={inputHandler} id="second_form_question_550" name="second_form_question_550" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_551} onChange={inputHandler} id="second_form_question_551" name="second_form_question_551" required>
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
                            <td><input type="text" value={formData.second_form_question_552} onChange={inputHandler} id="second_form_question_552" name="second_form_question_552" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_553} onChange={inputHandler} id="second_form_question_553" name="second_form_question_553" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>100</th>
                            <th>3.3.1</th>
                            <th>Percentage of Public Buildings with functioning Rainwater harvesting projects installed before and during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_554"></label></th>
                            <th><label htmlFor="second_form_question_555">No. of Total Buildings </label></th>
                            <th><label htmlFor="second_form_question_556">No. of Buildings with functioning rain water harvesting as per excel</label></th>
                            <th><label htmlFor="second_form_question_557">stagewise geotagged photographs from 01-04-2020 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_558"></label></th>
                            <th><label htmlFor="second_form_question_559"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_554} onChange={inputHandler} id="second_form_question_554" name="second_form_question_554" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_555} onChange={inputHandler} id="second_form_question_555" name="second_form_question_555" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_556} onChange={inputHandler} id="second_form_question_556" name="second_form_question_556" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_557} onChange={inputHandler} id="second_form_question_557" name="second_form_question_557" required>
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
                            <td><input type="text" value={formData.second_form_question_558} onChange={inputHandler} id="second_form_question_558" name="second_form_question_558" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_559} onChange={inputHandler} id="second_form_question_559" name="second_form_question_559" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_560"></label></th>
                            <th><label htmlFor="second_form_question_561">Rainwater harvested from excel sheet(add all the quantities from column 9)</label></th>
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
                            <th><label htmlFor="second_form_question_562"></label></th>
                            <th><label htmlFor="second_form_question_563"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Rainwater harvested during the Majhi Vasundhara Abhiyan 4.0(in Cubic meter)</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_560} onChange={inputHandler} id="second_form_question_560" name="second_form_question_560" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_561} onChange={inputHandler} id="second_form_question_561" name="second_form_question_561" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_562} onChange={inputHandler} id="second_form_question_562" name="second_form_question_562" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_563} onChange={inputHandler} id="second_form_question_563" name="second_form_question_563" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_564"></label></th>
                            <th><label htmlFor="second_form_question_565">No. of percolation pits as per excel</label></th>
                            <th><label htmlFor="second_form_question_566">Work Order/MOU with NGO/ Corporaters</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_567">No. of geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_568">Capacity of the project and project brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_569"></label></th>
                            <th><label htmlFor="second_form_question_570"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.3.2</td>
                            <td>Number of new percolation pits created during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_564} onChange={inputHandler} id="second_form_question_564" name="second_form_question_564" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_565} onChange={inputHandler} id="second_form_question_565" name="second_form_question_565" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_566} onChange={inputHandler} id="second_form_question_566" name="second_form_question_566" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_567} onChange={inputHandler} id="second_form_question_567" name="second_form_question_567" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_568} onChange={inputHandler} id="second_form_question_568" name="second_form_question_568" required>
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
                            <td><input type="text" value={formData.second_form_question_569} onChange={inputHandler} id="second_form_question_569" name="second_form_question_569" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_570} onChange={inputHandler} id="second_form_question_570" name="second_form_question_570" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_571"></label></th>
                            <th><label htmlFor="second_form_question_572">Geotagphotos</label></th>
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
                            <th><label htmlFor="second_form_question_573"></label></th>
                            <th><label htmlFor="second_form_question_574"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of eco-friendly idols worshipped Community</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_571} onChange={inputHandler} id="second_form_question_571" name="second_form_question_571" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_572} onChange={inputHandler} id="second_form_question_572" name="second_form_question_572" required>
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
                            <td><input type="text" value={formData.second_form_question_573} onChange={inputHandler} id="second_form_question_573" name="second_form_question_573" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_574} onChange={inputHandler} id="second_form_question_574" name="second_form_question_574" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_575"></label></th>
                            <th><label htmlFor="second_form_question_576">No. OF Wells </label></th>
                            <th><label htmlFor="second_form_question_577">No. of Maps & geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
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
                            <th><label htmlFor="second_form_question_578"></label></th>
                            <th><label htmlFor="second_form_question_579"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.4</td>
                            <td>Mapping of all wells in the Local body with geotagging.</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_575} onChange={inputHandler} id="second_form_question_575" name="second_form_question_575" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_576} onChange={inputHandler} id="second_form_question_576" name="second_form_question_576" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_577} onChange={inputHandler} id="second_form_question_577" name="second_form_question_577" required>
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
                            <td><input type="text" value={formData.second_form_question_578} onChange={inputHandler} id="second_form_question_578" name="second_form_question_578" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_579} onChange={inputHandler} id="second_form_question_579" name="second_form_question_579" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_580"></label></th>
                            <th><label htmlFor="second_form_question_581">Identification of dysfunctional wells from MIS</label></th>
                            <th><label htmlFor="second_form_question_582">No. of Maps & geotagged photographs from 01-04-2023 to 31-03-2024</label></th>
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
                            <th><label htmlFor="second_form_question_583"></label></th>
                            <th><label htmlFor="second_form_question_584"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Identification of dysfunctional wells.</td>
                            <td>20</td>

                            <td></td>
                            <td><select value={formData.second_form_question_580} onChange={inputHandler} id="second_form_question_580" name="second_form_question_580" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_581} onChange={inputHandler} id="second_form_question_581" name="second_form_question_581" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_582} onChange={inputHandler} id="second_form_question_582" name="second_form_question_582" required>
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
                            <td><input type="text" value={formData.second_form_question_583} onChange={inputHandler} id="second_form_question_583" name="second_form_question_583" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_584} onChange={inputHandler} id="second_form_question_584" name="second_form_question_584" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_585"></label></th>
                            <th><label htmlFor="second_form_question_586">No. of projects of rejuvenation taken up from Excel</label></th>
                            <th><label htmlFor="second_form_question_587">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_588">Work completion Certificate</label></th>
                            <th><label htmlFor="second_form_question_589">Financial progress brief</label></th>
                            <th><label htmlFor="second_form_question_590">Stage wise photgraphs</label></th>
                            <th><label htmlFor="second_form_question_591">Maintenance Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_592"></label></th>
                            <th><label htmlFor="second_form_question_593"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Rejuvenation/Recharge of dysfunctional wells.</td>
                            <td>40</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_585} onChange={inputHandler} id="second_form_question_585" name="second_form_question_585" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_586} onChange={inputHandler} id="second_form_question_586" name="second_form_question_586" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_587} onChange={inputHandler} id="second_form_question_587" name="second_form_question_587" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_588} onChange={inputHandler} id="second_form_question_588" name="second_form_question_588" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_589} onChange={inputHandler} id="second_form_question_589" name="second_form_question_589" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_590} onChange={inputHandler} id="second_form_question_590" name="second_form_question_590" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_591} onChange={inputHandler} id="second_form_question_591" name="second_form_question_591" required>
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
                            <td><input type="text" value={formData.second_form_question_592} onChange={inputHandler} id="second_form_question_592" name="second_form_question_592" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_593} onChange={inputHandler} id="second_form_question_593" name="second_form_question_593" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_594"></label></th>
                            <th><label htmlFor="second_form_question_595">Water Quality Report</label></th>
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
                            <th><label htmlFor="second_form_question_596"></label></th>
                            <th><label htmlFor="second_form_question_597"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20</td>
                            <td></td>
                            <td>Water quality report of rejuvenated wells </td>
                            <td></td>

                            <td></td>
                            <td><select value={formData.second_form_question_594} onChange={inputHandler} id="second_form_question_594" name="second_form_question_594" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_595} onChange={inputHandler} id="second_form_question_595" name="second_form_question_595" required>
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
                            <td><input type="text" value={formData.second_form_question_596} onChange={inputHandler} id="second_form_question_596" name="second_form_question_596" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_597} onChange={inputHandler} id="second_form_question_597" name="second_form_question_597" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_598"></label></td>
                            <td><label htmlFor="second_form_question_599"></label></td>
                            <td><label htmlFor="second_form_question_600">Preparation of water quality report</label></td>
                            <td><label htmlFor="second_form_question_601">10</label></td>

                            <td></td>
                            <td><select value={formData.second_form_question_598} onChange={inputHandler} id="second_form_question_598" name="second_form_question_598" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_599} onChange={inputHandler} id="second_form_question_599" name="second_form_question_599" required>
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
                            <td><input type="text" value={formData.second_form_question_600} onChange={inputHandler} id="second_form_question_600" name="second_form_question_600" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_601} onChange={inputHandler} id="second_form_question_601" name="second_form_question_601" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_602"></label></td>
                            <td><label htmlFor="second_form_question_603"></label></td>
                            <td><label htmlFor="second_form_question_604">Quality of water as per drinking water Standards </label></td>
                            <td><label htmlFor="second_form_question_605">10</label></td>

                            <td></td>
                            <td><select value={formData.second_form_question_602} onChange={inputHandler} id="second_form_question_602" name="second_form_question_602" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_603} onChange={inputHandler} id="second_form_question_603" name="second_form_question_603" required>
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
                            <td><input type="text" value={formData.second_form_question_604} onChange={inputHandler} id="second_form_question_604" name="second_form_question_604" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_605} onChange={inputHandler} id="second_form_question_605" name="second_form_question_605" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_606"></label></th>
                            <th><label htmlFor="second_form_question_607"> Geo-tagged photographs </label></th>
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
                            <th><label htmlFor="second_form_question_608"></label></th>
                            <th><label htmlFor="second_form_question_609"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.5</td>
                            <td>Presence of functional STP/FSTP in the Local body</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_606} onChange={inputHandler} id="second_form_question_606" name="second_form_question_606" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_607} onChange={inputHandler} id="second_form_question_607" name="second_form_question_607" required>
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
                            <td><input type="text" value={formData.second_form_question_608} onChange={inputHandler} id="second_form_question_608" name="second_form_question_608" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_609} onChange={inputHandler} id="second_form_question_609" name="second_form_question_609" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th></th>
                            <th>Percentage of treated water from STP/FSTP reused </th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_610"></label></th>
                            <th><label htmlFor="second_form_question_611">Consent to Operate</label></th>
                            <th><label htmlFor="second_form_question_612">Log book</label></th>
                            <th><label htmlFor="second_form_question_613">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_614"></label></th>
                            <th><label htmlFor="second_form_question_615"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_610} onChange={inputHandler} id="second_form_question_610" name="second_form_question_610" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_611} onChange={inputHandler} id="second_form_question_611" name="second_form_question_611" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_612} onChange={inputHandler} id="second_form_question_612" name="second_form_question_612" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_613} onChange={inputHandler} id="second_form_question_613" name="second_form_question_613" required>
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
                            <td><input type="text" value={formData.second_form_question_614} onChange={inputHandler} id="second_form_question_614" name="second_form_question_614" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_615} onChange={inputHandler} id="second_form_question_615" name="second_form_question_615" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_616"></label></th>
                            <th><label htmlFor="second_form_question_617">Water Quality Report (Parameter checking)</label></th>
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
                            <th><label htmlFor="second_form_question_618"></label></th>
                            <th><label htmlFor="second_form_question_619"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Treated water quality report as per MPCB discharge standards</td>
                            <td>50</td>

                            <td></td>
                            <td><select value={formData.second_form_question_616} onChange={inputHandler} id="second_form_question_616" name="second_form_question_616" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_617} onChange={inputHandler} id="second_form_question_617" name="second_form_question_617" required>
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
                            <td><input type="text" value={formData.second_form_question_618} onChange={inputHandler} id="second_form_question_618" name="second_form_question_618" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_619} onChange={inputHandler} id="second_form_question_619" name="second_form_question_619" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_620"></label></th>
                            <th><label htmlFor="second_form_question_621">Number of promotion of eco-friendly immersion from excel during 01.04.23 to 31.03.24 from Excel</label></th>
                            <th><label htmlFor="second_form_question_622">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_623">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_624"></label></th>
                            <th><label htmlFor="second_form_question_625"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.6</td>
                            <td>Number of promotional activities for eco-friendly immersion</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_620} onChange={inputHandler} id="second_form_question_620" name="second_form_question_620" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_621} onChange={inputHandler} id="second_form_question_621" name="second_form_question_621" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_622} onChange={inputHandler} id="second_form_question_622" name="second_form_question_622" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_623} onChange={inputHandler} id="second_form_question_623" name="second_form_question_623" required>
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
                            <td><input type="text" value={formData.second_form_question_624} onChange={inputHandler} id="second_form_question_624" name="second_form_question_624" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_625} onChange={inputHandler} id="second_form_question_625" name="second_form_question_625" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_626"></label></th>
                            <th><label htmlFor="second_form_question_627">Number of promotion of eco-friendly immersion from excel during 01.04.23 to 31.03.24 from Excel</label></th>
                            <th><label htmlFor="second_form_question_628">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_629">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_630"></label></th>
                            <th><label htmlFor="second_form_question_631"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>No. of artificial immersion spots created</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_626} onChange={inputHandler} id="second_form_question_626" name="second_form_question_626" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_627} onChange={inputHandler} id="second_form_question_627" name="second_form_question_627" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_628} onChange={inputHandler} id="second_form_question_628" name="second_form_question_628" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_629} onChange={inputHandler} id="second_form_question_629" name="second_form_question_629" required>
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
                            <td><input type="text" value={formData.second_form_question_630} onChange={inputHandler} id="second_form_question_630" name="second_form_question_630" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_631} onChange={inputHandler} id="second_form_question_631" name="second_form_question_631" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_632"></label></th>
                            <th><label htmlFor="second_form_question_633">Report on collection, segregation, transport process of worship material after immersion</label></th>
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
                            <th><label htmlFor="second_form_question_634"></label></th>
                            <th><label htmlFor="second_form_question_635"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Collection, segregation, transport and processing of worship material pre and post immersion</td>
                            <td>30</td>

                            <td></td>
                            <td><select value={formData.second_form_question_632} onChange={inputHandler} id="second_form_question_632" name="second_form_question_632" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_633} onChange={inputHandler} id="second_form_question_633" name="second_form_question_633" required>
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
                            <td><input type="text" value={formData.second_form_question_634} onChange={inputHandler} id="second_form_question_634" name="second_form_question_634" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_635} onChange={inputHandler} id="second_form_question_635" name="second_form_question_635" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>    

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_636"></label></th>
                            <th><label htmlFor="second_form_question_637">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_638">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_639">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_640"></label></th>
                            <th><label htmlFor="second_form_question_641"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>3.7</td>
                            <td>No. of promotional activity done </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_636} onChange={inputHandler} id="second_form_question_636" name="second_form_question_636" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_637} onChange={inputHandler} id="second_form_question_637" name="second_form_question_637" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_638} onChange={inputHandler} id="second_form_question_638" name="second_form_question_638" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_639} onChange={inputHandler} id="second_form_question_639" name="second_form_question_639" required>
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
                            <td><input type="text" value={formData.second_form_question_640} onChange={inputHandler} id="second_form_question_640" name="second_form_question_640" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_641} onChange={inputHandler} id="second_form_question_641" name="second_form_question_641" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_642"></label></th>
                            <th><label htmlFor="second_form_question_643">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_644">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_645">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_646"></label></th>
                            <th><label htmlFor="second_form_question_647"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of eco-friendly idols worshipped. Community </td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_642} onChange={inputHandler} id="second_form_question_642" name="second_form_question_642" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_643} onChange={inputHandler} id="second_form_question_643" name="second_form_question_643" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_644} onChange={inputHandler} id="second_form_question_644" name="second_form_question_644" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_645} onChange={inputHandler} id="second_form_question_645" name="second_form_question_645" required>
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
                            <td><input type="text" value={formData.second_form_question_646} onChange={inputHandler} id="second_form_question_646" name="second_form_question_646" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_647} onChange={inputHandler} id="second_form_question_647" name="second_form_question_647" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_648"></label></th>
                            <th><label htmlFor="second_form_question_649">Number of promotional activity conducted  from excel during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_650">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_651">No. of Geotagged photos(should have location & Date) during 01.04.23 to 31.03.24</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_652"></label></th>
                            <th><label htmlFor="second_form_question_653"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of eco-friendly idols worshipped. Individual</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_648} onChange={inputHandler} id="second_form_question_648" name="second_form_question_648" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_649} onChange={inputHandler} id="second_form_question_649" name="second_form_question_649" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_650} onChange={inputHandler} id="second_form_question_650" name="second_form_question_650" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_651} onChange={inputHandler} id="second_form_question_651" name="second_form_question_651" required>
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
                            <td><input type="text" value={formData.second_form_question_652} onChange={inputHandler} id="second_form_question_652" name="second_form_question_652" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_653} onChange={inputHandler} id="second_form_question_653" name="second_form_question_653" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_654"></label></th>
                            <th><label htmlFor="second_form_question_655">Brief document mentioning wetland name as per link mentioned Column I</label></th>
                            <th><label htmlFor="second_form_question_656">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_657"></label></th>
                            <th><label htmlFor="second_form_question_658"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>3.8</td>
                            <td>Preparation of Brief Document. wetland as per Wetlands (Conservation & Management) Rules, 2017</td>
                            <td>100</td>

                            <td></td>
                            <td><select value={formData.second_form_question_654} onChange={inputHandler} id="second_form_question_654" name="second_form_question_654" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_655} onChange={inputHandler} id="second_form_question_655" name="second_form_question_655" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_656} onChange={inputHandler} id="second_form_question_656" name="second_form_question_656" required>
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
                            <td><input type="text" value={formData.second_form_question_657} onChange={inputHandler} id="second_form_question_657" name="second_form_question_657" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_658} onChange={inputHandler} id="second_form_question_658" name="second_form_question_658" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>200</th>
                            <th>4.1</th>
                            <th>Number of awareness events organized to promote Renewable energy during Majhi Vasundhara Abhiyan 4.0</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_659"></label></th>
                            <th><label htmlFor="second_form_question_660">Number of awareness events  during 01-04-2023 to 31-03-2024 </label></th>
                            <th><label htmlFor="second_form_question_661">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_662">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_663">Geotagged photos with backdrop/banner of renewable energy during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_664"></label></th>
                            <th><label htmlFor="second_form_question_665"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First Half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_659} onChange={inputHandler} id="second_form_question_659" name="second_form_question_659" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_660} onChange={inputHandler} id="second_form_question_660" name="second_form_question_660" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_661} onChange={inputHandler} id="second_form_question_661" name="second_form_question_661" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_662} onChange={inputHandler} id="second_form_question_662" name="second_form_question_662" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_663} onChange={inputHandler} id="second_form_question_663" name="second_form_question_663" required>
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
                            <td><input type="text" value={formData.second_form_question_664} onChange={inputHandler} id="second_form_question_664" name="second_form_question_664" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_665} onChange={inputHandler} id="second_form_question_665" name="second_form_question_665" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_666">(Relative Marking)</label></td>
                            <td><label htmlFor="second_form_question_667"></label></td>
                            <td><label htmlFor="second_form_question_668">Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="second_form_question_669">100</label></td>

                            <td><label htmlFor="second_form_question_670"></label></td>
                            <td><input type="number" value={formData.second_form_question_666} onChange={inputHandler} id="second_form_question_666" name="second_form_question_666" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_667} onChange={inputHandler} id="second_form_question_667" name="second_form_question_667" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_668} onChange={inputHandler} id="second_form_question_668" name="second_form_question_668" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_669} onChange={inputHandler} id="second_form_question_669" name="second_form_question_669" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_670} onChange={inputHandler} id="second_form_question_670" name="second_form_question_670" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_671"></label></td>
                            <td><label htmlFor="second_form_question_672"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_671} onChange={inputHandler} id="second_form_question_671" name="second_form_question_671" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_672} onChange={inputHandler} id="second_form_question_672" name="second_form_question_672" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_673"></label></th>
                            <th><label htmlFor="second_form_question_674">No. of total LED street Lights (from Excel/MIS)</label></th>
                            <th><label htmlFor="second_form_question_675">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_676">Completion Certificate during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_677">Financial Brief</label></th>
                            <th><label htmlFor="second_form_question_678">Energy Saving Report validate eclectity bill before and after installation of LED light</label></th>
                            <th><label htmlFor="second_form_question_679">Before geotag photos</label></th>
                            <th><label htmlFor="second_form_question_680">After geotag Photos during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_681"></label></th>
                            <th><label htmlFor="second_form_question_682"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>4.2.1</td>
                            <td>Percentage of LED Streetlights of total Streetlights</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_673} onChange={inputHandler} id="second_form_question_673" name="second_form_question_673" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_674} onChange={inputHandler} id="second_form_question_674" name="second_form_question_674" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_675} onChange={inputHandler} id="second_form_question_675" name="second_form_question_675" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_676} onChange={inputHandler} id="second_form_question_676" name="second_form_question_676" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_677} onChange={inputHandler} id="second_form_question_677" name="second_form_question_677" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_678} onChange={inputHandler} id="second_form_question_678" name="second_form_question_678" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_679} onChange={inputHandler} id="second_form_question_679" name="second_form_question_679" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_680} onChange={inputHandler} id="second_form_question_680" name="second_form_question_680" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_681} onChange={inputHandler} id="second_form_question_681" name="second_form_question_681" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_682} onChange={inputHandler} id="second_form_question_682" name="second_form_question_682" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_683"></label></th>
                            <th><label htmlFor="second_form_question_684">Total capacity of solar installation (IN KW) from Excel </label></th>
                            <th><label htmlFor="second_form_question_685">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_686">Commissioning/Completion Certificate during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_687">Financial Brief</label></th>
                            <th><label htmlFor="second_form_question_688">Energy Saving Report validate electrity bill before and after installation</label></th>
                            <th><label htmlFor="second_form_question_689">Before geotag photos</label></th>
                            <th><label htmlFor="second_form_question_690">After geotag Photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_691"></label></th>
                            <th><label htmlFor="second_form_question_692"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_683} onChange={inputHandler} id="second_form_question_683" name="second_form_question_683" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_684} onChange={inputHandler} id="second_form_question_684" name="second_form_question_684" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_685} onChange={inputHandler} id="second_form_question_685" name="second_form_question_685" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_686} onChange={inputHandler} id="second_form_question_686" name="second_form_question_686" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_687} onChange={inputHandler} id="second_form_question_687" name="second_form_question_687" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_688} onChange={inputHandler} id="second_form_question_688" name="second_form_question_688" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_689} onChange={inputHandler} id="second_form_question_689" name="second_form_question_689" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_690} onChange={inputHandler} id="second_form_question_690" name="second_form_question_690" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_691} onChange={inputHandler} id="second_form_question_691" name="second_form_question_691" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_692} onChange={inputHandler} id="second_form_question_692" name="second_form_question_692" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking)</th>
                            <th></th>
                            <th>Upkeep:Total capacity of solar installations (in kW) during Majhi Vasundhara Abhiyan 1.0, 2.0, 3.0</th>
                            <th>100</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_693"></label></th>
                            <th><label htmlFor="second_form_question_694">value from MIS</label></th>
                            <th><label htmlFor="second_form_question_695">Geotag photographs</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_696"></label></th>
                            <th><label htmlFor="second_form_question_697"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV1.0</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_693} onChange={inputHandler} id="second_form_question_693" name="second_form_question_693" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_694} onChange={inputHandler} id="second_form_question_694" name="second_form_question_694" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_695} onChange={inputHandler} id="second_form_question_695" name="second_form_question_695" required>
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
                            <td><input type="text" value={formData.second_form_question_696} onChange={inputHandler} id="second_form_question_696" name="second_form_question_696" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_697} onChange={inputHandler} id="second_form_question_697" name="second_form_question_697" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_698"></label></td>
                            <td><label htmlFor="second_form_question_699"></label></td>
                            <td><label htmlFor="second_form_question_700">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_701"></label>100</td>

                            <td><label htmlFor="second_form_question_702"></label></td>
                            <td><input type="number" value={formData.second_form_question_698} onChange={inputHandler} id="second_form_question_698" name="second_form_question_698" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_699} onChange={inputHandler} id="second_form_question_699" name="second_form_question_699" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_700} onChange={inputHandler} id="second_form_question_700" name="second_form_question_700" required>
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
                            <td><input type="text" value={formData.second_form_question_701} onChange={inputHandler} id="second_form_question_701" name="second_form_question_701" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_702} onChange={inputHandler} id="second_form_question_702" name="second_form_question_702" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_703"></label></td>
                            <td><label htmlFor="second_form_question_704"></label></td>
                            <td><label htmlFor="second_form_question_705">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_706"></label>100</td>

                            <td><label htmlFor="second_form_question_707"></label></td>
                            <td><input type="number" value={formData.second_form_question_703} onChange={inputHandler} id="second_form_question_703" name="second_form_question_703" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_704} onChange={inputHandler} id="second_form_question_704" name="second_form_question_704" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_705} onChange={inputHandler} id="second_form_question_705" name="second_form_question_705" required>
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
                            <td><input type="text" value={formData.second_form_question_706} onChange={inputHandler} id="second_form_question_706" name="second_form_question_706" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_707} onChange={inputHandler} id="second_form_question_707" name="second_form_question_707" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_708"></label></th>
                            <th><label htmlFor="second_form_question_709">Total capacity of solar water heater (IN Litre per day) from Excel</label></th>
                            <th><label htmlFor="second_form_question_710">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_711">Financial Brief</label></th>
                            <th><label htmlFor="second_form_question_712">Before geotag photos</label></th>
                            <th><label htmlFor="second_form_question_713">After geotag Photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_714"></label></th>
                            <th><label htmlFor="second_form_question_715"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Total capacity (in Liter per Day) of solar water heaters installed in a Local body</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_708} onChange={inputHandler} id="second_form_question_708" name="second_form_question_708" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_709} onChange={inputHandler} id="second_form_question_709" name="second_form_question_709" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_710} onChange={inputHandler} id="second_form_question_710" name="second_form_question_710" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_711} onChange={inputHandler} id="second_form_question_711" name="second_form_question_711" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_712} onChange={inputHandler} id="second_form_question_712" name="second_form_question_712" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_713} onChange={inputHandler} id="second_form_question_713" name="second_form_question_713" required>
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
                            <td><input type="text" value={formData.second_form_question_714} onChange={inputHandler} id="second_form_question_714" name="second_form_question_714" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_715} onChange={inputHandler} id="second_form_question_715" name="second_form_question_715" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_716"></label></th>
                            <th><label htmlFor="second_form_question_717">No. of new green buildings (Use filter in column no. 09)</label></th>
                            <th><label htmlFor="second_form_question_718">Number of IGBC/GRIHA/LEED certification during MV04</label></th>
                            <th><label htmlFor="second_form_question_719">No. of occupancy certificate from the ULB (Name Should be same as written on certification)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_720"></label></th>
                            <th><label htmlFor="second_form_question_721"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>4.2.3</td>
                            <td>Number of new green buildings</td>
                            <td>40</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_716} onChange={inputHandler} id="second_form_question_716" name="second_form_question_716" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_717} onChange={inputHandler} id="second_form_question_717" name="second_form_question_717" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_718} onChange={inputHandler} id="second_form_question_718" name="second_form_question_718" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_719} onChange={inputHandler} id="second_form_question_719" name="second_form_question_719" required>
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
                            <td><input type="text" value={formData.second_form_question_720} onChange={inputHandler} id="second_form_question_720" name="second_form_question_720"autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_721} onChange={inputHandler} id="second_form_question_721" name="second_form_question_721"autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_722"></label></th>
                            <th><label htmlFor="second_form_question_723">No. of new green buildings (Use filter in column no. 09)</label></th>
                            <th><label htmlFor="second_form_question_724">Number of IGBC/GRIHA/LEED certification during MV04</label></th>
                            <th><label htmlFor="second_form_question_725">No. of occupancy certificate from the ULB (Name Should be same as written on certification)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_726"></label></th>
                            <th><label htmlFor="second_form_question_727"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of existing buildings converted to green buildings during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>40</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_722} onChange={inputHandler} id="second_form_question_722" name="second_form_question_722" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_723} onChange={inputHandler} id="second_form_question_723" name="second_form_question_723" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_724} onChange={inputHandler} id="second_form_question_724" name="second_form_question_724" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_725} onChange={inputHandler} id="second_form_question_725" name="second_form_question_725" required>
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
                            <td><input type="text" value={formData.second_form_question_726} onChange={inputHandler} id="second_form_question_726" name="second_form_question_726" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_727} onChange={inputHandler} id="second_form_question_727" name="second_form_question_727" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_728"></label></th>
                            <th><label htmlFor="second_form_question_729">No. of new green buildings (Use filter in column no. 10)</label></th>
                            <th><label htmlFor="second_form_question_730">Number of IGBC/GRIHA/LEED certification during MV04</label></th>
                            <th><label htmlFor="second_form_question_731"> No. of occupancy certificate from the ULB (Name Should be same as written on certification)</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_732"></label></th>
                            <th><label htmlFor="second_form_question_733"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Percentage of Platinum rated (LEED and IGBC) or 5-star (GRIHA) rated green buildings</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_728} onChange={inputHandler} id="second_form_question_728" name="second_form_question_728" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_729} onChange={inputHandler} id="second_form_question_729" name="second_form_question_729" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_730} onChange={inputHandler} id="second_form_question_730" name="second_form_question_730" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_731} onChange={inputHandler} id="second_form_question_731" name="second_form_question_731" required>
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
                            <td><input type="text" value={formData.second_form_question_732} onChange={inputHandler} id="second_form_question_732" name="second_form_question_732" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_733} onChange={inputHandler} id="second_form_question_733" name="second_form_question_733" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>50</th>
                            <th>4.2.4</th>
                            <th>% of public buildings with energy audit conducted during Majhi Vasundhara Abhiyan 3.0 and Majhi Vasundhara Abhiyan 4.0.</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_734"></label></th>
                            <th><label htmlFor="second_form_question_735">As per Excel</label></th>
                            <th><label htmlFor="second_form_question_736">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_737">Completion Certificate </label></th>
                            <th><label htmlFor="second_form_question_738">Financial Brief</label></th>
                            <th><label htmlFor="second_form_question_739">Geo tagged photos during 01-04-2022 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_740"></label></th>
                            <th><label htmlFor="second_form_question_741"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_734} onChange={inputHandler} id="second_form_question_734" name="second_form_question_734" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_735} onChange={inputHandler} id="second_form_question_735" name="second_form_question_735" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_736} onChange={inputHandler} id="second_form_question_736" name="second_form_question_736" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_737} onChange={inputHandler} id="second_form_question_737" name="second_form_question_737" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_738} onChange={inputHandler} id="second_form_question_738" name="second_form_question_738" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_739} onChange={inputHandler} id="second_form_question_739" name="second_form_question_739" required>
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
                            <td><input type="text" value={formData.second_form_question_740} onChange={inputHandler} id="second_form_question_740" name="second_form_question_740" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_741} onChange={inputHandler} id="second_form_question_741" name="second_form_question_741" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_742"></label></th>
                            <th><label htmlFor="second_form_question_743">As per Excel</label></th>
                            <th><label htmlFor="second_form_question_744">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_745">Completion Certificate </label></th>
                            <th><label htmlFor="second_form_question_746">Financial Brief</label></th>
                            <th><label htmlFor="second_form_question_747">Geo tagged photos during 01-04-2022 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_748"></label></th>
                            <th><label htmlFor="second_form_question_749"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>% of buildings in which recommendations of energy audit were implemented</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_742} onChange={inputHandler} id="second_form_question_742" name="second_form_question_742" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_743} onChange={inputHandler} id="second_form_question_743" name="second_form_question_743" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_744} onChange={inputHandler} id="second_form_question_744" name="second_form_question_744" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_745} onChange={inputHandler} id="second_form_question_745" name="second_form_question_745" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_746} onChange={inputHandler} id="second_form_question_746" name="second_form_question_746" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_747} onChange={inputHandler} id="second_form_question_747" name="second_form_question_747" required>
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
                            <td><input type="text" value={formData.second_form_question_748} onChange={inputHandler} id="second_form_question_748" name="second_form_question_748" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_749} onChange={inputHandler} id="second_form_question_749" name="second_form_question_749" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_750"></label></th>
                            <th><label htmlFor="second_form_question_751">Written As per MIS</label></th>
                            <th><label htmlFor="second_form_question_752">screenshot of dashboard stating number of e-pledge register</label></th>
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
                            <th><label htmlFor="second_form_question_753"></label></th>
                            <th><label htmlFor="second_form_question_754"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.1</td>
                            <td>No. of E-Pledges registered on the portal by citizens of the Local body individually during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_750} onChange={inputHandler} id="second_form_question_750" name="second_form_question_750" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_751} onChange={inputHandler} id="second_form_question_751" name="second_form_question_751" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_752} onChange={inputHandler} id="second_form_question_752" name="second_form_question_752" required>
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
                            <td><input type="text" value={formData.second_form_question_753} onChange={inputHandler} id="second_form_question_753" name="second_form_question_753" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_754} onChange={inputHandler} id="second_form_question_754" name="second_form_question_754" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_755"></label></th>
                            <th><label htmlFor="second_form_question_756">Written As per MIS</label></th>
                            <th><label htmlFor="second_form_question_757">screenshot of dashboard stating number of e-pledge register</label></th>
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
                            <th><label htmlFor="second_form_question_758"></label></th>
                            <th><label htmlFor="second_form_question_759"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>No. of E-Pledges registered on the portal by citizens of the Local body in a group during MVA 4.0 for 3 quarters starting from July to Sept-23</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_755} onChange={inputHandler} id="second_form_question_755" name="second_form_question_755" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_756} onChange={inputHandler} id="second_form_question_756" name="second_form_question_756" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_757} onChange={inputHandler} id="second_form_question_757" name="second_form_question_757" required>
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
                            <td><input type="text" value={formData.second_form_question_758} onChange={inputHandler} id="second_form_question_758" name="second_form_question_758" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_759} onChange={inputHandler} id="second_form_question_759" name="second_form_question_759" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_760"></label></th>
                            <th><label htmlFor="second_form_question_761">Written As per MIS</label></th>
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
                            <th><label htmlFor="second_form_question_762"></label></th>
                            <th><label htmlFor="second_form_question_763"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Compliance: % of #Epledge registered and complied individually during MVA 4.0</td>
                            <td>75</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_760} onChange={inputHandler} id="second_form_question_760" name="second_form_question_760" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_761} onChange={inputHandler} id="second_form_question_761" name="second_form_question_761" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_762} onChange={inputHandler} id="second_form_question_762" name="second_form_question_762" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_763} onChange={inputHandler} id="second_form_question_763" name="second_form_question_763" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_764"></label></th>
                            <th><label htmlFor="second_form_question_765">Written As per MIS</label></th>
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
                            <th><label htmlFor="second_form_question_766"></label></th>
                            <th><label htmlFor="second_form_question_767"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Compliance: % of #Epledge registered and complied in a group during MVA 4.0</td>
                            <td>25</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_764} onChange={inputHandler} id="second_form_question_764" name="second_form_question_764" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_765} onChange={inputHandler} id="second_form_question_765" name="second_form_question_765" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_766} onChange={inputHandler} id="second_form_question_766" name="second_form_question_766" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_767} onChange={inputHandler} id="second_form_question_767" name="second_form_question_767" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_768"></label></th>
                            <th><label htmlFor="second_form_question_769">Written As per MIS</label></th>
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
                            <th><label htmlFor="second_form_question_770"></label></th>
                            <th><label htmlFor="second_form_question_771"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered) Continuous top performers in all 3 quarters (Top 10 Ranks from every quarter will be considered) </td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_768} onChange={inputHandler} id="second_form_question_768" name="second_form_question_768" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_769} onChange={inputHandler} id="second_form_question_769" name="second_form_question_769" autoComplete='off' placeholder='Enter number' required /></td>
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
                            <td><input type="text" value={formData.second_form_question_770} onChange={inputHandler} id="second_form_question_770" name="second_form_question_770" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_771} onChange={inputHandler} id="second_form_question_771" name="second_form_question_771" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>200</th>
                            <th>5.2</th>
                            <th>Number of Awareness Events/Activities/Spardha conducted by the Local body</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_772"></label></th>
                            <th><label htmlFor="second_form_question_773">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="second_form_question_774">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_775">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_776"></label></th>
                            <th><label htmlFor="second_form_question_777"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_772} onChange={inputHandler} id="second_form_question_772" name="second_form_question_772" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_773} onChange={inputHandler} id="second_form_question_773" name="second_form_question_773" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_774} onChange={inputHandler} id="second_form_question_774" name="second_form_question_774" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_775} onChange={inputHandler} id="second_form_question_775" name="second_form_question_775" required>
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
                            <td><input type="text" value={formData.second_form_question_776} onChange={inputHandler} id="second_form_question_776" name="second_form_question_776" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_777} onChange={inputHandler} id="second_form_question_777" name="second_form_question_777" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_778"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_779"></label></td>
                            <td><label htmlFor="second_form_question_780"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_781"></label>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_778} onChange={inputHandler} id="second_form_question_778" name="second_form_question_778" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_779} onChange={inputHandler} id="second_form_question_779" name="second_form_question_779" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_780} onChange={inputHandler} id="second_form_question_780" name="second_form_question_780" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_781} onChange={inputHandler} id="second_form_question_781" name="second_form_question_781" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_782"></label></td>
                            <td><label htmlFor="second_form_question_783"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_782} onChange={inputHandler} id="second_form_question_782" name="second_form_question_782" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_783} onChange={inputHandler} id="second_form_question_783" name="second_form_question_783" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_784"></label></th>
                            <th><label htmlFor="second_form_question_785">Number of posts from Excel </label></th>
                            <th><label htmlFor="second_form_question_786">Official Facebook Link. during 01.04.232 to 31.03.24(check posts from #majhi vasundhara and #E pledge) & put excel count</label></th>
                            <th><label htmlFor="second_form_question_787">Official twitter handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge) & & put excel count </label></th>
                            <th><label htmlFor="second_form_question_788">Official instagram handle during 01-04-2023 to 31-03-2024(check posts from #majhi vasundhara and #E pledge)  & put excel count </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_789"></label></th>
                            <th><label htmlFor="second_form_question_790"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of likes and shares on posts of awareness events/activities/spardha on social media page of Local body with #majhivasundhara #MissionLiFE</td>
                            <td>200</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_784} onChange={inputHandler} id="second_form_question_784" name="second_form_question_784" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_785} onChange={inputHandler} id="second_form_question_785" name="second_form_question_785" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_786} onChange={inputHandler} id="second_form_question_786" name="second_form_question_786" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_787} onChange={inputHandler} id="second_form_question_787" name="second_form_question_787" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_788} onChange={inputHandler} id="second_form_question_788" name="second_form_question_788" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_789} onChange={inputHandler} id="second_form_question_789" name="second_form_question_789" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_790} onChange={inputHandler} id="second_form_question_790" name="second_form_question_790" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_791"></label></th>
                            <th><label htmlFor="second_form_question_792">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="second_form_question_793">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_794">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_795"></label></th>
                            <th><label htmlFor="second_form_question_796"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Use of eco friendly material for the promotional events/activity of Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_791} onChange={inputHandler} id="second_form_question_791" name="second_form_question_791" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_792} onChange={inputHandler} id="second_form_question_792" name="second_form_question_792" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_793} onChange={inputHandler} id="second_form_question_793" name="second_form_question_793" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_794} onChange={inputHandler} id="second_form_question_794" name="second_form_question_794" required>
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
                            <td><input type="text" value={formData.second_form_question_795} onChange={inputHandler} id="second_form_question_795" name="second_form_question_795" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_796} onChange={inputHandler} id="second_form_question_796" name="second_form_question_796" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_797"></label></th>
                            <th><label htmlFor="second_form_question_798">Number of activities/events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel</label></th>
                            <th><label htmlFor="second_form_question_799">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_800">Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_801"></label></th>
                            <th><label htmlFor="second_form_question_802"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Effective use of Mission LiFE logo in organized activities and events</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_797} onChange={inputHandler} id="second_form_question_797" name="second_form_question_797" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_798} onChange={inputHandler} id="second_form_question_798" name="second_form_question_798" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_799} onChange={inputHandler} id="second_form_question_799" name="second_form_question_799" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_800} onChange={inputHandler} id="second_form_question_800" name="second_form_question_800" required>
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
                            <td><input type="text" value={formData.second_form_question_801} onChange={inputHandler} id="second_form_question_801" name="second_form_question_801" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_802} onChange={inputHandler} id="second_form_question_802" name="second_form_question_802" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_803"></label></th>
                            <th><label htmlFor="second_form_question_804">Number of event conducted by local body written number from excel </label></th>
                            <th><label htmlFor="second_form_question_805">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_806">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_807"></label></th>
                            <th><label htmlFor="second_form_question_808"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.3</td>
                            <td>Number of events conducted by Local body which involved participation of youths / youth groups</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_803} onChange={inputHandler} id="second_form_question_803" name="second_form_question_803" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_804} onChange={inputHandler} id="second_form_question_804" name="second_form_question_804" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_805} onChange={inputHandler} id="second_form_question_805" name="second_form_question_805" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_806} onChange={inputHandler} id="second_form_question_806" name="second_form_question_806" required>
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
                            <td><input type="text" value={formData.second_form_question_807} onChange={inputHandler} id="second_form_question_807" name="second_form_question_807" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_808} onChange={inputHandler} id="second_form_question_808" name="second_form_question_808" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_809"></label></th>
                            <th><label htmlFor="second_form_question_810">Number of Paryawaran Doot from from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                            <th><label htmlFor="second_form_question_811">Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_812">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_813"></label></th>
                            <th><label htmlFor="second_form_question_814"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of Paryavaran Doot identified</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_809} onChange={inputHandler} id="second_form_question_809" name="second_form_question_809" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_810} onChange={inputHandler} id="second_form_question_810" name="second_form_question_810" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_811} onChange={inputHandler} id="second_form_question_811" name="second_form_question_811" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_812} onChange={inputHandler} id="second_form_question_812" name="second_form_question_812" required>
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
                            <td><input type="text" value={formData.second_form_question_813} onChange={inputHandler} id="second_form_question_813" name="second_form_question_813" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_814} onChange={inputHandler} id="second_form_question_814" name="second_form_question_814" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_815"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_816"></label></td>
                            <td><label htmlFor="second_form_question_817"></label>Number of Youth identified as Paryavaran Doot</td>
                            <td><label htmlFor="second_form_question_818"></label>50</td>

                            <td><label htmlFor="second_form_question_819"></label></td>
                            <td><input type="number" value={formData.second_form_question_815} onChange={inputHandler} id="second_form_question_815" name="second_form_question_815" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_816} onChange={inputHandler} id="second_form_question_816" name="second_form_question_816" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_817} onChange={inputHandler} id="second_form_question_817" name="second_form_question_817" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_818} onChange={inputHandler} id="second_form_question_818" name="second_form_question_818" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_820"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_819} onChange={inputHandler} id="second_form_question_819" name="second_form_question_819" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_820} onChange={inputHandler} id="second_form_question_820" name="second_form_question_820" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>(Relative Marking) 100</th>
                            <th></th>
                            <th>Number of events conducted by the Local body with Paryavaran doot</th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_821"></label></th>
                            <th><label htmlFor="second_form_question_822">Number of events conducted  from excel during 01-04-2023 to 31-03-2024 written number from excel </label></th>
                            <th><label htmlFor="second_form_question_823">Social Media Link during 01.04.23 to 31.03.24</label></th>
                            <th><label htmlFor="second_form_question_824">Picture of Social Media Link during 01-04-2023 to 31-03-2024</label></th>
                            <th><label htmlFor="second_form_question_825">No. of Geotagged photos(should have location & Date) during 01-04-2023 to 31-03-2024</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_826"></label></th>
                            <th><label htmlFor="second_form_question_827"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>First half (April – Sept) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_821} onChange={inputHandler} id="second_form_question_821" name="second_form_question_821" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_822} onChange={inputHandler} id="second_form_question_822" name="second_form_question_822" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_823} onChange={inputHandler} id="second_form_question_823" name="second_form_question_823" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_824} onChange={inputHandler} id="second_form_question_824" name="second_form_question_824" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_825} onChange={inputHandler} id="second_form_question_825" name="second_form_question_825" required>
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
                            <td><input type="text" value={formData.second_form_question_826} onChange={inputHandler} id="second_form_question_826" name="second_form_question_826" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_827} onChange={inputHandler} id="second_form_question_827" name="second_form_question_827" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_828"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_829"></label></td>
                            <td><label htmlFor="second_form_question_830"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_831"></label>50</td>

                            <td><label htmlFor="second_form_question_832"></label></td>
                            <td><input type="number" value={formData.second_form_question_828} onChange={inputHandler} id="second_form_question_828" name="second_form_question_828" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_829} onChange={inputHandler} id="second_form_question_829" name="second_form_question_829" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_830} onChange={inputHandler} id="second_form_question_830" name="second_form_question_830" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_831} onChange={inputHandler} id="second_form_question_831" name="second_form_question_831" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_832} onChange={inputHandler} id="second_form_question_832" name="second_form_question_832" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_833"></label></td>
                            <td><label htmlFor="second_form_question_834"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_833} onChange={inputHandler} id="second_form_question_833" name="second_form_question_833" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_834} onChange={inputHandler} id="second_form_question_834" name="second_form_question_834" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_835"></label></th>
                            <th><label htmlFor="second_form_question_836">No. of school in local body as per excel</label></th>
                            <th><label htmlFor="second_form_question_837">No. of school participates in ESS</label></th>
                            <th><label htmlFor="second_form_question_838">Certificate of participation of schools</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_839"></label></th>
                            <th><label htmlFor="second_form_question_840"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.4</td>
                            <td>Percentage of Schools participated in ESS during Majhi Vasundhara Abhiyan 4.0 </td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_835} onChange={inputHandler} id="second_form_question_835" name="second_form_question_835" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_836} onChange={inputHandler} id="second_form_question_836" name="second_form_question_836" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_837} onChange={inputHandler} id="second_form_question_837" name="second_form_question_837" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_838} onChange={inputHandler} id="second_form_question_838" name="second_form_question_838" required>
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
                            <td><input type="text" value={formData.second_form_question_839} onChange={inputHandler} id="second_form_question_839" name="second_form_question_839" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_840} onChange={inputHandler} id="second_form_question_840" name="second_form_question_840" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_841"></label></th>
                            <th><label htmlFor="second_form_question_842">As per Excel</label></th>
                            <th><label htmlFor="second_form_question_843">Certificate of participation of schools</label></th>
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
                            <th><label htmlFor="second_form_question_844"></label></th>
                            <th><label htmlFor="second_form_question_845"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Formation of the group of students and appointment of respective in-charge from each participating school for ESS.</td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_841} onChange={inputHandler} id="second_form_question_841" name="second_form_question_841" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_842} onChange={inputHandler} id="second_form_question_842" name="second_form_question_842" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_843} onChange={inputHandler} id="second_form_question_843" name="second_form_question_843" required>
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
                            <td><input type="text" value={formData.second_form_question_844} onChange={inputHandler} id="second_form_question_844" name="second_form_question_844" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_845} onChange={inputHandler} id="second_form_question_845" name="second_form_question_845" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_846"></label></th>
                            <th><label htmlFor="second_form_question_847">As per Excel</label></th>
                            <th><label htmlFor="second_form_question_848">Geotag photos</label></th>
                            <th><label htmlFor="second_form_question_849">Completion Report</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_850"></label></th>
                            <th><label htmlFor="second_form_question_851"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of annual thematic camps/ campaigns/ activities organized to implement environmental initiatives </td>
                            <td>30</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_846} onChange={inputHandler} id="second_form_question_846" name="second_form_question_846" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_847} onChange={inputHandler} id="second_form_question_847" name="second_form_question_847" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_848} onChange={inputHandler} id="second_form_question_848" name="second_form_question_848" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_849} onChange={inputHandler} id="second_form_question_849" name="second_form_question_849" required>
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
                            <td><input type="text" value={formData.second_form_question_850} onChange={inputHandler} id="second_form_question_850" name="second_form_question_850" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_851} onChange={inputHandler} id="second_form_question_851" name="second_form_question_851" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_852"></label></th>
                            <th><label htmlFor="second_form_question_853">As per Excel</label></th>
                            <th><label htmlFor="second_form_question_854">Community Meeting</label></th>
                            <th><label htmlFor="second_form_question_855">Agenda of meeting</label></th>
                            <th><label htmlFor="second_form_question_856">MoM</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_857"></label></th>
                            <th><label htmlFor="second_form_question_858"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of community meetings/events conducted by the ESS Groups </td>
                            <td>20</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_852} onChange={inputHandler} id="second_form_question_852" name="second_form_question_852" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_853} onChange={inputHandler} id="second_form_question_853" name="second_form_question_853" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_854} onChange={inputHandler} id="second_form_question_854" name="second_form_question_854" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_855} onChange={inputHandler} id="second_form_question_855" name="second_form_question_855" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><input type="number" value={formData.second_form_question_856} onChange={inputHandler} id="second_form_question_856" name="second_form_question_856" autoComplete='off' placeholder='Enter number' required /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_857} onChange={inputHandler} id="second_form_question_857" name="second_form_question_857" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_858} onChange={inputHandler} id="second_form_question_858" name="second_form_question_858" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_859"></label></th>
                            <th><label htmlFor="second_form_question_860">Verify minimum 5 spots created during 01-04-2023 to 31-03-2024  written number from excel</label></th>
                            <th><label htmlFor="second_form_question_861">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_862">Work Completion Certificate</label></th>
                            <th><label htmlFor="second_form_question_863">Location Link</label></th>
                            <th><label htmlFor="second_form_question_864">Geo tagged photograph during 01-04-2023 to 31-03-2024 (photos are focus on Majhi Vasundhara principles) </label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_865"></label></th>
                            <th><label htmlFor="second_form_question_866"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>5.5</td>
                            <td>Number of new spots Developed with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 100 marks will be allocated for each new spot developed.</td>
                            <td>500</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_859} onChange={inputHandler} id="second_form_question_859" name="second_form_question_859" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_860} onChange={inputHandler} id="second_form_question_860" name="second_form_question_860" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_861} onChange={inputHandler} id="second_form_question_861" name="second_form_question_861" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_862} onChange={inputHandler} id="second_form_question_862" name="second_form_question_862" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_863} onChange={inputHandler} id="second_form_question_863" name="second_form_question_863" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_864} onChange={inputHandler} id="second_form_question_864" name="second_form_question_864" required>
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
                            <td><input type="text" value={formData.second_form_question_865} onChange={inputHandler} id="second_form_question_865" name="second_form_question_865" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_866} onChange={inputHandler} id="second_form_question_866" name="second_form_question_866" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Upkeep:Number of old spots (created during MVA 1.0,2.0,3.0) refurbished with focus on Majhi Vasundhara Principles during Majhi Vasundhara Abhiyan 4.0 25 marks will be allocated for each spot refurbished. </th>
                            <th>250</th>
                            <th></th>
                            <th><label htmlFor="second_form_question_867"></label></th>
                            <th><label htmlFor="second_form_question_868">No. of spots</label></th>
                            <th><label htmlFor="second_form_question_869">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_870">Work Completion Certificate</label></th>
                            <th><label htmlFor="second_form_question_871">Geotag photos</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_872"></label></th>
                            <th><label htmlFor="second_form_question_873"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>MV01</td>
                            <td></td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_867} onChange={inputHandler} id="second_form_question_867" name="second_form_question_867" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_868} onChange={inputHandler} id="second_form_question_868" name="second_form_question_868" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_869} onChange={inputHandler} id="second_form_question_869" name="second_form_question_869" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_870} onChange={inputHandler} id="second_form_question_870" name="second_form_question_870" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_871} onChange={inputHandler} id="second_form_question_871" name="second_form_question_871" required>
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
                            <td><input type="text" value={formData.second_form_question_872} onChange={inputHandler} id="second_form_question_872" name="second_form_question_872" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_873} onChange={inputHandler} id="second_form_question_873" name="second_form_question_873" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_874"></label></td>
                            <td><label htmlFor="second_form_question_875"></label></td>
                            <td><label htmlFor="second_form_question_876"></label>MV02</td>
                            <td><label htmlFor="second_form_question_877"></label></td>

                            <td><label htmlFor="second_form_question_878"></label></td>
                            <td><input type="number" value={formData.second_form_question_874} onChange={inputHandler} id="second_form_question_874" name="second_form_question_874" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_875} onChange={inputHandler} id="second_form_question_875" name="second_form_question_875" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_876} onChange={inputHandler} id="second_form_question_876" name="second_form_question_876" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_877} onChange={inputHandler} id="second_form_question_877" name="second_form_question_877" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_878} onChange={inputHandler} id="second_form_question_878" name="second_form_question_878" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_879"></label></td>
                            <td><label htmlFor="second_form_question_880"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_879} onChange={inputHandler} id="second_form_question_879" name="second_form_question_879" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_880} onChange={inputHandler} id="second_form_question_880" name="second_form_question_880" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_881"></label></td>
                            <td><label htmlFor="second_form_question_882"></label></td>
                            <td><label htmlFor="second_form_question_883"></label>MV03</td>
                            <td><label htmlFor="second_form_question_884"></label></td>

                            <td><label htmlFor="second_form_question_885"></label></td>
                            <td><input type="number" value={formData.second_form_question_881} onChange={inputHandler} id="second_form_question_881" name="second_form_question_881" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_882} onChange={inputHandler} id="second_form_question_882" name="second_form_question_882" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_883} onChange={inputHandler} id="second_form_question_883" name="second_form_question_883" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_884} onChange={inputHandler} id="second_form_question_884" name="second_form_question_884" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_885} onChange={inputHandler} id="second_form_question_885" name="second_form_question_885" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_886"></label></td>
                            <td><label htmlFor="second_form_question_887"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={formData.second_form_question_886} onChange={inputHandler} id="second_form_question_886" name="second_form_question_886" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_887} onChange={inputHandler} id="second_form_question_887" name="second_form_question_887" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_888"></label></th>
                            <th><label htmlFor="second_form_question_889">No. of enovative spots developed written from Excel</label></th>
                            <th><label htmlFor="second_form_question_890">Geotag photos</label></th>
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
                            <th><label htmlFor="second_form_question_891"></label></th>
                            <th><label htmlFor="second_form_question_892"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Number of innovative spots developed by using recycled waste during Majhi Vasundhara Abhiyan 4.0</td>
                            <td>50</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_888} onChange={inputHandler} id="second_form_question_888" name="second_form_question_888" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_889} onChange={inputHandler} id="second_form_question_889" name="second_form_question_889" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_890} onChange={inputHandler} id="second_form_question_890" name="second_form_question_890" required>
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
                            <td><input type="text" value={formData.second_form_question_891} onChange={inputHandler} id="second_form_question_891" name="second_form_question_891" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_892} onChange={inputHandler} id="second_form_question_892" name="second_form_question_892" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_893"></label></th>
                            <th><label htmlFor="second_form_question_894">Total number of initiatives funded through alternate funding channels</label></th>
                            <th><label htmlFor="second_form_question_895">Work Order</label> <FontAwesomeIcon icon={faCircleInfo} beat type="button" data-toggle="tooltip" data-placement="top" title="Having Work order more than Five. Enter all. Eg. Tsl009, TSL-0987, TSL-tasd " /></th>
                            <th><label htmlFor="second_form_question_896">Work Completion Certificate</label></th>
                            <th><label htmlFor="second_form_question_897">Financial Brief</label></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_898"></label></th>
                            <th><label htmlFor="second_form_question_899"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td>5.6</td>
                            <td>Number of Majhi Vasundhara Abhiyan initiatives funded through alternate funding channels.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_893} onChange={inputHandler} id="second_form_question_893" name="second_form_question_893" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_894} onChange={inputHandler} id="second_form_question_894" name="second_form_question_894" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="text" value={formData.second_form_question_895} onChange={inputHandler} id="second_form_question_895" name="second_form_question_895" autoComplete='off' placeholder='Enter' required /></td>
                            <td><select value={formData.second_form_question_896} onChange={inputHandler} id="second_form_question_896" name="second_form_question_896" required>
                            <option value="">Choose a Yes/No</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select></td>
                            <td><select value={formData.second_form_question_897} onChange={inputHandler} id="second_form_question_897" name="second_form_question_897" required>
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
                            <td><input type="text" value={formData.second_form_question_898} onChange={inputHandler} id="second_form_question_898" name="second_form_question_898" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_899} onChange={inputHandler} id="second_form_question_899" name="second_form_question_899" autoComplete='off' placeholder='Enter' required /></td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><label htmlFor="second_form_question_900"></label></th>
                            <th><label htmlFor="second_form_question_901">Total amount of money leveraged through Alternative Funding channels</label></th>
                            <th><label htmlFor="second_form_question_902">Details of funding utilization</label></th>
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
                            <th><label htmlFor="second_form_question_903"></label></th>
                            <th><label htmlFor="second_form_question_904"></label></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>(Relative Marking)</td>
                            <td></td>
                            <td>Amount of money leveraged through Alternative Funding channels.</td>
                            <td>100</td>

                            <td></td>
                            <td><input type="number" value={formData.second_form_question_900} onChange={inputHandler} id="second_form_question_900" name="second_form_question_900" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><input type="number" value={formData.second_form_question_901} onChange={inputHandler} id="second_form_question_901" name="second_form_question_901" autoComplete='off' placeholder='Enter number' required /></td>
                            <td><select value={formData.second_form_question_902} onChange={inputHandler} id="second_form_question_902" name="second_form_question_902" required>
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
                            <td><input type="text" value={formData.second_form_question_903} onChange={inputHandler} id="second_form_question_903" name="second_form_question_903" autoComplete='off' placeholder='Enter' required /></td>
                            <td><input type="text" value={formData.second_form_question_904} onChange={inputHandler} id="second_form_question_904" name="second_form_question_904" autoComplete='off' placeholder='Enter' required /></td>
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
