ht.Default.setImage("label", {
    "dataBindings": [
        {
            "attr": "name",
            "valueType": "String"
        },
        {
            "attr": "titleColor",
            "valueType": "String"
        }
    ],
    "width": 150,
    "height": 30,
    "boundExtend": 2,
    "comps": [
        {
            "type": "roundRect",
            "background": {
                "func": "attr@titleColor",
                "value": "rgb(66,66,66)"
            },
            "borderWidth": 1,
            "borderColor": "rgb(184,184,184)",
            "rect": [
                0.17708,
                0.32463,
                150,
                30
            ]
        },
        {
            "type": "roundRect",
            "background": "rgb(51,153,255)",
            "borderWidth": 1,
            "borderColor": "rgb(184,184,184)",
            "clipPercentage": 0.22,
            "clipDirection": "right",
            "rect": [
                0,
                0,
                36.14683,
                30.32463
            ]
        },
        {
            "type": "text",
            "text": {
                "func": "attr@name",
                "value": ""
            },
            "color": "rgb(240,240,240)",
            "font": "14 px arial, sans-serif",
            "rect": [
                11.64516,
                0.38541,
                121.96774,
                29.93922
            ]
        }
    ]
});

