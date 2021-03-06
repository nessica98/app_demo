/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,  View,TouchableHighlight,Image} from 'react-native';
import { ScreenLeft,Item,Title,Container, Content, Header,Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Footer,FooterTab } from 'native-base';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const styles = StyleSheet.create({ bottom0: {
  bottom : -20,
}});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{justifyContent : 'center'}}>Report</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='settings' />
            </Button>
          </Right>
        </Header>
        
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Irene</Text>
                  <Text note>Admin</Text>
                  <Text style = {{fontSize:12, color:'red'}}>Date : </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                  <Text>Status</Text></Body>
            </CardItem>
            <Card transparent>
              <CardItem>
              <View style={{flex: 1,flexDirection: 'column', alignItems: 'flex-end'}}>
                <Text>+ Join</Text>
              </View>
              </CardItem>
              </Card>
            </Card>
            
          
            <Card transparent>
            <CardItem>
              <Body>
              <Button full Light ><Text>Unwanted commercial content or spam</Text></Button>
              </Body>
            </CardItem>
            </Card>
            <Card transparent>
            <CardItem>
              <Body>
              <Button full Light ><Text>sexually explicit material</Text></Button>
              </Body>
            </CardItem>
            </Card>
            <Card transparent>
            <CardItem>
              <Body>
              <Button full warning ><Text>Hate speech</Text></Button>
              </Body>
            </CardItem>
            </Card>
            <Card transparent>
            <CardItem>
              <Body>
              <Button full Light ><Text>Harrassment or bullying</Text></Button>
              </Body>
            </CardItem>
            </Card>
            <View style={styles.bottom0}>
            <Item>
              <Left><TouchableHighlight style = {{bottom: -70 ,position: 'absolute', zIndex: 999}}>
              <Image
                source={require("./icon/NO.png")}
                style = {{width:30 ,height:30}}
              />
             </TouchableHighlight>
             </Left>
              <Right>
              <TouchableHighlight style = {{bottom: -70,position: 'absolute', zIndex: 999}}>
              <Image
                source={require("./icon/YES.png")}
                style = {{width:30 ,height:30}}
              />
             </TouchableHighlight>
              </Right>
              
            </Item>
            
            </View>
            
           
            
            
          
          
      </Container>
    );
  }
}


