import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView, TextInput} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Chat from './Chat';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextDefault} from './component/Text';

class Care extends React.Component{
    render() {
        return (
            <ScrollView>
            <View style={mainStyle.mainFrame}>

                    {/*<Image source={require("./assets/dummymap.png")} style={{width:"100%", height:400}}/>*/}
                    <View style={{flexDirection:"row", marginTop:50}}>
                        <TextInput
                            style={mainStyle.searchInput}
                            onChangeText={text => onChangeText(text)}
                        />
                        <TouchableOpacity
                            style={mainStyle.searchPicker}
                            onChangeText={text => onChangeText(text)}
                        />
                    </View>

                <View style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start", width:"100%", paddingTop:20, paddingLeft:20}}>
                    <Text style={mainStyle.headline1}>Vets in vicinity</Text>
                </View>
                <View style={mainStyle.sectionCentered}>
                    <View style={mainStyle.containerVet}>
                        <Image source={require("./assets/women.jpg")} style={mainStyle.vetPhoto}/>
                        <View style={mainStyle.vetContent}>
                            <Text style={mainStyle.vetName}>Jane Dubois</Text>
                            <Text style={mainStyle.vetLoc}>at Etno Clinic</Text>
                            <View style={mainStyle.vetCTA}>
                                <TouchableOpacity style={mainStyle.buttonCareCTA1}>
                                    <Text style={{color:"#fff", fontWeight:"bold"}}>BOOK</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={mainStyle.buttonCareCTA2}>
                                    <Text style={{color:"#fff", fontWeight:"bold"}}>ASK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={mainStyle.containerVet}>
                        <Image source={require("./assets/man.jpg")} style={mainStyle.vetPhoto}/>
                        <View style={mainStyle.vetContent}>
                            <Text style={mainStyle.vetName}>Mark Airwood</Text>
                            <Text style={mainStyle.vetLoc}>at Etno Clinic</Text>
                            <View style={mainStyle.vetCTA}>
                                <TouchableOpacity style={mainStyle.buttonCareCTA1}>
                                    <Text style={{color:"#fff", fontWeight:"bold"}}>BOOK</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={mainStyle.buttonCareCTA2}>
                                    <Text style={{color:"#fff", fontWeight:"bold"}}>ASK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            </ScrollView>
        );
    }
}

export default Care
