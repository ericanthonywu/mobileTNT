import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView, TextInput} from 'react-native';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddPet extends React.Component{
    render() {
        return (
            <>
                <ScrollView>
                    <View style={mainStyle.mainFrame}>
                        <View style={mainStyle.sectionLeft}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Text style={{fontSize:30}}>X</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{fontSize:20}}>Add Pet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={mainStyle.sectionCentered}>
                            <Text style={{fontSize:20}}>Pet Photo</Text>
                            <Image source={require("./assets/photodummypet.jpg")} style={mainStyle.profPhoto}/>
                            <View style={{marginTop:10}}></View>
                            <TouchableOpacity style={mainStyle.button4}>
                                <Icon
                                    name="camera"
                                    size={20}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={mainStyle.sectionLeft}>
                            <View style={mainStyle.inputContainer}>
                                <Text>Pet Name</Text>
                                <TextInput style={mainStyle.inputTextField}></TextInput>
                            </View>


                            <TouchableOpacity style={mainStyle.button5}>
                                <Text style={{color:"#fff", fontWeight:"bold"}}>ADD</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </>
        );
    }
}

export default AddPet
