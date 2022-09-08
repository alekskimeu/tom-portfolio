import { projects } from "../data/projects";

export function getProjectData(id) {
	const project = projects.filter(
		(project) => project.title.split(" ").join("-").toLowerCase() === id
	);
	return {
		id,
		project,
	};
}

export function getAllProjectIds() {
	return projects.map((project) => {
		return {
			params: {
				id: project.title.split(" ").join("-").toLowerCase(),
			},
		};
	});
}
