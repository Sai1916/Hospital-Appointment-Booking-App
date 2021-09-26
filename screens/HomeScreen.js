import React from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {AntDesign,EvilIcons,Ionicons,Octicons} from 'react-native-vector-icons'

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:10}}>
                <Image source={{uri: "https://lh3.googleusercontent.com/ogw/ADea4I5L0IsuKGGz3Ne1DGm44fm2W3x2zq9vS9kiMlDP3A=s32-c-mo"}} style={{width:35,height:35,borderRadius:40}}/>
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
                                    <Image source={{uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhYVFhUZGRgZGRkcHBgcHBgYHhwZGBoaHBwYGRgcIS4lHB4rHxkYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhISU0NDQ0NDQ2NDQ0MTE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0MTQ0NDQ0NDQxNDQ0NDQxPzQ0Mf/AABEIAQYAwAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xABAEAABAwIDBQUGAwcCBwEAAAABAAIRAyEEEjEFQVFhcQYigZGhEzJSscHRQuHwBxQVI2JygpKyM1OiwtLx8iT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEAAgMBAQEBAQAAAAAAAAABAhEDITFBEiJRE//aAAwDAQACEQMRAD8A+zIiICIiAiIgIiICIiAiLEujVBkiivx9IGDVYDwL2g+UrXQ2rQe7K2qxzuAIv04oJyIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCHtLHsoUnVXmGtE9TuA4kr4xt7tXicU9wzFlODlpt0499wuTYcuSv/ANo+LdVxDKTX9ym4AsFgX6lxteNOV1z7cKKbplhuLFpdc3tFisZZSetY4XLxUUKNY92HuvPdiPM+KusNSLDLrW4w6R0MeSusM9zgAJA6ADyUhmwi8mXi14Ajmuf/AFx307Tgy1urzsvty2R75BjLOoBXX03hwBGhXyo4B1E5m9CdYHTwXcdm8Y5wyOMjLI4jSR6hdMctxxzxuN06FERbZEREBERAREQEREBERAREQEREHiLyVWdocS6nhqr2GHZYaeBcQAfCZUt1FktskfOdqg167SbHO9zhvDRpPUuCpMfjzTqd6i4tbvls9csyrfZdM5K1djvfeGAm8RJM+YHgqnG4Oo2pnfncLzlc2HgjR3LwXn5Mpa9XHhljHQbJx9KtTzMsQYINiFYYPbOGa4sdXa1+kE/Vc12G2c5oql2pFhwlaMDgK7MWcwEZnSXtdGXdlc0xK4ySXp6Lcri67H1BkzAgtc5oBBm5MCD1V32aZ/Nc5vulmnC4VJjnZMI97mjM3I6Nxc14I3chuV72HqB+G9ofecbjQgbhC9PF48nP3XTIiLs84iIgIiICIiAiIgIiICIiAiIg8VV2loOfhKzWglxYYA4i4+Stl4pZuaWXV2+V7KpFmCcx4g+0dG7cIjjw6hc5tTbrQQwngSN5HAHcvqPbXCZ6II3L4licK12Ic8zY5SAd4Xnywm+/j1Y8t119df2e7Q0hmYGODiIyE75uQ49d66bD4se1LHQWkZmkXsdx5hcdsDAMec3s4Hx5pPqrHZuz3U8VUzPL2EAsndPvNPQt9Vm4z46zOz11W3HD91eQAbtgcYcDHjCsey9K9R4blaQwAc2tv/ujwXmG2b7Wm0F0AGTaZsfIixV9h6DWNDQIAELphhdy3yOHJyz83Ge1vREXd5hERAREQEREBERAREQEREBERARFExuNZSAL3RJDWjUucdGtAuSgidoagbQcSRqIHHiB4Svke0sO2XuZEOMxpBjcefNfQe2tF+IwlT2UipSIe0DUwDmbbeW5h4r5lhczmyTquPJlp34sf1EnZW0ixwkZTABFiNCSdegXS4KvnfmOhiPCVRbKwgJPdvOpV3UqMo0y927QDUnc1o4k2XKZz5He8d+19I2e2KTeYB81JUHZ5c2k0OHeaxuYD4sokBa9n7aoViW03jONWOBa8RrLHQV65OnhvqzREQEREBERAREQEREBERARFi4wEHq1urtG9RXVC4uHCPVYlBlXx0CwvzXGbFxbsViauKeZpszUqA3C8PqAcTETwVh2sx3s8JVeNcjgDzNh6lR+zWF9nhKTN4YCepufUp5E+rfDPyPe4n8Mn/G64/aezBmNSk2GPJdl1yk6j+0zbyXR4ouvGpY4erfpK0YI2AMSTHAXXHPH9dO/Fl+e3KU8XkF1n2Uw78djg94/k0CHxuL/AMAPG9/BQO0FN370+gxpc6RAAOjgHDynVfQOzuGbhHswwAhwkuiC5+UEuneNR0AXLjw/rv4783J/PX10zdZUHaWxqVa725Xi7aje69pGhDxw4GQp7BZQtsbQbRove4xAt1NhC9k38eGo/ZzaTqtEF8F7HOY8jQuYcpcOtj4q5Dly3YlhFBpOtQvef8nH7LpCbq2dk8b5Xq1yswVlXqIiAiIgIiICIiAomLqbuNvut9aplEqpfWmqR8IHpc+qDPCvmo8ch6IX98jkoeyqw9o4k6g/NYYvEQ9xlNjnu1Tfavo0P+ZUBdHwMu76LpMK2FzGGe2ptEku/wCHTytH9Tu87xylvkuopm61fIzPa2Y+mMjHRcPHkQbfJVmPYPaEAe+0GB8XEfrerrHN/k+IUWhTmtSd/Q7zb/8AQWMm49bspsEQ0OIbmfAzEgRBO8clW46m8Yxj5m4jkIiPVdG655hV2JaTXpg6C6ai7TNtbQGHw76sSWiw4uNgFytTss7G0GvxFeoKj25gBGVpdcDL0tAP533afZpxDKdIOyg1A51plrbkaiFaZmsbcwAJ8Aukup1652bvbkuxGJqNq1cLVIc6iO66AJaToY3g/NdgR3lxvZJ7c+JxbzAe9zWneQNwG82Fl1uBxTKrG1GGWumDcaEg2OlwUy36sbnHvBbA661PPeCyablZVvRYtKyUBERAREQERaa1SATwQQcbXl7WcxKp6tWKjj8QPqsnVv5mY8VExD+83ooNmysU1pcXDcItPGy0sqsDX1XkBjS7U2AF9+9Nkvh1UcCz1zKofjRTqMzsL6eWo8wC4tc3KM4aLkAEg2MSOaQpszaTH1HvAY7M4ublc19m2bMe7YNXTYJwcWgGJE23cr+S4Z+Ow2Jql1Cz4YA4DKczXSCWcCC4cYF12uwcU4uFJwHdBjWe7r91upFpjHgU3tJ0+0qPgnghhm7Tbf7zfyUnadV3s3iBAEb5uPzUPAHIabAJc7f/AGtMk8tLLNVJZiR7TKbHhosMQ8fvDAdzSfMrZXb7QuaQA9ozAj5jxCoqG0ntxAe+kXNgMzNBdlcHEGeAkapB0bsQDUP9Ld/Fx+w9Uw721BU5GPRam4glzpDSHAFsGxgQRzj6psJncqDi8+RAhWjcMKzIAYNtHAOHWCt+DoBjYaGgSTDRlF9bdZPivWjKA0Xcd55frRbmNjfJ4psaXe8PFZU96xrG/mvGOQb2lbFpC2NKgyREQEREGD3QFUY7FWI3K3c2QQVzONfBIHmgi1nXUOs+6zqvUOo9RU7Z7hmqHiKfpn+6jUsJTqU4eSHh0tdJaWm4ljgeB9VroOkO5NBvHEDU9VvYe5ED3o1G8SFIlQdn7DoYao6oDLiCJMkwbmJJJ0U/B4rJVbUNhmJPIGyh1ABfQcYm5mw46I2pwMiNT3YncZVHX7ZP8pzmuBDrx4bioezzney+V7GE+JgabwVG2m+fYsgA5STp+Fo+y27KeDUfIHuNjTQyrVTngse52bM4t05CbRuVR2fqAmox/NwOnvOJ8DJKty5uaY/C6RYW33VR2eIFao03BaYuDIzWMTzQWb8Kx5mo4GLiAAZiJJ3lRn7Cp1abwXPb3iQ4OIJ7upBUl9MNdOUaxqNVKo1BlkgdZG7W60jzBYctptY575DQA4kEmBrcQCpeFc8SHuDuBgD5LW+sI0HmPTivcO7kiPcW+I5lKbpWjHuu1Y0KiKsQVsatLHys/aAEDioNy9RFAREQVG1scW91usXPCdwXOvrA2Pz0V1tnCy4uF5Akbx+oXP4jCazI/XFYu9tRDxOMyugtcB8USPEheUnh9wQQd4UXEMcw2a4jrKw2fUDXgwWydN1/l4KbNLgbPcGPqFvcMN1jfNvEBaGP7j91gANY1Ezxgu811u1h/wDj6ZP9wC44Gzwto8c7uj7wQQTcHxXrXk9IA1M2JIMnqVpDrDxW3DCXtHEgeZSIsttPy4j+1sa/E248oUrY1NrrTcnXhGg5iS7zVBiqrn16rrwXujoDA9ArzZTBlDgSHg26RoRNxqjSyYxwc4OG50EGx3HoVV4DD5MdlAjMyxngA4erVOrbTa12Uixnfp+pWvGPZ7ehVa4SHtY4cnSAfUqosMbh8omN88dxBHkSteAZLIHAg63mN/gFPxJBBBUTZxiRwK0jOrSIjy1OnMb9ZUykLDotVbUBbGoMMTh8wzcNyrnVMtldhksI4yqQnJIDZi0a79VNrIkCs4NBHiOSmYeqHdVqwkuF2gCFtOHvIsoJyLXSJi62IgiIgpdtnK9rtxBafC/1VQ+hnzQd4j+2dfJdLtDDh7LtzZbgcVzePr5YyiAQPqDr0UFJj5khugJE8eag4XFPY/Nla6OMwrLEVgR8J5QqbFUyYl08BF/OVitR3NTHtq7Pc4CCAwEc8zb9CuXc655hMNtUig/DZBHddnGvvNEO47oWlzlZUrwGw8fmt2Eqhjw86M756M730WgaDx+ZWzJ/Lef6Y/1EN+q0jfWcCGOGjh87/dXOxmdzMd5MfdUDGfyy0mI7w5EfqPFdLQYG0acSe6PUAk6c0aa8dhZLHRrP/pcztHFEVTAjLEeGi7tzAGxMj81xnaXCZKgfucEvhHeufmY17TqAfAifqoeHMVDzWPZytnwjP6QWH/EwPSF7lh63GE1/vDos2aLBwv5LNBucD7MxwKp3sLh3Dcfh49FY1qvcbBgGR4iRflZQH06ouxrJ6/UhRowOJLXZTabEHcdxU81TMQFVuxmY5X0y140OnkRMqzw9dr7aFQqVQm5K3rCk2As0QREQFynaWlFQHcW+sn6/NdUouOwbajMrtdx4H7KWD5zV1K01aZgmDJ9FcbR2c6m45hcmGxobagrQ+lkJadd558uCw0oKTcjKmbVzqcTrALifopLnr3alDOxw3/Xiq+liJaJ1iD1FikKsx7rfH5lW2z6IdTcDq6zerbqpw4zNZG//AMirHE9zI3hJ9QPotyIgPfd4O4R4rsdnYlvsaYPwNEeAXA7Sec2bj811dPGNFNgi4a0eEfkm1XWIiABvVT2rwuahmGrYP3Xh2oJAPD0kqRXrtqUnNm5b+t6qInYXFd19Po8fJ3/augxDLyFwHZvEmnimXsXZD0db6g+C+kV6cjmrjUrFuo6Kv2xjXU6ZyDM91mACZJ5KeHw2fBaGUxnLjc7uQ4BWkYNecrSQREBzeE74WVeu9ly0FvEKVk+3hwXj6YILTcRCio376wgZm+kqRh/ZuIyi/ivKeEaBBAcOYCkYfCNacwbBURKXqIgIiICIiDRXw7XgZhMXB4FcRtbuvJNt53ARvJ8JXerhe1vZXEYqoQ2oxlCMxEnM46kEREdTCzYscBtntW0EsotD+LzOX/Eau62HVVOB2o+o9zXCSb9wHXpddUOz1GmcvsgSPil3zspLaYaIAAHAAD5JIu4m7AYfZsc8QQDY8ZKkY9sx0+pXmy3S1w4GZXJ7b7ZOo4ypRLGljC0CcwN2NJlwneTuW54zPVrWbNiNV0Tqbe7ckGAYGm4FcTS7S0aguSw6/ELc239F1TO1LWtBLmQRqIuB08FjbWmeIwJmRuH25qsxNR7NSQrml2uwr2Oc94ZlIBMEieVlzm29vYZ8hlUEdCrbDTWx3ekHfK+sYesHMa4fiaD5iV8Pdt/Dt1fPIBxJ6CF9f7NVHOwlEnXIATpcSPorilau0eznVmtFOu+hUaczHsNs3B7NHsO8FQNg7ZqGocLi2CnimiQR7lZo/HSPHi3d5gXlZ0kjgVFxmFZVaGvbOU5mm4cxw0cx4u09Fqwl/wBWBdyXv7jmhziW8hrHMrVSEkWNo1i/l9lbKVGunSDRA9braiKAiIgIiICIiDxRMee6G/ERPRS1oxbJbPBBxXaOlL87eYPgSJ8lzriuk2vMuI4kn+0n8/Vc68XUvqRN2WZLm8WmPIj6+i+Y9usMWbQrT+PI4dC0D5tK+jYSple13A+iov2tbOynDVx+JpY7qAHN9My1Cvmpat9PHVWsyNecszlsRPGCFrIWJCutm9NlTHVHNyl5jhYfIKO55OpJ8SsnLBTUN1N2Jh8+JpM/rBPRvePyX6L7JVpwsfC9w+R+q+FdiaE4hz/gZ6vMfQr7N2bqZMM/m8R4gT6KwXjSs/11URmJaYUrCvDnWv8AIfmqJ1FkBSaL5C1FkmPPopAEWCzRkiIooiIgIiICIiAiIg5jbVINcDo0ksPR2nzXJ4mjBIXYbegseTcAgx6W5rkqx36/XmlSIgsn7U+/s2g/cKjD5sePqtj2zcLDtt39ik72Pp+lRrfk5XEr48QsSsysHKpWJWBWRWCK7DsDTl1U/wBg8sx+q+rbOMUgOLifp9F877BUAMM53xud6QPoV9Gw7IpsH9I9bqwbmCVb7PGVskQTu/XiouDpx3jru+6sKR4kD9cEomYQmSTqVMUCiYcOZ9FPWaQREUUREQEXPs2rUO9osT7vATGqkU8XUdo5ukwW+PxXt+gguEVIdoPkd5t5/CfhDhv5razE1D+JvD3Trvi9xzQWy8KhYCu5xcCQYywQIsRPFSqhhpPI/JBzW1akTvB3fRcrUqhrtLcDcLpdqH3uBv0IXLYlneSsxiKrSbGORTtCM2ycU2bDK/yc0x/0pTwwF3+S19oXj+F4x2gIptHi9o+quMV8hJWDisnLW9UeErEr1YlB9S7C0ZwdPiXP8zUcF9Cp0qpImgRu95mW2+QZI8Fw/wCzenmwlAb87/So4/RfQmYpzDBVgzGHePeNuDbebtfKFKpExDQGj4v1vWIxdrXXhqOd71m8OKolUIkHnv1PMqyVVhjLgVarGRBERRRERBW/wanxd5j7L3+Es4v3fi4abl6iDz+EM4u8/wAl7/C2/E//AFcNNyIg34bChkwSZ1kytlf3Hf2n5IiDlK5vUHCCPFUtaoRpA+aIrUQXqB2uMbKqD46tMHwc0/REUxK+VPWDgiKjWvCiKj7H+yozh6PJ1X5vP1X0LF0QRKIrEqDQqEGFYATf0RFVSqGo6gKzRFjIgiIooiIg/9k="}} style={{width:80,height:60,resizeMode:"contain",borderRadius:20}}/>
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
