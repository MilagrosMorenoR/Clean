
export default function buscar() {
    return <Stack space="2" alignItems="center">
        <HStack space="2" alignItems="center">
          <Center size="16" bg="primary.400:alpha.30" rounded="md" _text={{
          color: "white"
        }}>
            Box 1
          </Center>
          <Center size="16" bg="primary.400:alpha.70" rounded="md" _text={{
          color: "white"
        }}>
            Box 2
          </Center>
          <Center bg="primary.400" size="16" rounded="md" _text={{
          color: "white"
        }} shadow="1">
            Box 3
          </Center>
        </HStack>
      </Stack>;
  }
  
