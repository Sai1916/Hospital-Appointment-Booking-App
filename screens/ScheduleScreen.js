import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScheduleItem from '../components/ScheduleItem'

export default function ScheduleScreen() {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:"white"}}> 
            <Text style={{fontSize:24,fontWeight:"bold",marginHorizontal:20}}>Schedule</Text>
            
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:20,marginVertical:20}}>
                <View style={{paddingVertical:5,paddingHorizontal:10,backgroundColor:"blue",borderRadius:10}}>
                    <Text style={{color:"white"}}>Upcoming</Text>
                </View>
                <View>
                    <Text style={{color:"#6fcbd1"}}>Completed</Text>
                </View>
                <View>
                    <Text style={{color:"#6fcbd1"}}>Completed</Text>
                </View>
            </View>

            <ScrollView>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#74a2a6",paddingLeft:20}}>Nearest Visit</Text>
            
            <ScheduleItem />

            <Text style={{fontSize:20,fontWeight:"bold",color:"#74a2a6",paddingLeft:20}}>Future Visit</Text>

                <ScheduleItem />
                <ScheduleItem />
                <ScheduleItem />
            </ScrollView>

        </SafeAreaView>
    )
}
