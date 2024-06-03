const mongoose = require("mongoose");


const ruralSchema = new mongoose.Schema({

    ulb_name:{
        type: String,
        required: true
    },
    ulb_code:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    verticals:{
        type: String,
        required: true
    },
    present_date:{
        type: String,
        required: true
    },
    question_1: {
        type: Number,
        required: true
    },
    question_2: {
        type: Number,
        required: true
    },
    question_3: {
        type: String,
        required: true
    },
    question_4: {
        type: String,
        required: true
    },
    question_5: {
        type: String,
        required: true
    },
    question_6: {
        type: String,
        required: true
    },
    question_7: {
        type: String,
        required: true
    },
    question_8: {
        type: String,
        required: true
    },
    question_9: {
        type: String,
        required: true
    },
    question_10: {
        type: Number,
        required: true
    },
    question_11: {
        type: Number,
        required: true
    },
    question_12: {
        type: String,
        required: true
    },
    question_13: {
        type: String,
        required: true
    },
    question_14: {
        type: String,
        required: true
    },
    question_15: {
        type: String,
        required: true
    },
    question_16: {
        type: String,
        required: true
    },
    question_17: {
        type: String,
        required: true
    },
    question_18: {
        type: String,
        required: true
    },
    question_19: {
        type: Number,
        required: true
    },
    question_20: {
        type: Number,
        required: true
    },
    question_21: {
        type: String,
        required: true
    },
    question_22: {
        type: String,
        required: true
    },
    question_23: {
        type: String,
        required: true
    },
    question_24: {
        type: Number,
        required: true
    },
    question_25: {
        type: Number,
        required: true
    },
    question_26: {
        type: String,
        required: true
    },
    question_27: {
        type: String,
        required: true
    },
    question_28: {
        type: String,
        required: true
    },
    question_29: {
        type: Number,
        required: true
    },
    question_30: {
        type: Number,
        required: true
    },
    question_31: {
        type: String,
        required: true
    },
    question_32: {
        type: String,
        required: true
    },
    question_33: {
        type: String,
        required: true
    },
    question_34: {
        type: Number,
        required: true
    },
    question_35: {
        type: String,
        required: true
    },
    question_36: {
        type: String,
        required: true
    },
    question_37: {
        type: String,
        required: true
    },
    question_38: {
        type: String,
        required: true
    },
    question_39: {
        type: String,
        required: true
    },
    question_40: {
        type: String,
        required: true
    },
    question_41: {
        type: String,
        required: true
    },
    question_42: {
        type: String,
        required: true
    },
    question_43: {
        type: String,
        required: true
    },
    question_44: {
        type: String,
        required: true
    },
    question_45: {
        type: Number,
        required: true
    },
    question_46: {
        type: Number,
        required: true
    },
    question_47: {
        type: String,
        required: true
    },
    question_48: {
        type: String,
        required: true
    },
    question_49: {
        type: String,
        required: true
    },
    question_50: {
        type: Number,
        required: true
    },
    question_51: {
        type: Number,
        required: true
    },
    question_52: {
        type: String,
        required: true
    },
    question_53: {
        type: String,
        required: true
    },
    question_54: {
        type: String,
        required: true
    },
    question_55: {
        type: Number,
        required: true
    },
    question_56: {
        type: Number,
        required: true
    },
    question_57: {
        type: String,
        required: true
    },
    question_58: {
        type: String,
        required: true
    },
    question_59: {
        type: String,
        required: true
    },
    question_60: {
        type: Number,
        required: true
    },
    question_61: {
        type: Number,
        required: true
    },
    question_62: {
        type: Number,
        required: true
    },
    question_63: {
        type: String,
        required: true
    },
    question_64: {
        type: String,
        required: true
    },
    question_65: {
        type: String,
        required: true
    },
    question_66: {
        type: String,
        required: true
    },
    question_67: {
        type: String,
        required: true
    },
    question_68: {
        type: String,
        required: true
    },
    question_69: {
        type: String,
        required: true
    },
    question_70: {
        type: String,
        required: true
    },
    question_71: {
        type: Number,
        required: true
    },
    question_72: {
        type: Number,
        required: true
    },
    question_73: {
        type: String,
        required: true
    },
    question_74: {
        type: String,
        required: true
    },
    question_75: {
        type: String,
        required: true
    },
    question_76: {
        type: String,
        required: true
    },
    question_77: {
        type: Number,
        required: true
    },
    question_78: {
        type: Number,
        required: true
    },
    question_79: {
        type: String,
        required: true
    },
    question_80: {
        type: String,
        required: true
    },
    question_81: {
        type: String,
        required: true
    },
    question_82: {
        type: String,
        required: true
    },
    question_83: {
        type: Number,
        required: true
    },
    question_84: {
        type: Number,
        required: true
    },
    question_85: {
        type: String,
        required: true
    },
    question_86: {
        type: String,
        required: true
    },
    question_87: {
        type: String,
        required: true
    },
    question_88: {
        type: String,
        required: true
    },
    question_89: {
        type: String,
        required: true
    },
    question_90: {
        type: String,
        required: true
    },
    question_91: {
        type: String,
        required: true
    },
    question_92: {
        type: String,
        required: true
    },
    question_93: {
        type: String,
        required: true
    },
    question_94: {
        type: Number,
        required: true
    },
    question_95: {
        type: Number,
        required: true
    },
    question_96: {
        type: Number,
        required: true
    },
    question_97: {
        type: Number,
        required: true
    },
    question_98: {
        type: Number,
        required: true
    },
    question_99: {
        type: String,
        required: true
    },
    question_100: {
        type: String,
        required: true
    },
    question_101: {
        type: String,
        required: true
    },
    question_102: {
        type: String,
        required: true
    },
    question_103: {
        type: String,
        required: true
    },
    question_104: {
        type: String,
        required: true
    },
    question_105: {
        type: String,
        required: true
    },
    question_106: {
        type: String,
        required: true
    },
    question_107: {
        type: String,
        required: true
    },
    question_108: {
        type: String,
        required: true
    },
    question_109: {
        type: String,
        required: true
    },
    question_110: {
        type: String,
        required: true
    },
    question_111: {
        type: String,
        required: true
    },
    question_112: {
        type: String,
        required: true
    },
    question_113: {
        type: String,
        required: true
    },
    question_114: {
        type: String,
        required: true
    },
    question_115: {
        type: String,
        required: true
    },
    question_116: {
        type: String,
        required: true
    },
    question_117: {
        type: String,
        required: true
    },
    question_118: {
        type: String,
        required: true
    },
    question_119: {
        type: Number,
        required: true
    },
    question_120: {
        type: Number,
        required: true
    },
    question_121: {
        type: String,
        required: true
    },
    question_122: {
        type: String,
        required: true
    },
    question_123: {
        type: String,
        required: true
    },
    question_124: {
        type: String,
        required: true
    },
    question_125: {
        type: String,
        required: true
    },
    question_126: {
        type: Number,
        required: true
    },
    question_127: {
        type: Number,
        required: true
    },
    question_128: {
        type: String,
        required: true
    },
    question_129: {
        type: String,
        required: true
    },
    question_130: {
        type: String,
        required: true
    },
    question_131: {
        type: String,
        required: true
    },
    question_132: {
        type: Number,
        required: true
    },
    question_133: {
        type: Number,
        required: true
    },
    question_134: {
        type: String,
        required: true
    },
    question_135: {
        type: String,
        required: true
    },
    question_136: {
        type: String,
        required: true
    },
    question_137: {
        type: String,
        required: true
    },
    question_138: {
        type: Number,
        required: true
    },
    question_139: {
        type: Number,
        required: true
    },
    question_140: {
        type: String,
        required: true
    },
    question_141: {
        type: String,
        required: true
    },
    question_142: {
        type: String,
        required: true
    },
    question_143: {
        type: String,
        required: true
    },
    question_144: {
        type: String,
        required: true
    },
    question_145: {
        type: String,
        required: true
    },
    question_146: {
        type: String,
        required: true
    },
    question_147: {
        type: String,
        required: true
    },
    question_148: {
        type: String,
        required: true
    },
    question_149: {
        type: String,
        required: true
    },
    question_150: {
        type: Number,
        required: true
    },
    question_151: {
        type: Number,
        required: true
    },
    question_152: {
        type: String,
        required: true
    },
    question_153: {
        type: String,
        required: true
    },
    question_154: {
        type: String,
        required: true
    },
    question_155: {
        type: Number,
        required: true
    },
    question_156: {
        type: Number,
        required: true
    },
    question_157: {
        type: String,
        required: true
    },
    question_158: {
        type: String,
        required: true
    },
    question_159: {
        type: String,
        required: true
    },
    question_160: {
        type: Number,
        required: true
    },
    question_161: {
        type: Number,
        required: true
    },
    question_162: {
        type: String,
        required: true
    },
    question_163: {
        type: String,
        required: true
    },
    question_164: {
        type: String,
        required: true
    },
    question_165: {
        type: String,
        required: true
    },
    question_166: {
        type: String,
        required: true
    },
    question_167: {
        type: String,
        required: true
    },
    question_168: {
        type: String,
        required: true
    },
    question_169: {
        type: String,
        required: true
    },
    question_170: {
        type: String,
        required: true
    },
    question_171: {
        type: String,
        required: true
    },
    question_172: {
        type: String,
        required: true
    },
    question_173: {
        type: Number,
        required: true
    },
    question_174: {
        type: Number,
        required: true
    },
    question_175: {
        type: String,
        required: true
    },
    question_176: {
        type: String,
        required: true
    },
    question_177: {
        type: String,
        required: true
    },
    question_178: {
        type: String,
        required: true
    },
    question_179: {
        type: String,
        required: true
    },
    question_180: {
        type: Number,
        required: true
    },
    question_181: {
        type: Number,
        required: true
    },
    question_182: {
        type: String,
        required: true
    },
    question_183: {
        type: String,
        required: true
    },
    question_184: {
        type: String,
        required: true
    },
    question_185: {
        type: String,
        required: true
    },
    question_186: {
        type: String,
        required: true
    },
    question_187: {
        type: String,
        required: true
    },
    question_188: {
        type: String,
        required: true
    },
    question_189: {
        type: String,
        required: true
    },
    question_190: {
        type: String,
        required: true
    },
    question_191: {
        type: String,
        required: true
    },
    question_192: {
        type: String,
        required: true
    },
    question_193: {
        type: String,
        required: true
    },
    question_194: {
        type: String,
        required: true
    },
    question_195: {
        type: Number,
        required: true
    },
    question_196: {
        type: Number,
        required: true
    },
    question_197: {
        type: String,
        required: true
    },
    question_198: {
        type: String,
        required: true
    },
    question_199: {
        type: String,
        required: true
    },  
    question_200: {
        type: String,
        required: true
    },
    question_201: {
        type: String,
        required: true
    },
    question_202: {
        type: String,
        required: true
    },
    question_203: {
        type: Number,
        required: true
    },
    question_204: {
        type: Number,
        required: true
    },
    question_205: {
        type: String,
        required: true
    },
    question_206: {
        type: String,
        required: true
    },
    question_207: {
        type: String,
        required: true
    },
    question_208: {
        type: String,
        required: true
    },
    question_209: {
        type: String,
        required: true
    },
    question_210: {
        type: String,
        required: true
    },
    question_211: {
        type: String,
        required: true
    },
    question_212: {
        type: String,
        required: true
    },
    question_213: {
        type: String,
        required: true
    },
    question_214: {
        type: String,
        required: true
    },
    question_215: {
        type: String,
        required: true
    },
    question_216: {
        type: String,
        required: true
    },
    question_217: {
        type: String,
        required: true
    },
    question_218: {
        type: String,
        required: true
    },
    question_219: {
        type: String,
        required: true
    },
    question_220: {
        type: String,
        required: true
    },
    question_221: {
        type: String,
        required: true
    },
    question_222: {
        type: String,
        required: true
    },
    question_223: {
        type: String,
        required: true
    },
    question_224: {
        type: Number,
        required: true
    },
    question_225: {
        type: Number,
        required: true
    },
    question_226: {
        type: Number,
        required: true
    },
    question_227: {
        type: Number,
        required: true
    },
    question_228: {
        type: Number,
        required: true
    },
    question_229: {
        type: Number,
        required: true
    },
    question_230: {
        type: Number,
        required: true
    },
    question_231: {
        type: Number,
        required: true
    },
    question_232: {
        type: Number,
        required: true
    },
    question_233: {
        type: Number,
        required: true
    },
    question_234: {
        type: Number,
        required: true
    },
    question_235: {
        type: Number,
        required: true
    },
    question_236: {
        type: Number,
        required: true
    },
    question_237: {
        type: String,
        required: true
    },
    question_238: {
        type: String,
        required: true
    },
    question_239: {
        type: String,
        required: true
    },
    question_240: {
        type: String,
        required: true
    },
    question_241: {
        type: String,
        required: true
    },
    question_242: {
        type: String,
        required: true
    },
    question_243: {
        type: Number,
        required: true
    },
    question_244: {
        type: Number,
        required: true
    },
    question_245: {
        type: String,
        required: true
    },
    question_246: {
        type: String,
        required: true
    },
    question_247: {
        type: String,
        required: true
    },
    question_248: {
        type: String,
        required: true
    },
    question_249: {
        type: Number,
        required: true
    },
    question_250: {
        type: Number,
        required: true
    },
    question_251: {
        type: String,
        required: true
    },
    question_252: {
        type: String,
        required: true
    },
    question_253: {
        type: String,
        required: true
    },
    question_254: {
        type: String,
        required: true
    },
    question_255: {
        type: String,
        required: true
    },
    question_256: {
        type: String,
        required: true
    },
    question_257: {
        type: String,
        required: true
    },
    question_258: {
        type: Number,
        required: true
    },
    question_259: {
        type: Number,
        required: true
    },
    question_260: {
        type: String,
        required: true
    },
    question_261: {
        type: String,
        required: true
    },
    question_262: {
        type: String,
        required: true
    },
    question_263: {
        type: String,
        required: true
    },
    question_264: {
        type: String,
        required: true
    },
    question_265: {
        type: String,
        required: true
    },
    question_266: {
        type: String,
        required: true
    },
    question_267: {
        type: String,
        required: true
    },
    question_268: {
        type: String,
        required: true
    },
    question_269: {
        type: Number,
        required: true
    },
    question_270: {
        type: Number,
        required: true
    },
    question_271: {
        type: String,
        required: true
    },
    question_272: {
        type: String,
        required: true
    },
    question_273: {
        type: String,
        required: true
    },
    question_274: {
        type: Number,
        required: true
    },
    question_275: {
        type: Number,
        required: true
    },
    question_276: {
        type: String,
        required: true
    },
    question_278: {
        type: String,
        required: true
    },
    question_279: {
        type: Number,
        required: true
    },
    question_280: {
        type: Number,
        required: true
    },
    question_281: {
        type: String,
        required: true
    },
    question_282: {
        type: String,
        required: true
    },
    question_283: {
        type: String,
        required: true
    },
    question_284: {
        type: Number,
        required: true
    },
    question_285: {
        type: Number,
        required: true
    },
    question_286: {
        type: String,
        required: true
    },
    question_287: {
        type: String,
        required: true
    },
    question_288: {
        type: String,
        required: true
    },
    question_289: {
        type: Number,
        required: true
    },
    question_290: {
        type: Number,
        required: true
    },
    question_291: {
        type: String,
        required: true
    },
    question_292: {
        type: String,
        required: true
    },
    question_293: {
        type: String,
        required: true
    },
    question_294: {
        type: Number,
        required: true
    },
    question_295: {
        type: Number,
        required: true
    },
    question_296: {
        type: String,
        required: true
    },
    question_297: {
        type: String,
        required: true
    },
    question_298: {
        type: String,
        required: true
    },
    question_299: {
        type: Number,
        required: true
    },
    question_300: {
        type: Number,
        required: true
    },
    question_301: {
        type: String,
        required: true
    },
    question_302: {
        type: String,
        required: true
    },
    question_303: {
        type: String,
        required: true
    },
    question_304: {
        type: String,
        required: true
    },
    question_305: {
        type: String,
        required: true
    },
    question_306: {
        type: String,
        required: true
    },
    question_307: {
        type: Number,
        required: true
    },
    question_308: {
        type: Number,
        required: true
    },
    question_309: {
        type: String,
        required: true
    },
    question_310: {
        type: String,
        required: true
    },
    question_311: {
        type: String,
        required: true
    },
    question_312: {
        type: String,
        required: true
    },
    question_313: {
        type: String,
        required: true
    },
    question_314: {
        type: String,
        required: true
    },
    question_315: {
        type: Number,
        required: true
    },
    question_316: {
        type: Number,
        required: true
    },
    question_317: {
        type: String,
        required: true
    },
    question_318: {
        type: String,
        required: true
    },
    question_319: {
        type: String,
        required: true
    },
    question_320: {
        type: Number,
        required: true
    },
    question_321: {
        type: Number,
        required: true
    },
    question_322: {
        type: String,
        required: true
    },
    question_323: {
        type: String,
        required: true
    },
    question_324: {
        type: String,
        required: true
    },
    question_325: {
        type: Number,
        required: true
    },
    question_326: {
        type: Number,
        required: true
    },
    question_327: {
        type: String,
        required: true
    },
    question_328: {
        type: String,
        required: true
    },
    question_329: {
        type: String,
        required: true
    },
    question_330: {
        type: Number,
        required: true
    },
    question_331: {
        type: Number,
        required: true
    },
    question_332: {
        type: String,
        required: true
    },
    question_333: {
        type: String,
        required: true
    },
    question_334: {
        type: String,
        required: true
    },
    question_335: {
        type: Number,
        required: true
    },
    question_336: {
        type: Number,
        required: true
    },
    question_337: {
        type: String,
        required: true
    },
    question_338: {
        type: String,
        required: true
    },
    question_339: {
        type: String,
        required: true
    },
    question_340: {
        type: Number,
        required: true
    },
    question_341: {
        type: Number,
        required: true
    },
    question_342: {
        type: String,
        required: true
    },
    question_343: {
        type: String,
        required: true
    },
    question_344: {
        type: String,
        required: true
    },
    question_345: {
        type: Number,
        required: true
    },
    question_346: {
        type: Number,
        required: true
    },
    question_347: {
        type: String,
        required: true
    },
    question_348: {
        type: String,
        required: true
    },
    question_349: {
        type: String,
        required: true
    },
    question_350: {
        type: Number,
        required: true
    },
    question_351: {
        type: Number,
        required: true
    },
    question_352: {
        type: String,
        required: true
    },
    question_353: {
        type: String,
        required: true
    },
    question_354: {
        type: String,
        required: true
    },
    question_355: {
        type: Number,
        required: true
    },
    question_356: {
        type: Number,
        required: true
    },
    question_357: {
        type: String,
        required: true
    },
    question_358: {
        type: String,
        required: true
    },
    question_359: {
        type: String,
        required: true
    },
    question_360: {
        type: String,
        required: true
    },
    question_361: {
        type: Number,
        required: true
    },
    question_362: {
        type: Number,
        required: true
    },
    question_363: {
        type: String,
        required: true
    },
    question_364: {
        type: String,
        required: true
    },
    question_365: {
        type: String,
        required: true
    },
    question_366: {
        type: String,
        required: true
    },
    question_367: {
        type: Number,
        required: true
    },
    question_368: {
        type: Number,
        required: true
    },
    question_369: {
        type: String,
        required: true
    },
    question_370: {
        type: String,
        required: true
    },

    question_371: {
        type: String,
        required: true
    },
    question_372: {
        type: String,
        required: true
    },
    question_373: {
        type: Number,
        required: true
    },
    question_374: {
        type: Number,
        required: true
    },
    question_375: {
        type: String,
        required: true
    },
    question_376: {
        type: String,
        required: true
    },
    question_377: {
        type: String,
        required: true
    },

    question_378: {
        type: String,
        required: true
    },
    question_379: {
        type: String,
        required: true
    },
    question_380: {
        type: String,
        required: true
    },

    question_381: {
        type: Number,
        required: true
    },
    question_382: {
        type: Number,
        required: true
    },
    question_383: {
        type: String,
        required: true
    },
    question_384: {
        type: String,
        required: true
    },
    question_385: {
        type: Number,
        required: true
    },
    question_386: {
        type: Number,
        required: true
    },
    question_387: {
        type: String,
        required: true
    },
    question_388: {
        type: String,
        required: true
    },
    question_389: {
        type: String,
        required: true
    },
    question_390: {
        type: String,
        required: true
    },
    question_391: {
        type: String,
        required: true
    },
    question_392: {
        type: String,
        required: true
    },
    question_393: {
        type: Number,
        required: true
    },
    question_394: {
        type: Number,
        required: true
    },
    question_395: {
        type: String,
        required: true
    },
    question_396: {
        type: String,
        required: true
    },
    question_397: {
        type: Number,
        required: true
    },
    question_398: {
        type: Number,
        required: true
    },
    question_399: {
        type: String,
        required: true
    },
    question_400: {
        type: String,
        required: true
    },

    question_401: {
        type: String,
        required: true
    },
    question_402: {
        type: String,
        required: true
    },
    question_403: {
        type: Number,
        required: true
    },
    question_404: {
        type: Number,
        required: true
    },
    question_405: {
        type: String,
        required: true
    },
    question_406: {
        type: String,
        required: true
    },
    question_407: {
        type: String,
        required: true
    },
    question_408: {
        type: String,
        required: true
    },
    question_409: {
        type: String,
        required: true
    },
    question_410: {
        type: String,
        required: true
    },
    question_411: {
        type: String,
        required: true
    },
    question_412: {
        type: String,
        required: true
    },
    question_413: {
        type: String,
        required: true
    },
    question_414: {
        type: String,
        required: true
    },
    question_415: {
        type: String,
        required: true
    },
    question_416: {
        type: String,
        required: true
    },
    question_417: {
        type: String,
        required: true
    },
    question_418: {
        type: String,
        required: true
    },
    question_419: {
        type: String,
        required: true
    },
    question_420: {
        type: String,
        required: true
    },
    question_421: {
        type: String,
        required: true
    },
    question_422: {
        type: String,
        required: true
    },
    question_423: {
        type: String,
        required: true
    },
    question_424: {
        type: String,
        required: true
    },
    question_425: {
        type: String,
        required: true
    },
    question_426: {
        type: String,
        required: true
    },
    question_427: {
        type: Number,
        required: true
    },
    question_428: {
        type: Number,
        required: true
    },
    question_429: {
        type: String,
        required: true
    },
    question_430: {
        type: String,
        required: true
    },
    question_431: {
        type: String,
        required: true
    },
    question_432: {
        type: Number,
        required: true
    },
    question_433: {
        type: Number,
        required: true
    },
    question_434: {
        type: Number,
        required: true
    },
    question_435: {
        type: String,
        required: true
    },
    question_436: {
        type: String,
        required: true
    },
    question_437: {
        type: String,
        required: true
    },
    question_438: {
        type: Number,
        required: true
    },
    question_439: {
        type: Number,
        required: true
    },
    question_440: {
        type: String,
        required: true
    },
    question_441: {
        type: String,
        required: true
    },
    question_442: {
        type: Number,
        required: true
    },
    question_443: {
        type: Number,
        required: true
    },
    question_444: {
        type: String,
        required: true
    },
    question_445: {
        type: String,
        required: true
    },
    question_446: {
        type: String,
        required: true
    },
    question_447: {
        type: String,
        required: true
    },
    question_448: {
        type: String,
        required: true
    },
    question_449: {
        type: Number,
        required: true
    },
    question_450: {
        type: Number,
        required: true
    },
    question_451: {
        type: String,
        required: true
    },
    question_452: {
        type: String,
        required: true
    },
    question_453: {
        type: String,
        required: true
    },
    question_454: {
        type: Number,
        required: true
    },
    question_455: {
        type: Number,
        required: true
    },
    question_456: {
        type: String,
        required: true
    },
    question_457: {
        type: String,
        required: true
    },
    question_458: {
        type: String,
        required: true
    },
    question_459: {
        type: Number,
        required: true
    },
    question_460: {
        type: Number,
        required: true
    },
    question_461: {
        type: String,
        required: true
    },
    question_462: {
        type: String,
        required: true
    },
    question_463: {
        type: String,
        required: true
    },
    question_464: {
        type: String,
        required: true
    },
    question_465: {
        type: String,
        required: true
    },
    question_466: {
        type: String,
        required: true
    },
    question_467: {
        type: String,
        required: true
    },
    question_468: {
        type: String,
        required: true
    },
    question_469: {
        type: String,
        required: true
    },
    question_470: {
        type: String,
        required: true
    },
    question_471: {
        type: String,
        required: true
    },
    question_472: {
        type: String,
        required: true
    },
    question_473: {
        type: String,
        required: true
    },

    question_474: {
        type: Number,
        required: true
    },
    question_475: {
        type: Number,
        required: true
    },
    question_476: {
        type: String,
        required: true
    },
    question_477: {
        type: String,
        required: true
    },
    question_478: {
        type: String,
        required: true
    },
    question_479: {
        type: String,
        required: true
    },
    question_480: {
        type: String,
        required: true
    },
    question_481: {
        type: String,
        required: true
    },
    question_482: {
        type: String,
        required: true
    },
    question_483: {
        type: String,
        required: true
    },
    question_484: {
        type: String,
        required: true
    },
    question_485: {
        type: String,
        required: true
    },
    question_486: {
        type: String,
        required: true
    },
    question_487: {
        type: String,
        required: true
    },
    question_488: {
        type: String,
        required: true
    },
    question_489: {
        type: String,
        required: true
    },
    question_490: {
        type: String,
        required: true
    },
    question_491: {
        type: Number,
        required: true
    },
    question_492: {
        type: Number,
        required: true
    },
    question_493: {
        type: String,
        required: true
    },
    question_494: {
        type: String,
        required: true
    },
    question_495: {
        type: String,
        required: true
    },
    question_496: {
        type: String,
        required: true
    },
    question_497: {
        type: String,
        required: true
    },
    question_498: {
        type: String,
        required: true
    },
    question_499: {
        type: Number,
        required: true
    },
    question_500: {
        type: Number,
        required: true
    },
    question_501: {
        type: String,
        required: true
    },
    question_502: {
        type: String,
        required: true
    },
    question_503: {
        type: String,
        required: true
    },
    question_504: {
        type: String,
        required: true
    },
    question_505: {
        type: String,
        required: true
    },
    question_506: {
        type: String,
        required: true
    },
    question_507: {
        type: Number,
        required: true
    },
    question_508: {
        type: Number,
        required: true
    },
    question_509: {
        type: String,
        required: true
    },
    question_510: {
        type: String,
        required: true
    },
    question_511: {
        type: String,
        required: true
    },
    question_512: {
        type: String,
        required: true
    },
    question_513: {
        type: String,
        required: true
    },
    question_514: {
        type: String,
        required: true
    },
    question_515: {
        type: Number,
        required: true
    },
    question_516: {
        type: Number,
        required: true
    },
    question_517: {
        type: String,
        required: true
    },
    question_518: {
        type: String,
        required: true
    },
    question_519: {
        type: String,
        required: true
    },
    question_520: {
        type: String,
        required: true
    },
    question_521: {
        type: String,
        required: true
    },
    question_522: {
        type: String,
        required: true
    },
    question_523: {
        type: Number,
        required: true
    },
    question_524: {
        type: Number,
        required: true
    },
    question_525: {
        type: String,
        required: true
    },
    question_526: {
        type: String,
        required: true
    },
    question_527: {
        type: String,
        required: true
    },
    question_528: {
        type: Number,
        required: true
    },
    question_529: {
        type: Number,
        required: true
    },
    question_530: {
        type: String,
        required: true
    },
    question_531: {
        type: String,
        required: true
    },
    question_532: {
        type: String,
        required: true
    },
    question_533: {
        type: Number,
        required: true
    },
    question_534: {
        type: Number,
        required: true
    },
    question_535: {
        type: String,
        required: true
    },
    question_536: {
        type: String,
        required: true
    },
    question_537: {
        type: String,
        required: true
    },
    question_538: {
        type: String,
        required: true
    },
    question_539: {
        type: Number,
        required: true
    },
    question_540: {
        type: Number,
        required: true
    },
    question_541: {
        type: String,
        required: true
    },
    question_542: {
        type: String,
        required: true
    },
    question_543: {
        type: String,
        required: true
    },
    question_544: {
        type: String,
        required: true
    },
    question_545: {
        type: String,
        required: true
    },
    question_546: {
        type: String,
        required: true
    },
    question_547: {
        type: String,
        required: true
    },
    question_548: {
        type: String,
        required: true
    },
    question_549: {
        type: Number,
        required: true
    },
    question_550: {
        type: Number,
        required: true
    },
    question_551: {
        type: String,
        required: true
    },
    question_552: {
        type: String,
        required: true
    },
    question_553: {
        type: String,
        required: true
    },
    question_554: {
        type: String,
        required: true
    },
    question_555: {
        type: Number,
        required: true
    },
    question_556: {
        type: Number,
        required: true
    },
    question_557: {
        type: String,
        required: true
    },
    question_558: {
        type: String,
        required: true
    },
    question_559: {
        type: String,
        required: true
    },
    question_560: {
        type: String,
        required: true
    },
    question_561: {
        type: Number,
        required: true
    },
    question_562: {
        type: Number,
        required: true
    },
    question_563: {
        type: String,
        required: true
    },
    question_564: {
        type: String,
        required: true
    },
    question_565: {
        type: String,
        required: true
    },
    question_566: {
        type: String,
        required: true
    },
    question_567: {
        type: String,
        required: true
    },
    question_568: {
        type: String,
        required: true
    },
    question_569: {
        type: String,
        required: true
    },
    question_570: {
        type: String,
        required: true
    },
    question_571: {
        type: String,
        required: true
    },
    question_572: {
        type: Number,
        required: true
    },
    question_573: {
        type: Number,
        required: true
    },
    question_574: {
        type: String,
        required: true
    },
    question_575: {
        type: String,
        required: true
    },
    question_576: {
        type: String,
        required: true
    },
    question_577: {
        type: String,
        required: true
    },
    question_578: {
        type: String,
        required: true
    },
    question_579: {
        type: Number,
        required: true
    },
    question_580: {
        type: Number,
        required: true
    },
    question_581: {
        type: String,
        required: true
    },
    question_582: {
        type: String,
        required: true
    },
    question_583: {
        type: String,
        required: true
    },
    question_584: {
        type: String,
        required: true
    },
    question_585: {
        type: String,
        required: true
    },
    question_586: {
        type: Number,
        required: true
    },
    question_587: {
        type: Number,
        required: true
    },
    question_588: {
        type: String,
        required: true
    },
    question_589: {
        type: String,
        required: true
    },
    question_590: {
        type: String,
        required: true
    },
    question_591: {
        type: String,
        required: true
    },
    question_592: {
        type: String,
        required: true
    },
    question_593: {
        type: String,
        required: true
    },
    question_594: {
        type: String,
        required: true
    },
    question_595: {
        type: String,
        required: true
    },
    question_596: {
        type: Number,
        required: true
    },
    question_597: {
        type: Number,
        required: true
    },
    question_598: {
        type: String,
        required: true
    },
    question_599: {
        type: String,
        required: true
    },
    question_600: {
        type: String,
        required: true
    },

    question_601: {
        type: String,
        required: true
    },
    question_602: {
        type: String,
        required: true
    },
    question_603: {
        type: String,
        required: true
    },
    question_604: {
        type: String,
        required: true
    },
    question_605: {
        type: String,
        required: true
    },
    question_606: {
        type: Number,
        required: true
    },
    question_607: {
        type: Number,
        required: true
    },
    question_608: {
        type: String,
        required: true
    },
    question_609: {
        type: String,
        required: true
    },
    question_610: {
        type: String,
        required: true
    },
    question_611: {
        type: Number,
        required: true
    },
    question_612: {
        type: Number,
        required: true
    },
    question_613: {
        type: String,
        required: true
    },
    question_614: {
        type: String,
        required: true
    },
    question_615: {
        type: String,
        required: true
    },
    question_616: {
        type: Number,
        required: true
    },
    question_617: {
        type: Number,
        required: true
    },
    question_618: {
        type: String,
        required: true
    },
    question_619: {
        type: String,
        required: true
    },
    question_620: {
        type: String,
        required: true
    },
    question_621: {
        type: Number,
        required: true
    },
    question_622: {
        type: Number,
        required: true
    },
    question_623: {
        type: String,
        required: true
    },
    question_624: {
        type: String,
        required: true
    },
    question_625: {
        type: String,
        required: true
    },
    question_626: {
        type: String,
        required: true
    },
    question_627: {
        type: String,
        required: true
    },
    question_628: {
        type: String,
        required: true
    },
    question_629: {
        type: Number,
        required: true
    },
    question_630: {
        type: Number,
        required: true
    },
    question_631: {
        type: String,
        required: true
    },
    question_632: {
        type: String,
        required: true
    },
    question_633: {
        type: String,
        required: true
    },
    question_634: {
        type: String,
        required: true
    },
    question_635: {
        type: String,
        required: true
    },
    question_636: {
        type: String,
        required: true
    },
    question_637: {
        type: Number,
        required: true
    },
    question_638: {
        type: Number,
        required: true
    },
    question_639: {
        type: String,
        required: true
    },
    question_640: {
        type: String,
        required: true
    },
    question_641: {
        type: String,
        required: true
    },
    question_642: {
        type: Number,
        required: true
    },
    question_643: {
        type: Number,
        required: true
    },
    question_644: {
        type: String,
        required: true
    },
    question_645: {
        type: String,
        required: true
    },
    question_646: {
        type: String,
        required: true
    },
    question_647: {
        type: Number,
        required: true
    },
    question_648: {
        type: Number,
        required: true
    },
    question_649: {
        type: String,
        required: true
    },
    question_650: {
        type: String,
        required: true
    },
    question_651: {
        type: String,
        required: true
    },
    question_652: {
        type: Number,
        required: true
    },
    question_653: {
        type: Number,
        required: true
    },
    question_654: {
        type: String,
        required: true
    },
    question_655: {
        type: String,
        required: true
    },
    question_656: {
        type: String,
        required: true
    },
    question_657: {
        type: Number,
        required: true
    },
    question_658: {
        type: Number,
        required: true
    },
    question_659: {
        type: String,
        required: true
    },
    question_660: {
        type: String,
        required: true
    },
    question_661: {
        type: String,
        required: true
    },
    question_662: {
        type: String,
        required: true
    },
    question_663: {
        type: String,
        required: true
    },
    question_664: {
        type: String,
        required: true
    },
    question_665: {
        type: Number,
        required: true
    },
    question_666: {
        type: Number,
        required: true
    },
    question_667: {
        type: String,
        required: true
    },
    question_668: {
        type: String,
        required: true
    },
    question_669: {
        type: String,
        required: true
    },
    question_670: {
        type: String,
        required: true
    },
    question_671: {
        type: String,
        required: true
    },
    question_672: {
        type: String,
        required: true
    },
    question_673: {
        type: Number,
        required: true
    },
    question_674: {
        type: Number,
        required: true
    },
    question_675: {
        type: String,
        required: true
    },
    question_676: {
        type: String,
        required: true
    },
    question_677: {
        type: String,
        required: true
    },
    question_678: {
        type: String,
        required: true
    },
    question_679: {
        type: String,
        required: true
    },
    question_680: {
        type: String,
        required: true
    },
    question_681: {
        type: Number,
        required: true
    },
    question_682: {
        type: Number,
        required: true
    },
    question_683: {
        type: String,
        required: true
    },
    question_684: {
        type: String,
        required: true
    },
    question_685: {
        type: String,
        required: true
    },
    question_686: {
        type: String,
        required: true
    },
    question_687: {
        type: String,
        required: true
    },
    question_688: {
        type: String,
        required: true
    },
    question_689: {
        type: Number,
        required: true
    },
    question_690: {
        type: Number,
        required: true
    },
    question_691: {
        type: String,
        required: true
    },
    question_692: {
        type: String,
        required: true
    },
    question_693: {
        type: String,
        required: true
    },
    question_694: {
        type: Number,
        required: true
    },
    question_695: {
        type: Number,
        required: true
    },
    question_696: {
        type: String,
        required: true
    },
    question_697: {
        type: String,
        required: true
    },
    question_698: {
        type: String,
        required: true
    },
    question_699: {
        type: Number,
        required: true
    },
    question_700: {
        type: Number,
        required: true
    },

    question_701: {
        type: String,
        required: true
    },
    question_702: {
        type: String,
        required: true
    },
    question_703: {
        type: Number,
        required: true
    },
    question_704: {
        type: Number,
        required: true
    },
    question_705: {
        type: String,
        required: true
    },
    question_706: {
        type: String,
        required: true
    },
    question_707: {
        type: Number,
        required: true
    },
    question_708: {
        type: Number,
        required: true
    },
    question_709: {
        type: String,
        required: true
    },
    question_710: {
        type: String,
        required: true
    },
    question_711: {
        type: Number,
        required: true
    },
    question_712: {
        type: Number,
        required: true
    },
    question_713: {
        type: String,
        required: true
    },
    question_714: {
        type: String,
        required: true
    },
    question_715: {
        type: String,
        required: true
    },
    question_716: {
        type: String,
        required: true
    },
    question_717: {
        type: Number,
        required: true
    },
    question_718: {
        type: Number,
        required: true
    },
    question_719: {
        type: String,
        required: true
    },
    question_720: {
        type: String,
        required: true
    },
    question_721: {
        type: String,
        required: true
    },
    question_722: {
        type: String,
        required: true
    },
    question_723: {
        type: Number,
        required: true
    },
    question_724: {
        type: Number,
        required: true
    },
    question_725: {
        type: Number,
        required: true
    },
    question_726: {
        type: Number,
        required: true
    },
    question_727: {
        type: Number,
        required: true
    },
    question_728: {
        type: String,
        required: true
    },
    question_729: {
        type: String,
        required: true
    },
    question_730: {
        type: Number,
        required: true
    },
    question_731: {
        type: Number,
        required: true
    },
    question_732: {
        type: String,
        required: true
    },
    question_733: {
        type: String,
        required: true
    },
    question_734: {
        type: String,
        required: true
    },
    question_735: {
        type: String,
        required: true
    },
    question_736: {
        type: Number,
        required: true
    },
    question_737: {
        type: Number,
        required: true
    },
    question_738: {
        type: String,
        required: true
    },
    question_739: {
        type: String,
        required: true
    },
    question_740: {
        type: String,
        required: true
    },
    question_741: {
        type: String,
        required: true
    },
    question_742: {
        type: Number,
        required: true
    },
    question_743: {
        type: Number,
        required: true
    },
    question_744: {
        type: String,
        required: true
    },
    question_745: {
        type: String,
        required: true
    },
    question_746: {
        type: String,
        required: true
    },
    question_747: {
        type: String,
        required: true
    },
    question_748: {
        type: Number,
        required: true
    },
    question_749: {
        type: Number,
        required: true
    },
    question_750: {
        type: String,
        required: true
    },
    question_751: {
        type: String,
        required: true
    },
    question_752: {
        type: String,
        required: true
    },
    question_753: {
        type: String,
        required: true
    },
    question_754: {
        type: Number,
        required: true
    },
    question_755: {
        type: Number,
        required: true
    },
    question_756: {
        type: String,
        required: true
    },
    question_757: {
        type: String,
        required: true
    },
    question_758: {
        type: String,
        required: true
    },
    question_759: {
        type: String,
        required: true
    },
    question_760: {
        type: Number,
        required: true
    },
    question_761: {
        type: Number,
        required: true
    },
    question_762: {
        type: String,
        required: true
    },
    question_763: {
        type: String,
        required: true
    },
    question_764: {
        type: String,
        required: true
    },
    question_765: {
        type: String,
        required: true
    },
    question_766: {
        type: String,
        required: true
    },
    question_767: {
        type: Number,
        required: true
    },
    question_768: {
        type: Number,
        required: true
    },
    question_769: {
        type: String,
        required: true
    },
    question_770: {
        type: String,
        required: true
    },
    question_771: {
        type: String,
        required: true
    },
    question_772: {
        type: String,
        required: true
    },
    question_773: {
        type: String,
        required: true
    },
    question_774: {
        type: Number,
        required: true
    },
    question_775: {
        type: Number,
        required: true
    },
    question_776: {
        type: Number,
        required: true
    },
    question_777: {
        type: String,
        required: true
    },
    question_778: {
        type: String,
        required: true
    },
    question_779: {
        type: String,
        required: true
    },
    question_780: {
        type: Number,
        required: true
    },
    question_781: {
        type: Number,
        required: true
    },
    question_782: {
        type: String,
        required: true
    },
    question_783: {
        type: String,
        required: true
    },
    question_784: {
        type: String,
        required: true
    },
    question_785: {
        type: Number,
        required: true
    },
    question_786: {
        type: Number,
        required: true
    },
    question_787: {
        type: String,
        required: true
    },
    question_788: {
        type: String,
        required: true
    },
    question_789: {
        type: String,
        required: true
    },
    question_790: {
        type: String,
        required: true
    },
    question_791: {
        type: Number,
        required: true
    },
    question_792: {
        type: Number,
        required: true
    },
    question_793: {
        type: String,
        required: true
    },
    question_794: {
        type: String,
        required: true
    },
    question_795: {
        type: Number,
        required: true
    },
    question_796: {
        type: String,
        required: true
    },
    question_797: {
        type: String,
        required: true
    },
    question_798: {
        type: Number,
        required: true
    },
    question_799: {
        type: Number,
        required: true
    },
    question_800: {
        type: String,
        required: true
    },

    question_801: {
        type: String,
        required: true
    },
    question_802: {
        type: String,
        required: true
    },
    question_803: {
        type: String,
        required: true
    },
    question_804: {
        type: String,
        required: true
    },
    question_805: {
        type: String,
        required: true
    },
    question_806: {
        type: Number,
        required: true
    },
    question_807: {
        type: Number,
        required: true
    },
    question_808: {
        type: String,
        required: true
    },
    question_809: {
        type: String,
        required: true
    },
    question_810: {
        type: String,
        required: true
    },
    question_811: {
        type: String,
        required: true
    },
    question_812: {
        type: String,
        required: true
    },
    question_813: {
        type: Number,
        required: true
    },
    question_814: {
        type: Number,
        required: true
    },
    question_815: {
        type: String,
        required: true
    },
    question_816: {
        type: String,
        required: true
    },
    question_817: {
        type: String,
        required: true
    },
    question_818: {
        type: String,
        required: true
    },
    question_819: {
        type: String,
        required: true
    },
    question_820: {
        type: Number,
        required: true
    },
    question_821: {
        type: Number,
        required: true
    },
    question_822: {
        type: String,
        required: true
    },
    question_823: {
        type: String,
        required: true
    },
    question_824: {
        type: String,
        required: true
    },
    question_825: {
        type: String,
        required: true
    },
    question_826: {
        type: String,
        required: true
    },
    question_827: {
        type: Number,
        required: true
    },
    question_828: {
        type: Number,
        required: true
    },
    question_829: {
        type: String,
        required: true
    },
    question_830: {
        type: String,
        required: true
    },
    question_831: {
        type: String,
        required: true
    },
    question_832: {
        type: Number,
        required: true
    },
    question_833: {
        type: Number,
        required: true
    },
    question_834: {
        type: String,
        required: true
    },
    question_835: {
        type: String,
        required: true
    },
    question_836: {
        type: String,
        required: true
    },
    question_837: {
        type: String,
        required: true
    },
    question_838: {
        type: String,
        required: true
    },
    question_839: {
        type: Number,
        required: true
    },
    question_840: {
        type: Number,
        required: true
    },
    question_841: {
        type: String,
        required: true
    },
    question_842: {
        type: String,
        required: true
    },
    question_843: {
        type: String,
        required: true
    },

})

const ruralModel = mongoose.model("rural", ruralSchema);

module.exports = ruralModel;

