function validatePhoto(fileList: FileList | string): string | boolean {
	if (typeof fileList === "string") {
		return "value is not a file";
	}

	if (fileList.length === 0) {
		return "No file selected";
	}

	const file = fileList[0];

	if (!["image/jpeg", "image/jpg"].includes(file.type)) {
		return "Photo must be jpg/jpeg format";
	}

	if (file.size > 5 * 1024 * 1024) {
		return "Photo size must not exceed 5MB";
	}

	return true;
}

function validateMinSize(fileList: FileList | string): Promise<string | boolean> {
	return new Promise(resolve => {
		const img = new Image();

		if (typeof fileList === "string" || fileList.length === 0) {
			resolve("Invalid file input");
			return;
		}

		img.src = URL.createObjectURL(fileList[0]);

		img.onload = () => {
			const isValid = img.width >= 70 && img.height >= 70;
			URL.revokeObjectURL(img.src);

			if (isValid) {
				resolve(true);
			} else {
				resolve("The image cannot be smaller than 70 x 70 pixels.");
			}
		};

		img.onerror = () => {
			resolve("Invalid image file");
		};
	});
}

export { validatePhoto, validateMinSize };
