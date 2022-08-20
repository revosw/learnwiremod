export default function (hljs) {
  return {
      name: "zasm",
      case_insensitive: true,
      contains: [
          {
              className: "operation",
              match: OPLIST
          },
          {
              className: "label",
              match: /.*\:/
          },
          {
              className: "zasmvariable",
              match: /#[\w\.]+/
          },
          {
              className: "zasmppcommand",
              match: /#include|#ifdef|#ifndef|#endif/
          },
          {
              className: "zasmnumber",
              variants: [
                  { match: /\b0x[A-F0-9]+/ },
                  { match: /\b0b[01]+/ },
                  { match: /(\b\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?/ }
              ],
          },
          {
              className: "zasmstring",
              variants: [
                  {begin: /"/, end: /(?<!\\)"/},
                  {begin: /'/, end: /(?<!\\)'/}
              ]
          },
          hljs.C_LINE_COMMENT_MODE
      ]
  }
}

const OPLIST = "\\b(JNE|JMP|JG|JGE|JL|JLE|JE|CPUID|PUSH|ADD|SUB|MUL|DIV|MOV|CMP|DB|RD|WD|MIN|MAX|INC|DEC|NEG|RAND|LOOP|LOOPA|LOOPB|LOOPD|SPG|CPG|POP|CALL|BNOT|FINT|RND|FFRAC|FINV|HALT|FSHL|FSHR|RET|IRET|STI|CLI|STP|CLP|STD|RETF|STEF|CLEF|AND|OR|XOR|FSIN|FCOS|FTAN|FASIN|FACOS|FATAN|MOD|BIT|SBIT|CBIT|TBIT|BAND|BOR|BXOR|BSHL|BSHR|JMPF|EXTINT|CNE|CJMP|CG|CGE|CL|CLE|CE|MCOPY|MXCHG|FPWR|XCHG|FLOG|FLOG10|IN|OUT|FABS|FSGN|FEXP|CALLF|FPI|FE|INT|TPG|FCEIL|ERPG|WRPG|RDPG|TIMER|LIDTR|STATESTORE|JNER|JMPR|JGR|JGER|JLR|JLER|JER|LNEG|STATERESTORE|EXTRET|IDLE|NOP|RLADD|PUSHA|POPA|STD2|LEAVE|STM|CLM|CPUGET|CPUSET|SPP|CPP|SRL|GRL|LEA|BLOCK|CMPAND|CMPOR|MSHIFT|SMAP|GMAP|RSTACK|SSTACK|ENTER|IRETP|EXTRETP|CLD|EXTRETA|EXTRETPA|VADD|VSUB|VMUL|VDOT|VCROSS|VMOV|VNORM|VCOLORNORM|LOOPXY|MADD|MSUB|MMUL|MROTATE|MSCALE|MPERSPECTIVE|MTRANSLATE|MLOOKAT|MMOV|VLEN|MIDENT|VMODE|VDIV|VTRANSFORM)\\b";