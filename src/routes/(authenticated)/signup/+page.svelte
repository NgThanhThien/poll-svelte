<script>
	import { signUp } from '../../../stores/UserStore';

	let showModal = false;
	const toggleModal = () => (showModal = !showModal);
	const fields = { email: '', password: '', verifyPassword: '' };
	const errors = { email: '', password: '', verifyPassword: '' };

	let valid = false;

	const validate = () => {
		valid = true;
		if (fields.email.trim().length < 1) {
			errors.email = 'Email is too short';
			valid = false;
		} else {
			valid = true;
			errors.email = '';
		}
		if (fields.password.trim().length < 6) {
			errors.password = 'Password must be more than 6 characters';
			valid = false;
		} else {
			valid = true;
			errors.password = '';
		}
		if (
			fields.verifyPassword.trim().length > 6 &&
			fields.password.trim() != fields.verifyPassword.trim()
		) {
			errors.verifyPassword = 'Verify password is not same as password';
			valid = false;
		} else {
			valid = true;
			errors.verifyPassword = '';
		}
		return valid;
	};
	const signup = async () => {
		if (validate()) {
			const data = await signUp({ email: fields.email, password: fields.password });
			if (!data?.error) toggleModal();
		}
	};
</script>

<section class=" tw-py-10 tw-min-h-80-screen tw-bg-gray-50">
	<div class="tw-w-96 tw-mx-auto">
		<h1 class="tw-text-gray-700 tw-font-medium tw-text-2xl">SignUp</h1>
		<div class="tw-mt-10">
			<form class="tw-mt-8 tw-space-y-4" on:submit|preventDefault={signup}>
				<div class="tw-w-full tw-flex-col tw-flex tw-space-y-1 tw-text-left">
					<label for="email">Email</label>
					<input
						class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
						type="text"
						id="email"
						placeholder="email"
						bind:value={fields.email}
					/>
					{#if errors.email}
						<span class="tw-text-red-400 tw-mt-1">{errors.email}</span>
					{/if}
				</div>
				<div class="tw-w-full tw-flex-col tw-flex tw-space-y-1 tw-text-left">
					<label for="password">Password</label>
					<input
						class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
						type="password"
						id="password"
						placeholder="Password"
						bind:value={fields.password}
					/>
					{#if errors.password}
						<span class="tw-text-red-400 tw-mt-1">{errors.password}</span>
					{/if}
				</div>
				<div class="tw-w-full tw-flex-col tw-flex tw-space-y-1 tw-text-left">
					<label for="verifyPassword">Verify Password</label>
					<input
						class="tw-px-2 tw-border tw-h-10 tw-border-gray-300 tw-rounded-sm"
						type="password"
						id="verifyPassword"
						placeholder="verifyPassword"
						bind:value={fields.verifyPassword}
					/>
					{#if errors.verifyPassword}
						<span class="tw-text-red-400 tw-mt-1">{errors.verifyPassword}</span>
					{/if}
				</div>
				<div class="tw-flex tw-justify-center">
					<button
						class="tw-border tw-px-10 tw-py-2 tw-overflow-hidden tw-rounded-sm tw-inline-block tw-text-center tw-w-40 hover:tw-bg-indigo-500 hover:tw-text-white tw-transition-all tw-duration-200"
						>SignUp</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
