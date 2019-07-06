<template>
	<v-container class="form">
		<v-card>
			<v-card-title>
				LOGIN FORM
				<v-spacer></v-spacer>
				<v-btn flat @click="closeDialog">
					<v-icon>close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<v-form ref="form" method="post" id="form-signup" @submit.prevent="addUser">
					<v-layout row wrap>
						<v-flex xs12 md12 sm12>
							<v-text-field v-model="user.username" prepend-icon="person" label="Enter your Username/Email Address" type="text" placeholder="">
							</v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm12 md12>
							<v-text-field v-model="user.password" prepend-icon="lock" label="Enter your Password" type="password" placeholder="">
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
