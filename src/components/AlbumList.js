import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//make component
class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('ok here we are in album list');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));

    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }


    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList; 