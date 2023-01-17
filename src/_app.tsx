export type TApp = React.PropsWithChildren;

const App: React.FC<TApp> = ({ ...rest }) => {
	return (
		<div {...rest}>
      Start
		</div>
	);
};

export default App;
