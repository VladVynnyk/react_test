import {
    MOBILE_SCREEN_SIZE,
    TABLET_SCREEN_SIZE,
    LAPTOP_SCREEN_SIZE,
    DESKTOP_SCREEN_SIZE,

} from "../constants/screenConstants";

export const screenSizeReducer = (state={
    mobileScreenData:{users:[
        {
            username:'Salvador Stewart Flynn Thomas Salva...',
            description: "Leading specialist of the department a...",
            email: 'JeromeKlarkaJeromeKlarka19233623...',
            phone:'+38 (098) 278 76 24'
        },
        {
            username:'Takamaru Ayako Jurrien',
            description: "Lead independent Director",
            email: 'Takamuru@gmail.com',
            phone:'+38 (098) 235 44 24'
        },
        {
            username:'Ilya',
            description: "Co-Founder and CEO",
            email: 'Ilya_founder@gmail.com',
            phone:'+38 (098) 235 44 24'
        },
        {
            username:'Alexandre',
            description: "Lead Independent Director",
            email: 'Alexandr_develop@gmail.com',
            phone:'+38 (098) 178 44 24'
        },
        {
            username:'Winny',
            description: "Former Senior Director",
            email: 'Winny_develop@gmail.com',
            phone:'+38 (098) 278 22 88'
        },
        {
            username:'Simon',
            description: "President of Commerce",
            email: 'Simon@gmail.com',
            phone:'+38 (098) 278 44 00'
        },
    ]}, tabletScreenData: {
        users:[
            {
                username:'Salvador Stewart Flynn Thomas Salva...',
                description: "Leading specialist of the department of c...",
                email: 'JeromeKlarkaJeromeKlarka1923362362...',
                phone:'+38 (098) 278 76 24'
            },
            {
                username:'Takamaru Ayako Jurrien',
                description: "Lead independent Director",
                email: 'Takamuru@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Ilya',
                description: "Co-Founder and CEO",
                email: 'Ilya_founder@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Alexandre',
                description: "Lead Independent Director",
                email: 'Alexandr_develop@gmail.com',
                phone:'+38 (098) 178 44 24'
            },
            {
                username:'Winny',
                description: "Former Senior Director",
                email: 'Winny_develop@gmail.com',
                phone:'+38 (098) 278 22 88'
            },
            {
                username:'Simon',
                description: "President of Commerce",
                email: 'Simon@gmail.com',
                phone:'+38 (098) 278 44 00'
            },
        ]}, laptopScreenData: {users:[
            {
                username:'Salvador Stewart Flynn Thomas...',
                description: "Frontend Developer Frontend ...",
                email: 'frontend_develop@gmail.com',
                phone:'+38 (098) 278 44 24'
            },
            {
                username:'Takamaru Ayako Jurrien',
                description: "Lead independent Director",
                email: 'Takamuru@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Ilya',
                description: "Co-Founder and CEO",
                email: 'Ilya_founder@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Alexandre',
                description: "Lead Independent Director",
                email: 'Alexandr_develop@gmail.com',
                phone:'+38 (098) 178 44 24'
            },
            {
                username:'Winny',
                description: "Former Senior Director",
                email: 'Winny_develop@gmail.com',
                phone:'+38 (098) 278 22 88'
            },
            {
                username:'Simon',
                description: "President of Commerce",
                email: 'Simon@gmail.com',
                phone:'+38 (098) 278 44 00'
            },
        ]}, desktopScreenData: {users:[
            {
                username:'Salvador Stewart Flynn Thomas Salva Salve...',
                description: "Leading specialist of the department of cent...",
                email: 'frontend_develop@gmail.com',
                phone:'+38 (098) 278 44 24'
            },
            {
                username:'Takamaru Ayako Jurrien',
                description: "Lead independent Director",
                email: 'Takamuru@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Ilya',
                description: "Co-Founder and CEO",
                email: 'Ilya_founder@gmail.com',
                phone:'+38 (098) 235 44 24'
            },
            {
                username:'Alexandre',
                description: "Lead Independent Director",
                email: 'Alexandr_develop@gmail.com',
                phone:'+38 (098) 178 44 24'
            },
            {
                username:'Winny',
                description: "Former Senior Director",
                email: 'Winny_develop@gmail.com',
                phone:'+38 (098) 278 22 88'
            },
            {
                username:'Simon',
                description: "President of Commerce",
                email: 'Simon@gmail.com',
                phone:'+38 (098) 278 44 00'
            },
        ]}}, action) => {
    switch(action.type){
        case MOBILE_SCREEN_SIZE:
            /*return state.mobileScreenData*/
            return {mobileScreenData: {}}
        case TABLET_SCREEN_SIZE:
            return state.tabletScreenData
        case LAPTOP_SCREEN_SIZE:
            return state.laptopScreenData
        case DESKTOP_SCREEN_SIZE:
            return state.desktopScreenData
        default:
            return state
    }
}