<script>
	export let type = 'primary';
	export let size = 'medium';
</script>

<div class="tw-rounded tw-w-max tw-text-sm {type} {size}"><slot /></div>

<style>
	.primary {
		background-color: rgba(191, 219, 254, 0.2);
		color: rgb(59, 130, 246);
		border: 1px solid rgb(59, 130, 246);
	}
	.success {
		background-color: rgba(167, 243, 208, 0.2);
		color: rgb(16, 185, 129);
		border: 1px solid rgb(16, 185, 129);
	}
	.warning {
		background-color: rgba(252, 211, 77, 0.2);
		color: rgb(245, 158, 11);
		border: 1px solid rgb(245, 158, 11);
	}
	.danger {
		background-color: rgba(252, 165, 165, 0.2);
		color: rgb(220, 38, 38);
		border: 1px solid rgb(220, 38, 38);
	}
	.small {
		padding: 1px 2px;
	}
	.medium {
		padding: 2px 4px;
	}
	.large {
		padding: 4px 8px;
	}
</style>
