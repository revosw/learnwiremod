---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "gates"
    weight: FILL IN WEIGHT
    identifier: "{{ shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k") }}"
headerColor: "darkred"
buttonColor: "#d61b18"
---