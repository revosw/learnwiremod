---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "cpu"
    weight: FILL IN WEIGHT
    identifier: "{{ shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k") }}"
headerColor: "#222"
buttonColor: "#555"
---