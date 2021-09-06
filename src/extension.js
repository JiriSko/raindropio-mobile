import React from 'react'
import { ThemeProvider } from 'styled-components'
import NavigationContainer from 'co/navigation/container'
import Stack from 'co/navigation/stack'
import { StackActions } from '@react-navigation/native'

import Extension from 'screens/extension'
import Bookmark from 'screens/bookmark'
import Collection from 'screens/collection'
import Create from 'screens/create'
import Overlay from 'screens/overlay'
import Group from 'screens/group'
import Tag from 'screens/tag'

export default class ExtensionRegistry extends React.Component {
    _navigator = React.createRef()

    theme = { isExtension: true }

    onFailedStateChange = (state,action)=>{
        if (action.type == 'GO_BACK')
            return StackActions.replace('extension', {screen: 'close'})
    }

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{headerShown: false}}
                        onFailedStateChange={this.onFailedStateChange}>
                        <Stack.Screen name='extension' component={Extension} options={Extension.options} />

                        <Stack.Screen name='bookmark' component={Bookmark} options={Bookmark.options} />
                        <Stack.Screen name='collection' component={Collection} options={Collection.options} />
                        <Stack.Screen name='create' component={Create} options={Create.options} />
                        <Stack.Screen name='overlay' component={Overlay} options={Overlay.options} />
                        <Stack.Screen name='group' component={Group} options={Group.options} />
                        <Stack.Screen name='tag' component={Tag} options={Tag.options} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        )
    }
}