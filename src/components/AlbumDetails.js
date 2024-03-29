import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { title, artist, thumbnail_image, image, url} = album
    const {
        headerTitle,
        headerPicture,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source= {{uri: thumbnail_image}} style={headerPicture}/>
                </View>
                <View style={headerTitle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{ uri: image}} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    headerTitle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },

    headerTextStyle: {
        fontSize: 18,
    },

    headerPicture: {
        height: 50,
        width: 50,
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetails;