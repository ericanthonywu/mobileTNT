import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';

class Chat extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={mainStyle.mainFrame}>
                    <View style={mainStyle.sectionLeft}>
                        <TouchableOpacity>
                            <Text style={{fontSize:30}}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:20}}>All Chats</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={mainStyle.sectionLeft}>
                        <View style={mainStyle.chatItem}>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                            <View style={{width:"90%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold", marginRight:5}}>
                                        Wisnu Wiyantoro
                                    </Text>
                                    <Text style={{}}>
                                        (Veteranian)
                                    </Text>

                                </View>
                                <View style={{width:"90%"}}>
                                    <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                </View>

                            </View>
                        </View>
                        <View style={mainStyle.chatItem}>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                            <View style={{width:"90%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold", marginRight:5}}>
                                        Wisnu Wiyantoro
                                    </Text>
                                    <Text style={{}}>
                                        (Veteranian)
                                    </Text>

                                </View>
                                <View style={{width:"90%"}}>
                                    <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                </View>

                            </View>
                        </View>
                        <View style={mainStyle.chatItem}>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                            <View style={{width:"90%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold", marginRight:5}}>
                                        Wisnu Wiyantoro
                                    </Text>
                                    <Text style={{}}>
                                        (Veteranian)
                                    </Text>

                                </View>
                                <View style={{width:"90%"}}>
                                    <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                </View>

                            </View>
                        </View>
                        <View style={mainStyle.chatItem}>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                            <View style={{width:"90%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold", marginRight:5}}>
                                        Wisnu Wiyantoro
                                    </Text>
                                    <Text style={{}}>
                                        (Veteranian)
                                    </Text>

                                </View>
                                <View style={{width:"90%"}}>
                                    <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                </View>

                            </View>
                        </View>
                        <View style={mainStyle.chatItem}>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                            <View style={{width:"90%"}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={{fontWeight:"bold", marginRight:5}}>
                                        Wisnu Wiyantoro
                                    </Text>
                                    <Text style={{}}>
                                        (Veteranian)
                                    </Text>

                                </View>
                                <View style={{width:"90%"}}>
                                    <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                </View>

                            </View>
                        </View>


                    </View>
                </View>
            </ScrollView>
        );
    }

}


export default Chat;
