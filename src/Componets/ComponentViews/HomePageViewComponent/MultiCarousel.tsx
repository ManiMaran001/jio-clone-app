import "./Home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid } from "@mui/material";

type responsiveType = {
  breakpoint: { max: number; min: number };
  items: number;
};
interface carouselTs {
  id: number;
  title: string;
  check: string;
  background: string;
  svgImg: string;
  description: string;
}

const MultiCarousel: React.FC<{
  responsive: any;
  multiCarouselData: carouselTs[];
}> = (props) => {
  return (
    <div className="mt-4">
      <Carousel
        responsive={props.responsive}
        autoPlay={true}
        centerMode={true}
        infinite={true}
        arrows={false}
        containerClass="carousel--container"
      >
        {props.multiCarouselData?.map((value: carouselTs) => {
          return (
            <div className={`card ${value.background} rounded-2xl`}>
              <div className="card-body">
                <div className="d-flex">
                  <div className="card-content w-75">
                    <h5 className="card-title text-2xl leading-6 tracking-tight font-black">
                      {value.title}
                    </h5>
                    <p className="card-text text-md font-medium">
                      {value.description}
                    </p>
                  </div>
                  <div className="">
                    <img src={value.svgImg} alt="jiosaavn" className="w-20" />
                  </div>
                </div>
                <button className="btn--box d-flex justify-content-start">
                  {value.check}
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
      <Grid container className="center--plan mt-4" justifyContent={"center"}>
        <Grid item xs={8} sm={2} md={1.5} lg={1.5}>
          <div className="chip--container">View all apps</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultiCarousel;
