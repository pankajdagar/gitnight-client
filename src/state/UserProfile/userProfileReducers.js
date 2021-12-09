import { combineObject } from '../helpers'
import { GET_ALL_CONNECTIONS_FAILURE, GET_ALL_CONNECTIONS_REQUEST } from '../Home/homeTypes'
import { GET_USER_PROFILE_SUCCESS, SET_USER_PROFILE_DATA } from './userProfileTypes'

export const userProfileInitialState = {
  profileData: {
    name: 'Pankaj Dagar',
    imageUrl: 'https://github.com/pankajdagar.png?size=200',
    coverImageUrl:
      'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    introduction: `
      Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.
      Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
    `,
    fields: {
      LinkedIn: 'pankajdagar',
      Twitter: 'ricardocooper@example.com',
      Website: 'Senior Front-End Developer',
      GitHub: 'pankajdagar',
      Location: 'San Francisco',
      Country: 'India',
      City: 'Delhi',
    },
  },
  loading: false,
  error: false,
}

const userProfileReducer = (state = userProfileInitialState, action) => {
  switch (action.type) {
    case GET_ALL_CONNECTIONS_REQUEST:
      return combineObject(state, { loading: true, error: false, profileData: {} })

    case GET_USER_PROFILE_SUCCESS:
      return combineObject(state, { profileData: action.payload })

    case GET_ALL_CONNECTIONS_FAILURE:
      return combineObject(state, { loading: false, error: true, profileData: {} })

    default:
      return state
  }
}

export default userProfileReducer
