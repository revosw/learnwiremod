---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "gates"
    weight: FILL IN WEIGHT
    identifier: "{{ delimit (shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k")) "" }}"
headerColor: "#206edc"
buttonColor: "#0098ff"
---