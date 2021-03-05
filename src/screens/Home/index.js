import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'

import Post from '../../components/Post'

import post from '../../../Data/posts'
const Home = () => {
    return (
        <View>
            <FlatList
                data={post}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 80}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default Home
