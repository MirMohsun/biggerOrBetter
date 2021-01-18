import * as React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                style={{
                    width: 150,
                    height: 45,
                    backgroundColor: 'yellow',
                }}
                onPress={() => {
                    navigation.navigate('Details')
                    ;
                }}
            />
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
