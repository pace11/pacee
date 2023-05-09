import type { ReactNode } from 'react'
import {
  Grid,
  GridItem,
  Flex,
  Spacer,
  Heading,
  Stack,
  Button,
} from '@chakra-ui/react'
import { VscTerminalBash } from 'react-icons/vsc'
import { TbHeartHandshake, TbTools } from 'react-icons/tb'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid
      templateAreas={`"header""main"`}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        p="4"
        bgGradient="linear(to-l, #4b7bec, #3867d6)"
        area="header"
      >
        <Flex alignItems="center">
          <Flex>
            <VscTerminalBash size="35" color="white" />
            <Heading
              as="h2"
              size="lg"
              color="whitesmoke"
              noOfLines={1}
            >
              PACEE
            </Heading>
          </Flex>
          <Spacer />

          <Stack direction="row">
            <Button
              leftIcon={<TbTools />}
              colorScheme="pink"
              variant="solid"
            >
              Tools
            </Button>
            <Button
              leftIcon={<TbHeartHandshake />}
              colorScheme="gray"
            >
              Support Us
            </Button>
          </Stack>
        </Flex>
      </GridItem>
      <GridItem p="4" area="main">
        {children}
      </GridItem>
    </Grid>
  )
}

export default Layout
