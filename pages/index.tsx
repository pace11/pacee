import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import {
  TbCheckupList,
  TbArrowBigRightLinesFilled,
} from 'react-icons/tb'

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Tools</Heading>
          <Text pt="2" fontSize="sm" fontWeight="medium">
            All tools free to use
          </Text>
        </CardHeader>
        <CardBody>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card>
              <CardHeader>
                <Flex>
                  <TbCheckupList size="25" />
                  <Heading size="md">Polling Online</Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <Text fontWeight="light">
                  make your poll easier and more fun ...
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  size="sm"
                  rightIcon={<TbArrowBigRightLinesFilled />}
                >
                  Open here
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </CardBody>
      </Card>
    </>
  )
}
