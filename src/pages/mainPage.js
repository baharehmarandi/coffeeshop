import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import Header from "../shared/header";
import MenuItemHorizontalCard from "../components/menuItems/menuItemHorizontalCard";
import Populer from "../components/populer/populer";
import 'swiper/css';
import "./mainPage.css"

const MainPage = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tabList = [
        {id: 0,
         name: "Kahveler",
         items:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
         ],
            populer:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ]},

        {id: 1,
        name: "Tatlilar",
            items:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ],
            populer:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ]
        },
        {id: 2, name: "Başlangiçlar",
            items:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ],
            populer:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ]},
        {id: 3, name: "Salatlar",
            items:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ],
            populer:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ]},
        {id: 4, name: "Pizza",
            items:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ],
            populer:[
                {id:0, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:1, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:2, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:3, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
                {id:4, image:"/assets/coffee.jpg", title:"MACCHIATO", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", fee:"35₺"},
            ]}
    ]

    const activeTabFunc = async (id) =>{
        await setActiveTab(id)
    }

    const hideTab = (status) => {
        if (status) {
            document.getElementById('tab').className = 'menu-swiper hidden'
        } else {
            document.getElementById('tab').className = 'menu-swiper'
        }
    }

    return(
        <div className="container main">
            <Header/>
            <Swiper
                id="tab"
                className="menu-swiper"
                spaceBetween={16}
                slidesPerView={"auto"}
            >
                {tabList? tabList.map((list)=>
                     <SwiperSlide
                         onClick={() => activeTabFunc(list.id)}
                         key={list.id}
                        >
                         <span className={activeTab === list.id ? 'swiper-slide-active' : 'swiper-slide'}>{list.name}</span>
                     </SwiperSlide>
                ) : null}
            </Swiper>
            {tabList? tabList.map((list)=>
                <div className={activeTab === list.id ? 'current-position' : 'animation-position'}>
                    <MenuItemHorizontalCard items={tabList[activeTab].items} index={list.id} tab={hideTab}/>
                    <Populer items={tabList[activeTab].populer}/>
                </div>
            ) : null}

        </div>
    )
}

export default MainPage