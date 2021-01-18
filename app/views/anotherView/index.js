import * as React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const DetailsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                style={{
                    width: 150,
                    height: 45,
                    backgroundColor: 'red',
                }}
                onPress={() => {
                    navigation.navigate('Home')
                    ;
                }}
            />
            <Text>Details</Text>
        </View>
    );
};

export default DetailsScreen;
