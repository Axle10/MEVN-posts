<template>
	<v-container class="form">
		<v-card>
			<v-card-title>
				SIGNUP FORM
				<v-spacer></v-spacer>
				<v-btn flat @click="closeDialog">
					<v-icon>close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<v-form ref="form" method="post" id="form-signup" @submit.prevent="addUser">
					<v-layout row wrap>
						<v-flex xs12 md5 sm12>
							<v-text-field v-model="user.username" label="Enter your Username" type="text" placeholder="">
							</v-text-field>
						</v-flex>
						<v-flex xs12 md6 sm12 offset-xs0 offset-sm0 offset-md1>
							<v-text-field v-model="user.name" label="Enter your name" type="text" placeholder="">
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm12 md12>
							<v-text-field v-model="user.email" label="Enter your Email" type="email" placeholder="">
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm12 md12>
							<v-text-field v-model="user.password" label="Enter your Password" type="password" placeholder="">
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm12 md12>
							<v-text-field v-model="user.cnfpassword" label="Confirm your Password" type="password" placeholder="">
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout justify-center>
						<v-btn round large dark type="submit" color="green">Submit</v-btn>
					</v-layout>
				</v-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	methods: {
		closeDialog() {
			this.$emit('close-dialog')
		}
	},
	data() {
		return {
			user: {
				username:'',
				name: '',
				email: '',
				password: '',
				cnfpassword: ''
			}
		}
	}
}
</script>

<style scoped lang="scss">
.form
{
	height: 100%;
	position: fixed;
	width: 600px;
}
</style>
