export const schema = () => {
    return {
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#", 
        "$id": "https://example.com/object1601548033.json", 
        "title": "Root", 
        "type": "object",
        "required": [
            "items"
        ],
        "properties": {
            "items": {
                "$id": "#root/items", 
                "title": "Items", 
                "type": "array",
                "default": [],
                "items":{
                    "$id": "#root/items/items", 
                    "title": "Items", 
                    "type": "object",
                    "required": [
                        "label",
                        "items"
                    ],
                    "properties": {
                        "label": {
                            "$id": "#root/items/items/label", 
                            "title": "Label", 
                            "type": "string",
                            "default": "",
                            "examples": [
                                "food"
                            ],
                            "pattern": "^.*$"
                        },
                        "items": {
                            "$id": "#root/items/items/items", 
                            "title": "Items", 
                            "type": "array",
                            "default": [],
                            "items":{
                                "$id": "#root/items/items/items/items", 
                                "title": "Items", 
                                "type": "object",
                                "required": [
                                    "label",
                                    "items"
                                ],
                                "properties": {
                                    "label": {
                                        "$id": "#root/items/items/items/items/label", 
                                        "title": "Label", 
                                        "type": "string",
                                        "default": "",
                                        "examples": [
                                            "Rice"
                                        ],
                                        "pattern": "^.*$"
                                    },
                                    "items": {
                                        "$id": "#root/items/items/items/items/items", 
                                        "title": "Items", 
                                        "type": "array",
                                        "default": [],
                                        "items":{
                                            "$id": "#root/items/items/items/items/items/items", 
                                            "title": "Items", 
                                            "type": "object",
                                            "required": [
                                                "label",
                                                "price"
                                            ],
                                            "properties": {
                                                "label": {
                                                    "$id": "#root/items/items/items/items/items/items/label", 
                                                    "title": "Label", 
                                                    "type": "string",
                                                    "default": "",
                                                    "examples": [
                                                        "Basmati Rice"
                                                    ],
                                                    "pattern": "^.*$"
                                                },
                                                "price": {
                                                    "$id": "#root/items/items/items/items/items/items/price", 
                                                    "title": "Price", 
                                                    "type": "integer",
                                                    "examples": [
                                                        10
                                                    ],
                                                    "default": 0
                                                }
                                            }
                                        }
    
                                    }
                                }
                            }
    
                        }
                    }
                }
    
            }
        }
    }
    
    
}