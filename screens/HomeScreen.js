import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Touchable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {AntDesign,EvilIcons,Ionicons,Octicons} from 'react-native-vector-icons'

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:10}}>
                <TouchableOpacity activeOpacity={1} >
                    <Image source={{uri: "data:image/jpeg;base64,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"}} style={{width:35,height:35,borderRadius:40}}/>
                </TouchableOpacity>
                <View style={{flexDirection:"column"}}>
                    <Text>Current Location</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <EvilIcons name="location" size={20} />
                        <Text>New York</Text>
                    </View>
                </View>
                    <TouchableOpacity 
                        style={{
                            borderRadius:20,
                            width:50,
                            height:50,
                            alignItems:"center",
                            justifyContent:"center",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            elevation: 5,
                        }}
                    >
                        <Ionicons name="notifications-outline" size={20} />
                    </TouchableOpacity>
            </View>
           <View style={{
               flexDirection:"row",
               height:36,
               borderRadius:20,
               marginVertical:10,
               marginHorizontal:10,
               alignItems:"center",
               paddingLeft:20,
               shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 3,
               }}>
               <AntDesign name="search1" size={22}/>
                <TextInput
                    style={{width:"80%",paddingLeft:8}}
                    placeholder="Search Hospital"
                />
           </View>
           <Text style={{fontSize:16,fontWeight:"bold",marginVertical:10,marginHorizontal:10}}>Upcoming Schedule</Text>
           <TouchableOpacity 
                style={{
                    backgroundColor:"blue",
                    borderRadius:20,
                    justifyContent:"center",
                    marginHorizontal:20,
                    height:150,
                    
                }}
            >
               <View style={{flexDirection:"row"}}>
                    <Image source={{uri:"data:image/jpeg;base64,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"}} style={{width:100,height:70,resizeMode:"contain",borderRadius:20}}/>
                    <View>
                        <Text style={{color:"white"}}>Dr. John Doe</Text>
                        <Text style={{color:"#6fcbd1"}}>Dental Conservation Specialist</Text>
                    </View>
               </View>
               <Text style={{paddingLeft:20,color:"white",marginVertical:5}}>Upcoming</Text>
               <View style={{flexDirection:"row",height:30,padding:10,alignItems:"center",alignSelf:"center",borderRadius:30,backgroundColor:"lightskyblue"}}>
                    <Ionicons name="calendar-outline" size={22} color="blue" />
                    <Text style={{fontSize:12,paddingLeft:10}}>Tue,Oct 1, 10:00am - 11:00am</Text>
               </View>
           </TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginVertical:10,marginHorizontal:20}}>
                <View>
                    <Text style={{fontWeight:"bold"}}>Let's find hospital</Text>
                    <Text>Find a hospital near you</Text>
                </View>
                <Octicons name="settings" size={22} />
            </View>
            <View style={{flexDirection:"column",backgroundColor:"#ccedf0"}}>
                <ScrollView horizontal style={{marginHorizontal:5,marginVertical:10}} showsHorizontalScrollIndicator={false}>
                    <View style={{borderRadius:20,backgroundColor:"#95caf5",paddingVertical:6,paddingHorizontal:12,marginHorizontal:5}}>
                        <Text style={{fontWeight:"bold"}}>Dental</Text>
                    </View>
                    <View style={{borderRadius:20,backgroundColor:"#95caf5",paddingVertical:6,paddingHorizontal:12,marginHorizontal:5}}>
                        <Text style={{fontWeight:"bold"}}>Psychologist</Text>
                    </View>
                    <View style={{borderRadius:20,backgroundColor:"#95caf5",paddingVertical:6,paddingHorizontal:12,marginHorizontal:5}}>
                        <Text style={{fontWeight:"bold"}}>Cardiologist</Text>
                    </View>
                    <View style={{borderRadius:20,backgroundColor:"#95caf5",paddingVertical:6,paddingHorizontal:12,marginHorizontal:5}}>
                        <Text style={{fontWeight:"bold"}}>Orthopedics</Text>
                    </View>
                    <View style={{borderRadius:20,backgroundColor:"#95caf5",paddingVertical:6,paddingHorizontal:12,marginHorizontal:5}}>
                        <Text style={{fontWeight:"bold"}}>Neurologist</Text>
                    </View>
                </ScrollView>

                <ScrollView horizontal style={{marginVertical:20,}} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity 
                        style={{
                            backgroundColor:"white",
                            borderRadius:20,
                            justifyContent:"center",
                            marginHorizontal:20,
                            height:120,
                            width:260,
                        }}
                    >
                        <View style={{flexDirection:"column"}}>
                            <Text style={{fontWeight:"bold",marginHorizontal:20,marginVertical:10}}>RS Dr.Sumantri</Text>
                            <View style={{flexDirection:"row"}}>
                                    <Image source={{uri:"data:image/jpeg;base64,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"}} style={{width:80,height:60,resizeMode:"contain",borderRadius:20}}/>
                                    <View>
                                        <Text style={{color:"black"}}>Dr. John Doe</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>Dental Conservation Specialist</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>10 queue *  3 hour waiting</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>🌟🌟🌟🌟 8/10 1.2km</Text>
                                    </View>
                                </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            backgroundColor:"white",
                            borderRadius:20,
                            justifyContent:"center",
                            marginHorizontal:20,
                            height:120,
                            width:260,
                        }}
                    >
                        <View style={{flexDirection:"column"}}>
                            <Text style={{fontWeight:"bold",marginHorizontal:20,marginVertical:10}}>RS Dr.Sumantri</Text>
                            <View style={{flexDirection:"row"}}>
                                    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIqLJChDOzTzql2GCpqUDuVSMktu-Z8BqRghNzHYtSDxaGCJls_3S-ZdNWOWISLsYCNU&usqp=CAU"}} style={{width:80,height:60,resizeMode:"contain",borderRadius:20}}/>
                                    <View>
                                        <Text style={{color:"black"}}>Dr. Rita</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>Cardiac Specialist</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>30 queue *  5 hour waiting</Text>
                                        <Text style={{fontSize:12,color:"#6fcbd1"}}>🌟🌟🌟🌟🌟 10/10 2.4km</Text>
                                    </View>
                                </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
