import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {screenSizeReducer} from "./reducers/screenReducers";
import {positionsReducer, registerReducer, userListReducer} from "./reducers/requestsReducers";

let initialState = { /*mobileScreenData:{
    users:[
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
    ]
    },
    tabletScreenData:{
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
        ]
    },
    laptopScreenData:{
        users:[
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
        ]
    },
    desktopScreenData:{
        users:[
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
        ]
    },*/}
const reducer = (combineReducers({
    screenReducer:screenSizeReducer,
    usersReducer: userListReducer,
    positionsReducer: positionsReducer,
    registerReducer: registerReducer,
}))

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;