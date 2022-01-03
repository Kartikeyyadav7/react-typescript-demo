type DisplayProps = {
	name: string;
	age?: number;
	alive: boolean;
	parents: {
		father: string;
		mother: string;
	};
	hobbies: string[];
	profession: "Developer" | "Designer" | "Youtuber";
};

const Display = ({
	name,
	age = 25,
	alive,
	parents,
	hobbies,
	profession,
}: DisplayProps): JSX.Element => {
	let professionDescription;
	if (profession === "Developer") {
		professionDescription =
			"sitting all day infront of the computer trying to figure out the bug";
	} else if (profession === "Designer") {
		professionDescription =
			"sitting all day infront of the computer trying to let the client understand his design process is better";
	} else if (profession === "Youtuber") {
		professionDescription =
			"sitting all day infront of the computer trying to edit that particular footage";
	}
	return (
		<div>
			<div>
				Hello {name}, you are {age} years old
			</div>
			<div>Status {alive ? "Alive" : "Dead"}</div>
			<div>
				Parents names are {parents.father} and {parents.mother}{" "}
			</div>
			{hobbies.map((hobbies) => (
				<ul>
					<li>{hobbies}</li>
				</ul>
			))}

			<div>
				Profession {profession} and what he/she does is {professionDescription}
			</div>
		</div>
	);
};

export default Display;
