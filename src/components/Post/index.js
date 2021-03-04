import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'

import Video from 'react-native-video'

const Post = (props) => {

    const [post, setPost] = useState(props.post)
    const [isLiked, setIsLiked] = useState(false)

    const [paused, setPaused] = useState(false)

    onPlayPausePress = () => {
        setPaused(!paused)
    }


    //Likes functionality
    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1
        setPost({
            ...post,
            likes: post.likes + likesToAdd
        })
        setIsLiked(!isLiked)
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
                            <TouchableOpacity
                                style={styles.iconsContainer}
                                onPress={onLikePress}
                            >
                                <Entypo name={"heart-outlined"} size={45} color={isLiked ? 'red' : 'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>
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
