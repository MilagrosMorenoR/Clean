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
import { StyleSheet, Alert} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { auth } from "./firebase-config";


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
          pt={5}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/68d0cc07-757e-494e-8cdf-f37b45eb41b6_20210122143100.jpg",
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
              Standard
            </Center>
          </Box>

          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Aguascalientes
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "black",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                8:00am   $600
              </Text>
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
                Av. Adolfo López Mateos Ote. 1801
              </Text>
              <Text
                fontSize="xs"
                _light={{
                  color: "orange.500",
                }}
                _dark={{
                  color: "orange.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                Bona Gens, 20256
              </Text>
            </Stack>
            <Text fontWeight="400">
              Servicio de limpieza de 4 horas en departamento, con limpieza continua de cocina, cochera y dos habitaciones y un baño.
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
                  25/04/2022 | ⭐⭐⭐⭐
                </Text>
              </HStack>
            </HStack>
            <Text
                  color="blue.600"
                  _dark={{
                    color: "blue.200",
                  }}
                  fontWeight="400"
                  style={styles.underline}
                  onPress={() => navigation.navigate('DetallesTrabajador')}
                >
                  Amaia Gutierrez
                </Text>
          </Stack> 

          
          <Button onPress={() => navigation.navigate("HomeScreen")}>Finalizar servicio</Button>

      
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
                                Buscar
                            </Text>
                        </Center>
                    </Pressable>

                    <Pressable
                opacity={selected === 0 ? 1 : 0.5}
                py="3"
                flex={1}
                onPress={() => navigation.navigate("PublicarServicio")}
              >
                <Center>
                  <Icon
                    mb="1"
                    as={
                      <MaterialCommunityIcons
                        name={selected === 0 ? "Buscar" : "home-outline"}
                      />
                    }
                    color="white"
                    size="sm"
                  />
                  <Text color="white" fontSize="12">
                    Publicar
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
const styles = StyleSheet.create({
    
    underline: {textDecorationLine: 'underline'}
});

export default MisServicios;
