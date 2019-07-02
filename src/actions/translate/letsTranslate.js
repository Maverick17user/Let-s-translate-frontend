import axios from 'axios'
import server from '../../serverConfig'

export const letsTranslate = (history, data) => dispatch => {
    axios.post(`${server}api/texts/startTranslate`, data)
    .then(res => {
        alert('Message created!')
        history.push('/workSpace')
    })
    .catch(err => console.log(err))
}