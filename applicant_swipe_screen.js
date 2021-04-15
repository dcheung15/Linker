/*
applicant_swipe_screen.js
CIS 454 Project
John Paul Besong, Doung Lan Cheung, Jeremy Gavrilov, Skyler Hall, Kyra Thomas, Maricel Vicente

Javascript file to assist with applicant screen swiping.
*/

// Globals
//var to keep track of the current profile from the list of profiles to pull from
var currentProfile_index = 0;
var profile_data;

//Ensures the dummy profile information gets loaded from the json
var load_data_promise = new Promise(function (resolve, reject) {
    loadJSON(function (response) {
        // Parse JSON string into object
        profile_data = JSON.parse(response);
    });
    if (profile_data == "undefined") {
        console.log("load data promise fail")
    }
    else {
        console.log("load data promise success")
    }
});

load_data_promise.then(function (result) {

}, function (err) {
    console.log(err);
});

// Dummy json profile information
dummy_profile_json = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Aaron",
                "last": "Obrien"
            },
            "location": {
                "street": {
                    "number": 7138,
                    "name": "Stevens Creek Blvd"
                },
                "city": "Overland Park",
                "state": "Alabama",
                "country": "United States",
                "postcode": 40442,
                "coordinates": {
                    "latitude": "83.4719",
                    "longitude": "-94.7471"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "aaron.obrien@example.com",
            "login": {
                "uuid": "0a3bca05-dde7-4dd9-abee-c4f842168de5",
                "username": "tinyswan815",
                "password": "quest1",
                "salt": "1Y6EY2K4",
                "md5": "0d0cf43c7fcd331c66651ea2b8d8d53d",
                "sha1": "9564bfba03cce49e4c2e837a684698dd9f9c88d1",
                "sha256": "d2ee57d7e7f2588c6db1eda3802adc26edb42f3a2c4e523737d44a77378e7e6d"
            },
            "dob": {
                "date": "1958-09-27T09:19:11.048Z",
                "age": 63
            },
            "phone": "(210)-358-9390",
            "id": {
                "name": "SSN",
                "value": "271-15-5014"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/51.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Christoffer",
                "last": "Nielsen"
            },
            "location": {
                "street": {
                    "number": 9934,
                    "name": "Stadionvej"
                },
                "city": "Argerskov",
                "state": "Hovedstaden",
                "country": "Denmark",
                "postcode": 47220,
                "coordinates": {
                    "latitude": "83.9113",
                    "longitude": "-168.6656"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "christoffer.nielsen@example.com",
            "login": {
                "uuid": "1016f2cf-194c-4328-8027-533abfc13636",
                "username": "goldentiger425",
                "password": "lucky7",
                "salt": "mxoB1c4y",
                "md5": "1325fa304c515d1b0f5f9f786ad271fa",
                "sha1": "b72996564c3337877d4860e04cdfcb0ef69aa776",
                "sha256": "07a4d238415a2815c5fcbbc82a5ec96a0c1095ef45cf0184a699a20700b9d428"
            },
            "dob": {
                "date": "1982-11-08T13:02:12.012Z",
                "age": 39
            },
            "phone": "59564418",
            "id": {
                "name": "CPR",
                "value": "081182-7193"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/19.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "یاسمن",
                "last": "جعفری"
            },
            "location": {
                "street": {
                    "number": 7851,
                    "name": "حجاب"
                },
                "city": "بروجرد",
                "state": "خوزستان",
                "country": "Iran",
                "postcode": 63778,
                "coordinates": {
                    "latitude": "-49.0140",
                    "longitude": "-20.7628"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "ysmn.jaafry@example.com",
            "login": {
                "uuid": "d0e685e5-ba38-4f9a-b61d-5d579838c2f4",
                "username": "silverpanda233",
                "password": "golf",
                "salt": "TL3vh0F7",
                "md5": "202a134f64d556355320c7e36d8a1e63",
                "sha1": "1fba9e33c06fcd106fc953df7b9daf23ed32799c",
                "sha256": "4a976ab081c5c006f07c727c08f08dd4c88f7898302d2bba393c9909b2cfe914"
            },
            "dob": {
                "date": "1945-11-06T10:12:32.448Z",
                "age": 76
            },
            "phone": "052-37608465",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Hadrien",
                "last": "Roux"
            },
            "location": {
                "street": {
                    "number": 9995,
                    "name": "Rue Chazière"
                },
                "city": "Versailles",
                "state": "Loiret",
                "country": "France",
                "postcode": 92106,
                "coordinates": {
                    "latitude": "36.7012",
                    "longitude": "10.2919"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "hadrien.roux@example.com",
            "login": {
                "uuid": "e0b9c335-9b9e-451f-8f6c-b20c2835c91d",
                "username": "blackcat680",
                "password": "jughead",
                "salt": "TaRhvs65",
                "md5": "19e91887769c974637bf0db23c6031b7",
                "sha1": "a605001f956a93a3b3a834b933ddbaf10858e995",
                "sha256": "8b4c2dc288ef88a8b4f69a4c1468bfcc6cb9ad051b901ad2968b09ced2ac6a14"
            },
            "dob": {
                "date": "1995-04-22T12:35:38.960Z",
                "age": 26
            },
            "phone": "03-66-68-33-32",
            "id": {
                "name": "INSEE",
                "value": "1NNaN18465873 97"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Mya",
                "last": "Duval"
            },
            "location": {
                "street": {
                    "number": 540,
                    "name": "Rue D'Abbeville"
                },
                "city": "Courbevoie",
                "state": "Calvados",
                "country": "France",
                "postcode": 50822,
                "coordinates": {
                    "latitude": "-4.0985",
                    "longitude": "36.2045"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "mya.duval@example.com",
            "login": {
                "uuid": "8412bc75-9477-45fd-b7f9-eb0b254ee721",
                "username": "beautifulsnake772",
                "password": "cyclone",
                "salt": "zFgqCwHr",
                "md5": "5b14a418cfbd1c45b0d00f738b88a3ed",
                "sha1": "2d8085bbc39442146fa9bedf68bf6c6a6f69ba78",
                "sha256": "33dbdf0c9bbd5a1f42701de393dbc9aa009fa81fa8a4232b8c8b7cd37f38ee63"
            },
            "dob": {
                "date": "1951-01-20T10:19:27.187Z",
                "age": 70
            },
            "phone": "04-52-96-74-27",
            "id": {
                "name": "INSEE",
                "value": "2NNaN33876508 01"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/3.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Erik",
                "last": "Weaver"
            },
            "location": {
                "street": {
                    "number": 3161,
                    "name": "Mill Road"
                },
                "city": "Lincoln",
                "state": "Nottinghamshire",
                "country": "United Kingdom",
                "postcode": "F5P 3SA",
                "coordinates": {
                    "latitude": "26.1794",
                    "longitude": "157.0910"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "erik.weaver@example.com",
            "login": {
                "uuid": "ac89a9d5-6542-4cd8-a033-3d6a8cb5ef7a",
                "username": "ticklishfrog261",
                "password": "bigbutt",
                "salt": "UEWmMTL3",
                "md5": "924cd03488835486c6c5936a97f66922",
                "sha1": "60adf70b81c174570e1a40cf6ddf2620b9fa0ac3",
                "sha256": "4bd14e138fa47c21c1cd4a902f3dad3c0de6d3b51f44dc62dfee209dcca5d6df"
            },
            "dob": {
                "date": "1961-02-24T23:04:52.933Z",
                "age": 60
            },
            "phone": "016977 4272",
            "id": {
                "name": "NINO",
                "value": "TX 76 83 74 Z"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Daniel",
                "last": "Kivela"
            },
            "location": {
                "street": {
                    "number": 7605,
                    "name": "Satakennankatu"
                },
                "city": "Savukoski",
                "state": "Pirkanmaa",
                "country": "Finland",
                "postcode": 30259,
                "coordinates": {
                    "latitude": "54.0450",
                    "longitude": "-81.2238"
                },
                "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                }
            },
            "email": "daniel.kivela@example.com",
            "login": {
                "uuid": "78074276-8147-4584-81db-180984fbc73c",
                "username": "ticklishladybug499",
                "password": "colombia",
                "salt": "KhyBi6dW",
                "md5": "6c926dbbcd6feab3630ebbc9b68f6cb7",
                "sha1": "3b22014fddd2fa1330550e66a642aa660c0c534d",
                "sha256": "01600534be45755a4309f90b892cdbd8b935de0c11199dc4e8295df89e6c480e"
            },
            "dob": {
                "date": "1951-07-21T03:52:42.661Z",
                "age": 70
            },
            "phone": "04-825-013",
            "id": {
                "name": "HETU",
                "value": "NaNNA065undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Brandy",
                "last": "Jordan"
            },
            "location": {
                "street": {
                    "number": 7989,
                    "name": "Lakeshore Rd"
                },
                "city": "Shelby",
                "state": "Kentucky",
                "country": "United States",
                "postcode": 25524,
                "coordinates": {
                    "latitude": "-18.0698",
                    "longitude": "-98.6208"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "brandy.jordan@example.com",
            "login": {
                "uuid": "55543f55-cca9-41d0-a954-f7577bfc7c39",
                "username": "heavyostrich359",
                "password": "future",
                "salt": "JQ6Sc4kQ",
                "md5": "35c7f909cc04a4fab65a709e65a4cff7",
                "sha1": "5caf1421aef0a873eea2a79eeb2e7964c536135e",
                "sha256": "7fa2eff72a3201243c70fa32565d9bc760e1cab8b5987e558912df9134438a01"
            },
            "dob": {
                "date": "1995-04-04T07:04:56.524Z",
                "age": 26
            },
            "phone": "(812)-191-5294",
            "id": {
                "name": "SSN",
                "value": "886-91-8370"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Kerim",
                "last": "Sandalcı"
            },
            "location": {
                "street": {
                    "number": 1061,
                    "name": "Filistin Cd"
                },
                "city": "Erzincan",
                "state": "Sinop",
                "country": "Turkey",
                "postcode": 30941,
                "coordinates": {
                    "latitude": "41.5128",
                    "longitude": "37.5614"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "kerim.sandalci@example.com",
            "login": {
                "uuid": "d2d524bb-a254-42fc-b0a0-eefa5b129382",
                "username": "yellowlion735",
                "password": "falcon1",
                "salt": "pcRuPMDB",
                "md5": "351d510b8b137a19945dcd1f62ec426b",
                "sha1": "8814795267501126380a82c3c148803dd2c872dc",
                "sha256": "d23f379109c96dd167c6bb5899a30669921034f43b3b5d61d96a4f1a24391c98"
            },
            "dob": {
                "date": "1980-02-29T13:59:54.986Z",
                "age": 41
            },
            "phone": "(988)-870-6820",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/15.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Adrian",
                "last": "Sanchez"
            },
            "location": {
                "street": {
                    "number": 3083,
                    "name": "Station Road"
                },
                "city": "Nottingham",
                "state": "Mid Glamorgan",
                "country": "United Kingdom",
                "postcode": "H6N 7LD",
                "coordinates": {
                    "latitude": "-83.3775",
                    "longitude": "-17.1258"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "adrian.sanchez@example.com",
            "login": {
                "uuid": "0e5fabdc-a196-43c2-8800-9b12440bf81b",
                "username": "organicwolf108",
                "password": "power1",
                "salt": "uFHTpasb",
                "md5": "045520be63646495ea54548defee38a4",
                "sha1": "e443e267cd30abc18616453748221ebba7677b74",
                "sha256": "ab42976226396be6e0c3e77ce78567788eb2557ebf1f14209524c69bb1b89832"
            },
            "dob": {
                "date": "1969-04-13T17:16:32.403Z",
                "age": 52
            },
            "phone": "015395 94079",
            "id": {
                "name": "NINO",
                "value": "RN 20 17 14 N"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/22.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Hermann-Josef",
                "last": "Hanisch"
            },
            "location": {
                "street": {
                    "number": 8200,
                    "name": "Tulpenweg"
                },
                "city": "Billerbeck",
                "state": "Hamburg",
                "country": "Germany",
                "postcode": 34318,
                "coordinates": {
                    "latitude": "-88.6930",
                    "longitude": "117.6096"
                },
                "timezone": {
                    "offset": "+8:00",
                    "description": "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            "email": "hermann-josef.hanisch@example.com",
            "login": {
                "uuid": "e50a4351-9759-4773-b4ef-606153900f03",
                "username": "tinymeercat434",
                "password": "spunk",
                "salt": "LN1HZ54j",
                "md5": "542da257142efac12f9147163a6ab86c",
                "sha1": "7a51819f30ea798f1800ab12b65bb8846a67aba0",
                "sha256": "4d8caf07985c31532fcd4056ab8898285f678cf2990098f696c181290b866890"
            },
            "dob": {
                "date": "1945-09-02T14:03:37.883Z",
                "age": 76
            },
            "phone": "0589-0181515",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/17.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Charon",
                "last": "De Valk"
            },
            "location": {
                "street": {
                    "number": 1146,
                    "name": "Belkensborg"
                },
                "city": "Esch",
                "state": "Noord-Holland",
                "country": "Netherlands",
                "postcode": 57181,
                "coordinates": {
                    "latitude": "-55.8131",
                    "longitude": "-72.0199"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "charon.devalk@example.com",
            "login": {
                "uuid": "5bf1b4da-ad39-4a72-ac2a-24684db5eb26",
                "username": "browngorilla741",
                "password": "labrador",
                "salt": "vaed7oW5",
                "md5": "8275bb33e88c6441f7b03cc855d15a52",
                "sha1": "152ab973f83c6b9f85bcb4f47fef8d1b1139294f",
                "sha256": "f6ed1a42fbf60694db8b47a9f02a37f3a7187e28a24feab8ae20e79f5c04b442"
            },
            "dob": {
                "date": "1984-08-25T04:59:38.983Z",
                "age": 37
            },
            "phone": "(432)-924-9848",
            "id": {
                "name": "BSN",
                "value": "86093960"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/10.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Hermien",
                "last": "Opheij"
            },
            "location": {
                "street": {
                    "number": 8144,
                    "name": "De Markehof"
                },
                "city": "Indijk",
                "state": "Drenthe",
                "country": "Netherlands",
                "postcode": 82408,
                "coordinates": {
                    "latitude": "45.1716",
                    "longitude": "-152.1123"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "hermien.opheij@example.com",
            "login": {
                "uuid": "263fd9b0-f326-4a74-bc33-998a163894a0",
                "username": "tinybear767",
                "password": "krissy",
                "salt": "uBNmmkbC",
                "md5": "2b131cf859b28b8ee447f9947597ab52",
                "sha1": "45c189914a3ac948d425da29713e24c5336939ed",
                "sha256": "6cb2dbbb2132e4cf727a0c8c0c463e3072254c50ea5f0d3624dd46899de46ed8"
            },
            "dob": {
                "date": "1967-05-23T08:57:08.699Z",
                "age": 54
            },
            "phone": "(261)-071-0510",
            "id": {
                "name": "BSN",
                "value": "07818725"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/26.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jules",
                "last": "Roussel"
            },
            "location": {
                "street": {
                    "number": 5701,
                    "name": "Rue de Bonnel"
                },
                "city": "Metz",
                "state": "Indre-et-Loire",
                "country": "France",
                "postcode": 36259,
                "coordinates": {
                    "latitude": "78.6056",
                    "longitude": "103.6966"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "jules.roussel@example.com",
            "login": {
                "uuid": "dbae4c7f-7425-4fcc-8839-2672e0c3d772",
                "username": "ticklishmouse528",
                "password": "tinker",
                "salt": "LmLCRBau",
                "md5": "b822cf6e7087fe530f57ed0316c9751e",
                "sha1": "b9f11fd7f29b2afab85c5a560e163edc02224be0",
                "sha256": "4cbfb8e8ad9038df86b39c5e11296e9f8ef56ca7edcb3e4efc3c26a8e94f4cab"
            },
            "dob": {
                "date": "1989-07-21T12:26:57.442Z",
                "age": 32
            },
            "phone": "03-46-93-22-64",
            "id": {
                "name": "INSEE",
                "value": "1NNaN01632625 24"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Sönke",
                "last": "Lenk"
            },
            "location": {
                "street": {
                    "number": 7885,
                    "name": "Talstraße"
                },
                "city": "Schauenstein",
                "state": "Bayern",
                "country": "Germany",
                "postcode": 90247,
                "coordinates": {
                    "latitude": "-11.7290",
                    "longitude": "147.6494"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "sonke.lenk@example.com",
            "login": {
                "uuid": "4d480256-a05c-4c38-8a6f-d2782c6d529a",
                "username": "yellowlion439",
                "password": "felicia",
                "salt": "VPHDIUON",
                "md5": "c8fb6146e854dd25abbf84428d001887",
                "sha1": "49b173cfa71e248d43b72dcf3d889e5b901c0e49",
                "sha256": "860995e1e1ac20d3cfb421ebc39e857069044e7113ca1aaa402e55d5c432a9ac"
            },
            "dob": {
                "date": "1945-06-27T05:23:03.358Z",
                "age": 76
            },
            "phone": "0963-9026361",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/34.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Leroy",
                "last": "Meehan"
            },
            "location": {
                "street": {
                    "number": 8999,
                    "name": "Grove Road"
                },
                "city": "Kildare",
                "state": "Cavan",
                "country": "Ireland",
                "postcode": 52851,
                "coordinates": {
                    "latitude": "76.5019",
                    "longitude": "80.4858"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "leroy.meehan@example.com",
            "login": {
                "uuid": "0e2a67a4-e55d-4231-b293-f6b15cb9e859",
                "username": "organicbird736",
                "password": "building",
                "salt": "JjcFZLlz",
                "md5": "077e8925a084aa63be66af394d50eabc",
                "sha1": "6c8614142e37599b617f49a7fc80c5203ff25088",
                "sha256": "2eb9c8a82a0650502d64469d7490765c706f91b0f5a3d04e98d89ea780397325"
            },
            "dob": {
                "date": "1969-03-18T05:55:06.616Z",
                "age": 52
            },
            "phone": "051-146-2271",
            "id": {
                "name": "PPS",
                "value": "9265352T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/54.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Minke",
                "last": "Hogenberg"
            },
            "location": {
                "street": {
                    "number": 9501,
                    "name": "Het Klein Hofstee"
                },
                "city": "Rossum Ov",
                "state": "Utrecht",
                "country": "Netherlands",
                "postcode": 80129,
                "coordinates": {
                    "latitude": "63.7199",
                    "longitude": "127.3364"
                },
                "timezone": {
                    "offset": "-11:00",
                    "description": "Midway Island, Samoa"
                }
            },
            "email": "minke.hogenberg@example.com",
            "login": {
                "uuid": "ae2e5b0e-48bb-4194-b340-b5a9775f8ba8",
                "username": "lazybear197",
                "password": "beethove",
                "salt": "1421hbhE",
                "md5": "ba0ccf0059d945db9d0db22ca0fe9a3d",
                "sha1": "f12a038f743e657da95918550f0f3b0596fe7000",
                "sha256": "c5fd91e136f04c822025877c0ab0d9175e96f4644497176fe21416ab20035354"
            },
            "dob": {
                "date": "1945-04-18T06:06:31.619Z",
                "age": 76
            },
            "phone": "(773)-812-8102",
            "id": {
                "name": "BSN",
                "value": "88473876"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/77.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Souhaïla",
                "last": "Hellinga"
            },
            "location": {
                "street": {
                    "number": 6654,
                    "name": "Getouwstraat"
                },
                "city": "Sittard",
                "state": "Limburg",
                "country": "Netherlands",
                "postcode": 10295,
                "coordinates": {
                    "latitude": "-61.9465",
                    "longitude": "153.0790"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "souhaila.hellinga@example.com",
            "login": {
                "uuid": "dddb1ae4-1af3-4de6-bff0-900cb4c9a458",
                "username": "blackduck147",
                "password": "grapes",
                "salt": "sCm4EeJL",
                "md5": "68f5b61bd24a37bff5c7c4ad44c87042",
                "sha1": "beaaa852706fd409fc14ccb85834db6324291f90",
                "sha256": "3c5abc2aa7ae6bfc00af796b375e00f2dd5e2db7141286a151a68956a3e2f4e5"
            },
            "dob": {
                "date": "1963-05-16T06:36:27.341Z",
                "age": 58
            },
            "phone": "(402)-513-2201",
            "id": {
                "name": "BSN",
                "value": "24083637"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/32.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/32.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/32.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Alisa",
                "last": "Polon"
            },
            "location": {
                "street": {
                    "number": 1332,
                    "name": "Satakennankatu"
                },
                "city": "Brändö",
                "state": "Finland Proper",
                "country": "Finland",
                "postcode": 81864,
                "coordinates": {
                    "latitude": "6.5034",
                    "longitude": "85.7541"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "alisa.polon@example.com",
            "login": {
                "uuid": "3040b9e0-7631-479c-9995-0dcb78a3c571",
                "username": "sadswan364",
                "password": "samsung",
                "salt": "eyEU1Hzm",
                "md5": "d79f17005792c80812b6e2185460b58b",
                "sha1": "b4f12dd20b77ada88d7a357985da0b39d0cf7888",
                "sha256": "bd5858cb2018788f602258b755d23b3b053e0fae93733455c3c016e4b1019311"
            },
            "dob": {
                "date": "1950-06-30T17:25:01.300Z",
                "age": 71
            },
            "phone": "08-921-800",
            "id": {
                "name": "HETU",
                "value": "NaNNA500undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/50.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Nils",
                "last": "Brennecke"
            },
            "location": {
                "street": {
                    "number": 6494,
                    "name": "Fliederweg"
                },
                "city": "Herrenberg",
                "state": "Thüringen",
                "country": "Germany",
                "postcode": 54635,
                "coordinates": {
                    "latitude": "-18.2664",
                    "longitude": "34.0653"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "nils.brennecke@example.com",
            "login": {
                "uuid": "ff0b724e-d718-455d-98e1-ed7c222f45e7",
                "username": "happysnake607",
                "password": "jammin",
                "salt": "4hAyV6Fe",
                "md5": "961545dbab17b3e5b53c50b40b8f621f",
                "sha1": "f8eb73219f924857bb18bbb75289e0703725b2b8",
                "sha256": "345f7ef65b1cbb5f538fb207bf0e0a0f23707a7dac4174ad881ad08f795dca90"
            },
            "dob": {
                "date": "1975-01-23T01:08:03.693Z",
                "age": 46
            },
            "phone": "0261-3385791",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
            }
        }]
}

//generate dummy job information to display in cards
var dummyJobs = generateJobs(dummy_profile_json);

//list of jobs applied to
var applied_jobs = Array();


//user clicks yes, load and go to next profile to the card on the left
document.getElementById("yes_button").addEventListener("click", function () {

    var yes_promise = new Promise(function (resolve, reject) {
        //store job data
        applied_jobs.push(dummyJobs[currentProfile_index - 1]);

        //create new profile card to the left of current card
        push_ret = pushProfile("yes");
        currentProfile = push_ret[0];
        newProfile = push_ret[1];


        //load info into card
        /*
        JSON format:
        { "job_title": job_title, "company": "Company Name", "job_location": job_location,
        "recruiter_name": recruiter_name, "recruiter_email": recruiter_email }
        */

        var curr_job = dummyJobs[currentProfile_index];
        var recruiter_name = curr_job["recruiter_name"];
        var recruiter_email = curr_job["recruiter_email"];
        var job_location = curr_job["job_location"];
        var job_title = curr_job["job_title"];
        var company = curr_job["company"];

        swipe_testing_yes(job_title, job_location, recruiter_email)

        //Add data to html
        document.getElementById("template_profile_slide_title").innerHTML = job_title;
        document.getElementById("template_profile_slide_company").innerHTML = company;
        document.getElementById("template_profile_slide_location").innerHTML = "Location: " + job_location;
        document.getElementById("template_profile_slide_recruiter_name").innerHTML = "Recruiter: " + recruiter_name;
        document.getElementById("template_profile_slide_recruiter_email").innerHTML = "Recruiter email: " + recruiter_email;

        if (document.getElementById("old_profile") != null) {
            //console.log("yes promise success")

            //wait until carousel transition has finished
            /*$("#profile_card_carousel").on('slid.bs.carousel', function () {
               
            });*/

            //go to card
            $("#profile_card_carousel").carousel("prev");

            //remove old profile html
            popProfile(currentProfile);

            currentProfile_index = currentProfile_index + 1;
        }
        else {
            console.log("yes promise fail")
        }
    });

    yes_promise.then(function (result) {

    }, function (err) {
        console.log(err);
    });

    /*
    push_ret = pushProfile("yes"); //create new profile card to the left of current card
    currentProfile = push_ret[0];
    newProfile = push_ret[1];


    //load info into card
    next_profile_info = profile_data["results"][currentProfile_index];
    next_profile_name = next_profile_info["name"]["first"] + " " + next_profile_info["name"]["last"];
    next_profile_picture = next_profile_info["picture"]["medium"];

    document.getElementById("template_profile_slide_name").innerHTML = next_profile_name;
    document.getElementById("template_profile_slide_img").setAttribute("src", next_profile_picture);


    //remove old profile html
    //wait until carousel transition has finished
    $("#profile_card_carousel").on('slid.bs.carousel', function () {
        popProfile(currentProfile);
    });

    //go to card
    $("#profile_card_carousel").carousel("prev");
    // $("#profile_card_carousel").carousel(currentIndex - 1);
*/

});



//user clicks no, load and go to next profile to the card on the right
document.getElementById("no_button").addEventListener("click", function () {

    var no_promise = new Promise(function (resolve, reject) {
        //create new profile card to the left of current card
        push_ret = pushProfile("no");
        currentProfile = push_ret[0];
        newProfile = push_ret[1];


        //load info into card
        /*
        JSON format:
        { "job_title": job_title, "company": "Company Name", "job_location": job_location,
        "recruiter_name": recruiter_name, "recruiter_email": recruiter_email }
        */

        var curr_job = dummyJobs[currentProfile_index];
        var recruiter_name = curr_job["recruiter_name"];
        var recruiter_email = curr_job["recruiter_email"];
        var job_location = curr_job["job_location"];
        var job_title = curr_job["job_title"];
        var company = curr_job["company"];

        swipe_testing_no(job_title, job_location, recruiter_email)

        //Add data to html
        document.getElementById("template_profile_slide_title").innerHTML = job_title;
        document.getElementById("template_profile_slide_company").innerHTML = company;
        document.getElementById("template_profile_slide_location").innerHTML = "Location: " + job_location;
        document.getElementById("template_profile_slide_recruiter_name").innerHTML = "Recruiter: " + recruiter_name;
        document.getElementById("template_profile_slide_recruiter_email").innerHTML = "Recruiter email: " + recruiter_email;

        if (document.getElementById("old_profile") != null) {
            //console.log("no promise success")

            //wait until carousel transition has finished
            /*$("#profile_card_carousel").on('slid.bs.carousel', function () {
               
            });*/

            //go to card
            $("#profile_card_carousel").carousel("next");

            //remove old profile html
            popProfile(currentProfile);

            currentProfile_index = currentProfile_index + 1;
        }
        else {
            console.log("no promise fail")
        }
    });

    no_promise.then(function (result) {

    }, function (err) {
        console.log(err);
    });



});

//creates a new profile card to show next
function pushProfile(direction) {

    //copy template profile html into a new div element
    var template_profile_html = document.getElementById("template_profile_slide").innerHTML;
    var new_profile = document.createElement("div");

    //copy html
    new_profile.innerHTML = template_profile_html;

    //rename ids for current profile
    document.getElementById("template_profile_slide").setAttribute("id", "old_profile");
    document.getElementById("template_profile_slide_title").setAttribute("id", "old_profile_title");
    document.getElementById("template_profile_slide_company").setAttribute("id", "old_profile_company");;
    document.getElementById("template_profile_slide_location").setAttribute("id", "old_profile_location");
    document.getElementById("template_profile_slide_recruiter_name").setAttribute("id", "old_profile_recruiter_name");
    document.getElementById("template_profile_slide_recruiter_email").setAttribute("id", "old_profile_recruiter_email");

    //set attributes for new profile
    new_profile.setAttribute("class", "carousel-item");
    new_profile.setAttribute("id", "template_profile_slide");

    //insert card to the right of the current card
    if (direction == "no") {
        //document.getElementById("old_profile");
        var curr_profile = document.getElementById("carousel_inner").firstChild;
        document.getElementById("carousel_inner").insertBefore(new_profile, null);

    }
    //insert card to the left of the current card
    else {
        var curr_profile = document.getElementById("carousel_inner").firstChild;
        document.getElementById("carousel_inner").insertBefore(new_profile, curr_profile);
    }

    return [curr_profile, new_profile]

}

//removed html of old profile card
function popProfile(to_delete) {

    document.getElementById("old_profile").remove();

}

//json call back
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    // Replace 'my_data' with the path to your file
    xobj.open('GET', './dummy_profiles.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function generateJobs(profile_data) {

    job_titles = ["Intern", "Full-time", "Contractor"]
    job_position = ["Software Developer", "Graphics Designer", "Assistant", "Finance"]

    // total number of jobs generated by generateJobs()
    var num_jobs = 20;

    //Object(); 
    var jobs = new Array(num_jobs);

    for (i = 0; i < num_jobs; i++) {
        //gather information for job
        //console.log(profile_data)
        recruiter = profile_data["results"][i]
        recruiter_name = recruiter["name"]["first"] + " " + recruiter["name"]["last"];
        recruiter_email = recruiter["email"]
        job_location = recruiter["location"]["city"] + ", " + recruiter["location"]["state"]

        const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        pos_index = getRandomNumber(0, 3)
        title_index = getRandomNumber(0, 2)
        job_title = job_position[pos_index] + " " + job_titles[title_index]

        //write to json
        //jobs.push({ "job_title": job_title, "company": "Company Name", "job_location": job_location, "recruiter_name": recruiter_name, "recruiter_email": recruiter_email })
        jobs[i] = { "job_title": job_title, "company": "Company Name", "job_location": job_location, "recruiter_name": recruiter_name, "recruiter_email": recruiter_email }
    }

    return jobs
}

function swipe_testing_yes(title, location, email) {
    console.log("User pressed yes.") //for testing

    console.log("List of jobs applied to:") //for testing
    for (i = 0; i < applied_jobs.length; i++) {
        console.log(applied_jobs[i])
    }

    console.log("Current job card information: " + title + ", " + location + ", and" + email) //for testing
}

function swipe_testing_no(title, location, email) {
    console.log("User pressed no.") //for testing
    console.log("List of jobs applied to:") //for testing
    for (i = 0; i < applied_jobs.length; i++) {
        console.log(applied_jobs[i])
    }

    console.log("Current job card information: " + title + ", " + location + ", and" + email) //for testing
}