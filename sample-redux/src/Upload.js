import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
	const [file, setFile] = useState(null);

	const changeFile = (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};

	const submit = () => {
		const formData = new FormData();
		formData.append("file", file, file.name);
		axios
			.post("http://localhost:8789/user/avatar", formData, {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvYW5nbG9uZ3BoaTIxQGdtYWlsLmNvbSIsIl9pZCI6IjYwN2Q5NzE1YTdiNGQ2MWQ0NGUzZTc0OCIsImlhdCI6MTYyMjQ2ODczMn0.y1Pc_k4jaIVFVntgKXtDk_2eNJMhHh03MurOZ6c97pg",
				},
			})
			.then((res) => {
				console.log("Upload successfully");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div>File Upload</div>
			<input type="file" onChange={changeFile} />
			<button onClick={submit}>Submit</button>
		</div>
	);
}
