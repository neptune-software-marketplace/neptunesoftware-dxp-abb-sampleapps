function buildTree() {

    var treeData = [{
            "id": "8dab3f27-1637-42e9-ab9f-d80f93bdb66c",
            "Index": 55,
            "Name": "Producer1",
            "ParentIndex": 54,
            "createdAt": 1534832506192,
            "updatedAt": 1534832506192
        },
        {
            "id": "0285b96f-24a5-4c11-97c7-44a3cb70472c",
            "Index": 1,
            "Name": "Producer2",
            "ParentIndex": 0,
            "createdAt": 1534830127438,
            "updatedAt": 1534830127438
        },
        {
            "id": "09de0448-acc8-469c-9913-1bbf979f9f9b",
            "Index": 37,
            "Name": "Broker1",
            "ParentIndex": 0,
            "createdAt": 1534831876281,
            "updatedAt": 1534831876281
        },
        {
            "id": "0aae66c7-8402-45ab-ab56-37a4f1159c62",
            "Index": 10,
            "Name": "Broker2",
            "ParentIndex": 6,
            "createdAt": 1534830861682,
            "updatedAt": 1534830861682
        },
        {
            "id": "0f4fa1df-6f40-4ab6-a98b-e4ca3a16eb2f",
            "Index": 62,
            "Name": "Market1",
            "ParentIndex": 54,
            "createdAt": 1534832682398,
            "updatedAt": 1534832682398
        },
        {
            "id": "1b6a3614-22d6-41f7-b1da-f24ac07366b7",
            "Index": 11,
            "Name": "Market2",
            "ParentIndex": 10,
            "createdAt": 1534830880012,
            "updatedAt": 1534830880012
        },
        {
            "id": "1c730884-1f7d-4ed2-80fc-a745abe064b6",
            "Index": 63,
            "Name": "Producer Log in",
            "ParentIndex": 0,
            "createdAt": 1534832694753,
            "updatedAt": 1534832694753
        },
        {
            "id": "21406ccc-edfb-4a69-9c23-8bf08e4ef93d",
            "Index": 32,
            "Name": "Certificate Record creation",
            "ParentIndex": 31,
            "createdAt": 1534831756520,
            "updatedAt": 1534831756520
        },
        {
            "id": "22430199-1976-41fe-bf2d-b0f72bb8b6bc",
            "Index": 34,
            "Name": "Certificate Buy",
            "ParentIndex": 31,
            "createdAt": 1534831792345,
            "updatedAt": 1534831792345
        },
        {
            "id": "27d8a49e-9d71-4f07-99c0-f2176ebf3149",
            "Index": 47,
            "Name": "Reports1",
            "ParentIndex": 0,
            "createdAt": 1534832221072,
            "updatedAt": 1534832221072
        },
        {
            "id": "296b60ab-0e8e-4b9d-83a3-84cdef09281f",
            "Index": 36,
            "Name": "Certificate1",
            "ParentIndex": 31,
            "createdAt": 1534831862933,
            "updatedAt": 1534831862933
        },
        {
            "id": "3128adc7-b049-494f-8619-70f98cd0a983",
            "Index": 39,
            "Name": "Certificate2",
            "ParentIndex": 0,
            "createdAt": 1534831909558,
            "updatedAt": 1534831909558
        },
        {
            "id": "31d678ed-635b-4503-876c-80559c94dfea",
            "Index": 31,
            "Name": "Certificate",
            "ParentIndex": 0,
            "createdAt": 1534831729177,
            "updatedAt": 1534831729177
        },
        {
            "id": "373237f5-8c7b-4599-965c-e1a35bdf0c54",
            "Index": 4,
            "Name": "PMA ",
            "ParentIndex": 2,
            "createdAt": 1534830228049,
            "updatedAt": 1534830228049
        },
        {
            "id": "3861b357-f25b-4c9b-8689-bbf594a07810",
            "Index": 59,
            "Name": "Consumer Profile",
            "ParentIndex": 54,
            "createdAt": 1534832589847,
            "updatedAt": 1534832589847
        },
        {
            "id": "3a6a190c-1378-475e-aa19-c32f970accab",
            "Index": 64,
            "Name": "Log in",
            "ParentIndex": 63,
            "createdAt": 1534832709276,
            "updatedAt": 1534832709276
        },
        {
            "id": "3fd7992c-2e89-414d-a723-cbff136b44bb",
            "Index": 23,
            "Name": "Consumption1",
            "ParentIndex": 22,
            "createdAt": 1534831456217,
            "updatedAt": 1534831456217
        },
        {
            "id": "47b6ec8a-a8d3-46cf-9c89-73dfe6da457e",
            "Index": 0,
            "Name": "",
            "ParentIndex": 0,
            "createdAt": 1534832174680,
            "updatedAt": 1534832174680
        },
        {
            "id": "48448f1a-222d-4403-a453-62cfa5ed2055",
            "Index": 58,
            "Name": "Sub Meter Type",
            "ParentIndex": 54,
            "createdAt": 1534832567633,
            "updatedAt": 1534832567633
        },
        {
            "id": "57ece679-5f41-4e6d-a122-84dfbcb6c1f6",
            "Index": 25,
            "Name": "Production Reservation",
            "ParentIndex": 0,
            "createdAt": 1534831506146,
            "updatedAt": 1534831506146
        },
        {
            "id": "59de6059-dbf7-44d9-8cd2-fb68f589c1f9",
            "Index": 65,
            "Name": "Producer2",
            "ParentIndex": 63,
            "createdAt": 1534832735031,
            "updatedAt": 1534832735031
        },
        {
            "id": "625d68ea-c49a-4f85-a51f-7872f9545196",
            "Index": 13,
            "Name": "Reservation",
            "ParentIndex": 10,
            "createdAt": 1534830911213,
            "updatedAt": 1534830911213
        },
        {
            "id": "62a1d3be-b2a7-4ea2-abfe-e90fd13f7104",
            "Index": 21,
            "Name": "Invoice Address",
            "ParentIndex": 18,
            "createdAt": 1534831426152,
            "updatedAt": 1534831426152
        },
        {
            "id": "688b5cb3-0d40-4f61-be2b-ee02dfc67192",
            "Index": 67,
            "Name": "Consumer Log in",
            "ParentIndex": 0,
            "createdAt": 1534832829272,
            "updatedAt": 1534832829272
        },
        {
            "id": "68bcba0f-5073-4628-a84a-e0c1dcd4892e",
            "Index": 20,
            "Name": "CMA ",
            "ParentIndex": 18,
            "createdAt": 1534831361134,
            "updatedAt": 1534831361134
        },
        {
            "id": "699e9d05-2da9-48eb-af61-8ca905e4d936",
            "Index": 70,
            "Name": "Production reservation request",
            "ParentIndex": 67,
            "createdAt": 1534832864487,
            "updatedAt": 1534832864487
        },
        {
            "id": "6d14fb82-6b53-43a5-b575-48d23aea93b2",
            "Index": 22,
            "Name": "Consumption Code",
            "ParentIndex": 0,
            "createdAt": 1534831439357,
            "updatedAt": 1534831439357
        },
        {
            "id": "6e7c4082-6f44-4b8e-9375-968505dfdf66",
            "Index": 5,
            "Name": "Production System",
            "ParentIndex": 0,
            "createdAt": 1534830255140,
            "updatedAt": 1534830255140
        },
        {
            "id": "6f14df8a-356e-4b5f-a15a-e87b54bb2521",
            "Index": 7,
            "Name": "Production Device",
            "ParentIndex": 6,
            "createdAt": 1534830789241,
            "updatedAt": 1534830789241
        },
        {
            "id": "721b2fee-28ba-4f2e-8173-8092c3525241",
            "Index": 61,
            "Name": "Consumption Code Type",
            "ParentIndex": 54,
            "createdAt": 1534832625233,
            "updatedAt": 1534832625233
        },
        {
            "id": "7914639e-0ca5-4efc-95d3-3fe2dcdfe0ff",
            "Index": 28,
            "Name": "Production3",
            "ParentIndex": 27,
            "createdAt": 1534831565839,
            "updatedAt": 1534831565839
        },
        {
            "id": "79e63aa2-313b-4c9e-bd95-203e27cf0b4f",
            "Index": 38,
            "Name": "Broker3",
            "ParentIndex": 37,
            "createdAt": 1534831895525,
            "updatedAt": 1534831895525
        },
        {
            "id": "7b0a6a7c-1e8c-474a-8dac-cbd376dbf306",
            "Index": 19,
            "Name": "Consumer Type",
            "ParentIndex": 18,
            "createdAt": 1534831325808,
            "updatedAt": 1534831325808
        },
        {
            "id": "7da52cb6-1695-4b47-82c0-64a580e6f0d5",
            "Index": 57,
            "Name": "Production Type",
            "ParentIndex": 54,
            "createdAt": 1534832531166,
            "updatedAt": 1534832531166
        },
        {
            "id": "81e33033-f3eb-493d-9711-e909131f4f35",
            "Index": 60,
            "Name": "Consumer Type",
            "ParentIndex": 54,
            "createdAt": 1534832604753,
            "updatedAt": 1534832604753
        },
        {
            "id": "84837063-22b5-4831-bf12-9655ce467a11",
            "Index": 65,
            "Name": "Production 4",
            "ParentIndex": 63,
            "createdAt": 1534832753124,
            "updatedAt": 1534832753124
        },
        {
            "id": "8b3b9d23-9c8d-4778-9756-1887fdc12265",
            "Index": 49,
            "Name": "Certificate Analysis",
            "ParentIndex": 47,
            "createdAt": 1534832342911,
            "updatedAt": 1534832342911
        },
        {
            "id": "028c0205-8f6d-4521-a323-600f0de09d96",
            "Index": 8,
            "Name": "Production5",
            "ParentIndex": 7,
            "createdAt": 1534830812529,
            "updatedAt": 1534830812529
        },
        {
            "id": "90a31909-29bd-4b78-b65b-db62da60b45d",
            "Index": 35,
            "Name": "Certificate1",
            "ParentIndex": 31,
            "createdAt": 1534831809959,
            "updatedAt": 1534831809959
        },
        {
            "id": "94ccb1b3-fac1-4a71-b479-a06d395a0e21",
            "Index": 26,
            "Name": "Production1",
            "ParentIndex": 25,
            "createdAt": 1534831523554,
            "updatedAt": 1534831523554
        },
        {
            "id": "95c40de5-3392-4593-9acb-e37547331dac",
            "Index": 36,
            "Name": "Certificate2",
            "ParentIndex": 31,
            "createdAt": 1534831832798,
            "updatedAt": 1534831832798
        },
        {
            "id": "9634fb93-3117-4468-ab6c-0dbb3acc21fe",
            "Index": 9,
            "Name": "Price Table",
            "ParentIndex": 7,
            "createdAt": 1534830834324,
            "updatedAt": 1534830834324
        },
        {
            "id": "9989cc37-3c5d-4e67-95c3-56c5a01fcc81",
            "Index": 17,
            "Name": "Consumer",
            "ParentIndex": 0,
            "createdAt": 1534831293228,
            "updatedAt": 1534831293228
        },
        {
            "id": "9d157304-2319-4524-a84f-56396762c947",
            "Index": 69,
            "Name": "Consumer 4",
            "ParentIndex": 67,
            "createdAt": 1534832853609,
            "updatedAt": 1534832853609
        },
        {
            "id": "a6cc12ce-e377-4d59-801d-087b2ab9fbcb",
            "Index": 68,
            "Name": "Log",
            "ParentIndex": 67,
            "createdAt": 1534832840939,
            "updatedAt": 1534832840939
        },
        {
            "id": "ad226d0b-a399-465f-a6f4-8bb5e2c117ba",
            "Index": 42,
            "Name": "Contract",
            "ParentIndex": 39,
            "createdAt": 1534832035792,
            "updatedAt": 1534832035792
        }
    ]



    modeloTreeMenu.setData({
      "children": neptune.Utils.convertFlatToNested(treeData, "Index", "ParentIndex")
    });



}
