import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Flex } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';

SwiperCore.use([Navigation, Pagination])

interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface CarouselProps {
  continents: Continent[];
}

export default function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      w="90%"
      justifyContent="center"
      alignItems="center"
      mb="8"
    >
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={0}
      >
        {continents.map(continent => (<SwiperSlide key={`slide-${continent.id}`}>
          <CarouselItem
            id={continent.id}
            name={continent.name}
            image={continent.carrouselImage}
            description={continent.description} />
        </SwiperSlide>))}

      </Swiper>
    </Flex>
  )
}