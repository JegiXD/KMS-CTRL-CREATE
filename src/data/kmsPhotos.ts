// Reviewed local photographs; provenance: docs/KMS_PHOTO_SELECTION.json.
export const kmsPhotos = {
  "ftrgatev": {
    "src": "/assets/events/ftrgatev-01.jpg",
    "webpSrc": "/assets/events/ftrgatev-01.webp",
    "alt": "Nastopajoči z mikrofonom na Ftrgatvi",
    "credit": "Andraž Kramberger",
    "sourcePage": "https://www.klub-kms.si/dogodek/ftrgatev/",
    "width": 1030,
    "height": 687
  },
  "cantus": {
    "src": "/assets/events/cantus-01.jpg",
    "webpSrc": "/assets/events/cantus-01.webp",
    "alt": "Udeleženci Cantusa za mizami v dvorani",
    "credit": "Dostop.si",
    "sourcePage": "https://www.klub-kms.si/dogodek/cantus/",
    "width": 1024,
    "height": 683
  },
  "oder": {
    "src": "/assets/events/kms-oder-01.jpg",
    "webpSrc": "/assets/events/kms-oder-01.webp",
    "alt": "Glasbena skupina na odru KMŠ ODER",
    "credit": "Vir: KMŠ",
    "sourcePage": "https://www.klub-kms.si/dogodek/kms-oder/",
    "width": 1030,
    "height": 686
  },
  "kreativa": {
    "src": "/assets/events/kreativa-01.jpg",
    "webpSrc": "/assets/events/kreativa-01.webp",
    "alt": "Risanje na ustvarjalni delavnici KMŠ",
    "credit": "Isidora Veličković",
    "sourcePage": "https://www.klub-kms.si/dogodek/delavnice/",
    "width": 1280,
    "height": 855
  },
  "jazz": {
    "src": "/assets/events/jazz-veceri-01.jpg",
    "webpSrc": "/assets/events/jazz-veceri-01.webp",
    "alt": "Saksofonist, kontrabasist in bobnar na jazzovskem nastopu",
    "credit": "Janin Vezonik",
    "sourcePage": "https://www.klub-kms.si/dogodek/cantus-2/",
    "width": 1280,
    "height": 721
  },
  "dobrodelnost": {
    "src": "/assets/events/dobrodelnost-01.jpg",
    "webpSrc": "/assets/events/dobrodelnost-01.webp",
    "alt": "Udeleženci dobrodelne akcije KrofeQ z vozičkom na ulici",
    "credit": "Rok Hlade Weis",
    "sourcePage": "https://www.klub-kms.si/dogodek/dobrodelnost/",
    "width": 1280,
    "height": 854
  },
  "standup": {
    "src": "/assets/events/standup-01.jpg",
    "webpSrc": "/assets/events/standup-01.webp",
    "alt": "Nasmejano občinstvo večera Stand UP v Pisarni",
    "credit": "Vezonik (podpis na fotografiji)",
    "sourcePage": "https://www.klub-kms.si/dogodek/stand-up/",
    "width": 1280,
    "height": 721
  },
  "pisarna": {
    "src": "/assets/events/pisarna-koncert-01.jpg",
    "webpSrc": "/assets/events/pisarna-koncert-01.webp",
    "alt": "Pevka in glasbeniki na koncertu v Pisarni",
    "credit": "Andraž Kramberger",
    "sourcePage": "https://www.klub-kms.si/dogodek/koncerti-v-pisarni/",
    "width": 1280,
    "height": 853
  }
} as const;

export const heroPhotos = [
  {position: "left", label: "Glasba", ...kmsPhotos.ftrgatev},
  {position: "center", label: "Dogodki", ...kmsPhotos.oder},
  {position: "right", label: "Skupnost", ...kmsPhotos.cantus},
] as const;
