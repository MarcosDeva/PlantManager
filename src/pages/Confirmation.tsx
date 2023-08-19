import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Text,
    View
 } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function Confirmation(){
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😆
                </Text>
                
                <Text style={styles.title}>
                    Prontinho
                </Text>
                
                <Text style={styles.subtitle}>
                Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },

      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },

      emoji: {
        textAlign: 'center',
        fontSize: 78,
        marginBottom: 20
      },

      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        // fontFamily: fonts.heading,
      },

      subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        // fontFamily: fonts.text,
        paddingVertical: 10,
        marginHorizontal: 20
      },

      footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 70
      }
});