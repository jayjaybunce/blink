import React, { useState } from 'react'
import {Text, View, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'
import { LinearGradient } from 'expo-linear-gradient'
import AccountButton from '../AccountButton/AccountButton'
import DynInput from '../DynInput/DynInput'
import folderService from '../../utils/folderService'
import LargeButton from '../LargeButton/LargeButton'
import { ColorPicker } from 'react-native-color-picker'
const Header = styled.View`
    width: 100%;
    ${'' /* background-color: rgba(255, 255, 255, 0.09); */}
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    
`


const PreHeader = styled.View`
    height: 30px;
    background-color: rgba(255, 255, 255, 0.09);
    ${'' /* background-color:red; */}
`
const Title = styled.Text`
    color: white;
    font-size: 30px;
    text-align: center;
`

const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    background-color: #00e676;
    margin-top: 10px;
    
`
const ButtonTitle = styled.Text`
    text-align: center;
    color: white;
    font-size: 30px;
    line-height: 50px;
`

const ColorSwatch = styled.View`
    height: 40px;
    width: 40px;
    display: block;
    border-radius: 10%;
    margin-left: 89%;
    margin-top: -50px;
    border: 0.2px solid grey;
    

`
const Container = styled.View`
    width: 90%;
    background-color: white;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 10px 5px #cfcfcf;

`

const NewFolder = props => {
    
    const handleSubmit = async () => {
        try{
            const res = await folderService.createFolder({title: title, color: color})
            if(res.status === 200){
                props.navigation.pop()
            }
        }catch(e){
            console.log(e)
        }
    }
    const [title, setTitle] = useState( props.title? props.title: null)
    const [color, setColor ] = useState(props.color? props.color : '#00ff9d')
    return(
        <>
        <LinearGradient
            colors={['#833ab4','#fd1d1d','#fcb045']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}    
        >
            <PreHeader/>
            <Header>
                <Title>
                    New Folder
                </Title>
                <AccountButton
                    user={props.user}
                    exc='addfolder'
                    navigation={props.navigation}
                />
            </Header>
            </LinearGradient>
            <Container>
        <Text style={styles.label}>
            Folder Name
        </Text>
        <DynInput
            size='full'
            name='title'
            blackBorder={true}
            handleChange={setTitle}
            inputValue={title}
            validInput={title ? true : false}

        />
        <View style={{
            
            width: '100%'
        }}>
        <ColorSwatch style={{
            backgroundColor: color,
        }}/>

        </View>
        <Text style={{fontSize:20, textAlign: 'center'}}>Tap Center To Confirm Color</Text>
        <ColorPicker 
            onColorChange={setColor}
            onColorSelected={setColor}
            style={{flex:1}}
            color={color}
        />
        <Button onPress={()=>handleSubmit()}>
            <ButtonTitle>
                Create folder
            </ButtonTitle>
        </Button>
        <View style={{height: 200}}>

        </View>
        </Container>
    </>
    )
}

const styles = {
    label: {
        marginTop: 10,
        marginBottom: 5,
        // marginLeft: -30,
        display: 'flex',
        width: '50%',
        textAlign: 'center',
        fontSize: 25,
        
        alignSelf: 'flex-start',
    },
}
export default NewFolder;