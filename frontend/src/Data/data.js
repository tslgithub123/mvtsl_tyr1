export const userMenu = [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house",
    },

];

//admin
// export const adminMenu = [
//     {
//         name: "Home",
//         path: "/",
//         icon: "fa-solid fa-house",
//     },
//     {
//         name: "Users",
//         path: "/admin/users",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "10 Lakh+ Popoulation",
//         path: "/admin/TenLakhPlusPopulation",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "3-10Lakh Population",
//         path: "/admin/ThreeToTenLakhPopulation",
//         icon: "fa-solid fa-users",
//     },
//     {
//     name: "1-3Lakh Population",
//     path: "/admin/OneToThreeLakhPopulation",
//     icon: "fa-solid fa-users",
// },
// {
//     name: "50k-1Lakh Population",
//     path: "/admin/FiftyKToOneLakhPopulation",
//     icon: "fa-solid fa-users",
// },
// {
//     name: "25k-50K Population",
//     path: "/admin/TwentyFiveKToFiftyKPopulation",
//     icon: "fa-solid fa-users",
// },
// {
//     name: "15k-25K Population",
//     path: "/admin/FifteenKToTwentyFiveKPopulation",
//     icon: "fa-solid fa-users",
// },
// {
//     name: "<15K Population",
//     path: "/admin/LessThanFifteenKPopulation",
//     icon: "fa-solid fa-users",
// },

    // {
    //     name: "10K+ Population",
    //     path: "/admin/TenKPlusPopulation",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "5K-10K Population",
    //     path: "/admin/FiveKToTenKPopulation",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "2.5K-5K Population",
    //     path: "/admin/TwoPointFiveToFiveKPopulation",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "1.5K-2.5K Population",
    //     path: "/admin/OnePointFiveKToTwoPointFiveKPopulation",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "<1.5K Population",
    //     path: "/admin/LessThanOnePointFiveKPopulation",
    //     icon: "fa-solid fa-users",
    // },



    // {
    //     name: "C 10Lakh+ ",
    //     path: "/admin/Cumulitives/Amrut/TenLakhPlusPopulationC",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "C 3-10Lakh+ ",
    //     path: "/admin/Cumulitives/Amrut/ThreeToTenLakhPopulationC",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "C 1-3Lakh+ ",
    //     path: "/admin/Cumulitives/Amrut/OneToThreeLakhPopulationC",
    //     icon: "fa-solid fa-users",
    // },


    // {
    //     name: "C 50K-1 Lakh+ ",
    //     path: "/admin/Cumulitives/Urban/FiftyKToOneLakhPopulationC",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "C 25k-50K ",
    //     path: "/admin/Cumulitives/Urban/TwentyFiveKToFiftyKPopulationC",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "C 15k-25K ",
    //     path: "/admin/Cumulitives/Urban/FifteenKToTwentyFiveKPopulationC",
    //     icon: "fa-solid fa-users",
    // },
    // {
    //     name: "C <15K ",
    //     path: "/admin/Cumulitives/Urban/LessThanFifteenKPopulationC",
    //     icon: "fa-solid fa-users",
    // },


//     {
//         name: "C 10K + R",
//         path: "/admin/Cumulitives/Rural/TenKPlusPopulationC",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "C 5k-10K R",
//         path: "/admin/Cumulitives/Rural/FiveKToTenKPopulationC",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "C 2.5k-5K R",
//         path: "/admin/Cumulitives/Rural/TwoPointFiveToFivekPopulationC",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "C 1.5k-2.5K R",
//         path: "/admin/Cumulitives/Rural/OnePointFiveKToTwoPointFiveKPopulationC",
//         icon: "fa-solid fa-users",
//     },
//     {
//         name: "C <1.5K R",
//         path: "/admin/Cumulitives/Rural/LessThanOnePointFiveKPopulationC",
//         icon: "fa-solid fa-users",
//     },
// ];



export const adminMenu = [
    {
        name: "Home",
        path: "/",
        icon: "fa-solid fa-house",
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: "fa-solid fa-users",
    },
    {
        name: "Amrut",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "10 Lakh+ Population",
                path: "/admin/TenLakhPlusPopulation",
            },
            {
                name: "3-10 Lakh Population",
                path: "/admin/ThreeToTenLakhPopulation",
            },
            {
                name: "1-3 Lakh Population",
                path: "/admin/OneToThreeLakhPopulation",
            },
        ]
    },


    {
        name: "Urban",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "50k-1Lakh Population",
                path: "/admin/FiftyKToOneLakhPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "25k-50K Population",
                path: "/admin/TwentyFiveKToFiftyKPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "15k-25K Population",
                path: "/admin/FifteenKToTwentyFiveKPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "<15K Population",
                path: "/admin/LessThanFifteenKPopulation",
                icon: "fa-solid fa-users",
            },
        ]
    },



    {
        name: "Rural",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "10K+ Population",
                path: "/admin/TenKPlusPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "5K-10K Population",
                path: "/admin/FiveKToTenKPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "2.5K-5K Population",
                path: "/admin/TwoPointFiveToFiveKPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "1.5K-2.5K Population",
                path: "/admin/OnePointFiveKToTwoPointFiveKPopulation",
                icon: "fa-solid fa-users",
            },
            {
                name: "<1.5K Population",
                path: "/admin/LessThanOnePointFiveKPopulation",
                icon: "fa-solid fa-users",
            },
        
        ]
    },



    {
        name: "Amrut Cumulative",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "C 10Lakh+ ",
                path: "/admin/Cumulitives/Amrut/TenLakhPlusPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 3-10Lakh+ ",
                path: "/admin/Cumulitives/Amrut/ThreeToTenLakhPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 1-3Lakh+ ",
                path: "/admin/Cumulitives/Amrut/OneToThreeLakhPopulationC",
                icon: "fa-solid fa-users",
            },
        ]
    },


    {
        name: "Urban Cumulative",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "C 50K-1 Lakh+ ",
                path: "/admin/Cumulitives/Urban/FiftyKToOneLakhPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 25k-50K ",
                path: "/admin/Cumulitives/Urban/TwentyFiveKToFiftyKPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 15k-25K ",
                path: "/admin/Cumulitives/Urban/FifteenKToTwentyFiveKPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C <15K ",
                path: "/admin/Cumulitives/Urban/LessThanFifteenKPopulationC",
                icon: "fa-solid fa-users",
            },
        ]
    },


    {
        name: "Rural Cumulative",
        icon: "fa-solid fa-users",
        submenu: [
            {
                name: "C 10K +",
                path: "/admin/Cumulitives/Rural/TenKPlusPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 5k-10K",
                path: "/admin/Cumulitives/Rural/FiveKToTenKPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 2.5k-5K",
                path: "/admin/Cumulitives/Rural/TwoPointFiveToFivekPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C 1.5k-2.5K",
                path: "/admin/Cumulitives/Rural/OnePointFiveKToTwoPointFiveKPopulationC",
                icon: "fa-solid fa-users",
            },
            {
                name: "C <1.5K",
                path: "/admin/Cumulitives/Rural/LessThanOnePointFiveKPopulationC",
                icon: "fa-solid fa-users",
            },
        ]
    },
];
