import React, {Component}  from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import styles from '../PostScreenComponent/style'
import {Toast} from 'native-base';





export  default class PostScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { title: ''};
        
    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps = ", nextProps);
        if(nextProps.posts.length !== this.props.posts.length){
            Toast.show({
                text: 'Post updated successfully',
                position: "top",
                duration: 3000,
                type: 'success',
                style: {
                  marginTop:-20
                 }
              })
        
        }
        
        
        /* return nextProps.posts.length !== this.props.posts.length; */
    }
render(){
  
  return (
    <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Title"
               placeholderTextColor = 'rgba(217, 35, 45, 1)'
               autoCapitalize = "none"
               onChangeText={(text) => this.setState({ title: text })}
               value={this.state.title}
               />
            
            <TouchableOpacity
               style = {styles.ContinueBtn}
               onPress={() => {
               const {title} = this.state;  
              if (!title.length) {
              return;
               }                 
        this.props.onAddPost({title: title});
             }}>
               <Text style = {styles.ContinueText}> Submit </Text>
            </TouchableOpacity>
         </View>
         )
    }
}
