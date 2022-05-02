import React from "react";
import { Text } from "react-native"
import {
    Heading, Input, Center, NativeBaseProvider, NativeProvider, Button, Box, AspectRatio, Image, Stack,
    HStack, ScrollView, FlatList, View, Pressable, selected, Icon, Link, VStack, Skeleton, Container
} from 'native-base'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Cuenta = ({ navigation }) => {

   
    return(
        <NativeBaseProvider>
            <Container></Container>            


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
    )
}


export default Cuenta;

