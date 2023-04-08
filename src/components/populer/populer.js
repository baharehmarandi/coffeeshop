import "./populer.css"
import {useState} from "react";

const Populer = (props) =>{
    const [modalItem, setModalItem] = useState();
    const showModal = (item) =>{
        setModalItem(item);
        const element = document.getElementById("modal-popular-" + props.index);
        element.className = 'modal-fix modal-fix-show';
        const swiper = document.getElementById("swiper-menu-" + props.index);
        swiper.className = 'items-swiper mt-4 swiper-hidden';
        props.tab(true);
    }

    const hideModal = () =>{
        const element = document.getElementById("modal-popular-" + props.index);
        element.className = 'modal-fix';
        const swiper = document.getElementById("swiper-menu-" + props.index);
        swiper.className = 'items-swiper mt-4'
        props.tab(false);
    }
    return(
        <>
            <div className={props.isHide ? "populer mt-2 mb-2 hidden" : "populer mt-3 mb-3"} id={"swiper-menu-" + props.index}>
                <div className="title mb-3">Popüler</div>
                {props.items.map((item) =>
                    <div className="vertical-card overflow-hidden mb-2" key={item.id} onClick={() => showModal(item)}>
                        <div className="vertical-card-inner-box d-flex flex-row">
                            <img src={item.image} alt="coffee" className="vertical-card-image"/>
                            <div className="d-flex flex-column mx-3 vertical-card-inner-box-text">
                                <span className="title populer-item-name mt-1">{item.title}</span>
                                <div className="d-flex flex-row justify-content-between align-items-start">
                                    <span className="populer-item-description me-1">{item.description}</span>
                                    <div className="populer-item-fee ">{item.fee}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
            <div className="modal-fix" id={"modal-popular-" + props.index}>
                <div className="modal-fix-inner-box overflow-hidden">
                    <img src={modalItem?.image} alt="coffee" className="coffee-image-modal"/>
                    <div className="d-flex flex-column align-items-center justify-content-between content py-3">
                        <span className="item-name mt-2 mb-1">{modalItem?.title}</span>
                        <span className="item-description-modal mx-3">{modalItem?.description}</span>
                        <span className="fee mt-3">{modalItem?.fee}</span>
                    </div>
                </div>
                <img src="/assets/close.png" className="position-absolute close" onClick={() => hideModal()}/>
            </div>
        </>

    )
}

export default Populer
