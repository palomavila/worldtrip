import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import { Country } from "./types";

interface Continent {
  countries: Country[];
}

export default function Gallery({ countries }: Continent) {
  return (
    <Flex
      w="100%"
      direction="column"
      mt="16"
      mb="8"
      px="8"
    >
      <Heading
        mb="8"
        fontSize="36px"
        fontWeight="500"
        color="gray.600"
      >Cidades 100+</Heading>
      <SimpleGrid as="ul" minChildWidth="256px" spacing="45px">
        {countries.map(country => <Card
          key={country.id}
          capital={country.capital}
          name={country.name}
          image={country.image}
          flag={country.flag}
        />)}
      </SimpleGrid>
    </Flex>
  )
}