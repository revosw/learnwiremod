---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "spu"
    weight: FILL IN WEIGHT
    identifier: "{{ delimit (shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k")) "" }}"
highlightLanguage: "cpp"
headerColor: "darkred"
buttonColor: "#d61b18"
---