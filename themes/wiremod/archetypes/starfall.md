---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "starfall"
    weight: FILL IN WEIGHT
    identifier: "{{ delimit (shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k")) "" }}"
headerColor: "rebeccapurple"
buttonColor: "#b564f5"
---