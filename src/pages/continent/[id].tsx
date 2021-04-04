import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import TextInfo from '../../components/TextInfo';

import db from '../../../db.json';

export interface Country {
  id: number;
  image: string;
  name: string;
  capital: string;
  flag: string;
}

interface ContinentProps {
  id: number;
  name: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  jumbotronImage: string;
  carrouselImage: string;
  countries: Country[];
}

export default function Continent() {

  const router = useRouter();
  const [continent, setContinent] = useState<ContinentProps | null>(null)
  const { continents } = db;

  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    const selectedContinent = continents.find(
      continent => continent.id === Number(id)
    )
    setContinent(selectedContinent);
  }, [id])

  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center">
      <Header />
      {continent && <Jumbotron
        image={continent.jumbotronImage}
        name={continent.name}
      />}
      {continent && <TextInfo
        text={continent.text}
        numberOfCountries={continent.numberOfCountries}
        numberOfLanguages={continent.numberOfLanguages}
      />}
      {continent && <Gallery countries={continent.countries} />}
    </Flex>
  )
}