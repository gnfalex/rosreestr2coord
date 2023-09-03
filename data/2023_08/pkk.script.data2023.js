Z = L = ne = ae = X = bt = jd = re = G = ee = Y = ie = te = H = false
data0 = {
                getSearchTypes: [{
                        type: 1,
                        idField: "id",
                        title: "Земельные участки",
                        tagName: "Участки",
                        identifyTagName: "Участок",
                        identifyName: "Земельный участок",
                        identifyPriority: 1,
                        tagPriority: 1,
                        templateName: "zu",
                        searchInFeatureType: 5,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        selectIds: [6, 7, 8, 9],
                        layer: "cadastre",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultDescription: "address",
                        searchResultBodyPropsPriority: ["util_by_uo", "util_by_doc", "util_code"],
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: {
                                big: 577790.554289,
                                normal: 18057
                            }
                        }
                    }, {
                        type: 2,
                        idField: "id",
                        title: "Кадастровые кварталы",
                        identifyName: "Кадастровый квартал",
                        identifyTagName: "Квартал",
                        identifyPriority: 13,
                        tagName: "Кварталы",
                        tagPriority: 7,
                        templateName: "kvartal",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        selectIds: [10],
                        layer: "cadastre",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultDescription: "",
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 288896
                        }
                    }, {
                        type: 3,
                        idField: "id",
                        title: "Кадастровые районы",
                        identifyName: "Кадастровый район",
                        identifyTagName: "Район",
                        identifyPriority: 14,
                        tagName: "Районы",
                        tagPriority: 8,
                        templateName: "rayon",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        selectIds: [11],
                        layer: "cadastre",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn", "name"],
                        searchResultDescription: "",
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 4622326
                        }
                    }, {
                        type: 4,
                        idField: "id",
                        title: "Кадастровые округа",
                        identifyName: "Кадастровый округ",
                        identifyTagName: "Округ",
                        identifyPriority: 15,
                        tagName: "Округа",
                        tagPriority: 9,
                        templateName: "okrug",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        selectIds: [12],
                        layer: "cadastre",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn", "name"],
                        searchResultDescription: "",
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 295828765
                        }
                    }, {
                        type: 5,
                        idField: "id",
                        title: "Здания, сооружения, объекты незавершенного строительства",
                        identifyName: "Объект незавершенного строительства",
                        identifyTagName: "ОКС",
                        identifyPriority: 3,
                        tagName: "ОКС",
                        tagPriority: 2,
                        templateName: "oks",
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        selectIds: [0, 1, 2, 3, 4, 5],
                        layer: "cadastre",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultAdditionalHeaderField: "oks_type",
                        searchResultDescription: "address",
                        searchResultBodyPropsPriority: ["name", "purpose"],
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 18057
                        }
                    }, {
                        type: 6,
                        idField: "id",
                        title: "Территориальные зоны",
                        identifyName: "Территориальная зона",
                        identifyTagName: "Территориальная зона",
                        identifyPriority: 9,
                        tagName: "Территориальные зоны",
                        tagPriority: 12,
                        templateName: "terzone",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        layer: "terrzone",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["id"],
                        searchResultDescription: "name_zone",
                        searchResultBodyPropsPriority: ["cdzone"],
                        scaleSelectedOptions: {
                            scale: 288896
                        }
                    }, {
                        type: 7,
                        idField: "id",
                        title: "Границы",
                        tagName: "Границы",
                        identifyName: "Граница",
                        identifyTagName: "Граница",
                        identifyPriority: 11,
                        tagPriority: 14,
                        templateName: "bounds",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "id",
                        selectIds: [1, 2, 3, 4],
                        layer: "bounds",
                        selectTemplate: "ID = ",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["id"],
                        searchResultDescription: "name",
                        searchResultBodyPropsPriority: ["name"],
                        searchResultAdditionalHeaderField: "type",
                        scaleSelectedOptions: {
                            scale: {
                                1: 591657528,
                                2: 295828765,
                                3: 4622324.434309,
                                4: 288896,
                                5: 288896
                            }
                        }
                    }, {
                        type: 10,
                        idField: "id",
                        title: "Зоны с особыми условиями использования территории",
                        identifyName: "Зона с особыми условиями использования территории",
                        identifyTagName: "ЗОУИТ",
                        identifyPriority: 7,
                        tagName: "ЗОУИТ",
                        tagPriority: 10,
                        templateName: "zouit",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        layer: "zouit",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["id"],
                        searchResultDescription: "name_zone",
                        searchResultBodyPropsPriority: ["cdzone"],
                        scaleSelectedOptions: {
                            scale: 288896
                        }
                    }, {
                        type: 13,
                        idField: "id",
                        title: "Красные линии",
                        identifyName: "Красная линия",
                        identifyTagName: "Красная линия",
                        identifyPriority: 10,
                        tagName: "Красные линии",
                        tagPriority: 13,
                        templateName: "redlines",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "name",
                        selectTemplate: "LINE_NUMBER = ",
                        selectIds: [3],
                        layer: "redlines",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["ln"],
                        searchResultDescriptionDictionary: "subjects",
                        searchResultDescription: "reg",
                        scaleSelectedOptions: {
                            scale: 18057
                        }
                    }, {
                        type: 15,
                        idField: "id",
                        title: "Схемы расположения земельных участков",
                        identifyName: "Схема расположения ЗУ",
                        identifyTagName: "Проект ЗУ",
                        identifyPriority: 5,
                        tagName: "Проекты ЗУ",
                        tagPriority: 4,
                        templateName: "srzu",
                        searchInFeatureType: 1,
                        infoWindowTitleField: "name",
                        selectTemplate: "ID = ",
                        selectIds: [4],
                        layer: "srzu",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["sn_cn"],
                        searchResultDescription: "address",
                        scaleSelectedOptions: {
                            scale: 36113
                        }
                    }, {
                        type: -1,
                        idField: "id",
                        title: "АДРЕСА",
                        identifyName: "Адрес",
                        identifyTagName: "Адрес",
                        identifyPriority: 6,
                        tagName: "Адреса",
                        tagPriority: 6,
                        templateName: "address",
                        infoWindowTitleField: "Match_addr",
                        headerSeparator: " ",
                        attrName: "attributes",
                        searchResultHeaderFields: ["Match_addr"],
                        searchResultDescription: "ParentName",
                        scaleSelectedOptions: {
                            scale: 9027.977411
                        }
                    }, {
                        type: 20,
                        idField: "id",
                        title: "Зоны",
                        identifyName: "Зона",
                        identifyTagName: "Зона",
                        identifyTypeName: "Зона или территория",
                        identifyPriority: 8,
                        tagName: "Зоны и территории",
                        tagPriority: 11,
                        templateName: "zone",
                        infoWindowTitleField: "id",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["id"],
                        searchResultAdditionalHeaderField: "zone_kind",
                        searchResultBodyPropsPriority: ["name_zone"],
                        scaleSelectedOptions: {
                            scale: 288896
                        }
                    }, {
                        type: 23,
                        idField: "id",
                        title: "Государственный мониторинг земель - Негативные воздействия",
                        identifyName: "Государственный мониторинг земель - негативное воздействие",
                        identifyTagName: "Негативный процесс",
                        identifyPriority: 12,
                        tagName: "Негативные процессы",
                        tagPriority: 15,
                        templateName: "gm_negative",
                        infoWindowTitleField: "",
                        searchResultHeaderFields: ["id", "zone_proyavl"],
                        headerSeparator: ":",
                        attrName: "attrs",
                        searchResultDescription: "process_type",
                        searchResultDescriptionDictionary: "negativeProcessTypes",
                        searchResultBodyPropsPriority: ["zone_proyavl"],
                        scaleSelectedOptions: {
                            scale: 577792
                        }
                    }, {
                        type: 24,
                        idField: "id",
                        title: "Единые недвижимые комплексы",
                        identifyName: "Единый недвижимый комплекс",
                        identifyTagName: "Комплекс",
                        tagName: "Комплексы",
                        tagPriority: 3,
                        selectTemplate: "ID = ",
                        selectIds: [3, 4, 5, 8, 9],
                        layer: "cadastre",
                        templateName: "enk",
                        infoWindowTitleField: "",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: [""],
                        searchResultDescription: ""
                    }, {
                        type: 25,
                        idField: "id",
                        title: "Земля для стройки",
                        identifyName: "Земля для стройки",
                        identifyTagName: "Земля для стройки",
                        tagName: "Земля для стройки",
                        tagPriority: 5,
                        identifyPriority: 4,
                        templateName: "zu",
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultDescription: "address",
                        searchResultBodyPropsPriority: ["util_by_uo", "util_by_doc", "util_code"],
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 36113
                        }
                    }, {
                        type: 27,
                        idField: "id",
                        title: "Земля для туризма",
                        identifyName: "Земля для туризма",
                        identifyTagName: "Земля для туризма",
                        tagName: "Земля для туризма",
                        tagPriority: 5,
                        identifyPriority: 4,
                        templateName: "zu",
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultDescription: "address",
                        searchResultBodyPropsPriority: ["util_by_uo", "util_by_doc", "util_code"],
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 36113
                        }
                    }, {
                        type: 28,
                        idField: "id",
                        title: "Объект туристского интереса",
                        identifyName: "Объект туристского интереса",
                        identifyTagName: "Объект туристского интереса",
                        tagName: "Объект туристского интереса",
                        tagPriority: 5,
                        identifyPriority: 4,
                        templateName: "zu",
                        infoWindowTitleField: "cn",
                        selectTemplate: "ID = ",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["cn"],
                        searchResultDescription: "address",
                        searchResultBodyPropsPriority: ["util_by_uo", "util_by_doc", "util_code"],
                        searchResultPin: ["cn"],
                        scaleSelectedOptions: {
                            scale: 36113
                        }
                    }, {
                        type: 26,
                        idField: "id",
                        title: "Усолье-Сибирское",
                        identifyName: "Усолье-Сибирское",
                        identifyTagName: "Усолье-Сибирское",
                        identifyPriority: 2,
                        tagName: "Усолье-Сибирское",
                        tagPriority: 15,
                        templateName: "usib",
                        infoWindowTitleField: "id",
                        headerSeparator: " ",
                        attrName: "attrs",
                        searchResultHeaderFields: ["id"],
                        searchResultDescription: "",
                        searchResultBodyPropsPriority: ["name"],
                        searchResultPin: "id",
                        scaleSelectedOptions: {
                            scale: 288896
                        }
                    }]
                ,
                getLocatorsPriority:["atd_subject", "atd_municipal", "atd_settlement", "pkk_local", "pkk_place"]
                ,
                getFormBuildings: {
                    i : [{
                            title: "Наименование",
                            type: "text",
                            placeholder: "Наименование",
                            model_key: "uo_name",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Адрес",
                            type: "text",
                            placeholder: "Адрес",
                            model_key: "uo_address"
                        }, {
                            title: "Телефон",
                            type: "tel",
                            placeholder: "Телефон",
                            model_key: "uo_phone"
                        }, {
                            title: "Сайт в сети интернет",
                            type: "text",
                            validations: {
                                urlIsValid: G
                            },
                            placeholder: "Сайт в сети интернет",
                            model_key: "uo_url"
                        }, {
                            title: "Электронная почта для связи",
                            type: "text",
                            placeholder: "Электронная почта для связи",
                            model_key: "uo_email",
                            validations: {
                                emailIsValid: ee
                            }
                        }, {
                            title: "Инвестиционный портал региона",
                            type: "text",
                            placeholder: "Инвестиционный портал региона",
                            model_key: "inves_portal"
                        }],
                    n : [{
                            title: "Тип объекта",
                            type: "text",
                            model_key: "type",
                            value: "Земельный участок для жилищного строительства",
                            className: "",
                            disabled: !0
                        }, {
                            title: "Кадастровый номер",
                            type: "text",
                            placeholder: "Кадастровый номер",
                            model_key: "cn",
                            className: "",
                            disabled: !0
                        }, {
                            title: "Субъект РФ",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Субъект РФ",
                            model_key: "reg_name",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Муниципальное образование",
                            type: "typeahead",
                            model_key: "mun",
                            placeholder: "Муниципальное образование",
                            url: "typeahead/101/?text=:text",
                            fetchParams: {
                                type: 101
                            },
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Населенный пункт",
                            type: "typeahead",
                            model_key: "np",
                            placeholder: "Населенный пункт",
                            url: "typeahead/102/?text=:text",
                            fetchParams: {
                                type: 102
                            },
                            className: ""
                        }, {
                            title: "Адрес",
                            type: "text",
                            placeholder: "Адрес",
                            model_key: "address",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Площадь, кв.м.",
                            model_key: "area_custom",
                            type: "number",
                            placeholder: "Площадь, кв.м.",
                            className: "",
                            disabled: !0,
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Наличие границ на ПКК",
                            type: "select",
                            searchingFieldName: "value",
                            items: [{
                                name: "Отображены границы на ПКК",
                                value: 1
                            }, {
                                name: "Не отображены границы на ПКК",
                                value: 2
                            }],
                            selectedIndex: -1,
                            model_key: "data_type",
                            disabled: !0
                        }, {
                            title: "Категория земель",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Категория земель",
                            model_key: "category_text",
                            disabled: !0
                        }, {
                            title: "Форма собственности",
                            type: "select",
                            items: [{
                                name: "Федеральная собственность"
                            }, {
                                name: "Собственность субъекта Российской Федерации"
                            }, {
                                name: "Муниципальная собственность"
                            }, {
                                name: "Государственная неразграниченная собственность"
                            }, {
                                name: "Частная собственность"
                            }],
                            selectedIndex: -1,
                            model_key: "right",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Вид разрешенного использования",
                            type: "select",
                            searchingFieldName: "value",
                            selectedIndex: -1,
                            items: [],
                            model_key: "util_code"
                        }, {
                            title: "Потенциал использования",
                            type: "select",
                            items: [{
                                name: "Строительство индивидуального жилого дома"
                            }, {
                                name: "Строительство многоквартирного дома"
                            }],
                            selectedIndex: -1,
                            model_key: "potential",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Объекты капитального строительства",
                            type: "select",
                            items: [{
                                name: "Имеются в наличии здания и сооружения"
                            }, {
                                name: "Имеются в наличии здания и сооружения срок ввода в эксплуатацию которых составляет более 50 лет"
                            }, {
                                name: "Имеются в наличии объекты незавершенного строительства "
                            }, {
                                name: "Отсутствуют объекты капитального строительства"
                            }],
                            selectedIndex: -1,
                            model_key: "has_oks"
                        }, {
                            title: "Инженерные сети",
                            type: "select",
                            items: [{
                                name: "Имеются в наличии инженерные сети"
                            }, {
                                name: "Инженерные сети отсутствуют"
                            }],
                            selectedIndex: -1,
                            model_key: "has_network"
                        }, {
                            title: "Входит в территорию, в отношении которой возможно (планируется) комплексное развитие территории жилой застройки",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "develop_build",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Предназначен для предоставления льготным категориям граждан",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "privileges_peo"
                        }, {
                            title: "Льготная категория",
                            type: "text",
                            placeholder: "Льготная категория",
                            model_key: "privileges",
                            validations: {
                                priv: ie
                            }
                        }, {
                            title: "Агентом Российской Федерации в отношении земельного участка выступает АО «ДОМ. РФ»",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "dom_rf",
                            validations: {
                                flag: te
                            }
                        }, {
                            title: "Контакты уполномоченного органа",
                            className: "form-item-title"
                        }],
                    a:  [{
                            title: "Тип объекта",
                            type: "text",
                            model_key: "type",
                            value: "Территория для жилищного строительства",
                            className: "",
                            disabled: !0
                        }, {
                            title: "Условный номер",
                            type: "text",
                            value: "ЖС1",
                            placeholder: "Условный номер",
                            model_key: "conditionalNumber",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Учетный номер кадастрового квартала",
                            type: "text",
                            value: "",
                            placeholder: "Учетный номер кадастрового квартала",
                            model_key: "kvartal_cn",
                            className: "cn",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Субъект РФ",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Субъект РФ",
                            model_key: "reg_name",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Муниципальное образование",
                            type: "typeahead",
                            model_key: "mun",
                            placeholder: "Муниципальное образование",
                            url: "typeahead/101/?text=:text",
                            fetchParams: {
                                type: 101
                            },
                            value: "",
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Населенный пункт",
                            type: "typeahead",
                            model_key: "np",
                            placeholder: "Населенный пункт",
                            url: "typeahead/102/?text=:text",
                            fetchParams: {
                                type: 102
                            },
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Адрес",
                            type: "text",
                            value: "",
                            placeholder: "Адрес",
                            model_key: "address",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Площадь, кв.м.",
                            model_key: "area_custom",
                            type: "number",
                            placeholder: "Площадь, кв.м.",
                            className: "area",
                            valueWrapper: [Y],
                            disabled: !0,
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Категория земель",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Категория земель",
                            model_key: "category_text",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Форма собственности",
                            type: "select",
                            items: [{
                                name: "Федеральная собственность"
                            }, {
                                name: "Собственность субъекта Российской Федерации"
                            }, {
                                name: "Муниципальная собственность"
                            }, {
                                name: "Государственная неразграниченная собственность"
                            }, {
                                name: "Частная собственность"
                            }, {
                                name: "---------------------"
                            }],
                            selectedIndex: -1,
                            model_key: "right",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Вид разрешенного использования",
                            type: "text",
                            placeholder: "Введите значение",
                            model_key: "util_by_doc",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Потенциал использования",
                            type: "select",
                            items: [{
                                name: "Строительство индивидуального жилого дома"
                            }, {
                                name: "Строительство многоквартирного дома"
                            }],
                            selectedIndex: -1,
                            model_key: "potential",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Объекты капитального строительства",
                            type: "select",
                            items: [{
                                name: "Имеются в наличии здания и сооружения"
                            }, {
                                name: "Имеются в наличии объекты капитального строительства старше 50 лет"
                            }, {
                                name: "Имеются в наличии объекты незавершенного строительства"
                            }, {
                                name: "Отсутствуют объекты капитального строительства"
                            }],
                            selectedIndex: -1,
                            model_key: "has_oks"
                        }, {
                            title: "Инженерные сети",
                            type: "select",
                            items: [{
                                name: "Имеются в наличии инженерные сети"
                            }, {
                                name: "Инженерные сети отсутствуют"
                            }],
                            selectedIndex: -1,
                            model_key: "has_network"
                        }, {
                            title: "Является территорией, в отношении которой возможно (планируется) комплексное развитие территории жилой застройки",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            value: "",
                            selectedIndex: -1,
                            model_key: "develop_area",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Предназначена для предоставления льготным категориям граждан",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "privileges_peo"
                        }, {
                            title: "Льготная категория",
                            type: "text",
                            placeholder: "Льготная категория",
                            model_key: "privileges",
                            validations: {
                                priv: ie
                            }
                        }, {
                            title: "",
                            type: "text",
                            model_key: "data_type",
                            value: 3,
                            visible: !1,
                            required: !0,
                            className: "",
                            disabled: !0
                        }, {
                            title: "Контакты уполномоченного органа",
                            className: "form-item-title"
                        }]
                },
                getFormOti: {
                    i : [{
                            title: "Идентификационный номер ОТИ",
                            type: "text",
                            value: "",
                            placeholder: "Идентификационный номер ОТИ",
                            model_key: "id",
                            validations: {
                                idOtiValid: Z
                            }
                        }, {
                            title: "Наименование ОТИ",
                            type: "text",
                            placeholder: "Наименование ОТИ",
                            model_key: "name",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Кадастровый или реестровый номер ОТИ (при наличии)",
                            type: "text",
                            placeholder: "Кадастровый или реестровый номер ОТИ (при наличии)",
                            model_key: "cn",
                            className: "cn"
                        }, {
                            title: "Адрес ОТИ",
                            type: "text",
                            placeholder: "Адрес ОТИ",
                            model_key: "address"
                        }, {
                            title: "Тип ОТИ",
                            type: "select",
                            items: [{
                                name: "Объект культурного наследия"
                            }, {
                                name: "Объект спортивно-массовых мероприятий"
                            }, {
                                name: "Природный объект"
                            }, {
                                name: "Иной объект туристического интереса"
                            }],
                            selectedIndex: -1,
                            model_key: "type",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Вид особо охраняемой природной территории",
                            type: "select",
                            items: [{
                                name: "Государственный природный заповедник"
                            }, {
                                name: "Национальный парк"
                            }, {
                                name: "Природный парк"
                            }, {
                                name: "Государственный природный заказник"
                            }, {
                                name: "Памятник природы"
                            }, {
                                name: "Дендрологический парк"
                            }, {
                                name: "Ботанический сад"
                            }, {
                                name: "Не является ООПТ"
                            }],
                            selectedIndex: -1,
                            model_key: "vid_oopt",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Наличие у ОТИ статуса ЮНЕСКО",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "unesko",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Вид объекта культурного-исторического наследия",
                            type: "select",
                            items: [{
                                name: "Памятник"
                            }, {
                                name: "Ансамбль"
                            }, {
                                name: "Достопримечательное место"
                            }, {
                                name: "Объект археологического наследия"
                            }],
                            selectedIndex: -1,
                            model_key: "vid_okn",
                            validations: {
                                vid: ne
                            },
                            disabled: ae
                        }, {
                            title: "Статус ОТИ",
                            type: "select",
                            items: [{
                                name: "Федеральный"
                            }, {
                                name: "Региональный"
                            }, {
                                name: "Муниципальный"
                            }],
                            selectedIndex: -1,
                            model_key: "status",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Потенциальный интерес к объекту",
                            type: "select",
                            items: [{
                                name: "Местный"
                            }, {
                                name: "Региональный"
                            }, {
                                name: "Федеральный"
                            }, {
                                name: "Международный"
                            }],
                            selectedIndex: -1,
                            model_key: "potential",
                            value: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Среднее количество туристов, посетивших ОТИ за два предыдущих года(тыс. чел.)",
                            type: "number",
                            placeholder: "тыс. чел.",
                            model_key: "tourist"
                        }, {
                            title: "Средний объем платных услуг, оказанных ОТИ за два предыдущих года(млн. руб.)",
                            type: "number",
                            placeholder: "млн. руб.",
                            model_key: "paid_services"
                        }, {
                            title: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            type: "text",
                            placeholder: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            model_key: "url",
                            validations: {
                                urlhtIsValid: X
                            }
                        }]
                },
                getFormTourism: {
                    i : [{
                            title: "Наименование",
                            type: "text",
                            value: "",
                            placeholder: "Наименование",
                            model_key: "uo_name",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Адрес",
                            type: "text",
                            placeholder: "Адрес",
                            model_key: "uo_address"
                        }, {
                            title: "Телефон",
                            type: "tel",
                            placeholder: "Телефон",
                            validations: {
                                phoneIsValid: H
                            },
                            model_key: "uo_phone"
                        }, {
                            title: "Сайт в сети интернет",
                            type: "text",
                            placeholder: "Сайт в сети интернет",
                            model_key: "uo_url",
                            validations: {
                                urlIsValid: G
                            }
                        }, {
                            title: "Электронная почта для связи",
                            type: "text",
                            placeholder: "Электронная почта для связи",
                            model_key: "uo_email",
                            validations: {
                                emailIsValid: ee
                            }
                        }, {
                            title: "Инвестиционный портал",
                            type: "text",
                            placeholder: "Инвестиционный портал",
                            model_key: "additional_info"
                        }],
                        n : [{
                            title: "Тип",
                            type: "text",
                            model_key: "type",
                            value: "Земельный участок для туристской деятельности",
                            className: ""
                        }, {
                            title: "Учетный номер кадастрового квартала",
                            type: "text",
                            value: "",
                            placeholder: "Учетный номер кадастрового квартала",
                            model_key: "kvartal_cn",
                            className: "cn",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Субъект РФ",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Субъект РФ",
                            model_key: "reg_name"
                        }, {
                            title: "Муниципальное образование",
                            type: "typeahead",
                            model_key: "mun",
                            placeholder: "Муниципальное образование",
                            url: "typeahead/101/?text=:text",
                            fetchParams: {
                                type: 101
                            },
                            value: "",
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Населенный пункт",
                            type: "typeahead",
                            model_key: "np",
                            placeholder: "Населенный пункт",
                            url: "typeahead/102/?text=:text",
                            fetchParams: {
                                type: 102
                            },
                            className: ""
                        }, {
                            title: "Адрес",
                            type: "text",
                            value: "",
                            placeholder: "Адрес",
                            model_key: "address",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Площадь, кв.м.",
                            model_key: "area_custom",
                            type: "number",
                            placeholder: "Площадь, кв.м.",
                            className: "",
                            disabled: !0,
                            valueWrapper: [Y]
                        }, {
                            title: "Форма собственности",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Форма собственности",
                            model_key: "right",
                            disabled: !0,
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Категория земель",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Категория земель",
                            model_key: "category_text",
                            disabled: !0,
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Вид разрешенного использования (ВРИ)",
                            type: "select",
                            searchingFieldName: "value",
                            selectedIndex: -1,
                            items: [],
                            model_key: "util_code"
                        }, {
                            title: "Кадастровая стоимость",
                            model_key: "cad_cost",
                            type: "text",
                            placeholder: "Кадастровая стоимость",
                            className: ""
                        }, {
                            title: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            type: "text",
                            placeholder: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            model_key: "terzone_name_by_pzz"
                        }, {
                            title: "Наименование ближайшего объекта туристского интереса",
                            type: "text",
                            placeholder: "Наименование ближайшего объекта туристского интереса",
                            model_key: "poi",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Идентификационный номер ОТИ",
                            type: "text",
                            placeholder: "Идентификационный номер ОТИ",
                            model_key: "id_oti",
                            validations: {
                                idOtiValid: Z
                            }
                        }, {
                            title: "Кадастровый или реестровый номер объекта туристского интереса",
                            type: "text",
                            placeholder: "Кадастровый или реестровый номер объекта туристского интереса",
                            model_key: "poi_cn",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            type: "text",
                            model_key: "tour_object_description",
                            placeholder: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            className: "conditional-number",
                            validations: {
                                urlhtIsValid: X
                            }
                        }, {
                            title: "Инженерные сети",
                            className: "level-padding-2"
                        }, {
                            title: "Электроснабжение",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "power_supply"
                        }, {
                            title: "Водоснабжение",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "water_supply"
                        }, {
                            title: "Газоснабжение",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "gas_supply"
                        }, {
                            title: "Канализация",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "sewerage"
                        }, {
                            title: "Теплоснабжение",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "heat_supply"
                        }, {
                            title: "Расстояние до",
                            className: "level-padding-2"
                        }, {
                            title: "ближайшего объекта туристского интереса (км)",
                            model_key: "distance_to_near_tour_object",
                            type: "number",
                            placeholder: "ближайшего объекта туристского интереса (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей федеральной трассы (км)",
                            model_key: "distance_to_near_fed_road",
                            type: "number",
                            placeholder: "ближайшей федеральной трассы (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей дороги с твердым покрытием (км)",
                            model_key: "distance_to_near_hard_road",
                            type: "number",
                            placeholder: "ближайшей дороги с твердым покрытием (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего центра муниципального района или городского округа (км)",
                            model_key: "distance_to_near_district",
                            type: "number",
                            placeholder: "ближайшего центра муниципального района или городского округа (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего населенного пункта (км)",
                            model_key: "distance_to_near_locality",
                            type: "number",
                            placeholder: "ближайшего населенного пункта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего объекта общественного питания (км)",
                            model_key: "distance_to_near_public_catering",
                            type: "number",
                            placeholder: "ближайшего объекта общественного питания (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего объекта здравоохранения (км)",
                            model_key: "distance_to_near_health_care",
                            type: "number",
                            placeholder: "ближайшего объекта здравоохранения (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей остановки общественного транспорта (км)",
                            model_key: "distance_to_near_public_transport",
                            type: "number",
                            placeholder: "ближайшей остановки общественного транспорта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "расстояние до ближайшей железнодорожной станции (км)",
                            model_key: "distance_to_near_railway_station",
                            type: "number",
                            placeholder: "расстояние до ближайшей железнодорожной станции (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего аэропорта (км)",
                            model_key: "distance_to_near_airport",
                            type: "number",
                            placeholder: "ближайшего аэропорта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Контакты уполномоченного органа",
                            className: "form-item-title"
                        }],
                        a : [{
                            title: "Тип",
                            type: "text",
                            model_key: "type",
                            value: "Территория для туристской деятельности",
                            className: ""
                        }, {
                            title: "Условный номер",
                            type: "text",
                            value: "ЗТ1",
                            placeholder: "Условный номер",
                            model_key: "conditionalNumber",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Учетный номер кадастрового квартала",
                            type: "text",
                            value: "",
                            placeholder: "Учетный номер кадастрового квартала",
                            model_key: "kvartal_cn",
                            className: "cn",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Субъект РФ",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Субъект РФ",
                            model_key: "reg_name"
                        }, {
                            title: "Муниципальное образование",
                            type: "typeahead",
                            model_key: "mun",
                            placeholder: "Муниципальное образование",
                            url: "typeahead/101/?text=:text",
                            fetchParams: {
                                type: 101
                            },
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Населенный пункт",
                            type: "typeahead",
                            model_key: "np",
                            placeholder: "Населенный пункт",
                            url: "typeahead/102/?text=:text",
                            fetchParams: {
                                type: 102
                            },
                            className: "",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Адрес",
                            type: "text",
                            value: "",
                            placeholder: "Адрес",
                            model_key: "address",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Площадь, кв.м.",
                            model_key: "area_custom",
                            type: "number",
                            placeholder: "Площадь, кв.м.",
                            className: "area",
                            valueWrapper: [Y],
                            disabled: !0
                        }, {
                            title: "Форма собственности",
                            type: "select",
                            items: [{
                                name: "Федеральная собственность"
                            }, {
                                name: "Собственность субъекта Российской Федерации"
                            }, {
                                name: "Муниципальная собственность"
                            }, {
                                name: "Государственная неразграниченная собственность"
                            }],
                            selectedIndex: -1,
                            model_key: "right",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Категория земель",
                            type: "select",
                            items: [],
                            selectedIndex: -1,
                            placeholder: "Категория земель",
                            model_key: "category_text"
                        }, {
                            title: "Вид разрешенного использования (ВРИ)",
                            type: "select",
                            searchingFieldName: "value",
                            selectedIndex: -1,
                            items: [],
                            model_key: "util_code",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Кадастровая стоимость",
                            model_key: "cad_cost",
                            type: "text",
                            placeholder: "Кадастровая стоимость",
                            valueWrapper: [Y]
                        }, {
                            title: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            type: "text",
                            placeholder: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            model_key: "terzone_name_by_pzz"
                        }, {
                            title: "Наименование ближайшего объекта туристского интереса",
                            type: "text",
                            value: "",
                            placeholder: "Наименование ближайшего объекта туристского интереса",
                            model_key: "poi",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Идентификационный номер ОТИ",
                            type: "text",
                            mask: {
                                idOtiValid: Z
                            },
                            placeholder: "Идентификационный номер ОТИ",
                            model_key: "id_oti",
                            validations: {
                                idOtiValid: Z
                            }
                        }, {
                            title: "Кадастровый или реестровый номер объекта туристского интереса",
                            type: "text",
                            value: "",
                            placeholder: "Кадастровый или реестровый номер объекта туристского интереса",
                            model_key: "poi_cn",
                            className: "conditional-number",
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "",
                            type: "text",
                            model_key: "data_type",
                            value: 3,
                            visible: !1,
                            required: !0,
                            className: "",
                            disabled: !0
                        }, {
                            title: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            type: "text",
                            model_key: "tour_object_description",
                            placeholder: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            className: "conditional-number",
                            validations: {
                                urlhtIsValid: X
                            }
                        }, {
                            title: "Инженерные сети",
                            className: "level-padding-2",
                            model_key: "has_network"
                        }, {
                            title: "Электроснабжение:",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "power_supply"
                        }, {
                            title: "Водоснабжение:",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "water_supply"
                        }, {
                            title: "Газоснабжение:",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "gas_supply"
                        }, {
                            title: "Канализация:",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "sewerage"
                        }, {
                            title: "Теплоснабжение:",
                            type: "select",
                            items: [{
                                name: "Да"
                            }, {
                                name: "Нет"
                            }],
                            selectedIndex: -1,
                            model_key: "heat_supply"
                        }, {
                            title: "Расстояние до",
                            className: "level-padding-2"
                        }, {
                            title: "ближайшего объекта туристского интереса (км)",
                            model_key: "distance_to_near_tour_object",
                            type: "number",
                            placeholder: "ближайшего объекта туристского интереса (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей федеральной трассы (км)",
                            model_key: "distance_to_near_fed_road",
                            type: "number",
                            placeholder: "ближайшей федеральной трассы (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей дороги с твердым покрытием (км)",
                            model_key: "distance_to_near_hard_road",
                            type: "number",
                            placeholder: "ближайшей дороги с твердым покрытием (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего центра муниципального района или городского округа (км)",
                            model_key: "distance_to_near_district",
                            type: "number",
                            placeholder: "ближайшего центра муниципального района или городского округа (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего населенного пункта (км)",
                            model_key: "distance_to_near_locality",
                            type: "number",
                            placeholder: "ближайшего населенного пункта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего объекта общественного питания (км)",
                            model_key: "distance_to_near_public_catering",
                            type: "number",
                            placeholder: "ближайшего объекта общественного питания (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего объекта здравоохранения (км)",
                            model_key: "distance_to_near_health_care",
                            type: "number",
                            placeholder: "ближайшего объекта здравоохранения (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшей остановки общественного транспорта (км)",
                            model_key: "distance_to_near_public_transport",
                            type: "number",
                            placeholder: "ближайшей остановки общественного транспорта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "расстояние до ближайшей железнодорожной станции (км)",
                            model_key: "distance_to_near_railway_station",
                            type: "number",
                            placeholder: "расстояние до ближайшей железнодорожной станции (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "ближайшего аэропорта (км)",
                            model_key: "distance_to_near_airport",
                            type: "number",
                            placeholder: "ближайшего аэропорта (км)",
                            className: "",
                            valueWrapper: [Y],
                            validations: {
                                required: L["required"]
                            }
                        }, {
                            title: "Контакты уполномоченного органа",
                            className: "form-item-title"
                        }]
                }
                
}
data1 = {
                        services: [{
                            id: "parserBuildPtn",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_BUILD_PNT/FeatureServer/0",
                            layerType: "FeatureLayer",
                            minScale: 36113,
                            renderer: bt.build,
                            copyright: ""
                        }, {
                            id: "parserBuildPtnCluster",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_BUILD_PNT/FeatureServer/0",
                            layerType: "FeatureLayer",
                            maxScale: 36113,
                            renderer: bt.build,
                            copyright: "",
                            featureReduction: {
                                type: "cluster",
                                labelingInfo: [{
                                    deconflictionStrategy: "none",
                                    labelExpressionInfo: {
                                        expression: "$feature.cluster_count"
                                    },
                                    symbol: {
                                        type: "text",
                                        color: "#ffffff",
                                        font: {
                                            weight: "bold",
                                            family: "Calibri",
                                            size: "12px"
                                        }
                                    },
                                    labelPlacement: "center-center"
                                }],
                                popupEnabled: !1,
                                clusterRadius: 110
                            }
                        }, {
                            id: "parserTourismPtn",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_TOURISM_PNT/MapServer/0",
                            layerType: "FeatureLayer",
                            minScale: 36113,
                            renderer: bt.tourism,
                            copyright: ""
                        }, {
                            id: "parserTourismPtnCluster",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_TOURISM_PNT/MapServer/0",
                            layerType: "FeatureLayer",
                            maxScale: 36113,
                            renderer: bt.tourism,
                            copyright: "",
                            featureReduction: {
                                type: "cluster",
                                labelingInfo: [{
                                    deconflictionStrategy: "none",
                                    labelExpressionInfo: {
                                        expression: "$feature.cluster_count"
                                    },
                                    symbol: {
                                        type: "text",
                                        color: "#ffffff",
                                        font: {
                                            weight: "bold",
                                            family: "Calibri",
                                            size: "12px"
                                        }
                                    },
                                    labelPlacement: "center-center"
                                }],
                                popupEnabled: !1,
                                clusterRadius: 110
                            }
                        }, {
                            id: "parserOtiPtn",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/TOURISM_OBJ/MapServer/1",
                            layerType: "FeatureLayer",
                            minScale: 36113,
                            renderer: bt.oti,
                            copyright: ""
                        }, {
                            id: "parserOtiPtnCluster",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/TOURISM_OBJ/MapServer/1",
                            layerType: "FeatureLayer",
                            maxScale: 36113,
                            renderer: bt.oti,
                            copyright: "",
                            featureReduction: {
                                type: "cluster",
                                labelingInfo: [{
                                    deconflictionStrategy: "none",
                                    labelExpressionInfo: {
                                        expression: "$feature.cluster_count"
                                    },
                                    symbol: {
                                        type: "text",
                                        color: "#ee161f",
                                        font: {
                                            weight: "bold",
                                            family: "Calibri",
                                            size: "12px"
                                        }
                                    },
                                    labelPlacement: "center-center"
                                }],
                                popupEnabled: !1,
                                clusterRadius: 110
                            }
                        }, {
                            id: "VECTOR_EKD",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer",
                            layerType: "VectorTileLayer",
                            copyright: ""
                        }, {
                            id: "cadastreObjects",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 36113,
                            copyright: ""
                        }, {
                            id: "bordersGKN",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/BordersGKN/MapServer",
                            layerType: "CustomTileLayer",
                            copyright: ""
                        }, {
                            id: "borders",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/borders/VectorTileServer",
                            layerType: "VectorTileLayer",
                            copyright: ""
                        }, {
                            id: "zones",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONES/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 288896,
                            copyright: ""
                        }, {
                            id: "zones_usib",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONES/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 288896,
                            copyright: ""
                        }, {
                            id: "negative",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/negative/VectorTileServer",
                            layerType: "VectorTileLayer",
                            minScale: 2311162.2171545,
                            maxScale: 564.248588,
                            copyright: "Государственный мониторинг земель ©"
                        }, {
                            id: "thematic",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Thematic/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 288896,
                            copyright: ""
                        }, {
                            id: "parserBuild",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_BUILD/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 36113,
                            copyright: ""
                        }, {
                            id: "parserTourism",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_TOURISM/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 36113,
                            copyright: ""
                        }, {
                            name: "parserOti",
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/TOURISM_OBJ/MapServer",
                            layerType: "CustomTileLayer",
                            minScale: 36113,
                            copyright: ""
                        }],
                        selectedLayers: [{
                            dataType: [2, 3, 4],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreSelected/MapServer/",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 4,
                                id: 12,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 295828765
                            }, {
                                dataType: 3,
                                id: 11,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 2,
                                id: 10,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }]
                        }, {
                            dataType: [1],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreSelected/MapServer/",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "custom-zu"
                            },
                            sublayers: [{
                                dataType: 1,
                                id: 9,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 9244650
                            }, {
                                dataType: 1,
                                id: 8,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 1,
                                id: 7,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 1,
                                id: 6,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }]
                        }, {
                            dataType: [5],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreSelected/MapServer/",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "same",
                                id: 0
                            },
                            sublayers: [{
                                dataType: 5,
                                id: 5,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 5,
                                id: 4,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 5,
                                id: 3,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 5,
                                id: 2,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScale: 18057
                            }, {
                                dataType: 5,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }, {
                                dataType: 5,
                                id: 0,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }]
                        }, {
                            dataType: [7],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/BordersGKNSelected/MapServer/",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "custom-border"
                            },
                            sublayers: [{
                                dataType: 7,
                                id: 4,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }, {
                                dataType: 7,
                                id: 7,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 7,
                                id: 3,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 7,
                                id: 6,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 7,
                                id: 2,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 7,
                                id: 5,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 4622326
                            }, {
                                dataType: 7,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 591657528
                            }, {
                                dataType: 7,
                                id: 0,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 591657528
                            }]
                        }, {
                            dataType: [13, 15, 18],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONESSelected/MapServer",
                            selectedLayerId: 0,
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 18,
                                id: 5,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }, {
                                dataType: 15,
                                id: 4,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 36113
                            }, {
                                dataType: 13,
                                id: 3,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 18057
                            }]
                        }, {
                            dataType: [6, 10, 20],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONESSelected/MapServer",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 20,
                                id: 6,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }, {
                                dataType: 20,
                                id: 2,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }, {
                                dataType: 6,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }, {
                                dataType: 10,
                                id: 0,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }]
                        }, {
                            dataType: [26],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONESSelected/MapServer",
                            checked: !0,
                            opacity: .5,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 26,
                                id: 7,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 288896
                            }]
                        }, {
                            dataType: [23, 22],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/NEGATIVESelected/MapServer",
                            checked: !0,
                            opacity: .8,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 22,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 577792
                            }, {
                                dataType: 23,
                                id: 0,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 577792
                            }]
                        }, {
                            dataType: [25],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_BUILD/MapServer",
                            checked: !0,
                            opacity: .8,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 25,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 577792
                            }]
                        }, {
                            dataType: [27],
                            url: "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/PARCEL_TOURISM/MapServer",
                            checked: !0,
                            opacity: .8,
                            layerType: "MapImageLayer",
                            scaleOptions: {
                                mode: "standard"
                            },
                            sublayers: [{
                                dataType: 27,
                                id: 1,
                                visible: !0,
                                definitionExpression: "objectid = -1",
                                minScaleConfig: 577792
                            }]
                        }]
}
data2 = {
                    keysMap: {
                        OBJECTID: "objectId",
                        cn: "cn",
                        xc: "x",
                        yc: "y"
                    },
                    objectRenderPosition: [3, 8, 12, 13, 1, 5, 9, 1 / 0, 7, 4, 1 / 0, 10, 6, 1 / 0, 1 / 0, 11, 1 / 0, 15, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0],
                    aliasOpenData: {
                        region: "Код региона",
                        name: "Наименование",
                        cs: "Система координат",
                        data_type: "Формат",
                        geo_type: "Тип геометрии",
                        actual_date: "Дата актуальности",
                        link: "Ссылка для скачивания"
                    },
                    aliasStat: {
                        okrug: {
                            name: "Кадастровые округа",
                            sorted: 1
                        },
                        rayon: {
                            name: "Кадастровые районы",
                            sorted: 2
                        },
                        kvartal: {
                            name: "Кадастровые кварталы",
                            sorted: 3
                        },
                        parcel: {
                            name: "Земельные участки",
                            sorted: 4
                        },
                        oks_building: {
                            name: "Здания",
                            sorted: 5
                        },
                        oks_construction: {
                            name: "Сооружения",
                            sorted: 6
                        },
                        oks_incomplete: {
                            name: "Объекты незавершенного строительства",
                            sorted: 7
                        },
                        zouit: "Зоны с особыми условиями использования территории",
                        bounds: "Границы",
                        red_lines: "Красные линии",
                        forest: "Лесничества и лесопарки",
                        parcel_scheme: {
                            name: "Схемы расположения земельных участков",
                            sorted: 10
                        },
                        ggs: {
                            name: "Пункты ГГС",
                            sorted: 8
                        },
                        zmd: "Границы минимальных расстояний от объектов магистральных газопроводов, нефтепроводов и нефтепродуктопроводов до зданий, строений и сооружений",
                        terzone: "Территориальная зона",
                        oms: {
                            name: "Пункт опорной межевой сети",
                            sorted: 9
                        },
                        special_zone: "Зона с особыми экономическими условиями использования территории",
                        zones: "Зоны",
                        parcel_survey: "ЗУ, подлежащие образованию в соответствии с утвержденным проектом межевания территории",
                        gm_nzz: "Государственный мониторинг земель - нарушения",
                        gm_negative: "Государственный мониторинг земель - Негативные воздействия",
                        cad_num: "Кадастровый номер",
                        name: "Кадастровый округ",
                        kvartals_cnt: "Кадастровые кварталы",
                        rayons_cnt: "Кадастровые районы",
                        actual_date: "Дата актуальности границ",
                        online_actual_date: "Дата актуальности атрибутов",
                        online_parcels_cnt: "Земельные участки",
                        parcels_cnt: "Земельные&nbsp;участки с границами на ПКК",
                        online_oks_cnt: "ОКС",
                        oks_cnt: "ОКС c границами на ПКК",
                        oms_cnt: "Пункты ОМС",
                        brd_cnt: "Границы муниципалитетов и населенных&nbsp;пунктов",
                        tz_cnt: "Тер. зоны",
                        zouit_cnt: "ЗОУИТ",
                        zmd_cnt: "ГМР"
                    },
                    aliasOrder: {
                        date_create: "Дата заказа",
                        file_type: "Формат",
                        real_count: "Объектов в заказе",
                        status: "Статус",
                        url: "Ссылка для скачивания"
                    },
                    shortNameMap: {
                        1: ["участка", "ЗУ"],
                        2: ["квартала", "кк", "квартал"],
                        3: ["района", "кр", "район"],
                        4: ["округа", "ко", "округ"],
                        5: ["окс", "окса"],
                        6: ["зоны", "зона"],
                        7: ["границы", "граница"],
                        10: ["зоуит", "зоуита"],
                        11: ["картоосновы"],
                        24: ["комплекса"],
                        15: ["проекта ЗУ"],
                        20: ["зоны"],
                        13: ["красной линии"],
                        23: ["негативного процесса"],
                        25: ["географического объекта"],
                        26: ["Усолья-Сибирского"],
                        27: ["географического объекта"],
                        "-1": ["адреса"]
                    },
                    cartogramTypes: {
                        1: "Цифровые топокарты",
                        2: "Ортофотопланы",
                        3: "Ортофотопокрытия"
                    },
                    areaTypes: {
                        "000": " Площадь",
                        "001": "Площадь застройки",
                        "002": "Площадь общая",
                        "003": "Площадь общая, без лоджии",
                        "004": "Площадь общая, с лоджией",
                        "005": "Площадь жилая",
                        "007": "Площадь основная",
                        "008": "Площадь декларированная",
                        "009": "Площадь уточненная",
                        "010": "Площадь фактическая",
                        "011": "Площадь вспомогательная",
                        "012": "Площадь помещений общего пользования без лоджии",
                        "013": "Площадь помещений общего пользования с лоджией",
                        "014": "Прочие технические помещения без лоджии",
                        "015": "Прочие технические помещения с лоджией",
                        "020": "Площадь застроенная",
                        "021": "Площадь незастроенная",
                        "022": "Значение площади отсутствует"
                    },
                    measurementUnits: {
                        "003": "мм",
                        "004": "см",
                        "005": "дм",
                        "006": "м",
                        "008": "км",
                        "009": "Мм",
                        "047": "морск. м.",
                        "050": "кв. мм",
                        "051": "кв. см",
                        "053": "кв. дм",
                        "055": "кв. м",
                        "058": "тыс. кв. м",
                        "059": "га",
                        "061": "кв. км",
                        109: "а",
                        359: "сут.",
                        360: "нед.",
                        361: "дек.",
                        362: "мес.",
                        364: "кварт.",
                        365: "полугод.",
                        366: "г.",
                        383: "руб.",
                        384: "тыс. руб.",
                        385: "млн. руб.",
                        386: "млрд. руб.",
                        1e3: "неопр.",
                        1001: "отсутств.",
                        1002: "руб. за кв. м",
                        1003: "руб. за а",
                        1004: "руб. за га",
                        1005: "иные"
                    },
                    cadastreUnits: {
                        "003": "мм",
                        "004": "см",
                        "005": "дм",
                        "006": "м",
                        "008": "км",
                        "009": "Мм",
                        "047": "морск. м.",
                        "050": "кв. мм",
                        "051": "кв. см",
                        "053": "кв. дм",
                        "055": "кв. м",
                        "058": "тыс. кв. м",
                        "059": "га",
                        "061": "кв. км",
                        109: "а",
                        359: "сут.",
                        360: "нед.",
                        361: "дек.",
                        362: "мес.",
                        364: "кварт.",
                        365: "полугод.",
                        366: "г.",
                        383: "руб.",
                        384: "тыс. руб.",
                        385: "млн. руб.",
                        386: "млрд. руб.",
                        1e3: "неопр.",
                        1001: "отсутств.",
                        1002: "руб. за кв. м",
                        1003: "руб. за а",
                        1004: "руб. за га",
                        1005: "иные"
                    },
                    utilDescription: {
                        141e9: "Для размещения объектов сельскохозяйственного назначения и сельскохозяйственных угодий",
                        141001e6: "Для сельскохозяйственного производства",
                        14100101e4: "Для использования в качестве сельскохозяйственных угодий",
                        14100102e4: "Для размещения зданий, строений, сооружений, используемых для производства, хранения и первичной переработки сельскохозяйственной продукции",
                        14100103e4: "Для размещения внутрихозяйственных дорог и коммуникаций",
                        14100104e4: "Для размещения водных объектов",
                        141002e6: "Для ведения крестьянского (фермерского) хозяйства",
                        141003e6: "Для ведения личного подсобного хозяйства",
                        141004e6: "Для ведения гражданами садоводства и огородничества",
                        141005e6: "Для ведения гражданами животноводства",
                        141006e6: "Для дачного строительства",
                        141007e6: "Для размещения древесно-кустарниковой растительности, предназначенной для защиты земель от воздействия негативных (вредных) природных, антропогенных и техногенных явлений",
                        141008e6: "Для научно-исследовательских целей",
                        141009e6: "Для учебных целей",
                        14101e7: "Для сенокошения и выпаса скота гражданами",
                        141011e6: "Фонд перераспределения",
                        141012e6: "Для размещения объектов охотничьего хозяйства",
                        141013e6: "Для размещения объектов рыбного хозяйства",
                        141014e6: "Для иных видов сельскохозяйственного использования",
                        142e9: "Для размещения объектов, характерных для населенных пунктов",
                        142001e6: "Для объектов жилой застройки",
                        14200101e4: "Для индивидуальной жилой застройки",
                        14200102e4: "Для многоквартирной застройки",
                        142001020100: "Для малоэтажной застройки",
                        142001020200: "Для среднеэтажной застройки",
                        142001020300: "Для многоэтажной застройки",
                        142001020400: "Для иных видов жилой застройки",
                        14200103e4: "Для размещения объектов дошкольного, начального, общего и среднего (полного) общего образования",
                        14200104e4: "Для размещения иных объектов, допустимых в жилых зонах и не перечисленных в классификаторе",
                        142002e6: "Для объектов общественно-делового значения",
                        14200201e4: "Для размещения объектов социального и коммунально-бытового назначения",
                        14200202e4: "Для размещения объектов здравоохранения",
                        14200203e4: "Для размещения объектов культуры",
                        14200204e4: "Для размещения объектов торговли",
                        142002040100: "Для размещения объектов розничной торговли",
                        142002040200: "Для размещения объектов оптовой торговли",
                        14200205e4: "Для размещения объектов общественного питания",
                        14200206e4: "Для размещения объектов предпринимательской деятельности",
                        14200207e4: "Для размещения объектов среднего профессионального и высшего профессионального образования",
                        14200208e4: "Для размещения административных зданий",
                        14200209e4: "Для размещения научно-исследовательских учреждений",
                        1420021e5: "Для размещения культовых зданий",
                        14200211e4: "Для стоянок автомобильного транспорта",
                        14200212e4: "Для размещения объектов делового назначения, в том числе офисных центров",
                        14200213e4: "Для размещения объектов финансового назначения",
                        14200214e4: "Для размещения гостиниц",
                        14200215e4: "Для размещения подземных или многоэтажных гаражей",
                        14200216e4: "Для размещения индивидуальных гаражей",
                        14200217e4: "Для размещения иных объектов общественно-делового значения, обеспечивающих жизнь граждан",
                        142003e6: "Для общего пользования (уличная сеть)",
                        142004e6: "Для размещения объектов специального назначения",
                        14200401e4: "Для размещения кладбищ",
                        14200402e4: "Для размещения крематориев",
                        14200403e4: "Для размещения скотомогильников",
                        14200404e4: "Под объектами размещения отходов потребления",
                        14200405e4: "Под иными объектами специального назначения",
                        142005e6: "Для размещения коммунальных, складских объектов",
                        142006e6: "Для размещения объектов жилищно-коммунального хозяйства",
                        142007e6: "Для иных видов использования, характерных для населенных пунктов",
                        143e9: "Для размещения объектов промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, обеспечения космической деятельности, обороны, безопасности и иного специального назначения",
                        143001e6: "Для размещения промышленных объектов",
                        14300101e4: "Для размещения производственных и административных зданий, строений, сооружений и обслуживающих их объектов",
                        143001010100: "Для размещения производственных зданий",
                        143001010200: "Для размещения коммуникаций",
                        143001010300: "Для размещения подъездных путей",
                        143001010400: "Для размещения складских помещений",
                        143001010500: "Для размещения административных зданий",
                        143001010600: "Для размещения культурно-бытовых зданий",
                        143001010700: "Для размещения иных сооружений промышленности",
                        14300102e4: "Для добычи и разработки полезных ископаемых",
                        14300103e4: "Для размещения иных объектов промышленности",
                        143002e6: "Для размещения объектов энергетики",
                        14300201e4: "Для размещения электростанций и обслуживающих сооружений и объектов",
                        143002010100: "Для размещения гидроэлектростанций",
                        143002010200: "Для размещения атомных станций",
                        143002010300: "Для размещения ядерных установок",
                        143002010400: "Для размещения пунктов хранения ядерных материалов и радиоактивных веществ энергетики",
                        143002010500: "Для размещения хранилищ радиоактивных отходов",
                        143002010600: "Для размещения тепловых станций",
                        143002010700: "Для размещения иных типов электростанций",
                        143002010800: "Для размещения иных обслуживающих сооружений и объектов",
                        14300202e4: "Для размещения объектов электросетевого хозяйства",
                        143002020100: "Для размещения воздушных линий электропередачи",
                        143002020200: "Для размещения наземных сооружений кабельных линий электропередачи",
                        143002020300: "Для размещения подстанций",
                        143002020400: "Для размещения распределительных пунктов",
                        143002020500: "Для размещения других сооружений и объектов электросетевого хозяйства",
                        14300203e4: "Для размещения иных объектов энергетики",
                        143003e6: "Для размещения объектов транспорта",
                        14300301e4: "Для размещения и эксплуатации объектов железнодорожного транспорта",
                        143003010100: "Для размещения железнодорожных путей и их конструктивных элементов",
                        143003010200: "Для размещения полос отвода железнодорожных путей",
                        143003010300: "Для размещения, эксплуатации, расширения и реконструкции строений, зданий, сооружений, в том числе железнодорожных вокзалов, железнодорожных станций, а также устройств и других объектов, необходимых для эксплуатации, содержания, строительства, реконструкции, ремонта, развития наземных и подземных зданий, строений, сооружений, устройств и других объектов железнодорожного транспорта",
                        143003010301: "Для размещения железнодорожных вокзалов",
                        143003010302: "Для размещения железнодорожных станций",
                        143003010303: "Для размещения устройств и других объектов, необходимых для эксплуатации, содержания, строительства, реконструкции, ремонта, развития наземных и подземных зданий, строений, сооружений, устройств и других объектов железнодорожного транспорта",
                        14300302e4: "Для размещения и эксплуатации объектов автомобильного транспорта и объектов дорожного хозяйства",
                        143003020100: "Для размещения автомобильных дорог и их конструктивных элементов",
                        143003020200: "Для размещения полос отвода",
                        143003020300: "Для размещения объектов дорожного сервиса в полосах отвода автомобильных дорог",
                        143003020400: "Для размещения дорожных сооружений",
                        143003020500: "Для размещения автовокзалов и автостанций",
                        143003020600: "Для размещения иных объектов автомобильного транспорта и дорожного хозяйства",
                        14300303e4: "Для размещения и эксплуатации объектов морского, внутреннего водного транспорта",
                        143003030100: "Для размещения искусственно созданных внутренних водных путей",
                        143003030200: "Для размещения морских и речных портов, причалов, пристаней",
                        143003030300: "Для размещения иных объектов морского, внутреннего водного транспорта",
                        143003030400: "Для выделения береговой полосы",
                        14300304e4: "Для размещения и эксплуатации объектов воздушного транспорта",
                        143003040100: "Для размещения аэропортов и аэродромов",
                        143003040200: "Для размещения аэровокзалов",
                        143003040300: "Для размещения взлетно-посадочных полос",
                        143003040400: "Для размещения иных наземных объектов воздушного транспорта",
                        14300305e4: "Для размещения и эксплуатации объектов трубопроводного транспорта",
                        143003050100: "Для размещения нефтепроводов",
                        143003050200: "Для размещения газопроводов",
                        143003050300: "Для размещения иных трубопроводов",
                        143003050400: "Для размещения иных объектов трубопроводного транспорта",
                        14300306e4: "Для размещения и эксплуатации иных объектов транспорта",
                        143004e6: "Для размещения объектов связи, радиовещания, телевидения, информатики",
                        14300401e4: "Для размещения эксплуатационных предприятий связи и обслуживания линий связи",
                        14300402e4: "Для размещения кабельных, радиорелейных и воздушных линий связи и линий радиофикации на трассах кабельных и воздушных линий связи и радиофикации и их охранные зоны",
                        14300403e4: "Для размещения подземных кабельных и воздушных линий связи и радиофикации и их охранные зоны",
                        14300404e4: "Для размещения наземных и подземных необслуживаемых усилительных пунктов на кабельных линиях связи и их охранные зоны",
                        14300405e4: "Для размещения наземных сооружений и инфраструктур спутниковой связи",
                        14300406e4: "Для размещения иных объектов связи, радиовещания, телевидения, информатики",
                        143005e6: "Для размещения объектов, предназначенных для обеспечения космической деятельности",
                        14300501e4: "Для размещения космодромов, стартовых комплексов и пусковых установок",
                        14300502e4: "Для размещения командно-измерительных комплексов, центров и пунктов управления полетами космических объектов, приема, хранения и переработки информации",
                        14300503e4: "Для размещения баз хранения космической техники",
                        14300504e4: "Для размещения полигонов приземления космических объектов и взлетно-посадочных полос",
                        14300505e4: "Для размещения объектов экспериментальной базы для отработки космической техники",
                        14300506e4: "Для размещения центров и оборудования для подготовки космонавтов",
                        14300507e4: "Для размещения других наземных сооружений и техники, используемых при осуществлении космической деятельности",
                        143006e6: "Для размещения объектов, предназначенных для обеспечения обороны и безопасности",
                        14300601e4: "Для обеспечения задач обороны",
                        143006010100: "Для размещения военных организаций, учреждений и других объектов",
                        143006010200: "Для дислокации войск и сил флота",
                        143006010300: "Для проведения учений и иных мероприятий",
                        143006010400: "Для испытательных полигонов",
                        143006010500: "Для мест уничтожения оружия и захоронения отходов",
                        143006010600: "Для создания запасов материальных ценностей в государственном и мобилизационном резервах (хранилища, склады и другие)",
                        143006010700: "Для размещения иных объектов обороны",
                        14300602e4: "Для размещения объектов (территорий), обеспечивающих защиту и охрану Государственной границы Российской Федерации",
                        143006020100: "Для обустройства и содержания инженерно-технических сооружений и заграждений",
                        143006020200: "Для обустройства и содержания пограничных знаков",
                        143006020300: "Для обустройства и содержания пограничных просек",
                        143006020400: "Для обустройства и содержания коммуникаций",
                        143006020500: "Для обустройства и содержания пунктов пропуска через Государственную границу Российской Федерации",
                        143006020600: "Для размещения иных объектов для защиты и охраны Государственной границы Российской Федерации",
                        14300603e4: "Для размещения иных объектов обороны и безопасности",
                        143007e6: "Для размещения иных объектов промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, обеспечения космической деятельности, обороны, безопасности и иного специального назначения",
                        144e9: "Для размещения особо охраняемых историко-культурных и природных объектов (территорий)",
                        144001e6: "Для размещения особо охраняемых природных объектов (территорий)",
                        14400101e4: "Для размещения государственных природных заповедников (в том числе биосферных)",
                        14400102e4: "Для размещения государственных природных заказников",
                        14400103e4: "Для размещения национальных парков",
                        14400104e4: "Для размещения природных парков",
                        14400105e4: "Для размещения дендрологических парков",
                        14400106e4: "Для размещения ботанических садов",
                        14400107e4: "Для размещения объектов санаторного и курортного назначения",
                        14400108e4: "Территории месторождений минеральных вод, лечебных грязей, рапы лиманов и озер",
                        14400109e4: "Для традиционного природопользования",
                        1440011e5: "Для размещения иных особо охраняемых природных территорий (объектов)",
                        144002e6: "Для размещения объектов (территорий) природоохранного назначения",
                        144003e6: "Для размещения объектов (территорий) рекреационного назначения",
                        14400301e4: "Для размещения домов отдыха, пансионатов, кемпингов",
                        14400302e4: "Для размещения объектов физической культуры и спорта",
                        14400303e4: "Для размещения туристических баз, стационарных и палаточных туристско-оздоровительных лагерей, домов рыболова и охотника, детских туристических станций",
                        14400304e4: "Для размещения туристических парков",
                        14400305e4: "Для размещения лесопарков",
                        14400306e4: "Для размещения учебно-туристических троп и трасс",
                        14400307e4: "Для размещения детских и спортивных лагерей",
                        14400308e4: "Для размещения скверов, парков, городских садов",
                        14400309e4: "Для размещения пляжей",
                        1440031e5: "Для размещения иных объектов (территорий) рекреационного назначения",
                        144004e6: "Для размещения объектов историко-культурного назначения",
                        14400401e4: "Для размещения объектов культурного наследия народов Российской Федерации (памятников истории и культуры), в том числе объектов археологического наследия",
                        14400402e4: "Для размещения военных и гражданских захоронений",
                        144005e6: "Для размещения иных особо охраняемых историко-культурных и природных объектов (территорий)",
                        145e9: "Для размещения объектов лесного фонда",
                        145001e6: "Для размещения лесной растительности",
                        145002e6: "Для восстановления лесной растительности",
                        145003e6: "Для прочих объектов лесного хозяйства",
                        146e9: "Для размещения объектов водного фонда",
                        146001e6: "Под водными объектами",
                        146002e6: "Для размещения гидротехнических сооружений",
                        146003e6: "Для размещения иных сооружений, расположенных на водных объектах",
                        147e9: "Земли запаса (неиспользуемые)"
                    },
                    parcel_states: {
                        "01": "Ранее учтенный",
                        "03": "Условный",
                        "04": "Внесенный",
                        "05": "Временный",
                        "06": "Учтенный",
                        "07": "Архивный",
                        "08": "Аннулированный",
                        "00": "Не определён"
                    },
                    category_types: {
                        "003001000000": "Земли сельскохозяйственного назначения",
                        "003002000000": "Земли населённых пунктов",
                        "003003000000": "Земли промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, земли для обеспечения космической деятельности, земли обороны, безопасности и земли иного специального назначения",
                        "003004000000": "Земли особо охраняемых территорий и объектов",
                        "003005000000": "Земли лесного фонда",
                        "003006000000": "Земли водного фонда",
                        "003007000000": "Земли запаса",
                        "003008000000": "Категория не установлена"
                    },
                    utilizations: {
                        141e9: "Для размещения объектов сельскохозяйственного назначения и сельскохозяйственных угодий",
                        141001e6: "Для сельскохозяйственного производства",
                        14100101e4: "Для использования в качестве сельскохозяйственных угодий",
                        14100102e4: "Для размещения зданий, строений, сооружений, используемых для производства, хранения и первичной переработки сельскохозяйственной продукции",
                        14100103e4: "Для размещения внутрихозяйственных дорог и коммуникаций",
                        14100104e4: "Для размещения водных объектов",
                        141002e6: "Для ведения крестьянского (фермерского) хозяйства",
                        141003e6: "Для ведения личного подсобного хозяйства",
                        141004e6: "Для ведения гражданами садоводства и огородничества",
                        141005e6: "Для ведения гражданами животноводства",
                        141006e6: "Для дачного строительства",
                        141007e6: "Для размещения древесно-кустарниковой растительности, предназначенной для защиты земель от воздействия негативных (вредных) природных, антропогенных и техногенных явлений",
                        141008e6: "Для научно-исследовательских целей",
                        141009e6: "Для учебных целей",
                        14101e7: "Для сенокошения и выпаса скота гражданами",
                        141011e6: "Фонд перераспределения",
                        141012e6: "Для размещения объектов охотничьего хозяйства",
                        141013e6: "Для размещения объектов рыбного хозяйства",
                        141014e6: "Для иных видов сельскохозяйственного использования",
                        142e9: "Для размещения объектов, характерных для населенных пунктов",
                        142001e6: "Для объектов жилой застройки",
                        14200101e4: "Для индивидуальной жилой застройки",
                        14200102e4: "Для многоквартирной застройки",
                        142001020100: "Для малоэтажной застройки",
                        142001020200: "Для среднеэтажной застройки",
                        142001020300: "Для многоэтажной застройки",
                        142001020400: "Для иных видов жилой застройки",
                        14200103e4: "Для размещения объектов дошкольного, начального, общего и среднего (полного) общего образования",
                        14200104e4: "Для размещения иных объектов, допустимых в жилых зонах и не перечисленных в классификаторе",
                        142002e6: "Для объектов общественно-делового значения",
                        14200201e4: "Для размещения объектов социального и коммунально-бытового назначения",
                        14200202e4: "Для размещения объектов здравоохранения",
                        14200203e4: "Для размещения объектов культуры",
                        14200204e4: "Для размещения объектов торговли",
                        142002040100: "Для размещения объектов розничной торговли",
                        142002040200: "Для размещения объектов оптовой торговли",
                        14200205e4: "Для размещения объектов общественного питания",
                        14200206e4: "Для размещения объектов предпринимательской деятельности",
                        14200207e4: "Для размещения объектов среднего профессионального и высшего профессионального образования",
                        14200208e4: "Для размещения административных зданий",
                        14200209e4: "Для размещения научно-исследовательских учреждений",
                        1420021e5: "Для размещения культовых зданий",
                        14200211e4: "Для стоянок автомобильного транспорта",
                        14200212e4: "Для размещения объектов делового назначения, в том числе офисных центров",
                        14200213e4: "Для размещения объектов финансового назначения",
                        14200214e4: "Для размещения гостиниц",
                        14200215e4: "Для размещения подземных или многоэтажных гаражей",
                        14200216e4: "Для размещения индивидуальных гаражей",
                        14200217e4: "Для размещения иных объектов общественно-делового значения, обеспечивающих жизнь граждан",
                        142003e6: "Для общего пользования (уличная сеть)",
                        142004e6: "Для размещения объектов специального назначения",
                        14200401e4: "Для размещения кладбищ",
                        14200402e4: "Для размещения крематориев",
                        14200403e4: "Для размещения скотомогильников",
                        14200404e4: "Под объектами размещения отходов потребления",
                        14200405e4: "Под иными объектами специального назначения",
                        142005e6: "Для размещения коммунальных, складских объектов",
                        142006e6: "Для размещения объектов жилищно-коммунального хозяйства",
                        142007e6: "Для иных видов использования, характерных для населенных пунктов",
                        143e9: "Для размещения объектов промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, обеспечения космической деятельности, обороны, безопасности и иного специального назначения",
                        143001e6: "Для размещения промышленных объектов",
                        14300101e4: "Для размещения производственных и административных зданий, строений, сооружений и обслуживающих их объектов",
                        143001010100: "Для размещения производственных зданий",
                        143001010200: "Для размещения коммуникаций",
                        143001010300: "Для размещения подъездных путей",
                        143001010400: "Для размещения складских помещений",
                        143001010500: "Для размещения административных зданий",
                        143001010600: "Для размещения культурно-бытовых зданий",
                        143001010700: "Для размещения иных сооружений промышленности",
                        14300102e4: "Для добычи и разработки полезных ископаемых",
                        14300103e4: "Для размещения иных объектов промышленности",
                        143002e6: "Для размещения объектов энергетики",
                        14300201e4: "Для размещения электростанций и обслуживающих сооружений и объектов",
                        143002010100: "Для размещения гидроэлектростанций",
                        143002010200: "Для размещения атомных станций",
                        143002010300: "Для размещения ядерных установок",
                        143002010400: "Для размещения пунктов хранения ядерных материалов и радиоактивных веществ энергетики",
                        143002010500: "Для размещения хранилищ радиоактивных отходов",
                        143002010600: "Для размещения тепловых станций",
                        143002010700: "Для размещения иных типов электростанций",
                        143002010800: "Для размещения иных обслуживающих сооружений и объектов",
                        14300202e4: "Для размещения объектов электросетевого хозяйства",
                        143002020100: "Для размещения воздушных линий электропередачи",
                        143002020200: "Для размещения наземных сооружений кабельных линий электропередачи",
                        143002020300: "Для размещения подстанций",
                        143002020400: "Для размещения распределительных пунктов",
                        143002020500: "Для размещения других сооружений и объектов электросетевого хозяйства",
                        14300203e4: "Для размещения иных объектов энергетики",
                        143003e6: "Для размещения объектов транспорта",
                        14300301e4: "Для размещения и эксплуатации объектов железнодорожного транспорта",
                        143003010100: "Для размещения железнодорожных путей и их конструктивных элементов",
                        143003010200: "Для размещения полос отвода железнодорожных путей",
                        143003010300: "Для размещения, эксплуатации, расширения и реконструкции строений, зданий, сооружений, в том числе железнодорожных вокзалов, железнодорожных станций, а также устройств и других объектов, необходимых для эксплуатации, содержания, строительства, реконструкции, ремонта, развития наземных и подземных зданий, строений, сооружений, устройств и других объектов железнодорожного транспорта",
                        143003010301: "Для размещения железнодорожных вокзалов",
                        143003010302: "Для размещения железнодорожных станций",
                        143003010303: "Для размещения устройств и других объектов, необходимых для эксплуатации, содержания, строительства, реконструкции, ремонта, развития наземных и подземных зданий, строений, сооружений, устройств и других объектов железнодорожного транспорта",
                        14300302e4: "Для размещения и эксплуатации объектов автомобильного транспорта и объектов дорожного хозяйства",
                        143003020100: "Для размещения автомобильных дорог и их конструктивных элементов",
                        143003020200: "Для размещения полос отвода",
                        143003020300: "Для размещения объектов дорожного сервиса в полосах отвода автомобильных дорог",
                        143003020400: "Для размещения дорожных сооружений",
                        143003020500: "Для размещения автовокзалов и автостанций",
                        143003020600: "Для размещения иных объектов автомобильного транспорта и дорожного хозяйства",
                        14300303e4: "Для размещения и эксплуатации объектов морского, внутреннего водного транспорта",
                        143003030100: "Для размещения искусственно созданных внутренних водных путей",
                        143003030200: "Для размещения морских и речных портов, причалов, пристаней",
                        143003030300: "Для размещения иных объектов морского, внутреннего водного транспорта",
                        143003030400: "Для выделения береговой полосы",
                        14300304e4: "Для размещения и эксплуатации объектов воздушного транспорта",
                        143003040100: "Для размещения аэропортов и аэродромов",
                        143003040200: "Для размещения аэровокзалов",
                        143003040300: "Для размещения взлетно-посадочных полос",
                        143003040400: "Для размещения иных наземных объектов воздушного транспорта",
                        14300305e4: "Для размещения и эксплуатации объектов трубопроводного транспорта",
                        143003050100: "Для размещения нефтепроводов",
                        143003050200: "Для размещения газопроводов",
                        143003050300: "Для размещения иных трубопроводов",
                        143003050400: "Для размещения иных объектов трубопроводного транспорта",
                        14300306e4: "Для размещения и эксплуатации иных объектов транспорта",
                        143004e6: "Для размещения объектов связи, радиовещания, телевидения, информатики",
                        14300401e4: "Для размещения эксплуатационных предприятий связи и обслуживания линий связи",
                        14300402e4: "Для размещения кабельных, радиорелейных и воздушных линий связи и линий радиофикации на трассах кабельных и воздушных линий связи и радиофикации и их охранные зоны",
                        14300403e4: "Для размещения подземных кабельных и воздушных линий связи и радиофикации и их охранные зоны",
                        14300404e4: "Для размещения наземных и подземных необслуживаемых усилительных пунктов на кабельных линиях связи и их охранные зоны",
                        14300405e4: "Для размещения наземных сооружений и инфраструктур спутниковой связи",
                        14300406e4: "Для размещения иных объектов связи, радиовещания, телевидения, информатики",
                        143005e6: "Для размещения объектов, предназначенных для обеспечения космической деятельности",
                        14300501e4: "Для размещения космодромов, стартовых комплексов и пусковых установок",
                        14300502e4: "Для размещения командно-измерительных комплексов, центров и пунктов управления полетами космических объектов, приема, хранения и переработки информации",
                        14300503e4: "Для размещения баз хранения космической техники",
                        14300504e4: "Для размещения полигонов приземления космических объектов и взлетно-посадочных полос",
                        14300505e4: "Для размещения объектов экспериментальной базы для отработки космической техники",
                        14300506e4: "Для размещения центров и оборудования для подготовки космонавтов",
                        14300507e4: "Для размещения других наземных сооружений и техники, используемых при осуществлении космической деятельности",
                        143006e6: "Для размещения объектов, предназначенных для обеспечения обороны и безопасности",
                        14300601e4: "Для обеспечения задач обороны",
                        143006010100: "Для размещения военных организаций, учреждений и других объектов",
                        143006010200: "Для дислокации войск и сил флота",
                        143006010300: "Для проведения учений и иных мероприятий",
                        143006010400: "Для испытательных полигонов",
                        143006010500: "Для мест уничтожения оружия и захоронения отходов",
                        143006010600: "Для создания запасов материальных ценностей в государственном и мобилизационном резервах (хранилища, склады и другие)",
                        143006010700: "Для размещения иных объектов обороны",
                        14300602e4: "Для размещения объектов (территорий), обеспечивающих защиту и охрану Государственной границы Российской Федерации",
                        143006020100: "Для обустройства и содержания инженерно-технических сооружений и заграждений",
                        143006020200: "Для обустройства и содержания пограничных знаков",
                        143006020300: "Для обустройства и содержания пограничных просек",
                        143006020400: "Для обустройства и содержания коммуникаций",
                        143006020500: "Для обустройства и содержания пунктов пропуска через Государственную границу Российской Федерации",
                        143006020600: "Для размещения иных объектов для защиты и охраны Государственной границы Российской Федерации",
                        14300603e4: "Для размещения иных объектов обороны и безопасности",
                        143007e6: "Для размещения иных объектов промышленности, энергетики, транспорта, связи, радиовещания, телевидения, информатики, обеспечения космической деятельности, обороны, безопасности и иного специального назначения",
                        144e9: "Для размещения особо охраняемых историко-культурных и природных объектов (территорий)",
                        144001e6: "Для размещения особо охраняемых природных объектов (территорий)",
                        14400101e4: "Для размещения государственных природных заповедников (в том числе биосферных)",
                        14400102e4: "Для размещения государственных природных заказников",
                        14400103e4: "Для размещения национальных парков",
                        14400104e4: "Для размещения природных парков",
                        14400105e4: "Для размещения дендрологических парков",
                        14400106e4: "Для размещения ботанических садов",
                        14400107e4: "Для размещения объектов санаторного и курортного назначения",
                        14400108e4: "Территории месторождений минеральных вод, лечебных грязей, рапы лиманов и озер",
                        14400109e4: "Для традиционного природопользования",
                        1440011e5: "Для размещения иных особо охраняемых природных территорий (объектов)",
                        144002e6: "Для размещения объектов (территорий) природоохранного назначения",
                        144003e6: "Для размещения объектов (территорий) рекреационного назначения",
                        14400301e4: "Для размещения домов отдыха, пансионатов, кемпингов",
                        14400302e4: "Для размещения объектов физической культуры и спорта",
                        14400303e4: "Для размещения туристических баз, стационарных и палаточных туристско-оздоровительных лагерей, домов рыболова и охотника, детских туристических станций",
                        14400304e4: "Для размещения туристических парков",
                        14400305e4: "Для размещения лесопарков",
                        14400306e4: "Для размещения учебно-туристических троп и трасс",
                        14400307e4: "Для размещения детских и спортивных лагерей",
                        14400308e4: "Для размещения скверов, парков, городских садов",
                        14400309e4: "Для размещения пляжей",
                        1440031e5: "Для размещения иных объектов (территорий) рекреационного назначения",
                        144004e6: "Для размещения объектов историко-культурного назначения",
                        14400401e4: "Для размещения объектов культурного наследия народов Российской Федерации (памятников истории и культуры), в том числе объектов археологического наследия",
                        14400402e4: "Для размещения военных и гражданских захоронений",
                        144005e6: "Для размещения иных особо охраняемых историко-культурных и природных объектов (территорий)",
                        145e9: "Для размещения объектов лесного фонда",
                        145001e6: "Для размещения лесной растительности",
                        145002e6: "Для восстановления лесной растительности",
                        145003e6: "Для прочих объектов лесного хозяйства",
                        146e9: "Для размещения объектов водного фонда",
                        146001e6: "Под водными объектами",
                        146002e6: "Для размещения гидротехнических сооружений",
                        146003e6: "Для размещения иных сооружений, расположенных на водных объектах",
                        147e9: "Земли запаса (неиспользуемые)",
                        "014001000000": "Земли жилой застройки",
                        "014001001000": "Земли под жилыми домами многоэтажной и повышенной этажности застройки",
                        "014001002000": "Земли под домами индивидуальной жилой застройкой",
                        "014001003000": "Незанятые земли, отведенные под жилую застройку",
                        "014002000000": "Земли общественно-деловой застройки",
                        "014002001000": "Земли гаражей и автостоянок",
                        "014002002000": "Земли под объектами торговли, общественного питания, бытового обслуживания, автозаправочными и газонаполнительными станциями, предприятиями автосервиса",
                        "014002003000": "Земли учреждений и организаций народного образования, земли под объектами здравоохранения и социального обеспечения физической культуры и спорта, культуры и искусства, религиозными объектами",
                        "014002004000": "Земли под административно-управлен-ческими и общественными объектами, земли предприятий, организаций, учреждений финансирования, кредитования, страхования и пенсионного обеспечения",
                        "014002005000": "Земли под зданиями (строениями) рекреации",
                        "014003000000": "Земли под объектами промышленности",
                        "014004000000": "Земли общего пользования (геонимы в поселениях)",
                        "014005000000": "Земли под объектами транспорта, связи, инженерных коммуникаций",
                        "014005001000": "Под объектами железнодорожного транспорта",
                        "014005002000": "Под объектами автомобильного транспорта",
                        "014005003000": "Под объектами морского, внутреннего водного транспорта",
                        "014005004000": "Под объектами воздушного транспорта",
                        "014005005000": "Под объектами иного транспорта, связи, инженерных коммуникаций",
                        "014006000000": "Земли сельскохозяйственного использования",
                        "014006001000": "Земли под крестьянскими (фермерскими) хозяйствами",
                        "014006002000": "Земли под предприятиями, занимающимися сельскохозяйственным производством",
                        "014006003000": "Земли под садоводческими объединениями и индивидуальными садоводами",
                        "014006004000": "Земли под огородническими объединениями и индивидуальными огородниками",
                        "014006005000": "Земли под дачными объединениями",
                        "014006006000": "Земли под личными подсобными хозяйствами",
                        "014006007000": "Земли под служебными наделами",
                        "014006008000": "Земли оленьих пастбищ",
                        "014006009000": "Для других сельскохозяйственных целей",
                        "014007000000": "Земли под лесами в поселениях (в том числе городскими лесами), под древесно-кустарниковой растительностью, не входящей в лесной фонд (в том числе лесопарками, парками, скверами, бульварами)",
                        "014008000000": "Земли, занятые водными объектами, земли водоохранных зон водных объектов, а также земли, выделяемые для установления полос отвода и зон охраны водозаборов, гидротехнических сооружений и иных водохозяйственных сооружений, объектов.",
                        "014009000000": "Земли под военными и иными режимными объектами",
                        "014010000000": "Земли под объектами иного специального назначения",
                        "014011000000": "Земли, не вовлеченные в градостроительную или иную деятельность (земли – резерв)",
                        "014012000000": "Неопределено",
                        "014013000000": "Значение отсутствует"
                    },
                    boundaryTypes: {
                        1: "Государственная граница РФ",
                        2: "Граница между субъектами РФ",
                        3: "Граница муниципального образования",
                        4: "Граница муниципального образования",
                        5: "Граница населенного пункта"
                    },
                    oksType: {
                        building: "Здание",
                        construction: "Сооружение",
                        incomplete: "Объект незавершенного строительства"
                    },
                    oksServiceKind: {
                        building: "002001002000",
                        flat: "002001003000",
                        construction: "002001004000",
                        "-1": "002001001000",
                        2: "002001005000"
                    },
                    oksPurpose: {
                        204001e6: "Нежилое здание",
                        204002e6: "Жилой дом",
                        204003e6: "Многоквартирный дом",
                        204004e6: "Жилое строение"
                    },
                    parcelOwnership: {
                        200: "Собственность публично-правовых образований",
                        100: "Частная собственность",
                        "": "-"
                    },
                    zoneCodes: {
                        21801e7: "Территориальные зоны",
                        21801001e4: "Жилая зона",
                        21801002e4: "Общественно-деловая зона",
                        21801003e4: "Производственная зона, зона инженерной и транспортной инфраструктур",
                        21801004e4: "Зона сельскохозяйственного использования",
                        21801005e4: "Зона рекреационного назначения",
                        21801006e4: "Зона особо охраняемых территорий",
                        21801007e4: "Зона специального назначения",
                        21801008e4: "Зона размещения военных объектов",
                        21801009e4: "Иная зона",
                        21802e7: "Зоны с особыми условиями использования территории",
                        21802001e4: "Зона охраны природных объектов",
                        218020010001: "Территория особо охраняемого природного объекта",
                        218020010002: "Охранная зона особо охраняемого природного объекта",
                        218020010003: "Водоохранная зона",
                        218020010004: "Прибрежная защитная полоса",
                        218020010005: "Зона санитарной охраны источников водоснабжения и водопроводов питьевого назначения",
                        218020010006: "Особо ценные земли",
                        21802002e4: "Зона охраны искусственных объектов",
                        218020020001: "Территория объекта культурного наследия",
                        218020020002: "Зона охраны объекта культурного наследия",
                        218020020003: "Охранная зона геодезического пункта",
                        218020020004: "Охранная зона стационарного пункта наблюдений за состоянием окружающей природной среды",
                        218020020005: "Охранная зона транспорта",
                        218020020006: "Охранная зона инженерных коммуникаций",
                        218020020007: "Охранная зона линий и сооружений связи и линий и сооружений радиофикации",
                        218020020008: "Придорожная полоса",
                        21802003e4: "Зоны защиты населения",
                        218020030001: "Запретная зона при военном складе",
                        218020030002: "Запретный район при военном складе",
                        218020030003: "Загрязненные земли",
                        218020030004: "Охранная зона загрязненных земель",
                        218020030005: "Санитарно-защитная зона предприятий, сооружений и иных объектов",
                        218020030006: "Санитарный разрыв (санитарная полоса отчуждения)",
                        218020030007: "Зона ограничения от передающего радиотехнического объекта",
                        218020030008: "Район падения отделяющихся частей ракет",
                        21802004e4: "Прочие зоны с особыми условиями использования территории",
                        218020040001: "Зона публичного сервитута",
                        218020040002: "Зона резервирования земель",
                        218020040003: "Горный отвод",
                        218020040004: "Пригородная зона",
                        218020040005: "Зеленая зона",
                        218020040006: "Особая экономическая зона",
                        218020040007: "Пограничная зона",
                        218020040008: "Территория традиционного природопользования",
                        21802005e4: "Иные зоны с особыми условиями использования территории",
                        218020050001: "Иная зона с особыми условиями использования территории"
                    },
                    oksWalls: {
                        "061001000000": "Стены",
                        "061001001000": "Каменные",
                        "061001001001": "Кирпичные",
                        "061001001002": "Кирпичные облегченные",
                        "061001001003": "Из природного камня",
                        "061001002000": "Деревянные",
                        "061001002001": "Рубленые",
                        "061001002002": "Каркасно-засыпные",
                        "061001002003": "Каркасно-обшивные",
                        "061001002004": "Сборно-щитовые",
                        "061001002005": "Дощатые",
                        "061001002006": "Деревянный каркас без обшивки",
                        "061001003000": "Смешанные",
                        "061001003001": "Каменные и деревянные",
                        "061001003002": "Каменные и бетонные",
                        "061001004000": "Легкие из местных материалов",
                        "061001005000": "Из прочих материалов",
                        "061001006000": "Бетонные",
                        "061001006001": "Монолитные",
                        "061001006002": "Из мелких бетонных блоков",
                        "061001006003": "Из легкобетонных панелей",
                        "061001007000": "Железобетонные",
                        "061001007001": "Крупнопанельные",
                        "061001007002": "Каркасно-панельные",
                        "061001007003": "Монолитные",
                        "061001007004": "Крупноблочные",
                        "061001007005": "Из унифицированных железобетонных элементов",
                        "061001007006": "Из железобетонных сегментов",
                        "061001008000": "Шлакобетонные",
                        "061001009000": "Металлические",
                        "061001999000": "Иное"
                    },
                    subjects: {
                        101: "Республика Адыгея (Адыгея)",
                        102: "Республика Башкортостан",
                        103: "Республика Бурятия",
                        104: "Республика Алтай",
                        105: "Республика Дагестан",
                        106: "Республика Ингушетия",
                        107: "Кабардино-Балкарская Республика",
                        108: "Республика Калмыкия",
                        109: "Карачаево-Черкесская Республика",
                        110: "Республика Карелия",
                        111: "Республика Коми",
                        112: "Республика Марий Эл",
                        113: "Республика Мордовия",
                        114: "Республика Саха (Якутия)",
                        115: "Республика Северная Осетия - Алания",
                        116: "Республика Татарстан (Татарстан)",
                        117: "Республика Тыва",
                        118: "Удмуртская Республика",
                        119: "Республика Хакасия",
                        120: "Чеченская Республика",
                        121: "Чувашская Республика - Чувашия",
                        122: "Алтайский край",
                        123: "Краснодарский край",
                        124: "Красноярский край",
                        125: "Приморский край",
                        126: "Ставропольский край",
                        127: "Хабаровский край",
                        128: "Амурская область",
                        129: "Архангельская область",
                        130: "Астраханская область",
                        131: "Белгородская область",
                        132: "Брянская область",
                        133: "Владимирская область",
                        134: "Волгоградская область",
                        135: "Вологодская область",
                        136: "Воронежская область",
                        137: "Ивановская область",
                        138: "Иркутская область",
                        139: "Калининградская область",
                        140: "Калужская область",
                        141: "Камчатский край",
                        142: "Кемеровская область",
                        143: "Кировская область",
                        144: "Костромская область",
                        145: "Курганская область",
                        146: "Курская область",
                        147: "Ленинградская область",
                        148: "Липецкая область",
                        149: "Магаданская область",
                        150: "Московская область",
                        151: "Мурманская область",
                        152: "Нижегородская область",
                        153: "Новгородская область",
                        154: "Новосибирская область",
                        155: "Омская область",
                        156: "Оренбургская область",
                        157: "Орловская область",
                        158: "Пензенская область",
                        159: "Пермский край",
                        160: "Псковская область",
                        161: "Ростовская область",
                        162: "Рязанская область",
                        163: "Самарская область",
                        164: "Саратовская область",
                        165: "Сахалинская область",
                        166: "Свердловская область",
                        167: "Смоленская область",
                        168: "Тамбовская область",
                        169: "Тверская область",
                        170: "Томская область",
                        171: "Тульская область",
                        172: "Тюменская область",
                        173: "Ульяновская область",
                        174: "Челябинская область",
                        175: "Забайкальский край",
                        176: "Ярославская область",
                        177: "г. Москва",
                        178: "г. Санкт-Петербург",
                        179: "Еврейская автономная область",
                        183: "Ненецкий автономный округ",
                        186: "Ханты-Мансийский автономный округ - Югра",
                        187: "Чукотский автономный округ",
                        189: "Ямало-Ненецкий автономный округ",
                        191: "Республика Крым",
                        192: "г. Севастополь"
                    },
                    negativeProcessTypes: {
                        1: "Водная эрозия/ слабая",
                        2: "Водная эрозия/ средняя",
                        3: "Водная эрозия/ сильная",
                        4: "Линейная эрозия",
                        5: "Ветровая эрозия/ слабая",
                        6: "Ветровая эрозия/ средняя",
                        7: "Ветровая эрозия/ сильная",
                        8: "Опустынивание/ слабая",
                        9: "Опустынивание/ средняя",
                        10: "Опустынивание/ сильная",
                        11: "Переувлажнение/ слабое",
                        12: "Переувлажнение/ среднее",
                        13: "Переувлажнение/ сильное",
                        14: "Подтопление/ слабое",
                        15: "Подтопление/ среднее",
                        16: "Подтопление/ сильное",
                        17: "Заболачивание/ слабое",
                        18: "Заболачивание/ среднее",
                        19: "Заболачивание/ сильное",
                        20: "Затопление/ слабое",
                        21: "Затопление/ среднее",
                        22: "Затопление/ сильное",
                        23: "Захламление/ слабое",
                        24: "Захламление/ среднее",
                        25: "Захламление/ сильное",
                        26: "Захламление/ без разделения",
                        27: "Радиоактивное загрязнение/ слабое",
                        28: "Радиоактивное загрязнение/ среднее",
                        29: "Радиоактивное загрязнение/ сильное",
                        30: "Загрязнение нефтью и нефтепродуктами/ слабое",
                        31: "Загрязнение нефтью и нефтепродуктами/ среднее",
                        32: "Загрязнение нефтью и нефтепродуктами/ сильное",
                        33: "Загрязнение тяжелыми металлами/ слабое",
                        34: "Загрязнение тяжелыми металлами/ среднее",
                        35: "Загрязнение тяжелыми металлами/ сильное",
                        36: "Обвально-осыпные и оползневые процессы/ слабые",
                        37: "Обвально-осыпные и оползневые процессы/ средние",
                        38: "Обвально-осыпные и оползневые процессы/ сильные",
                        39: "Абразия/ слабая",
                        40: "Абразия/ средняя",
                        41: "Абразия/ сильная",
                        42: "Нарушенные земли",
                        43: "Нарушенные земли при наземном строительстве",
                        44: "Нарушенные земли при гидротехническом строительстве",
                        45: "Нарушенные земли при недропользовании",
                        46: "Нарушенные земли при промышленном лесопользовании",
                        47: "Нарушенные земли при сельскохозяйственном освоении",
                        48: "Нарушенные земли при проведении геологоразведочных, испытательных, эксплуатационных и иных работ",
                        49: "Нарушенные земли при складировании и захоронении промышленных отходов, загрязнение земель",
                        50: "Гари",
                        51: "Негативный процесс отсутствует"
                    },
                    building_data_types: {
                        1: "Не отображены границы на ПКК",
                        2: "Отображены границы на ПКК",
                        3: ""
                    },
                    tourism_data_types: {
                        1: "Нет",
                        2: "Да",
                        3: "-"
                    },
                    oti_data_types: {
                        1: "Нет",
                        2: "Да",
                        3: "-"
                    }
                };                
data3 = [{
                        dataType: 1,
                        title: "",
                        links: [{
                            name: "Подать обращение",
                            title: "Подать обращение",
                            idField: "id",
                            type: "appeal",
                            tabs: ["building", "tourism", "oti"]
                        }, {
                            name: "План ЗУ",
                            title: "План земельного участка",
                            idField: "id",
                            tabs: ["info", "sale", "rifr", "services"]
                        }, {
                            name: "План КК",
                            title: "План кадастрового квартала",
                            idField: "id",
                            kvartalIdField: "kvartal",
                            kvartalCnField: "kvartal_cn",
                            tabs: ["info", "sale", "rifr", "services"]
                        }],
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }, {
                            title: "Аукцион",
                            alias: "sale"
                        }, {
                            title: "Уполномоченный орган",
                            alias: "rifr"
                        }, {
                            title: "Строительство",
                            alias: "building"
                        }, {
                            title: "Туризм",
                            alias: "tourism"
                        }, {
                            title: "ОТИ",
                            alias: "oti"
                        }, {
                            title: "Услуги",
                            alias: "services"
                        }],
                        services: [{
                            name: "Справочная информация по объектам недвижимости в режиме online",
                            getUrl: function() {
                                return "https://lk.rosreestr.ru/eservices/real-estate-objects-online"
                            },
                            field: "cn"
                        }, {
                            name: "Предоставление сведений ЕГРН",
                            getUrl: function() {
                                return "https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                            },
                            field: "cn"
                        }],
                        sale: [{
                            alias: "Организатор аукциона",
                            field: "sale_cnt",
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Решение о проведении аукциона",
                            field: "",
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "тип",
                            style: null,
                            visible: !0,
                            field: "sale_doc_type",
                            value: ""
                        }, {
                            alias: "номер",
                            style: null,
                            visible: !0,
                            field: "sale_doc_num",
                            value: ""
                        }, {
                            alias: "дата",
                            style: null,
                            visible: !0,
                            field: "sale_doc_date",
                            format: "date",
                            value: ""
                        }, {
                            alias: "Начальная цена",
                            style: null,
                            visible: !0,
                            field: "sale_price",
                            value: "",
                            format: "number",
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Дата проведения аукциона",
                            field: "sale_date",
                            style: null,
                            visible: !0,
                            format: "date",
                            value: ""
                        }, {
                            alias: "Уполномоченный орган",
                            field: "sale_dep",
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Контакты уполномоченного органа",
                            field: "sale_dep_uo",
                            style: null,
                            visible: !0,
                            value: ""
                        }],
                        rifr: [{
                            alias: "Орган гос. власти или  местного самоуправления",
                            field: "rifr_dep_info",
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Уполномоченный орган",
                            field: "rifr_dep",
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Контакты уполномоченного органа",
                            field: "rifr_cnt",
                            style: null,
                            visible: !0,
                            value: ""
                        }],
                        fields_parcel_oti: [{
                            alias: "Наименование объекта туристского интереса",
                            prop: "name",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Идентификационный номер ОТИ",
                            prop: "id",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: "",
                            searchProp: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 1,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 2,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 3,
                                    value: "Земельный участок для туристской деятельности"
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес объекта туристского интереса",
                            prop: "address",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Тип объекта туристского интереса",
                            prop: "type",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид особо охраняемой природной территории",
                            prop: "vid_oopt",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Наличие у объекта туристского интереса статуса ЮНЕСКО",
                            prop: "unesko",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид объекта культурного-исторического наследия",
                            prop: "vid_okn",
                            parentProp: "attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Статус объекта туристского интереса",
                            prop: "status",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Потенциальный интерес к объекту",
                            prop: "potential",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Среднее количество туристов, посетивших ОТИ за два предыдущих года",
                            prop: "tourist",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "paid_services",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Средний объем платных услуг, оказанных ОТИ за два предыдущих года",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Ссылка на портал, содержащий информацию об объекте туристского интереса ",
                            prop: "url",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }],
                        fields_parcel_tour: [{
                            alias: "Тип",
                            prop: "data_type_text",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 1,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 2,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 3,
                                    value: "Земельный участок для туристской деятельности"
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Субъект РФ",
                            prop: "reg_name",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Муниципальное образование",
                            prop: "mun",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Населенный пункт",
                            prop: "np",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Адрес",
                            prop: "address",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Площадь, кв.м.",
                            prop: "area",
                            parentProp: "attrs.parcel_tour_attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Форма собственности",
                            prop: "right",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Границы земельного участка установлены в соответствии с требованиями законодательства",
                            prop: "data_type",
                            dictionary: "tourism_data_types",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Категория земель",
                            prop: "category_text",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид разрешенного использования (ВРИ)",
                            prop: "",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "по документу",
                            prop: "util_by_doc",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            alias: "по сведениям от уполномоченного органа",
                            prop: "util_by_uo",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            visible: !0,
                            hideWhenEmpty: !0,
                            dictionary: !1
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs.parcel_tour_attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            prop: "terzone_name_by_pzz",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "idoti",
                            prop: "id_oti",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: ""
                        }, {
                            alias: "Наименование ближайшего объекта туристского интереса",
                            prop: "poi",
                            searchProp: "id_oti",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 28
                            },
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            searchValue: ""
                        }, {
                            alias: "Кадастровый или реестровый номер объекта туристского интереса",
                            prop: "poi_cn",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: ""
                        }, {
                            alias: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            prop: "tour_object_description",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !0,
                            action: {
                                click: "openHref"
                            },
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инженерные сети",
                            prop: "",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Электроснабжение",
                            prop: "power_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Водоснабжение",
                            prop: "water_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Газоснабжение",
                            prop: "gas_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Канализация",
                            prop: "sewerage",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Теплоснабжение",
                            prop: "heat_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Расстояние до",
                            prop: "",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "ближайшего объекта туристского интереса (км)",
                            prop: "distance_to_near_tour_object",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей федеральной трассы (км)",
                            prop: "distance_to_near_fed_road",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей дороги с твердым покрытием (км)",
                            prop: "distance_to_near_hard_road",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего центра муниципального района или городского округа (км)",
                            prop: "distance_to_near_district",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего населенного пункта (км)",
                            prop: "distance_to_near_locality",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего объекта общественного питания (км)",
                            prop: "distance_to_near_public_catering",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего объекта здравоохранения (км)",
                            prop: "distance_to_near_health_care",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей остановки общественного транспорта (км)",
                            prop: "distance_to_near_public_transport",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "расстояние до ближайшей железнодорожной станции (км)",
                            prop: "distance_to_near_railway_station",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего аэропорта (км)",
                            prop: "distance_to_near_airport",
                            format: "number",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Контакты уполномоченного органа",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: "bold-title",
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "uo_name",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "uo_address",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Телефон",
                            prop: "uo_phone",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "uo_url",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !0,
                            action: {
                                click: "openHref"
                            },
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Электронная почта для связи",
                            prop: "uo_email",
                            parentProp: "attrs.parcel_tour_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "additional_info",
                            parentProp: "attrs.parcel_tour_attrs",
                            alias: "Инвестиционный портал",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            isLink: !0,
                            action: {
                                click: "openHref"
                            }
                        }],
                        fields_parcel_build: [{
                            alias: "Тип",
                            prop: "",
                            parentProp: "attrs.parcel_build_attrs",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            },
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: "Объект недвижимости"
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Субъект РФ",
                            prop: "reg_name",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Муниципальное образование",
                            prop: "mun",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Населенный пункт",
                            prop: "np",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Площадь, кв.м.",
                            prop: "area",
                            parentProp: "attrs.parcel_build_attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наличие границ",
                            prop: "data_type",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: "building_data_types",
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Категория земель",
                            prop: "category_text",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Форма собственности",
                            prop: "right",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид разрешенного использования",
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: "utilDescription",
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Потенциал использования",
                            prop: "potential",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            required: !0
                        }, {
                            alias: "Объекты капитального строительства",
                            prop: "has_oks",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инженерные сети",
                            prop: "has_network",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Входит в территорию, в отношении которой возможно (планируется) комплексное развитие территории жилой застройки",
                            prop: "develop_build",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Предназначена для предоставления льготным категориям граждан",
                            prop: "privileges_peo",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Льготная категория",
                            prop: "privileges",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Агентом Российской Федерации в отношении земельного участка выступает АО «ДОМ. РФ»",
                            prop: "dom_rf",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Уполномоченный орган",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "uo_name",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "uo_address",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Телефон",
                            prop: "uo_phone",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "uo_url",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !0,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            action: {
                                click: "openHref"
                            },
                            value: ""
                        }, {
                            alias: "Электронная почта для связи",
                            prop: "uo_email",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инвестиционный портал региона ",
                            prop: "inves_portal",
                            parentProp: "attrs.parcel_build_attrs",
                            isLink: !0,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            action: {
                                click: "openHref"
                            },
                            value: ""
                        }],
                        detailInfoProp: "id",
                        fields_parcel: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Объект недвижимости",
                            hideWhenEmpty: !1
                        }, {
                            alias: "Вид",
                            visible: !0,
                            value: "Земельный участок",
                            identifyField: {
                                isTitle: !0,
                                name: "title",
                                required: !0
                            },
                            hideWhenEmpty: !1
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "parent_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер ЕЗП",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 1
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            isRequire: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "subtitle",
                                required: !0
                            }
                        }, {
                            prop: "area_value",
                            parentProp: "attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "category_type",
                            parentProp: "attrs",
                            alias: "Категория земель",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "category_types"
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            prop: "fp",
                            parentProp: "attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }],
                        fields_parcel_mzu: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Объект недвижимости",
                            hideWhenEmpty: !1
                        }, {
                            alias: "Вид",
                            visible: !0,
                            value: "Многоконтурный земельный участок",
                            hideWhenEmpty: !1
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "category_type",
                            parentProp: "attrs",
                            alias: "Категория земель",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "category_types"
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            prop: "fp",
                            parentProp: "attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            alias: "Состав",
                            value: "Контуры МКЗУ",
                            isLink: !0,
                            total: null,
                            action: {
                                click: "search",
                                isComposeZu: !0,
                                type: 1,
                                prefix: "/*"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            dictionary: !1
                        }],
                        fields_parcel_mzu_contour: [{
                            prop: "parcel_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер земельного участка",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 1
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "contour_num",
                            parentProp: "attrs",
                            alias: "Номер контура",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs",
                            alias: "",
                            aliasProp: "area_code",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }],
                        fields_parcel_ez: [{
                            alias: "Тип",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Объект недвижимости"
                        }, {
                            alias: "Вид",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Единое землепользование"
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "category_type",
                            parentProp: "attrs",
                            alias: "Категория земель",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "category_types"
                        }, {
                            prop: "util_code",
                            parentProp: "attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "utilDescription"
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            alias: "по документу",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "fp",
                            parentProp: "attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            alias: "Состав",
                            value: "Земельные участки ЕЗП",
                            isLink: !0,
                            total: null,
                            action: {
                                click: "search",
                                isComposeZu: !0,
                                type: 1,
                                prefix: "/*"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 2,
                        title: "",
                        links: [{
                            name: "План КК",
                            title: "План кадастрового квартала",
                            kvartalIdField: "id",
                            kvartalCnField: "cn",
                            tabs: ["info", "kkr"]
                        }],
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }, {
                            title: "Комплексные кадастровые работы",
                            alias: "kkr"
                        }],
                        services: [],
                        kkr: [{
                            style: null,
                            visible: !0,
                            isMainLink: !0,
                            name: "Извещение о начале выполнения ККР",
                            url: "https://rosreestr.ru/site/activity/kompleksnye-kadastrovye-raboty/izveshcheniya-o-nachale-vypolneniya-kompleksnykh-kadastrovykh-rabot-na-territorii-subektov-rossiysko/"
                        }, {
                            alias: "Контракт",
                            visible: !0,
                            styleInline: {
                                "padding-top": 0
                            },
                            isTitle: !0
                        }, {
                            alias: "Дата контракта",
                            style: null,
                            visible: !0,
                            field: "contract_date",
                            format: "date",
                            value: ""
                        }, {
                            alias: "Номер контракта",
                            style: null,
                            visible: !0,
                            field: "contract_num",
                            value: ""
                        }, {
                            alias: "Дата начала",
                            style: null,
                            visible: !0,
                            field: "date_begin",
                            format: "date",
                            value: ""
                        }, {
                            alias: "Дата окончания",
                            style: null,
                            visible: !0,
                            field: "date_end",
                            format: "date",
                            value: ""
                        }, {
                            alias: "Заказчик",
                            visible: !0,
                            isTitle: !0
                        }, {
                            alias: "Заказчик ККР",
                            style: null,
                            visible: !0,
                            field: "customer_name",
                            value: ""
                        }, {
                            alias: "Адрес заказчика",
                            style: null,
                            visible: !0,
                            field: "customer_address",
                            value: ""
                        }, {
                            alias: "Электронная почта заказчика",
                            style: null,
                            visible: !0,
                            field: "customer_email",
                            value: ""
                        }, {
                            alias: "Телефон заказчика",
                            style: null,
                            visible: !0,
                            format: "tel",
                            field: "customer_phone",
                            value: ""
                        }, {
                            alias: "Исполнитель",
                            visible: !0,
                            isTitle: !0
                        }, {
                            alias: "Исполнитель ККР",
                            style: null,
                            visible: !0,
                            field: "contractor",
                            value: ""
                        }, {
                            alias: "ФИО кадастрового инженера",
                            style: null,
                            visible: !0,
                            field: "cad_eng_name",
                            value: ""
                        }, {
                            alias: "Адрес кадастрового инженера",
                            style: null,
                            visible: !0,
                            field: "cad_eng_address",
                            value: ""
                        }, {
                            alias: "Электронная почта кадастрового инженера",
                            style: null,
                            visible: !0,
                            field: "cad_eng_email",
                            value: ""
                        }, {
                            alias: "Телефон кадастрового инженера",
                            style: null,
                            visible: !0,
                            format: "tel",
                            field: "cad_eng_phone",
                            value: ""
                        }, {
                            alias: "Номер аттестата",
                            style: null,
                            visible: !0,
                            field: "cad_eng_doc_num",
                            value: ""
                        }, {
                            alias: "Дата выдачи аттестата",
                            style: null,
                            visible: !0,
                            field: "cad_eng_doc_date",
                            value: ""
                        }, {
                            alias: "Наименование саморегулируемой организации, членом которой является кадастровый инженер",
                            style: null,
                            visible: !0,
                            field: "cad_eng_organ",
                            value: ""
                        }, {
                            alias: "",
                            visible: !0,
                            isTitle: !0
                        }, {
                            alias: "Адрес для предоставления документов о ранее учтённых ЗУ",
                            style: null,
                            visible: !0,
                            field: "address",
                            value: ""
                        }, {
                            alias: "Статус выполнения",
                            style: null,
                            visible: !0,
                            field: "status",
                            value: ""
                        }],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Кадастровый квартал"
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "rayon_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый район",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 3
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Включает в себя",
                            visible: !0,
                            value: " "
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "участков",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "ОКС",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 3,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Кадастровый район"
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "okrug_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый округ",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 4
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Включает в себя",
                            visible: !0,
                            value: " "
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "kvartal",
                            alias: "кварталов",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "kvartal",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "участков",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "ОКС",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 4,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Кадастровый округ"
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Включает в себя",
                            visible: !0,
                            value: " "
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "rayon",
                            alias: "районов",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "rayon",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "kvartal",
                            alias: "кварталов",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "kvartal",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "участков",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "parcel",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "total",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "ОКС",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }, {
                            prop: "geo",
                            parentProp: "stat",
                            childProp: "oks",
                            alias: "с границами",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            format: "number",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 5,
                        title: "",
                        links: [{
                            name: "План ОКС",
                            title: "План объекта капитального строительства",
                            idField: "id",
                            tabs: ["info", "services"]
                        }, {
                            name: "План КК",
                            title: "План кадастрового квартала",
                            idField: "id",
                            kvartalIdField: "kvartal",
                            kvartalCnField: "kvartal_cn",
                            tabs: ["info", "services"]
                        }],
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }, {
                            title: "Услуги",
                            alias: "services"
                        }],
                        services: [{
                            name: "Справочная информация по объектам недвижимости в режиме online",
                            getUrl: function() {
                                return "https://lk.rosreestr.ru/eservices/real-estate-objects-online"
                            },
                            field: "cn"
                        }, {
                            name: "Предоставление сведений ЕГРН",
                            getUrl: function() {
                                return "https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                            },
                            field: "cn"
                        }],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Объект недвижимости"
                        }, {
                            prop: "oks_type",
                            parentProp: "attrs",
                            alias: "Вид",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: null,
                            dictionary: "oksType",
                            identifyField: {
                                isTitle: !0,
                                name: "title",
                                required: !0
                            }
                        }, {
                            prop: "cn",
                            parentProp: "attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "subtitle",
                                required: !0
                            }
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "purpose",
                            parentProp: "attrs",
                            alias: "Назначение",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: ["building", "construction"],
                            style: null,
                            value: null,
                            dictionary: "oksPurpose",
                            identifyField: {
                                isTitle: !0,
                                name: "info",
                                required: !0
                            }
                        }, {
                            prop: "purpose",
                            parentProp: "attrs",
                            alias: "Проектируемое назначение",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: "oksPurpose"
                        }, {
                            prop: "area_value",
                            parentProp: "attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "util_code",
                            parentProp: "attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            displayCondition: "oks_type",
                            displayConditionValue: ["building", "construction"],
                            dictionary: "utilDescription",
                            identifyField: {
                                isTitle: !0,
                                name: "info",
                                required: !0
                            }
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            alias: "по документу",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            displayCondition: "oks_type",
                            displayConditionValue: ["building", "construction"],
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            prop: "fp",
                            parentProp: "attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            parentProp: "attrs",
                            alias: "Основные характеристики",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: " ",
                            dictionary: !1
                        }, {
                            prop: "floors",
                            parentProp: "attrs",
                            alias: "количество этажей (в том числе подземных)",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "underground_floors",
                            parentProp: "attrs",
                            alias: "количество подземных этажей",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "elements_constuct",
                            parentProp: "attrs",
                            mapProp: "wall",
                            alias: "материал стен",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: "oksWalls"
                        }, {
                            prop: "area_dev",
                            parentProp: "attrs",
                            alias: "площадь застройки",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: !1,
                            dimension: "area_dev_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "year_built",
                            parentProp: "attrs",
                            alias: "завершение строительства",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "year_used",
                            parentProp: "attrs",
                            alias: "ввод в эксплуатацию",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "building",
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            parentProp: "attrs",
                            alias: "Основные характеристики",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: " ",
                            dictionary: !1
                        }, {
                            prop: "height",
                            parentProp: "attrs",
                            alias: "высота",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "depth",
                            parentProp: "attrs",
                            alias: "глубина",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "spread",
                            parentProp: "attrs",
                            alias: "протяжённость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "volume",
                            parentProp: "attrs",
                            alias: "объем",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "куб.м"
                        }, {
                            prop: "area_dev",
                            parentProp: "attrs",
                            alias: "площадь застройки",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "construction",
                            style: null,
                            value: null,
                            dictionary: !1,
                            dimension: "area_dev_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            parentProp: "attrs",
                            alias: "Проектные характеристики",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: " ",
                            dictionary: !1
                        }, {
                            prop: "height",
                            parentProp: "attrs",
                            alias: "высота",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "depth",
                            parentProp: "attrs",
                            alias: "глубина",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "spread",
                            parentProp: "attrs",
                            alias: "протяжённость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "м."
                        }, {
                            prop: "volume",
                            parentProp: "attrs",
                            alias: "объем",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: !1,
                            constDimension: "куб.м"
                        }, {
                            prop: "area_dev",
                            parentProp: "attrs",
                            alias: "площадь застройки",
                            visible: !0,
                            hideWhenEmpty: !1,
                            displayCondition: "oks_type",
                            displayConditionValue: "incomplete",
                            style: null,
                            value: null,
                            dictionary: !1,
                            dimension: "area_dev_unit",
                            dictionaryDimension: "cadastreUnits"
                        }]
                    }, {
                        dataType: 6,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Территориальная зона",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title"
                            }
                        }, {
                            prop: "cdzone",
                            parentProp: "attrs",
                            alias: "Вид",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: "zoneCodes",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            }
                        }, {
                            prop: "number_zone",
                            parentProp: "attrs",
                            alias: "Реестровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "rayon_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый район",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            alias: "Наименование",
                            visible: !1,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "subtitle"
                            }
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            parentProp: "attrs",
                            template: jd,
                            alias: "Документы основания",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 7,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Граница"
                        }, {
                            prop: "type",
                            parentProp: "attrs",
                            alias: "Вид",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: "boundaryTypes",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title"
                            }
                        }, {
                            prop: "number_zone",
                            parentProp: "attrs",
                            alias: "Реестровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "reestr_number_id",
                            parentProp: "attrs",
                            alias: "Идентификационный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            hideWhenEmpty: !0
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "description",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            parentProp: "attrs",
                            template: jd,
                            alias: "Документы основания",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 9,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            prop: "type",
                            parentProp: "attrs",
                            alias: "Тип",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "num",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "num",
                            parentProp: "attrs",
                            alias: "Тип знака",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 10,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Зона с особыми условиями использования территории",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title",
                                value: "ЗОУИТ"
                            }
                        }, {
                            prop: "cdzone",
                            prop1: "subtype",
                            parentProp: "attrs",
                            alias: "Вид",
                            visible: !0,
                            mergeProps: !0,
                            style: null,
                            value: null,
                            dictionary: "zoneCodes",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            }
                        }, {
                            prop: "number_zone",
                            parentProp: "attrs",
                            alias: "Реестровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "rayon_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый район",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наиме нование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "subtitle"
                            }
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null
                        }, {
                            prop: "json_documents",
                            parentProp: "attrs",
                            template: jd,
                            alias: "Документы основания",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null
                        }]
                    }, {
                        dataType: 12,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Лесничество"
                        }, {
                            prop: "id",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 13,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Красная линия"
                        }, {
                            alias: "Решение об утверждении документации по планировке территории",
                            visible: !0,
                            value: " "
                        }, {
                            prop: "dt",
                            parentProp: "attrs",
                            alias: "Вид документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "dg",
                            parentProp: "attrs",
                            alias: "Наименование уполномоченного органа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "dd",
                            parentProp: "attrs",
                            alias: "Дата документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "dn",
                            parentProp: "attrs",
                            alias: "Номер документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "ln",
                            parentProp: "attrs",
                            alias: "Номер",
                            visible: !0,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 15,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Схема расположения ЗУ",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title"
                            }
                        }, {
                            prop: "anno_text",
                            parentProp: "attrs",
                            alias: "Условный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area",
                            parentProp: "attrs",
                            alias: "Площадь проектная",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs",
                            alias: "Адрес",
                            visible: !0,
                            displayCondition: "address",
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "subtitle"
                            }
                        }, {
                            prop: "address_info",
                            parentProp: "attrs",
                            alias: "Описание местоположения",
                            visible: !0,
                            displayCondition: "address_info",
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Документ об утверждении схемы",
                            visible: !0,
                            value: " "
                        }, {
                            prop: "dt",
                            parentProp: "attrs",
                            alias: "Вид документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "dg",
                            parentProp: "attrs",
                            alias: "уполномоченный орган",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "dd",
                            parentProp: "attrs",
                            alias: "дата документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "dn",
                            parentProp: "attrs",
                            alias: "номер документа",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Территориальная зона",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "cc",
                            parentProp: "attrs",
                            alias: "категория земель",
                            visible: !0,
                            style: "level-padding-1",
                            value: null,
                            dictionary: "category_types"
                        }, {
                            prop: "un",
                            parentProp: "attrs",
                            alias: "вид разрешенного использования",
                            visible: !1,
                            style: "level-padding-1",
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 16,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Особая экономическая зона"
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_index",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "authority",
                            parentProp: "attrs",
                            alias: "Орган власти",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            template: jd,
                            parentProp: "attrs",
                            alias: "Основание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 18,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "ГМР"
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_index",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "authority",
                            parentProp: "attrs",
                            alias: "Орган власти",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            template: jd,
                            parentProp: "attrs",
                            alias: "Основание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "adate",
                            parentProp: "attrs",
                            alias: "Дата воспроизведения на ПКК",
                            visible: !0,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 20,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Зона или территория",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "type"
                            }
                        }, {
                            prop: "zone_kind",
                            parentProp: "attrs",
                            alias: "Вид",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: "zoneCodes",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title"
                            }
                        }, {
                            prop: "number_zone",
                            parentProp: "attrs",
                            alias: "Реестровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Учетный номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "rayon_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый район",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            }
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null
                        }, {
                            prop: "content_restrctions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            parentProp: "attrs",
                            template: jd,
                            alias: "Документы основания",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 21,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Земельные участки, подлежащие образованию в соответствии с утвержденным проектом межевания территории"
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_index",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "authority",
                            parentProp: "attrs",
                            alias: "Орган власти",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "uc",
                            parentProp: "attrs",
                            alias: "Вид разрешенного использования",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "adate",
                            parentProp: "attrs",
                            alias: "Дата воспроизведения на ПКК",
                            visible: !0,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 22,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Государственный мониторинг земель - Нарушения"
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_index",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "authority",
                            parentProp: "attrs",
                            alias: "Орган власти",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "json_documents",
                            template: jd,
                            parentProp: "attrs",
                            alias: "Основание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            hideWhenEmpty: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "adate",
                            parentProp: "attrs",
                            alias: "Дата воспроизведения на ПКК",
                            visible: !0,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 23,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Государственный мониторинг земель - Негативные воздействия",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "title"
                            }
                        }, {
                            prop: "id",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "reg",
                            parentProp: "attrs",
                            alias: "Кадастровый округ",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            slice: 1
                        }, {
                            prop: "district",
                            parentProp: "attrs",
                            alias: "Район",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "index_map",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "process_type",
                            parentProp: "attrs",
                            alias: "Вид и степень развития негативного процесса",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: "negativeProcessTypes",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "subtitle"
                            }
                        }, {
                            prop: "square_ha",
                            parentProp: "attrs",
                            alias: "Площадь проявления негативного процесса, га",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "square__",
                            parentProp: "attrs",
                            alias: "Площадь проявления негативного процесса,% к площади работ",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_proyavl",
                            parentProp: "attrs",
                            alias: "Зона проявления",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            }
                        }, {
                            prop: "soil_type",
                            parentProp: "attrs",
                            alias: "Тип почвы",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "recommend",
                            parentProp: "attrs",
                            alias: "Рекомендации по использованию земель",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 24,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            visible: !0,
                            value: "Объект недвижимости"
                        }, {
                            alias: "Вид",
                            visible: !0,
                            value: "Единые недвижимые комплексы",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: "Единый недвижимый комплекс",
                                name: "title"
                            }
                        }, {
                            prop: "acnum",
                            parentProp: "attrs",
                            alias: "Номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "zone_index",
                            parentProp: "attrs",
                            alias: "Индекс",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "name_zone",
                            parentProp: "attrs",
                            alias: "Наименование",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "authority",
                            parentProp: "attrs",
                            alias: "Орган власти",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "desc",
                            parentProp: "attrs",
                            alias: "Описание",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "content_restrictions",
                            parentProp: "attrs",
                            alias: "Ограничение",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "adate",
                            parentProp: "attrs",
                            alias: "Дата воспроизведения на ПКК",
                            visible: !0,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }]
                    }, {
                        dataType: 25,
                        title: "",
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }, {
                            title: "Строительство",
                            alias: "building"
                        }, {
                            title: "Услуги",
                            alias: "services"
                        }],
                        links: [{
                            name: "Подать обращение",
                            title: "Подать обращение",
                            idField: "id",
                            type: "appeal",
                            tabs: ["info", "building", "services"]
                        }],
                        services: [{
                            name: "Справочная информация по объектам недвижимости в режиме online",
                            getUrl: function() {
                                return "https://lk.rosreestr.ru/eservices/real-estate-objects-online"
                            },
                            field: "cn"
                        }, {
                            name: "Предоставление сведений ЕГРН",
                            getUrl: function() {
                                return "https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                            },
                            field: "cn"
                        }],
                        detailInfoProp: "id",
                        fields: [{
                            alias: "Тип",
                            prop: "",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "Территория для жилищного строительства"
                        }, {
                            alias: "Условный номер",
                            prop: "conditionalNumber",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Учетный номер кадастрового квартала",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 1,
                                    value: "Участок ЖС"
                                }, {
                                    id: 2,
                                    value: "Участок ЖС"
                                }, {
                                    id: 3,
                                    value: "Территория ЖС"
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Субъект РФ",
                            prop: "reg_name",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Муниципальное образование",
                            prop: "mun",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Населенный пункт",
                            prop: "np",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Адрес",
                            prop: "address",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "subtitle"
                            }
                        }, {
                            alias: "Площадь, кв.м.",
                            prop: "area",
                            parentProp: "attrs",
                            format: "number",
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Категория земель",
                            prop: "category_text",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Форма собственности",
                            prop: "right",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 0,
                                    value: "Федеральная собственность"
                                }, {
                                    id: 1,
                                    value: "Собственность субъекта Российской Федерации"
                                }, {
                                    id: 2,
                                    value: "Муниципальная собственность"
                                }, {
                                    id: 3,
                                    value: "Государственная неразграниченная собственность"
                                }, {
                                    id: 4,
                                    value: "Частная собственность "
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            required: !0
                        }, {
                            alias: "Вид разрешенного использования",
                            prop: "util_by_uo",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            }
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            alias: "по документу",
                            visible: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            alias: "Потенциал использования",
                            prop: "potential",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 0,
                                    value: "Строительство индивидуального жилого дома"
                                }, {
                                    id: 1,
                                    value: "Строительство многоквартирного дома"
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            required: !0
                        }, {
                            alias: "Объекты капитального строительства",
                            prop: "has_oks",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инженерные сети",
                            prop: "has_network",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Уполномоченный орган",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "uo_name",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "uo_address",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Телефон",
                            prop: "uo_phone",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "uo_url",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "e-mail для направления обращения",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !1,
                            value: ""
                        }],
                        fields_parcel: [{
                            alias: "Тип",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Объект недвижимости"
                        }, {
                            alias: "Вид",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Земельный участок",
                            identifyField: {
                                isTitle: !0,
                                name: "title",
                                required: !0
                            }
                        }, {
                            prop: "cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs.parcel_attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Cубъект РФ",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "parent_cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый номер ЕЗП",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 1
                            },
                            visible: !1,
                            hideWhenEmpty: !1,
                            isRequire: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Муниципальное образование",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Населенный пункт",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Площадь, кв.м.",
                            format: "number",
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "data_type",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Наличие границ",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "building_data_types"
                        }, {
                            prop: "category_type",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Категория земель",
                            isLink: !1,
                            style: null,
                            dictionary: "category_types",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            prop: "util_code",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "utilDescription",
                            identifyField: {
                                isTitle: !0,
                                name: "info",
                                required: !0
                            }
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs.parcel_attrs",
                            alias: "по документу",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            prop: "fp",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Вид разрешенного использования",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Вид разрешенного использования от уполномоченного органа",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Потенциал использования",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            porp: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Объекты капитального строительства",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Инженерные сети",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Уполномоченный орган",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Телефон",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "e-mail для направления обращения",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }],
                        fields_parcel_build: [{
                            alias: "Тип",
                            prop: "data_type_text",
                            parentProp: "attrs",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                name: "info"
                            },
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Субъект РФ",
                            prop: "reg_name",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Муниципальное образование",
                            prop: "mun",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Населенный пункт",
                            prop: "np",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Площадь, кв.м.",
                            prop: "area",
                            parentProp: "attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наличие границ",
                            prop: "data_type",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: "building_data_types",
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Категория земель",
                            prop: "category_text",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Форма собственности",
                            prop: "right",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид разрешенного использования",
                            prop: "util_by_doc",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: "utilDescription",
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Потенциал использования",
                            prop: "potential",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            required: !0
                        }, {
                            alias: "Объекты капитального строительства",
                            prop: "has_oks",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инженерные сети",
                            prop: "has_network",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Входит в территорию, в отношении которой возможно (планируется) комплексное развитие территории жилой застройки",
                            prop: "develop_build",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Предназначена для предоставления льготным категориям граждан",
                            prop: "privileges_peo",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Льготная категория",
                            prop: "privileges",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Агентом Российской Федерации в отношении земельного участка выступает АО «ДОМ. РФ»",
                            prop: "dom_rf",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Уполномоченный орган",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "uo_name",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "uo_address",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Телефон",
                            prop: "uo_phone",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "uo_url",
                            parentProp: "attrs",
                            isLink: !0,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            action: {
                                click: "openHref"
                            },
                            value: ""
                        }, {
                            alias: "Электронная почта для связи",
                            prop: "uo_email",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инвестиционный портал региона",
                            prop: "inves_portal",
                            parentProp: "attrs",
                            isLink: !0,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            action: {
                                click: "openHref"
                            },
                            value: ""
                        }]
                    }, {
                        dataType: 26,
                        title: "",
                        links: [],
                        services: [],
                        detailInfoProp: "id",
                        fields: [{
                            prop: "",
                            parentProp: "attrs",
                            alias: "Тип",
                            visible: !0,
                            style: null,
                            value: "Территория проведения мероприятий по ликвидации накопленного вреда окружающей среде",
                            dictionary: !1
                        }, {
                            prop: "name",
                            parentProp: "attrs",
                            alias: "Наименование объекта",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: "Усолье-сибирское",
                                name: "title"
                            }
                        }, {
                            prop: "type_part",
                            parentProp: "attrs",
                            alias: "Тип части",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "building",
                            parentProp: "attrs",
                            alias: "Наличие ОКС",
                            visible: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }]
                    }, {
                        dataType: 27,
                        title: "",
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }, {
                            title: "Туризм",
                            alias: "tourism"
                        }, {
                            title: "Услуги",
                            alias: "services"
                        }],
                        links: [{
                            name: "Подать обращение",
                            title: "Подать обращение",
                            idField: "id",
                            type: "appeal",
                            tabs: ["tourism"]
                        }, {
                            name: "План ЗУ",
                            title: "План земельного участка",
                            idField: "id",
                            tabs: ["info", "services"]
                        }],
                        services: [{
                            name: "Справочная информация по объектам недвижимости в режиме online",
                            getUrl: function() {
                                return "https://lk.rosreestr.ru/eservices/real-estate-objects-online"
                            },
                            field: "cn"
                        }, {
                            name: "Предоставление сведений ЕГРН",
                            getUrl: function() {
                                return "https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                            },
                            field: "cn"
                        }],
                        detailInfoProp: "id",
                        fields_parcel: [{
                            alias: "Тип",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Объект недвижимости"
                        }, {
                            alias: "Вид",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: "Земельный участок",
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 1,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 2,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 3,
                                    value: "Земельный участок для туристской деятельности"
                                }],
                                name: "title"
                            }
                        }, {
                            prop: "cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый номер",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "kvartal_cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый квартал",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 2
                            },
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "address",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Адрес",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs.parcel_attrs",
                            alias: "",
                            aliasProp: "area_type",
                            aliasDictionary: "areaTypes",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits"
                        }, {
                            prop: "statecd",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Статус",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcel_states"
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Cубъект РФ",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "parent_cn",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровый номер ЕЗП",
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 1
                            },
                            visible: !1,
                            hideWhenEmpty: !1,
                            isRequire: !0,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Муниципальное образование",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Населенный пункт",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "area_value",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Площадь, кв.м.",
                            format: "number",
                            dimension: "area_unit",
                            dictionaryDimension: "measurementUnits",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "data_type",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Наличие границ",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "building_data_types"
                        }, {
                            prop: "category_type",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Категория земель",
                            isLink: !1,
                            style: null,
                            dictionary: "category_types",
                            visible: !0,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            prop: "util_code",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Разрешенное использование",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "utilDescription",
                            identifyField: {
                                isTitle: !0,
                                name: "info",
                                required: !0
                            }
                        }, {
                            prop: "util_by_doc",
                            parentProp: "attrs.parcel_attrs",
                            alias: "по документу",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            prop: "fp",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Форма собственности",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: "parcelOwnership"
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            prop: "date_cost",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата определения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_approval",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата утверждения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "cc_date_entering",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата внесения сведений",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "application_date",
                            parentProp: "attrs.parcel_attrs",
                            alias: "дата применения",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "date",
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Вид разрешенного использования",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Вид разрешенного использования от уполномоченного органа",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Потенциал использования",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            porp: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Объекты капитального строительства",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Инженерные сети",
                            visible: !1,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Уполномоченный орган",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Телефон",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }, {
                            alias: "e-mail для направления обращения",
                            prop: "",
                            parentProp: "attrs.parcel_attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            visible: !1,
                            hideWhenEmpty: !1,
                            value: ""
                        }],
                        fields_parcel_tour: [{
                            alias: "Тип",
                            prop: "data_type_text",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "panZoom"
                            },
                            identifyField: {
                                isTitle: !0,
                                required: !0,
                                value: [{
                                    id: 1,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 2,
                                    value: "Участок ЗТ"
                                }, {
                                    id: 3,
                                    value: "Земельный участок для туристской деятельности"
                                }],
                                name: "title"
                            },
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Субъект РФ",
                            prop: "reg_name",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Муниципальное образование",
                            prop: "mun",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Населенный пункт",
                            prop: "np",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Адрес",
                            prop: "address",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Площадь, кв.м.",
                            prop: "area",
                            parentProp: "attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Форма собственности",
                            prop: "right",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Границы земельного участка установлены в соответствии с требованиями законодательства",
                            prop: "data_type",
                            dictionary: "tourism_data_types",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Категория земель",
                            prop: "category_text",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид разрешенного использования (ВРИ)",
                            prop: "",
                            parentProp: "attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "по документу",
                            prop: "util_by_doc",
                            parentProp: "attrs.parcel_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1,
                            identifyField: {
                                isTitle: !0,
                                name: "by_doc",
                                required: !0
                            }
                        }, {
                            alias: "по сведениям от уполномоченного органа",
                            prop: "util_by_uo",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            visible: !0,
                            hideWhenEmpty: !0,
                            dictionary: !1
                        }, {
                            prop: "cad_cost",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Кадастровая стоимость",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Наименование территориальной зоны согласно правилам землепользования и застройки",
                            prop: "terzone_name_by_pzz",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "idoti",
                            prop: "id_oti",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: ""
                        }, {
                            alias: "Наименование ближайшего объекта туристского интереса",
                            prop: "poi",
                            searchProp: "id_oti",
                            parentProp: "attrs.parcel_tour_attrs",
                            isEmpty: !1,
                            isLink: !0,
                            action: {
                                click: "search",
                                type: 28
                            },
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: "",
                            searchValue: ""
                        }, {
                            alias: "Кадастровый или реестровый номер объекта туристского интереса",
                            prop: "poi_cn",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: ""
                        }, {
                            alias: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            prop: "tour_object_description",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "openHref"
                            },
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Инженерные сети",
                            prop: "",
                            parentProp: "attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Электроснабжение",
                            prop: "power_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Водоснабжение",
                            prop: "water_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Газоснабжение",
                            prop: "gas_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Канализация",
                            prop: "sewerage",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Теплоснабжение",
                            prop: "heat_supply",
                            format: "text",
                            parentProp: "attrs.parcel_tour_attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Расстояние до",
                            prop: "",
                            parentProp: "attrs",
                            isEmpty: !0,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "ближайшего объекта туристского интереса (км)",
                            prop: "distance_to_near_tour_object",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей федеральной трассы (км)",
                            prop: "distance_to_near_fed_road",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей дороги с твердым покрытием (км)",
                            prop: "distance_to_near_hard_road",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего центра муниципального района или городского округа (км)",
                            prop: "distance_to_near_district",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего населенного пункта (км)",
                            prop: "distance_to_near_locality",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего объекта общественного питания (км)",
                            prop: "distance_to_near_public_catering",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего объекта здравоохранения (км)",
                            prop: "distance_to_near_health_care",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшей остановки общественного транспорта (км)",
                            prop: "distance_to_near_public_transport",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "расстояние до ближайшей железнодорожной станции (км)",
                            prop: "distance_to_near_railway_station",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "ближайшего аэропорта (км)",
                            prop: "distance_to_near_airport",
                            format: "number",
                            parentProp: "attrs",
                            visible: !0,
                            style: "level-padding-2",
                            value: null,
                            dictionary: !1
                        }, {
                            alias: "Контакты уполномоченного органа",
                            prop: "",
                            parentProp: "",
                            isLink: !1,
                            style: "bold-title",
                            dictionary: !1,
                            isEmpty: !0,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Наименование",
                            prop: "uo_name",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес",
                            prop: "uo_address",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Телефон",
                            prop: "uo_phone",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Сайт в сети Интернет",
                            prop: "uo_url",
                            parentProp: "attrs",
                            isLink: !0,
                            action: {
                                click: "openHref"
                            },
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0
                        }, {
                            alias: "Электронная почта для связи",
                            prop: "uo_email",
                            parentProp: "attrs",
                            isLink: !1,
                            style: "level-padding-2",
                            dictionary: !1,
                            isEmpty: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "additional_info",
                            parentProp: "attrs",
                            alias: "Инвестиционный портал",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            dictionary: !1,
                            isLink: !0,
                            action: {
                                click: "openHref"
                            }
                        }]
                    }, {
                        dataType: 28,
                        title: "",
                        tabs: [{
                            title: "Информация",
                            alias: "info"
                        }],
                        links: [{
                            name: "Подать обращение",
                            title: "Подать обращение",
                            idField: "id",
                            type: "appeal",
                            tabs: ["oti"]
                        }],
                        services: [{
                            name: "Справочная информация по объектам недвижимости в режиме online",
                            getUrl: function() {
                                return "https://lk.rosreestr.ru/eservices/real-estate-objects-online"
                            },
                            field: "cn"
                        }, {
                            name: "Предоставление сведений ЕГРН",
                            getUrl: function() {
                                return "https://rosreestr.gov.ru/eservices/request_info_from_egrn/"
                            },
                            field: "cn"
                        }],
                        detailInfoProp: "id",
                        fields_parcel: [{
                            alias: "Наименование объекта туристского интереса",
                            prop: "name",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Идентификационный номер ОТИ",
                            prop: "id",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !1,
                            value: "",
                            searchProp: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !1,
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес объекта туристского интереса",
                            prop: "address",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Тип объекта туристского интереса",
                            prop: "type",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид особо охраняемой природной территории",
                            prop: "vid_oopt",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Наличие у объекта туристского интереса статуса ЮНЕСКО",
                            prop: "unesko",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид объекта культурного-исторического наследия",
                            prop: "vid_okn",
                            parentProp: "attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Статус объекта туристского интереса",
                            prop: "status",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Потенциальный интерес к объекту",
                            prop: "potential",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Среднее количество туристов, посетивших объект туристского интереса за два предыдущих года(тыс. чел.)",
                            prop: "tourist",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "paid_services",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Средний объем платных услуг, оказанных объект туристского интереса за два предыдущих года(млн. руб.)",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            prop: "url",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !0,
                            action: {
                                click: "openHref"
                            },
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }],
                        fields: [{
                            alias: "Наименование объекта туристского интереса",
                            prop: "name",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Кадастровый номер",
                            prop: "cn",
                            parentProp: "attrs",
                            isLink: !0,
                            isEmpty: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Адрес объекта туристского интереса",
                            prop: "address",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Тип объекта туристского интереса",
                            prop: "type",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид особо охраняемой природной территории",
                            prop: "vid_oopt",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0
                        }, {
                            alias: "Наличие у объекта туристского интереса статуса ЮНЕСКО",
                            prop: "unesko",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Вид объекта культурного-исторического наследия",
                            prop: "vid_okn",
                            parentProp: "attrs",
                            format: "number",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Статус объекта туристского интереса",
                            prop: "status",
                            parentProp: "attrs",
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Потенциальный интерес к объекту",
                            prop: "potential",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            visible: !0,
                            value: ""
                        }, {
                            alias: "Среднее количество туристов, посетивших объект туристского интереса за два предыдущих года",
                            prop: "tourist",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }, {
                            prop: "paid_services",
                            parentProp: "attrs.parcel_attrs",
                            alias: "Средний объем платных услуг, оказанных объектом туристского интереса за два предыдущих года",
                            visible: !0,
                            hideWhenEmpty: !1,
                            style: null,
                            value: null,
                            format: "number",
                            dictionary: !1,
                            dimension: "cad_unit",
                            dictionaryDimension: "cadastreUnits"
                        }, {
                            alias: "Ссылка на портал, содержащий информацию об объекте туристского интереса",
                            prop: "url",
                            parentProp: "attrs",
                            isEmpty: !1,
                            isLink: !1,
                            style: null,
                            dictionary: !1,
                            visible: !0,
                            value: ""
                        }]
                    }];
