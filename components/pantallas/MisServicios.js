import React from "react";
import {
  Heading,
  Input,
  Center,
  NativeBaseProvider,
  NativeProvider,
  Button,
  Box,
  AspectRatio,
  Image,
  Stack,
  HStack,
  ScrollView,
  FlatList,
  View,
  Pressable,
  selected,
  Icon,
  Link,
  VStack,
  Skeleton,
  Text,
} from "native-base";

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const MisServicios = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>

      <Box flex={1} bg="white" safeAreaTop>
                <Center flex={1}></Center>
                <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable
                        opacity={selected === 0 ? 1 : 0.5}
                        py="3"
                        flex={1}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 0 ? 'home' : 'home-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                Home
                            </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                        opacity={selected === 2 ? 1 : 0.6}
                        py="2"
                        flex={1}
                        onPress={() => navigation.navigate('MisServicios')}
                    >
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 3 ? 'account' : 'account-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                MisServicios
                            </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                        opacity={selected === 2 ? 1 : 0.6}
                        py="2"
                        flex={1}
                        onPress={() => navigation.navigate('Cuenta')}
                    >
                        <Center>
                            <Icon
                                mb="1"
                                as={
                                    <MaterialCommunityIcons
                                        name={selected === 3 ? 'account' : 'account-outline'}
                                    />
                                }
                                color="white"
                                size="sm"
                            />
                            <Text color="white" fontSize="12">
                                Cuenta
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
    </NativeBaseProvider>
  );
};

export default MisServicios;
