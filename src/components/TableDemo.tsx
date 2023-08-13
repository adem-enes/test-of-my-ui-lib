import React from "react";
import { Input, Table, tableHeaders } from "../my-ui-lib/components";

const headers: tableHeaders[] = [
    {
        name: "#",
        value: "id",
    },
    {
        name: "Name",
        value: "name",
    },
    {
        name: "Last Name",
        value: "father.surname",
    },
    {
        name: "Gender",
        value: "gender",
    },
    {
        name: "Email",
        value: "email",
    },
    {
        name: "Phone",
        value: "phone",
    },
    {
        name: "Age",
        value: "age",
    },
    {
        name: "Balance",
        value: "balance",
    },
    {
        name: "Address",
        value: "address",
    },
    {
        name: "About",
        value: "about",
    },
    {
        name: "Registered",
        value: "registered",
        type: (date) => new Date(date.split("T")[0])
            .toLocaleString("en-EN", { year: "numeric", month: "short", day: "2-digit" })
    },
    {
        name: "Picture",
        value: "picture",
        align: "center",
        type: (src) => <img src={src} alt={src} />
    },
];

const TableDemo = () => {

    return <div style={{ width: "90%" }}>
        <Table headers={headers} items={people} searchable caption="Test Test Test" />
    </div>;
};

export default TableDemo;

const people = [
    {
        "id": "64d14b1014f2b1f7fed991ed",
        "balance": "$1,413.15",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Stone Tran",
        "gender": "male",
        "email": "stonetran@aclima.com",
        "phone": "+1 (983) 428-2048",
        "address": "591 Hendrickson Street, Eagletown, Federated States Of Micronesia, 8318",
        "about": "Occaecat irure magna aute ut. Culpa ad elit aliqua do nisi nulla in proident non est labore reprehenderit. Laborum culpa exercitation ut non. Consequat sunt voluptate reprehenderit adipisicing in enim incididunt ad est id. Laboris ad labore aliquip fugiat amet cupidatat ipsum adipisicing adipisicing sit. Adipisicing et magna voluptate enim incididunt pariatur laboris velit.\r\n",
        "registered": "2015-02-01T06:54:28 -02:00",
        "father": {
            "name": "Angeline",
            "surname": "Nielsen"
        }
    },
    {
        "id": "64d14b104c2413917e661da2",
        "balance": "$3,922.20",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Sophia Dennis",
        "gender": "female",
        "email": "sophiadennis@aclima.com",
        "phone": "+1 (896) 414-3685",
        "address": "636 Kossuth Place, Kylertown, Idaho, 7991",
        "about": "Cillum anim enim laboris labore exercitation reprehenderit et incididunt deserunt magna. Do non mollit do magna velit occaecat ipsum do. Aliquip sit officia ad adipisicing labore do aute enim.\r\n",
        "registered": "2016-01-03T12:58:57 -02:00",
        "father": {
            "name": "Brown",
            "surname": "Jimenez"
        }
    },
    {
        "id": "64d14b10900104696c781432",
        "balance": "$2,460.53",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Hart Wiggins",
        "gender": "male",
        "email": "hartwiggins@aclima.com",
        "phone": "+1 (902) 456-2992",
        "address": "477 Just Court, Oley, Texas, 2209",
        "about": "Minim ad est fugiat fugiat magna id officia consectetur labore exercitation veniam deserunt excepteur consectetur. Ad amet magna sunt commodo anim anim adipisicing enim ut laboris minim irure. Ea aute aliqua mollit labore voluptate officia fugiat do. Elit irure sint sit esse amet labore eiusmod cupidatat proident commodo. Eu nostrud qui proident sit anim sunt do velit cillum cupidatat duis id irure. Dolor adipisicing labore deserunt exercitation.\r\n",
        "registered": "2020-09-07T02:11:41 -03:00",
        "father": {
            "name": "Jeannette",
            "surname": "Witt"
        }
    },
    {
        "id": "64d14b100a70b5f07f2f328c",
        "balance": "$2,979.07",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Howe Hurst",
        "gender": "male",
        "email": "howehurst@aclima.com",
        "phone": "+1 (947) 597-2273",
        "address": "150 Stillwell Avenue, Winston, Missouri, 976",
        "about": "Veniam cupidatat dolore veniam ut proident ut tempor nostrud veniam. Et aliqua esse nostrud fugiat labore pariatur eu consequat cillum voluptate aute occaecat. Aliquip eu magna aute anim fugiat nostrud irure proident incididunt do elit. Id ullamco proident laboris fugiat. Irure adipisicing veniam pariatur deserunt irure ipsum.\r\n",
        "registered": "2015-02-25T12:56:29 -02:00",
        "father": {
            "name": "Anthony",
            "surname": "Booker"
        }
    },
    {
        "id": "64d14b100a3066b5dff2a828",
        "balance": "$2,851.08",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Ora Weber",
        "gender": "female",
        "email": "oraweber@aclima.com",
        "phone": "+1 (914) 585-3150",
        "address": "457 Louise Terrace, Marysville, Kentucky, 1930",
        "about": "Nostrud aute exercitation pariatur cillum ex aute. Incididunt enim aliqua ea exercitation commodo laborum voluptate Lorem aliqua aliquip commodo anim. Ex occaecat deserunt voluptate eu minim aute esse eu cillum irure pariatur nulla officia tempor. Enim enim amet ad laborum veniam irure. Velit aute ipsum commodo ipsum anim ipsum enim.\r\n",
        "registered": "2015-02-24T12:06:55 -02:00",
        "father": {
            "name": "Wiggins",
            "surname": "Vasquez"
        }
    },
    {
        "id": "64d14b102369e8616074ef1d",
        "balance": "$3,777.64",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Margarita Gibbs",
        "gender": "female",
        "email": "margaritagibbs@aclima.com",
        "phone": "+1 (876) 407-3159",
        "address": "774 Cumberland Street, Manchester, Connecticut, 5486",
        "about": "Sit pariatur amet labore sunt minim tempor non sint. Deserunt qui sunt adipisicing elit. Fugiat tempor in Lorem labore velit eiusmod et consequat dolore ullamco non dolore sint. Reprehenderit irure elit ullamco qui ea culpa. Ex pariatur magna reprehenderit ad est laboris cillum commodo. Magna eu est duis esse Lorem fugiat nisi est Lorem.\r\n",
        "registered": "2020-12-16T09:43:32 -03:00",
        "father": {
            "name": "Dominique",
            "surname": "Harris"
        }
    }
]