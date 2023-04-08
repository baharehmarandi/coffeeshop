import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeLanguage} from "../core/languageSlice";
import "./header.css"

const Header = () =>{

    const dispatch = useDispatch();

    const [lang, setLang] = useState('tr');
    const onChangeLanguage = () => {

        if(lang === 'tr'){
            setLang('en');
            dispatch(changeLanguage('en'));
        }
        else {
            setLang('tr');
            dispatch(changeLanguage('tr'));
        }
    }

    return(
        <div className="coffee position-fixed">
            <img src="/assets/header_img.png" alt="art coffee" className="w-100"/>
            <div className="logo position-absolute d-flex justify-content-center align-items-center overflow-hidden">
                <img src="/assets/kaktus.png" alt="kaktus logo" className="img-fluid"/>
            </div>
            <button className="language position-absolute"
                onClick={onChangeLanguage}
            >{lang.toUpperCase()}</button>
        </div>
    )
}

export default Header;