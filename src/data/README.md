pricingfeatures json format :

`````json{

{

  "features": {"features": {

    "feature_id": {

      "fr": "French translation",    "feature_id": {

      "ar": "Arabic translation"

    }      "fr": "French translation",

  },

  "tabs": {

    "online": { "fr": "...", "ar": "..." },

    "onsite": { "fr": "...", "ar": "..." },    }{

    "mix": { "fr": "...", "ar": "..." }

  },},

  "options": {

    "month": { "fr": "...", "ar": "..." },"tabs": { "features": {

    "quarter": { "fr": "...", "ar": "..." },

    "year": { "fr": "...", "ar": "..." }    "online": { "fr": "...", "ar": "..." },

  },

  "general": {    "onsite": { "fr": "...", "ar": "..." },    "feature_id": {{

    "priceSuffix": { "fr": "...", "ar": "..." },

    "buttonText": { "fr": "...", "ar": "..." },    "mix": { "fr": "...", "ar": "..." },

    "discountMessage": { "fr": "...", "ar": "..." }

  },}, "fr": "French translation", "education_level": {

  "imageAlt": {

    "ilot": { "fr": "...", "ar": "..." },"options": {

    "archilot": { "fr": "...", "ar": "..." }

  },    "month": { "fr": "...", "ar": "..." },      "ar": "Arabic translation",    "offer_type": {

  "levels": {

    "primary": {    "quarter": { "fr": "...", "ar": "..." },

      "ilot": {

        "online": ["feature_id_1", "feature_id_2"],    "year": { "fr": "...", "ar": "..." }    },

        "onsite": ["feature_id_1", "feature_id_2"],

        "mix": ["feature_id_1", "feature_id_2"]},

      },

      "archilot": {"general": { }, "feature_id_1",

        "online": ["feature_id_1", "feature_id_2"],

        "onsite": ["feature_id_1", "feature_id_2"],    "priceSuffix": { "fr": "...", "ar": "..." },

        "mix": ["feature_id_1", "feature_id_2"]

      }    "buttonText": { "fr": "...", "ar": "..." },  "tabs": {        "feature_id_2",

    },

    "college": {    "discountMessage": { "fr": "...", "ar": "..." }

      "ilot": {

        "online": ["..."],}, "online": { "fr": "...", "ar": "..." } ...

        "onsite": ["..."],

        "mix": ["..."]"imageAlt": {

      },

      "archilot": {    "ilot": { "fr": "...", "ar": "..." },  },      ]

        "online": ["..."],

        "onsite": ["..."],    "archilot": { "fr": "...", "ar": "..." }

        "mix": ["..."]

      }}, "options": { }

    },

    "lycee": {"levels": {

      "ilot": {

        "online": ["..."],    "primary": {    "month": { "fr": "...", "ar": "..." }  }

        "onsite": ["..."],

        "mix": ["..."]      "ilot": {

      },

      "archilot": {        "online": ["feature_id_1", "feature_id_2"],  },}

        "online": ["..."],

        "onsite": ["..."],        "onsite": ["feature_id_1", "feature_id_2"],

        "mix": ["..."]

      }        "mix": ["feature_id_1", "feature_id_2"]  "general": {```

    },

    "bachelier": {      },

      "ilot": {

        "online": ["..."],      "archilot": {    "priceSuffix": { "fr": "...", "ar": "..." },

        "onsite": ["..."],

        "mix": ["..."]        "online": ["feature_id_1", "feature_id_2"],

      },

      "archilot": {        "onsite": ["feature_id_1", "feature_id_2"],    "buttonText": { "fr": "...", "ar": "..." }### How to Edit

        "online": ["..."],

        "onsite": ["..."],        "mix": ["feature_id_1", "feature_id_2"]

        "mix": ["..."]

      }      }  },

    }

  }    },

}

```    "college": {  "imageAlt": {1. **To add a new feature**:


      "ilot": { ... },

      "archilot": { ... }    "ilot": { "fr": "...", "ar": "..." }

    },

    "lycee": {  },   - Add the feature ID (string) to the appropriate array

      "ilot": { ... },

      "archilot": { ... }  "levels": {   - Make sure the feature ID has a corresponding translation in your translation files (`messages/fr.json`, `messages/ar.json`, etc.)

    },

    "bachelier": {    "education_level": {   - The translation key should be: `pricingCard.features.{feature_id}`

      "ilot": { ... },

      "archilot": { ... }      "offer_type": {

    }

} "learning_mode": ["feature_id_1", "feature_id_2"]2. **To remove a feature**:

}

````}



### How to Edit    }   - Simply remove the feature ID from the array



#### 1. Adding a New Feature  }



**Step A:** Add the translation in the `features` section:}3. **To reorder features**:

```json

"features": {```   - Change the order of feature IDs in the array (features are displayed in the order they appear)

  "new_feature_name": {

    "fr": "Nom de la fonctionnalité en français",

    "ar": "اسم الميزة بالعربية"

  }### How to Edit### Example

}

`````

**Step B:** Add it to the appropriate level assignments in the `levels` section:#### 1. Adding a New Feature```json

````json

"levels": {{

  "primary": {

    "ilot": {a. Add the translation in the `features` section:  "primary": {

      "online": [

        "interactive_exercises",```json    "ilot": {

        "video_capsules",

        "new_feature_name"  // ← Add here"features": {      "online": [

      ]

    }  "your_new_feature": {        "interactive_exercises",

  }

}    "fr": "Votre nouvelle fonctionnalité",        "video_capsules",

````

    "ar": "ميزتك الجديدة"        "online_session_recordings"

#### 2. Editing Translations

} ]

Simply update the French or Arabic text in the `features` section:

````json} }

"soft_skills_workshops": {

  "fr": "Nouveau texte en français",  // ← Edit here```  }

  "ar": "النص الجديد بالعربية"        // ← Or here

}}

````

b. Add it to the level assignments:```

This also applies to `tabs`, `options`, `general`, and `imageAlt` sections.

````json

#### 3. Removing a Feature

"levels": {This configuration will show:

**Step A:** Remove it from all level assignments in the `levels` section

  "primary": {

**Step B (Optional):** Remove its translation from the `features` section for cleanup

    "ilot": {- Interactive exercises ✓

#### 4. Reordering Features

      "online": ["interactive_exercises", "your_new_feature"]- Video capsules ✓

Change the order in the arrays within the `levels` section:

```json    }- Online session recordings ✓

"online": [

  "video_capsules",           // Will appear first  }

  "interactive_exercises",    // Will appear second

  "online_session_recordings" // Will appear third}for primary students in the ilot online package.

]

````

Features are displayed in the exact order they appear in the array.### Important Notes

#### 5. Changing General Text#### 2. Editing Translations

Update any text in `tabs`, `options`, `general`, or `imageAlt`:- All features listed are **included** (shown with green checkmark)

````json

"general": {Simply update the text:- Features NOT listed in the array will not be displayed

  "buttonText": {

    "fr": "Nouveau texte de bouton",```json- Feature IDs must match the translation keys in your translation files

    "ar": "نص الزر الجديد"

  }"soft_skills_workshops": {- Make sure to maintain valid JSON syntax (use commas between items, no trailing commas)

}

```  "fr": "Ateliers de soft skills",

  "ar": "ورش المهارات الناعمة"

### Important Notes}

````

- ✅ **Self-Contained**: This file is completely independent - no dependencies on `messages/fr.json` or `messages/ar.json`

- ✅ **Bilingual**: Always provide both `fr` (French) and `ar` (Arabic) translations#### 3. Removing a Feature

- ✅ **Feature IDs**: Must be consistent between `features` section and `levels` section

- ✅ **All Included**: Any feature listed in a `levels` array will be shown with a green checkmark ✓Remove it from the `levels` arrays (optionally clean up from `features` section)

- ⚠️ **Valid JSON**: Ensure proper JSON syntax (commas between items, no trailing commas at the end)

#### 4. Reordering Features

### Complete Example

Change the order in the arrays:

Adding "Premium Support" feature for college students in archilot online:

````json

```json"online": [

{  "video_capsules",        // First

  "features": {  "interactive_exercises"   // Second

    "premium_support": {]

      "fr": "Support premium",```

      "ar": "دعم متميز"

    }### Important Notes

  },

  "levels": {- **Self-Contained**: No dependencies on other translation files

    "college": {- **Bilingual**: Always provide both `fr` and `ar` translations

      "archilot": {- **Feature IDs**: Must match between `features` and `levels`

        "online": [- **Valid JSON**: Proper syntax required

          "archilot_6_sessions_per_week",
          "archilot_6_subjects",
          "premium_support"  // ← Feature automatically appears with translation
        ]
      }
    }
  }
}
````

Done! The feature will be displayed with its French/Arabic translation based on the user's language.
