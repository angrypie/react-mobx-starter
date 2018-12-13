import { observable } from 'mobx'

class AppState {
	@observable authenticated = true

	login() {
		this.authenticated = true
	}

	logout() {
		this.authenticated = false
	}
}

export default AppState
