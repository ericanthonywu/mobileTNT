import React from 'react'
import {Image, View} from 'react-native';

export default function SplashScreen () {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image source={{uri: 'http://tailandtale.com/wp-content/uploads/2019/08/tnt_logo_jul19-1.png'}}
                   src={{uri: 'http://tailandtale.com/wp-content/uploads/2019/08/tnt_logo_jul19-1.png'}}
                   style={{width: "100%", height: 100}}/>
        </View>
    )
}
