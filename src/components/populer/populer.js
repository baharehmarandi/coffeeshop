import "./populer.css"
import {Swiper,SwiperSlide} from "swiper/react";

const Populer = (props) =>{
    return(
        <div className="populer mt-3 pb-3">
            <span className="title">Populer</span>

            <Swiper
                className="populer-swiper mt-3"
                spaceBetween={8}
                slidesPerView={2}
                direction="vertical"
            >

                {props.items.map((item) =>
                    <SwiperSlide className="vertical-card overflow-hidden" key={item.id}>
                        <div className="vertical-card-inner-box d-flex flex-row">
                            <img src={item.image} alt="coffee" className="vertical-card-image"/>
                            <div className="d-flex flex-column ms-3 ">
                                <span className="populer-item-name mt-3 mb-2 col-2">{item.title}</span>
                                <div className="d-flex flex-row justify-content-between align-items-start">
                                    <span className="populer-item-description me-3 col-8">{item.description}</span>
                                    <span className="populer-item-fee col-2">{item.fee}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

        </div>
    )
}

export default Populer