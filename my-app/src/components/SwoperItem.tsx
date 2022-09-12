import { Carousel } from "antd";
import "./swiperItem.scss";

function SwoperItem(props: any) {
  let { data } = props;
  return (
    <div className="swiper-item">
      <Carousel autoplay>
        {data &&
          data.map((item: string, index: number) => {
            return (
              <div className="swiper-item-box" key={index}>
                {" "}
                <img src={item} alt="" />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

export default SwoperItem;
