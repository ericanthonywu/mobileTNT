import React from 'react';
import {
    Text,
    Button,
    AsyncStorage,
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    TextInput,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Chat from './Chat';
import {mainStyle} from './component/styleAsset';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextDefault} from './component/Text';

class ChatRoom extends React.Component{
    render() {
        return (
            <View style={mainStyle.mainFrame}>
                <View style={mainStyle.chatRoomHeaderContainer}>
                    <View style={mainStyle.chatRoomContact}>
                        <Text style={mainStyle.chatRoomContactName}>Wisnu Wiyantoro</Text>
                        <Text style={mainStyle.chatRoomActor}>(Veteranian)</Text>
                    </View>
                </View>

                <ScrollView style={mainStyle.chatRoomArea}>
                    <View style={mainStyle.bubbleContainerSelf}>
                        <View style={mainStyle.bubbleSelf}>
                            <Text style={{lineHeight:20, fontSize:14}}>Hi pak Wisnu, saya mau tanya; anjing saya sudah 10 hari susah makan. Di kulit lehernya muncul kemerahan seperti bintik-bintik alergi. Kira-kira ada apa ya pak?</Text>
                        </View>
                        <View style={mainStyle.bubbleSelfInfo}>
                            <Text style={mainStyle.bubbleTime}>18:30</Text>
                            <Text>|</Text>
                            <Text style={mainStyle.bubbleStatus}>Seen</Text>
                        </View>
                    </View>
                    <View style={mainStyle.bubbleContainer}>
                        <Image source={require("./assets/man.jpg")} style={mainStyle.chatRoomContactPhoto}/>
                        <View style={{width:"100%"}}>
                            <View style={mainStyle.bubble}>
                                <Text style={{lineHeight:20, fontSize:14}}>Baik, boleh dijawab dulu sebelumnya sudah pernah berkonsultasi?</Text>
                            </View>
                            <View style={mainStyle.bubbleInfo}>
                                <Text style={mainStyle.bubbleTime}>18:35</Text>
                            </View>
                        </View>

                    </View>
                    <View style={mainStyle.bubbleContainerSelf}>
                        <View style={mainStyle.bubbleSelf}>
                            <Text style={{lineHeight:20, fontSize:14}}>Belum pak.</Text>
                        </View>
                        <View style={mainStyle.bubbleSelfInfo}>
                            <Text style={mainStyle.bubbleTime}>18:36</Text>
                            <Text>|</Text>
                            <Text style={mainStyle.bubbleStatus}>Seen</Text>
                        </View>
                    </View>
                    <View style={mainStyle.bubbleContainerSelf}>
                        <View style={mainStyle.bubbleSelf}>
                            <Text style={{lineHeight:20, fontSize:14}}>Belum pak.</Text>
                        </View>
                        <View style={mainStyle.bubbleSelfInfo}>
                            <Text style={mainStyle.bubbleTime}>18:36</Text>
                            <Text>|</Text>
                            <Text style={mainStyle.bubbleStatus}>Seen</Text>
                        </View>
                    </View>
                    <View style={mainStyle.bubbleContainerSelf}>
                        <View style={mainStyle.bubbleSelf}>
                            <Text style={{lineHeight:20, fontSize:14}}>Belum pak.</Text>
                        </View>
                        <View style={mainStyle.bubbleSelfInfo}>
                            <Text style={mainStyle.bubbleTime}>18:36</Text>
                            <Text>|</Text>
                            <Text style={mainStyle.bubbleStatus}>Seen</Text>
                        </View>
                    </View>
                    <View style={mainStyle.bubbleContainerSelf}>
                        <View style={mainStyle.bubbleSelf}>
                            <Text style={{lineHeight:20, fontSize:14}}>Belum pak.</Text>
                        </View>
                        <View style={mainStyle.bubbleSelfInfo}>
                            <Text style={mainStyle.bubbleTime}>18:36</Text>
                            <Text>|</Text>
                            <Text style={mainStyle.bubbleStatus}>Seen</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={mainStyle.chatRoomInputContainer}>
                    <TouchableOpacity style={mainStyle.chatRoomMenu}>
                        <Text style={{fontSize:40}}>+</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={mainStyle.chatRoomInput}
                        onChangeText={text => onChangeText(text)}
                    />
                    <TouchableOpacity style={mainStyle.chatRoomInputSend}>
                        <Text style={{fontSize:30}}>></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ChatRoom
