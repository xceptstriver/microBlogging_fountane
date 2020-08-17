import React, {Component} from 'react'
import {View,FlatList,TouchableOpacity,Image,TextInput,} from 'react-native'
import {Text,Card,CardItem,Left,Right,Body} from "native-base";
import styles from '../ListScreenComponent/style'
import Dimension from '../../Theme/Dimension'



export default class ListScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  text: '' };
        this.arrayholder = [];
        
    }

    componentDidMount(){
        console.log("listScreenComponent");
        this.props.onFetchPosts('asc');
      } 
      componentWillReceiveProps(nextProps){
        console.log("nextProps = ", nextProps);
        this.setState({dataSource:nextProps.posts},
            function(){
                this.arrayholder = nextProps.posts
            });
        
        /* return nextProps.posts.length !== this.props.posts.length; */
    }
    SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function(item) {
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          dataSource: newData,
          text: text,
        });
      }
    
    getPost(item, index){
        console.log("item mc = ", item);
        return(
   <TouchableOpacity>
    <View>
    <Card style={styles.CardWrap}>
     <CardItem style={styles.CardInnerWrap}>
       <Left style={styles.ImgWrap}>
        <Image source={require('../../Assets/Images/UserIcon.png')} style={styles.Image}/>
        </Left>
        <Body style={{flex:2.5, marginLeft:Dimension.margin10}}>
          <View style={{flexDirection:"row",flex:1}}>
              <View style={{flex:3}}>
              <Text style={styles.Name}>{item.id}</Text>
              </View>
            </View>
          <View style={{flexDirection:"row",flex:1}}>
              <View style={{flex:1}}>
              <Text style={styles.Brand}>Title</Text>
                <View style={styles.row}>
                  <Text style={styles.OriginalPrice} numberOfLines={3}>{item.title}</Text>
                </View>
              </View>
              <View style={{flex:1,alignItems:'flex-end',justifyContent:"flex-end"}}>
              <TouchableOpacity style={styles.BtnWrap}>
               <Text style={styles.BtnText}>FOLLOW</Text>
              </TouchableOpacity>
              </View>
          </View>
         </Body>
        </CardItem>
        </Card>
        </View>
     </TouchableOpacity>
            
        )


    }
    render() {
        console.log("rendering = ", this.props);
        const {navigation} = this.props;
        return (
            <>
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
            {this.props.posts && this.props.posts.length?
            <View style={{paddingHorizontal:10,marginTop:20,paddingBottom:40}}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.SearchFilterFunction(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder="Search Here"
             />
           
             <FlatList
                 data={this.state.dataSource}
                 keyExtractor={(item) => item.Id}
                 key={"posts"}
                 renderItem={({ item, index }) =>(
                 this.getPost(item, index)
                )}/>
                 </View>:null}
                 </View>
                 <View style={{paddingHorizontal:10}}>
             <TouchableOpacity style={styles.ContinueBtn} onPress={() => navigation.navigate('Post')}>
                <Text style={styles.ContinueText}>ADD POST</Text>
              </TouchableOpacity>
                </View>
                </>);
    }
}

