---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "gpu"
    weight: FILL IN WEIGHT
    identifier: "{{ shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k") }}"
headerColor: "#257625"
buttonColor: "#41a141"
---