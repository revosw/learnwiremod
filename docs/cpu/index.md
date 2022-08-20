# Introduction

```
jmp _code;
message:
  db 'Hello World!',0;
WriteString: //ESI - String pointer, EDX - Param
  mov eax,65536;
  AWriteLoop:
    cmp #esi,0; //Terminate on char 0
    je AEnd;
    mov #eax,#esi; //Output char
    inc eax;
    mov #eax,edx; //Output char param
    inc eax;
    inc esi;
  jmp AWriteLoop;
  AEnd:
ret //Return from call

_code:
  mov esi,message;
  mov edx,000999; //White foreground on black background
  call WriteString;
```