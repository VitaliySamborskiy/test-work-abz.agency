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

export { validatePhoto };
