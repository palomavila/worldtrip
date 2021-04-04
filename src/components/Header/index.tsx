import Link from 'next/link';
import { Flex, Icon } from '@chakra-ui/react';
import { RiArrowDropLeftLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { useRouter } from 'next/router';

export default function Header() {

  const { asPath } = useRouter();

  return (
    <Link href="/">
      <Flex
        as='header'
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        px="6"

        h={["50px", "100px"]}>

        {asPath !== "/" &&

          <Icon
            as={RiArrowDropLeftLine}
            fontSize={["25px", "36px"]}
            color="gray.200"
            position="absolute"
            top={["15px", "30px"]}
            left="20px"
            cursor="pointer"
          />
        }
        <Logo />
      </Flex>
    </Link >
  )
}