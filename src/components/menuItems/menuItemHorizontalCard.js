import "./menueItemHorizontalCard.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";

const MenuItemHorizontalCard = (props) => {

    const [modalItem, setModalItem] = useState();
    const showModal = (item) =>{
        setModalItem(item);
        const element = document.getElementById("modal-" + props.index);
        element.className = 'modal-fix modal-fix-show';
        const swiper = document.getElementById("swiper-menu-" + props.index);
        swiper.className = 'items-swiper mt-4 swiper-hidden';
        props.tab(true);
    }

    const hideModal = () =>{
        const element = document.getElementById("modal-" + props.index);
        element.className = 'modal-fix';
        const swiper = document.getElementById("swiper-menu-" + props.index);
        swiper.className = 'items-swiper mt-4'
        props.tab(false);
    }


    return(

        <>
            <div className={props.isHide ? "mx-2 hidden" : "mx-2"} id={"swiper-menu-" + props.index}>
                <Swiper
                    className="items-swiper mt-3"
                    spaceBetween={12}
                    slidesPerView={"auto"}>
                    {props.items.map((item) =>
                        <SwiperSlide className="Horizontal-card overflow-hidden" key={item.id}
                                     onClick={() => showModal(item)}
                        >
                            <div className="inner-box">
                                <img src={item.image} alt="coffee" className="coffee-image"/>
                                <div className="d-flex flex-column align-items-center justify-content-between inner-box-text">
                                    <span className="item-name mt-2">{item.title}</span>
                                    <span className="item-description mx-1">{item.description}</span>
                                    <span className="fee mt-2 mb-1">{item.fee}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="modal-fix" id={"modal-" + props.index}>
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

export default MenuItemHorizontalCard
