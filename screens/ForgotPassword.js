import React, {  useState, useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

export default function ForgotPassword() {
    
    const [isLoading,setLoading] = useState(true);
    const [source,setSource] = useState([]);

    useEffect(() => {
            fetch('https://reactnative.dev/movies.json')
                .then((response) => response.json())
                .then((json) => setSource(json.movies))
                .then(console.log("Loaded Link"))
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => setLoading(false))
        },[]);

    if(isLoading){
        return(
            <View>
                <ActivityIndicator />
                <Text>Content Loaded</Text>
            </View>
          
        );
    }
    else{

    
        return(
            <View>
                <FlatList 
                data={source}
                key={({id}, index) => id}
                renderItem={({item}) => 
                    <Text>{item.title}</Text>
            }
                />
            </View>
        );
    }

}