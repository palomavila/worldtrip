import { Divider, Flex, Heading } from '@chakra-ui/react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

import db from '../../db.json';

export default function Home() {

  const { continents } = db;

  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider as="hr" w="20%" borderWidth="2px" borderColor="gray.500" bg="gray.500" />
      <Heading
        w="100%"
        textAlign="center"
        mt={["8", "16"]}
        mb={["4", "8"]}
        fontSize={["20px", "36px"]}
        color="gray.700"
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Carousel continents={continents} />
    </Flex>
  );
}
