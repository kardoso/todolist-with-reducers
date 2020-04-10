import { combineReducers } from 'redux'

import todos from './Todos'
import loading from './Loading'
import goals from './Goals'

export default combineReducers({
  todos,
  loading,
  goals,
})
