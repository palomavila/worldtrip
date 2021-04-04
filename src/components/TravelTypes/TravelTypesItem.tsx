import { Flex, Text, Image, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface TravelTypesItemProps {
  text: string;
  image: string;
}

export default function TravelTypesItem({ text, image }: TravelTypesItemProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      alignItems="center"
      justifyContent="center"
      padding="4"
    >
      {isWideVersion ? <Image src={image} h="85px" w="85px" /> :
        <Icon as={RiCheckboxBlankCircleFill} color="primary.900" mr="1" />
      }
      <Text mt={["0", "2"]} fontWeight="600" fontSize="24px" color="gray.700">{text}</Text>
    </Flex>
  );
}