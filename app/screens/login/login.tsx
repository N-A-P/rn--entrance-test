import React from "react";
import { Button, Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import ScreenWrapper from "../../lib/layout/screen";
import { navigateScreen } from "../../navigation/navigation-service";
import { atoms } from "../../lib/layout/atoms";
import TextInput from "../../lib/ui/text-input/text-input";
import LinearGradient from "react-native-linear-gradient";
import { color } from "../../lib/layout/token";
import Text from "../../lib/ui/text";
import Background from "../../lib/ui/background";
import CheckBox from "../../lib/ui/checkbox";


export default function LoginScreen(){
    return (
        <ScreenWrapper >
            <Background source={require('../../../assets/images/bg1.png')} /> 
            <View style={[atoms.h_full, atoms.w_full, atoms.z_10  ]} >
                <View style={[atoms.flex_1,  ]}>

                </View>
                <View style={[atoms.flex_1, atoms.px_lg ]}>
                    <TextInput autoComplete='username' autoCorrect={false}  label="username" />
                    <TextInput
                     autoComplete='password'
                     autoCorrect={false}
                     label="password"
                     icon={
                        <Image  source={require('../../../assets/images/eye.png')}/>
                     }
                    />
                    <View style={[atoms.flex_row, atoms.align_center]}>
                        <CheckBox
                        // value={checkBox}
                        onToggle={()=> {}}
                        containerStyle={atoms.mr_xs}
                        />
                        <Text level="body">I am over 16 years of age</Text>
                    </View>
                    <PolicyStatement />
                </View>
            </View>

        </ScreenWrapper>
    )
}

function PolicyStatement ( ) {
    return (

        <View style={[atoms.my_md]}>
            <Text level="subscript">
              {`By clicking Sign Up, you are indicating that you have read and agree to the `}
              <Text level="subscript" color={color.PRIMARY}>
                Terms of Service
              </Text>
              {' and '}
              <Text level="subscript" color={color.PRIMARY}>
                Privacy Policy
              </Text>
            </Text>
          </View>
    )
}