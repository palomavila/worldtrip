import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      w="100%"
      h="335px"
      backgroundImage="url(/banner.svg)"
      justifyContent="space-around"
      alignItems="center"
      px="16"
    >
      <Box>
        <Text
          fontWeight="500"
          fontSize={["20px", "36px"]}
          color="gray.100"
          mb="4"
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text fontWeight="400" fontSize={["14px", "20px"]} color="gray.300">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isWideVersion && (
        <Box>
          <Image src="/airplane.svg" mb="-40%" />
        </Box>
      )}
    </Flex>
  );
}
