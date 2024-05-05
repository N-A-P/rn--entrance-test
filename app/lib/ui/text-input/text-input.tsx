import { TextInput as RNTextInput,Animated, StyleSheet, TextInputProps, View, NativeSyntheticEvent, TextInputFocusEventData, Pressable } from "react-native";
import { atoms } from "../../layout/atoms";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "../../layout/token";
import { useRef, useState } from "react";
// import Text from "../text/Text";
import Text from "../text";


type Props = {
    label: string
    icon?: React.ReactNode
    error?: string
} & TextInputProps

const LABEL_Y = 50
export default function TextInput ({label,error, icon,...props}: Props){
    const labelY = useRef(new Animated.Value(LABEL_Y)).current; // Initial value for opacity: 0
    const valRef= useRef('')

    const [enablePeakPassword, setPeakPassword] = useState(false)

    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        props.onBlur?.(e)
        if(valRef.current.length > 0) return
        Animated.timing(labelY, {
            toValue: LABEL_Y,
            duration: 200,
            useNativeDriver: true,
          }).start();
    }

    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        Animated.timing(labelY, {
            toValue: 15,
            duration: 200,
            useNativeDriver: true,
          }).start();
        props.onFocus?.(e)
    }
    const onChangeText = (v: string) =>{
        props.onChangeText?.(v)
        valRef.current = v
    }
    const togglePeakPassword = () => setPeakPassword(v => !v) 
    
    return (
        <View
        //  style={{ marginBottom: 270}}
        >
            <Animated.Text style={[style.lb, {transform: [{translateY: labelY}]}]}>{label}</Animated.Text>
            <RNTextInput secureTextEntry={enablePeakPassword} style={style.ip} {...props} onChangeText={onChangeText} onFocus={onFocus} onBlur={onBlur} />
            {icon && (
                <Pressable onPress={togglePeakPassword} style={style.peak}>
                    {icon}
                </Pressable>
            )}
            <View style={[]}>
              <Text level="subscript" color={Colors.ERROR}>
                {error || ''}
              </Text>
            </View>
        </View>
    )
}
const style =StyleSheet.create({
    ip: {
        paddingVertical: 10,
        marginTop: 20,
        color: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        ...atoms.text_md,
    },
    lb: {
        color: color.TEXT_GRAY,
        ...atoms.text_sm
    },
    peak: { position: 'absolute', bottom: 30, right: 0 }
})