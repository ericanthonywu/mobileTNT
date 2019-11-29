import React from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {mainStyle} from './component/styleAsset';

class Care extends React.Component {
    onChangeText = text => {

    };

    render() {
        return (
            <ScrollView>
                <View style={mainStyle.mainFrame}>
                    <View style={mainStyle.mapDisplay}>
                        <Image source={require('./assets/dummymap.png')} style={{width: '100%', height: 400}}/>
                        <View style={mainStyle.searchBarContainer}>
                            <TextInput
                                style={mainStyle.searchInput}
                                onChangeText={text => this.onChangeText(text)}
                            />
                            <TouchableOpacity
                                style={mainStyle.searchPicker}
                                onChangeText={text => this.onChangeText(text)}
                            />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        paddingTop: 20,
                        paddingLeft: 20,
                    }}>
                        <Text style={mainStyle.headline1}>Vets in vicinity</Text>
                    </View>
                    <View style={mainStyle.sectionCentered}>
                        <View style={mainStyle.containerVet}>
                            <Image source={require('./assets/women.jpg')} style={mainStyle.vetPhoto}/>
                            <View style={mainStyle.vetContent}>
                                <Text style={mainStyle.vetName}>Jane Dubois</Text>
                                <Text style={mainStyle.vetLoc}>at Etno Clinic</Text>
                                <View style={mainStyle.vetCTA}>
                                    <TouchableOpacity style={mainStyle.buttonCareCTA1}>
                                        <Text style={{color: '#fff', fontWeight: 'bold'}}>BOOK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={mainStyle.buttonCareCTA2}>
                                        <Text style={{color: '#fff', fontWeight: 'bold'}}>ASK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={mainStyle.containerVet}>
                            <Image source={require('./assets/man.jpg')} style={mainStyle.vetPhoto}/>
                            <View style={mainStyle.vetContent}>
                                <Text style={mainStyle.vetName}>Jane Dubois</Text>
                                <Text style={mainStyle.vetLoc}>at Etno Clinic</Text>
                                <View style={mainStyle.vetCTA}>
                                    <TouchableOpacity style={mainStyle.buttonCareCTA1}>
                                        <Text style={{color: '#fff', fontWeight: 'bold'}}>BOOK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={mainStyle.buttonCareCTA2}>
                                        <Text style={{color: '#fff', fontWeight: 'bold'}}>ASK</Text>
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

export default Care;
