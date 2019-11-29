import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends React.Component {

    render() {
        return (
            <ScrollView>
            <View style={mainStyle.mainFrame}>
                <View style={mainStyle.sectionBg}>
                <Image source={require("./assets/BGPROFILE.jpg")} style={mainStyle.bgItem}/>
                    <View style={{width:"90%", alignItems:"flex-end", marginTop:20}}>
                        <TouchableOpacity>
                        <Icon
                            name="gear"
                            size={28}
                            color="#fff"
                        />
                        </TouchableOpacity>
                    </View>
                        <Image source={require("./assets/photodummy.png")} style={mainStyle.profPhoto}/>
                        <Text style={mainStyle.profName}>Wisnu Wiyantoro</Text>
                        <Text style={mainStyle.profBirthday}>+62 856 9333 9307</Text>
                        <Text style={mainStyle.profMail}>pakwisnu@gmail.com</Text>
                        <Text style={mainStyle.profMail}>Bintaro Sektor IV</Text>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={mainStyle.button3}>
                            <Text style={{color:"#fff", fontSize:15, textAlign:"center"}}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={mainStyle.button3}>
                            <Text style={{color:"#fff", fontSize:15, textAlign:"center"}}>Add Pet</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={mainStyle.sectionCentered}>
                <View style={mainStyle.petCard}>
                    <Image source={require("./assets/photodummypet.jpg")} style={mainStyle.petPhoto}/>
                    <View style={mainStyle.petInfo}>
                        <Text style={mainStyle.petName}>Mylo</Text>
                        <View style={mainStyle.petBreedAge}>
                            <Text>breedName,</Text>
                            <Text> 2 years old</Text>
                        </View>
                        <TouchableOpacity style={mainStyle.button4}>
                            <Icon
                                name="pencil"
                                size={20}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                    <View style={mainStyle.petCard}>
                        <Image source={require("./assets/photodummypet.jpg")} style={mainStyle.petPhoto}/>
                        <View style={mainStyle.petInfo}>
                            <Text style={mainStyle.petName}>Mylo</Text>
                            <View style={mainStyle.petBreedAge}>
                                <Text>breedName,</Text>
                                <Text> 2 years old</Text>
                            </View>
                            <TouchableOpacity style={mainStyle.button4}>
                                <Icon
                                    name="pencil"
                                    size={20}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

            </View>
            </View>
            </ScrollView>
        );
    }

}


export default Profile;
