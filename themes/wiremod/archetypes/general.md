---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: "{{ .Date }}"
menu:
  tutorials:
    parent: "general"
    weight: FILL IN WEIGHT
    identifier: "{{ shuffle (slice "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k") }}"
headerColor: "#63b7ce"
buttonColor: "#94e8ff"
---