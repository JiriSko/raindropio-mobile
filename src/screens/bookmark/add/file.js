import t from 't'
import { PureComponent } from 'react';
import DocumentPicker from 'react-native-document-picker'
import Goto from 'co/goto'

export default class AddFile extends PureComponent {
    onPress = async ()=>{
        let files = []
        try{
            files = await DocumentPicker.pick()
        }catch(error){
            if (!DocumentPicker.isCancel(error))
                this.props.navigation.push('overlay', { screen: 'error', params: { error } })
        }

        if (!files.length)
            return

        this.props.navigation.replace('create', {
            type: 'file',
            values: files.map(({name, uri, type})=>({
                file: {
                    uri,
                    name,
                    type,
                },
                collectionId: this.props.collectionId
            }))
        })
    }

    render() {
        return (
            <Goto 
                last={this.props.last}
                icon='file'
                color='document'
                label={t.s('add')+' '+t.s('file').toLowerCase()}
                subLabel={`PDF, Office, ${t.s('videos')}`}
                onPress={this.onPress} />
        )
    }
}