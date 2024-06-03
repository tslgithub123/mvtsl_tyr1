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
            const response = await axios.get(`/api/v1/amrutview/${ulbCode}`, {
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
            <h3>Edit Amrut City Form</h3>
            <form className='addUserForm'>
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
                            <td>{formData.ulb_name}</td>
                            <td>{formData.ulb_code}</td>
                            <td>{formData.category}</td>
                            <td>{formData.type} </td>
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
                            <td>{formData.second_form_question_1}</td>
                            <td>{formData.second_form_question_2}</td>
                            <td>{formData.second_form_question_3}</td>
                            <td>{formData.second_form_question_4}</td>
                            <td>{formData.second_form_question_5}</td>
                            <td>{formData.second_form_question_6}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_7}</td>
                            <td>{formData.second_form_question_8}</td>
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
                            <td>{formData.second_form_question_9}</td>
                            <td>{formData.second_form_question_10}</td>
                            <td>{formData.second_form_question_11}</td>
                            <td>{formData.second_form_question_12}</td>
                            <td>{formData.second_form_question_14}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_15}</td>
                            <td>{formData.second_form_question_16}</td>
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
                            <td>{formData.second_form_question_17}</td>
                            <td>{formData.second_form_question_18}</td>
                            <td>{formData.second_form_question_19}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_20}</td>
                            <td>{formData.second_form_question_21}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_22"></label></td>
                            <td><label htmlFor="second_form_question_23"></label></td>
                            <td><label htmlFor="second_form_question_24">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_25"></label></td>

                            <td><label htmlFor="second_form_question_26"></label></td>
                            <td>{formData.second_form_question_22}</td>
                            <td>{formData.second_form_question_23}</td>
                            <td>{formData.second_form_question_24}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_25}</td>
                            <td>{formData.second_form_question_26}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_27"></label></td>
                            <td><label htmlFor="second_form_question_28"></label></td>
                            <td><label htmlFor="second_form_question_29">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_30"></label></td>

                            <td><label htmlFor="second_form_question_31"></label></td>
                            <td>{formData.second_form_question_27}</td>
                            <td>{formData.second_form_question_28}</td>
                            <td>{formData.second_form_question_29}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_30}</td>
                            <td>{formData.second_form_question_31}</td>
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
                            <td>{formData.second_form_question_32}</td>
                            <td>{formData.second_form_question_33}</td>
                            <td>{formData.second_form_question_34}</td>
                            <td>{formData.second_form_question_35} </td>
                            <td>{formData.second_form_question_36}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_37}</td>
                            <td>{formData.second_form_question_38}</td>
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
                            <td>{formData.second_form_question_39} </td>
                            <td>{formData.second_form_question_40}</td>
                            <td>{formData.second_form_question_41}</td>
                            <td>{formData.second_form_question_42}</td>
                            <td>{formData.second_form_question_43}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_44}</td>
                            <td>{formData.second_form_question_45}</td>
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
                            <td>{formData.second_form_question_46}</td>
                            <td>{formData.second_form_question_47}</td>
                            <td>{formData.second_form_question_48}</td>
                            <td>{formData.second_form_question_49}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_50}</td>
                            <td>{formData.second_form_question_51}</td>
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
                            <td>{formData.second_form_question_52}</td>
                            <td>{formData.second_form_question_53}</td>
                            <td>{formData.second_form_question_54}</td>
                            <td>{formData.second_form_question_55}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_56}</td>
                            <td>{formData.second_form_question_57}</td>
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
                            <td></td>
                            <td>(Yes/No)</td>
                            <td>100% projects</td>
                            <td>50</td>

                            <td></td>
                            <td>{formData.second_form_question_58}</td>
                            <td>{formData.second_form_question_59}</td>
                            <td>{formData.second_form_question_60}</td>
                            <td>{formData.second_form_question_61}</td>
                            <td>{formData.second_form_question_62} </td>
                            <td>{formData.second_form_question_63}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_64}</td>
                            <td>{formData.second_form_question_65}</td>
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
                            <td>{formData.second_form_question_66}</td>
                            <td>{formData.second_form_question_67}</td>
                            <td>{formData.second_form_question_68}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_69}</td>
                            <td>{formData.second_form_question_70}</td>
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
                            <td>{formData.second_form_question_71}</td>
                            <td>{formData.second_form_question_72}</td>
                            <td>{formData.second_form_question_73}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_74}</td>
                            <td>{formData.second_form_question_75}</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
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
                            <td>{formData.second_form_question_76}</td>
                            <td>{formData.second_form_question_77}</td>
                            <td>{formData.second_form_question_78}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_79}</td>
                            <td>{formData.second_form_question_80}</td>
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
                            <td>{formData.second_form_question_81}</td>
                            <td>{formData.second_form_question_82}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_83}</td>
                            <td>{formData.second_form_question_84}</td>
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
                            <td>{formData.second_form_question_85}</td>
                            <td>{formData.second_form_question_86}</td>
                            <td>{formData.second_form_question_87}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_88}</td>
                            <td>{formData.second_form_question_89}</td>
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
                            <th><label htmlFor="second_form_question_91">No. of areas not less 5000 sq.feet. (For Municipal Council)</label></th>
                            <th><label htmlFor="second_form_question_92">No. of areas less than 5000 sq.feet.</label></th>
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
                            <td>{formData.second_form_question_90}</td>
                            <td>{formData.second_form_question_91}</td>
                            <td>{formData.second_form_question_92}</td>
                            <td>{formData.second_form_question_93}</td>
                            <td>{formData.second_form_question_94}</td>
                            <td>{formData.second_form_question_95} </td>
                            <td>{formData.second_form_question_96} </td>
                            <td>{formData.second_form_question_97}</td>
                            <td>{formData.second_form_question_98}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_99}</td>
                            <td>{formData.second_form_question_100}</td>
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
                            <td>{formData.second_form_question_101}</td>
                            <td>{formData.second_form_question_102}</td>
                            <td>{formData.second_form_question_103}</td>
                            <td>{formData.second_form_question_104}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_105}</td>
                            <td>{formData.second_form_question_106}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_107"></label></td>
                            <td><label htmlFor="second_form_question_108"></label></td>
                            <td><label htmlFor="second_form_question_109">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_110"></label></td>

                            <td><label htmlFor="second_form_question_111"></label></td>
                            <td>{formData.second_form_question_107}</td>
                            <td>{formData.second_form_question_108}</td>
                            <td>{formData.second_form_question_109}</td>
                            <td>{formData.second_form_question_110}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_112"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_111}</td>
                            <td>{formData.second_form_question_112}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_113"></label></td>
                            <td><label htmlFor="second_form_question_114"></label></td>
                            <td><label htmlFor="second_form_question_115">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_116"></label></td>

                            <td><label htmlFor="second_form_question_117"></label></td>
                            <td>{formData.second_form_question_113}</td>
                            <td>{formData.second_form_question_114}</td>
                            <td>{formData.second_form_question_115}</td>
                            <td>{formData.second_form_question_116} </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_118"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_117}</td>
                            <td>{formData.second_form_question_118}</td>
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
                            <td>{formData.second_form_question_119}</td>
                            <td>{formData.second_form_question_120}</td>
                            <td>{formData.second_form_question_121}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_122}</td>
                            <td>{formData.second_form_question_123}</td>
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
                            <td>{formData.second_form_question_124}</td>
                            <td>{formData.second_form_question_125}</td>
                            <td>{formData.second_form_question_126}</td>
                            <td>{formData.second_form_question_127}</td>
                            <td>{formData.second_form_question_128}</td>
                            <td>{formData.second_form_question_129}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_130}</td>
                            <td>{formData.second_form_question_131}</td>
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
                            <td>{formData.second_form_question_132}</td>
                            <td>{formData.second_form_question_133}</td>
                            <td>{formData.second_form_question_134}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_135}</td>
                            <td>{formData.second_form_question_136}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_137"></label></td>
                            <td><label htmlFor="second_form_question_138"></label></td>
                            <td><label htmlFor="second_form_question_139">If ULB has not achieved 33% green cover and has a Tree Plan to achieve a minimum 33% green cover (Tree plan should be published on website)</label></td>
                            <td><label htmlFor="second_form_question_140">50</label></td>

                            <td><label htmlFor="second_form_question_141"></label></td>
                            <td>{formData.second_form_question_137} </td>
                            <td>{formData.second_form_question_138} </td>
                            <td>{formData.second_form_question_139} </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_140}</td>
                            <td>{formData.second_form_question_141}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_142"></label></td>
                            <td><label htmlFor="second_form_question_143"></label></td>
                            <td><label htmlFor="second_form_question_144">If ULB has achieved 33% green cover but they have not prepared plan to increase beyond 33% green cover</label></td>
                            <td><label htmlFor="second_form_question_145">50</label></td>

                            <td><label htmlFor="second_form_question_146"></label></td>
                            <td>{formData.second_form_question_142}</td>
                            <td>{formData.second_form_question_143}</td>
                            <td>{formData.second_form_question_144}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_145}</td>
                            <td>{formData.second_form_question_146}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_147"></label></td>
                            <td><label htmlFor="second_form_question_148"></label></td>
                            <td><label htmlFor="second_form_question_149">If ULB has not achieved 33% green cover and they have not prepared plan to achieve 33% green cover</label></td>
                            <td><label htmlFor="second_form_question_150">50</label></td>

                            <td><label htmlFor="second_form_question_151"></label></td>
                            <td>{formData.second_form_question_147}</td>
                            <td>{formData.second_form_question_148}</td>
                            <td>{formData.second_form_question_149}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_150}</td>
                            <td>{formData.second_form_question_151}</td>
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
                            <td>{formData.second_form_question_152}</td>
                            <td>{formData.second_form_question_153}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_154}</td>
                            <td>{formData.second_form_question_155}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_156"></label></td>
                            <td><label htmlFor="second_form_question_157"></label></td>
                            <td><label htmlFor="second_form_question_158">Haven’t achieved milestone for the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="second_form_question_159"></label></td>

                            <td></td>
                            <td>{formData.second_form_question_156}</td>
                            <td>{formData.second_form_question_157}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_158}</td>
                            <td>{formData.second_form_question_159}</td>
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
                            <td>{formData.second_form_question_160}</td>
                            <td>{formData.second_form_question_161}</td>
                            <td>{formData.second_form_question_162}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_163}</td>
                            <td>{formData.second_form_question_164}</td>
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
                            <td>{formData.second_form_question_165}</td>
                            <td>{formData.second_form_question_166}</td>
                            <td>{formData.second_form_question_167}</td>
                            <td>{formData.second_form_question_168}</td>
                            <td>{formData.second_form_question_169}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_170}</td>
                            <td>{formData.second_form_question_171}</td>
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
                            <td>{formData.second_form_question_172}</td>
                            <td>{formData.second_form_question_173}</td>
                            <td>{formData.second_form_question_174}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_175}</td>
                            <td>{formData.second_form_question_176}</td>
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
                            <td>{formData.second_form_question_177}</td>
                            <td>{formData.second_form_question_178}</td>
                            <td>{formData.second_form_question_179}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_180}</td>
                            <td>{formData.second_form_question_181}</td>
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
                            <td>{formData.second_form_question_182}</td>
                            <td>{formData.second_form_question_183}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_184}</td>
                            <td>{formData.second_form_question_185}</td>
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
                            <td>{formData.second_form_question_186}</td>
                            <td>{formData.second_form_question_187}</td>
                            <td>{formData.second_form_question_188}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_189}</td>
                            <td>{formData.second_form_question_190}</td>
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
                            <td>{formData.second_form_question_191}</td>
                            <td>{formData.second_form_question_192}</td>
                            <td>{formData.second_form_question_193}</td>
                            <td>{formData.second_form_question_194}</td>
                            <td>{formData.second_form_question_195}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_196}</td>
                            <td>{formData.second_form_question_197}</td>
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
                            <td>{formData.second_form_question_198}</td>
                            <td>{formData.second_form_question_199}</td>
                            <td>{formData.second_form_question_200}</td>
                            <td>{formData.second_form_question_201}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_202}</td>
                            <td>{formData.second_form_question_203}</td>
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
                            <td>{formData.second_form_question_204}</td>
                            <td>{formData.second_form_question_205}</td>
                            <td>{formData.second_form_question_206}</td>
                            <td>{formData.second_form_question_207}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_208}</td>
                            <td>{formData.second_form_question_209}</td>
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
                            <td>{formData.second_form_question_210}</td>
                            <td>{formData.second_form_question_211}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_212}</td>
                            <td>{formData.second_form_question_213}</td>
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
                            <td>{formData.second_form_question_214}</td>
                            <td>{formData.second_form_question_215}</td>
                            <td>{formData.second_form_question_216}</td>
                            <td>{formData.second_form_question_217}</td>
                            <td>{formData.second_form_question_218}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_219}</td>
                            <td>{formData.second_form_question_220}</td>
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
                            <td>{formData.second_form_question_221}</td>
                            <td>{formData.second_form_question_222}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_223}</td>
                            <td>{formData.second_form_question_224}</td>
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
                            <td>{formData.second_form_question_225}</td>
                            <td>{formData.second_form_question_226}</td>
                            <td>{formData.second_form_question_227}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_228}</td>
                            <td>{formData.second_form_question_229}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_230">30</label></td>
                            <td><label htmlFor="second_form_question_231"></label></td>
                            <td><label htmlFor="second_form_question_232">Dry waste processing /disposal</label></td>
                            <td><label htmlFor="second_form_question_233"></label></td>

                            <td><label htmlFor="second_form_question_234"></label></td>
                            <td>{formData.second_form_question_230}</td>
                            <td>{formData.second_form_question_231}</td>
                            <td>{formData.second_form_question_232}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_233}</td>
                            <td>{formData.second_form_question_234}</td>
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
                            <td>{formData.second_form_question_235}</td>
                            <td>{formData.second_form_question_236}</td>
                            <td>{formData.second_form_question_237}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_238}</td>
                            <td>{formData.second_form_question_239}</td>
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
                            <td>{formData.second_form_question_240}</td>
                            <td>{formData.second_form_question_241}</td>
                            <td>{formData.second_form_question_242}</td>
                            <td>{formData.second_form_question_243}</td>
                            <td>{formData.second_form_question_244} </td>
                            <td>{formData.second_form_question_245}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_246}</td>
                            <td>{formData.second_form_question_247}</td>
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
                            <td>{formData.second_form_question_248}</td>
                            <td>{formData.second_form_question_249}</td>
                            <td>{formData.second_form_question_250}</td>
                            <td>{formData.second_form_question_251}</td>
                            <td>{formData.second_form_question_252}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_253}</td>
                            <td>{formData.second_form_question_254}</td>
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
                            <td>{formData.second_form_question_255}</td>
                            <td>{formData.second_form_question_256}</td>
                            <td>{formData.second_form_question_257}</td>
                            <td>{formData.second_form_question_258}</td>
                            <td>{formData.second_form_question_259}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_260}</td>
                            <td>{formData.second_form_question_261}</td>
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
                            <td>{formData.second_form_question_262}</td>
                            <td>{formData.second_form_question_263}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_264}</td>
                            <td>{formData.second_form_question_265}</td>
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
                            <td>{formData.second_form_question_266}</td>
                            <td>{formData.second_form_question_267}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_268}</td>
                            <td>{formData.second_form_question_269}</td>
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
                            <td>{formData.second_form_question_270}</td>
                            <td>{formData.second_form_question_271}</td>
                            <td>{formData.second_form_question_272}</td>
                            <td>{formData.second_form_question_273}</td>
                            <td>{formData.second_form_question_274}</td>
                            <td>{formData.second_form_question_275}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_276}</td>
                            <td>{formData.second_form_question_277}</td>
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
                            <td>{formData.second_form_question_278}</td>
                            <td>{formData.second_form_question_279}</td>
                            <td>{formData.second_form_question_280}</td>
                            <td>{formData.second_form_question_281}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_282}</td>
                            <td>{formData.second_form_question_283}</td>
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
                            <td>{formData.second_form_question_284}</td>
                            <td>{formData.second_form_question_285}</td>
                            <td>{formData.second_form_question_286}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_287}</td>
                            <td>{formData.second_form_question_288}</td>
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
                            <td>{formData.second_form_question_289}</td>
                            <td>{formData.second_form_question_290}</td>
                            <td>{formData.second_form_question_291}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_292}</td>
                            <td>{formData.second_form_question_293}</td>
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
                            <td>{formData.second_form_question_294}</td>
                            <td>{formData.second_form_question_295}</td>
                            <td>{formData.second_form_question_296}</td>
                            <td>{formData.second_form_question_297}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_298}</td>
                            <td>{formData.second_form_question_299}</td>
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
                            <td>{formData.second_form_question_300}</td>
                            <td>{formData.second_form_question_301}</td>
                            <td>{formData.second_form_question_302}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_303}</td>
                            <td>{formData.second_form_question_304}</td>
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
                            <td>{formData.second_form_question_305}</td>
                            <td>{formData.second_form_question_306}</td>
                            <td>{formData.second_form_question_307}</td>
                            <td>{formData.second_form_question_308}</td>
                            <td>{formData.second_form_question_309}</td>
                            <td>{formData.second_form_question_310}</td>
                            <td>{formData.second_form_question_311}</td>
                            <td>{formData.second_form_question_312}</td>
                            <td>{formData.second_form_question_313}</td>
                            <td>{formData.second_form_question_314}</td>
                            <td>{formData.second_form_question_315}</td>
                            <td>{formData.second_form_question_316}</td>
                            <td>{formData.second_form_question_317}</td>
                            <td>{formData.second_form_question_318}</td>
                            <td>{formData.second_form_question_319}</td>
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
                            <td>{formData.second_form_question_320}</td>
                            <td>{formData.second_form_question_321}</td>
                            <td>{formData.second_form_question_322}</td>
                            <td>{formData.second_form_question_323}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_324}</td>
                            <td>{formData.second_form_question_325}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_326">(Relative Marking)</label></td>
                            <td><label htmlFor="second_form_question_327"></label></td>
                            <td><label htmlFor="second_form_question_328">Number of Air Quality Monitoring stations, without visible public display</label></td>
                            <td><label htmlFor="second_form_question_329">30</label></td>

                            <td><label htmlFor="second_form_question_330"></label></td>
                            <td>{formData.second_form_question_326}</td>
                            <td>{formData.second_form_question_327}</td>
                            <td>{formData.second_form_question_328}</td>
                            <td>{formData.second_form_question_329}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_331"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_330}</td>
                            <td>{formData.second_form_question_331}</td>
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
                            <td>{formData.second_form_question_332}</td>
                            <td>{formData.second_form_question_333}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_334}</td>
                            <td>{formData.second_form_question_335}</td>
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
                            <td>{formData.second_form_question_336}</td>
                            <td>{formData.second_form_question_337}</td>
                            <td>{formData.second_form_question_338}</td>
                            <td>{formData.second_form_question_339}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_340}</td>
                            <td>{formData.second_form_question_341}</td>
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
                            <td>{formData.second_form_question_342}</td>
                            <td>{formData.second_form_question_343}</td>
                            <td>{formData.second_form_question_344}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_345}</td>
                            <td>{formData.second_form_question_346}</td>
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
                            <td>{formData.second_form_question_347}</td>
                            <td>{formData.second_form_question_348}</td>
                            <td>{formData.second_form_question_349}</td>
                            <td>{formData.second_form_question_350}</td>
                            <td>{formData.second_form_question_351}</td>
                            <td>{formData.second_form_question_352}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_353}</td>
                            <td>{formData.second_form_question_354}</td>
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
                            <td>{formData.second_form_question_355}</td>
                            <td>{formData.second_form_question_356}</td>
                            <td>{formData.second_form_question_357}</td>
                            <td>{formData.second_form_question_358}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_359}</td>
                            <td>{formData.second_form_question_360}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_361"></label></td>
                            <td><label htmlFor="second_form_question_362"></label></td>
                            <td><label htmlFor="second_form_question_363">MV02</label></td>
                            <td><label htmlFor="second_form_question_364"></label></td>

                            <td><label htmlFor="second_form_question_365"></label></td>
                            <td>{formData.second_form_question_361}</td>
                            <td>{formData.second_form_question_362}</td>
                            <td>{formData.second_form_question_363}</td>
                            <td>{formData.second_form_question_364}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_366"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_365}</td>
                            <td>{formData.second_form_question_366}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_367"></label></td>
                            <td><label htmlFor="second_form_question_368"></label></td>
                            <td><label htmlFor="second_form_question_369">MV03</label></td>
                            <td><label htmlFor="second_form_question_370"></label></td>

                            <td><label htmlFor="second_form_question_371"></label></td>
                            <td>{formData.second_form_question_367}</td>
                            <td>{formData.second_form_question_368}</td>
                            <td>{formData.second_form_question_369}</td>
                            <td>{formData.second_form_question_370}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_372"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_371}</td>
                            <td>{formData.second_form_question_372}</td>
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
                            <td>{formData.second_form_question_373}</td>
                            <td>{formData.second_form_question_374}</td>
                            <td>{formData.second_form_question_375}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_376}</td>
                            <td>{formData.second_form_question_377}</td>
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
                            <td>{formData.second_form_question_378}</td>
                            <td>{formData.second_form_question_379}</td>
                            <td>{formData.second_form_question_380}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_381}</td>
                            <td>{formData.second_form_question_382}</td>
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
                            <td>{formData.second_form_question_383}</td>
                            <td>{formData.second_form_question_384}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_385}</td>
                            <td>{formData.second_form_question_386}</td>
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
                            <td>{formData.second_form_question_387}</td>
                            <td>{formData.second_form_question_388}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_389}</td>
                            <td>{formData.second_form_question_390}</td>
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
                            <td>{formData.second_form_question_391}</td>
                            <td>{formData.second_form_question_392}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_393}</td>
                            <td>{formData.second_form_question_394}</td>
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
                            <td>{formData.second_form_question_395}</td>
                            <td>{formData.second_form_question_396}</td>
                            <td>{formData.second_form_question_397}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_398}</td>
                            <td>{formData.second_form_question_399}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_400"></label></td>
                            <td><label htmlFor="second_form_question_401"></label></td>
                            <td><label htmlFor="second_form_question_402">3W EV</label></td>
                            <td><label htmlFor="second_form_question_403">50</label></td>

                            <td><label htmlFor="second_form_question_404"></label></td>
                            <td>{formData.second_form_question_400}</td>
                            <td>{formData.second_form_question_401}</td>
                            <td>{formData.second_form_question_402}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_403}</td>
                            <td>{formData.second_form_question_404}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_405"></label></td>
                            <td><label htmlFor="second_form_question_406"></label></td>
                            <td><label htmlFor="second_form_question_407">4W EV</label></td>
                            <td><label htmlFor="second_form_question_408">100</label></td>

                            <td><label htmlFor="second_form_question_409"></label></td>
                            <td>{formData.second_form_question_405}</td>
                            <td>{formData.second_form_question_406}</td>
                            <td>{formData.second_form_question_407}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_408}</td>
                            <td>{formData.second_form_question_409}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_410"></label></td>
                            <td><label htmlFor="second_form_question_411"></label></td>
                            <td><label htmlFor="second_form_question_412">Buses EV</label></td>
                            <td><label htmlFor="second_form_question_413">100</label></td>

                            <td><label htmlFor="second_form_question_414"></label></td>
                            <td>{formData.second_form_question_410}</td>
                            <td>{formData.second_form_question_411}</td>
                            <td>{formData.second_form_question_412}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_413}</td>
                            <td>{formData.second_form_question_414}</td>
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
                            <td>{formData.second_form_question_415}</td>
                            <td>{formData.second_form_question_416}</td>
                            <td>{formData.second_form_question_417}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_418}</td>
                            <td>{formData.second_form_question_419}</td>
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
                            <td>{formData.second_form_question_420}</td>
                            <td>{formData.second_form_question_421}</td>
                            <td>{formData.second_form_question_422}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_423}</td>
                            <td>{formData.second_form_question_424}</td>
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
                            <td>{formData.second_form_question_425}</td>
                            <td>{formData.second_form_question_426}</td>
                            <td>{formData.second_form_question_427}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_428}</td>
                            <td>{formData.second_form_question_429}</td>
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
                            <td>{formData.second_form_question_430}</td>
                            <td>{formData.second_form_question_431}</td>
                            <td>{formData.second_form_question_432}</td>
                            <td>{formData.second_form_question_433}</td>
                            <td>{formData.second_form_question_434}</td>
                            <td>{formData.second_form_question_435}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_436}</td>
                            <td>{formData.second_form_question_437}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_438"></label></td>
                            <td><label htmlFor="second_form_question_439"></label></td>
                            <td><label htmlFor="second_form_question_440">Fours Wheelers</label></td>
                            <td><label htmlFor="second_form_question_441">15</label></td>

                            <td><label htmlFor="second_form_question_442"></label></td>
                            <td>{formData.second_form_question_438}</td>
                            <td>{formData.second_form_question_439}</td>
                            <td>{formData.second_form_question_440}</td>
                            <td>{formData.second_form_question_441}</td>
                            <td>{formData.second_form_question_442}</td>
                            <td>{formData.second_form_question_443}</td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_443"></label></td>
                            <td><label htmlFor="second_form_question_444"></label></td>
                            <td><label htmlFor="second_form_question_445"></label></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_444}</td>
                            <td>{formData.second_form_question_445}</td>
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
                            <td>{formData.second_form_question_446}</td>
                            <td>{formData.second_form_question_447}</td>
                            <td>{formData.second_form_question_448}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_449}</td>
                            <td>{formData.second_form_question_450}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_451"></label></td>
                            <td><label htmlFor="second_form_question_452"></label></td>
                            <td><label htmlFor="second_form_question_453">Four Wheelers MV02</label></td>
                            <td><label htmlFor="second_form_question_454"></label></td>

                            <td><label htmlFor="second_form_question_455"></label></td>
                            <td>{formData.second_form_question_451}</td>
                            <td>{formData.second_form_question_452}</td>
                            <td>{formData.second_form_question_453}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_454}</td>
                            <td>{formData.second_form_question_455}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_456"></label></td>
                            <td><label htmlFor="second_form_question_457"></label></td>
                            <td><label htmlFor="second_form_question_458">Two Wheelers MV03</label></td>
                            <td><label htmlFor="second_form_question_459"></label></td>

                            <td><label htmlFor="second_form_question_460"></label></td>
                            <td>{formData.second_form_question_456}</td>
                            <td>{formData.second_form_question_457}</td>
                            <td>{formData.second_form_question_458}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_459}</td>
                            <td>{formData.second_form_question_460}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_461"></label></td>
                            <td><label htmlFor="second_form_question_462"></label></td>
                            <td><label htmlFor="second_form_question_463">Four Wheelers MV03</label></td>
                            <td><label htmlFor="second_form_question_464"></label></td>

                            <td><label htmlFor="second_form_question_465"></label></td>
                            <td>{formData.second_form_question_461}</td>
                            <td>{formData.second_form_question_462}</td>
                            <td>{formData.second_form_question_463}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_464}</td>
                            <td>{formData.second_form_question_465}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_466"></label></td>
                            <td><label htmlFor="second_form_question_467"></label></td>
                            <td><label htmlFor="second_form_question_468">Total Two Wheelers</label></td>
                            <td><label htmlFor="second_form_question_469">10</label></td>

                            <td><label htmlFor="second_form_question_470"></label></td>
                            <td>{formData.second_form_question_466}</td>
                            <td>{formData.second_form_question_467}</td>
                            <td>{formData.second_form_question_468}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_469}</td>
                            <td>{formData.second_form_question_470}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_471"></label></td>
                            <td><label htmlFor="second_form_question_472"></label></td>
                            <td><label htmlFor="second_form_question_473">Total Four Wheelers</label></td>
                            <td><label htmlFor="second_form_question_474">10</label></td>

                            <td><label htmlFor="second_form_question_475"></label></td>
                            <td>{formData.second_form_question_471}</td>
                            <td>{formData.second_form_question_472}</td>
                            <td>{formData.second_form_question_473}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_474}</td>
                            <td>{formData.second_form_question_475}</td>
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
                            <td>{formData.second_form_question_476}</td>
                            <td>{formData.second_form_question_477}</td>
                            <td>{formData.second_form_question_478}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_479}</td>
                            <td>{formData.second_form_question_480}</td>
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
                            <td>{formData.second_form_question_481}</td>
                            <td>{formData.second_form_question_482}</td>
                            <td>{formData.second_form_question_483}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_484}</td>
                            <td>{formData.second_form_question_485}</td>
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
                            <td>{formData.second_form_question_486}</td>
                            <td>{formData.second_form_question_487}</td>
                            <td>{formData.second_form_question_488}</td>
                            <td>{formData.second_form_question_489}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_490}</td>
                            <td>{formData.second_form_question_491}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_492"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_493"></label></td>
                            <td><label htmlFor="second_form_question_494"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_495"></label>50</td>

                            <td><label htmlFor="second_form_question_496"></label></td>
                            <td>{formData.second_form_question_492}</td>
                            <td>{formData.second_form_question_493}</td>
                            <td>{formData.second_form_question_494}</td>
                            <td>{formData.second_form_question_495}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_497"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_496}</td>
                            <td>{formData.second_form_question_497}</td>
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
                            <td>{formData.second_form_question_498}</td>
                            <td>{formData.second_form_question_499}</td>
                            <td>{formData.second_form_question_500}</td>
                            <td>{formData.second_form_question_501}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_502}</td>
                            <td>{formData.second_form_question_503}</td>
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
                            <td>{formData.second_form_question_504}</td>
                            <td>{formData.second_form_question_505}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_506}</td>
                            <td>{formData.second_form_question_507}</td>
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
                            <td>{formData.second_form_question_508}</td>
                            <td>{formData.second_form_question_509}</td>
                            <td>{formData.second_form_question_510}</td>
                            <td>{formData.second_form_question_511}</td>
                            <td>{formData.second_form_question_512}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_513}</td>
                            <td>{formData.second_form_question_514}</td>
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
                            <td>{formData.second_form_question_515}</td>
                            <td>{formData.second_form_question_516}</td>
                            <td>{formData.second_form_question_517}</td>
                            <td>{formData.second_form_question_518}</td>
                            <td>{formData.second_form_question_519}</td>
                            <td>{formData.second_form_question_520}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_521}</td>
                            <td>{formData.second_form_question_522}</td>
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
                            <td>{formData.second_form_question_523}</td>
                            <td>{formData.second_form_question_524}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_525}</td>
                            <td>{formData.second_form_question_526}</td>
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
                            <td>{formData.second_form_question_527}</td>
                            <td>{formData.second_form_question_528}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_529}</td>
                            <td>{formData.second_form_question_530}</td>
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
                            <td>{formData.second_form_question_531}</td>
                            <td>{formData.second_form_question_532}</td>
                            <td>{formData.second_form_question_533}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_534}</td>
                            <td>{formData.second_form_question_535}</td>
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
                            <td>{formData.second_form_question_536}</td>
                            <td>{formData.second_form_question_537}</td>
                            <td>{formData.second_form_question_538}</td>
                            <td>{formData.second_form_question_539}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_540}</td>
                            <td>{formData.second_form_question_541}</td>
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
                            <td>{formData.second_form_question_542}</td>
                            <td>{formData.second_form_question_543}</td>
                            <td>{formData.second_form_question_544}</td>
                            <td>{formData.second_form_question_545}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_546}</td>
                            <td>{formData.second_form_question_547}</td>
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
                            <td>{formData.second_form_question_548}</td>
                            <td>{formData.second_form_question_549}</td>
                            <td>{formData.second_form_question_550}</td>
                            <td>{formData.second_form_question_551}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_552}</td>
                            <td>{formData.second_form_question_553}</td>
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
                            <td>{formData.second_form_question_554}</td>
                            <td>{formData.second_form_question_555}</td>
                            <td>{formData.second_form_question_556}</td>
                            <td>{formData.second_form_question_557}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_558}</td>
                            <td>{formData.second_form_question_559}</td>
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
                            <td>{formData.second_form_question_560}</td>
                            <td>{formData.second_form_question_561}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_562}</td>
                            <td>{formData.second_form_question_563}</td>
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
                            <td>{formData.second_form_question_564}</td>
                            <td>{formData.second_form_question_565}</td>
                            <td>{formData.second_form_question_566}</td>
                            <td>{formData.second_form_question_567}</td>
                            <td>{formData.second_form_question_568}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_569}</td>
                            <td>{formData.second_form_question_570}</td>
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
                            <td>{formData.second_form_question_571}</td>
                            <td>{formData.second_form_question_572}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_573}</td>
                            <td>{formData.second_form_question_574}</td>
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
                            <td>{formData.second_form_question_575}</td>
                            <td>{formData.second_form_question_576}</td>
                            <td>{formData.second_form_question_577}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_578}</td>
                            <td>{formData.second_form_question_579}</td>
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
                            <td>{formData.second_form_question_580}</td>
                            <td>{formData.second_form_question_581}</td>
                            <td>{formData.second_form_question_582}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_583}</td>
                            <td>{formData.second_form_question_584}</td>
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
                            <td>{formData.second_form_question_585}</td>
                            <td>{formData.second_form_question_586}</td>
                            <td>{formData.second_form_question_587}</td>
                            <td>{formData.second_form_question_588}</td>
                            <td>{formData.second_form_question_589}</td>
                            <td>{formData.second_form_question_590}</td>
                            <td>{formData.second_form_question_591}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_592}</td>
                            <td>{formData.second_form_question_593}</td>
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
                            <td>{formData.second_form_question_594}</td>
                            <td>{formData.second_form_question_595}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_596}</td>
                            <td>{formData.second_form_question_597}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_598"></label></td>
                            <td><label htmlFor="second_form_question_599"></label></td>
                            <td><label htmlFor="second_form_question_600">Preparation of water quality report</label></td>
                            <td><label htmlFor="second_form_question_601">10</label></td>

                            <td></td>
                            <td>{formData.second_form_question_598}</td>
                            <td>{formData.second_form_question_599}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_600}</td>
                            <td>{formData.second_form_question_601}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_602"></label></td>
                            <td><label htmlFor="second_form_question_603"></label></td>
                            <td><label htmlFor="second_form_question_604">Quality of water as per drinking water Standards </label></td>
                            <td><label htmlFor="second_form_question_605">10</label></td>

                            <td></td>
                            <td>{formData.second_form_question_602}</td>
                            <td>{formData.second_form_question_603}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_604}</td>
                            <td>{formData.second_form_question_605}</td>
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
                            <td>{formData.second_form_question_606}</td>
                            <td>{formData.second_form_question_607}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_608}</td>
                            <td>{formData.second_form_question_609}</td>
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
                            <td>{formData.second_form_question_610}</td>
                            <td>{formData.second_form_question_611}</td>
                            <td>{formData.second_form_question_612}</td>
                            <td>{formData.second_form_question_613}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_614}</td>
                            <td>{formData.second_form_question_615}</td>
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
                            <td>{formData.second_form_question_616}</td>
                            <td>{formData.second_form_question_617}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_618}</td>
                            <td>{formData.second_form_question_619}</td>
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
                            <td>{formData.second_form_question_620}</td>
                            <td>{formData.second_form_question_621}</td>
                            <td>{formData.second_form_question_622}</td>
                            <td>{formData.second_form_question_623}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_624}</td>
                            <td>{formData.second_form_question_625}</td>
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
                            <td>{formData.second_form_question_626}</td>
                            <td>{formData.second_form_question_627}</td>
                            <td>value={formData.second_form_question_628}</td>
                            <td>value={formData.second_form_question_629}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_630}</td>
                            <td>{formData.second_form_question_631}</td>
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
                            <td>{formData.second_form_question_632}</td>
                            <td>{formData.second_form_question_633}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_634}</td>
                            <td>{formData.second_form_question_635}</td>
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
                            <td>{formData.second_form_question_636}</td>
                            <td>{formData.second_form_question_637}</td>
                            <td>{formData.second_form_question_638}</td>
                            <td>{formData.second_form_question_639}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_640}</td>
                            <td>{formData.second_form_question_641}</td>
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
                            <td>{formData.second_form_question_642}</td>
                            <td>{formData.second_form_question_643}</td>
                            <td>{formData.second_form_question_644}</td>
                            <td>{formData.second_form_question_645}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_646}</td>
                            <td>{formData.second_form_question_647}</td>
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
                            <td>{formData.second_form_question_648}</td>
                            <td>{formData.second_form_question_649}</td>
                            <td>{formData.second_form_question_650}</td>
                            <td>{formData.second_form_question_651}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_652}</td>
                            <td>{formData.second_form_question_653}</td>
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
                            <td>{formData.second_form_question_654}</td>
                            <td>{formData.second_form_question_655}</td>
                            <td>{formData.second_form_question_656}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_657}</td>
                            <td>{formData.second_form_question_658}</td>
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
                            <td>{formData.second_form_question_659}</td>
                            <td>{formData.second_form_question_660}</td>
                            <td>{formData.second_form_question_661}</td>
                            <td>{formData.second_form_question_662}</td>
                            <td>{formData.second_form_question_663}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_664}</td>
                            <td>{formData.second_form_question_665}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_666">(Relative Marking)</label></td>
                            <td><label htmlFor="second_form_question_667"></label></td>
                            <td><label htmlFor="second_form_question_668">Second Half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</label></td>
                            <td><label htmlFor="second_form_question_669">100</label></td>

                            <td><label htmlFor="second_form_question_670"></label></td>
                            <td>{formData.second_form_question_666}</td>
                            <td>{formData.second_form_question_667}</td>
                            <td>{formData.second_form_question_668}</td>
                            <td>{formData.second_form_question_669}</td>
                            <td>{formData.second_form_question_670}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_671"></label></td>
                            <td><label htmlFor="second_form_question_672"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_671}</td>
                            <td>{formData.second_form_question_672}</td>
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
                            <td>{formData.second_form_question_673}</td>
                            <td>{formData.second_form_question_674}</td>
                            <td>{formData.second_form_question_675}</td>
                            <td>{formData.second_form_question_676}</td>
                            <td>{formData.second_form_question_677}</td>
                            <td>{formData.second_form_question_678}</td>
                            <td>{formData.second_form_question_679}</td>
                            <td>{formData.second_form_question_680}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_681}</td>
                            <td>{formData.second_form_question_682}</td>
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
                            <td>{formData.second_form_question_683}</td>
                            <td>{formData.second_form_question_684}</td>
                            <td>{formData.second_form_question_685}</td>
                            <td>{formData.second_form_question_686}</td>
                            <td>{formData.second_form_question_687}</td>
                            <td>{formData.second_form_question_688}</td>
                            <td>{formData.second_form_question_689}</td>
                            <td>{formData.second_form_question_690}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_691}</td>
                            <td>{formData.second_form_question_692}</td>
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
                            <td>{formData.second_form_question_693}</td>
                            <td>{formData.second_form_question_694}</td>
                            <td>{formData.second_form_question_695}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_696}</td>
                            <td>{formData.second_form_question_697}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_698"></label></td>
                            <td><label htmlFor="second_form_question_699"></label></td>
                            <td><label htmlFor="second_form_question_700">MV2.0</label></td>
                            <td><label htmlFor="second_form_question_701"></label>100</td>

                            <td><label htmlFor="second_form_question_702"></label></td>
                            <td>{formData.second_form_question_698}</td>
                            <td>{formData.second_form_question_699}</td>
                            <td>{formData.second_form_question_700}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_701}</td>
                            <td>{formData.second_form_question_702}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_703"></label></td>
                            <td><label htmlFor="second_form_question_704"></label></td>
                            <td><label htmlFor="second_form_question_705">MV3.0</label></td>
                            <td><label htmlFor="second_form_question_706"></label>100</td>

                            <td><label htmlFor="second_form_question_707"></label></td>
                            <td>{formData.second_form_question_703}</td>
                            <td>{formData.second_form_question_704}</td>
                            <td>{formData.second_form_question_705}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_706}</td>
                            <td>{formData.second_form_question_707}</td>
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
                            <td>{formData.second_form_question_708}</td>
                            <td>{formData.second_form_question_709}</td>
                            <td>{formData.second_form_question_710}</td>
                            <td>{formData.second_form_question_711}</td>
                            <td>{formData.second_form_question_712}</td>
                            <td>{formData.second_form_question_713}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_714}</td>
                            <td>{formData.second_form_question_715}</td>
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
                            <td>{formData.second_form_question_716}</td>
                            <td>{formData.second_form_question_717}</td>
                            <td>{formData.second_form_question_718}</td>
                            <td>{formData.second_form_question_719}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_720}</td>
                            <td>{formData.second_form_question_721}</td>
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
                            <td>{formData.second_form_question_722}</td>
                            <td>{formData.second_form_question_723}</td>
                            <td>{formData.second_form_question_724}</td>
                            <td>{formData.second_form_question_725}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_726}</td>
                            <td>{formData.second_form_question_727}</td>
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
                            <td>{formData.second_form_question_728}</td>
                            <td>{formData.second_form_question_729}</td>
                            <td>{formData.second_form_question_730}</td>
                            <td>{formData.second_form_question_731}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_732}</td>
                            <td>{formData.second_form_question_733}</td>
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
                            <td>{formData.second_form_question_734}</td>
                            <td>{formData.second_form_question_735}</td>
                            <td>{formData.second_form_question_736}</td>
                            <td>{formData.second_form_question_737}</td>
                            <td>{formData.second_form_question_738}</td>
                            <td>{formData.second_form_question_739}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_740}</td>
                            <td>{formData.second_form_question_741}</td>
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
                            <td>{formData.second_form_question_742}</td>
                            <td>{formData.second_form_question_743}</td>
                            <td>{formData.second_form_question_744}</td>
                            <td>{formData.second_form_question_745}</td>
                            <td>{formData.second_form_question_746}</td>
                            <td>{formData.second_form_question_747}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_748}</td>
                            <td>{formData.second_form_question_749}</td>
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
                            <td>{formData.second_form_question_750}</td>
                            <td>{formData.second_form_question_751}</td>
                            <td>{formData.second_form_question_752}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_753}</td>
                            <td>{formData.second_form_question_754}</td>
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
                            <td>{formData.second_form_question_755}</td>
                            <td>{formData.second_form_question_756}</td>
                            <td>{formData.second_form_question_757}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_758}</td>
                            <td>{formData.second_form_question_759}</td>
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
                            <td>{formData.second_form_question_760}</td>
                            <td>{formData.second_form_question_761}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_762}</td>
                            <td>{formData.second_form_question_763}</td>
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
                            <td>{formData.second_form_question_764}</td>
                            <td>{formData.second_form_question_765}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_766}</td>
                            <td>{formData.second_form_question_767}</td>
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
                            <td>{formData.second_form_question_768}</td>
                            <td>{formData.second_form_question_769}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_770}</td>
                            <td>{formData.second_form_question_771}</td>
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
                            <td>{formData.second_form_question_772}</td>
                            <td>{formData.second_form_question_773}</td>
                            <td>{formData.second_form_question_774}</td>
                            <td>{formData.second_form_question_775}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_776}</td>
                            <td>{formData.second_form_question_777}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_778"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_779"></label></td>
                            <td><label htmlFor="second_form_question_780"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_781"></label>100</td>

                            <td></td>
                            <td>{formData.second_form_question_778}</td>
                            <td>{formData.second_form_question_779}</td>
                            <td>{formData.second_form_question_780}</td>
                            <td>{formData.second_form_question_781}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_782"></label></td>
                            <td><label htmlFor="second_form_question_783"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_782}</td>
                            <td>{formData.second_form_question_783}</td>
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
                            <td>{formData.second_form_question_784}</td>
                            <td>{formData.second_form_question_785}</td>
                            <td>{formData.second_form_question_786}</td>
                            <td>{formData.second_form_question_787}</td>
                            <td>{formData.second_form_question_788}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_789}</td>
                            <td>{formData.second_form_question_790}</td>
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
                            <td>{formData.second_form_question_791}</td>
                            <td>{formData.second_form_question_792}</td>
                            <td>{formData.second_form_question_793}</td>
                            <td>{formData.second_form_question_794}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_795}</td>
                            <td>{formData.second_form_question_796}</td>
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
                            <td>{formData.second_form_question_797}</td>
                            <td>{formData.second_form_question_798}</td>
                            <td>{formData.second_form_question_799}</td>
                            <td>{formData.second_form_question_800}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_801}</td>
                            <td>{formData.second_form_question_802}</td>
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
                            <td>{formData.second_form_question_803}</td>
                            <td>{formData.second_form_question_804}</td>
                            <td>{formData.second_form_question_805}</td>
                            <td>{formData.second_form_question_806}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_807}</td>
                            <td>{formData.second_form_question_808}</td>
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
                            <td>{formData.second_form_question_809}</td>
                            <td>{formData.second_form_question_810}</td>
                            <td>{formData.second_form_question_811}</td>
                            <td>{formData.second_form_question_812}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_813}</td>
                            <td>{formData.second_form_question_814}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_815"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_816"></label></td>
                            <td><label htmlFor="second_form_question_817"></label>Number of Youth identified as Paryavaran Doot</td>
                            <td><label htmlFor="second_form_question_818"></label>50</td>

                            <td><label htmlFor="second_form_question_819"></label></td>
                            <td>{formData.second_form_question_815}</td>
                            <td>{formData.second_form_question_816}</td>
                            <td>{formData.second_form_question_817}</td>
                            <td>{formData.second_form_question_818}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_820"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_819}</td>
                            <td>{formData.second_form_question_820}</td>
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
                            <td>{formData.second_form_question_821}</td>
                            <td>{formData.second_form_question_822}</td>
                            <td>{formData.second_form_question_823}</td>
                            <td>{formData.second_form_question_824}</td>
                            <td>{formData.second_form_question_825}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_826}</td>
                            <td>{formData.second_form_question_827}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_828"></label>(Relative Marking)</td>
                            <td><label htmlFor="second_form_question_829"></label></td>
                            <td><label htmlFor="second_form_question_830"></label>Second half (Oct – March) of the Majhi Vasundhara Abhiyan 4.0</td>
                            <td><label htmlFor="second_form_question_831"></label>50</td>

                            <td><label htmlFor="second_form_question_832"></label></td>
                            <td>{formData.second_form_question_828}</td>
                            <td>{formData.second_form_question_829}</td>
                            <td>{formData.second_form_question_830}</td>
                            <td>{formData.second_form_question_831}</td>
                            <td>{formData.second_form_question_832}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_833"></label></td>
                            <td><label htmlFor="second_form_question_834"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_833}</td>
                            <td>{formData.second_form_question_834}</td>
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
                            <td>{formData.second_form_question_835}</td>
                            <td>{formData.second_form_question_836}</td>
                            <td>{formData.second_form_question_837}</td>
                            <td>{formData.second_form_question_838}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_839}</td>
                            <td>{formData.second_form_question_840}</td>
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
                            <td>{formData.second_form_question_841}</td>
                            <td>{formData.second_form_question_842}</td>
                            <td>{formData.second_form_question_843}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_844}</td>
                            <td>{formData.second_form_question_845}</td>
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
                            <td>{formData.second_form_question_846}</td>
                            <td>{formData.second_form_question_847}</td>
                            <td>{formData.second_form_question_848}</td>
                            <td>{formData.second_form_question_849}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_850}</td>
                            <td>{formData.second_form_question_851}</td>
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
                            <td>{formData.second_form_question_852}</td>
                            <td>{formData.second_form_question_853}</td>
                            <td>{formData.second_form_question_854}</td>
                            <td>{formData.second_form_question_855}</td>
                            <td>{formData.second_form_question_856}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_857}</td>
                            <td>{formData.second_form_question_858}</td>
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
                            <td>{formData.second_form_question_859}</td>
                            <td>{formData.second_form_question_860}</td>
                            <td>{formData.second_form_question_861}</td>
                            <td>{formData.second_form_question_862}</td>
                            <td>{formData.second_form_question_863}</td>
                            <td>{formData.second_form_question_864}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_865}</td>
                            <td>{formData.second_form_question_866}</td>
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
                            <td>{formData.second_form_question_867}</td>
                            <td>{formData.second_form_question_868}</td>
                            <td>{formData.second_form_question_869}</td>
                            <td>{formData.second_form_question_870}</td>
                            <td>{formData.second_form_question_871}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_872}</td>
                            <td>{formData.second_form_question_873}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_874"></label></td>
                            <td><label htmlFor="second_form_question_875"></label></td>
                            <td><label htmlFor="second_form_question_876"></label>MV02</td>
                            <td><label htmlFor="second_form_question_877"></label></td>

                            <td><label htmlFor="second_form_question_878"></label></td>
                            <td>{formData.second_form_question_874}</td>
                            <td>{formData.second_form_question_875}</td>
                            <td>{formData.second_form_question_876}</td>
                            <td>{formData.second_form_question_877}</td>
                            <td>{formData.second_form_question_878}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_879"></label></td>
                            <td><label htmlFor="second_form_question_880"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_879}</td>
                            <td>{formData.second_form_question_880}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><label htmlFor="second_form_question_881"></label></td>
                            <td><label htmlFor="second_form_question_882"></label></td>
                            <td><label htmlFor="second_form_question_883"></label>MV03</td>
                            <td><label htmlFor="second_form_question_884"></label></td>

                            <td><label htmlFor="second_form_question_885"></label></td>
                            <td>{formData.second_form_question_881}</td>
                            <td>{formData.second_form_question_882}</td>
                            <td>{formData.second_form_question_883}</td>
                            <td>{formData.second_form_question_884}</td>
                            <td>{formData.second_form_question_885}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><label htmlFor="second_form_question_886"></label></td>
                            <td><label htmlFor="second_form_question_887"></label></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_886}</td>
                            <td>{formData.second_form_question_887}</td>
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
                            <td>{formData.second_form_question_888}</td>
                            <td>{formData.second_form_question_889}</td>
                            <td>{formData.second_form_question_890}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_891}</td>
                            <td>{formData.second_form_question_892}</td>
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
                            <td>{formData.second_form_question_893}</td>
                            <td>{formData.second_form_question_894}</td>
                            <td>{formData.second_form_question_895}</td>
                            <td>{formData.second_form_question_896}</td>
                            <td>{formData.second_form_question_897}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_898}</td>
                            <td>{formData.second_form_question_899}</td>
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
                            <td>{formData.second_form_question_900}</td>
                            <td>{formData.second_form_question_901}</td>
                            <td>{formData.second_form_question_902}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{formData.second_form_question_903}</td>
                            <td>{formData.second_form_question_904}</td>
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
