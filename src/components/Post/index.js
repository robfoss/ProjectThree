import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import styles from './styles'

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Video from 'react-native-video'

const Post = (props) => {

    const { post } = props

    const [paused, setPaused] = useState(false)

    onPlayPausePress = () => {
        setPaused(!paused)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video
                        style={styles.video}
                        source={{ uri: post.videoUri }}
                        resizeMode={'cover'}
                        repeat={true}
                        paused={paused}
                    />

                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <View style={styles.profilePictureContainer}>
                                <Image style={styles.profilePicture} source={{ uri: post.user.imageUri }} />
                            </View>
                            <View style={styles.iconsContainer}>
                                <Entypo name={"heart-outlined"} size={45} color={'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </View>
                            <View style={styles.iconsContainer}>
                                <Fontisto name={"commenting"} size={40} color={'white'} />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>
                            <View style={styles.iconsContainer}>
                                <Fontisto name={"share-a"} size={35} color={'white'} />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={"beamed-note"} size={24} color={'white'} />
                                    <Text style={styles.songName}>{post.songName}</Text>
                                </View>
                            </View>
                            <Image
                                style={styles.songImage}
                                source={{ uri: post.songImage }} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Post
