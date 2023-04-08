import {Swiper, SwiperSlide} from "swiper/react";
import { useState} from "react";
import Header from "../shared/header";
import MenuItemHorizontalCard from "../components/menuItems/menuItemHorizontalCard";
import Populer from "../components/populer/populer";
import {useSelector} from "react-redux";
import 'swiper/css';
import "./mainPage.css"

const MainPage = () => {
    const newLang = useSelector((state) => state.language.lang);

    const [activeTab, setActiveTab] = useState(0);
    const [hide, setHide] = useState(false);

    const tabList = {
        tr:[
            {id: 0,
                name: "KAHVELER",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"MACCHIATO", description:"Double espresso üzerine süt köpüğü", fee:"55₺"},
                    {id:1, image:"/assets/AMERICANO.png", title:"AMERICANO", description:"Double espresso üzerine su", fee:"60₺"},
                    {id:2, image:"/assets/ESPRESSO.png", title:"ESPRESSO", description:"Double espresso üzerine süt köpüğü Double espresso üzerine süt köpüğü", fee:"40₺"},
                    {id:3, image:"/assets/CORTADO.png", title:"CORTADO", description:"espresso miktarında mikro köpüklü süt", fee:"60₺"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"double espresso üzerine mikro köpük süt", fee:"60₺"},
                    {id:5, image:"/assets/CAPPUCINO.png", title:"CAPPUCINO", description:"double espresso üzerine bol köpüklü süt", fee:"60₺"},
                    {id:6, image:"/assets/FLATWHITE.png", title:"FLAT WHITE", description:"double shot espresso üzerine mikro köpüklü süt", fee:"60₺"},
                    {id:7, image:"/assets/FLATWHITE.png", title:"DOPPIO", description:"Double shot espresso üzerine Double espresso üzerine süt köpüğü", fee:"50₺"},
                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"MOCHA", description:"Çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"35₺"},
                    {id:1, image:"/assets/RASPBERRYMOCHA.png", title:"RASPBERRY MOCHA", description:"Çikolata,frambuaz şurubu üzerine double shot espresso ve mikro ", fee:"35₺"},
                    {id:2, image:"/assets/ELEGENTMOCHA.png", title:"ELEGENT MOCHA", description:"Çikolata, karamel,fındık şurubu üzerine double shot espresso", fee:"35₺"},
                    {id:3, image:"/assets/CAFEMIEL.png", title:"CAFE MIEL", description:"Bal, tarçın üzerine double shot espresso ve mikro köpük süt ", fee:"35₺"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"Karamel-fındık-vanilya-bal kabağı seçtiğiniz şurup üzerine double", fee:"35₺"},

                ]},
            {id: 1,
                name: "AROMALI ESPRESSO",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"LATTE", description:"karamel-fındık-vanilya-bal kabağı seçtiğiniz şurup üzerine double shot espresso ve mikro köpük süt", fee:"70₺"},
                    {id:1, image:"/assets/AMERICANO.png", title:"MOCHA", description:"çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"75₺"},
                    {id:2, image:"/assets/AMERICANO.png", title:"WHITE MOCHA", description:"beyaz çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"75₺"},
                    {id:3, image:"/assets/AMERICANO.png", title:"ZEBRA MOCHA", description:"çikolata sos, beyaz çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"80₺"},
                    {id:4, image:"/assets/AMERICANO.png", title:"CHILLI MOCHA", description:"çikolata, karamel , tabasco sos üzerine double shot espresso ve mikro köpük süt", fee:"80₺"},
                    {id:5, image:"/assets/AMERICANO.png", title:"RASPBERRY MOCHA", description:"çikolata,frambuaz şurubu üzerine double shot espresso ve mikro köpük süt", fee:"85₺"},
                    {id:6, image:"/assets/AMERICANO.png", title:"ELEGENT MOCHA", description:"çikolata, karamel,fındık şurubu üzerine double shot espresso ve mikro köpük süt", fee:"85₺"},
                    {id:7, image:"/assets/AMERICANO.png", title:"CAFE MIEL", description:" bal,tarçın üzerine double shot espresso ve mikro köpük süt", fee:"80₺"},
                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"MOCHA", description:"Çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"35₺"},
                    {id:1, image:"/assets/RASPBERRYMOCHA.png", title:"RASPBERRY MOCHA", description:"Çikolata,frambuaz şurubu üzerine double shot espresso ve mikro ", fee:"35₺"},
                    {id:2, image:"/assets/ELEGENTMOCHA.png", title:"ELEGENT MOCHA", description:"Çikolata, karamel,fındık şurubu üzerine double shot espresso", fee:"35₺"},
                    {id:3, image:"/assets/CAFEMIEL.png", title:"CAFE MIEL", description:"Bal, tarçın üzerine double shot espresso ve mikro köpük süt ", fee:"35₺"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"Karamel-fındık-vanilya-bal kabağı seçtiğiniz şurup üzerine double", fee:"35₺"},

                ]},
            {id: 2,
                name: "BREW BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FİLTRE KAHVE", description:"", fee:"45₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"TÜRK KAHVESİ", description:"", fee:"40₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"DOUBLE TÜRK KAHVESİ", description:"", fee:"50₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"SÜTLÜ TÜRK KAHVESİ", description:"", fee:"55₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"RED EYE ", description:"", fee:"80₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 3,
                name: "ICE ESPRESSO BAZLI",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ICE ESPRESSO", description:"Double shot espresso üzerine buz", fee:"45₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"ICE AMERICANO", description:"Double espresso üzerine su ve buz", fee:"50₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"ICE LATTE ", description:"Double espresso üzerine süt ve buz", fee:"65₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 4,
                name: "FRAPPE",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ÇİKOLATA", description:"", fee:"80₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"VANİLYA", description:"", fee:"80₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"KARAMEL", description:"", fee:"80₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"ÇİKOLATA NANE", description:"", fee:"80₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"ÇİKOLATA OREO", description:"", fee:"80₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"BEYAZ ÇİKOLATA", description:"", fee:"80₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 5,
                name: "ICE ESPRESSO AROMALI",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ICE LATTE", description:"karemel,fındık veya balkabağı aromalı,buz,süt, double shot espresso", fee:"75₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"ICE MOCHA", description:"çikolata sos,buz,süt, double shot espresso", fee:"85₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"ICE WHITE MOCHA", description:"beyaz çikolata sos ,buz, süt, double shot espresso", fee:"80₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"ZEBRA MOCHA", description:"çikolata ve beyaz çikolata sos, buz,süt, double shot espresso", fee:"85₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"ICE CHILLI MOCHA", description:"çikolata,karamel,tabasco sos,buz,süt, double shot espresso", fee:"85₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"ICE CINNAMON MOCHA", description:"bitter çikolata,bal kabağı,tarçın,buz,süt, double shot espresso", fee:"95₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"KAKTÜS MOCHA", description:"özel hazırlanmış sos,frambuaz,buz,süt, double shot espresso", fee:"105₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"ICE HONEY", description:" karamel,vanilya,tarçın,bal,buz,süt, double shot espresso", fee:"105₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 6,
                name: "ICE BREW BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ICE FİLTRE", description:"", fee:"50₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 7,
                name: "HOT BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SALEP", description:"", fee:"50₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"SICAK ÇİKOLATA", description:"", fee:"50₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"CHAI TEA LATTE", description:"", fee:"55₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 8,
                name: "ÇAYLAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"BARDAK ÇAY", description:"", fee:"25₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"FİNCAN ÇAY", description:"", fee:"30₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"YEŞİL ÇAY", description:"", fee:"45₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"IHLAMUR", description:"", fee:"45₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"KUŞBURNU ÇAYI", description:"", fee:"55₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"KIŞ ÇAYI", description:"", fee:"55₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 9,
                name: "SERİNLETİCİLER",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"BERRY HIBISCUS", description:"Hazırlanmış öz,frambuaz şurubu,esmer şeker şurubu,buz", fee:"65₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"MANGO", description:"mango püresi,silme buz,su", fee:"55₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"GINGER ALE", description:"limon suyu,portakal suyu,zencefil özü,esmer şeker şurubu,buz", fee:"55₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"TAZE PORTAKAL SUYU", description:"", fee:"50₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"EV YAPIMI LİMONATA", description:"", fee:"50₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"CHURCHILL", description:"limon,maden suyu,tuz,buz", fee:"40₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 10,
                name: "MEŞRUBATLAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"COCA COLA", description:"", fee:"30₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"COCA COLA ZERO", description:"", fee:"30₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"FANTA", description:"", fee:"30₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"SPRITE", description:"", fee:"30₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"ICE TEA ŞEFTALİ", description:"", fee:"30₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"ICE TEA LİMON", description:"", fee:"30₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MADEN SUYU", description:"", fee:"25₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"SU", description:"", fee:"20₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 11,
                name: "KAHVALTILAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SERPME KAHVALTI", description:"minimum iki kişilik - siyah zeytin,yeşil zeytin,tereyağ,beyaz peynir,kaşar peyniri,örgü peyniri,reçel,bal,kaymak,domates,salatalık,sivri biber,simit,pişi,sahanda yumurta, sahanda sucuk", fee:"360₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"GELENEKSEL KARS KAHVALTISI", description:"minimum iki kişilik - yeşil zeytin,siyah zeytin,beyaz çeçil peyniri,göbek kaşarı,eski kaşar,köy tereyağı,köy kaymağı,kars balı,reçel,umaç helvası,tatlı kete,tuzlu kete,simit, pişi,sahanda kavurmalı yumurta", fee:"420₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"KAHVALTI TABAĞI", description:"siyah zeytin, yeşil zeytin, tereyağ,beyaz peynir,reçel, kaşar peyniri,domates, salatalık,tek göz yumurta", fee:"110₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"EGGS BENEDICT", description:"ekşi mayalı ekmek, dana jambon,iki poşe yumurta, hollandez sos, akdeniz yeşilliği ile", fee:"95₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"CROQUE MADAME", description:"tam buğday ekmeği, tereyağı, dana jambon,hardal,kaşar peyniri,göz yumurta,akdeniz yeşilliği ile", fee:"90₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"CROQUE MONSIEUR", description:"tost ekmeği, tereyağı,dana jambon,kaşar peyniri,süt ile soslanmış kaşar peyniri, akdeniz yeşilliği ile", fee:"90₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"FRENCH TOAST", description:"bal,süt ve tarçın aroması ile hazırlanmış yumurtalı ekmek", fee:"80₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"KAŞARLI TOST", description:"tost ekmeği,kaşar peyniri,dip sos", fee:"75₺"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"KAŞARLI SUCUKLU TOST", description:"tost ekmeği,kaşar peyniri,dana sucuk,dip sos", fee:"80₺"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"ÇİKOLATALI KRUVASAN", description:"", fee:"35₺"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"SADE KRUVASAN", description:"", fee:"30₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 12,
                name: "YUMURTA LEZZETLERİ",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SAHANDA YUMURTA", description:"", fee:"50₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"OMLET", description:"", fee:"50₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"ÇIRPILMIŞ YUMURTA", description:"", fee:"50₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"HAŞLANMIŞ YUMURTA (tek adet)", description:"", fee:"15₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 13,
                name: "MENEMEN LEZZETLERİ",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SADE MENEMEN", description:"", fee:"₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"SOĞANLI MENEMEN", description:"", fee:"₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"KAŞARLI MENEMEN", description:"", fee:"₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"KAVURMALI MENEMEN", description:"", fee:"₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 14,
                name: "BAŞLANGIÇLAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"GÜNÜN ÇORBASI", description:"", fee:"55₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"SARIMSAKLI EKMEK", description:"", fee:"55₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"PARMAK PATATES KIZARTMASI", description:"200 gr", fee:"50₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"ELMA DİLİM PATATES KIZARTMASI", description:"200 gr", fee:"50₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"SOSİSLİ PATATES SEPETİ", description:"Dört adet sosis,200 gr", fee:"55₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"SOĞAN HALKASI ", description:"altı adet", fee:"40₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MOZZARELLA STICK", description:"altı adet", fee:"60₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"COMBO SEPETİ", description:"Parmak patates kızartması, elma dilim patates kızartması, mozarella stick,soğan halkası, sosis", fee:"85₺"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"EFSANE FRANKFURTER SOSİS", description:"Tırtıklı patates , iki adet Frankfurter sosis ,180 gr", fee:"160₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 15,
                name: "SALATALAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"TAVUKLU SEZAR SALATA", description:"110 gr marine ızgara tavuk göğsü, göbek marul, sezar sos, özel soslanmış kruton", fee:"120₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"SEZAR SALATA ", description:"göbek marul, sezar sos, özel soslanmış kruton", fee:"100₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"BAHÇE SALATASI", description:"akdeniz yeşilliği, dereotu,maydanoz,nane ,çeri domatesi, salatalık, zeytinyağlı limon sos ile", fee:"90₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"TAVUKLU MEKSIKA SALATASI", description:"110 gr ızgara  tavuk, göbek marul, avokado,Meksika fasulyesi,acılı Meksika sos, cheddar peyniri,kuru domates,tane mısır,çörek otu", fee:"120₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"TULUM PEYNIRLI SALATA", description:"taze roka,Erzincan tulum peyniri, göbek marul, nar ekşili vinegret sos,ceviz,çeri domatesi,kurutulmuş yaban mersini,yeşil elma,çörek otu", fee:"100₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"TON BALIKLI SALATA", description:"80 gr ton balığı,tane mısır,kırmızı soğan,akdeniz yeşilliği,göbek marul, ballı  hardal sos, çeri domatesi, kornişon turşu, dereotu", fee:"140₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 16,
                name: "PİZZALAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"MARGHERITA PIZZA", description:"pizza sos, mozarella peyniri, çeri domates,taze fesleğen", fee:"130₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"PIZZA AI CINQUE FORMAGGI", description:"pizza sos,mozzarella,emmental ,gouda, rokfor,parmesan,taze roka, zeytinyağı", fee:"200₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"KARIŞIK PIZZA", description:"pizza sos, mozarella peyniri, sucuk, sosis,jambon, zeytin, mısır,yeşil biber, kırmızı biber, mantar", fee:"150₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"PESTO SOSLU PIZZA", description:"pesto dip sos, mozarella peyniri, mantar, parmesan peyniri,cheddar peyniri", fee:"160₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"SEZAR PIZZA", description:"Pizza sos,mozarella peyniri,marine tavuk parçaları,göbek marul, sezar sos,parmesan peyniri", fee:"150₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"FÜME ETLI PIZZA", description:"pizza sos, mozarella peyniri,füme et , taze roka, parmesan peyniri, zeytinyağı", fee:"180₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"TON BALIKLI PIZZA", description:"pizza sos, mozarella peyniri,ton balığı,kırmızı soğan, mısır,taze roka, limon", fee:"150₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"VEGGIE PIZZA", description:"pizza sos, mozarella peyniri, mantar, çeri domates , yeşil biber, kırmızı biber, mısır, yeşil zeytin,siyah zeytin", fee:"140₺"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"MEXICA PIZZA", description:"pizza sos,bezirgani sos, mozarella peyniri,sucuk,jalapeno biberi, yeşil zeytin,yeşil biber,çeri domates", fee:"150₺"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"HAWAIAN PIZZA", description:"pizza sos, mozarella peyniri,dana jambon,ananas", fee:"150₺"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"JUNIOR PIZZA", description:"pizza sos, mozarella peyniri, sosis,mısır,zeytin", fee:"110₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 17,
                name: "MAKARNALAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FETTUCINI ALFREDO", description:"fettucini makarnası, krema, mantar,tavuk,taze fesleğen,parmesan peyniri", fee:"110₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"MANTARLI TORTELLINI", description:"tortellini makarnası, pesto sos,crema,mantar,parmesan peyniri", fee:"120₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"IZGARA TAVUKLU FETTUCINI ", description:"fettucini makarnası, domates sos,pesto sos, ızgara tavuk, taze fesleğen", fee:"120₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"CASARECCE PESTO ROSSO ", description:"casarecce makarnası, dip sos,tavuk , krema, parmesan peyniri,taze fesleğen, çeri domatesi ile", fee:"120₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"SPAGHETTI BOLOGNESE", description:"spagetti makarnası,bolonez sos, soğan, sarımsak,kıyma", fee:"110₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"PENNE ARRABBIATA", description:"penne makarnası,arabbiata sos, zeytin", fee:"100₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MAC & CHEESE ", description:"pipette makarnası, cheddar sos, krema,kaşar  peyniri,parmesan", fee:"110₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 18,
                name: "TAVA LEZZETLERİ",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"KÖRI SOSLU TAVUK", description:"tavuk parçaları, köri sosu,krema,mantar,yeşil biber,kırmızı biber, çeri           domates", fee:"110₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"KREMALI MANTARLI TAVUK", description:"tavuk parçaları,mantar,krema", fee:"100₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"MEKSIKA SOSLU TAVUK", description:" tavuk parçaları,soğan,domates,mantar,Meksika fasulyesi,yeşil biber,kırmızı biber,meksika sosu", fee:"120₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"TATLI CHILI SOSLU TAVUK", description:"tavuk parçaları,kırmızı biber,yeşil biber,mantar", fee:"125₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 19,
                name: "BURGERLER",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"CHEDDAR BURGER", description:"150 gr köfte , göbek marul, kornişon turşu,domates,halka soğan,ketçap,mayonez, cheddar sos, baharatlı parmak patates ile", fee:"110₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"BBQ BURGER", description:"150 gr köfte,karamelize soğan, BBQ sos, cheddar sos , baharatlı parmak patates ile", fee:"120₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"MEXICA BURGER", description:"150 gr köfte, bezirgani sos, karamelize soğan , jalapone biberi, cheddar sos, baharatlı parmak patates ile", fee:"140₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"FÜME ETLİ BURGER", description:"150 gr köfte, füme et, karamelize soğan, karamelize mantar, cheddar sos,burger sos, , baharatlı parmak patates ile", fee:"160₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"TAVUK BURGER", description:"110 gr marine tavuk göğsü, göbek marul, domates, kornişon turşu,ranch sos, baharatlı parmak patates ile", fee:"100₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"MEKSİKA TAVUK BURGER", description:"110 gr marine tavuk göğsü, bezirgani sos, göbek marul,domates, karamelize soğan, baharatlı parmak patates ile", fee:"105₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"VEGAN BURGER", description:"vegan ekmeği , vegan köfte, göbek marul, domates,turşu,patates kızartması ile", fee:"130₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"ÇOCUK BURGER", description:"iki adet mini burger köftesi,göbek marul,domates,salatalık turşusu,patates kızartması ile", fee:"90₺"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

            {id: 20,
                name: "TATLILAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"KAKTÜS CUP", description:"çikolata sos, vanilyalı dondurma,fındık krokan,muz,krem şanti,rulo kat", fee:"95₺"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"PASTEL DE NATA", description:"dondurma ile", fee:"75₺"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"BEYAZ ORMAN MEYVELİ PASTA", description:"", fee:"85₺"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"FISTIK RÜYASI PASTA", description:"", fee:"85₺"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"TIRAMISU", description:"", fee:"70₺"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"PROFİTEROL PASTA", description:"", fee:"75₺"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"ÇİKOLATALI SUFLE", description:"dondurma ile", fee:"80₺"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"SAN SEBASTIAN ", description:"çikolata sos ile", fee:"85₺"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"CHEESECAKE", description:"limon, frambuaz", fee:"85₺"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"DONUT", description:"", fee:"45₺"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"MUZLU ÇİKOLATALI KREP", description:"iki adet krep", fee:"80₺"},


                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"₺"},

                ]},

        ],

        en:[
            {id: 0,
                name: "coffees",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"MACCHIATO", description:"double espresso on milk foam", fee:"55 TL"},
                    {id:1, image:"/assets/AMERICANO.png", title:"AMERICANO", description:"double espresso on water", fee:"60 TL"},
                    {id:2, image:"/assets/ESPRESSO.png", title:"ESPRESSO", description:"Double espresso üzerine süt köpüğü Double espresso üzerine süt köpüğü", fee:"40 TL"},//اینو ننوشته بودید
                    {id:3, image:"/assets/CORTADO.png", title:"CORTADO", description:"espresso sized micro foam milk", fee:"60 TL"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"double espresso üzerine mikro köpük süt", fee:"60 TL"},//اینم ننوشته بودید
                    {id:5, image:"/assets/CAPPUCINO.png", title:"CAPPUCINO", description:"double espresso on milk foam", fee:"60 TL"},
                    {id:6, image:"/assets/FLATWHITE.png", title:"FLAT WHITE", description:"double shot espresso on milk foam", fee:"60 TL"},
                    {id:7, image:"/assets/FLATWHITE.png", title:"DOPPIO", description:"Double shot espresso üzerine Double espresso üzerine süt köpüğü", fee:"50 TL"},//اینم ننوشته بودید
                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"MOCHA", description:"Çikolata sos üzerine double shot espresso ve mikro köpük süt", fee:"35 TL"},//اینم ننوشته بودید
                    {id:1, image:"/assets/RASPBERRYMOCHA.png", title:"RASPBERRY MOCHA", description:"chocolate,raspberry syrup on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:2, image:"/assets/ELEGENTMOCHA.png", title:"ELEGENT MOCHA", description:"chocolate,caramel,hazelnut on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:3, image:"/assets/CAFEMIEL.png", title:"CAFE MIEL", description:"honey,cinnamon on double shot espresso and micro foam milk ", fee:"35 TL"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"caramel-hazelnut-vanilla-pumpkin spice on syrup double shot espresso and micro foam milk", fee:"35 TL"},

                ]},
            {id: 1,
                name: "AROMALI ESPRESSO",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"LATTE", description:"caramel-hazelnut-vanilla-pumpkin spice on syrup double shot espresso and micro foam milk", fee:"70 TL"},
                    {id:1, image:"/assets/AMERICANO.png", title:"MOCHA", description:"chocolate sauce on double shot espresso and micro foam milk", fee:"75 TL"},
                    {id:2, image:"/assets/AMERICANO.png", title:"WHITE MOCHA", description:"chocolate sauce on double shot espresso and micro foam milk", fee:"75 TL"},
                    {id:3, image:"/assets/AMERICANO.png", title:"ZEBRA MOCHA", description:"white and black chocolate sauce on double shot espresso and micro foam milk", fee:"80 TL"},
                    {id:4, image:"/assets/AMERICANO.png", title:"CHILLI MOCHA", description:"chocolate,caramel,tabasco sauce on double shot espresso and micro foam milk", fee:"80 TL"},
                    {id:5, image:"/assets/AMERICANO.png", title:"RASPBERRY MOCHA", description:"chocolate,raspberry syrup on double shot espresso and micro foam milk", fee:"85 TL"},
                    {id:6, image:"/assets/AMERICANO.png", title:"ELEGENT MOCHA", description:"chocolate,caramel,hazelnut on double shot espresso and micro foam milk", fee:"85 TL"},
                    {id:7, image:"/assets/AMERICANO.png", title:"CAFE MIEL", description:" honey,cinnamon on double shot espresso and micro foam milk", fee:"80 TL"},
                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"MOCHA", description:"chocolate sauce on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:1, image:"/assets/RASPBERRYMOCHA.png", title:"RASPBERRY MOCHA", description:"chocolate,raspberry syrup on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:2, image:"/assets/ELEGENTMOCHA.png", title:"ELEGENT MOCHA", description:"chocolate,caramel,hazelnut on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:3, image:"/assets/CAFEMIEL.png", title:"CAFE MIEL", description:"honey,cinnamon on double shot espresso and micro foam milk", fee:"35 TL"},
                    {id:4, image:"/assets/LATTE.png", title:"LATTE", description:"caramel-hazelnut-vanilla-pumpkin spice on syrup double shot espresso and micro foam milk", fee:"35 TL"},

                ]},
            {id: 2,
                name: "BREW BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FILTER COFFEE", description:"", fee:"45 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"TURKISH COFFEE ", description:"", fee:"40 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"DOUBLE TURKISH COFFEE ", description:"", fee:"50 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"TURKISH COFFEE WITH MILK", description:"", fee:"55 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"RED EYE ", description:"", fee:"80 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 3,
                name: "ICE ESPRESSO BAZLI",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ICE ESPRESSO", description:"Double shot espresso on ice", fee:"45 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"ICE AMERICANO", description:"Double shot espresso on water and ice", fee:"50 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"ICE LATTE ", description:"Double shot espresso on milk and ice", fee:"65 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 4,
                name: "FRAPPE",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"CHOCOLATE", description:"", fee:"80 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"VANILLA", description:"", fee:"80 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"CARAMEL", description:"", fee:"80 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"CHOCOLATE MINT", description:"", fee:"80 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"CHOCOLATE OREO", description:"", fee:"80 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"WHITE CHOCOLATE", description:"", fee:"80 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 5,
                name: "ICE ESPRESSO AROMALI",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"ICE LATTE", description:"caramel,hazelnut or pumpkin spice, ice, milk, double shot espresso", fee:"75 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"ICE MOCHA", description:"chocolate sauce,ice,milk, double shot espresso ", fee:"85 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"ICE WHITE MOCHA", description:"chocolate sauce ,ice,milk, double shot espresso", fee:"80 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"ZEBRA MOCHA", description:"chocolate and white chocolate sauce, ice,milk, double shot espresso", fee:"85 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"ICE CHILLI MOCHA", description:"chocolate,caramel,tabasco sauce,ice,milk, double shot espresso", fee:"85 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"ICE CINNAMON MOCHA", description:"dark chocolate ,pumpkin spice,cinnamon,ice,milk, double shot espresso", fee:"95 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"KAKTÜS MOCHA", description:"special sauce,raspberry ,ice,milk, double shot espresso", fee:"105 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"ICE HONEY", description:"caramel,vanilla,cinnamon,honey, ice,milk, double shot espresso", fee:"105 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 6,
                name: "ICE BREW BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FILTER ICE", description:"", fee:"50 TL"}, //این رو مطمئن نیستم چون ننوشته بودین

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 7,
                name: "HOT BAR",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SALEP", description:"", fee:"50 TL"}, //این رو ننوشتین تغییرش ندادم
                    {id:1, image:"/assets/MACCHIATO.png", title:"HOT CHOCOLATE", description:"", fee:"50 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"CHAI TEA LATTE", description:"", fee:"55 TL"},//این رو ننوشتین تغییرش ندادم

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 8,
                name: "TEAS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"TEA", description:"", fee:"25 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"CUP TEA", description:"", fee:"30 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"GREEN TEA", description:"", fee:"45 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"LINDEN", description:"", fee:"45 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"ROSEHIP TEA", description:"", fee:"55 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"WINTER TEA", description:"", fee:"55 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 9,
                name: "REFRESHENER",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"BERRY HIBISCUS", description:"tea,raspberry syrup,brown sugar syrup,ice", fee:"65 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"MANGO", description:"mango puree,ice,water", fee:"55 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"GINGER ALE", description:"(lemon juice, orange juice,ginger,brown sugar syrup,ice", fee:"55 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"FRESH ORANGE JUICE", description:"", fee:"50 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"HOME-MADE LEMONADE", description:"", fee:"50 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"CHURCHILL", description:"lemon,mineral water,salt,ice", fee:"40 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 10,
                name: "SOFT DRINKS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"COCA COLA", description:"", fee:"30 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"COCA COLA ZERO", description:"", fee:"30 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"FANTA", description:"", fee:"30 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"SPRITE", description:"", fee:"30 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"/ ICE TEA PEACH", description:"", fee:"30 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"ICE TEA LEMON", description:"", fee:"30 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MINERAL WATER", description:"", fee:"25 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"WATER", description:"", fee:"20 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 11,
                name: "BREAKFAST",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"MIXED BREAKFAST", description:"(minimum for two people - black olives, green olives, butter, white cheese, kasar cheese, braided cheese, jam, honey, cream, tomatoes, cucumbers, green peppers, bagel simit,pishi roll, fried eggs, fried shucuk", fee:"360 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"TRADITIONAL KARS BREAKFAST", description:"minimum for two people - green olives, black olives, white chechil cheese, fresh kasar cheese, aged kasar cheese, village butter, village cream,  Kars honey, jam, flour halva, sweet kete, salted kete, bagel simit,pishi roll, fried egg with braised meat", fee:"420 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"BREAKFAST PLATE ", description:"black olives, green olives, butter, white cheese, jam, kasar cheese, tomato, cucumber, one sunny side-up egg", fee:"110 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"EGGS BENEDICT", description:"sourdough bread, beef ham, two poached eggs, hollandaise sauce with mediterranean greens", fee:"95 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"CROQUE MADAME", description:"whole wheat bread, butter, beef ham, mustard, kasar cheese, sunny side- up egg with mediterranean greens", fee:"90 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"CROQUE MONSIEUR", description:"toast bread, butter, beef ham, kasar cheese, kasar cheese sauced with milk with  mediterranean greens", fee:"90 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"FRENCH TOAST", description:"egg bread prepared with honey, milk and cinnamon flavor", fee:"80 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"KASAR TOAST", description:"toast bread, kasar cheese, dip sauce", fee:"75 TL"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"TOAST WITH KASAR AND SHUCUK", description:"toast bread, kasar cheese, beef shucuk, dip sauce", fee:"80 TL"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"CHOCOLATE CROISSANT", description:"", fee:"35 TL"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"PLAIN CROISSANT ", description:"", fee:"30 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 12,
                name: "EGG FLAVORS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FRIED EGG ", description:"", fee:"50 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"OMELETTE", description:"", fee:"50 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"SCRAMBLED EGG", description:"", fee:"50 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"BOILED EGGS (single)", description:"", fee:"15 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 13,
                name: "MENEMEN FLAVORS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"PLAIN MENEMEN", description:"", fee:"65 TL"},//قیمتش رو ننوشته بودین من نوشتم اگه اشتباهه پاکش کنید
                    {id:1, image:"/assets/MACCHIATO.png", title:"MENEMEN WITH ONION", description:"", fee:"70 TL"},//قیمتش رو ننوشته بودین من نوشتم اگه اشتباهه پاکش کنید
                    {id:2, image:"/assets/MACCHIATO.png", title:"MENEMEN WITH KASAR CHEESE", description:"", fee:"80 TL"},//قیمتش رو ننوشته بودین من نوشتم اگه اشتباهه پاکش کنید
                    {id:3, image:"/assets/MACCHIATO.png", title:"MENEMEN WITH BRAISED MEAT", description:"", fee:"90 TL"},//قیمتش رو ننوشته بودین من نوشتم اگه اشتباهه پاکش کنید

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 14,
                name: "STARTERS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"SOUP OF THE DAY ", description:"", fee:"55 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"GARLIC BREAD ", description:"", fee:"55 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"FINGER FRIES", description:"200 gr", fee:"50 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"APPLE SLICED FRIES ", description:"200 gr", fee:"50 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"SAUSAGE BASKET WITH POTATOES", description:"Four sausages, 200 gr", fee:"55 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"ONION RINGS", description:"six pieces", fee:"40 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MOZZARELLA STICK", description:"six pieces", fee:"60 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"COMBO BASKET", description:"Fried French fries, french fries with apple slices, mozzarella stick, onion rings, sausage", fee:"85 TL"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"THE LEGEND FRANKFURTER SAUSAGE ", description:"Scalloped Potatoes, two Frankfurter sausages ,180 gr", fee:"160 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 15,
                name: "SALADS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"CHICKEN CAESAR SALAD", description:"110 gr marinated grilled chicken breast, lettuce, caesar sauce, croutons with special sauce", fee:"120 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"CAESAR SALAD ", description:"lettuce, caesar sauce, croutons with special sauce", fee:"100 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"GARDEN SALAD", description:"mediterranean greens, dill, parsley, mint, cherry tomatoes, cucumber, lemon sauce with olive oil", fee:"90 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"CHICKEN MEXICAN SALAD ", description:"110 gr grilled chicken, lettuce, avocado, Mexican beans, spicy Mexican sauce, cheddar cheese, sun-dried tomatoes, corn kernels, black cuminu", fee:"120 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"TULUM CHEESE SALAD ", description:"fresh arugula, Erzincan tulum cheese, lettuce, vinaigrette sauce with pomegranate syrup, cherry tomatoes, dried blueberries, green apples, black cumin", fee:"100 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"TUNA FISH SALAD", description:"80 gr tuna fish, corn kernels, red  onion, mediterranean greens, lettuce, honey mustard sauce, cherry tomatoes, pickled gherkins,dill", fee:"140 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 16,
                name: "PIZZAS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"MARGHERITA PIZZA", description:"pizza sauce, mozzarella cheese, cherry tomatoes, fresh basil", fee:"130 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"PIZZA AI CINQUE FORMAGGI", description:"pizza sauce, mozzarella, emmental, gouda, roquefort, parmesan, fresh arugula, olive oil", fee:"200 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"MIXED PIZZA", description:"pizza sauce, mozzarella cheese, shucuk, sausage, ham, olives, corn, green pepper, red pepper, mushroom", fee:"150 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"PIZZA WITH PESTO SAUCE", description:"pesto dip sauce, mozzarella cheese, mushroom, parmesan cheese, cheddar cheese", fee:"160 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"CAESAR PIZZA", description:"Pizza sauce, mozzarella cheese, marinated chicken pieces, lettuce, caesar sauce, parmesan cheese", fee:"150 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"SMOKED MEAT PIZZA", description:"pizza sauce, mozzarella cheese, smoked meat, fresh rocket, parmesan cheese, olive oil", fee:"180 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"TUNA FISH PIZZA", description:"pizza sauce, mozzarella cheese, tuna fish, red onion, corn, fresh arugula, lemon", fee:"150 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"VEGGIE PIZZA", description:"pizza sauce, mozzarella cheese, mushrooms, cherry tomatoes, green pepper, red pepper, corn, green olives, black olives", fee:"140 TL"},
                    {id:8, image:"/assets/MACCHIATO.png", title:"MEXICA PIZZA", description:"pizza sauce, bezirgani sauce, mozzarella cheese, shucuk, jalapeno pepper, green olives, green pepper, cherry tomatoes", fee:"150 TL"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"HAWAIAN PIZZA", description:"pizza sauce, mozzarella cheese, beef ham, pineapple", fee:"150 TL"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"JUNIOR PIZZA", description:"pizza sauce, mozzarella cheese, sausage, corn, olive", fee:"110 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 17,
                name: "PASTAS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"FETTUCINI ALFREDO", description:"fettucini pasta, cream, mushroom, chicken, fresh basil, parmesan cheese", fee:"110 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"MUSHROOM TORTELLINI", description:"Tortellini pasta, pesto sauce, cream, mushroom, parmesan cheese", fee:"120 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"GRILLED CHICKEN FETTUCCINE", description:"fettucini pasta, tomato sauce, pesto sauce, grilled chicken, fresh basil", fee:"120 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"CASARECCE PESTO ROSSO ", description:"casarecce pasta, dip sauce, chicken, cream, parmesan cheese, fresh basil, cherry tomatoes", fee:"120 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"SPAGHETTI BOLOGNESE", description:"spaghetti pasta, bolognese sauce, onion, garlic, minced meat)", fee:"110 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"PENNE ARRABBIATA", description:"penne pasta, arabbiata sauce,olives", fee:"100 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"MAC & CHEESE ", description:"pipette pasta, cheddar sauce, cream, kasar cheese, parmesan", fee:"110 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 18,
                name: "PAN FLAVORS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"CHICKEN WITH CURRY SAUCE", description:"chicken chunks, curry sauce, cream, mushrooms, green peppers, paprika, cherry tomatoes", fee:"110 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"CREAMY MUSHROOM CHICKEN", description:"chicken pieces, mushroom, cream", fee:"100 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"CHICKEN WITH MEXICAN SAUCE", description:"chicken pieces, onions, tomatoes, mushrooms, Mexican beans, green peppers, paprika, Mexican sauce", fee:"120 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"SWEET CHILI SAUCE CHICKEN", description:"chicken pieces, red pepper, green pepper, mushroom", fee:"125 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 19,
                name: "BURGERS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"CHEDDAR BURGER", description:"150 gr meatballs, lettuce, pickled gherkins, tomatoes,ring onion,ketchup, mayonnaise, cheddar sauce, with spicy finger fries", fee:"110 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"BBQ BURGER", description:"150 gr meatballs, caramelized onions, BBQ sauce, cheddar souce, with spicy finger fries", fee:"120 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"MEXICA BURGER", description:"150 gr meatballs, bezirgani sauce, caramelized onions, jalapone peppers, cheddar sauce, with spicy french fries", fee:"140 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"SMOKED MEAT BURGER", description:"150 gr meatballs, smoked meat, caramelized onions, caramelized mushrooms, cheddar sauce, burger sauce, with spicy finger fries", fee:"160 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"CHICKEN BURGER", description:"110 gr marinated chicken breast, lettuce, tomato, pickled gherkins, ranch sauce,with spicy finger fries", fee:"100 TL"},
                    {id:5, image:"/assets/MACCHIATO.png", title:"MEXICAN CHICKEN BURGER", description:"110 gr marinated chicken breast, with bezirgani sauce, lettuce, tomato, caramelized onion, with spicy finger fries", fee:"105 TL"},
                    {id:6, image:"/assets/MACCHIATO.png", title:"VEGAN BURGER", description:"vegan bread, vegan meatballs, lettuce, tomato, pickles, with finger fries", fee:"130 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"KIDS BURGER", description:"with two mini burger patties, lettuce, tomato, pickles, with finger fries", fee:"90 TL"},

                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

            {id: 20,
                name: "DESSERTS",
                items:[
                    {id:0, image:"/assets/MACCHIATO.png", title:"KAKTÜS CUP", description:"chocolate sauce, vanilla ice cream, hazelnut croquant, banana, whipped cream, roll layer", fee:"95 TL"},
                    {id:1, image:"/assets/MACCHIATO.png", title:"PASTEL DE NATA", description:"with ice cream", fee:"75 TL"},
                    {id:2, image:"/assets/MACCHIATO.png", title:"WHITE FOREST FRUIT CAKE", description:"", fee:"85 TL"},
                    {id:3, image:"/assets/MACCHIATO.png", title:"PEANUT DREAM CAKE", description:"", fee:"85 TL"},
                    {id:4, image:"/assets/MACCHIATO.png", title:"TIRAMISU", description:"", fee:"70 TL"},//اینو چیزی ننوشته بودین
                    {id:5, image:"/assets/MACCHIATO.png", title:"PROFİTEROL PASTA", description:"", fee:"75 TL"},//اینو هم چیزی ننوشته بودین
                    {id:6, image:"/assets/MACCHIATO.png", title:"CHOCOLATE SOUFLE ", description:"with ice cream", fee:"80 TL"},
                    {id:7, image:"/assets/MACCHIATO.png", title:"SAN SEBASTIAN ", description:"with chocolate sauce", fee:"85 TL"},//اینو هم چیزی ننوشته بودین
                    {id:8, image:"/assets/MACCHIATO.png", title:"CHEESECAKE", description:"lemon, raspberry", fee:"85 TL"},
                    {id:9, image:"/assets/MACCHIATO.png", title:"DONUT", description:"", fee:"45 TL"},
                    {id:10, image:"/assets/MACCHIATO.png", title:"BANANA CHOCOLATE CREPE", description:"two crepes", fee:"80 TL"},


                ],
                populer:[
                    {id:0, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:1, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:2, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:3, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:4, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:5, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},
                    {id:6, image:"/assets/LATTE.png", title:"", description:"", fee:"TL"},

                ]},

        ]
    }


    const activeTabFunc = async (id) =>{
        await setActiveTab(id)
    }

    const hideTab = (status) => {
        if (status) {
            document.getElementById('tab').className = 'menu-swiper hidden';
            setHide(true);
        } else {
            document.getElementById('tab').className = 'menu-swiper'
            setHide(false);
        }
    }

    return(
        <div className="container main">
               <Header/>
               <Swiper
                   id="tab"
                   className="menu-swiper"
                   spaceBetween={12}
                   slidesPerView={"auto"}
               >
                   {tabList? tabList[newLang].map((list)=>
                        <SwiperSlide
                            onClick={() => activeTabFunc(list.id)}
                            key={list.id}
                           >
                            <span className={activeTab === list.id ? 'swiper-slide-active' : 'swiper-slide'}>{list.name}</span>
                        </SwiperSlide>
                   ) : null}
               </Swiper>
               {tabList? tabList[newLang].map((list)=>
                   <div key={list.id} className={activeTab === list.id ? 'current-position' : 'animation-position'}>
                       <MenuItemHorizontalCard items={tabList[newLang][activeTab].items} isHide={hide} index={list.id} tab={hideTab}/>
                       <Populer items={tabList[newLang][activeTab].populer} isHide={hide} index={list.id} tab={hideTab}/>
                   </div>
               ) : null}
        </div>
    )
}

export default MainPage

