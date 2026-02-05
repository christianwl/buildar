import Carousel from "react-multi-carousel";

import useControleDeTraducao from "@/shared/useControleDeTraducao";

import Depoiment from "./Depoiment";
import CustomArrow from "@/shared/CustomArrow";

import { testimonialsData } from "../data/testimonials";

import "react-multi-carousel/lib/styles.css";
import "../TestimonialsSection.css";

export default function Depoiments() {
  const { t, chaveComPrefixo } = useControleDeTraducao("section8.depoimentos");

  return (
    <Carousel
      customRightArrow={<CustomArrow props={"arrow"}></CustomArrow>}
      customLeftArrow={<CustomArrow props={"arrow left"}></CustomArrow>}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="coiso"
      containerClass="container-with-dots"
      draggable
      infinite
      itemClass="liCarroselDepoiment"
      pauseOnHover
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          partialVisibilityGutter: 30,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      {testimonialsData.map((user) => (
        <Depoiment
          key={user.id}
          image={user.image}
          name={user.name}
          age={user.age}
          text={t(chaveComPrefixo(user.id))}
          color={user.color}
        />
      ))}
    </Carousel>
  );
}
