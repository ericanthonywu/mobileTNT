import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView, TextInput} from 'react-native';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditProfile extends React.Component{
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
                                <Text style={{fontSize:20}}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={mainStyle.sectionCentered}>
                            <Text style={{fontSize:20}}>Avatar</Text>
                            <Image source={require("./assets/photodummy.png")} style={mainStyle.profPhoto}/>
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
                                <Text>Name</Text>
                                <TextInput style={mainStyle.inputTextField}></TextInput>
                            </View>
                            <View style={mainStyle.inputContainer}>
                                <Text>Email</Text>
                                <TextInput style={mainStyle.inputTextField}></TextInput>
                            </View>
                            <View style={mainStyle.inputContainerColumn}>
                                <Text>Phone Number</Text>
                                <TextInput style={mainStyle.inputTextFieldColumn}></TextInput>
                            </View>
                            <View style={mainStyle.inputContainerColumn}>
                                <Text>Address</Text>
                                <TextInput style={mainStyle.inputTextFieldColumn}></TextInput>
                            </View>
                            <TouchableOpacity style={mainStyle.button5}>
                                <Text style={{color:"#fff", fontWeight:"bold"}}>SAVE</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </>
        );
    }
}

export default EditProfile
