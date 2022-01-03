type HeadingProps = {
	children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps): JSX.Element => {
	return <div>{children}</div>;
};

export default Heading;
