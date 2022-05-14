import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import {Feedbacktype} from '../../components/Widget';
import {ScreenShotBottom} from '../../components/ScreenShotBottom';

import { theme } from '../../theme';
import { styles } from './styles';
import {feedbackTypes} from  '../../utils/feedbackTypes';


interface props {
  feedbacktype: Feedbacktype;
}

export function Form({feedbacktype}: props) {

  const feedbackTypeInfo = feedbackTypes[feedbacktype];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
          size={24}
          weight={'bold'}
          color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
           <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
           />
         
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}     
          </Text>

        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Algo nao esta funcionando bem? Queremos corrigir.Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
     />
     
     <View style={styles.footer}>
       <ScreenShotBottom
        onTakeShot={() => {}}
        onRemoveShot={() => {}}
        screenShot=''
       />
     </View>
      
    </View>
  );
}