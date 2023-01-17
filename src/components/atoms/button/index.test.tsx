import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { checkA11y } from 'test/test-utils';
import Button, { TButton } from './'

describe('~/components/atoms/button', () => {
  afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkA11y(container);
	});

	test('should render', async () => {
		setupTest();
		const component = screen.getByText('Component');
		expect(component).toBeTruthy();
	});
})

type TestOverrides = {
	props?: Partial<TButton>;
};

const getDefaultProps = (overrides: Partial<TButton> = {}): TButton => ({
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}) => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
    <Button {...props}>{props.children ?? 'Component'}</Button>
	);
	return {
		...utils,
		props,
	};
};