import React from 'react';
import {Text, Button, AsyncStorage, Image, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Chat from './Chat';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextDefault} from './component/Text';

class Home extends React.Component {
    viewPager = React.createRef();

    state = {
        name: "",
        photo: "",
    }

    async componentDidMount() {
        this.setState({
            name: await AsyncStorage.getItem("name"),
            photo: await AsyncStorage.getItem("photo")
        })
    }

    render() {
        return (
            <>
                <ViewPager ref={this.viewPager} style={{flex : 1,fontFamily:'Lato-Regular'}} initialPage={0}>
                    <ScrollView key="1">

                        <View style={mainStyle.mainFrame}>

                        <View style={mainStyle.headerContainer}>
                            {/*<Image source={{uri : this.state.photo}} style={{width: 60, height: 60}}/>*/}
                            {/*<Text>Hi {this.state.name}</Text>*/}

                            <TouchableOpacity style={{margin:10}}>
                                <Icon
                                    name="bell"
                                    size={28}
                                    color="#e1e1e1"
                                />
                             </TouchableOpacity>
                            <TouchableOpacity style={{margin:10}}>
                                <Icon
                                    name="comment"
                                    size={28}
                                    color="#e1e1e1"
                                />
                            </TouchableOpacity>

                        </View>
                            <View style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start", width:"100%", paddingTop:20, paddingLeft:20}}>
                                <Text style={mainStyle.headline1}>What happens today</Text>
                            </View>
                        <View style={mainStyle.sectionCentered}>
                            <View style={mainStyle.scheduleitemMain}>
                                <View style={mainStyle.scheduleclockMain}>
                                    <Text style={{color:"#fff", fontSize:18}}>15:50</Text>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <Image source={require("./assets/women.jpg")} style={mainStyle.schedulephotoMain}/>
                                    <Image source={require("./assets/photodummypet.jpg")} style={mainStyle.schedulephotoMain}/>
                                </View>
                                <View  style={mainStyle.scheduledescMain}>
                                    <Text style={{textAlign:"center", fontFamily:"Lato-Regular"}}>You have appointment with Jane Dubois (Veterinarian) for Mylo</Text>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <Icon
                                        name="map-marker"
                                        size={20}
                                        color="#868686"
                                    />
                                    <Text style={{marginLeft:5}}>Etno Clinic</Text>
                                </View>
                            </View>
                            <View style={mainStyle.scheduleItem}>
                                <View style={mainStyle.scheduleClock}>
                                    <Text style={{color:"#fff", fontSize:18}}>15:50</Text>
                                </View>
                                <View style={mainStyle.scheduleDesc}>
                                    <Text>Appointment with..</Text>
                                </View>
                            </View>
                            <View style={mainStyle.scheduleItem}>
                                <View style={mainStyle.scheduleClock}>
                                    <Text style={{color:"#fff", fontSize:18}}>15:50</Text>
                                </View>
                                <View style={mainStyle.scheduleDesc}>
                                    <Text>Appointment with..</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={mainStyle.scheduleItem2}>
                                    <Text style={{color:"#fff", fontSize:18}}>View monthly agenda</Text>
                            </TouchableOpacity>
                        </View>



                            <View style={{flexDirection:"column", justifyContent:"center", alignItems:"flex-start", width:"100%", paddingTop:20, paddingLeft:20}}>
                                <Text style={mainStyle.headline1}>The Bulletins</Text>
                                <TextDefault>Find articles, events, and many more!</TextDefault>
                            </View>

                            <View style={mainStyle.sectionCentered}>

                                    <View style={mainStyle.newsCard}>
                                        <ImageBackground source={require("./assets/newsdummy.jpg")} style={{width:"100%", height:280, borderRadius:30, justifyContent:"flex-end", alignItems:"center"}} imageStyle={{borderRadius:30}}>
                                            <View style={mainStyle.newsOverlayBg}>
                                                <View style={mainStyle.newsOverlay}>
                                                    <Text style={mainStyle.headlineNewsOverlay}>Lorem Ipsum Dolor Sit Amet</Text>
                                                    <Text style={mainStyle.shortNewsOverlay}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam..
                                                    </Text>
                                                </View>
                                            </View>
                                        </ImageBackground>
                                    </View>
                            </View>
                            {/*<View style={mainStyle.sectionCentered}>
                            <View style={mainStyle.containerVet}>
                                <View style={mainStyle.vet}>
                                    <Image source={{uri : this.state.photo}} style={mainStyle.vetPhoto}/>
                                    <Text style={mainStyle.vetName}>{this.state.name}</Text>
                                    <Text style={mainStyle.vetExp}>3 years of experience</Text>
                                    <View style={mainStyle.vetLoc}>
                                        <Icon
                                            name="map-marker"
                                            size={20}
                                            color="#868686"
                                        />
                                        <Text style={{marginLeft:5, color:"#868686", fontSize:12}}>Tangerang Selatan</Text>
                                    </View>
                                    <TouchableOpacity style={mainStyle.button2}>
                                        <Text style={{color:"#fff", fontSize:15, textAlign:"center"}}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={mainStyle.vet}>
                                    <Image source={{uri : this.state.photo}} style={mainStyle.vetPhoto}/>
                                    <Text style={mainStyle.vetName}>{this.state.name}</Text>
                                    <Text style={mainStyle.vetExp}>3 years of experience</Text>
                                    <View style={mainStyle.vetLoc}>
                                        <Icon
                                            name="map-marker"
                                            size={20}
                                            color="#868686"
                                        />
                                        <Text style={{marginLeft:5, color:"#868686", fontSize:12}}>Tangerang Selatan</Text>
                                    </View>
                                    <TouchableOpacity style={mainStyle.button2}>
                                        <Text style={{color:"#fff", fontSize:15, textAlign:"center"}}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={mainStyle.containerVet}>
                                <View style={mainStyle.vet}>
                                    <Image source={{uri : this.state.photo}} style={mainStyle.vetPhoto}/>
                                    <Text style={mainStyle.vetName}>{this.state.name}</Text>
                                    <Text style={mainStyle.vetExp}>3 years of experience</Text>
                                    <View style={mainStyle.vetLoc}>
                                        <Icon
                                            name="map-marker"
                                            size={20}
                                            color="#868686"
                                        />
                                        <Text style={{marginLeft:5, color:"#868686", fontSize:12}}>Tangerang Selatan</Text>
                                    </View>
                                    <TouchableOpacity style={mainStyle.button2}>
                                        <Text style={{color:"#fff", fontSize:15, textAlign:"center", fontWeight:"bold"}}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={mainStyle.vet}>
                                    <Image source={{uri : this.state.photo}} style={mainStyle.vetPhoto}/>
                                    <Text style={mainStyle.vetName}>{this.state.name}</Text>
                                    <Text style={mainStyle.vetExp}>3 years of experience</Text>
                                    <View style={mainStyle.vetLoc}>
                                        <Icon
                                            name="map-marker"
                                            size={20}
                                            color="#868686"
                                        />
                                        <Text style={{marginLeft:5, color:"#868686", fontSize:12}}>Tangerang Selatan</Text>
                                    </View>
                                    <TouchableOpacity style={mainStyle.button2}>
                                        <Text style={{color:"#fff", fontSize:15, textAlign:"center"}}>Book</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>*/}

                        {/*<Button title={'Chat'} onPress={() => this.viewPager.current.setPage(1)}/>*/}
                        {/*<Button title={'Consult'} onPress={() => this.props.navigation.navigate('Consult')}/>*/}

                        </View>

                    </ScrollView>
                    <View key="2">
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
                                    <TouchableOpacity style={mainStyle.chatItem} onPress={() => this.props.navigation.navigate("ChatRoom")}>
                                        <Image source={require("./assets/photodummy.png")} style={mainStyle.chatPhoto}/>
                                        <View style={{width:"90%"}}>
                                            <View style={{flexDirection:"row"}}>
                                                <Text style={{fontWeight:"bold", marginRight:5}}>
                                                    Wisnu Wiyantoro
                                                </Text>
                                                <Text>
                                                    (Veteranian)
                                                </Text>

                                            </View>
                                            <View style={{width:"90%"}}>
                                                <Text>Text chat chat chat chat chat chat chatchat chat chat chat chat chat </Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ViewPager>
            </>
        );
    }

}

export default Home;
