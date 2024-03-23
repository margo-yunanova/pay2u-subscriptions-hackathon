import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Okko from '../../../assets/Okko.png';
import VkMusic from '../../../assets/VkMusic.png';
import Wink from '../../../assets/Wink.png';
import Yandex from '../../../assets/Yandex.png';

const popular = [
  { title: 'Okko', image: Okko },
  { title: 'Vk Music', image: VkMusic },
  { title: 'Wink', image: Wink },
  { title: 'яндекс плюс', image: Yandex },
  { title: 'Okko', image: Okko },
  { title: 'VkMusic', image: VkMusic },
  { title: 'Wink', image: Wink },
  { title: 'яндекс плюс', image: Yandex },
];

interface ImageProps {
  title?: string;
  image?: string;
}

export const Slider =
  //: FC<ImageProps[]>
  ({ images = popular, type }) => {
    const slidesPerView = type === 'popular' ? 5.5 : 3.5;
    const spaceBetween = type === 'popular' ? 20 : 8;

    return (
      <Box sx={{ marginLeft: '-2rem', marginRight: '-2rem' }}>
        <Swiper slidesPerView={slidesPerView} spaceBetween={spaceBetween}>
          {images.map(({ title, image }) => (
            <SwiperSlide>
              <IconButton>
                {type === 'popular' ? (
                  <Card
                    elevation={0}
                    style={{
                      width: '44px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      height={'44px'}
                    ></CardMedia>

                    <CardContent style={{ padding: '0px' }}>
                      <Typography style={{ wordBreak: 'normal' }}>
                        {title}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <Card
                    style={{
                      width: '90px',
                      borderRadius: '12px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      height="160px"
                    ></CardMedia>
                  </Card>
                )}
              </IconButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };
