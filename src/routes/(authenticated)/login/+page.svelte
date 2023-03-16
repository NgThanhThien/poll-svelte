<script>
	import { goto } from '$app/navigation';
	import { signIn } from '../../../stores/UserStore';

	const fields = { email: '', password: '' };
	const errors = { email: '', password: '' };
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

		return valid;
	};
	const signin = async () => {
		if (validate()) {
			const data = await signIn({ email: fields.email, password: fields.password });
			if (!data?.error) location.href = '/';
		}
	};
</script>

<section class="tw-py-10 tw-min-h-80-screen tw-bg-gray-50">
	<div class="tw-w-96 tw-mx-auto">
		<h1 class="tw-text-gray-700 tw-font-medium tw-text-2xl">Login</h1>
		<div class="tw-mt-10">
			<div class="tw-text-xl" />
			<form class="tw-mt-8 tw-space-y-4" on:submit|preventDefault={signin}>
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

				<div class="tw-flex tw-justify-center">
					<button
						class="tw-border tw-px-10 tw-py-2 tw-overflow-hidden tw-rounded-sm tw-inline-block tw-text-center tw-w-40 hover:tw-bg-purple-500 hover:tw-text-white tw-transition-all tw-duration-200"
						>Login</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
