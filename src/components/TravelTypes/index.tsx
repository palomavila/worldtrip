import { Flex } from "@chakra-ui/react";
import TravelTypesItem from "./TravelTypesItem";

export default function TravelTypes() {



  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      px="16"
      mt="32"
      mb="16"
      flexWrap="wrap"

    >
      <TravelTypesItem image='/cocktail.svg' text="Vida noturna" />
      <TravelTypesItem image='/surf.svg' text="Praia" />
      <TravelTypesItem image='/building.svg' text="Moderno" />
      <TravelTypesItem image='/museum.svg' text="Clássico" />
      <TravelTypesItem image='/earth.svg' text="e mais..." />
    </Flex>
  );
}